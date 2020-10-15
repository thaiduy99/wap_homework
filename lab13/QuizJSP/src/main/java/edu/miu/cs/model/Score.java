package edu.miu.cs.model;

public class Score {
    private int totalQuestion;
    private int grade;

    public Score(int totalQuestion, int grade){
        this.totalQuestion = totalQuestion;
        this.grade = grade;
    }

    public int getTotalQuestion() {
        return totalQuestion;
    }

    public void setTotalQuestion(int totalQuestion) {
        this.totalQuestion = totalQuestion;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }
}
