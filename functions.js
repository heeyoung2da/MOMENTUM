function sayHello(name) {
    console.log("Hello! my name is "+name);
}

sayHello("nico");
sayHello("heeyoung");

const player = {
    name: "nico",
    sayHello: function (name) {
        console.log("hello! "+name);
    }
}

console.log(player.name);
player.sayHello("heeyoung");

