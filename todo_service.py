"""
待办事项业务逻辑层
负责所有数据操作，与HTTP请求处理分离
"""

import os
import json

# 数据文件路径
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "data", "todos.json")


def load_todos():
    """读取数据文件并返回待办列表"""
    if not os.path.exists(DATA_FILE):
        return []

    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        todos = json.load(f)

    return todos


def save_todos(todos):
    """将待办列表保存到数据文件"""
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(todos, f, ensure_ascii=False, indent=2)


def get_all():
    """获取所有待办"""
    return load_todos()


def get_by_id(todo_id):
    """根据ID获取单个待办"""
    todos = load_todos()
    for todo in todos:
        if todo['id'] == todo_id:
            return todo
    return None


def create(title):
    """创建新的待办"""
    todos = load_todos()

    # 计算新ID：最大ID+1，如果没有则从1开始
    new_id = max([t['id'] for t in todos], default=0) + 1

    new_todo = {
        'id': new_id,
        'title': title,
        'completed': False
    }

    todos.append(new_todo)
    save_todos(todos)

    return new_todo


def update(todo_id, title=None, completed=None):
    """更新待办，title和completed为可选参数"""
    todos = load_todos()

    for todo in todos:
        if todo['id'] == todo_id:
            if title is not None:
                todo['title'] = title
            if completed is not None:
                todo['completed'] = completed

            save_todos(todos)
            return todo

    return None


def delete(todo_id):
    """删除待办"""
    todos = load_todos()

    for i, todo in enumerate(todos):
        if todo['id'] == todo_id:
            todos.pop(i)
            save_todos(todos)
            return True

    return False