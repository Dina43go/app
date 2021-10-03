const db = require('../config/db');
class Post {
    constructor(titre , contenu) {
        this.titre = titre;
        this.contenu = contenu;
    }

    static closeDB(){
        db.end;
    }

    savePost() {
        let d = getDateNow();
        const sql = `
            INSERT INTO postes (
                titre,contenu,create_at
            ) VALUES ('${this.titre}',"${this.contenu}",'${d}')
        `
        return db.execute(sql)
    }

    static getAllPost () {
        let sql = `
            SELECT * FROM postes
        `
        return db.execute(sql);
    }

    static getPostId(id) {
        let sql = `
            SELECT * FROM postes WHERE id_post = '${id}'
        `
        return db.execute(sql);
    }
}

let getDateNow = ()=>{
    let date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDay();
    return `${y}-${m}-${d}`;
}

module.exports = Post;