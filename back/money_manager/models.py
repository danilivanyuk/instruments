from django.db import models
from django.utils.translation import gettext_lazy as _
from account.models import User

# Create your models here.

CURRENCY_CHOICES = (
    ("Tenge", "Tenge"),
    ("Ruble", "Ruble"),
    ("Dollar", "Dollar"),
    ("Euro", "Euro"),
)


TRANSACTION_CHOICES = (
    ("Income", "Income"),
    ("Spending", "Spending"),
)


class Budget(models.Model):
    id = models.BigAutoField(primary_key=True)
    owner_id = models.ForeignKey(
        User,
        related_name="Budget",
        on_delete=models.CASCADE,
        verbose_name="User",
        default=None,
        null=False,
        blank=False,
    )
    title = models.CharField(
        max_length=100,
        verbose_name="Title",
        null=False,
        blank=False,
    )
    currency = models.CharField(
        choices=CURRENCY_CHOICES,
        max_length=20,
        null=False,
        blank=False,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Created At",
        help_text=_("format: YY-MM-DD hh:mm:ss, auto-generated"),
        null=True,
        blank=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Updated At",
        help_text=_("format: YY-MM-DD hh:mm:ss, auto-generated"),
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = "Budget"
        verbose_name_plural = "Budgets"

    def __str__(self):
        return f"{self.title}"


class Category(models.Model):
    id = models.BigAutoField(primary_key=True)
    budget_id = models.ForeignKey(
        Budget,
        related_name="Category",
        on_delete=models.CASCADE,
        verbose_name="Budget",
        default=None,
        null=False,
        blank=False,
    )

    title = models.CharField(
        max_length=100,
        verbose_name="Title",
        null=False,
        blank=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Created At",
        help_text=_("format: YY-MM-DD hh:mm:ss, auto-generated"),
        null=True,
        blank=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Updated At",
        help_text=_("format: YY-MM-DD hh:mm:ss, auto-generated"),
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return f"{self.title}"


class Transaction(models.Model):
    id = models.BigAutoField(primary_key=True)
    budget_id = models.ForeignKey(
        Budget,
        related_name="Transaction",
        on_delete=models.CASCADE,
        verbose_name="Budget",
        default=None,
        null=False,
        blank=False,
    )

    category_id = models.ForeignKey(
        Category,
        related_name="Transaction",
        on_delete=models.CASCADE,
        verbose_name="Category",
        default=None,
        null=False,
        blank=False,
    )

    title = models.CharField(
        max_length=100,
        verbose_name="Title",
        null=False,
        blank=False,
    )

    transaction_type = models.CharField(
        choices=TRANSACTION_CHOICES,
        null=False,
        blank=False,
        max_length=20,
    )

    amount = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=False,
        blank=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Created At",
        help_text=_("format: YY-MM-DD hh:mm:ss, auto-generated"),
        null=True,
        blank=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Updated At",
        help_text=_("format: YY-MM-DD hh:mm:ss, auto-generated"),
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = "Transaction"
        verbose_name_plural = "Transactions"

    def __str__(self):
        return f"{self.title}"
