console.log($('#my_links li:has(a)'));

console.log($('#my_links a[href^="documents"]'));

console.log($('#moto_table tr:nth-child(even) td:last-child'));

$('#legend .legend-item:nth-child(1) .mark').click(function () {
    $('#my_links li:has(a)').toggleClass('active1');
})

$('#legend .legend-item:nth-child(2) .mark').click(function () {
    $('#my_links a[href^="documents"]').toggleClass('active2');
})

$('#legend .legend-item:nth-child(3) .mark').click(function () {
    $('#moto_table tr:nth-child(even) td:last-child').toggleClass('active3');
})