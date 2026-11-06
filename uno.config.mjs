import {defineConfig,presetWind3} from 'unocss';
export default defineConfig({presets:[presetWind3()],rules:[
 ['content-stretch',{'align-content':'stretch'}],
 [/^font-\['(.+)'\]$/,([,f])=>({'font-family':f.replaceAll('_',' ').split(':')[0]+', sans-serif'})],
 [/^bg-gradient-to-([brl])$/,([,d])=>({'background-image':`linear-gradient(to ${{b:'bottom',r:'right',l:'left'}[d]},var(--un-gradient-stops))`})],
 ['mix-blend-plus-lighter',{'mix-blend-mode':'plus-lighter'}],
 [/^rotate-(-?\d+)$/,([,n])=>({'--un-rotate':`${n}deg`,transform:'translate(var(--un-translate-x,0),var(--un-translate-y,0)) rotate(var(--un-rotate)) scaleX(var(--un-scale-x,1)) scaleY(var(--un-scale-y,1))'})]
]});
