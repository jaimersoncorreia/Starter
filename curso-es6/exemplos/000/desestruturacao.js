const usuario = {
    nome: "jaimerson",
    idade: 34,
    endereco: {
        cidade: "Rio do Sul",
        estado: "SC"
    }
};

console.log(usuario);

const {
    nome,
    idade,
    endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostrarNome({ nome, idade }) {
    console.log(nome, idade);
}
mostrarNome(usuario);
