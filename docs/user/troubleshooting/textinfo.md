# 文本输出相关

**Q: 文本输出的歌曲时间，秒数部分只有个位数的时候不显示十位，有没有办法做到显示4:01 0:06这种**

![](/assets/Screenshot_20240903_215652.png)

前面加上`printf "%02d"`
:::v-pre
比如 `{{printf "%02d" .CurrentTime.Minutes}}` 就会把`1`显示为`01`
:::
