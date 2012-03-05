desc "Build site using Jekyll"
task :build do
  jekyll
end

desc "Serve on Localhost with port 4000"
task :default do
  jekyll "--server --auto"
end

desc "Deploy to server"
task :deploy do
  rsync "10th-anniversary"
end

def jekyll(opts="", path="")
  sh "rm -rf _site"
  sh path + "jekyll " + opts
end

def rsync(path)
    sh "rsync -avz --delete _site/ clippit@218.94.159.105:~/#{path}/"
end
