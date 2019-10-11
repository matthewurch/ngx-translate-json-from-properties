# Summary

Angular applications that use [ngx-translate](https://github.com/ngx-translate/core) often store the translations in json files.  Editing those files manually isn't ideal.  Especially when compared to using [IntelliJ Resource Bundles](https://www.jetbrains.com/help/idea/resource-bundle.html).

This node.js module allows you to write your language files as a resource bundle, using [File Watchers](https://www.jetbrains.com/help/idea/using-file-watchers.html) to convert the properties files to json.

# Installation

TODO

# Usage

## Project Structure

Create your language properties files (`i18n-lang.properties`), such as `i18n-en-CA.properties`.  IntelliJ will now let you edit these together at once as a Resource Bundle.

## File Watcher

Create a file watcher and configure it.  For example:

![example file watcher configuration](readme/file-watcher-config.png "example file watcher configuration")
