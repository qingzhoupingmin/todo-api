"""
待办事项API入口
处理HTTP请求，调用业务逻辑层
"""

import todo_service
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/todos', methods=['GET'])
def get_todos():
    """获取所有待办"""
    todos = todo_service.get_all()
    return jsonify(todos)


@app.route('/todos', methods=['POST'])
def create_todo():
    """创建待办"""
    data = request.get_json()
    title = data.get('title', '')

    if not title:
        return jsonify({'error': '标题不能为空'}), 400

    new_todo = todo_service.create(title)
    return jsonify(new_todo), 201


@app.route('/todos/<int:todo_id>', methods=['GET'])
def get_todo(todo_id):
    """获取单个待办"""
    todo = todo_service.get_by_id(todo_id)

    if todo is None:
        return jsonify({'error': 'Not found'}), 404

    return jsonify(todo)


@app.route('/todos/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    """更新待办"""
    data = request.get_json()
    title = data.get('title')
    completed = data.get('completed')

    todo = todo_service.update(todo_id, title=title, completed=completed)

    if todo is None:
        return jsonify({'error': 'Not found'}), 404

    return jsonify(todo)


@app.route('/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    """删除待办"""
    success = todo_service.delete(todo_id)

    if not success:
        return jsonify({'error': 'Not found'}), 404

    return jsonify({'message': 'Deleted'})


if __name__ == '__main__':
    app.run(debug=True)