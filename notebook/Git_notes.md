<html>
  <body>
  
<B>Git操作筆記</B><br>



<B>1. 建構Git環境<br></B>
https://git-scm.com/<br>
到Git的官方網站下載適合自己電腦作業系統的版本，安裝並註冊帳號。<br></body>



<B>2. 建立/連接Git倉儲<br></B>

建立一個新的倉儲，就是把local端的專案匯入Git，使用指令：<br>
$ git init<br>
這個指令會在local端的專案裡建立一個.git的子資料夾，裡面包含了匯入Git所需要的檔案。<br>
之後可以利用git add來追蹤想要上傳到Git的檔案，再使用git commit把已追蹤的檔案進行打包。<br>
打包完成後，使用git push指令來把已打包的檔案從local端匯入Git。<br>

要取得已在Git上的專案，就是要把檔案下載(即clone)到local端，使用指令：<br>
$ git clone [url]<br>
這個指令會把遠端的專案全部的資料夾clone到local端，並且能在local進行編輯。<br>

<B>3. 使用Git基本指令<br></B>

當local端沒有任何倉儲時，把遠端專案下載到local端：<br>
$ git clone [url]<br>
當clone成功後，會把全部的資料夾下載下來，我們就可以在local端進入任何一個資料夾。<br>
並且能夠進行編輯，包括修改內容、刪除檔案及增加檔案等。<br>

在local端完成編輯後，要把檔案上傳到Git時，會有幾個步驟：<br>
$ git add [filename] / $ git add .<br>
$ git commit<br>
$ git push<br>
首先我們要使用git add來把我們需要上傳的檔案加入追蹤，如果只有個別幾個檔案需要上傳時用git add [filename]，假如全部的檔案都需要上傳則使用git add .。<br>
追蹤完成後，需要用git commit把已追蹤的檔案打包起來，並且備註已修改的內容。<br>
最後使用git push把檔案上傳至遠端伺服器。<br>

如果local端已經有倉儲了，需要把遠端新的commi的數據下載時：<br>
$ git pull<br>
多人合作的專案經常會使用Git進行上傳及備份，因此同一個專案有可能在同時間會有不同人在編輯內容。<br>
當我們在local端完成編輯並打算上傳Git時，很有可能會失敗。<br>
原因在於Git為了避免專案的版本亂掉，當有檔案上傳時會先確認該版本是最新的。如果發現到local端裡有一些新的commit數據不在時，Git便會阻止上傳。<br>
因此我們要用git pull指令，來把遠端的所有數據再下載下來，並與local端的項目合併起來，以確保我們上傳的檔案都是最新的。<br>

查看目錄下檔案的狀況：<br>
$ git status<br>

在當前目錄下建立新的資料夾：<br>
$ mkdir [folder name]<br>

在當前目錄下建立新的檔案：<br>
$ touch [(file name).(file extension)]<br>

進入特定的資料夾：<br>
$ cd [folder name]<br>

回到上一個資料夾：<br>
$ cd ..<br>

刪除檔案：<br>
-假如檔案沒有上傳到Git過：<br>
$ rm [file/folder name] -rf<br>
-假如檔案已經有上傳過Git：<br>
$ git rm [file/folder name] -rf<br>
*加上-rf指令是指強勢刪除，並且把資料夾下的子目錄一併刪除。<br>

<B>參考資料</B><br>
https://backlog.com/git-tutorial/tw/<br>
https://blog.longwin.com.tw/2009/05/git-learn-initial-command-2009/<br>
https://git-scm.com/book/zh-tw/v2<br>
  </body>
</html>
