import $ from 'jquery';
import _ from 'lodash';

// Function to update the counter
function updateCounter() {
    let count = parseInt($('#count').text()) || 0;
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Bind the button click to the debounce function
    $('#btn').on('click', _.debounce(updateCounter, 500));
});
