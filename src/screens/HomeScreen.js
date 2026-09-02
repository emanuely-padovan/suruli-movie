import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CHAVE_FILMES = "@suruli:filmes";

export default function HomeScreen() {
  const [filme, setFilme] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [filmeSorteado, setFilmeSorteado] = useState(null);

  useEffect(() => {
    carregarFilmes();
  }, []);

  async function carregarFilmes() {
    try {
      const dados = await AsyncStorage.getItem(CHAVE_FILMES);
      if (dados) setFilmes(JSON.parse(dados));
    } catch {
      console.log("Erro ao carregar filmes");
    }
  }

  async function salvarFilmes(lista) {
    await AsyncStorage.setItem(CHAVE_FILMES, JSON.stringify(lista));
  }

  async function adicionarFilme() {
    if (!filme.trim()) {
      Alert.alert("Atenção", "Digite um filme!");
      return;
    }

    const novo = {
      id: Date.now().toString(),
      titulo: filme,
    };

    const lista = [...filmes, novo];
    setFilmes(lista);
    await salvarFilmes(lista);
    setFilme("");
  }

  async function removerFilme(id) {
    const lista = filmes.filter((f) => f.id !== id);
    setFilmes(lista);
    await salvarFilmes(lista);
  }

  function sortearFilme() {
    if (filmes.length === 0) {
      Alert.alert("Nenhum filme", "Adicione filmes primeiro.");
      return;
    }

    const sorteado = filmes[Math.floor(Math.random() * filmes.length)];
    setFilmeSorteado(sorteado);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Hora de Selecionar!</Text>
          <Text style={styles.subtitulo}>Sorteie. Assista. Curta! ✨</Text>
        </View>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={
          <>
            <View style={styles.secao}>
              <Text style={styles.tituloSecao}>Adicionar filme</Text>

              <TextInput
                style={styles.input}
                placeholder="Digite o nome do filme..."
                value={filme}
                onChangeText={setFilme}
              />

              <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={adicionarFilme}
              >
                <Text style={styles.textoBotao}>Adicionar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sorteio}>
              <Text style={styles.tituloSorteio}>🎲 Hora de Sortear!</Text>

              <TouchableOpacity
                style={styles.botaoSortear}
                onPress={sortearFilme}
              >
                <Text style={styles.textoBotao}>SORTEAR</Text>
              </TouchableOpacity>

              {filmeSorteado && (
                <View style={styles.resultado}>
                  <Text style={styles.nomeSorteado}>
                    🎬 {filmeSorteado.titulo}
                  </Text>
                </View>
              )}
            </View>

            <Text style={styles.tituloSecao}>
              Meus Filmes ({filmes.length})
            </Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeFilme}>🎬 {item.titulo}</Text>

            <TouchableOpacity onPress={() => removerFilme(item.id)}>
              <Text style={styles.remover}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F7FAFE" 
  },
  header: { 
    padding: 20 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#740049" },
  subtitulo: { color: "#7890A5" 

  },
  lista: { 
    padding: 20 
  },
  secao: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#17324D",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
  },
  botaoAdicionar: {
    backgroundColor: "#740049",
    marginTop: 10,
    borderRadius: 12,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
  sorteio: {
    backgroundColor: "#f0e5ec",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  tituloSorteio: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#740049",
  },
  botaoSortear: {
    backgroundColor: "#740049",
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 12,
    marginTop: 15,
  },
  resultado: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
  },
  nomeSorteado: { 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nomeFilme: { 
    flex: 1, 
    fontSize: 16 
  },
  remover: { 
    fontSize: 20, 
    color: "#C00" 
  },
});
