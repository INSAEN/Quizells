# Generated by Django 4.1 on 2022-08-07 19:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_category_catid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quizzes',
            old_name='qid',
            new_name='quizid',
        ),
    ]
