from django.contrib import admin

from .models import Budget, Category, Transaction

# Register your models here.
admin.site.register([Budget, Category, Transaction])
