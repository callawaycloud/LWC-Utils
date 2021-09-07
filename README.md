# LWC Util Files

We are starting this respository to conslidate JS code that is frequently recreated between projects.
This can be a consolidate place for util methods that can be imported and reused going forward.
We have the ability to further build out this repositroy as time goes on and keep adding the latest and greatest to it.

## 🔨 Usage

1. Install the unmanaged package into your target org
2. Import a method into your LWC to use
    1. Ex: ``import { getErrorMessage } from 'c/utils'``

## ✨Features

### toast.js

- getErrorMessage
    - Send the error received and it will generate an error message for you
    - Can be used when calling apex methods, wired methods, etc...
- displayError, displaySuccess, displayToast
    - Ability to choose which type of toast to display and the associated method

### community.js

- getBaseCommunityPath
    - Ability to get the base path of community url (Ex: ``https://[custom domain].cs60.force.com/s/``)


** Powered by ** [Callaway Cloud Consulting](https://www.callawaycloud.com/)