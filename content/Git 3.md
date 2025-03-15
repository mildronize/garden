
# To pull the latest changes from the `main` branch without merging into your current branch

Firstly remove branch, then fetch branch form origin

```
git branch -D main
git fetch origin main
git checkout main
```

# Remove Files in History 

I've found in [stackoverflow](https://stackoverflow.com/questions/43762338/how-to-remove-file-from-git-history) but the git output  show it already deprecated

so, they suggest to use git-filter-repo, https://github.com/newren/git-filter-repo/

for example: my garden: https://github.com/mildronize/garden

I want to remove path `content/private`

I simply use


```
git filter-repo --path content/private --invert-paths
```

but it throw error, it require the clean clone branch
so, i need to clone the new one

```
git clone git@github.com:mildronize/garden.git
```

Once, it clone, so, we can use 

```
git filter-repo --path content/private --invert-paths
```

the filter-repo will remove `origin` from git remote auto,
so, I need for fully remove the file history on git remote (github), 

`git remote -v` gives the empty text

so, I add the origin again, 

```
 git remote add origin git@github.com:mildronize/garden.git
```

then, i use force push

```
git push origin --force --all
```

then i've checked it don't has file in history

```
git log -- content/private
```


## How to Update Git across repo

ถ้าต้องการอัปเดตโค้ดจากรีโปต้นทาง (upstream) โดยไม่ให้ history ของ Git รก เราสามารถใช้ **pull rebase** ได้

**ตัวอย่างกับ** [**suan**](https://github.com/thaitype/suan)

1. เพิ่ม upstream remote
```
git remote add upstream https://github.com/thaitype/suan.git
```


2. ตั้งค่าให้ pull ใช้ rebase อัตโนมัติ

```
git config pull.rebase true
```


3. ดึงอัปเดตจาก main ของ upstream

```
git pull upstream main
```


🔹 ปกติ git pull แบบ merge จะสร้าง **merge commit** ทำให้ history ดูรก

🔹 git pull --rebase จะเอาการเปลี่ยนแปลงจาก upstream มาก่อน แล้ว replay commit ของเราทับไป ทำให้ history **ดูสะอาด**

🔹 ใช้ได้ดีใน branch ส่วนตัวหรือโค้ดที่ยังไม่ push ขึ้นรีโมต

  
**ข้อควรระวัง**

• ถ้ามีการเปลี่ยนแปลงเยอะ อาจเกิด conflict ต้องใช้ git rebase --continue

• ไม่ควรใช้กับ branch ที่แชร์กับทีม เพราะอาจทำให้ push มีปัญหา

