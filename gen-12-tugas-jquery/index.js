products = [
  {
    id: 1,
    name: 'pensil',
    price: 1000
  },
  {
    id: 2,
    name: 'buku',
    price: 2000
  },
  {
    id: 3,
    name: 'pulpen',
    price: 5000
  },
  {
    id: 4,
    name: 'penggaris',
    price: 3000
  }
]

customers = [
  {
    id: 1,
    name: 'user 1',
    contact: '1234'
  },
  {
    id: 2,
    name: 'user 2',
    contact: '1234'
  }
]

const addElementProduct = () => {
  const div = $('<div></div>')
  div.addClass('product-container')
  let productStr = ''
  products.forEach((element) => {
    productStr += `<option value="${element.id}">${element.name} - ${element.price}</option>`
  })

  const isiDiv = `
  <label for="product">Pilih Produk</label>
  <select name="product" class="product">
    ${productStr}
  </select>
  <label for="qty">Quantity</label>
  <input type="number" name="qty" class="qty" value="1"/>
  <button type="button" class="add-btn">+</button>
  <button type="button" class="remove-btn">-</button>
`
  div.html(isiDiv)

  $('#product-form').append(div)
  $('select').css('width', '50%').select2()
  $(div).children('.add-btn').click(addElementProduct)
  $(div).children('.remove-btn').click(function(){
    removeElementProduct($(this))
  })
  $('.qty').change(calculateTotal)
  $('.product').change(calculateTotal)
  calculateTotal()
}

const removeElementProduct = function (element) {
  $(element).parent().remove()
  calculateTotal()
}

const calculateTotal = () => {
  const containerProduct = $('#product-form').children()
  let total = 0
  const chosenProduct = []
  
  for (const iterator of containerProduct) {
    // console.log($(iterator).children('select').val())
    const id = $(iterator).children('select').val()
    const qty = $(iterator).children('input').val()
    products.forEach(element => {
      if(id == element.id){
        total += element.price*qty
        chosenProduct.push({...element, quantity: qty})
      }
    });
  }
  $('#total').text(`Total: Rp${total}`)
  const result = {
    products: chosenProduct,
    total: total
  }
  return result
}

$(document).ready(function () {
  $('.qty').change(calculateTotal)
  $('.product').change(calculateTotal)
  $('select').css('width', '50%').select2()

  customers.forEach(element => {
    $('#cust-select').append(`<option value="${element.id}">${element.id} - ${element.name}</option>`)
  })
  products.forEach((element) => {
    $('.product').append(`<option value="${element.id}">${element.name} - ${element.price}</option>`)
  })

  $('#new-cust').change(function () {
    $('#new-cust-form').show()
    $('#existing-cust-form').hide()
  })

  $('#existing-cust').change(function () {
    $('#existing-cust-form').show()
    $('#new-cust-form').hide()
  })

  $('.add-btn').click(() => {
    addElementProduct()
  })
  $('.remove-btn').click(function(){
    removeElementProduct($(this))
  })

  $('#submit-btn').click(()=>{
    const newCust = $('#new-cust:checked')
    const existCust = $('#existing-cust:checked')
    
    
    if(newCust.val()){
      const cust = {
        id: customers.length + 1,
        name: $('#cust-name').val(),
        contact: $('#cust-contact').val()
      }
      
      const obj = {
        ...cust,
        ...calculateTotal()
      }
      customers.push(cust)
      console.log(obj)
      $('#cust-select').append(`<option value="${cust.id}">${cust.id} - ${cust.name}</option>`)
    } else if(existCust.val()){
      const id = $('#cust-select').val()
      let cust
      customers.forEach(element => {
        if(element.id == id){
          cust = element
        }
      })
      const obj = {
        ...cust,
        ...calculateTotal()
      }
      console.log(obj) 
    }
  })
  calculateTotal()
})