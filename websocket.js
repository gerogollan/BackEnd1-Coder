
console.log("archivo cargado");

export default function websocket(io) {
  io.on("connection", (socket) => {
    console.log("Un nuevo cliente se ha conectado");
    console.log("Id del cliente " + socket.id);

  io.emit("message", "bienvenido al servidor de socket.io");


  });


  
}


// io en el servidor - representa el servidor de websocket, 
//puede enviar cosas a todos los clientes conectados


//io en el cliente/navegador -representa el cliente de websocket
//se pueden enviar y recibir mensajes y eventos


//socket en el servidor - representa a un cliente conectado
//se unsa para enviar/escuchar mensajes solo a ese cliente


//socket en el cliente/navegador - representa al servidor de websocket
//se usa para enviar/escuchar mensajes solo a ese servidor