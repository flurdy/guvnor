# guvnor

Guvnor, in charge of your CI. Whichever CI you have and more


* Command line tools 
* - to keep an eye on your minions
* - to order your CI minions about in easy steps
* Web interface 
* - to keep an eye on your minions
* - to order your CI minions about in easy steps
* Minions that talk to CI APIs


## Matrix

* Distinguish CI jobs by project, flow, environment and task type
* Navigate across these 4 dimensions easily
* With all in a clean and clear interface


## Example CLI 

### Deploy build

`guv deploy [latest] myproject [to] integration`

### Promote build

`guv promote myproject [from] [integration] [to] staging`

### Restart application

`guv kick myproject [on] integration`

### Restart machine

`guv boot myserver`

### Test application

`guv test myproject`

### Application version

`guv [which] version [is] myproject [in] [all|integration]`

