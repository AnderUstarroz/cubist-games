# cubist-games-lib

NPM library containing all resources for creating on-chain games on Solana.

# Development

To simplify development you can use the local version of the **cubist-games-lib** in your webapp:

- Go to root folder of **/cubist-games-lib**.
- Run `yarn link` to link the folder. You will get the following message:
  ```
  yarn link v1.22.17
  success Registered "cubist-games-lib".
  info You can now run `yarn link "cubist-games-lib"` in the projects where you want to use this package and it will be  used instead.
  ```
- Go to the root folder of the webapp using this library and run `yarn link "cubist-games-lib"`
- You need to run `yarn build` any time you update the library in order to see the changes in the webapp.
- Note: If using VSCode hit `Comand + Shift + P` and type `Reload Window` to refresh typescript after running `yarn build`.
