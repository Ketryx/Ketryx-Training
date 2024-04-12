---
itemId: tc-1
itemType: Test Case
itemTests: req-patient-app-ui
---

# Test warning message

When the recommended insulin dose is based on the glucose readings that are outdated, warn the user.

## Steps

1. Open application 
2. Disconnect glucose monitor (via Bluetooth) and wait 5 min
3. Add insulin dosage
4. Click submit 

## Expected behavior

Warning message should appear letting user know that glucose reading is not updated.
