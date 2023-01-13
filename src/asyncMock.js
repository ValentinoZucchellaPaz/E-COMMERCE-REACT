const products = [
    {
        id:1,
        name:'karategi outshock',
        price:15000,
        martialArt:'karate',
        category: 'ropa',
        img:'https://imgs.search.brave.com/5vIAHhP2ukXulNcCPIksDzn2JjA5LwMJ-56b7laqcdU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/UVFtZXBiMFR0eFFB/bTdrNjQtb1RRSGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'ropa de karate',
        longDescription:'Ropa para practicar karate, tela media fina, talle 52 (180cm), perfecto para la practica de karate tradicional. Incluye: Chaqueta + Pantalón + Cinturón Blanco'
    },
    {
        id:2,
        name:'guantes venum',
        price:15000,
        martialArt:'boxing',
        category: 'guantes',
        img:'https://imgs.search.brave.com/tk2fpyzVLWALII-3jqKLLgcgEB4JEjO49vpOuN0xWqA/rs:fit:394:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/MWw3QnNvemk5MkxR/UEZMZC1BRnlRSGFJ/NSZwaWQ9QXBp',
        stock:10,
        description:'guantes de boxeo',
        longDescription:'Guantes de boxeo Venum de 12 onzas negros. Posee una correa con abrojo de 8 cm, garantizando una óptima sujeción.'
    },
    {
        id:3,
        name:'bucal venum',
        price:1800,
        martialArt:'boxing',
        category: 'ropa',
        img:'https://imgs.search.brave.com/ngSJiwIQwo2NdPB_tbai1kx9U94AlzCQWuPzH1efot8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/ZjZFcll3VHViOUo5/WExuSElHWnVnSGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'bucal de boxeo',
        longDescription:'Bucal de boxeo Venum de gel con buen agarre para mordida'
    },
    {
        id:4,
        name:'vendas',
        price:1200,
        martialArt:'boxing',
        category: 'ropa',
        img:'https://imgs.search.brave.com/lFQcK26bdaPju9bYrwsL5ilafXBrMD2ga5wvfRYSWU0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aExLaFZhSHVaWTFl/ZmE4NTFnTExRSGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'vendas de boxeo',
        longDescription:'Vendas de boxeo de 3 metros y 6 cm de ancho con abrojo y agarre de dedo pulgar para una correcta fijación. Materiales: poliéster 65% / algodón 35%.'
    },
    {
        id:5,
        name:'tibiales venum',
        price:9000,
        martialArt:'kick-boxing',
        category: 'combate',
        img:'https://imgs.search.brave.com/RNeSyM4yIEZ5PpdkODAvlEZmUdeov__acOH-EoUv_uc/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/dnhFR0E0NEM2eVc0/U3NST213X05RSGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'tibiales de kick-boxing',
        longDescription:'Tibiales de Kick-Boxing de densidad de espuma ideal para el entrenamiento seguro y un excelente sistema de cierre para una mayor comodidad.'
    },
    {
        id:6,
        name:'guantes everlast',
        price:17000,
        martialArt:'boxing',
        category: 'guantes',
        img:'https://imgs.search.brave.com/RZ02Q-Kr6GVqdf3bL2EcHPpSMI6NuFw9K7nl3bogxXc/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/TmR4MV9ER0NPcG1z/elJfcE1ocm9BSGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'guantes de boxeo',
        longDescription:'Guantes de boxeo de 14 onzas con relleno de poliuretano inyectado de alto impacto. Brinda seguridad y protección en el entrenamiento/sparring. Posee una correa con abrojo de 8 cm, garantizando una óptima sujeción.'
    },
    {
        id:7,
        name:'guantes mma everlast',
        price:9000,
        martialArt:'mma',
        category: 'guantes',
        img:'https://imgs.search.brave.com/Cr-1_uAuMUlQIMiIVffyYCTwAuOJ6VmT8rddMwdcBUE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/M0FFX0ZYcTBnWU4t/elNUcDFwVDl3SGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'guantes de mma',
        longDescription:'Guantes de MMA confeccionados en cuero sintéctico de alta calidad. Ofrecen gran durabilidad y mayor funcionalidad, con correa en muñequera con soporte excepcional. Tecnología EverFresh de tratamiento antimicrobiano que combate el crecimiento de bacterias y ayuda a evitar los malos olores.'
    },
    {
        id:8,
        name:'guantes karate dbr',
        price:6500,
        martialArt:'karate',
        category: 'guantes',
        img:'https://imgs.search.brave.com/91z8zQS9bo113ilrCdEVm21GiTjQvXqeMt-Bsr1Lqgc/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/QkJOc2R5VWJpM3VS/eU1kYjNRbC1RSGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'guantes de karate competitivo',
        longDescription:'Guantes de Karate competitivo homologado palma abierta con punta de Dedos cubiertos. Molde de espuma interior inyectada de alta densidad y ajuste fácil con sistema de sujeción de abrojo y elástico. Perfecto para el competidor profesional.'
    },
    {
        id:9,
        name:'nunchakus',
        price:3000,
        martialArt:'karate',
        category: 'combate',
        img:'https://imgs.search.brave.com/TZHX7VfYWwuswcXpxQgLbs2EGaaqI6PBi73IaErItRo/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/YVpKN1RObm1CSVR1/RENXTUtKWnFRSGFI/YSZwaWQ9QXBp',
        stock:10,
        description:'nunchakus de karate/kobudo',
        longDescription:'Nunchakus fabricados en las mejores y mas resistentes maderas de peso balanceado. Exelentes y bellas terminaciones, combinando diferentes maderas. Se entrega con estuche.'
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
    }, 800))
}
export const getMartialArts = () =>{
    return new Promise((resolve, reject) => setTimeout(()=>{
        resolve(martialArts)
    }, 800))
}
export const getProductsById = (id) => {
    return new Promise((resolve, reject) => setTimeout(()=>{
        resolve(products.find(prod=> prod.id == id))
    }, 800))
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => setTimeout(()=>{
        resolve(products.filter(prod=> prod.category === category))
    }, 200))
}