$.ajax({
    'async': false,
    'global': true,
    'url': "",
    'dataType': "json",
    'success': function(data) {
        basic = data
    }
});

$(".searchbar span").on("click", function(event) {
    $("#blurred").append("<div class='blurred'></div>");
    $("#blurred").css("display","block")
})

$(".searchbar span").on("click", function(event) {
    $(".sections").css({"display":"inline-block"});
    $(".searchbar span").hide();
})

$(document).mouseup(function(event) {
    var sections = $(".sections");
    var blurred = $(".blurred");
    var menu = $(".searchbar span");
    if (!sections.is(event.target) && sections.has(event.target).length === 0) {
        sections.hide();
        blurred.hide();
        menu.show();
    }
});

$(document).ready(function() {
    $("#filterInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".item").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

sections = ["Back","Hat Pack","Wing Pack","Critter Suit Pack","Accessories Pack","Clothes Pack","Clothes Item","Quest","Virus","Dungeon Pack","Track Pack","Kitchen Pack","Ocean Pack","Sci-fi Pack","Steampunk Pack","Adventure Pack","Fishing Pack","April Fools' Day","Easter","Valentine's Day","Summer","Fan","Halloween","Thanksgiving","Christmas","Farm Pack","Wands","New Year's Day","Slymecorp Pack","Chess Pack"];
sections.sort()

for (section in sections) {
    $("#menu").append(`<div class="sections"><h1>${sections[section]}</h1></div>`);
}

wearables = ["Hat Pack","Wing Pack","Critter Suit Pack","Accessories Pack","Clothes Pack","Clothes Item","Quest","Virus","Dungeon Pack","Track Pack","Kitchen Pack","Ocean Pack","Sci-fi Pack","Steampunk Pack","Adventure Pack","Fishing Pack","April Fools' Day","Easter","Valentine's Day","Summer","Fan","Halloween","Thanksgiving","Christmas","Farm Pack","Wands","New Year's Day","Slymecorp Pack","Chess Pack"]

for (item in basic) {
    color = {"Stable":"5px solid #ffffff","Increasing":"5px solid #1fc44b","Decreasing":"5px solid #c41a1a"};
    name = basic[item]["item"]["name"]+"<br>"+basic[item]["item"]["price"]["min"].toLocaleString()+"<b> - </b>"+basic[item]["item"]["price"]["max"].toLocaleString()
    img = basic[item]["item"]["url"].replace("wearables/","").replace("cars/","");

    for (wearable in wearables) {
        if (basic[item]["type"]["section"] == wearables[wearable].toUpperCase()) {
            $("#wearables_prices").append(`<div style="border-bottom: ${color[basic[item]["item"]["state"]]}" class='item'><span class='${img} sprite'></span><p>${name}</p></div>`)
        }
    }
    if (basic[item]["type"]["section"] == "CARS") {
        img = basic[item]["item"]["url"].replace("cars/","car_");
        $("#cars_prices").append(`<div style="border-bottom: ${color[basic[item]["item"]["state"]]}" class='item'><span class='${img} sprite'></span><p>${name}</p></div>`)
    }
}

$(".sections h1").click(function() {
    tittle_section = $(this).text();
    id_section = $(this).text().toLowerCase().replace(/' /gi,"").replace(/ /gi,"_").replace(/'s/gi,"").replace(" ","_");
    $(".all_prices").append(`<div id=${id_section} class="list"><h1 class="header"><img src="images/icon_cubits.png">${tittle_section}<img src="images/icon_cubits.png"></h1></div>`);
    $(".searchbar span").show();
    for (section in basic) {
        color = {"Stable":"5px solid #ffffff","Increasing":"5px solid #1fc44b","Decreasing":"5px solid #c41a1a"};
        name = basic[section]["item"]["name"]+"<br>"+basic[section]["item"]["price"]["min"].toLocaleString()+"<b> - </b>"+basic[section]["item"]["price"]["max"].toLocaleString()
        img = basic[section]["item"]["url"].replace("wearables/","").replace("cars/","");        
        if (basic[section]["type"]["section"] == $(this).text().toUpperCase()) {
            $("#"+id_section).append(`<div style="border-bottom: ${color[basic[item]["item"]["state"]]}" class='item'><span class='${img} sprite'></span><p>${name}</p></div>`);
            $(".sections").hide();
            $("#wearables_prices").hide();
            $("#cars_prices").hide();
            $("#blurred").hide();
        }
    }

    if ($(this).text() == "Back") {
        $("#wearables_prices").show();
        $("#cars_prices").show();
        $("#"+id_section).remove();
        $(".searchbar p").hide();
        $(".sections").hide();
        $("#blurred").hide();
    }

    $(".sections h1").mouseup(function(event) {
        $("#"+id_section).remove();
    })
})
