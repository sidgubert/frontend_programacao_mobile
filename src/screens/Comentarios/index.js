import React from 'react';
import { FlatList, Text, Modal, TextInput, Alert } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/AntDesign";


import { 
    Avatar,     
    Cabecalho,     
    CentralizadoNaMesmaLinha, 
    NomeProduto,

    AutorComentario,
    ContenedorComentarios,
    ContenedorComentarioDoUsuario,
    ContenedorComentarioDeOutroUsuario,
    Comentario,
    EspacadorComentario, 
    DataComentario, 
    DivisorComentario,
    ContenedorNovoComentario,
    Espacador
} from '../../assets/styles';
import comentariosEstaticos from "../../assets/dicionarios/comentarios.json";
import avatar from "../../assets/imgs/avinor.jpeg";
import { View } from 'react-native';

const COMENTARIOS_POR_PAGINA = 5;
const TAMANHO_MAXIMO_COMENTARIO = 100;

export default class Comentarios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedId: this.props.navigation.state.params.feedId,
            empresa: this.props.navigation.state.params.empresa,
            rua: this.props.navigation.state.params.rua,
            
            comentarios: [],
            proximaPagina: 0,
            textoNovoComentario: "",

            carregando: false,
            atualizando: false,
            telaAdicaoVisivel: false
        }

   
        
    }



    componentDidMount = () => {
        
    }

    carregarComentarios = () => {
        const { feedId, comentarios, proximaPagina } = this.state;

        this.setState({
            carregando: true
        });

        const idInicial = proximaPagina * COMENTARIOS_POR_PAGINA + 1;
        const idFinal = idInicial + COMENTARIOS_POR_PAGINA - 1;

        const maisComentarios = comentariosEstaticos.comentarios.filter(
            (comentario) => comentario.id >= idInicial &&
            comentario._id <= idFinal && comentario.feed === feedId);

            if (maisComentarios.length) {
            this.setState({
                proximaPagina: proximaPagina + 1,
                comentarios: [...comentarios, ...maisComentarios],

                atualizando: false,
                carregando: false
            });
        } else {
            this.setState({
                atualizando: false,
                carregando: false
            })
        }
    }
 mostrarComentarios = () => {
        const { comentarios, atualizando } = this.state;
        

        return(
           
            <ContenedorComentarios>
                    <FlatList
                        data = {comentarios}

                        onEndReached = { () => {this.carregarMaisComentarios();} }
                        onEndReachedThreshold = { 0.1 }

                        onRefresh = { () => {this.atualizar();} }
                        refreshing = { atualizando }

                        keyExtractor = { (item) => String(item.id) }
                        />
                </ContenedorComentarios>
        )

 }
    render = () => {

        const { comentarios } = this.state;

        if (comentarios) {
            return(
                <>
                    { this.mostrarComentarios() }
                    
                </>);
        } else {
            return null;
        }
      
    }


}

