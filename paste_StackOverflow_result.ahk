
^+p::
    oWSH := ComObjCreate("WScript.Shell")
    Send ^c
    oApp := oWSH.Exec("C:/Program Files/nodejs/node.exe ""C:/files/code/infrequent/autohotkey_projects/paste_StackOverflow_result/get_StackOverflow_Code_Result.js"" """ clipboard """")
    ClipBucket5 := RegExReplace(clipboard, "\r\n?|\n\r?", "`n")
    StackOverflowInfo = % oAPP.StdOut.ReadAll()
    SendInput % ClipBucket5
    clipboard = % "`n" StackOverflowInfo
    
^j::
    Send ^c
    Send ^k
    Send {Right}
    Send {Enter}
    Send ^v
