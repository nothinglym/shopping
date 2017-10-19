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
            //Ӧ�ü��м��
            middleware:function(req,res,next){
                //��ȡ��ƴ��·��
                var newurl=url.parse(req.url,true).search.split("?")[1];
                var pathname=path.join(__dirname,"./content/data",newurl+".json");
                //�ж��ļ��Ƿ����
               fs.exists(pathname,function(exist){
                    if(!exist){
                        //������Ӧͷ
                        res.writeHead(404,{
                            "Content-Type":"text/json;charset=UTF-8"
                        });
                        var data={
                            issuccess:false,
                            error:"no fount!"
                        };
                        //��Ӧ����
                        res.end(JSON.stringify(data));
                    }else{
                        //var data=fs.readFileSync(pathname);
                       // �����ļ�����ȡ�ļ�
                        fs.readFile(pathname,{encoding:'utf-8'},function(err,data){
                            //�����ж�
                            if(err){
                               return console.error(err);
                            }
                            var  newdata={
                                issuccess:true,
                                error:"",
                                data:data.toString()
                            };
                            //������Ӧͷ
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
