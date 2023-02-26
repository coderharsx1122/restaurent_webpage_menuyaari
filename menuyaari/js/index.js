// gsap js
gsap.from('#navigation',1.5,{
  delay:.2,
  top:'-100%',
  
  backgroundPosition: "1301px 100px"
}
)
gsap.from('#hero-img',2,{
  delay:.9,
  right:'-100%'
}
)
gsap.from('#herotext',2,{
 
  delay:.5,
  left:'-100%'
}
)

// onscroll js
let food_item_content_item_onscroll = document.querySelectorAll('.food-item-content-item')
  window.addEventListener('scroll',()=>{
    food_item_content_item_onscroll.forEach((element)=>{
      if(element.getBoundingClientRect().top < window.innerHeight/1.6){
        element.style.opacity = 1;
        element.style.margin = '6vh 2vh';
        
      }
    })
  })
  
  // navbar scroll js

let navbar = document.getElementById("navigation")
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    navbar.style.backgroundColor = 'white'
    navbar.style.boxShadow = "1px 0 10px rgb(0 0 0/20%)"
  } else {
    navbar.style.backgroundColor = 'transparent'
    navbar.style.boxShadow = "none"
  }
})
// hero dynamic text js
let dynamic_text= document.getElementById('hero-dynamic-text')
let dynamic_text_arr = [
  "Connect",
  "With",
  "Us"
]

let char_index = 0 
 function dis(){
  if(char_index == dynamic_text_arr.length){
    dynamic_text.innerHTML =""
    char_index = 0
  }
  let char_arr = Array.from(dynamic_text_arr[char_index])
  for(let i = 0;i<char_arr.length;i++){
   setTimeout(() => {
    dynamic_text.innerHTML = dynamic_text.innerHTML + char_arr[i]
  }, 200*i);
}
dynamic_text.innerHTML = dynamic_text.innerHTML + '<br>'
 char_index++;
}
setInterval(dis,1500)
//================= hero img js ==========
const imgurl = [
  './images/items/item1/1.jpg',
  './images/items/item2/1.jpg',
  './images/items/item3/1.jpg',
  './images/items/item4/1.jpg',
  './images/items/item5/1.jpg',
  './images/items/item6/1.jpg',
  './images/items/item7/1.jpg'
]
let hero_img1 = document.getElementById('hero-img-1')
let hero_img2 = document.getElementById('hero-img-2')
let hero_img3 = document.getElementById('hero-img-3')
setInterval(()=>{
  hero_img1.style.backgroundImage = `url(${imgurl[Math.floor(Math.random()*imgurl.length)]})`
  // console.log(Math.floor(Math.random()*imgurl.length))
  hero_img2.style.backgroundImage = `url(${imgurl[Math.floor(Math.random()*imgurl.length)]})`
  hero_img3.style.backgroundImage = `url(${imgurl[Math.floor(Math.random()*imgurl.length)]})`

},1000)

// buttons js
let food_item_btn = Array.from(document.querySelectorAll('.food-item-button'))

function remove_food_item_active_btn() {
  food_item_btn.forEach((element) => {
    element.classList.remove('food-item-button-active')
  })
}
food_item_btn.forEach((element, index) => {

  element.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(index)
    remove_food_item_active_btn();
    element.classList.add('food-item-button-active')
    display_content(index);
  })
})
// item display js
let food_item_content = Array.from(document.querySelectorAll('.food-item-content'))
function remove_all_display() {
  food_item_content.forEach((ele) => {
    ele.classList.remove('food-item-content-active')
    ele.classList.add('food-item-content-deactive')
  })
}
function onloadeffect() {
  remove_all_display()
  food_item_content[0].classList.add('food-item-content-active')
  food_item_content[0].classList.remove('food-item-content-deactive')
  let row = food_item_content[0].querySelectorAll('.row')
  row.forEach((e, index_row) => {
    let food_item_content_item = e.querySelectorAll('.food-item-content-item')
    food_item_content_item.forEach((ex, index) => {
      ex.style.backgroundImage = `url(${item[0][index_row][index].img})`
    })
  })
}
function display_content(display_index) {
  // console.log(food_item_content[display_index])
  remove_all_display()
  food_item_content[display_index].classList.add('food-item-content-active')
  food_item_content[display_index].classList.remove('food-item-content-deactive')
  // food_item_content[display_index]



  let row = food_item_content[display_index].querySelectorAll('.row')
  row.forEach((e, index_row) => {
    let food_item_content_item = e.querySelectorAll('.food-item-content-item')
    food_item_content_item.forEach((ex, index) => {
      // console.log(item[display_index][index_row][index].img)
      console.log(display_index, index_row, index)
      ex.style.backgroundImage = `url(${item[display_index][index_row][index].img})`
      // console.log()
    })
  })

}

// restaurent item to display(images) 
const item = [
  // div1
  [
    [
      {
        img: './images/items/item1/1.jpg',

      },
      {
        img: './images/items/item1/2.jpg',

      },
      {
        img: './images/items/item1/3.jpg',

      },
      {
        img: './images/items/item1/4.jpg',

      },
      {
        img: './images/items/item1/5.jpg',

      },
      {
        img: './images/items/item1/6.jpg',

      }
    ]
  ],
  // div2
  [
    [
      {
        img: './images/items/item2/1.jpg',

      },
      {
        img: './images/items/item2/1.jpg',

      },
      {
        img: './images/items/item2/1.jpg',

      },

      {
        img: './images/items/item2/1.jpg',

      },
      {
        img: './images/items/item2/1.jpg',

      },
      {
        img: './images/items/item2/1.jpg',

      }
    ]
  ],
  // div3
  [
    [
      {
        img: './images/items/item3/1.jpg',

      },
      {
        img: './images/items/item3/1.jpg',

      },
      {
        img: './images/items/item3/1.jpg',

      },
      {
        img: './images/items/item3/1.jpg',

      },
      {
        img: './images/items/item3/1.jpg',

      },
      {
        img: './images/items/item3/1.jpg',

      }
    ]
  ],
  // div4
  [
    [
      {
        img: './images/items/item4/1.jpg',

      },
      {
        img: './images/items/item4/1.jpg',

      },
      {
        img: './images/items/item4/1.jpg',

      },
      {
        img: './images/items/item4/1.jpg',

      },
      {
        img: './images/items/item4/1.jpg',

      },
      {
        img: './images/items/item4/1.jpg',

      }
    ]
  ],
  // div5
  [
    [
      {
        img: './images/items/item5/1.jpg',

      },
      {
        img: './images/items/item5/1.jpg',

      },
      {
        img: './images/items/item5/1.jpg',

      },
      {
        img: './images/items/item5/1.jpg',

      },
      {
        img: './images/items/item5/1.jpg',

      },
      {
        img: './images/items/item5/1.jpg',

      }
    ]
  ],
  // div6
  [
    [
      {
        img: './images/items/item6/1.jpg',

      },
      {
        img: './images/items/item6/1.jpg',

      },
      {
        img: './images/items/item6/1.jpg',

      },
      {
        img: './images/items/item6/1.jpg',

      },
      {
        img: './images/items/item6/1.jpg',

      },
      {
        img: './images/items/item6/1.jpg',

      }
    ]
  ],
  // div7
  [
    [
      {
        img: './images/items/item7/1.jpg',

      },
      {
        img: './images/items/item7/1.jpg',

      },
      {
        img: './images/items/item7/1.jpg',

      },
      {
        img: './images/items/item7/1.jpg',

      },
      {
        img: './images/items/item7/1.jpg',

      },
      {
        img: './images/items/item7/1.jpg',

      }
    ]
  ],
  // div8
  [
    [
      {
        img: './images/items/item8/1.jpg',

      },
      {
        img: './images/items/item8/1.jpg',

      },
      {
        img: './images/items/item8/1.jpg',

      },
      {
        img: './images/items/item8/1.jpg',

      },
      {
        img: './images/items/item8/1.jpg',

      },
      {
        img: './images/items/item8/1.jpg',

      }
    ]
  ],
  // div9
  [
    [
      {
        img: './images/items/item9/1.jpg',

      },
      {
        img: './images/items/item9/1.jpg',

      },
      {
        img: './images/items/item9/1.jpg',

      },
      {
        img: './images/items/item9/1.jpg',

      },
      {
        img: './images/items/item9/1.jpg',

      },
      {
        img: './images/items/item9/1.jpg',

      }
    ]
  ],
  // div10
  [
    [
      {
        img: './images/items/item10/1.jpg',

      },
      {
        img: './images/items/item10/1.jpg',

      },
      {
        img: './images/items/item10/1.jpg',

      },
      {
        img: './images/items/item10/1.jpg',

      },
      {
        img: './images/items/item10/1.jpg',

      },
      {
        img: './images/items/item10/1.jpg',

      }
    ]
  ],
  // div11
  [
    [
      {
        img: './images/items/item11/1.jpg',

      },
      {
        img: './images/items/item11/1.jpg',

      },
      {
        img: './images/items/item11/1.jpg',

      },
      {
        img: './images/items/item11/1.jpg',

      },
      {
        img: './images/items/item11/1.jpg',

      },
      {
        img: './images/items/item11/1.jpg',

      }
    ]
  ],
  // div12
  [
    [
      {
        img: './images/items/item12/1.jpg',

      },
      {
        img: './images/items/item12/1.jpg',

      },
      {
        img: './images/items/item12/1.jpg',

      },
      {
        img: './images/items/item12/1.jpg',

      },
      {
        img: './images/items/item12/1.jpg',

      },
      {
        img: './images/items/item12/1.jpg',

      }
    ]
  ],
  // div13
  [
    [
      {
        img: './images/items/item13/1.jpg',

      },
      {
        img: './images/items/item13/1.jpg',

      },
      {
        img: './images/items/item13/1.jpg',

      },
      {
        img: './images/items/item13/1.jpg',

      },
      {
        img: './images/items/item13/1.jpg',

      },
      {
        img: './images/items/item13/1.jpg',

      }
    ]
  ]
]
