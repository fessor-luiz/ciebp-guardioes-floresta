const cartasJogo = {
    comuns: [{
        id: 'povos-originarios',
        imgPath: 'src/img/povos-originarios.png',
        title: "Povos Originários",
        actionPoints: 2,
        description: "Aqueles que coexistem com a natureza ao seu redor sem abusar",
        bonus: "",
        rarity: "bg-dark",
        fontColor: "text-white"
    },
    {
        id: 'plantar-arvore',
        imgPath: 'src/img/plantar-arvore.jpg',
        title: "Plantar árvore",
        actionPoints: 2,
        description: "Uma árvore pode fazer a diferença!",
        bonus: "",
        rarity: "bg-dark",
        fontColor: "text-white"
    },
    {
        id: 'caminhar-pedalar',
        imgPath: 'src/img/bicicleta.jpg',
        title: "Caminhar ou Pedalar",
        actionPoints: 2,
        description: "Meios sustentáveis de locomoção sem poluição.",
        bonus: "",
        rarity: "bg-dark",
        fontColor: "text-white"
    },
    {
        id: 'apagar-luzes',
        imgPath: 'src/img/luzes.jpg',
        title: "Apagar as Luzes",
        actionPoints: 2,
        description: "Economize energia desligando o que não está em uso.",
        bonus: "",
        rarity: "bg-dark",
        fontColor: "text-white"
    },
    {
        id: 'evitar-plasticos',
        imgPath: 'src/img/plasticos.jpg',
        title: "Evitar Plásticos",
        actionPoints: 2,
        description: "Escolha reutilizáveis ao invés de descartáveis.",
        bonus: "",
        rarity: "bg-dark",
        fontColor: "text-white"
    },
    ],
    raras: [{
        id: 'reciclagem',
        imgPath: 'src/img/simbolo-da-reciclagem.jpg',
        title: "Reciclagem",
        actionPoints: 5,
        description: "(RE)utilizar, (RE)ciclar e (RE)duzir!",
        bonus: "",
        rarity: "bg-danger",
        fontColor: "text-dark"
    }, {
        id: 'coleta-seletiva',
        imgPath: 'src/img/coleta-seletiva.jpg',
        title: "Coleta Seletiva",
        actionPoints: 5,
        description: "Separar resíduos corretamente facilita a reciclagem.",
        bonus: "",
        rarity: "bg-danger",
        fontColor: "text-dark"
    },
    {
        id: 'economia-agua',
        imgPath: 'src/img/economia-agua.jpg',
        title: "Economia de Água",
        actionPoints: 5,
        description: "Evitar desperdícios preserva esse recurso essencial.",
        bonus: "",
        rarity: "bg-danger",
        fontColor: "text-dark"
    },
    {
        id: 'educacao-ambiental',
        imgPath: 'src/img/educacao-ambiental.jpg',
        title: "Educação Ambiental",
        actionPoints: 5,
        description: "Conscientização para transformar atitudes e hábitos.",
        bonus: "",
        rarity: "bg-danger",
        fontColor: "text-dark"
    },],
    lendarias: [{
        id: 'cultura-maker',
        imgPath: 'src/img/maker.jpg',
        title: "Cultura Maker",
        actionPoints: 10,
        description: "Aprender criando, testando e botando a mão na massa.",
        bonus: "",
        rarity: "bg-warning"
    },
    {
        id: 'cultura-digital',
        imgPath: 'src/img/cultura-digital.jpg',
        title: "Cultura Digital",
        actionPoints: 10,
        description: "Integração da tecnologia digital ao cotidiano social e cultural",
        bonus: "",
        rarity: "bg-warning"
    },
    {
        id: 'prototipagem',
        imgPath: 'src/img/prototipagem.jpg',
        title: "Prototipagem",
        actionPoints: 10,
        description: "Criação e teste de objetos em formatos digitais e físicos 3D.",
        bonus: "",
        rarity: "bg-warning"
    },
    {
        id: 'robotica',
        imgPath: 'src/img/robotica.jpeg',
        title: "Robótica",
        actionPoints: 10,
        description: "Tecnologia que automatiza tarefas e soluciona desafios humanos.",
        bonus: "",
        rarity: "bg-warning"
    }]
}

const listaCartas = []

export default cartasJogo