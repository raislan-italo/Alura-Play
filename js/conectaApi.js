async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); // Retorna uma promessa(resolvida ou rejeitada);
    
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}