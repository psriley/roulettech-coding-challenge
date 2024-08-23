from django.db import models


class Ingredient(models.Model):
    name = models.CharField("Name", max_length=200)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField("Name", max_length=200)
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to="images/", blank=True)
    ingredients = models.ManyToManyField("RecipeIngredient", related_name='recipes', blank=True)
    cook_time_minutes = models.PositiveIntegerField()
    serving_size = models.PositiveIntegerField()

    def __str__(self):
        return self.name
    
    # method for displaying cook time in hours if over 60 minutes


class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    # ingredient = models.CharField("Name", max_length=200)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.amount} {self.ingredient}"
    

class Instruction(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    step_number = models.PositiveIntegerField()
    text = models.TextField()

    class Meta:
        ordering = ["step_number"]
        unique_together = ("recipe", "step_number")

    def __str__(self):
        return f"Step {self.step_number} for {self.recipe.name}"
