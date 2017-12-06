# Setup Notes

## Create Project
For more detailed instructions: [Rails 5.1 loves Javascript](https://medium.com/@hpux/rails-5-1-loves-javascript-a1d84d5318b)

#### Install Rails 5.1 (still a beta version):
1. Create a `Gemfile` with the following:
```
source 'https://rubygems.org'
ruby '2.2.5'
gem 'rails', github: 'rails/rails'
```

2. Run `bundle install`.

#### Create a Rails app with React:
1. Run `rails new myapp --webpack=react`.
2. Go into project folder and run `bundle install`.
3. Run `yarn` to install JavaScript dependencies.

Notes: Everything in `app/javascript/packs` folder is automatically compiled by Webpack. The entry file is `app/javascript/packs/hello_react`. If you rename the file `hello_react` to `index`, then the file name for the pack tag in the next section is `index`.

#### Render Views with Rails:
1. Create a Rails controller `bundle exec rails g controller Pages index`.
2. Replace content in `app/views/pages/index.html.erb` with:
```
  <%= javascript_pack_tag 'hello_react' %>
```
3. In `config/environments/development.rb`, add:
```
  config.x.webpacker[:dev_server_host] = "http://127.0.0.1:8080"
```

#### Run Servers:
1. In one terminal, run `bundle exec rails server`.
2. In another terminal, run `./bin/webpack-dev-server`.
3. If you navigate to `http://localhost:3000/pages/index` on the browser, you should see the contents from the `hello_react` file.

## Add PostgreSQL Database

#### Install PostgreSQL:
1. Install on OS X with Homebrew: find path for `pg_config`, default is below:
```
  gem install pg -- --with-pg-config=/usr/local/bin/pg_config
```
2. Install on Windows:
```
  gem install pg
```
  Choose the win32 build. Install PostgreSQL and put its /bin directory on your path.

#### Create role in PostgreSQL:
1. Open user `postgres`.
2. Run `CREATE ROLE myapp WITH CREATEDB LOGIN PASSWORD 'password'`.

#### Update Rails App:
1. In `Gemfile`, replace `gem sqlite 3` with `gem 'pg'`.
2. Run `bundle install`.
3. In `config/database.yml`, change to:
```
  default: &default
    adapter: postgresql
    encoding: unicode
    pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
    username: board_game_stats
    password: <%= ENV['BOARD_GAME_STATS_DATABASE_PASSWORD'] %>

  development:
    <<: *default
    database: board_game_stats_development

  test:
    <<: *default
    database: board_game_stats_test

  production:
    <<: *default
    database: board_game_stats_production
```

### Create Database
1. Run `rake db:create && rake db:migrate`, then should see:
```
  Created database 'myapp_development'
  Created database 'myapp_test'
```
