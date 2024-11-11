# 文本输出

## 开启文本输出

设置 -> 文本输出 -> 勾选/取消勾选 开启文本输出

## 基本概念

点歌机启动时，会自动读取位于点歌机文件夹下的`template`文件夹中的所有`.txt`文件，作为模板文件输入。每一个`.txt`文件被称为一个模板文件。

点歌机会根据读取到的模板文件进行信息渲染。渲染是指将模板文件中的占位符或变量替换为实际的数据。

渲染后的文本文件将被保存到`txtinfo`文件夹中，以供obs或者直播姬进行使用。

## 如何使用模板

TBD

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1103725583&bvid=BV1Zw4m1y7xQ&cid=1626292156&p=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="720px" height="480"></iframe>

## 食用示例

### 只有歌词

假如你有`template/lyric.txt`文件
```text
 {{ .Lyric}}
```

会在`txtinfo/lyric.txt`中输出

```text
This night is cold in the kingdom
```

### 当前歌曲信息

假如你有`template/current.txt`文件
```text
歌名: {{ .Current.Title }} 点歌用户: {{ .Current.Username }}
```

会在`txtinfo/current.txt`中输出

```text
歌名: Let Me Down Slowly 点歌用户: Aynakeya
```


## 附录1: 模板占位符列表

### 基本信息

| 模板占位符                            | 描述                   |
|----------------------------------|----------------------|
| `{{ .Lyric }}`                   | 当前歌词                 |
| `{{ .Current.Title }}`           | 当前歌曲名字               |
| `{{ .Current.Artist }}`          | 当前歌曲作者               |
| `{{ .Current.Artist }}`          | 当前歌曲专辑名              |
| `{{ .Current.Username }}`        | 当前点歌用户名              |
| `{{ .CurrentTime.TotalSeconds}}` | 当前播放进度 (秒)           |
| `{{ .CurrentTime.Minutes}}`      | 当前播放进度 (分秒格式的 分 部分)  |
| `{{ .CurrentTime.Seconds}}`      | 当前播放进度 (分秒格式的 秒 部分)  |
| `{{ .TotalTime.TotalSeconds}}`   | 当前歌曲总时间 (秒)          |
| `{{ .TotalTime.Minutes}}`        | 当前歌曲总时间 (分秒格式的 分 部分) |
| `{{ .TotalTime.Seconds}}`        | 当前歌曲总时间 (分秒格式的 秒 部分) |
| `{{ .PlaylistLength }}`          | 用户点歌列表长度             |
| `{{ .Playlist }}`                | 播放列表 (不要直接使用， 看下面)   |

### 播放列表

*播放列表占位符必须在 `{{range .Playlist}}` 和 `{{end}}` 中间才会生效*

`{{range .Playlist}}`

| 模板占位符                            | 描述                   |
|----------------------------------|----------------------|
| `{{ .Index }}`           | 播放列表中的歌的顺位 (从0开始)     |
| `{{ .Title }}`           | 播放列表中的歌曲名字               |
| `{{ .Artist }}`          | 播放列表中的歌曲作者               |
| `{{ .Artist }}`          | 播放列表中的歌曲专辑名              |
| `{{ .Username }}`        | 播放列表中的点歌用户名              |

`{{end}}`