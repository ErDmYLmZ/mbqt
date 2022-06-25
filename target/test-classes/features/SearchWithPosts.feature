Feature: Search with Posts



  Scenario Outline:
    Given User sets the new url "posts"
    Then Verify response body contain "<param>"

    Examples:
      | param  |
      | userId |
      | id     |
      | title  |
      | body   |


  Scenario Outline: Verify Specific idNumber
    Given User sets a new url "posts" "<idNumber>"
    Then Verify specific "<bodyTitle>"
    Examples:
      | idNumber | bodyTitle                   |
      | 7        | magnam facilis autem        |
      | 10       | optio molestias id quia eum |
      | 15       | eveniet quod temporibus     |


