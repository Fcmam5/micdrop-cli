# Mic drop

Simple tool for lazy people to cleanup your project folder after finishing your work.

This tool could be helpful if -for example- you work on multiple Node.js microservices per day and you want to cleanup your service directory after finishing work on a certain service. By cleaning-up we mean: Delete [node_modules](https://i.imgur.com/XFqkgwY.jpg), checkout to your main branch (e.g. `develop`) and stop the running Docker containers.

> **Mic drop**: "When a performer or speaker intentionally drops/throws the microphone on the floor after an awesome performance." -- [Urban Dictionary](https://www.urbandictionary.com/define.php?term=Mic%20Drop)
> 
> <p align="center"><img src="http://i.imgur.com/kz7Tmst.gif" /></p>

## Examples

### Having an unpushed git commit on the current feature branch:

```bash
# git log:
* a3ede02 (HEAD -> feature/delete-current-branch) fix(gitUtils) add delete current branch
* c166061 (origin/feature/delete-current-branch) feat(gitUtils) add delete current branch option
* d5f1013 (origin/develop, develop) :rocket: iniial commit

# Test command
➜  micdrop-cli git:(feature/delete-current-branch) npm start -- -g develop -d -f -v

.. Checking out git branch (develop)
.... Switched to "develop"
.... Deleting "feature/delete-current-branch"
.... 1 unpushed commits, please verify before continuing
```

After pushing my commit:

```bash
➜  micdrop-cli git:(feature/delete-current-branch) npm start -- -g develop -d -f -v

.. Checking out git branch (develop)
.... Switched to "develop"
.... Deleting "feature/delete-current-branch"
.. Removing node_module (94M)

```


## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
