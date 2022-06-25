Feature:Search Delphine

  Scenario Outline:Searching with username

    Given User sets the url "<endPoint>"
    Then Verify status code should be 200
    Then Content type should be "application/json; charset=utf-8"
    Then User's information should contain "<name>"


    Examples:
      | endPoint | name               |
      | users    | Delphine           |
      | users    | marks              |
      | users    | Leanne Graham      |
#      | comments | Eliseo@gardner.biz |
#      | comments | xxxx               |



