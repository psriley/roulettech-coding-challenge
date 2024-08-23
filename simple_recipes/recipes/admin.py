from django.contrib import admin

from .models import Ingredient, Instruction, Recipe, RecipeIngredient

admin.site.register(Ingredient)
admin.site.register(Instruction)
admin.site.register(Recipe)
admin.site.register(RecipeIngredient)
