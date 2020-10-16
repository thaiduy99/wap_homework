package com.example.web;
import com.example.model.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.*;

@WebServlet("/SelectBeer.do")
public class BeerSelect extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		String c = request.getParameter("color");
		BeerExpert be = new BeerExpert();
		List result = be.getBrands(c);
		
		//response.setContentType("text/html");
		//PrintWriter out = response.getWriter();
		//out.println("Beer Selection Advice<br>");
		//Iterator it = result.iterator();
		//while(it.hasNext()) {
		//out.print("<br>try: " + it.next());
		
		request.setAttribute("styles", result);
		RequestDispatcher view = request.getRequestDispatcher("result.jsp");
		//Use the request dispatcher to ask the Container to crank up the JSP, sending it the request and response.
		view.forward(request, response);
		
	}
}