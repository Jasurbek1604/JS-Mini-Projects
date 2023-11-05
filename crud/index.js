let data = [
  {
    id: 1,
    first: "Jasurbek",
    last: "Otelbayev",
    email: "jasurdev1604@gmail.com",
    phone: "+998935960246",
    location: "Tashkent",
    hobby: "Coding",
  },
  {
    id: 2,
    first: "Jasurbek",
    last: "Otelbayev",
    email: "jasurdev1604@gmail.com",
    phone: "+998935960246",
    location: "Tashkent",
    hobby: "Coding",
  },
  {
    id: 3,
    first: "Jasurbek",
    last: "Otelbayev",
    email: "jasurdev1604@gmail.com",
    phone: "+998935960246",
    location: "Tashkent",
    hobby: "Coding",
  },
  {
    id: 4,
    first: "Jasurbek",
    last: "Otelbayev",
    email: "jasurdev1604@gmail.com",
    phone: "+998935960246",
    location: "Tashkent",
    hobby: "Coding",
  },
  {
    id: 5,
    first: "Jasurbek",
    last: "Otelbayev",
    email: "jasurdev1604@gmail.com",
    phone: "+998935960246",
    location: "Tashkent",
    hobby: "Coding",
  },
];

function* generatorFunc() {
  let id = data.length + 1;
  while (1) {
    yield ++id;
  }
}

let gen = generatorFunc();

const onDelete = (id) => {
  data = data.filter((e) => e.id !== id);
};

const addItem = (first, last, email, phone, location, hobby) => {
  data = [
    ...data,
    {
      id: gen.next().value,
      first,
      last,
      email,
      phone,
      location,
      hobby,
    },
  ];
};

// addItem("none", "none", "none", "none", "none", "none");

const update = (none) => {
  data = data.map((item) => {
    if (item.id === none.id) {
      return { ...item, [none.type]: none.value };
    } else {
      return item;
    }
  });
};

update({ id: 3, type: "hobby", value: "none" });

console.log(data);
