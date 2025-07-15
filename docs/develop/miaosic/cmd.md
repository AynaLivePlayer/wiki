---
layout: doc
title: 命令行测试工具
---

# 命令行测试工具

> 源文档地址: [README.md](https://github.com/AynaLivePlayer/miaosic/blob/main/cmd/miaosic/README.md)
> 
> 注意: 改文档由deepseek生成，实际可能会有错误

`miaosic` 是一个功能强大的音乐信息命令行工具，支持多种音乐平台（提供者），可以搜索音乐、获取媒体信息、获取播放URL、下载歌词以及进行二维码登录等操作。

## 功能特性

- 🎵 搜索音乐（支持分页）
- ℹ️ 获取媒体详细信息
- 🔗 获取媒体播放URL（支持指定音质）
- 📜 获取歌词（支持多语言）
- 🔑 二维码登录支持
- 📋 列出所有支持的提供者及登录状态
- 💾 会话管理（跨命令保存登录状态）

## 使用指南

### 基本命令结构

```bash
miaosic [全局参数] <命令> [命令参数] [命令标志]
```

### 全局参数

| 参数 | 缩写 | 描述 |
|------|------|------|
| `--session-file` | `-s` | 指定会话文件路径（用于保存登录状态） |

### 命令列表

#### 1. 搜索音乐：`search`

搜索指定提供者的音乐。

```bash
./miaosic search <provider> <keyword> [flags]
```

**参数：**
- `<provider>`: 音乐提供者（如 netease, qq 等）
- `<keyword>`: 搜索关键词

**标志：**
- `-p, --page`: 页码（默认：1）
- `--page-size`: 每页结果数（默认：10）

**示例：**
```bash
./miaosic search netease "周杰伦" -p 1 --page-size 5
```

**输出示例：**
```
Page.01 for "周杰伦"
1. 屋顶 - 周杰伦,温岚 - 男女情歌对唱冠军全记录 - 5257138
2. 想你就写信 (Live) - 周杰伦,李硕,张鑫 - 中国新歌声第二季 第13期 - 509781655
3. 布拉格广场 - 蔡依林,周杰伦 - 看我72变 - 210049
4. 默 (Live) - 李荣浩,周杰伦 - 2021中国好声音 第1期 - 1888354230
5. 因为爱情 (Live) - 周杰伦,那英 - 中国新歌声第二季 第1期 - 490595315
```

#### 2. 获取媒体信息：`info`

获取指定URI的媒体信息。

```bash
./miaosic info <provider> <uri>
```

**参数：**
- `<provider>`: 音乐提供者
- `<uri>`: 媒体URI（URL 或 ID）

**示例：**
```bash
./miaosic info netease 1827600686
```

**输出示例：**
```
Title: 还是会想你
Artist: 林达浪,h3R3
Album: 还是会想你
Cover https://p1.music.126.net/9FhSEQtMhP-JP3_U84YfWQ==/109951165798773745.jpg
Provider: netease
Identifier: 1827600686
```

#### 3. 获取媒体URL：`url`

获取指定URI的媒体播放URL。(部分歌源可能需要登陆)

```bash
miaosic url <provider> <uri> [flags]
```

**参数：**
- `<provider>`: 音乐提供者
- `<uri>`: 媒体URI

**标志：**
- `--quality`: 音质偏好（128k, 192k, 256k, 320k, hq, sq）

**示例：**
```bash
miaosic url netease 1827600686
```

**输出示例：**
```
URL 1:
  Quality: 320k
  URL: http://example.com/audio.mp3
  Headers:
    User-Agent: Mozilla/5.0
    Referer: http://example.com
```

#### 4. 获取歌词：`lyric`

获取指定URI的歌词。

```bash
miaosic lyric <provider> <uri> [flags]
```

**参数：**
- `<provider>`: 音乐提供者
- `<uri>`: 媒体URI

**标志：**
- `-o, --output`: 指定输出文件
- `--save`: 自动保存歌词（文件名格式：歌名_歌手名.lrc）

**示例：**
```bash
# 控制台输出歌词
miaosic lyric netease 1827600686

# 保存歌词到指定文件
miaosic lyric netease 1827600686 -o lyrics.txt

# 自动保存歌词
miaosic lyric netease 1827600686 --save
```

**输出示例（控制台）：**
```
Language: zh
-----
[00:00.00]歌曲名：晴天
[00:05.00]歌手：周杰伦
...
-----
Language: en
-----
[00:00.00]Song: Qing Tian
[00:05.00]Artist: Jay Chou
...
-----
```

#### 5. 二维码登录：`qrlogin`

提供二维码登录相关操作。

##### 获取登录二维码：`getqrcode`

```bash
miaosic qrlogin getqrcode <provider>
```

**参数：**
- `<provider>`: 支持登录的音乐提供者

**示例：**
```bash
miaosic qrlogin getqrcode netease
```

**输出示例：**
```
Scan this QR code to login:
[显示二维码图片]
Key: 1234567890abcdef
URL: https://login.example.com/qrcode?key=1234567890abcdef
```

##### 验证登录：`verify`

```bash
miaosic qrlogin verify <provider> <key>
```

**参数：**
- `<provider>`: 音乐提供者
- `<key>`: 从 getqrcode 命令获取的 key

**示例：**
```bash
miaosic qrlogin verify netease 1234567890abcdef
```

**输出示例：**
```
Login successful!
Session: <session_string>
```

#### 6. 列出提供者：`providers`

列出所有注册的提供者及其登录状态。

```bash
miaosic providers
```

**输出示例：**
```
 - bilibili-video: Not supported
 - kugou: Not logged in
 - kugou-instr: Not supported
 - kuwo: Not supported
 - netease: Logged in
```

## 配置文件

使用 `--session-file` 参数指定会话文件路径，以便在不同命令之间保持登录状态：

```bash
miaosic --session-file ~/.miaosic_session.json providers
```

会话文件格式为 JSON：
```json
{
  "netease": "session_string_here",
  "qq": "another_session_string"
}
```

## 支持的提供者

| 提供者            | 搜索 | 媒体信息 | 播放URL | 歌词 | 登录 |
|----------------|------|----------|---------|------|------|
| netease        | ✓ | ✓ | ✓ | ✓ | ✓ |
| kuwo           | ✓ | ✓ | ✓ | ✓ | ✗ |
| kugou          | ✓ | ✓ | ✓ | ✓ | ✓ |
| bilibili-video | ✓ | ✓ | ✓ | ✓ | ✗ |


## 常见问题

### 如何保存登录状态？

使用 `--session-file` 参数指定会话文件路径：
```bash
miaosic --session-file ~/.miaosic_session.json qrlogin getqrcode netease
miaosic --session-file ~/.miaosic_session.json qrlogin verify netease <key>
```

### 为什么二维码在我的终端不显示？

确保您使用的终端支持显示图片（如 iTerm2、Windows Terminal 等）。如果不支持，可以考虑使用其他终端或使用文本模式的二维码实现。

### 如何添加新的音乐提供者？

1. 实现 `miaosic.MediaProvider` 接口