# A little hack to jekyll

因为当前发布版的jekyll 0.11.2在扫描目录时会忽略以`.`开头的隐藏文件，即便在`_config.yml`中显式`include`也不行。git上的最新版已经修复了这个问题，如果不愿意去跟master，可以在本地对其稍微hack一下。

在jekyll的`site.rb`中（该文件可能位于`~/.rvm/gems/ruby-1.9.3-p125/gems/jekyll-0.11.2/lib/jekyll/site.rb`）中，找到第126行：

    entries = Dir.chdir(base) { filter_entries(Dir['*']) }

将其修改为：

    entries = Dir.chdir(base) { filter_entries(Dir.entries('.')) }

保存即可。