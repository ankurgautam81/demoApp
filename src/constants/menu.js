const menu_categories = [
  {
    category_id: 0,
    name: "Boards",
    url_path: "boards/10",
    image_url: "bras-catalog-banner.jpg",
    menu_children: [
      {
        category_id: 1,
        name: "Maharashtra",
        url_path: "/board/maharashtra/1",
        image_url: null
      },
      {
        category_id: 10,
        name: "U.P",
        url_path: "/board/up/10",
        image_url: null
      },
      {
        category_id: 20,
        name: "West Bengal",
        url_path: "/board/west-bengal/20",
        image_url: null
      }
    ]
  },
  {
    category_id: 100,
    name: "Engineerings",
    url_path: "engineerings/100",
    image_url: "panties-catalog-banner.jpg",
    menu_children: [
      {
        category_id: 101,
        name: "Mumbai",
        url_path: "/engineering/mumbai/101",
        image_url: null
      },
      {
        category_id: 121,
        name: "Pune",
        url_path: "/engineering/pune/121",
        image_url: "Landing-page--Panty-value-packs.jpg"
      }
    ]
  },
  {
    category_id: 200,
    name: "ICSI",
    url_path: "icsi/200",
    image_url: "nightwear-catalog-banner.jpg",
    menu_children: [
      {
        category_id: 201,
        name: "VIEW ALL",
        url_path: "/nightwear/201",
        image_url: null
      },
      {
        category_id: 211,
        name: "Babydolls",
        url_path: "/nightwear/babydoll-teddy/211",
        image_url: null
      }
    ]
  },
  {
    category_id: 300,
    name: "ICAI",
    url_path: "icai",
    image_url: null,
    menu_children: [
      {
        category_id: 301,
        name: "VIEW ALL",
        url_path: "/swimwear/301",
        image_url: null
      },
      {
        category_id: 311,
        name: "Swimsuits",
        url_path: "/swimwear/swimsuits/311",
        image_url: null
      }
    ]
  },
  {
    category_id: 400,
    parent_id: 2,
    position: 6,
    level: 0,
    name: "Shape",
    url_path: "/shape/400",
    image_url: null,
    menu_children: []
  }
]

const sub_menu = [
  {
    parent_id: 1,
    name: "Maharashtra",
    url_path: "maharashtra/1",
    image_url: "bras-catalog-banner.jpg",
    menu_children: [
      {
        category_id: 2,
        name: "SSC",
        url_path: "/maharashtra/ssc/2",
        image_url: null
      },
      {
        category_id: 3,
        name: "HSC",
        url_path: "/maharashtra/hsc/3",
        image_url: null
      },
      {
        category_id: 4,
        name: "ITI",
        url_path: "/maharashtra/iti/4",
        image_url: null
      },
      {
        category_id: 5,
        name: "DIPLOMA",
        url_path: "/maharashtra/diploma/5",
        image_url: null
      }
    ]
  },
  {
    parent_id: 10,
    name: "U.P",
    url_path: "up/10",
    image_url: "bras-catalog-banner.jpg",
    menu_children: [
      {
        category_id: 11,
        name: "SSC",
        url_path: "/up/ssc/11",
        image_url: null
      },
      {
        category_id: 12,
        name: "HSC",
        url_path: "/up/hsc/12",
        image_url: null
      },
      {
        category_id: 13,
        name: "ITI",
        url_path: "/up/iti/13",
        image_url: null
      },
      {
        category_id: 14,
        name: "DIPLOMA",
        url_path: "/up/diploma/14",
        image_url: null
      }
    ]
  },
  {
    parent_id: 20,
    name: "West-Bengal",
    url_path: "west-bengal/20",
    image_url: "bras-catalog-banner.jpg",
    menu_children: [
      {
        category_id: 21,
        name: "SSC",
        url_path: "/west-bengal/ssc/21",
        image_url: null
      },
      {
        category_id: 22,
        name: "HSC",
        url_path: "/west-bengal/hsc/22",
        image_url: null
      },
      {
        category_id: 23,
        name: "ITI",
        url_path: "/west-bengal/iti/23",
        image_url: null
      },
      {
        category_id: 5,
        name: "DIPLOMA",
        url_path: "/west-bengal/diploma/24",
        image_url: null
      }
    ]
  },
]


export { menu_categories, sub_menu }