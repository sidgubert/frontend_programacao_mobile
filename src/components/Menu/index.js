import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Toast from "react-native-simple-toast"

import ruasEstaticas from "../../assets/dicionarios/ruas.json";
import avatar from "../../assets/imgs/avinor.jpeg";

import {
    Avatar, 
    NomeEmpresa,
    ContenedorMenu,
    DivisorMenu, 
    EsquerdaDaMesmaLinha,
    
} from "../../assets/styles";




export default class Menu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            atualizar: true, 
            filtrar: props.filtragem
        }
    }

    mostrarRua = (rua) => {
        const { filtrar } = this.state;

        return(
            <TouchableOpacity onPress={() => {
                filtrar(rua);
            }}>
                <DivisorMenu />
                <EsquerdaDaMesmaLinha>
                    <Avatar source={avatar} />
                    <NomeEmpresa>{rua.name}</NomeEmpresa>
                </EsquerdaDaMesmaLinha>
            </TouchableOpacity>
        );
    }




    render = () => {
        const ruas = ruasEstaticas.ruas;

        return(
            <SafeAreaInsetsContext.Consumer>
                {insets => 
                    <ScrollView style={{ paddingTop: insets.top }}>
                        
                        <ContenedorMenu>
                            {ruas.map((rua) => this.mostrarRua(rua))}
                        </ContenedorMenu>
                    </ScrollView>
                }
            </SafeAreaInsetsContext.Consumer>
        );
    }

}