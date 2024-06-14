"use client";
import Layout from '@/components/Layout'
import Image from 'next/image';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
  }

export default function Home() {
    return (
        <Layout>
            <div className='flex items-center flex-1'>
                <div className='w-screen  flex flex-col items-center'>
                    <div className='flex items-end'>
                        <Image src={"/R.svg"} width={300} height={300} alt='LOGO REGIN PUBLICIDAD'></Image>
                        <h1 class="text-9xl font-bold">ELAJATE...</h1>
                    </div>
                    <h2 className='px-28 pt-10 text-3xl'>Si no tenemos la solución para tu duda, la buscaremos juntos y lograremos aquello que más deseas.</h2>
                </div>
                <div className=' h-screen relative -z-40'>
                </div>
            </div>


            <div class="flex justify-center items-center">

                <div class="bg-white text-black p-8 rounded-lg shadow-lg ml-8 w-1/2">
                    <h2 class="text-3xl font-bold mb-6">Reservemos una cita</h2>

                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <TextField
                            label="Nombres y Apellidos"
                            variant="outlined"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            label="Teléfono"
                            variant="outlined"
                            sx={{ flex: 1 }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <TextField
                            label="Correo"
                            variant="outlined"
                            sx={{ flex: 1 }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 2 }}>
                        <TextField
                            label="Empresa"
                            variant="outlined"
                            sx={{ flex: 1 }}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Elige una fecha"
                                sx={{ flex: 1 }}
                            />
                        </LocalizationProvider>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mt: 2,justifyContent: 'center' }}>

                    <ReCAPTCHA
                        sitekey="6LdIfPgpAAAAAAp_tiY2NmRTvbKCZ2u6L1hpqWqc"
                        onChange={onChange}
                    />
                    </Box>
                    <div class="mb-4">
                        <label for="description" class="block text-sm font-medium">Descripción</label>
                        <textarea id="description" name="description" rows="3" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-regin_cyan focus:border-regin_cyan sm:text-sm"></textarea>
                    </div>
                    <div class="mb-4">
                        <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                    </div>
                    <FormGroup>
                        <FormControlLabel required control={<Checkbox />} label="Acepto las condiciones del servicio" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Alertarme sobre promociones y servicios" />
                    </FormGroup>
                    <button type="submit" class="w-full bg-regin_cyan text-black p-3 rounded-md font-bold text-lg">Enviar</button>

                </div>
            </div>



        </Layout >
    );
}
