# auto-insert-first-StackOverflow-result-code
Select a short piece of text or code, then press shift+alt+p to automatically google the selection for stackoverflow.com results behind the scenes and then paste the first code section of the the first answer on the first result. Requires AutoHotKey and Node.js to be installed

Example usage:

type and highlight 

```python
python file try open
```

in your code editor.
Then press ctrl+shift+p. A Node.js command window will appear for a second or two and then disappear.
Immediately after, the following will be pasted into the editor:

```python
def FileCheck(fn):
    try:
      open(fn, "r")
      return 1
    except IOError:
      print "Error: File does not appear to exist."
      return 0

result = FileCheck("testfile")
print result
```

The code is extracted from the first answer to [this question]
(http://stackoverflow.com/questions/8380006/file-open-function-with-try-except-python-2-7-1),
which is the first result on Google for "python try file open site:stackoverflow.com"

//How the code works: An AutoHotKey script running in the background listens for ctrl-shift-p and invokes a function when
//that hotkey is triggered. That function runs a Node.js script that 
