const { json } = require("express");

var users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

module.exports = {
  search: (req, res) => {
    let result = [];
    // Lấy giá trị tìm kiếm
    const name = req.query.name;
    if (!name) {
      console.log("Get all!");
      result = users;
    } else {
      console.log("Search!");
      result = users.filter((user) => {
        return user.name.toLowerCase().includes(name.toLowerCase());
      });
    }
    return res.status(200).json({
      message: "Successfully!",
      sussess: true,
      code: 200,
      users: result,
    });
  },
  create: (req, res) => {
    const { name, email, phone } = req.body;
    const body = req.body;

    console.log("req", req);
    console.log("body", body);
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Vui lòng điền đầy đủ thông tin!",
        sussess: false,
        code: 400,
      });
    }
    const user = {
      id: users.length + 1,
      name,
      email,
      phone,
    };
    users.push(user);
    return res.status(200).json({
      message: "Successfully!",
      sussess: true,
      code: 200,
      data: user,
    });
  },
  update: (req, res) => {
    // B1: Kiểm tra xem ID có không, ...
    // B2: Tìm kiếm bản ghi ứng với id, ...
    // B3: Cập nhật thông tin bản ghi với thông tin người dùng muốn update
    // const newUser = {
    //   ...user
    // };
    // B4: Dùng api get detail để kiểm tra lại
    // const id = req.params.id;
    const { id, name, email, phone } = req.body;
    console.log("id", id);
    if (!id) {
      return res.status(400).json({
        message: "Không tìm thấy id người dùng!",
        success: false,
        code: 400,
      });
    }

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Vui lòng nhập đầy đủ thông tin",
        success: false,
        code: 400,
      });
    }

    const user = users.find((user) => user.id == id);
    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy người dùng này, vui lòng kiểm tra lại!",
        success: false,
        code: 404,
      });
    }

    users = users.map((user) => {
      if (user.id == id) {
        return {
          ...user,
          name: name,
          email: email,
          phone: phone,
        };
      }
      return user;
    });

    res.status(200).json({
      message: "Cập nhật thành công!",
      success: true,
      code: 200,
    });
  },
  view: (req, res) => {
    const id = req.params.id;
    console.log("id: " + id);
    if (!id) {
      return res.status(404).json({
        message: "Không có id, vui lòng kiểm tra!",
        sussess: false,
        code: 404,
      });
    }

    const user = users.filter((user) => user.id == id);
    if (user) {
      return res.status(200).json({
        message: "Successfully!",
        sussess: true,
        code: 200,
        data: user,
      });
    } else {
      return res.status(404).json({
        message: "Không tìm thấy người dùng, vui lòng kiểm tra!",
        sussess: false,
        code: 404,
        data: null,
      });
    }
  },
  delete: (req, res) => {
    // ../users/[id]
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    console.log("user: " + JSON.stringify(user));
    if (!user) {
      return res.status(404).json({
        message: "Không tồn tại người dùng này, vui lòng kiểm tra lại!",
        sussess: false,
        code: 404,
      });
    }
    users = users.filter((user) => user.id != id);
    res.status(200).json({
      message: "Xóa thành công",
      sussess: true,
      code: 200,
      users: users,
    });
  },
};
