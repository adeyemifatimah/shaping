 import Triangle  from "./shapey.js";
 import "./css/styles.css";
 import $ from 'jquery'
 $(document).ready(function() {
    $('#triangle-checker-form').submit(function(event) {
      event.preventDefault();
      const length1 = $('#length1').val();
      const length2 = $('#length2').val();
      const triangle = new Triangle(length1, length2)
      const response = triangle.checkType();
      $('#response').append("<p>" + response + "</p>");
    });
  });