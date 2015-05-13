# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ponto',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('logradouro', models.CharField(max_length=512)),
                ('latitude', models.DecimalField(null=True, max_digits=20, decimal_places=10, blank=True)),
                ('longitude', models.DecimalField(null=True, max_digits=20, decimal_places=10, blank=True)),
            ],
        ),
    ]
