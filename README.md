~~~ other language
docker run -d --name=firefox -p 5800:5800 -v /workspace/react-js-sample/config:/config:rw -v /workspace/react-js-sample:/workspace:rw --shm-size 2g -e "DISPLAY_WIDTH=1920" -e "DISPLAY_HEIGHT=1080" -v /usr/share/fonts:/usr/share/fonts  jlesage/firefox
~~~

~~
docker run -d --name=firefox -p 5800:5800 -v /workspace/react-js-sample/config:/config:rw -v /workspace/react-js-sample:/workspace:rw --shm-size 2g -e "DISPLAY_WIDTH=1920" -e "DISPLAY_HEIGHT=1080" jlesage/firefox
~~~
