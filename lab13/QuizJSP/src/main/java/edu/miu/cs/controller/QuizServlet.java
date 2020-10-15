package edu.miu.cs.controller;

import edu.miu.cs.Util;
import edu.miu.cs.model.Question;
import edu.miu.cs.model.Score;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(urlPatterns = {"/QuizServlet"})
public class QuizServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        System.out.println("doPost");
        String result = req.getParameter("result");
//        System.out.println("....."+ result);
        int resultInt = Integer.parseInt(result);
        HttpSession session = req.getSession();
        Score score = (Score) session.getAttribute("score");
//        System.out.println("....."+ score);
        Question question = (Question) session.getAttribute("question");
//        System.out.println("....."+ question);
        if (Util.answers[question.getIndex()] == resultInt){
            score.setGrade(score.getGrade()+1);
            score.setTotalQuestion(score.getTotalQuestion() + 1);
        }
        req.setAttribute("score", score);

        int newQuestion = Question.updateQuestion(question);
        req.setAttribute("question", question);
        session.setAttribute("score", score);
        session.setAttribute("question", question);
        if (score.getTotalQuestion() < 5)
            req.getRequestDispatcher("index.jsp").forward(req, resp);
        else {
//            System.out.println("Final result");
            req.getRequestDispatcher("FinishQuizServlet").forward(req, resp);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doGet");
//        response.setContentType("text/html");
        Score score = new Score(0, 0);
        score.setGrade(0);
        score.setTotalQuestion(0);
        request.setAttribute("score", score);
        Question question = new Question();
        int update = Question.updateQuestion(question);
        request.setAttribute("question", question);

        HttpSession session = request.getSession();
        session.setAttribute("score", score);
        session.setAttribute("question", question);
        request.getRequestDispatcher("index.jsp").forward(request, response);
//        response.sendRedirect("index.jsp");
    }
}
