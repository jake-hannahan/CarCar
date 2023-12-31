# Generated by Django 4.0.3 on 2023-03-06 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='salerecord',
            name='price',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='salesperson',
            name='employee_number',
            field=models.CharField(max_length=100, null=True, unique=True),
        ),
    ]
