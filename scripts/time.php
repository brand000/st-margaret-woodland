<?php 
# Author: Toufiq
# Purpose: This script gets the current date and time. It is called by ajax to update the page with the new date and time without reloading
$date = date("l, F jS");
$time = date('g:ia');
echo "It's $date.<br>
      The time is $time.";	
?>
