mongo blog --eval "db.projects.drop()"
mongoimport -d blog -c projects --file app/js/projects/projects.json --jsonArray

mongo blog --eval "db.posts.drop()"
mongoimport -d blog -c posts --file app/js/posts/posts.json --jsonArray

mongo blog --eval "db.gallery.drop()"
mongoimport -d blog -c gallery --file app/js/gallery/gallery.json --jsonArray