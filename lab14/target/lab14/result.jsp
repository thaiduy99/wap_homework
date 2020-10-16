<%@ page import="java.util.List" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored = "false" %>
<%@ taglib prefix = "cd" uri= "http://thainguyen.com/wap" %>

<html>
<body>
    <h1 align="center">Beer Recommendations JSP</h1>
    <p>
    <% List styles = (List)request.getAttribute("styles");%>

    <c:forEach var = "item" items = "${styles}">
       <br> try ${item}
    </c:forEach>

    JSP: <cd:CurrentDateTime color="red" size="12px" />

</body>
</html>