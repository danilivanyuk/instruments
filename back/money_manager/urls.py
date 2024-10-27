from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="main_money_manager_page"),
]
