# Ruby on Rails 설치 방법

## 1. Upgrade Your System to macOS Sierra

### Already Installed?
<pre><code>$ xcode-select -p</code></pre>

## 2. Install XCode Command Line Tools

### Install Xcode Command Line Tools
<pre><code>$ gcc </code></pre>

## 3. Configure Git
### Check Git version
<pre><code>$ git version
git version 2.4.9 (Apple Git-60)</code></pre>
### GitHub Setting
<pre><code>$ git config -l --global
fatal: unable to read config file '/Users/.../.gitconfig': No such file or directory
$ git config --global user.name "Your Real Name"
$ git config --global user.email me@example.com
$ git config -l --global
user.name=Your Real Name
user.email=me@example.com</code></pre>
## 4. Install Homebrew
###Link: [Homebrew][Homebrewlink]
[Homebrewlink]: https://brew.sh/index_ko.html
## 5. Install GPG
###Homebrew to install gpg
<pre><code>$ brew install gpg</code></pre>
<pre><code>$ command curl -sSL https://rvm.io/mpapis.asc | gpg --import -</code></pre>
## 6. Install RVM
###Link: [RVM][RVMlink]
[RVMlink]: https://rvm.io/rvm/install
-------------------------------------
### Close and Reopen the Terminal
-------------------------------------
## 7. Install Ruby
###Install the newest stable Ruby version:
<pre><code>$ rvm install ruby-2.4.0</code></pre>
<pre><code>$ ruby -v
ruby 2.4.0...</code></pre>

## 8. Update RubyGems
###Check the installed gem manager version
<pre><code>$ gem -v
  2.5.1</code></pre>
### Use gem update --system to upgrade the Ruby gem manager
<pre><code>$ gem update --system</code></pre>
###Install Bundler
<pre><code>$ gem install bundler</code></pre>
###Install Nokogiri
<pre><code>$ gem install nokogiri</code></pre>
## 9. Install Rails
###Installing the most recent stable release
<pre><code>$ gem install rails</code></pre>
###If you want the newest beta version or release candidate
<pre><code>$ gem install rails --pre</code></pre>
###if you want the Rails 3.2.18 release
<pre><code>$ gem install rails --version=3.2.18</code></pre>
###Verify that the correct version of Rails is installed
<pre><code>$ rails -v
Rails 5.0.0</code></pre>
