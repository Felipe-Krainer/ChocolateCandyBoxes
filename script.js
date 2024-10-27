$(document).ready(function() {
    const chocs = [
        {   
            chocName: "Plain Milk",
            description: "Smooth milk chocolate",
            calories: 110,
            ingredients: "Cocoa butter, Milk, Sugar",
            img: "chocs/plain_milk.jpg" 
        },
        {
            chocName: "Plain Dark",
            description: "Dark chocolate",
            calories: 100,
            ingredients: "Cocoa butter, Milk, Sugar",
            img: "chocs/plain_dark.jpg" 
        },
        { 
            chocName: "Plain Supreme",
            description: "Dark chocolate with milk chocolate",
            calories: 90,
            ingredients: "Cocoa butter, Milk, Cream", 
            img: "chocs/plain_hybrid.jpg" 
        },
        {
            chocName: "Nut Butter Cup", 
            description: "Milk chocolate with peanut butter", 
            calories: 130, 
            ingredients: "Cocoa butter, Milk, Peanut Butter", 
            img: "chocs/nutter_butter.jpg" 
        },
        { 
            chocName: "Bailey's Cup", 
            description: "Milk chocolate with Bailey's filling", 
            calories: 90, 
            ingredients: "Cocoa butter, Milk, Bailey's Cream", 
            img: "chocs/baileys_cup.jpg" 
        },
        { 
            chocName: "Rum Barrel", 
            description: "Dark chocolate with rum filling", 
            calories: 110, 
            ingredients: "Cocoa butter, Milk, Rum, Coconut", 
            img: "chocs/rum_barrel.jpg" 
        },
        { 
            chocName: "Orange Fondant", 
            description: "Dark chocolate with orange fondant", 
            calories: 125, 
            ingredients: "Cocoa butter, Milk, Orange zest", 
            img: "chocs/orange_fondant.jpg" 
        },
        { 
            chocName: "Cappuccino Cup", 
            description: "Dark chocolate with coffee filling", 
            calories: 130, 
            ingredients: "Cocoa butter, Milk, Coffee cream", 
            img: "chocs/cappuccino_cup.jpg" 
        },
        { 
            chocName: "Pistachio Diamond", 
            description: "Milk chocolate", 
            calories: 140, 
            ingredients: "Cocoa butter, Milk, Pistachio", 
            img: "chocs/pistachio_diamond.jpg" 
        },
        { 
            chocName: "Toffee Crunch", 
            description: "Dark chocolate with toffee", 
            calories: 130, 
            ingredients: "Cocoa butter, Milk, Toffee", 
            img: "chocs/toffee_crunch.jpg" 
        }
    ];

    chocs.forEach((choc, index) => {
        $('#chocolate-container').append(`
            <div class="chocolate-card" id="choc-${index}">
                <h3>${choc.chocName}</h3>
                <img src="${choc.img}" alt="${choc.chocName}" style="width: 100px; height: auto;">
                <p class="description">${choc.description}</p>
                <p class="calories-content" style="display: none;">
                    ${choc.calories} calories, ingredients: ${choc.ingredients}
                </p>
            </div>
        `);
    });

    $('#random-sample').click(function() {
        const randomIndex = Math.floor(Math.random() * chocs.length);
        const randomCode = Math.floor(Math.random() * 50) + 1;

        $('.chocolate-card').css('background-color', ''); 

        $(`#choc-${randomIndex}`).css('background-color', 'yellow');

        alert(`Your free sample code is: ${randomCode}`);
    });

    $('#toggle-calories').click(function() {
        $('.calories-content').toggle();
    });
});
