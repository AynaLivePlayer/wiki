---
layout: doc
title: Miaosic音源
---

# Miaosic音源

miaosic 是一个音乐音源提供库，提供了一个通用接口以支持不同的音源。

## 音源开发

在 `providers` 目录下创建一个新音源，并实现 `MediaProvider` 接口。

### `MediaProvider` 接口定义

```go
package miaosic

type MediaProvider interface {
    // 获取音源的名称
    GetName() string
    
    // 支持的音质列表
    Qualities() []Quality

    // 搜索媒体
    Search(keyword string, page, size int) ([]MediaInfo, error)

    // 媒体相关功能
    MatchMedia(uri string) (MetaData, bool)
    GetMediaInfo(meta MetaData) (MediaInfo, error)
    GetMediaUrl(meta MetaData, quality Quality) ([]MediaUrl, error)
    GetMediaLyric(meta MetaData) ([]Lyrics, error)

    // 播放列表相关功能
    MatchPlaylist(uri string) (MetaData, bool)
    GetPlaylist(meta MetaData) (*Playlist, error)
}
```

#### 数据结构说明
以下是音源模块中常用的数据结构：

- **MetaData**: 用于标识媒体资源。
```go
type MetaData struct {
    Provider   string `json:"provider"`
    Identifier string `json:"identifier"`
}
```

- **MediaInfo**: 媒体信息，包括标题、艺术家、封面等。
```go
type MediaInfo struct {
    Title  string   `json:"title"`
    Artist string   `json:"artist"`
    Cover  Picture  `json:"cover"`
    Album  string   `json:"album"`
    Meta   MetaData `json:"meta"`
}
```

- **Playlist**: 播放列表，包含多个媒体信息。
```go
type Playlist struct {
    Title  string      `json:"title"`
    Medias []MediaInfo `json:"medias"`
    Meta   MetaData    `json:"meta"`
}
```

## 登录功能扩展

如果音源需要登录功能，可同时实现 `Loginable` 接口：
```go
type Loginable interface {
    Login(username string, password string) error
    Logout() error
    IsLogin() bool
    QrLogin() (*QrLoginSession, error)
    QrLoginVerify(qrlogin *QrLoginSession) (*QrLoginResult, error)
    RestoreSession(session string) error
    SaveSession() string
}
```

支持扫码登录功能：
- **QrLoginSession**: 扫码登录会话信息。
```go
type QrLoginSession struct {
    Url string `json:"url"`
    Key string `json:"key"`
}
```

- **QrLoginResult**: 扫码登录结果。
```go
type QrLoginResult struct {
    Success bool   `json:"success"`
    Message string `json:"message"`
}
```

## 参考项目

- [XiaoMengXinX/Music163Api-Go](https://github.com/XiaoMengXinX/Music163Api-Go)
- [luren-dc/QQMusicApi](https://github.com/luren-dc/QQMusicApi)
- [MakcRe/KuGouMusicApi](https://github.com/MakcRe/KuGouMusicApi)