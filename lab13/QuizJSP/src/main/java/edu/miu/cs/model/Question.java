package edu.miu.cs.model;

import edu.miu.cs.Util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Question {
    private int index;
    private String content;
    private List<Integer> questionDone;

    public Question(){
        this.questionDone = new ArrayList<Integer>();
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public static int updateQuestion(Question question){
        if (question.questionDone.size() < Util.questions.length) {
            Random random = new Random();
            int index = random.nextInt(Util.questions.length);
            while (question.questionDone.contains(index)) {
                index = random.nextInt(Util.questions.length);
            }
            question.questionDone.add(index);
            question.index = index;
            question.content = Util.questions[index];
            return 1;
        }
        return -1;
    }
}
