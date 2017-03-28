# Module

## 주의해야할 점

### 앞에 어떠한 식별을 해줌으로써 'a'라는 함수가 겹치지 않도록 해야한다.

```python
def bogil_a():
    return 'a'
#엄청 많은 코드
def soonho_a():
    return 'B'
#엄청 많은 코드
print(bogil_a())
```
