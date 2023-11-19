var products = [
    { product: 'Pen', material: 'Wood', quantity: 10, price: 20.99 },
    { product: 'Pen', material: 'Resin', quantity: 5, price: 15.49 },
    { product: 'Pen', material: 'Hybrid Wood/Resin', quantity: 8, price: 25.99 },
  ];

  function buildProductTable(products) {
    const table = document.querySelector('tbody');
    let productsHtmlTable = '';

    for (var i = 0; i < products.length; i++) {
      var row = `<tr>
                        <td>${products[i].product}</td>
                        <td>${products[i].material}</td>
                        <td>${products[i].quantity}</td>
                        <td>${products[i].price}</td>
                        </tr>`
      productsHtmlTable += row
    }

    table.innerHTML = productsHtmlTable;
  }

  buildProductTable(products);