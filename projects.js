const genMessage = {
    name: ["James", "Robert", "John", "Michael", "William", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth"],
    adjective: ["Good", "Evil", "Neutral", "N/A"],
    CoolorBoring: ["Cool", "Boring"],
    message() {
        let randomName = genMessage.name[Math.floor(Math.random() * genMessage.name.length)]
        let randomAdjective = genMessage.adjective[Math.floor(Math.random() * genMessage.adjective.length)]
        let randomTaste = genMessage.CoolorBoring[Math.floor(Math.random() * genMessage.CoolorBoring.length)]
        //return `${randomName} is a ${randomAdjective} and likes ${randomTaste}s`
        document.getElementById("project_box").innerHTML = `${randomName} is a ${randomAdjective} and likes ${randomTaste}s`;
    },
}

