import {View, Text, Image, FlatList, StyleSheet} from "react-native";

const filmes = [
    {
        id: "1",
        titulo: "Devoradores de Estrelas",
        genero: "ficção-científica",
        nota: "10.0",
        imagem: "https://pt.wikipedia.org/wiki/Project_Hail_Mary_%28filme%29",
        descricao: "O professor de ciências Ryland Grace acorda em uma nave espacial sem nenhuma lembrança de quem é ou como chegou lá. Conforme sua memória retorna lentamente, ele logo descobre que deve resolver o enigma por trás de uma misteriosa substância que está fazendo o sol se apagar."
    },
    {
        id: "2",
        titulo: "Matrix",
        genero: "ficção-científica",
        nota: "7.6",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEgVwl1xZOMFE9vKahfKA0yAE_zY9X5AQkYxeinxrsNro74VRY8AHR0rC&s=10",
        descricao: "Uma realidade simulada usada por máquinas para dominar a humanidade"
    },
    {
        id:"3",
        titulo: "Nem que a Vaca Tussa",
        genero: "animação",
        nota: "9.5",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdWpM6F6nFkvE0tcryvnH7FTgItESbjzdO08nhXyd-6FrWcQE96qr4I62&s=10",
        descricao: "Após um aviso de despejo, três vacas tentam capturar um bandido para receber a recompensa e, assim, ajudar a dona da fazenda."
    },
    {
        id: "4",
        titulo: "Minha Mãe é uma Peça",
        genero: "comédia",
        nota: "10.0",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/da/Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg/250px-Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        descricao: "Dona Hermínia é uma senhora de meia-idade, divorciada do marido, que a trocou por uma mulher mais jovem. Hiperativa, ela não larga do pé de seus filhos, Marcelina e Juliano. Um dia, após descobrir que eles a consideram chata, ela resolve sair de casa sem avisar ninguém, deixando todos preocupados."
    },
    {
        id: "5",
        titulo: "Guardiões da Galáxia Vol. 3",
        genero: "Ação",
        nota: "10.0",
        imagem: "https://m.media-amazon.com/images/M/MV5BZWE2MTA1Y2QtMDc1Ni00ODZhLTg1MTYtMTQ1ZGJlMDBmYmIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        descricao: "Peter Quill deve reunir sua equipe para defender o universo e proteger um dos seus. Se a missão não for totalmente bem-sucedida, isso pode levar ao fim dos Guardiões."
    },
    {
        id: "6",
        titulo: "UP! Altas Aventuras",
        genero: "animação",
        nota: "8.0",
        imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg",
        descricao: "Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. Carl quer viajar para uma floresta na América do Sul, onde ele e Ellie sempre desejaram morar, mas descobre que um problema embarcou junto: Russell, um menino de 8 anos."
    },
    {
        id: "7",
        titulo: "A Odisseia",
        genero: "Ficção",
        nota: "9.9",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54E_1pDL5YQv7Mgn4Qo4HAqQcPnkeY563TQS6v47Wu5Ex_F1b5Kpton4B&s=10",
        descricao: "Odisseu, rei de Ítaca, embarca em uma jornada para retornar para casa após a Guerra de Troia."
    }
];

export default function ListaDeFilmesScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.titulo}>Sugestões de Filmes</Text>
                    <Text style={styles.subtitulo}>Ideias que você pode gostar</Text>
                </View>
            </View>
            <FlatList
            data={filmes}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.lista}

                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.imagem }} style={styles.imagem}/>
                        <View style={styles.informacoes}>
                            <View style={styles.tituloContainer}>
                                <Text style={styles.nome}>{item.titulo}</Text>
                            </View>
                                <Text style={styles.genero}>{item.genero}</Text>
                                <View style={styles.notaContainer}>
                                    <Text style={styles.estrela}>★</Text>
                                    <Text style={styles.nota}>{item.nota}</Text>
                                </View>
                            <Text style={styles.descricao} numberOfLines={2}>{item.descricao}</Text>

                        </View>

                    </View>
                )}

            />

        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#F7FAFE",
        padding: 10,
    },

    header:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },

    titulo:{
        fontSize: 22,
        fontWeight: "bold",
        color: "#740049"
    },

    subtitulo:{
        fontSize: 13,
        color: "#7890A5"
    },

    lista:{
        paddingHorizontal: 10,
        paddingBottom: 100
    },

    card: {
        width: "100%",
        height: 160,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        shadowColor: "#410126",
        },
    imagem:{
        width: 85,
        height: 125,
        borderRadius: 7,
    },

     informacoes: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "center",
    },
    tituloContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    nome:{
        fontSize: 12,
        fontWeight: "bold",
        color: "#17324D"
    },

    genero:{
        fontSize:9,
        color: "#7890A5",
        marginTop: 5,
    },

    notaContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },

    estrela:{
        fontSize: 10,
        color: "#F4B942",
        marginRight: 3,
    },

    nota:{
        fontSize: 12,
        fontWeight: "bold",
        color: "#42566A",
    },

    descricao:{
        fontSize: 12,
        color: "#64788B",
        lineHeight: 20,
        marginTop: 10,
    },
})