---
title: 手把手教你部署Claude Code
description: 手把手教你部署Claude Code
date: 2026-05-10T19:23:13+08:00
slug: Claude Code
image: 
categories:
  - study
tags:
  - Claude Code
  - AI
---

## 前言

手把手教你部署Claude Code：国内环境下的保姆级安装与使用指南

Claude Code 是 Anthropic 推出的强大 AI 编程助手，能辅助代码编写、问题调试和文档生成。但由于国内网络限制，直接部署可能遇到问题。本教程将带你从零开始，在 Windows 或 macOS 系统下完成部署，并解决国内访问问题。

✨ 所需准备：
- Node.js 环境（版本 ≥ 20.x）
- Claude API Key（需通过合规的第三方代理获取，或国内支持的服务）
- 科学上网工具（可选，用于访问部分国外资源）

### 参考文档

[Claude Code 官方文档](https://docs.claude.ai/code)

[CCSwitch 项目地址](https://github.com/xxx/cc-switch)

### 大致的步骤

1.安装Node.js环境

2.安装Claude Code

3.配置国内可用的API接入

4.启动Claude Code并测试

## 安装部署

### 安装Node.js环境

1. 访问官网下载对应系统的 Node.js 安装包： Node.js 官网 
2. 安装完成后，打开终端（Windows 用 PowerShell 或 CMD，macOS 用 Terminal），验证版本：

```text
node --version
npm --version
❯ node --version
v20.15.0
❯ npm --version
10.8.0
```

### 安装Claude Code

1. 在终端执行全局安装命令：
```test
npm install -g @anthropic-ai/claude-code
```

2. 安装完成后，验证是否成功：
```text
claude --version
```

3. 预期输出：
```text
claude-code@2.1.143
```

### 配置国内可用的API接入

⚠️ 注意：直接使用官方 API 在国内无法连接，需通过以下方案：

***方案一：*** 使用第三方代理服务 + 环境变量配置

1. 获取可用的第三方 Claude API 代理地址。

2. 配置环境变量：

Windows：打开「系统属性」→「高级」→「环境变量」，新增系统变量：

3. 变量名：ANTHROPIC_API_KEY
```text
变量值：你的API Key（例如：sk-xxxxxxxxxxxxxxxxx）
```
4. 变量名：ANTHROPIC_BASE_URL
```text
变量值：代理服务的 API 地址（例如： https://api-proxy.example.com/v1） 
```
macOS：编辑 `~/.bashrc` 或 `~/.zshrc` 文件，添加：
```text
export ANTHROPIC_API_KEY="sk-xxxxxxxxxxxxxxxxx"
export ANTHROPIC_BASE_URL="https://api-proxy.example.com/v1"
```
5. 保存后执行 source ~/.bashrc 生效。


***方案二：*** 使用工具辅助配置
- 例如使用 CCSwitch 工具（支持 Windows 和 macOS）：

a. 下载并安装 CCSwitch： CCSwitch 下载地址 

b. 打开软件，选择 Claude Code，填入 API Key 和 Base URL，点击「保存并应用」。

## 启动Claude Code并测试

1. 在终端输入命令启动：
```text
claude
```
2. 若配置正确，将进入交互界面：
```text
Welcome to Claude Code!
Type your message below (or use /help for commands)...
```

3. 测试示例：生成代码
输入请求：
```text
> 写一个用 Python 实现的冒泡排序算法
```
4. Claude 将返回代码和解析：
```text
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# 示例：
nums = [64, 34, 25, 12, 22, 11, 90]
sorted_nums = bubble_sort(nums)
print(sorted_nums)
```

## 进阶使用技巧
1. 在 VS Code 中集成：安装 Claude Code 插件，配置 API 后可直接在编辑器中使用。

2. 文件上下文理解：在交互时指定文件路径（如 @/path/to/your/file.js），Claude 可结合文件内容生成更精准的代码。

3. 报错调试：粘贴错误日志，Claude 会分析原因并提供修复建议。

## 常见问题与解决方案
1. 报错 Not logged in 或 API Key invalid：

- 检查环境变量或配置文件中 API Key 和 URL 是否正确。
- 确保代理服务可用。

2. 响应超时：
- 增加超时时间：在配置中添加 
```text
API_TIMEOUT_MS=60000。
```
## 总结
通过以上步骤，你已成功在国内环境下部署并运行 Claude Code。结合 AI 的智能辅助，可大幅提升编程效率。若遇问题，可检查每一步配置或查阅官方文档。
