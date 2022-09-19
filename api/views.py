from django.shortcuts import render
from rest_framework import generics
from .models import Category, Questions, Quizzes, Answers
from .serializers import AnswerSerializer, CatSerializer, QuesbyQuizSerializer, QuizSerializer, QuizbyCatSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

class QuizList(generics.ListAPIView):
    serializer_class = QuizSerializer
    queryset = Quizzes.objects.all()

class QuizQuestions(APIView):
    def get(self, request, format=None, **kwargs):
        quiz = Questions.objects.filter(quiz__quizid=kwargs['quizname'])
        serializer = QuesbyQuizSerializer(quiz, many=True)
        return Response(serializer.data)
    
class AnswersList(generics.ListAPIView):
    serializer_class = AnswerSerializer
    queryset = Answers.objects.all()
    
class CategoryList(generics.ListAPIView):
    serializer_class = CatSerializer
    queryset = Category.objects.all()
    
class CatQuizzes(APIView):
    def get(self, request, format=None, **kwargs):
        cat = Quizzes.objects.filter(category__catid=kwargs['catname'])
        serializer = QuizbyCatSerializer(cat, many=True)
        return Response(serializer.data)