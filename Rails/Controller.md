# Controller

### Request

#### /app/controller/tweets_controller.rb
```ruby
  class TweetsController < ApplicationController
    def show
      @tweet = Tweet.find(:id)
    end
  end
```
#### /app/views/tweets/show.html.erb
```ruby
<h1><%= @tweet.status %></h1>
<p>Posted by <%= @tweet.zombie.name %></p>
```

### 만약 "show.html.erb" 가 아닐경우 예를들어 "status.html.erb" 일 경우
#### /app/controller/tweets_controller.rb
```ruby
  class TweetsController < ApplicationController
    def show
      @tweet = Tweet.find(:id)
      render action: 'status'
    end
  end
```
* render action: 'view'로 지정해줘야 한다.
