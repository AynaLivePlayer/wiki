---
layout: doc
title: 歌源支持
order: 1
---

# 🎵 歌源支持

## 网易云音乐 (netease)

🆔 **标识符**: `netease`

✅ **支持功能**:  
- 🔍 搜索 ✔️  
- 📰 媒体信息 ✔️  
- ▶️ 播放URL ✔️  
- 📜 歌词 ✔️  
- 📶 歌单 ✔️
- 🔑 登录 ✔️ (扫码)

💡 **特点**:  
- 曲库全面，歌词准确率高
- 支持网易云歌单导入

⚠️ **注意**: 
- 由于网易云api更变，需要登录才能使用


## QQ音乐 (qq)

🆔 **标识符**: `qq`

✅ **支持功能**:  
- 🔍 搜索 ✔️  
- 📰 媒体信息 ✔️  
- ▶️ 播放URL ✔️  
- 📜 歌词 ✔️  
- 📶 歌单 ✔️
- 🔑 登录 ✔️ (扫码)

💡 **特点**:  
- 曲库全面，歌词准确率高
- 支持歌单导入

⚠️ **注意**: 
- 需要登录才能使用


## 酷我音乐 (kuwo)

🆔 **标识符**: `kuwo`  

✅ **支持功能**:  
- 🔍 搜索 ✔️  
- 📰 媒体信息 ✔️  
- ▶️ 播放URL ✔️  
- 📜 歌词 ✔️  
- 📶 歌单 ✖️
- 🔑 登录 ✖️  

💡 **特点**:  
- 无需登录即可使用  


## 酷狗音乐 (kugou)

🆔 **标识符**: `kugou`

✅ **支持功能**:  
- 🔍 搜索 ✔️  
- 📰 媒体信息 ✔️  
- ▶️ 播放URL ✔️  
- 📜 歌词 ✔️
- 📶 歌单 ✔️
- 🔑 登录 ✔️ (扫码)

⚠️ **注意**:
- 酷狗概念版VIP与普通版不通用, 这里需要普通版
- 曲库比较大，但是有很多歌需要vip不然放不出来


## B站视频 (bilibili-video)

🆔 **标识符**: `bilibili`

✅ **支持功能**:  
- 🔍 搜索 ✔️  
- 📰 媒体信息 ✔️  
- ▶️ 播放URL ✔️  
- 📜 歌词 ✖️  
- 📶 歌单 ✔️
- 🔑 登录 ✖️  

🎥 **视频特性**:  
- 无需登录即可使用  
- 支持AV/BV号直接点播  
- 可播放翻唱/二创内容  



## 酷狗伴奏 (kugou-instr)

🆔 **标识符**: `kugou`

✅ **支持功能**:  
- 🔍 搜索 ✔️  
- 📰 媒体信息 ✔️  
- ▶️ 播放URL ✔️  
- 📜 歌词 ✔️
- 📶 歌单 ✔️
- 🔑 登录 ✔️ (扫码)

💡 **特点**:  
- 纯伴奏～ 适合唱见

⚠️ **注意**:
- 需要登录酷狗vip


## 本地音乐 (local)

🆔 **标识符**: `local`  

✅ **支持功能**:  
- 🔍 搜索 ✔️  
- 📰 媒体信息 ✔️  
- ▶️ 播放URL ✔️  
- 📜 歌词 ✔️
- 📶 歌单 ✔️
- 🔑 登录 ✖️

📁 **路径配置**:  
```ini
[Source]
LocalSourcePath = ./music
```

---

> ⚠️ 注意：部分歌源需要登录后才能解锁完整功能，详见[账号登录指南](#)

