    # 2. For Nginx setup
    FROM nginx:alpine
    # Copy config nginx
    RUN rm /etc/nginx/conf.d/default.conf
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    RUN mkdir -p /u01/app
    # Copy static assets from builder stage
    COPY dist /u01/app