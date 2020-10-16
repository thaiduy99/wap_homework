package com.example;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTime extends SimpleTagSupport {
    String color;
    String size;
    // render custom tag
    // <span style="color: red; font-size: 12px;">Mon 2016.04.04 at 04:14:09 PM PDT</span>
    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        String text = "";
        if ((color != null) && (size != null)) {
            Date dNow = new Date();
            SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
            text =  ft.format(dNow);
            out.write("<span style=\"color:" + color + " ; font-size: " + size + ";\">"+ text+"</span>");
        }
    }
    // Need a setter for each attribute of custom tag
    public void setColor(String color) {
        this.color = color;
    }
    public void setSize(String size) {
        this.size = size;
    }
}
