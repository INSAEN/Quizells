from rest_framework import serializers
from .models import Answers, Category, Questions, Quizzes


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quizzes
        fields = ['title']
        read_only_fields = ['date_created', 'date_updated']
        ordering = ['id']
        extra_kwargs = {
            'title': {'required': True},
            'category': {'required': True},
        }

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = ['id', 'answer_text', 'is_right']


class QuesbyQuizSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)
    
    class Meta:
        model = Questions
        fields = ['id', 'title','answers']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = ['id', 'title']
        
class QuizbyCatSerializer(serializers.ModelSerializer):
    question = QuestionSerializer(many=True, read_only=True)
    class Meta:
        model = Quizzes
        fields = ['id', 'quizid','title', 'question']
        
class CatSerializer(serializers.ModelSerializer):
    quizzes = QuizbyCatSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['name', 'quizzes']
        ordering = ['id']
