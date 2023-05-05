import React, {useRef, useEffect} from 'react'
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
import TableauScreenshot from './assets/tableau_screenshot.png';

function WaterConsumptionDashboard() {
    /*const ref = useRef(null)
    https://dub01.online.tableau.com/t/sefi/views/BI_Dashboard_Agrario/Dashboard
    const url = "https://dub01.online.tableau.com/t/sefi/views/BI_Dashboard_Agrario/Dashboard"

    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "100vh"
            <div ref={ref} />
        })useEffect(initViz, [])
        <TableauEmbed sourceUrl="https://dub01.online.tableau.com/t/sefi/views/BI_Dashboard_Agrario/Dashboard" />
    }*/

    
    return (
        
        <img src={TableauScreenshot} />
    
  )
}

export default WaterConsumptionDashboard
/*?:language=en&amp;:display_count=y&amp;:origin=viz_share_link:showVizHome=no&amp;:embed=true
<tableau-viz id="tableauViz"       
        src='https://dub01.online.tableau.com/#/site/sefi/views/BI_Dashboard_Agrario/Dashboard?:embed=y&:display_count=no&:showAppBanner=false&%20iframeSizedToWindow=true&:showVizHome=no?:embed=yes&:toolbar=no'      
        toolbar="bottom" hide-tabs>
        </tableau-viz>
        <tableau-viz id='tableau-viz' src='https://dub01.online.tableau.com/t/sefi/views/BI_Dashboard_Agrario/Dashboard' width='1000' height='840' hide-tabs toolbar='bottom' ></tableau-viz>
        <script type='module' src='https://dub01.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'></script>
*/