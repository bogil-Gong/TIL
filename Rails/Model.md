# Model

### Tweet Model

#### app/models/tweets.rb
```ruby
  class Tweets < ActiveRecord::Base
    belongs_to :zombie
  end
```
#### app/models/zombies.rb
```ruby
  class Zombies < ActionRecord::Base
    has_many :tweets
  end
```

#### Tweet Table

| ID | status  | zombie  |
|---|---|---|
| 1  | Sad  | Ash  |
| 2  | Good  | Bob  |
| 3  | Fun  |  Jim |
| 4  |  Soso |  Ash |

### Model Validates Example
```ruby
validates_presence_of :status
validates_numericality_of :fingers
validates_uniqueness_of :toothmarks
validates_confirmation_of :password
validates_acceptance_of :zombification
validates_length_of :password, minimum: 3
validates_format_of :email, with: /regex/i
validates_inclusion_of :age, in: 21..99
validates_exclusion_of :age, in: 0..21, message: "Sorry you must be over 21"
```
#### 2가지의 Validation이 들어갈경우
```ruby
validates :key, presence: true, uniqueness: true
```
