#Gradle support in Atom

[![Build Status](https://travis-ci.org/Jakehp/language-groovy.svg?branch=master)](https://travis-ci.org/Jakehp/language-groovy)

Adds syntax highlighting and snippets to Groovy files in Atom.
Adds syntax highlighting to Gradle files in Atom, with the help of [language-groovy](https://atom.io/packages/language-groovy).

**this package depends on the `language-groovy`package/.**

Originally [converted](http://atom.io/docs/latest/converting-a-text-mate-bundle)
from the [gradle.tmbundle](https://github.com/gradle/gradle.tmbundle).

Contributions are *greatly* appreciated. Please fork this repository, open a pull request to add snippets, make grammar tweaks, fix issues, etc.

## Installation

```shell
apm install language-gradle language-groovy
```

If `apm` is not recognized, open Atom, open the Atom menu, and select "Install Shell Commands". Then try running the command again.

## Local Development

You can use `apm` to link the local copy and install the dependencies:

```shell
> apm dev language-gradle /path/to/your/cloned/fork
```

The package will appear in the *Development* section of Atom's packages. Re-open your window in Development Mode (*View->Developer->Open in Dev Mode*) and test your changes.

Contributors:
[ldaley](https://github.com/ldaley)
