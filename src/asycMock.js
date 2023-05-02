const products = [
  {
    id: "1",
    name: "NOTEBOOK MAX L4 I1",
    price: 1500,
    // category: notebook,
    img: "https://www.bangho.com.ar/notebook-max-l4-14-hd-intel-celeron-4gb-120gb-ssd-windows-11/p",
    stock: 10,
    description: "NOTEBOOK MAX L4 I1",
  },
  {
    id: "2",
    name: "NOTEBOOK GAMER GM-15Z12 GTX 1650",
    price: 3500,
    // category: notebookGamer,
    img: "https://www.bangho.com.ar/notebook-gamer-gm-15z12-gtx-1650/p",
    stock: 2,
    description: "NOTEBOOK GAMER GM-15Z12 GTX 1650",
  },
  {
    id: "3",
    name: "DISCO DE ESTADO SÓLIDO 480GB SATA",
    price: 150,
    // category: componente,
    img: "https://www.bangho.com.ar/disco-de-estado-solido-480gb/p",
    stock: 20,
    description: "DISCO DE ESTADO SÓLIDO 480GB SATA",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

