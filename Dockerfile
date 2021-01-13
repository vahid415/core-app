FROM tomcat:9.0.1-jre8-alpine
ADD ./mcb-production /usr/local/tomcat/webapps/mcb-ui
#EXPOSE 80
CMD ["catalina.sh", "run"]
