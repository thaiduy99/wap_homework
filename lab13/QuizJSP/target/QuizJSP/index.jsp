<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false" %>
<!DOCTYPE>
<html>
<body>
    <h2>The Number Quiz</h2>
    <form action="QuizServlet" method="post">
        <span>Your current score is ${score.grade} </span><br><br>
        <span>Guess the next number in the sequence. </span> <br><br>
        <span> ${question.content}</span><br><br>
        <span>Your answer </span> <input type="number" name = "result" required><br><br>
        <input type="submit">
    </form>
</body>
</html>
