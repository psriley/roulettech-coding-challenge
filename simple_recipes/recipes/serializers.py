from rest_framework import serializers
from .models import Ingredient, Instruction, Recipe, RecipeIngredient


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('name',)


class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ('step_number', 'text')


class RecipeIngredientSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer()

    class Meta:
        model = RecipeIngredient
        fields = ('ingredient', 'amount')


class RecipeSerializer(serializers.ModelSerializer):
    instruction_set = InstructionSerializer(many=True, read_only=True)
    ingredients = RecipeIngredientSerializer(many=True, read_only=True)
    
    class Meta:
        model = Recipe
        fields = ('pk', 'name', 'description', 'image', 'ingredients', 'cook_time_minutes', 'serving_size', 'instruction_set')
