import express from "express";
//Define portas (não usar portas abaixo de 1024)
const port=5000;
const host="0.0.0.0"; // Sua host, interfaces

const app=express();

//Para permitir minha aplicação posso manipular parâmetros estão na url
app.use(express.urlencoded({extended: true}));

app.get("/",(requisicao,resposta)=>{
    resposta.send(`
    <html>
<head>

</head>
<body>
<h1>Hello World</h1>
</body>
    </html>
     `);
     resposta.end();
})

// Aplicação servidora
app.listen(port,host,  function(){
console.log("Ta rodando parceiro");
});


