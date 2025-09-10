Create 4 accounts as objects.
Each should have: name, balance, currency, and type (e.g., "Savings", "Checking").

Simulate deposits:
Add different deposit amounts to two accounts.
Show the new balances.

Simulate withdrawals:
Attempt withdrawals from two accounts.
If the balance is insufficient, print:
"Withdrawal denied for <name>: insufficient funds"

Transfers:
Transfer money between two accounts only if they have the same currency.
If currencies are different, print:
"Transfer failed: currency mismatch"

Monthly maintenance:
If account type is "Savings", add interest (e.g., 2% of balance).
If account type is "Checking", deduct fees (e.g., 50 units).

Comparisons:
Print out the account with the highest balance.
Print out the account with the lowest balance.

Account status check:
If balance > 0 → "Active"
If balance === 0 → "Empty"
If balance < 0 → "Overdrawn"

Transaction summary:
After all operations, print all accounts with final balances and statuses in a clean format.

🎯 Bonus Challenge
Add a foreign currency account (e.g., "EUR").
Try to transfer from it into a "USD" account and handle the currency mismatch.
Then, add an exchange rate (e.g., 1 EUR = 1.1 USD) and retry the transfer using conversion.
Use functions in a clear and simple way. (if advance you loose your marks)