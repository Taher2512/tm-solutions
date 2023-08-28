"use client"
import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image  from 'next/image';
import { Input } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GitHub } from '@mui/icons-material';
export default function Footer() {
  return (
    
<div class="w-full h-50 flex items-center justify-center bg-sky-950">
        <div class="md:w-2/3 w-full px-4 text-teal-200 flex flex-col">
            <div class="w-full mt-5 text-7xl font-bold">
                <h1 class="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div class="flex mt-7 flex-col md:flex-row md:justify-between">
                <p class="w-full md:w-2/3  text-teal-600">Unlocking Innovation Through Lines of Code: Where Diverse Talents Converge to Shape Digital Realities - Exploring Our Portfolios, Embracing Possibilities.</p>
                <div class=" flex w-44 pb-20 md:pt-0">
                <div ><img className='h-10 w-10 ml-2 ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nO2ZvUoDQRSFP1Hs/AFtBQt9A99BwV20FIV0lr6CjQTyID6DnSbqg9gp/iDopkpzZWEaw+zOzFrsHbkHThNuZs+Xu3dmk4DJZOqqI2ACTAHp2VNgDJSpECMF4aXBw5ROiHIXMSATBUEl4LsYkEpBUAn4OwZEMnFQfQcUA5lT2yfyApwAG85nwFuOHdlXtF0H1fbmVU/9Wo4gpae+yBHkHRgAm871jLzmCCKKHFTfAcVA5tSlnSk1j+4s2gKWgRVgD7gEPnIAqQ/Og8C114Eb7SA7MRcHloAHzSAp2gZmOYAsRtRcawa5AJ5d3RNw3lJ7qhXkOPH7965WkPuGNevfCOjwMNobyGfDmvXrPi1oBfnrumIgWEe8slsLmxFs1xL/eNiMiJ0jtG+TmhzUvwGpFISUgL9iQMYKgkrAtzEgpYKgEvAhkRoqCCsNviJRhfv3VMPMVO52iu6EyWTil34AFdRDhxtrT8cAAAAASUVORK5CYII="></img></div>
                <div ><img className='h-10 w-10 ml-2'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABr0lEQVR4nO2Vu0oDQRSGPxVUFCwUJF4RL621F0RRsDOoqLWNhZdokdbKt1CJF7QSBEWCFoJPYGMVKy3shIgx3mKiEpiFZZiZnd0EscgPQ9jN+c+35zBnBkr6h2oHIsAFkADSYiXEuxWgrZjAFmATyAI/HisHHAEdhUIngRcLoLxSQDgodE1U4Bfqrn41SKW5AqBuuHXlrYr29gG9QMwDFBNxA1Lbm23AquRVUjeGgUagQvyOiPeOqiX/ts3IqHZvN/7UI/mzopNaRTQtHPQJHlLkWDYZzhWGY4LpVMoTNwXfKsD9AcFy1QlTcMpjY/lRreJQ0SqtANcRTA1SnldT8J0CPBEQPC3luTcFxxXgazGXflQD3Eh5zkyGqGacLm1PHzGvV4ocUZMpf59mNPA3YAeYBTolX/55DtgD3hXeDNDk9cUHLsM8cKL4gHHJMwp8GM7wfduLPykMj0A9cCgSPwHrGt+GBvpsU62jGde1uGDp6dJci1O2UEdLwDfwAIxZ7OxyBXSRgAqL9roTmuTEJINUKis/RlvAlwX4E9gFQhRRIXFtVmr+L/Mx6yXxZ/oFDl37po6ZopsAAAAASUVORK5CYII="/></div>
                <div><img className='h-10 w-10 ml-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkElEQVR4nO2aTU8UQRCGHyIfazACCyteTORkCEa9+gcUIypwQ/EmwYtIUI8oR4OeiCT8Dg0hGL9I1IgfKBcVgRPowag3FwjqmI7vJB1hdreH2d1Z45t0stBV1VXT1VU11QP/8e8iCbQDN4Bx4D3wDVjTML/fac7QnALqiAkSwFngLvAT8BzHD2AS6AaqimHAduAS8MlSahV4AAxqZ5r1xCs06vQ/M3cVeCgen/8jMKCHUxAcBxYtBV4A54CaELJqgR7gpSVvAThGHmGe1Ji14CvgSITyW4HXlvzRfOzObiluFvgOXAC2Rb0If2ReBNLWbjdGJbxJ2+0p6uwn/zgAzGnNeemwJaQsgc+BBgqHOuCx1l6UV4RCwnKnp0A1hUc18Mxys1BnZsxyJ5PsXLEPGJYCn4Ff1kF2Uaje8goTAJxDrH+wXc+ESWy3siTIRIgzkxaviW45Jzs/T5jo5IIKZflsGT2Mi/Rbhz8n/stWnnANsddzLE3CGFIOvBG/MSojElbZ4Zrs9vxVckRtCMr4hn85W23WbUUIV1xxKBbDGlJmRdLTmQh9/za1kyvuBSj9SLsVFXoldyKIIKmyejVkAbgUYMhhok+Ua8B6kJ4dWvh+jgK9iIcLpsRzYrPJm5ocLAFDhsRjEu4GjGvyZAkY0iGe25tNftBkcwkY0iIe0xfYgK+aTJaAIQ3iMTXcBqxpsrIEDKkSz2oUhuRqWFi60Ia4ulYxDUllci3Xwx5Wwbwf9nFNmg5g3A3pzBR+/YRommdxN2QoU0Js16TpFsbdkCnxtAUVY37RWBtjQ5JW0bgziGhSQntibMh50ZszHYgzIjK92DgaUgbMiL4rW6JZFuHRGBrSJtqlXK4hBkQ849h8yLch5cCsaPtyUShh9XpNQzkuGJBOcy6XQn63Iq3mWLFxCFiRTs5XGaPWEzBty2Ihpaac0WUkjICE2kKeGsnFaGLvAKalw/RW7hlTKsz8awXzd6GQBJ5o7YUoLnyarK01bnaQwpyJea1pqvK9UQlutNwsrd6rCYdRo1zRacVyp11RL5KwAoCnhnJUt69lusqYteSP5PvuvdXadk+92N6QXzEkVTv5ZYcnV4rytjjr7vRb5YynitSU19fUd2pR2K7UqNelUadopqw+gV929BXrC4gqdcUn9ArgOY51VbFdxTJgM9SoF2ve2u7o7vGL9VGN+f1Wr6fDog18n/gPShy/AdBTTaK+n4r1AAAAAElFTkSuQmCC"/></div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex mt-18 mb-9 flex-row justify-between">
                    <a href='#about' class="hidden md:block cursor-pointer text-gray-600 hover:text-teal-200 uppercase">About</a>
                    <a href='#portfolio' class="hidden md:block cursor-pointer text-gray-600 hover:text-teal-200 uppercase">Portfolio</a>
                    <a href='#contact' class="hidden md:block cursor-pointer text-gray-600  hover:text-teal-200 uppercase">Contact</a>
                    <div class="flex flex-row space-x-8 items-center justify-between">
                        
                    </div>
                </div>
                <hr class="border-gray-600"/>
                <p class="w-full text-center my-4 text-gray-600">Copyright © 2023 TM Solutions</p>
            </div>
        </div>
    </div>
  )
}
