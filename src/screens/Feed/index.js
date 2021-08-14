import React from 'react';
import feedsEstaticos from "../../assets/dicionarios/feeds.json";
import { View, FlatList } from 'react-native';
import FeedCard from "../../components/FeedCard";
import { Header } from 'react-native-elements';
import DrawerLayout from 'react-native-drawer-layout';
import  Icon  from 'react-native-vector-icons/AntDesign';
import Menu from "../../components/Menu";


import {
    EntradaNomeProduto,
    CentralizadoNaMesmaLinha
    } from "../../assets/styles";


const FEEDS_POR_PAGINA =3 ;

export default class Feeds extends React.Component{ 

    constructor (props) {
        super(props);

        this.filtrarPorRua = this.filtrarPorRua.bind(this);

        this.state = {
            proximaPagina : 0,
            feeds: [],
            atualizando: false,
            fornecedor: null,
            carregando: false,
            rua: null

        };

    }
    carregarFeeds = () => {
        const {  proximaPagina, feeds, fornecedor, ruaEscolhida } = this.state;

        //avisa que esta carregando
        this.setState({
            carregando : true
        });

        if(ruaEscolhida){
            const maisFeeds = feedsEstaticos.feeds.filter((feed) =>
            feed.id == ruaEscolhida.id);
           

            this.setState({
                feeds: maisFeeds,
                atualizando: false, 
                carregando: false

                
            })
        }else if(fornecedor){
            const maisFeeds = feedsEstaticos.feeds.filter((feed) =>
                feed.fornecedor.toLowerCase().includes(fornecedor.toLowerCase()));

                this.setState({
                    feeds: maisFeeds,
                    atualizando: false, 
                    carregando: false
                })
        }else{
        //Carregar o total de feeds por pagina da pagina atual
        const idInicial = proximaPagina * FEEDS_POR_PAGINA + 1;
        const idFinal = idInicial + FEEDS_POR_PAGINA - 1;
        const maisFeeds = feedsEstaticos.feeds.filter((feed) => feed.id >= idInicial &&
            feed.id <= idFinal);
        if (maisFeeds.length) {
            console.log("adicionando "+ maisFeeds.length + "feeds");
            this.setState({
                proximaPagina : proximaPagina + 1,
                feeds: [...feeds, ...maisFeeds],
                atualizando : false,
                carregando : false
    
            });
        } else {
            this.setState({
                atualizando : false,
                carregando : false

             })
            }   
        }
        //Incrementar pagina e guardar os feeds
        // const maisFeeds = feedsEstaticos.feeds;

    }

    componentDidMount = () => {
        this.carregarMaisFeeds();
    }

    carregarMaisFeeds = () => {
        const {carregando} = this.state;
        if (carregando){
            return;
        }
        this.carregarFeeds();

    }
    atualizar = () => {
        this.setState({atualizando: true, feeds: [], proximaPagina: 0, fornecedor: null, ruaEscolhida: null},
                () => {
                    this.carregarFeeds();
                });


    }
    mostrarFeed = (feed) => {
        
        return(
            <FeedCard feed = {feed} navegador={this.props.navigation}/>
        );

    }

    atualizarNomeFornecedor = (nome) => {
        console.log("nome do fornecedor "+ nome);
        this.setState({
            
            fornecedor: nome
        })
    }
    mostrarBarraPesquisa = () => {
        const {fornecedor} = this.state;

        return(
            <CentralizadoNaMesmaLinha>
                <EntradaNomeProduto
                onChangeText={(nome) => {this.atualizarNomeFornecedor(nome)}}
                    value={fornecedor}>
                    
                </EntradaNomeProduto>
                <Icon style={{ padding: 8 }} size={20} name="search1"
                    onPress={
                        () => {
                            this.carregarFeeds();
                        }  
                    }> </Icon>
            
             </CentralizadoNaMesmaLinha>
        )
    }

    mostraMenu = () => {
        
        this.menu.openDrawer();

    }

    filtrarPorRua = (rua) => {
        this.setState({
            ruaEscolhida: rua
        }, () => {
            this.carregarFeeds();
        })

        this.menu.closeDrawer();
    }
    mostrarFeeds = (feeds) => {
        const { atualizando } = this.state;
        return(
            <DrawerLayout
                drawerWidth={250}
                drawerPosition={DrawerLayout.positions.Left}

                ref={drawerElement => {
                    this.menu = drawerElement
                }}
                renderNavigationView={()=> <Menu filtragem={this.filtrarPorRua}/>}
                
                >
                <Header
                    leftComponent={
                        <Icon size={28} name="menuunfold" onPress={() => {
                            this.mostraMenu();
                            
                        }} />
                    }

                    centerComponent={

                        this.mostrarBarraPesquisa()

                    }
                    rightComponent={
                        <></>

                    }
                >

                </Header>
                    <FlatList
                    data={feeds}

                    numColumns={1}
                    onEndReached = {() => this.carregarMaisFeeds()}
                    onEndReachedThreshold = {0.1}
                    onRefresh={() => this.atualizar()}
                    refreshing={atualizando}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => {
                        return(
                            <View style={{width: '100%'}}>
                                        {this.mostrarFeed(item)}

                            </View>
                        )
                    }}
                    >
                    </FlatList>
            </DrawerLayout>
        );
    }
    render = () => {
        const {feeds} = this.state;
        if (feeds.length){
            console.log("Exibindo "+ feeds.length);
            return(
                this.mostrarFeeds(feeds)
            );
        }else
            return(null);
    }
}