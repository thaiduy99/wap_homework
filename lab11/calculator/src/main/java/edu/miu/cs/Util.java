package edu.miu.cs;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Util {
    public static String parseFile(String fileName){
        StringBuilder contentBuilder = new StringBuilder();
        try {
            BufferedReader in = new BufferedReader(new FileReader("mypage.html"));
            String str;
            while ((str = in.readLine()) != null) {
                contentBuilder.append(str);
            }
            in.close();
        } catch (IOException e) {}
        return contentBuilder.toString();
    }
}
