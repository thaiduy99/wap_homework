package edu.miu.cs.controller;

import edu.miu.cs.model.Question;
import edu.miu.cs.model.Score;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(urlPatterns = {"/FinishQuizServlet"})
public class FinishQuizServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doPost of FinishQuizServlet");
        HttpSession session = request.getSession();
        Score score = (Score) session.getAttribute("score");
        request.setAttribute("score", score);
        request.getRequestDispatcher("finish.jsp").forward(request, response);
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doGet of FinishQuizServlet");

    }
}
