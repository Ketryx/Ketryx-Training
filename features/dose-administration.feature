Feature: Dose administration

  @tests:spec-dose-reading-warning
  Scenario: Test infusion limitations
    Given iOS application is open
    When Insulin dosage of 10 is entered
    And Form is submitted
    Then Insulin is not administered
    And An error message is shown
