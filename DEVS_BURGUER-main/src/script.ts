class Product  {
    public product_name: string;
    public value: number;

    constructor (product_name: string, value: number) {
        this.product_name = product_name;
        this.value = value;
    }
}

class Burguer extends Product {
    public igredients: string;
    public isVegan: boolean;

    constructor (product_name: string, value: number, igredients: string, isVegan:boolean) {
        super (product_name, value);
        this.igredients = igredients;
        this.isVegan = isVegan;
    }
}

class Drinks extends Product {
    public type: string;
    public alcoholic: boolean;

    constructor (product_name: string, value: number, type: string, alcoholic:boolean) {
        super (product_name, value);
        this.type = type;
        this.alcoholic = alcoholic;
    }
}

class Client {
    public username: string;
    public address: string;

    constructor (username: string, address: string){
        this.username = username;
        this.address = address;
    }
}
//Variáveis
let isVegan = false
let final_value = 0
let itens = 0;
const products: Product[] = []
const burguer: Burguer[] = []
const drinks: Drinks [] = []
//Objetos
let xegg= new Burguer ('X-Egg',15.99,'Carne, ovo, queijo',false);
let xbacon = new Burguer ('X-Bacon', 17.99,'Carne, bacon, queijo', false);
let xlarica = new Burguer ('X-Larica', 19.90, '2x Carnes, 2x queijos, salada, gergelim',false);
let xsalada = new Burguer ('X-Salada', 16.99, 'Carne, queijo, bacon, salada, gergelim',false);
let xduplo = new Burguer ('X-Duplo', 18.99,'2x Carnes, 2x queijos, picles, gergelim',false);
let xvegan = new Burguer ('X-Vegano', 22.99,'Carne de lentilha, cebola, cheiro verde',true)
let coca = new Drinks ('Coca-Cola', 6.00, 'Refrigerante', false)
let pepsi = new Drinks ('Pepsi', 6.00, 'Refrigerante', false)
let fanta = new Drinks ('Fanta laranja', 5.50, 'Refrigerante', false)

function Fxegg () {
    alert ('X-Egg adicionado ao carrinho');
    final_value += xegg.value;
    burguer.push (xegg);
    itens++
}

function Fxbacon () {
    alert ('X-Bacon adicionado ao carrinho')
    final_value += xbacon.value
    burguer.push (xbacon)
    itens++
}

function Fxduplo () {
    alert ('X-Duplo adicionado ao carrinho')
    final_value += xduplo.value
    burguer.push (xduplo)
    itens++
}

function Fxlarica () {
    alert ('X-larica adicionado ao carrinho')
    final_value += xlarica.value
    burguer.push (xlarica)
    itens++
}

function Fxsalada () {
    alert ('X-salada adicionado ao carrinho')
    final_value += xsalada.value
    burguer.push (xsalada)
    itens++
}

function Fxvegan () {
    alert ('X-Vegano adicionado ao carrinho')
    final_value += xvegan.value
    xvegan.value -= 2.3
    isVegan = xvegan.isVegan
    burguer.push (xvegan)
    itens++
}

function Fcoca () {
    alert ('Coca-Cola adicionada ao carrinho')
    final_value += coca.value
    drinks.push (coca)
    itens++
}

function Fpepsi () {
    alert('Pepsi adicionada ao carrinho')
    final_value += pepsi.value
    drinks.push (pepsi)
    itens++
}

function Ffanta () {
    alert ('Fanta laranja adicionada ao carrinho')
    final_value += fanta.value
    drinks.push (fanta)
    itens++
}

function finalizePurchase () {
    function UserException (message) {
        this.message = message;
        this.name = "UserException";
     }
     
     try {
        if (itens < 1) {
            throw new UserException("O usuário deve adicionar ao menos um item para o carrinho");
        }
        document.write ('<h1>Pedido Finalizado</h1>')
    document.write ('<h3>AVISO! O site está passando por algumas manutenções （︶︿︶）</h3>')
    document.write ('<h3>Pedimos que aguardem as novidades ( ͡° ͜ʖ ͡°)</h3>')
    const username = prompt ('Digite seu nome')
    const address = prompt ('Digite seu endereço')
    let client = new Client (username, address)
    document.write (`<br><h3>Tudo pronto ${client.username}. Agradecemos sua preferência! <br>Seu pedido está pronto para ser entregue ao endereço (${client.address})</h3>`)
    
    if (isVegan) {
        let discount = xvegan.value * 0.10 
        let newValue = final_value - discount;
        document.write (`<br><h3>Valor final do pedido: <s>R$${final_value.toFixed (2)}</s> R$${newValue.toFixed(2)}</h3>`)
    } else {
        document.write (`<br><h3>Valor final do pedido: R$${final_value.toFixed (2)}</h3>`)
    }
    
    document.write (`<h3><br>Informações do pedido</br></h3>`)
    document.write ('-----------------------------------------------------------------')
    for (let index = 0; index < burguer.length; index++) {
        document.write (`<br><b>Hambúrguer:</b> ${burguer[index].product_name}<br>`)
        document.write (`<b>Valor:</b> R$${burguer[index].value.toFixed(2)}<br>`)
        document.write (`<b>Ingredientes:</b> ${burguer[index].igredients}<br>`)
        document.write ('-----------------------------------------------------------------')
    }

    for (let index = 0; index < drinks.length; index++) {
        document.write (`<br><b>Bebida:</b> ${drinks[index].product_name}<br>`)
        document.write (`<b>Valor:</b> R$${drinks[index].value.toFixed(2)}<br>`)
        document.write ('-----------------------------------------------------------------')
    }
     } catch (error) {
         console.log(error.name); //UserException
         console.log(error.message); //O número deve ser inteiro e positivo
         alert(error.message)
     }
}
