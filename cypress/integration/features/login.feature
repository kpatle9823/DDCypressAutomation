Feature: Login into Dune Design Application

Scenario Outline: Login as DE user in Dune appliation
Given Nevigate to the website
When User clicks on siginingin button
And enter '<username>' and '<password>'
And User clicks on sign button
Then Validate home page

Examples:
    | username | password |
    | Kamlesh  | ******** |
    #| Kalpana  | ******** |