// 각 값에 의미를 부여하고 싶을 때 object 사용
const player = {
    name: "nico",
    points: 10,
    fat: true
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName = "potato";
console.log(player);
