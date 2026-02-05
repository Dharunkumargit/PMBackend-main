import express from "express";
import {
  createBooking,
  getMyBookings,
  cancelBooking,
  getAllBookings,
} from "../booking/booking.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/createbooking",authMiddleware, createBooking);
router.get("/getbookings", authMiddleware,getMyBookings);


router.put("/cancelbookings/:id",authMiddleware, cancelBooking);

router.get("/getallbookings", getAllBookings);



export default router;