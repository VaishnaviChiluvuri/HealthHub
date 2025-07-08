import express from 'express'
import { addDoctor, allDoctors} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import { loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailability)

export default adminRouter;