from flask import Blueprint, request, jsonify
from .models import User, Expense, db

main = Blueprint('main', __name__)

@main.route('/add_expense', methods=['POST'])
def add_expense():
    data = request.json
    new_expense = Expense(
        user_id=data['user_id'],
        amount=data['amount'],
        category=data['category'],
        date=data['date'],
        description=data.get('description', '')
    )
    db.session.add(new_expense)
    db.session.commit()
    return jsonify({"message": "Expense added successfully!"}), 201

@main.route('/expenses/<int:user_id>', methods=['GET'])
def get_expenses(user_id):
    expenses = Expense.query.filter_by(user_id=user_id).all()
    return jsonify([{'id': e.id, 'amount': e.amount, 'category': e.category, 'date': e.date, 'description': e.description} for e in expenses])
