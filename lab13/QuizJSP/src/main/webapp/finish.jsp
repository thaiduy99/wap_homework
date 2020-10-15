<%--
  Created by IntelliJ IDEA.
  User: Thai Nguyen
  Date: 10/14/2020
  Time: 10:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h2>The Number Quiz</h2>
<form action="QuizServlet" method="get">
    <span>Your current score is ${score.grade} </span><br><br>
    <span> You have completed the Number Quiz, with a score of ${score.grade} out of ${score.totalQuestion}</span><br><br>
    <input type="submit" value="Redo">
</form>
</body>
</html>
