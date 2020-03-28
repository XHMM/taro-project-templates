# taro-project-templates
Templates for `taro init`

## folk改动说明
- 修改了原repo的 `wxcloud` 目录内容：
    - 将该目录改为了完全面向 typescript 的模式
    - 使用 `taro create --name=[n]` 新建页面时，文件名统一为 `index` 而非 `n`


## folk使用说明
**注意：** 当你仅在要使用 `typescript` 搭配 `wxcloud`模板时，在考虑使用该仓库作为模板源，使用步骤如下：
1. 修改模板源：`taro config set templateSource github:XHMM/taro-project-templates#2.0`
1. 在使用 `taro init` 时，选择 `typescript` 模式，然后选择 `wxcloud` 模板。
