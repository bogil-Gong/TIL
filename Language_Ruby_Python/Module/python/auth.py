def login(_id):
    members = ['bogil', 'soonho', 'wonjun']
    for member in members:
        if member == _id:
            return True
    return False
