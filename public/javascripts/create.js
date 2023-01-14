function postAxios() {

      event.preventDefault();
      const formData = new FormData(document.querySelector('form'));

      axios.post('/api/products',
      {
        name : formData.get('name'),
        price : formData.get('price'),
        description : formData.get('description'),
        color : formData.get('color'),
        quantity : formData.get('quantity')
      })
      .then(processResults);
}

function processResults({ data }) {
  document.querySelector("form").reset();
  window.alert(`${data.name} added with id: ${data.id} successfully`);
}
