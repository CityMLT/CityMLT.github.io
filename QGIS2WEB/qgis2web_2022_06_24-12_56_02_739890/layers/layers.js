var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_SnoCo_Parcels_sans_dups_1 = new ol.format.GeoJSON();
var features_SnoCo_Parcels_sans_dups_1 = format_SnoCo_Parcels_sans_dups_1.readFeatures(json_SnoCo_Parcels_sans_dups_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SnoCo_Parcels_sans_dups_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SnoCo_Parcels_sans_dups_1.addFeatures(features_SnoCo_Parcels_sans_dups_1);
var lyr_SnoCo_Parcels_sans_dups_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SnoCo_Parcels_sans_dups_1,
maxResolution:1.4002233076130983,
 
                style: style_SnoCo_Parcels_sans_dups_1,
                interactive: true,
                title: '<img src="styles/legend/SnoCo_Parcels_sans_dups_1.png" /> SnoCo_Parcels_sans_dups'
            });
var format_Address_2 = new ol.format.GeoJSON();
var features_Address_2 = format_Address_2.readFeatures(json_Address_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Address_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Address_2.addFeatures(features_Address_2);
var lyr_Address_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Address_2,
maxResolution:0.7001116538065492,
 
                style: style_Address_2,
                interactive: true,
                title: '<img src="styles/legend/Address_2.png" /> Address'
            });
var format_Parcel_Dims_3 = new ol.format.GeoJSON();
var features_Parcel_Dims_3 = format_Parcel_Dims_3.readFeatures(json_Parcel_Dims_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcel_Dims_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcel_Dims_3.addFeatures(features_Parcel_Dims_3);
var lyr_Parcel_Dims_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcel_Dims_3,
maxResolution:0.7001116538065492,
 
                style: style_Parcel_Dims_3,
                interactive: true,
                title: '<img src="styles/legend/Parcel_Dims_3.png" /> Parcel_Dims'
            });
var format_EdgePavement_4 = new ol.format.GeoJSON();
var features_EdgePavement_4 = format_EdgePavement_4.readFeatures(json_EdgePavement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdgePavement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdgePavement_4.addFeatures(features_EdgePavement_4);
var lyr_EdgePavement_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EdgePavement_4, 
                style: style_EdgePavement_4,
                interactive: true,
                title: '<img src="styles/legend/EdgePavement_4.png" /> EdgePavement'
            });
var format_Driveways_5 = new ol.format.GeoJSON();
var features_Driveways_5 = format_Driveways_5.readFeatures(json_Driveways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Driveways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Driveways_5.addFeatures(features_Driveways_5);
var lyr_Driveways_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Driveways_5,
maxResolution:1.4002233076130983,
 
                style: style_Driveways_5,
                interactive: true,
                title: '<img src="styles/legend/Driveways_5.png" /> Driveways'
            });
var format_LealletBF_6 = new ol.format.GeoJSON();
var features_LealletBF_6 = format_LealletBF_6.readFeatures(json_LealletBF_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LealletBF_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LealletBF_6.addFeatures(features_LealletBF_6);
var lyr_LealletBF_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LealletBF_6,
maxResolution:70.0111653806549,
 
                style: style_LealletBF_6,
                interactive: true,
                title: '<img src="styles/legend/LealletBF_6.png" /> Leallet BF'
            });
var format_Water_Services_d_7 = new ol.format.GeoJSON();
var features_Water_Services_d_7 = format_Water_Services_d_7.readFeatures(json_Water_Services_d_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Services_d_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Services_d_7.addFeatures(features_Water_Services_d_7);
var lyr_Water_Services_d_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Services_d_7,
maxResolution:1.4002233076130983,
 
                style: style_Water_Services_d_7,
                interactive: true,
                title: '<img src="styles/legend/Water_Services_d_7.png" /> Water_Services_d'
            });
var format_Sewer_Services_d_8 = new ol.format.GeoJSON();
var features_Sewer_Services_d_8 = format_Sewer_Services_d_8.readFeatures(json_Sewer_Services_d_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sewer_Services_d_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sewer_Services_d_8.addFeatures(features_Sewer_Services_d_8);
var lyr_Sewer_Services_d_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sewer_Services_d_8,
maxResolution:1.4002233076130983,
 
                style: style_Sewer_Services_d_8,
                interactive: true,
                title: '<img src="styles/legend/Sewer_Services_d_8.png" /> Sewer_Services_d'
            });
var format_Water_Mainlines_d_9 = new ol.format.GeoJSON();
var features_Water_Mainlines_d_9 = format_Water_Mainlines_d_9.readFeatures(json_Water_Mainlines_d_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Mainlines_d_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Mainlines_d_9.addFeatures(features_Water_Mainlines_d_9);
var lyr_Water_Mainlines_d_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Mainlines_d_9,
maxResolution:1.4002233076130983,
 
                style: style_Water_Mainlines_d_9,
                interactive: true,
                title: '<img src="styles/legend/Water_Mainlines_d_9.png" /> Water_Mainlines_d'
            });
var format_Sewer_Mainlines_d_10 = new ol.format.GeoJSON();
var features_Sewer_Mainlines_d_10 = format_Sewer_Mainlines_d_10.readFeatures(json_Sewer_Mainlines_d_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sewer_Mainlines_d_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sewer_Mainlines_d_10.addFeatures(features_Sewer_Mainlines_d_10);
var lyr_Sewer_Mainlines_d_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sewer_Mainlines_d_10,
maxResolution:1.4002233076130983,
 
                style: style_Sewer_Mainlines_d_10,
                interactive: true,
                title: '<img src="styles/legend/Sewer_Mainlines_d_10.png" /> Sewer_Mainlines_d'
            });
var format_Storm_Lines_d_11 = new ol.format.GeoJSON();
var features_Storm_Lines_d_11 = format_Storm_Lines_d_11.readFeatures(json_Storm_Lines_d_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Storm_Lines_d_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Storm_Lines_d_11.addFeatures(features_Storm_Lines_d_11);
var lyr_Storm_Lines_d_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Storm_Lines_d_11,
maxResolution:1.4002233076130983,
 
                style: style_Storm_Lines_d_11,
                interactive: true,
                title: '<img src="styles/legend/Storm_Lines_d_11.png" /> Storm_Lines_d'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_SnoCo_Parcels_sans_dups_1.setVisible(true);lyr_Address_2.setVisible(true);lyr_Parcel_Dims_3.setVisible(true);lyr_EdgePavement_4.setVisible(true);lyr_Driveways_5.setVisible(true);lyr_LealletBF_6.setVisible(true);lyr_Water_Services_d_7.setVisible(true);lyr_Sewer_Services_d_8.setVisible(true);lyr_Water_Mainlines_d_9.setVisible(true);lyr_Sewer_Mainlines_d_10.setVisible(true);lyr_Storm_Lines_d_11.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_SnoCo_Parcels_sans_dups_1,lyr_Address_2,lyr_Parcel_Dims_3,lyr_EdgePavement_4,lyr_Driveways_5,lyr_LealletBF_6,lyr_Water_Services_d_7,lyr_Sewer_Services_d_8,lyr_Water_Mainlines_d_9,lyr_Sewer_Mainlines_d_10,lyr_Storm_Lines_d_11];
lyr_SnoCo_Parcels_sans_dups_1.set('fieldAliases', {'fid': 'fid', 'PARCEL_ID': 'PARCEL_ID', 'GIS_ACRES': 'GIS_ACRES', 'SITUSLINE1': 'SITUSLINE1', 'OWNERNAME': 'OWNERNAME', 'SIDESEWER': 'SIDESEWER', 'SITUSHOUSE': 'SITUSHOUSE', 'SnoCoPropL': 'SnoCoPropL', 'BirdEye': 'BirdEye', });
lyr_Address_2.set('fieldAliases', {'fid': 'fid', 'SITUSLINE1': 'SITUSLINE1', 'SITUSHOUSE': 'SITUSHOUSE', });
lyr_Parcel_Dims_3.set('fieldAliases', {'fid': 'fid', 'new_length': 'new_length', });
lyr_EdgePavement_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr_Driveways_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_LealletBF_6.set('fieldAliases', {'fid': 'fid', 'parcel_ID': 'parcel_ID', 'HouseNum': 'HouseNum', 'GoogleStView': 'GoogleStView', 'Shape_Area': 'Shape_Area', });
lyr_Water_Services_d_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', });
lyr_Sewer_Services_d_8.set('fieldAliases', {'fid': 'fid', });
lyr_Water_Mainlines_d_9.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', });
lyr_Sewer_Mainlines_d_10.set('fieldAliases', {'fid': 'fid', 'FAC_ID': 'FAC_ID', 'name': 'name', });
lyr_Storm_Lines_d_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_SnoCo_Parcels_sans_dups_1.set('fieldImages', {'fid': 'TextEdit', 'PARCEL_ID': 'TextEdit', 'GIS_ACRES': 'TextEdit', 'SITUSLINE1': 'TextEdit', 'OWNERNAME': 'TextEdit', 'SIDESEWER': 'TextEdit', 'SITUSHOUSE': 'TextEdit', 'SnoCoPropL': 'TextEdit', 'BirdEye': 'TextEdit', });
lyr_Address_2.set('fieldImages', {'fid': 'TextEdit', 'SITUSLINE1': 'TextEdit', 'SITUSHOUSE': 'TextEdit', });
lyr_Parcel_Dims_3.set('fieldImages', {'fid': 'TextEdit', 'new_length': 'TextEdit', });
lyr_EdgePavement_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Driveways_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_LealletBF_6.set('fieldImages', {'fid': 'TextEdit', 'parcel_ID': 'TextEdit', 'HouseNum': 'TextEdit', 'GoogleStView': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Water_Services_d_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', });
lyr_Sewer_Services_d_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_Water_Mainlines_d_9.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Sewer_Mainlines_d_10.set('fieldImages', {'fid': 'TextEdit', 'FAC_ID': 'TextEdit', 'name': 'TextEdit', });
lyr_Storm_Lines_d_11.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_SnoCo_Parcels_sans_dups_1.set('fieldLabels', {'fid': 'no label', 'PARCEL_ID': 'header label', 'GIS_ACRES': 'header label', 'SITUSLINE1': 'header label', 'OWNERNAME': 'header label', 'SIDESEWER': 'no label', 'SITUSHOUSE': 'no label', 'SnoCoPropL': 'header label', 'BirdEye': 'header label', });
lyr_Address_2.set('fieldLabels', {'fid': 'no label', 'SITUSLINE1': 'no label', 'SITUSHOUSE': 'no label', });
lyr_Parcel_Dims_3.set('fieldLabels', {'fid': 'no label', 'new_length': 'no label', });
lyr_EdgePavement_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr_Driveways_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_LealletBF_6.set('fieldLabels', {'fid': 'no label', 'parcel_ID': 'no label', 'HouseNum': 'no label', 'GoogleStView': 'no label', 'Shape_Area': 'no label', });
lyr_Water_Services_d_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', });
lyr_Sewer_Services_d_8.set('fieldLabels', {'fid': 'no label', });
lyr_Water_Mainlines_d_9.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', });
lyr_Sewer_Mainlines_d_10.set('fieldLabels', {'fid': 'no label', 'FAC_ID': 'no label', 'name': 'no label', });
lyr_Storm_Lines_d_11.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_Storm_Lines_d_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});