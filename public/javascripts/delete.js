let productToDelete = null;

document.getElementById('delete').onclick = function(){

  const productId = document.getElementById('product-id').value;

if(!productId){
    document.querySelector('p').innerText = 'No ID provided'
  }
else
  {
    axios.get(`/api/products/${productId}`).then( ({data}) => {
        productToDelete = data;
    });
  axios
    .delete(`/api/products/${productId}`,productToDelete)
    .then(processResult);
  }
}
function processResult({data}) {
  
  window.confirm(`Product deleted!`);
  document.querySelector('product-id').innerText = ''
}
