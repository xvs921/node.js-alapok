//console.log("PROCESS: ",process)  -> fájlhoz tartozó adatok kiírása

//EXPORT
const {sum}=require('./helpers');
const http=require('http');

const server=http.createServer((req,res)=>{
	res.end("hello world from node js real update");
});

server.listen(3000);

const total=sum(10,200);
console.log("TOTAL:",total)

/*12 NPM
npm init   ->cmd-be pm hozzáadásához
npm run dev -> frissíti az oldalt magától a nodemon segítségével*/