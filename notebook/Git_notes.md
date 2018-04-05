**Git操作筆記**

>**1. 建構Git環境**
>>https://git-scm.com/  
>>到Git的官方網站下載適合自己電腦作業系統的版本，安裝並註冊帳號。

>**2. 建立/連接Git倉儲**
>>建立一個新的倉儲，就是把local端的專案push到遠端，使用指令：  
>>`$ git init`  
>>這個指令會在local端的專案裡建立一個.git的子資料夾，裡面包含了匯入Git所需要的檔案。  
>>之後可以利用`git add`來追蹤想要上傳到Git的檔案，再使用`git commit`把已追蹤的檔案進行打包。  
>>打包完成後，使用`git push`指令來把已打包的檔案從local端匯入Git。  
>
>>要取得已在Git上的專案，就是要把檔案下載(即clone)到local端，使用指令：  
>>`$ git clone [url]`  
>>這個指令會把遠端的專案全部的資料夾clone到local端，並且能在local進行編輯。  

>**3. 使用Git基本指令**  
>>當local端沒有任何倉儲時，把遠端專案下載到local端：  
>>`$ git clone [url]`  
>>當clone成功後，會把全部的資料夾下載下來，我們就可以在local端進入任何一個資料夾。  
>>並且能夠進行編輯，包括修改內容、刪除檔案及增加檔案等。  
>
>>在local端完成編輯後，要把檔案上傳到Git時，會有幾個步驟：  
>>`$ git add [filename]` / `$ git add .`  
>>`$ git commit`  
>>`$ git push`  
>>首先我們要使用`git add`來把我們需要上傳的檔案加入追蹤，如果只有個別幾個檔案需要上傳時用`git add [filename]`，假如全部的檔案都需要上傳則使用`git add .`。  
>>追蹤完成後，需要用`git commit`把已追蹤的檔案打包起來，並且備註已修改的內容。  
>>最後使用`git push`把檔案上傳至遠端伺服器。  
>
>>如果local端已經有倉儲了，需要把遠端新的commi的數據下載時：  
>>`$ git pull`  
>>多人合作的專案經常會使用Git進行上傳及備份，因此同一個專案有可能在同時間會有不同人在編輯內容。  
>>當我們在local端完成編輯並打算上傳Git時，很有可能會失敗。  
>>原因在於Git為了避免專案的版本亂掉，當有檔案上傳時會先確認該版本是最新的。如果發現到local端裡有一些新的commit數據不在時，Git便會阻止上傳。  
>>因此我們要用`git pull`指令，來把遠端的所有數據再下載下來，並與local端的項目合併起來，以確保我們上傳的檔案都是最新的。  
>
>>查看目錄下檔案的狀況（可以看到哪些檔案有被add）：  
>>`$ git status`  
>
>>在當前目錄下建立新的資料夾：   
>>`$ mkdir [folder name]`  
>
>>在當前目錄下建立新的檔案：   
>>`$ touch [(file name).(file extension)]`  
>
>>進入特定的資料夾：  
>>`$ cd [folder name]`  
>
>>回到上一個資料夾：  
>>`$ cd ..`  
>
>>刪除檔案：  
>>>-假如檔案沒有上傳到Git過：  
>>>`$ rm [file/folder name] -rf`  
>>
>>>-假如檔案已經有上傳過Git：  
>>>`$ git rm [file/folder name] -rf`  
>>
>>**加上-rf指令是指強勢刪除，並且把資料夾下的子目錄一併刪除。**  

>**參考資料**  
>>https://backlog.com/git-tutorial/tw/  
>>https://blog.longwin.com.tw/2009/05/git-learn-initial-command-2009/  
>>https://git-scm.com/book/zh-tw/v2  
