const db = {
    id: process.env.develop.db.id,
    pw: process.env.develop.db.pw,
    database: process.env.develop.db.database,
    host: process.env.develop.db.host,
    dialect: process.env.develop.db.dialect
};

// TODO: 개발 모드 배포 모드 구분하기

export default db;