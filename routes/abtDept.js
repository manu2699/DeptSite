var express = require('express');
var router = express.Router();

var names = [
  "Dr. S. Soundararajan",
  "Dr. R. Sugumar",
  "Dr. D. Venkata Subramanian",
  "Dr. V. P. GladisPushparathi",
  "Ms. S. Selvakanmani",
  "Dr. E. Sujatha",
  "Mr. K. Balachander",
  "Ms. Pranamita Nanda",
  "Ms. A. V. Kalpana",
  "Mr. S. Rajesh Kumar",
  "Ms. S. Aiswarya",
  "Mr. J. SathyaJebaSundar",
  "Mr. A. Anbumani",
  "Mr. G. Elangovan",
  "Ms. R. Chitra",
  "Ms. G. Indumathi",
  "Mr. R. Raja",
  "Mr. V. Manickavasagan",
  "Ms. M.J.T. VasanthaPriya",
  "Ms. K. Ramya",
]
var qualification = [
  "M.E., Ph.D",
  "M.E., Ph.D",
  "B.E., M.S., M.B.A., Ph.D",
  "M.E., Ph.D",
  "M.E., (Ph.D)",
  "B.E., M.Tech., M.B.A., Ph.D",
  "M.E., (Ph.D)",
  "M.Tech., (Ph.D)",
  "M.E., (Ph.D)",
  "M.E.",
  "M.E.",
  "M.E.",
  "M.Tech.",
  "M.E., (Ph.D)",
  "M.E.",
  "M.E.",
  "M.E.",
  "M.E.",
  "M.E.",
  "M.Tech.",
]
var designation = [
  "Vice Principal - Professor",
  "HOD - Professor",
  "Adjunct Professor",
  "Associate Professor",
  "Associate Professor",
  "Associate Professor",
  "Associate Professor",
  "Associate Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
  "Assistant Professor",
]

router.get('/', function (req, res) {
  res.render('abtDept', {
    data1 : names,
    data2 : qualification,
    data3 : designation
  });
});

module.exports = router;

/*
<table>
    <tr>
        <th>Name</th>
        <th>Qualification</th>
        <th>Designation</th>
    </tr>
    <% for(var i = 0; i < data1.length; i++) { %>
        <tr>
            <td><%- data1[i] %></td>
            <td><%- data2[i] %></td>
            <td><%- data3[i] %></td>
        </tr>
    <% } %>
</table>
*/