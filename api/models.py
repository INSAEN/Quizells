from tabnanny import verbose
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=50)
    catid = models.CharField(max_length=50, null=True, blank=True)

    def save(self, *arg, **kwargs):
        self.catid = slugify(self.name)
        super(Category, self).save(*arg, **kwargs)

    def __str__(self):
        return self.name


class Quizzes(models.Model):
    class Meta:
        verbose_name_plural = _("Quizzes")
        verbose_name = _("Quiz")
        ordering = ['id']
    title = models.CharField(max_length=255, default=_(
        'New quiz'), verbose_name=_('QuizTitle'))
    category = models.ForeignKey(
        Category, default=1, on_delete=models.CASCADE, related_name='quizzes')
    quizid = models.CharField(max_length=255, default=_(
        'newquiz'), verbose_name=_('Quiz Id'))
    date_created = models.DateTimeField(auto_now_add=True)
    
    def save(self, *arg, **kwargs):
        self.quizid = slugify(self.title)
        super(Quizzes, self).save(*arg, **kwargs)
    
    def __str__(self):
        return self.title


class Updated(models.Model):
    class Meta:
        abstract = True
    date_updated = models.DateTimeField(
        auto_now=True, verbose_name=_('DateUpdated'))


class Questions(Updated):
    class Meta:
        verbose_name_plural = _("Questions")
        verbose_name = _("Question")
        ordering = ['id']

    TYPE = (
        (0, _('Multiple Choice')),
        (1, _('True or False')),
    )
    quiz = models.ForeignKey(
        Quizzes, related_name='question', on_delete=models.CASCADE)
    technique = models.IntegerField(
        choices=TYPE, default=0, verbose_name=_('Question Type'))
    title = models.CharField(max_length=255, verbose_name=_('Question Title'))
    date_created = models.DateTimeField(
        auto_now_add=True, verbose_name=_('Date Created'))
    is_active = models.BooleanField(default=False, verbose_name=_('IsActive'))

    def __str__(self):
        return self.title


class Answers(Updated):
    class Meta:
        verbose_name_plural = _("Answers")
        verbose_name = _("Answer")
        ordering = ['id']

    question = models.ForeignKey(
        Questions, related_name='answers', on_delete=models.CASCADE)
    answer_text = models.CharField(
        verbose_name=_("Answer Text"), max_length=255)
    is_right = models.BooleanField(default=False)

    def __str__(self):
        return self.answer_text
