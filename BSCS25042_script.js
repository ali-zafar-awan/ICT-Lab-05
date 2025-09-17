function sayHello() {
  alert("Welcome to Ittefaq Coating Processor");
}
sayHello();

document.getElementById("date").innerHTML = new Date().getFullYear();

function availiblity(id) {
  let check = document.getElementById(id).textContent;

  if (check.includes("In Stock")) {
    alert("This product is in stock.");
  } else {
    alert("This product is not in stock.");
  }
}

function validateForm() {
  let email = document.forms["information"]["email"].value;

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

function sendMessage() {
  var input = document.getElementById("user-input").value;
  var chatLog = document.getElementById("chat-log");

  if (input === "") {
    return;
  }

  var userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input;
  chatLog.appendChild(userMsg);

  var botMsg = document.createElement("p");
  botMsg.textContent = "Bot: " + getBotResponse(input.toLowerCase());
  chatLog.appendChild(botMsg);

  document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
 if (input.indexOf("hello") !== -1 || input.indexOf("hi") !== -1) {
    return "Hello! Welcome to Ittefaq Coating Processor. How can I help you?";
  } 
  else if (input.indexOf("how are you") !== -1) {
    return "I'm just a bot, but I'm doing great. Thanks for asking!";
  }
  else if (input.indexOf("about") !== -1 || input.indexOf("what do you do") !== -1) {
    return "We are Ittefaq Coating Processor, a leading manufacturer of coated and uncoated calcium carbonate in Pakistan.";
  }
  else if (input.indexOf("products") !== -1) {
    return "Here are our main products:\n1) Coated Calcium Carbonate (1000 Mesh) – Rs. 30/kg\n2) Coated Calcium Carbonate (1500 Mesh) – Rs. 35/kg\n3) Coated Calcium Carbonate (2500 Mesh) – Rs. 60/kg\n4) Uncoated Calcium Carbonate (1500 Mesh) – Rs. 21/kg\n5) Uncoated Calcium Carbonate (2500 Mesh) – Rs. 30/kg";
  }
  else if (input.indexOf("1000 mesh") !== -1) {
    return "Coated Calcium Carbonate (1000 Mesh) is Rs. 30/kg.";
  }
  else if (input.indexOf("1500 mesh") !== -1) {
    return "We have:\n- Coated Calcium Carbonate (1500 Mesh) – Rs. 35/kg\n- Uncoated Calcium Carbonate (1500 Mesh) – Rs. 35/kg";
  }
  else if (input.indexOf("2500 mesh") !== -1) {
    return "We have:\n- Coated Calcium Carbonate (2500 Mesh) is Rs. 60/kg\n- Uncoated Calcium Carbonate (2500 Mesh) – Rs. 30/kg";
  }
  else if (input.indexOf("price") !== -1) {
    return "Our prices range from Rs. 21/kg to Rs. 60/kg depending on the product and mesh size.";
  }
  else if (input.indexOf("industries") !== -1) {
    return "Our products are used in Plastics, Paints, Paper, Rubber, Adhesives, Construction, Ceramics, Cosmetics and Pharmaceuticals.";
  }
  else if (input.indexOf("packaging") !== -1) {
    return "We offer 25 kg bags, 50 kg bags, jumbo bags (1 ton) and custom packaging.";
  }
  else if (input.indexOf("delivery") !== -1 || input.indexOf("shipping") !== -1) {
    return "Yes, we provide timely and reliable delivery across Pakistan.";
  }
  else if (input.indexOf("contact") !== -1 || input.indexOf("phone") !== -1) {
    return "Call us at +92 300 7680174";
  }
  else if (input.indexOf("email") !== -1) {
    return "Email us at ittefaqcoatingprocessor@gmail.com";
  }
  else if (input.indexOf("address") !== -1 || input.indexOf("location") !== -1) {
    return "We are located at Dera Masjid Wala, Pindi Dass Road, Qila Sattar Shah, Sheikhupura.";
  }
  else if (input.indexOf("bye") !== -1) {
    return "Goodbye! Have a great day.";
  }
  else {
    return "Sorry, I don't understand that. You can ask me about products, prices, industries, packaging, or contact details.";
  }
}
