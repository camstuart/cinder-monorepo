from django.urls import path
from apps.account import views

app_name = "apps.account"

urlpatterns = [
    path('login', views.login_view),
    path('register', views.register_view),
    path('refresh-token', views.CookieTokenRefreshView.as_view()),
    path('logout', views.logout_view),
    path("user", views.user),
]
