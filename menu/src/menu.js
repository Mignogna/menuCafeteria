import cheeseBreadImg from "./assets/image/snacks/bread.jpeg";
import sandwichImg from "./assets/image/snacks/sandwich.jpg";
import crepeImg from "./assets/image/snacks/crepe.webp";
import saltyPieImg from "./assets/image/snacks/saltyPie.jpg";

import brownieImg from "./assets/image/desserts/brownie.jpg";
import acaiImg from "./assets/image/desserts/acai.jpeg";
import fruitSaladImg from "./assets/image/desserts/fruitSalad.jpeg";
import iceCreamImg from "./assets/image/desserts/iceCream.jpeg";

import minWaterImg from "./assets/image/drinks/min_water.jpg";
import juicesImg from "./assets/image/drinks/juices.jpeg";
import sodaCansImg from "./assets/image/drinks/soda_cans.png";
import milkShakeImg from "./assets/image/drinks/milkShake.jpeg";

const cheeseBread = {
  nome: "Pão de Queijo",
  preco: "R$ 12,00/each",
  imagem: cheeseBreadImg,
  descricao: "The most tasting Cheese Bread orign from Brazil.",
};
const sandwich = {
  nome: "Sandwich",
  preco: "R$ 29,00",
  imagem: sandwichImg,
  descricao:
    "Delicious sandwich made with integral bread, lettuce, vegetables, mayonnaise and tuna.",
};
const crepe = {
  nome: "Crepe",
  preco: "R$ 34,90",
  imagem: crepeImg,
  descricao: "Sweet, Salty or Vegetarian Crepe.",
};
const saltyPie = {
  nome: "Salty Pie",
  preco: "R$ 25,00",
  imagem: saltyPieImg,
  descricao:
    "Piece of salty pie with your choice of vegetables or chicken filling.",
};

const brownie = {
  nome: "Brownie",
  preco: "R$ 10,00",
  imagem: brownieImg,
  descricao:
    "Sweet.Si Brownie with your choice of dulce de leche, Nutella, or dark chocolate filling.",
};
const acai = {
  nome: "Açaí Bowl",
  preco: "R$ 30,00",
  imagem: acaiImg,
  descricao:
    "Acai bowls are a healthy and refreshing snack, made with acai berries, granola, yogurt, and some fruits.",
};
const fruitSalad = {
  nome: "Fruit Salad",
  preco: "R$ 34,90",
  imagem: fruitSaladImg,
  descricao: "A mix of seasonal fruits with honey and yogurt.",
};
const iceCream = {
  nome: "Ice Cream",
  preco: "R$ 28,00",
  imagem: iceCreamImg,
  descricao: "Multiple choices of flavors.",
};

const minWater = {
  nome: "Mineral Water",
  preco: "R$ 8,00",
  imagem: minWaterImg,
  descricao: "500ml",
};

const juices = {
  nome: "Juices",
  preco: "R$ 18,90",
  imagem: juicesImg,
  descricao: "Orange, Pineapple or Red Fruit juices.",
};
const sodaCans = {
  nome: "Soda Cans",
  preco: "R$ 12,90",
  imagem: sodaCansImg,
  descricao: "Coke, Sprite, Fanta or Guaraná - 350ml",
};
const milkShake = {
  nome: "Milk Shake",
  preco: "R$ 25,00",
  imagem: milkShakeImg,
  descricao: "Chocolate, Strawberry or Vanilla flavors - 355ml",
};

export const snacks = [sandwich, cheeseBread, saltyPie, crepe];

export const desserts = [brownie, acai, fruitSalad, iceCream];

export const drinks = [minWater, sodaCans, juices, milkShake];
