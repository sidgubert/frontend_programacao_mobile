import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardImage, CardContent } from 'react-native-cards';
import {
    Avatar,
    NomeEmpresa,
    Rua,
    EsquerdaDaMesmaLinha,
    Informações

} from "../../assets/styles";
import feedsEstaticos from "../../assets/dicionarios/feeds.json";
import avatar from "../../assets/imgs/avinor.jpeg";
import Icon from 'react-native-vector-icons/AntDesign';



export default class FeedCard extends React.Component{
constructor(props){
    super(props);
    this.state = {
        feed: this.props.feed,
        navegador: this.props.navegador
    }
}

render = () => {
    const {feed, navegador} = this.state;
    return (
        <TouchableOpacity onPress={
            
            () => {
                navegador.navigate("Detalhes", { feedId: feed.id})
            }
        }>
            <Card>
                <Avatar source={avatar}/>
                <NomeEmpresa>{feed.company}</NomeEmpresa>
                <CardContent>
                        <Rua>Rua {feed.rua} Galpão {feed.galpao}</Rua>
                        <EsquerdaDaMesmaLinha>
                        <Informações>Data de alojamento: {feed.alojado}</Informações>
                </EsquerdaDaMesmaLinha>
                <EsquerdaDaMesmaLinha>
                        <Informações>Quantidade: {feed.quantidade}</Informações>
                        <Informações>   Fornecedor: {feed.fornecedor}</Informações>
                        
                </EsquerdaDaMesmaLinha>   
                </CardContent>
            </Card>
        </TouchableOpacity>
        );
    }
}