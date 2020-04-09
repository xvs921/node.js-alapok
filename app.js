//console.log("PROCESS: ",process)  -> fájlhoz tartozó adatok kiírása

/*EXPORT
const {sum}=require('./helpers');
const http=require('http');

const server=http.createServer((req,res)=>{
	res.end("hello world from node js real update");
});

server.listen(3000);

const total=sum(10,200);
console.log("TOTAL:",total)*/

/*12 NPM
npm init   ->cmd-be pm hozzáadásához
npm run dev -> frissíti az oldalt magától a nodemon segítségével*/

/*13 EXPRESS
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
	res.send("hey whats up from express");
});

app.listen(3000);*/

//15 EVENT LOOP
const fs=require('fs');
const fileName="target.txt";

const errHandler=(err)=>console.log(err);
const DataHandler=data=>console.log(data.toString());

//16 ASZINKRON
fs.readFile(fileName, (err,data) => {
    if(err) errHandler(err);
    DataHandler(data);
});

/*17 SZINKRON
const data=fs.readFileSync(fileName);
console.log(data.toString());*/

//fs.watch(fileName,()=>console.log('File changed!'));

console.log("Node js async programming...?");