document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const socket =io();
    const productlist = document.getElementById("product-list");


    if (!form) {
      console.error('No se encontró el formulario con id="form"');
      return;
    }

  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      const product={
        title: form.title.value,
        description: form.description.value,
        code: form.code.value,
        price: form.price.value,
        status: form.status.checked ? "on" : "off",
        stock: form.stock.value,
        category: form.category.value,
        thumbnails: [form.thumbnail.value]
      };

     socket.emit("new-product", product)
     console.log("PRODUCTO EMITIDO DESDE REALTIME.JS");
     form.reset()

   });
   
   socket.on("update-products", (products)=>{
    console.log("RECIBIDOS", product.length, "PRODUCTTOS");

   const html = products.map(product => `
    <div class="product-card" style="margin-bottom: 50px;">
      <hr>
      ${product.thumbnails && product.thumbnails.length
        ? `<img src="${product.thumbnails[0]}" alt="Product Image" width="100" height="100">`
        : `<p>NO IMAGE</p>`}
      <p>${product.title}</p>
      <p>${product.price}</p>
      <p>${product.description}</p>
      <button>X</button>
      <hr>
    </div>
  `).join("");

  productContainer.innerHTML = `
    <h2>Lista de productos</h2>
    ${html}
  `;
});
  

form.reset()
})