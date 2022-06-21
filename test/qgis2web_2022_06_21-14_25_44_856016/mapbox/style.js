
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "LealletSnoCo_Parcels_0": {
            "type": "geojson",
            "data": json_LealletSnoCo_Parcels_0
        }
                    ,
        "LealletBuilding_Footprints_1": {
            "type": "geojson",
            "data": json_LealletBuilding_Footprints_1
        }
                    ,
        "LealletStorm_Lines_2": {
            "type": "geojson",
            "data": json_LealletStorm_Lines_2
        }
                    ,
        "LealletSewer_Mainlines_3": {
            "type": "geojson",
            "data": json_LealletSewer_Mainlines_3
        }
                    ,
        "LealletWater_Mainlines_4": {
            "type": "geojson",
            "data": json_LealletWater_Mainlines_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_LealletSnoCo_Parcels_0_0",
            "type": "fill",
            "source": "LealletSnoCo_Parcels_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_LealletSnoCo_Parcels_0_1",
            "type": "symbol",
            "source": "LealletSnoCo_Parcels_0",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'SITUSHOUSE'], 'text-size': '12.607142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-halo-width': '1.7857142857142856', 'text-halo-color': '#ffffff', 'text-color': '#323232'}
        }
,
        {
            "id": "lyr_LealletBuilding_Footprints_1_0",
            "type": "fill",
            "source": "LealletBuilding_Footprints_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#7d8b8f'}
        }
,
        {
            "id": "lyr_LealletStorm_Lines_2_0",
            "type": "line",
            "source": "LealletStorm_Lines_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#c001ff'}
        }
,
        {
            "id": "lyr_LealletSewer_Mainlines_3_0",
            "type": "line",
            "source": "LealletSewer_Mainlines_3",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#00fa13'}
        }
,
        {
            "id": "lyr_LealletWater_Mainlines_4_0",
            "type": "line",
            "source": "LealletWater_Mainlines_4",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#4099ff'}
        }
],
}