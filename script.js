function dropdown() 
{
    var e = document.getElementById("zaszlok");
    var result = e.options[e.selectedIndex].value;

    console.log(result);

    if(result == 1)
    {
        document.getElementById('eredmeny').innerHTML += "<img src='kepek/randomkep1.jpg' class = 'kep' alt='Sry battya nem tudom betolteni :D'>";
    }
    if(result == 2)
    {
        document.getElementById('eredmeny').innerHTML += "<img src='kepek/randomkep1.jpg' class = 'kep' alt='Sry battya nem tudom betolteni :D'>";
    }
    if(result == 3)
    {
        document.getElementById('eredmeny').innerHTML += "<img src='kepek/randomkep1.jpg' class = 'kep' alt='Sry battya nem tudom betolteni :D'>";
    }
    if(result == 4)
    {
        document.getElementById('eredmeny').innerHTML += "<img src='kepek/randomkep1.jpg' class = 'kep' alt='Sry battya nem tudom betolteni :D'>";
    }
    if(result == 5)
    {
        document.getElementById('eredmeny').innerHTML += "<img src='kepek/randomkep1.jpg' class = 'kep' alt='Sry battya nem tudom betolteni :D'>";
    }
}