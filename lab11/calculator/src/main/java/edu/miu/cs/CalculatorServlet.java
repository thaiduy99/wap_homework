package edu.miu.cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calc")
public class CalculatorServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        String num1 = request.getParameter("num1");
        String num2 = request.getParameter("num2");
        String num3 = request.getParameter("num3");
        String num4 = request.getParameter("num4");
        String sub1 = "";
        String sub2 = "";
        if ((num1 != "") && (num2 != "")) {
            int result1 = Integer.valueOf(num1) + Integer.valueOf(num2);
            sub1 = num1 + " + " + num2 + " = " + result1 + "\n";
        }
        if ((num3 != "") && (num4 != "")) {
            int result2 = Integer.valueOf(num3) * Integer.valueOf(num4);
            sub2 = (num3 + " * " + num4 + " = " + result2 + "\n");
        }
        out.print(sub1 + sub2);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
