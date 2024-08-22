from django.contrib import admin

from .models import Instruction, Recipe, RecipeIngredient

admin.site.register(Recipe)
admin.site.register(RecipeIngredient)
admin.site.register(Instruction)
