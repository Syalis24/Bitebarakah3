document.addEventListener('DOMContentLoaded', function () {

  const dessertOptions = {
    malay: [
      "Ondeh-Ondeh",
      "Kuih Lapis",
      "Seri Muka",
      "Kuih Ketayap",
      "Kuih Kaswi",
      "Kuih Cara Manis"
    ],
    cold: [
      "Mango Pudding",
      "Sago Gula Melaka",
      "Cendol",
      "Strawberry Ice Blended",
      "Fruit Jelly Cups",
      "Chocolate Ice-Cream"
    ],
    cute: [
      "Hanami Dango",
      "Ichigo Daifuku",
      "Kyaraben",
      "Unicorn Cupcakes",
      "Berry Tarts"
    ],
    others: [
      "Fudgy Brownies",
      "Chocolate Chip Cookies",
      "Mini Cheesecakes",
      "Banana Bread",
      "Pandan Cupcakes"
    ]
  };

  const dessertType = document.getElementById('dessertType');
  const dessertDropdown = document.getElementById('dessertItem');

  if (!dessertType || !dessertDropdown) {
    console.error('Dessert dropdown elements not found');
    return;
  }

  dessertType.addEventListener('change', function () {
    const selectedType = this.value;

    dessertDropdown.innerHTML = '<option value="">-- Select Dessert --</option>';

    if (dessertOptions[selectedType]) {
      dessertOptions[selectedType].forEach(function (dessert) {
        const option = document.createElement('option');
        option.value = dessert;
        option.text = dessert;
        dessertDropdown.appendChild(option);
      });
    }
  });

});

const alertBox = document.getElementById('success-alert');

if (alertBox) {
  setTimeout(() => {
    alertBox.style.transition = 'opacity 0.5s ease';
    alertBox.style.opacity = '0';

    setTimeout(() => {
      alertBox.remove();
    }, 500);
  }, 4000);
}
