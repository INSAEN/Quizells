from django.contrib import admin
from . import models
# Register your models here.


@admin.register(models.Category)
class CatAdmin(admin.ModelAdmin):
    list_display = ['name', 'catid']


class AnswerInlineModel(admin.TabularInline):
    model = models.Answers
    fields = ['answer_text', 'is_right']


class QuestionInlineModel(admin.TabularInline):
    model = models.Questions
    fields = ['title']
    inlines = [AnswerInlineModel]


@admin.register(models.Quizzes)
class QuizAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'quizid']
    inlines = [QuestionInlineModel]


@admin.register(models.Questions)
class QuestionAdmin(admin.ModelAdmin):
    fields = ['title', 'quiz']
    list_display = ['title', 'quiz', 'date_updated']
    inlines = [AnswerInlineModel]


@admin.register(models.Answers)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ['answer_text', 'is_right', 'question']
