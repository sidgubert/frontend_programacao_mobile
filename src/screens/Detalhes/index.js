import React  from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import CardView from 'react-native-cardview';
import feedsEstaticos from '../../assets/dicionarios/feeds.json';
import {
    NomeEmpresa,
    Rua,
    Informações,
    Espacador,
    EsquerdaDaMesmaLinha
} from '../../assets/styles.js';
import Icon from 'react-native-vector-icons/AntDesign';
import slide1 from '../../assets/imgs/slide1.jpg';
import slide2 from '../../assets/imgs/slide2.jpg';
import slide3 from '../../assets/imgs/slide3.jpg';


export default class Detalhes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedId: this.props.navigation.state.params.feedId,
            feed: null
        }
    }

    
    carregarFeed = () => {
        const { feedId } = this.state;

        const feeds = feedsEstaticos.feeds;
        const feedsFiltrados = feeds.filter((feed) => feed.id === feedId);
        if (feedsFiltrados.length) {
            this.setState({
                feed: feedsFiltrados[0]
            });
        }

    }

    

    componentDidMount = () => {
        this.carregarFeed();

    }
    mostrarSlides = () => {
        const slides = [ slide1, slide2, slide3 ];

        return(
            <SliderBox
                dotColor={"#ffad05"}
                inactiveDotColor={"#5995ed"}

                resizeMethod={"resize"}
                resizeMode={"cover"}

                dotStyle={{
                    width: 15,
                    height: 15, 

                    borderRadius: 15,
                    marginHorizontal: 5
                }}
                
                images={slides} />
        )
    }
    render = () => {
        const {feed} = this.state;
       
        if (feed){
            return(
                
                <CardView
                    cardElevation={2}
                    cornerRadius={0}>
                    {this.mostrarSlides() }
                    <NomeEmpresa>{feed.company}</NomeEmpresa>
                    <Rua>{feed.rua} {feed.galpao}</Rua>
                    <Informações>Quantidade Alojada: {feed.quantidade}</Informações>
                    <Informações>Mortalidade: {feed.mortalidade}</Informações>
                    <Informações>Descrição: {feed.descricao}</Informações>
                    <Informações>Data Alojamento: {feed.alojado}</Informações>
                    <Informações>Fornecedor: {feed.fornecedor}</Informações>
                    <Informações>Resoponsável Técnico: {feed.responsaveltecnico}</Informações>
                    <EsquerdaDaMesmaLinha>
                            
                    <Icon name="message1" size={26} onPress={
                                    () => {
                                        this.props.navigation.navigate("Comentarios",
                                            { feedId: feed.id,
                                                empresa: feed.company,
                                                rua: feed.rua })
                                    }
                                }/>
                                </ EsquerdaDaMesmaLinha>
     
                </CardView>
                
        
            );

        }else {
            return(null);
        }
    }
}