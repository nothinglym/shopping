var gulp=require("gulp");
var url=require("url");
var path=require("path");
var fs=require("fs");
var server=require("gulp-webserver");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
gulp.task("server",function(){
    gulp.src("./content/data")
        .pipe(server({
            port:8080,
            host:"localhost",
            livereload:true,
            directoryListing:{
                path:"./",
                enable:true
            },
            //应用级中间件
            middleware:function(req,res,next){
                //截取并拼接路径
                var newurl=url.parse(req.url,true).search.split("?")[1];
                var pathname=path.join(__dirname,"./content/data",newurl+".json");
                //判断文件是否存在
               fs.exists(pathname,function(exist){
                    if(!exist){
                        //设置响应头
                        res.writeHead(404,{
                            "Content-Type":"text/json;charset=UTF-8"
                        });
                        var data={
                            issuccess:false,
                            error:"no fount!"
                        };
                        //响应结束
                        res.end(JSON.stringify(data));
                    }else{
                        //var data=fs.readFileSync(pathname);
                       // 存在文件并读取文件
                        fs.readFile(pathname,{encoding:'utf-8'},function(err,data){
                            //错误判断
                            if(err){
                               return console.error(err);
                            }
                            var  newdata={
                                issuccess:true,
                                error:"",
                                data:data.toString()
                            };
                            //设置响应头
                          res.writeHead(200,{
                              "Content-Type":"text/json;charset=UTF-8",
                              "Access-Control-Allow-Origin":"http://localhost:63342"
                          });
                            res.end(data)
                        })

                    }
               })
            }
        }))
});
