const multer = require("multer");
const path = require("path");
const fs = require("fs");

const createFolder = (folderName) => {
    try {
        console.log(`${folderName}폴더 생성을 하는 중 입니다.`)
        if (folderName === 'img') {
            fs.mkdirSync(path.join(__dirname, '../public', `${folderName}`))
            console.log(`${folderName}폴더가 생성되었습니다.`)
        }

        if (folderName === 'video') {
            fs.mkdirSync(path.join(__dirname, '../public', `${folderName}`))
            console.log(`${folderName}폴더가 생성되었습니다.`)
        }
    } catch (e) {
        console.log(`${folderName}폴더가 이미 존재합니다.`)
    }
}

const gameCreateStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const slug = req.params.slug
        if (file.fieldname === 'gameImage') {
            const checkFolder = createFolder('img', slug);
            cb(null, `public/img/`);
        } else if (file.fieldname === 'gameVideo') {
            const checkFolder = createFolder('video', slug);
            cb(null, 'public/video/');
        } else {
            cb(new Error('Invalid field name'), false);
        }
    },
    filename: (req, file, cb) => {
        const name = `${file.originalname}`;
        cb(null, name);
    }
});

const gameModifiedStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const slug = req.params.slug
        if (file.fieldname === 'gameImage') {
            const checkFolder = createFolder('img', slug);
            cb(null, `public/img/`);
        } else if (file.fieldname === 'gameVideo') {
            const checkFolder = createFolder('video', slug);
            cb(null, 'public/video/');
        } else {
            cb(new Error('Invalid field name'), false);
        }
    },
    filename: (req, file, cb) => {
        const slug = req.params.slug
        const ext = path.extname(file.originalname);
        const name = `${slug}${ext}`;
        cb(null, name);
    }
});


module.exports = {
    gameCreateUpload: multer({ storage: gameCreateStorage }),
    gameModifiedUpload: multer({ storage: gameModifiedStorage })
}