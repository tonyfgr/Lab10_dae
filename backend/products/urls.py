from django.urls import path
from .views import ProductList, ProductCreate

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/create', ProductCreate.as_view(), name='product-create'),
]
