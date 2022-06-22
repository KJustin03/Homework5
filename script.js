$(document).ready(function() {
    // displays the current day
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

    // save button
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value);
        
    });

    function updateHour() {
        // get current number of hours
        var currentHour = moment().hours();
    
        // loop over time blocks
        $('.time-block').each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
          // check if we've moved past this time
          if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).deleteClass('past');
            $(this).addClass('present');
          } else {
            $(this).deleteClass('past');
            $(this).deleteClass('present');
            $(this).addClass('future');
          }
        });
      }
    
    updateHour();

    // load any saved data from localStorage
    $('#8AM .description').val(localStorage.getItem('8AM'));
    $('#9AM .description').val(localStorage.getItem('9AM'));
    $('#10AM .description').val(localStorage.getItem('10AM'));
    $('#11AM .description').val(localStorage.getItem('11AM'));
    $('#12PM .description').val(localStorage.getItem('12PM'));
    $('#1PM .description').val(localStorage.getItem('1PM'));
    $('#2PM .description').val(localStorage.getItem('2PM'));
    $('#3PM .description').val(localStorage.getItem('3PM'));
    $('#4PM .description').val(localStorage.getItem('4PM'));
    $('#5PM .description').val(localStorage.getItem('5PM'));

}); 