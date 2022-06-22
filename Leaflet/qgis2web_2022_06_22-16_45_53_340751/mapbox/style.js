
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "SnoCo_Parcels_sans_dups_0": {
            "type": "geojson",
            "data": json_SnoCo_Parcels_sans_dups_0
        }
                    ,
        "Generalize_LINES_parcels_1": {
            "type": "geojson",
            "data": json_Generalize_LINES_parcels_1
        }
                    ,
        "LealletBF_2": {
            "type": "geojson",
            "data": json_LealletBF_2
        }
                    ,
        "Water_Mainlines_d_3": {
            "type": "geojson",
            "data": json_Water_Mainlines_d_3
        }
                    ,
        "Storm_Lines_d_4": {
            "type": "geojson",
            "data": json_Storm_Lines_d_4
        }
                    ,
        "Sewer_Mainlines_d_5": {
            "type": "geojson",
            "data": json_Sewer_Mainlines_d_5
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
            "id": "lyr_SnoCo_Parcels_sans_dups_0_0",
            "type": "fill",
            "source": "SnoCo_Parcels_sans_dups_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_SnoCo_Parcels_sans_dups_0_1",
            "type": "symbol",
            "source": "SnoCo_Parcels_sans_dups_0",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'SITUSHOUSE'], 'text-size': '12.607142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#323232'}
        }
,
        {
            "id": "lyr_Generalize_LINES_parcels_1_0",
            "type": "line",
            "source": "Generalize_LINES_parcels_1",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#85b66f'}
        }
,
        {
            "id": "lyr_LealletBF_2_0",
            "type": "fill",
            "source": "LealletBF_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e5b636'}
        }
,
        {
            "id": "lyr_Water_Mainlines_d_3_0",
            "type": "line",
            "source": "Water_Mainlines_d_3",
            "layout": {},
            "paint": {'line-width': 2.357142857142857, 'line-opacity': 1.0, 'line-color': '#4099ff'}
        }
,
        {
            "id": "lyr_Storm_Lines_d_4_0",
            "type": "line",
            "source": "Storm_Lines_d_4",
            "layout": {},
            "paint": {'line-width': 2.357142857142857, 'line-opacity': 1.0, 'line-color': '#d001ff'}
        }
,
        {
            "id": "lyr_Sewer_Mainlines_d_5_0",
            "type": "line",
            "source": "Sewer_Mainlines_d_5",
            "layout": {},
            "paint": {'line-width': 2.357142857142857, 'line-opacity': 1.0, 'line-color': '#00fa13'}
        }
],
}