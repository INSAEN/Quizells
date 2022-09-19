from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('quizzes', QuizList.as_view(), name='quizList'),
    path('<str:quizname>/questions', QuizQuestions.as_view(), name='quizQuestions'),
    path('answers', AnswersList.as_view(), name='answersList'),
    path('categories', CategoryList.as_view(), name='categoryList'),
    path('<str:catname>/quizzes', CatQuizzes.as_view(), name='catQuizzes'),
]
