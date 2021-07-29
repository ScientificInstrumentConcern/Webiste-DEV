import Instrument from "../model/instrument.model.js";
import asyncHandler from "express-async-handler";
import  Mongoose  from "mongoose";

/**
 * @description Get all the instruments available
 * @route GET /instruments
 * @public
 *
 */
export const getInstrument = asyncHandler(async (req, res) => {
  const instruments = await Instrument.find({});
  if (instruments) {
    res.status(200).json(instruments);
  } else {
    res.status(404).json({ message: error.message });
  }
});



/**
 * @description Get single instrument
 * @route GET /instruments/:id
 * @public
 * @param {number} id  
*/
export const getSingleInstrument = asyncHandler(async (req, res) => {
  const { id: id } = req.params;
  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No Instrument with that Id is Found");
  const instrument = await Instrument.findById(id);
  res.json(instrument);
})





/**
 * @description Add new instrument to the list
 * @route POST /instruments/add
 * @admin
 *
 */
export const createInstrument = asyncHandler(async (req, res) => {
  const {code, name, desc, itemImg, descImg , optionalImg} = req.body; 

  const newInstrument = {
    code: code,
    name: name,
    desc: desc,
    itemImg: itemImg,
    descImg: descImg,
    optionalImage : optionalImg
  };

  const instrument = new Instrument(newInstrument);
  try {
    await instrument.save();
    res.status(201).json(instrument);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

/**
 * @description Update instrument
 * @route PUT /instruments/update
 * @admin
 *
 */
export const updateInstrument = asyncHandler(async (req, res) => {
  const { id: id } = req.params;
  const instrumentUpdate = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that is Found");

  const instrument = await Instrument.findByIdAndUpdate(id, instrumentUpdate, {
    new: true,
  });
  res.json(instrument);
});




/**
 * @description Delete a specific instrument
 * @route Delete /instruments/delete
 * @admin
 * @param {}
 */
export const deleteInstrument = async (req, res) => {
  try {
    const deleteusernote = await Instrument.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deleteusernote);
  } catch (error) {
    res.status(404);
    next(error);
  }
};


