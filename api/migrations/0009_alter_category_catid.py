# Generated by Django 4.1 on 2022-08-07 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_category_catid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='catid',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
