const products = [
    {
        id:1,
        name:'karategi',
        price:15000,
        category:'karate',
        img:'./images/karategi.webp',
        stock:10,
        description:'ropa de karate'
    },
    {
        id:2,
        name:'guantes venum',
        price:5000,
        category:'boxing',
        img:'./images/guantes-boxeo.webp',
        stock:10,
        description:'guantes de boxeo'
    },
    {
        id:3,
        name:'bucal',
        price:800,
        category:'boxing',
        img:'./images/bucal.webp',
        stock:10,
        description:'bucal de boxeo'
    },
    {
        id:4,
        name:'vendas',
        price:1200,
        category:'boxing',
        img:'./images/vendas.webp',
        stock:10,
        description:'vendas de boxeo'
    },
    {
        id:5,
        name:'tibiales',
        price:9000,
        category:'kick-boxing',
        img:'./images/tibiales.webp',
        stock:10,
        description:'tibiales de kick-boxing'
    },
    {
        id:6,
        name:'guantes everlast',
        price:7000,
        category:'boxing',
        img:'./images/guantes-boxeo-everlast.webp',
        stock:10,
        description:'guantes de boxeo'
    },
    {
        id:7,
        name:'guantes mma',
        price:4000,
        category:'mma',
        img:'./images/guantes-mma.webp',
        stock:10,
        description:'guantes de mma'
    },
    {
        id:8,
        name:'guantes karate',
        price:2500,
        category:'karate',
        img:'./images/guantes-karate.webp',
        stock:10,
        description:'guantes de karate competitivo'
    },
    {
        id:9,
        name:'nunchakus',
        price:3000,
        category:'karate',
        img:'./images/nunchakus.webp',
        stock:10,
        description:'nunchakus de karate/kobudo'
    },
    
    
]

const martialArts = [
    {
      id:1,
      name:'karate',
      img:'https://imgs.search.brave.com/5fe2g-FePlhE0WyXZtNvZs5wIXZO-R8nRvnw4BG-d_o/rs:fit:1000:1077:1/g:ce/aHR0cHM6Ly93d3cu/dG9kYXNsYXNhcnRl/c21hcmNpYWxlcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMTAvS0FSQVRF/LmpwZw',
      description: 'Aprende a defenderte y construye tu autoestima'
    },
    {
      id:2,
      name:'kick-boxing',
      img:'https://imgs.search.brave.com/8_RK2yRoS5Zhiz6VUE2WbbKn2lBbzC6n104mSd7tXdw/rs:fit:948:948:1/g:ce/aHR0cHM6Ly9nby53/cm9jbGF3LnBsL2Fw/aS9kb3dubG9hZC9p/bWctY2I4NzJmOGIy/ZGY3YmQwODRiM2My/YTg0MDI1NjliYzYv/a2ljay1qcGcuanBn',
      description: 'Nuestra técnica es la mejor'
    },
    {
      id:3,
      name:'mma',
      img:'https://imgs.search.brave.com/VfPNS3xCjm7Hvsyy-MFG__JaMCtR2lC0HTIq4FxzQgY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/YmxlYWNoZXJyZXBv/cnQubmV0L2ltZy9p/bWFnZXMvcGhvdG9z/LzAwMi82ODIvNjc3/L1VTQVRTSV83NDQ5/Mjc0X2Nyb3BfZXhh/Y3QuanBnP3c9MTIw/MCZoPTEyMDAmcT03/NQ',
      description: 'Sube a la jaula para pelear con todo'
    },
    {
      id:4,
      name:'boxeo',
      img:'https://imgs.search.brave.com/qqO4RmflX8bdL9XvjkPRdJNiP-bJmZ9oMXVUZq5UD4o/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9naW1u/YXNpb2VzcG9ydHJv/Z2VudC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDMv/Ym94ZW84LTEtMTAy/NHgxMDI0LmpwZw',
      description: 'Golpea sin que te golpeen'
    },
    {
      id:5,
      name:'aikido',
      img:'https://imgs.search.brave.com/uKX2Z2CyJbX3bzcjeRF3HbKlBot1Lb_mZR5ajsJIw-Y/rs:fit:458:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/VUM3NUhNTG1hYmNn/TE10NEoydWRRSGFI/cSZwaWQ9QXBp',
      description: 'Ven a conocer tu cuerpo'
    },
    {
      id:6,
      name:'gimnasio',
      img:'https://imgs.search.brave.com/ncBgJCy3kLpMxyAshe5gVqliTIQgUvepCHvsgBpf3s8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5GOVROZzBn/bzlvN3A4NW5SNUtk/Smx3SGFFOCZwaWQ9/QXBp',
      description: 'El mejor staff y equipamientos para que entrenes'
    }
  ];

export const getProducts = () =>{
    return new Promise((resolve, reject) => setTimeout(()=>{
        resolve(products)
    }, 1000))
}
export const getMartialArts = () =>{
    return new Promise((resolve, reject) => setTimeout(()=>{
        resolve(martialArts)
    }, 1000))
}