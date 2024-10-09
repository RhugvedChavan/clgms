import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('index')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/manage-student', (req, res) => {
    res.render('manage-students')
})
router.get('/manage-faculty', (req, res) => {
    res.render('manage-faculty')
})

router.get('/Manage-courses', (req, res) => {
    res.render('Manage-courses')
})

router.get('/Assignments', (req, res) => {
    res.render('Assignments')
})
router.get('/attendance', (req, res) => {
    res.render('attendance')
})
router.get('/annoucement', (req, res) => {
    res.render('announcement')
})
router.get('/Manage-fees', (req, res) => {
    res.render('Manage-fees')
})




export default router;