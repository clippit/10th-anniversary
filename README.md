# A little hack to jekyll

因为当前发布版的jekyll 0.11.2在扫描目录时会忽略以`.`开头的隐藏文件，即便在`_config.yml`中显式`include`也不行。git上的最新版已经修复了这个问题，如果不愿意去跟master，可以在本地对其稍微hack一下。

在jekyll的`site.rb`中（该文件可能位于`~/.rvm/gems/ruby-1.9.3-p125/gems/jekyll-0.11.2/lib/jekyll/site.rb`）中，找到第126行：

    entries = Dir.chdir(base) { filter_entries(Dir['*']) }

将其修改为：

    entries = Dir.chdir(base) { filter_entries(Dir.entries('.')) }

保存即可。[ref](https://github.com/mojombo/jekyll/commit/9d70088f01d41dccbc3e4eedd7f2435ff25dcd31)


# 在 Windows 下使用 jekyll

Ruby这个玩意在Windows下简直就是杯具。首先可以去[RubyInstaller](http://rubyinstaller.org/)下载Ruby for Windows的安装包安装。然后既然要用到Git，所以那个[msysgit](http://code.google.com/p/msysgit/)自然也是需要安装的。接着，因为安装某些gem需要编译环境，所以还需要一个MinGW，RubyInstaller提供的[Development Kit](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit)是一个不错的选择。

以上都安装好了以后，便可以用`gem`安装jekyll了。首先打开msys的命令行，去DevKit目录下运行`devkitvars.bat`把编译工具添加进系统PATH。可以先`gem update --system`一下然后再`gem install jekyll`。用来解析Markdown的`rdiscount`也可以如此来安装。

以后的工作可以都在Git Bash那个命令行环境下进行。不过这时候在目录里执行`jekyll`会报编码错误。我们需要在命令行里`vim ~/.bashrc`，然后把下面两行加入配置文件：

    export LC_ALL=zh_CN.utf8
    export LANG=zh_CN.utf8

保存后可以`source ~/.bashrc`，也可以关掉窗口重新打开。这时候再生成页面应该就不会有问题了。
