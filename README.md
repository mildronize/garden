# My Digital garden

Powered by [suan](https://github.com/thaitype/suan)

## Update

This method is for updating the main branch from the original repository, using git rebase
So, please **backup** your work before doing this.

```
git remote add upstream https://github.com/thaitype/suan.git
git config pull.rebase true
git fetch upstream 
git pull upstream main
git push -f origin main
```

Update from `develop` branch from suan

```
git fetch upstream 
git pull upstream develop
git push -f origin main
```