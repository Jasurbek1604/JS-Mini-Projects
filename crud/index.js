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

function* g() {
  i = data.length;
  while (1) {
    yield ++i;
  }
}
let gen = g();

const getData = (data) => {
  data.map((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.first}</td>
    <td>${item.last}</td>
    <td>${item.email}</td>
    <td>${item.phone}</td>
    <td>${item.location}</td>
    <td>${item.hobby}</td>
    <td>
      <button onclick = "edit(${item.id})" class="btn bg-warning text-light">Edit</button>
      <button onclick="onDel(${item.id})" class="btn bg-danger text-light">Delete</button>
    </td>
      `;
    tbody.appendChild(tr);
  });
};

getData(data);

function onDel(id) {
  tbody.innerHTML = null;
  data = data.filter((e) => e.id !== id);
  getData(data);
}

function add() {
  if (
    first.value !== "" &&
    last.value !== "" &&
    email.value !== "" &&
    phone.value !== "" &&
    loc.value !== "" &&
    hobby.value !== ""
  ) {
    data = [
      ...data,
      {
        id: gen.next().value,
        first: first.value,
        last: last.value,
        email: email.value,
        phone: phone.value,
        location: loc.value,
        hobby: hobby.value,
      },
    ];
    tbody.innerHTML = "";
    getData(data);
    first.value = "";
    last.value = "";
    email.value = "";
    phone.value = "";
    loc.value = "";
    hobby.value = "";
  } else {
    alert("no input");
  }
}

function edit(id) {
  tbody.innerHTML = null;
  data = data.map((item) => {
    let tr = document.createElement("tr");
    if (item.id === id) {
      tr.innerHTML = `
        <td>${id}</td>
        <td><input class="form-control" value="${item.first}" type="text"/></td>
        <td><input class="form-control" value="${item.last}" type="text"/></td>
        <td><input class="form-control" value="${item.email}" type="text"/></td>
        <td><input class="form-control" value="${item.phone}" type="text"/></td>
        <td><input class="form-control" value="${item.location}" type="text"/></td>
        <td><input class="form-control" value="${item.hobby}" type="text"/></td>
        <td>
          <button onclick="save()" class="btn bg-success text-light">Save</button>
          <button onclick="cancle()" class="btn bg-warning text-light">Cancle</button>
        </td>
      `;
    } else {
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.first}</td>
        <td>${item.last}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.location}</td>
        <td>${item.hobby}</td>  
        <td>
          <button onclick = "edit(${item.id})" class="btn bg-warning text-light">Edit</button>
          <button onclick="onDel(${item.id})" class="btn bg-danger text-light">Delete</button>
        </td>
      `;
    }
    tbody.appendChild(tr);
    return item;
  });
}

function cancle() {
  tbody.innerHTML = "";
  getData(data);
}

function save() {}
