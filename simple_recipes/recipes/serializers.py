from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = ('pk', 'name', 'description', 'image', 'ingredients', 'cook_time_minutes', 'serving_size', 'instructions')
