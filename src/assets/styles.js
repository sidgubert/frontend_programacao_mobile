import styled from "styled-components/native"

export const Avatar = styled.Image `
    padding: 5px;
    width: 58px;
    height: 45px;
    
`;

export const NomeEmpresa = styled.Text`
    padding: 8px;
    font-size: 16;
    color: #FFA500;

`;

export const Rua = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: #59594a;
`;

export const Galpão = styled.Text`
    font-size: 14;
    color: #59594a;
`;

export const dados = styled.Text`
    font-size: 12;
    color: #59594a;
`;
export const Informações = styled.Text`
    font-size: 12;
    color: #59594a;
`;

export const EntradaNomeProduto = styled.TextInput`
    height: 40px;
    width: 100%;
    background-color: #fff;
    border-color: #c7c7c7;
    border-width: 1;
    border-radius: 8px;
`;

export const CentralizadoNaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: center;
    align-items: center;
`;

export const EsquerdaDaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Espacador = styled.View`
    flexDirection: row;
    padding: 8px;
`;

export const ContenedorMenu = styled.View`
    flex: 1;
    font-size: 18;
    background-color: #fff;
`;

export const DivisorMenu = styled.View`
    marginVertical: 5;
    marginHorizontal: 5;

    border-bottom-width: 1;
    borderColor: #3f6ea3;
`;

export const DivisorComentario = styled.View`
    marginVertical: 5;
    marginHorizontal: 5;

    border-bottom-width: 1;
    borderColor: #3f6ea3;
`;

export const ContenedorComentarios = styled.View`
    flexDirection: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

export const ContenedorComentarioDoUsuario = styled.View`
    background-color: #ffefbd;
`;

export const ContenedorComentarioDeOutroUsuario = styled.View`
    background-color: #eff2f1;
`;

export const EspacadorComentario = styled.View`
    marginVertical: 10;
`;

export const ContenedorNovoComentario = styled.View`
    margin-top: 100;
    align-self: center;
    width: 95%;
    border-color: #7ca982;
    border-width: 1;
    border-radius: 6;
    background-color: #fffcf9;
`;

export const AutorComentario = styled.Text`
    padding: 6px;
    font-size: 16;
    color: #283044;
`;

export const Comentario = styled.Text`
    padding: 6px;
    font-size: 16;
    color: #283044;
`;

export const DataComentario = styled.Text`
    padding: 6px;
    font-size: 16;
    color: #283044;
`;

export const Cabecalho = {
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0
}
