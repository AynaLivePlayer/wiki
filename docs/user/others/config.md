---
layout: doc
title: 配置文件
---

# 配置文件

配置文件储存在点歌机目录下的`config.ini`文件中

**注意: 配置文件的修改必须在软件关闭后才能修改，否则软件关闭的时候会覆盖掉修改的内容。**

## [General]
全局配置选项。

**Width**：定义软件窗口的宽度，单位是像素。默认值为 `960`。

**Height**：定义软件窗口的高度，单位是像素。默认值为 `480`。

**Language**：设置软件的语言环境。`zh-CN` 代表简体中文。

**InfoApiServer**：指定用于获取软件信息或更新的 API 服务器地址。

**AutoCheckUpdate**：设置是否自动检查软件更新。`false` 表示不自动检查，`true` 表示自动检查。

**ShowSystemTray**：设置软件关闭时是否缩小到系统托盘。`false` 表示直接关闭，`true` 表示是。设置后，需要右键托盘图标，点exit退出软件。

**PlayNextOnFail**：设置当前播放失败时是否自动播放下一首歌。`false` 表示不自动播放，`true` 表示自动播放。

**UseSystemPlaylist**：是否播放闲置列表。`true` 表示使用，`false` 表示不使用。

**FixedSize**：定义窗口是否是固定大小。`true` 表示窗口大小固定，`false` 表示窗口大小可调整。

**EnableSMC**: 是否启用SMTC(windows system media transport control), 对于旧版本windows可能不兼容，`true` 表示启用，`false` 表示不启用。


## [Experimental]
实验性功能

**Headless**:  无gui模式，默认为`false`，`true`代表不开启`gui`，可以在服务器上等无gui环境中开启。

## [Log]
日志配置。

**Path**：日志文件的保存路径。默认为 `./log.txt`。

**Level**：日志记录的详细级别，通常使用数字表示，debug(3), info(2), warn (1)，默认为2，如果需要更多的日志信息，请把2改为3。

**RedirectStderr**：是否将panic错误输出重定向到日志文件。`false` 表示不重定向，`true` 表示重定向。

**MaxSize**：日志文件的最大大小，单位为 MB。当日志文件超过此大小时，会清空原来的日志。

## [Player]
播放器配置。

**Volume**：播放器的音量，范围通常为 `0` 到 `100`。

**AudioDevice**：指定音频输出设备。`auto` 表示自动选择默认设备。

**DisplayMusicCover**：是否在视频输出中显示音乐封面。`true` 表示显示，`false` 表示不显示。

## [Source]
音乐源配置。

**LocalSourcePath**：本地音乐文件夹的路径，默认为 `./music`。

## [Playlist]
播放列表配置。

**PlayerPlaylistMode**：用户歌单播放模式，`0` (顺序播放)，`1` (随机播放)。

**SystemPlaylistMode**：闲置歌单播放模式，`0` (顺序播放)，`1` (随机播放)。

**SystemPlaylistID**：指定闲置歌单ID。

**PlaylistsPath**：本地播放列表文件缓存的路径，默认为 `./config/playlists.json`。

## [LiveRoom]
弹幕服务配置。

**ApiServer**：弹幕服务器API的地址。

- 主服务器: `https://ayliveplayer.scene.aynakeya.com:10443/`
- 备用服务器: `https://api.biliaudiobot.com/`

*在主服务器无法连接，比如出现connecttion reset的情况，尝试使用备用服务器。*

**LiveRoomPath**：本地直播房间配置文件的路径，默认为 `./config/liveroom.json`。

## [Diange]
点歌功能配置。

**UserPermission**：普通用户是否有权限点歌，`true` 表示有权限。

**PrivilegePermission**：特权用户是否有点歌权限，`true` 表示有权限。

**AdminPermission**：管理员是否有点歌权限，`true` 表示有权限。

**MedalName**：勋章名称，留空表示没有特定要求。

**MedalPermission**：勋章权限等级，`0` 表示没有权限限制。

**QueueMax**：点歌队列的最大长度，默认为 `128`。

**UserMax**：单个用户在当前队列中最多能点的歌数，默认为 `2`。

**UserCoolDown**：用户点歌的冷却时间，`-1` 表示没有冷却时间。

**CustomCMD**：自定义点歌命令，默认为 `点歌`。可以配置多个点歌命令，中间用`|`隔开。

比如`点歌|點歌`，就代表可以同时使用`点歌`和`點歌`作为默认点歌命令

**SourceConfigPath**：点歌源配置文件的路径，默认为 `./config/diange.json`。

**BlackListItemPath**：点歌黑名单文件的路径，默认为 `./config/diange_blacklist.json`。

**SkipSystemPlaylist**：点歌时是否顶掉闲置歌单，`true` 表示跳过，`false`表示为不跳过。

## [Qiege]
切歌功能配置。

**UserPermission**：普通用户是否有权限切歌，`true` 表示有权限，`false`表示没有权限。

**PrivilegePermission**：特权用户是否有切歌权限，`true` 表示有权限，`false` 表示没有权限。

**AdminPermission**：管理员是否有切歌权限，`true` 表示有权限，`false` 表示没有权限。

**CustomCMD**：自定义切歌命令，默认为 `切歌`。

## [SourceLogin]
歌源登录配置，**不要外泄**。



**SessionPath**：歌源session数据的存储路径，默认为 `config/source_session.json`。

## [TextInfo]
文本输出配置

**Rendering**：是否启用文本信息渲染，`true`表示启用，`false` 表示不启用。

## [MaxDuration]
最长播放时长配置。

**MaxDuration**：最大允许播放的时长（秒）。`240` 表示 240 秒。

**SkipOnPlay**：是否在播放时直接跳过超长的曲目，`false` 表示不跳过。

**SkipOnReach**：曲目播放到最大时长时是否跳过，`false` 表示不跳过。

## [WsHub]
WebSocket Hub 配置。

**Enabled**：是否启用 WebSocket Hub，`false` 表示不启用。

**Port**：指定 WebSocket Hub 的端口号，默认为 `29629`。

**LocalHostOnly**：是否仅允许本地连接，`true` 表示仅允许本地连接。

**EnableWsHubControl**：是否可以通过websocket控制点歌机，`false` 表示不启用。