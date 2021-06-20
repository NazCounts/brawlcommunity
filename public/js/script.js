const interval = 3000;
// when the page loads
$.getJSON('/clicks',  function(data) {
    
    clicksCount = data.clicks;
    $('#clicks').html(clicksCount);
    })

function removeClick() {
     $.getJSON('/remove',  function(data) {
        console.log(data);
    })
}

function addClick() {
     $.getJSON('/add',  function(data) {
        console.log(data);
    })
}


async function updateclicks() {
    await $.getJSON('/clicks',  function(data) {
    
    clicksCount = data.clicks;
    $('#clicks').html(clicksCount);
    })
    }
        let update = setInterval(function() {
            updateclicks();
    
            // updateall();
        }, interval);


    