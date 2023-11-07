import './style.css'

class Product {
  constructor(public name: string, public price: number, public productCode: string) {}
}

document.addEventListener('DOMContentLoaded', () => {
  const productForm = document.getElementById('product-form') as HTMLFormElement;
  const productList = document.getElementById('product-list') as HTMLTableSectionElement;

  productForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('name') as HTMLInputElement;
      const priceInput = document.getElementById('price') as HTMLInputElement;
      const productCodeInput = document.getElementById('productCode') as HTMLInputElement;

      if (nameInput.checkValidity() && priceInput.checkValidity() && productCodeInput.checkValidity()) {
          const name = nameInput.value;
          const price = parseFloat(priceInput.value);
          const productCode = productCodeInput.value;

          const product = new Product(name, price, productCode);

          const row = productList.insertRow();
          const nameCell = row.insertCell(0);
          const priceCell = row.insertCell(1);
          const productCodeCell = row.insertCell(2);

          nameCell.textContent = product.name;
          priceCell.textContent = product.price.toString();
          productCodeCell.textContent = product.productCode;

          nameInput.value = '';
          priceInput.value = '';
          productCodeInput.value = '';
      }
  });
});
