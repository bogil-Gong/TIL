# CRUD
#### 가로 Columns 세로 Rows

| ID | status  | zombie  |
|---|---|---|
| 1  | Sad  | Ash  |
| 2  | Good  | Bob  |
| 3  | Fun  |  Jim |
| 4  |  Soso |  Ash |

##Hash

| key | value |
|---|---|
| :id  | 3  |
| :status  | "Hungry"  |
| :zombie  | "Jim"  |

### Hash
```ruby
 b = {id:3,
     status: "Hungry",
     zombie: "Jim"
    }
```

## Create
```ruby
  t = Tweet.new
  t.status = "Mad"
  t.save
```
## Read
```ruby
  Tweet.find(3)
```
## Update
```ruby
  t = Tweet.find(3)
  t.zombie = "Hungry"
  t.save
```
## Delete
```ruby
  t = Tweet.find(3)
  t.destroy
```

### Read Method
#### 총 Tweet의 수
```ruby
  Tweet.count
```
#### 모든 Zombie Column을 표시
```ruby
  Tweet.order(:zombie)
```
#### 처음 10개의 Tweet을 표시
```ruby
  Tweet.limit(10)
```
#### Zombie 이름중에 'ash'를 찾아 표시
```ruby
  Tweet.where(zombie: "ash")
```
