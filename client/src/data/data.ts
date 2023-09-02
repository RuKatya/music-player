import Alex_Kizenkov from "../music/Alex_Kizenkov.mp3"
import Alex_Kizenkov1 from "../music/Alex_Kizenkov1.mp3"
import BLACKBOX from "../music/BLACKBOX.mp3"
import BLACKBOX1 from "../music/BLACKBOX1.mp3"
import LiteSaturation from "../music/LiteSaturation.mp3"
import Muzaproduction from "../music/Muzaproduction.mp3"
import Pixabay from "../music/Pixabay.mp3"
import Pixabay1 from "../music/Pixabay1.mp3"
import Pixabay2 from "../music/Pixabay2.mp3"
import Pixabay3 from "../music/Pixabay3.mp3"
import Pixabay4 from "../music/Pixabay4.mp3"
import SergeQuadrado from "../music/SergeQuadrado.mp3"
import SergeQuadrado1 from "../music/SergeQuadrado1.mp3"
import UNIVERSFIELD from "../music/UNIVERSFIELD.mp3"
import XtremeFreddy from "../music/XtremeFreddy.mp3"
import Soundmusicgmb from "../music/Soundmusicgmb.mp3"

export interface Music {
    name: string,
    audio: string
}
export const allMusic: Music[] = [
    { name: "Alex_Kizenkov", audio: Alex_Kizenkov },
    { name: "Alex_Kizenkov1", audio: Alex_Kizenkov1 },
    { name: "BLACKBOX", audio: BLACKBOX },
    { name: "BLACKBOX1", audio: BLACKBOX1 },
    { name: "LiteSaturation", audio: LiteSaturation },
    { name: "Muzaproduction", audio: Muzaproduction },
    { name: "Pixabay", audio: Pixabay },
    { name: "Pixabay1", audio: Pixabay1 },
    { name: "Pixabay2", audio: Pixabay2 },
    { name: "Pixabay3", audio: Pixabay3 },
    { name: "Pixabay4", audio: Pixabay4 },
    { name: "SergeQuadrado", audio: SergeQuadrado },
    { name: "SergeQuadrado1", audio: SergeQuadrado1 },
    { name: "UNIVERSFIELD", audio: UNIVERSFIELD },
    { name: "XtremeFreddy", audio: XtremeFreddy },
    { name: "Soundmusicgmb", audio: Soundmusicgmb },
]