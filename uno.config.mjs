import {defineConfig,presetWind3} from 'unocss';
export default defineConfig({presets:[presetWind3()],rules:[
 ['content-stretch',{'align-content':'stretch'}],
 [/^font-\['(.+)'\]$/,([,f])=>{const [family,style='Regular']=f.replaceAll('_',' ').split(':');return {'font-family':family.startsWith('SF')?'-apple-system,BlinkMacSystemFont,system-ui,sans-serif':family+', sans-serif','font-weight':/semi.?bold/i.test(style)?600:/bold/i.test(style)?700:/medium/i.test(style)?500:400};}],
 [/^bg-gradient-to-([brl])$/,([,d])=>({'background-image':`linear-gradient(to ${{b:'bottom',r:'right',l:'left'}[d]},var(--un-gradient-stops))`})],
 ['mix-blend-plus-lighter',{'mix-blend-mode':'plus-lighter'}],
 [/^rotate-(-?\d+)$/,([,n])=>({'--un-rotate':`${n}deg`,transform:'translate(var(--un-translate-x,0),var(--un-translate-y,0)) rotate(var(--un-rotate)) scaleX(var(--un-scale-x,1)) scaleY(var(--un-scale-y,1))'})]
]});

