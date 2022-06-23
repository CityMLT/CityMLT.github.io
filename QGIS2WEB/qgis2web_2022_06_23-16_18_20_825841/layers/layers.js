var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Address_1 = new ol.format.GeoJSON();
var features_Address_1 = format_Address_1.readFeatures(json_Address_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Address_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Address_1.addFeatures(features_Address_1);
var lyr_Address_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Address_1,
maxResolution:0.7001116538065492,
 
                style: style_Address_1,
                interactive: true,
                title: '<img src="styles/legend/Address_1.png" /> Address'
            });
var format_Parcel_Dims_2 = new ol.format.GeoJSON();
var features_Parcel_Dims_2 = format_Parcel_Dims_2.readFeatures(json_Parcel_Dims_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcel_Dims_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcel_Dims_2.addFeatures(features_Parcel_Dims_2);
var lyr_Parcel_Dims_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcel_Dims_2,
maxResolution:0.7001116538065492,
 
                style: style_Parcel_Dims_2,
                interactive: true,
                title: '<img src="styles/legend/Parcel_Dims_2.png" /> Parcel_Dims'
            });
var format_LealletBF_3 = new ol.format.GeoJSON();
var features_LealletBF_3 = format_LealletBF_3.readFeatures(json_LealletBF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LealletBF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LealletBF_3.addFeatures(features_LealletBF_3);
var lyr_LealletBF_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LealletBF_3,
maxResolution:70.0111653806549,
 
                style: style_LealletBF_3,
                interactive: true,
                title: '<img src="styles/legend/LealletBF_3.png" /> Leallet BF'
            });
var format_Water_Services_d_4 = new ol.format.GeoJSON();
var features_Water_Services_d_4 = format_Water_Services_d_4.readFeatures(json_Water_Services_d_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Services_d_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Services_d_4.addFeatures(features_Water_Services_d_4);
var lyr_Water_Services_d_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Services_d_4,
maxResolution:1.4002233076130983,
 
                style: style_Water_Services_d_4,
                interactive: true,
                title: '<img src="styles/legend/Water_Services_d_4.png" /> Water_Services_d'
            });
var format_Sewer_Services_d_5 = new ol.format.GeoJSON();
var features_Sewer_Services_d_5 = format_Sewer_Services_d_5.readFeatures(json_Sewer_Services_d_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sewer_Services_d_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sewer_Services_d_5.addFeatures(features_Sewer_Services_d_5);
var lyr_Sewer_Services_d_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sewer_Services_d_5,
maxResolution:1.4002233076130983,
 
                style: style_Sewer_Services_d_5,
                interactive: true,
                title: '<img src="styles/legend/Sewer_Services_d_5.png" /> Sewer_Services_d'
            });
var format_Water_Mainlines_d_6 = new ol.format.GeoJSON();
var features_Water_Mainlines_d_6 = format_Water_Mainlines_d_6.readFeatures(json_Water_Mainlines_d_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Mainlines_d_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Mainlines_d_6.addFeatures(features_Water_Mainlines_d_6);
var lyr_Water_Mainlines_d_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Mainlines_d_6,
maxResolution:1.4002233076130983,
 
                style: style_Water_Mainlines_d_6,
                interactive: true,
                title: '<img src="styles/legend/Water_Mainlines_d_6.png" /> Water_Mainlines_d'
            });
var format_Sewer_Mainlines_d_7 = new ol.format.GeoJSON();
var features_Sewer_Mainlines_d_7 = format_Sewer_Mainlines_d_7.readFeatures(json_Sewer_Mainlines_d_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sewer_Mainlines_d_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sewer_Mainlines_d_7.addFeatures(features_Sewer_Mainlines_d_7);
var lyr_Sewer_Mainlines_d_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sewer_Mainlines_d_7,
maxResolution:1.4002233076130983,
 
                style: style_Sewer_Mainlines_d_7,
                interactive: true,
                title: '<img src="styles/legend/Sewer_Mainlines_d_7.png" /> Sewer_Mainlines_d'
            });
var format_Storm_Lines_d_8 = new ol.format.GeoJSON();
var features_Storm_Lines_d_8 = format_Storm_Lines_d_8.readFeatures(json_Storm_Lines_d_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Storm_Lines_d_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Storm_Lines_d_8.addFeatures(features_Storm_Lines_d_8);
var lyr_Storm_Lines_d_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Storm_Lines_d_8,
maxResolution:1.4002233076130983,
 
                style: style_Storm_Lines_d_8,
                interactive: true,
                title: '<img src="styles/legend/Storm_Lines_d_8.png" /> Storm_Lines_d'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Address_1.setVisible(true);lyr_Parcel_Dims_2.setVisible(true);lyr_LealletBF_3.setVisible(true);lyr_Water_Services_d_4.setVisible(true);lyr_Sewer_Services_d_5.setVisible(true);lyr_Water_Mainlines_d_6.setVisible(true);lyr_Sewer_Mainlines_d_7.setVisible(true);lyr_Storm_Lines_d_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Address_1,lyr_Parcel_Dims_2,lyr_LealletBF_3,lyr_Water_Services_d_4,lyr_Sewer_Services_d_5,lyr_Water_Mainlines_d_6,lyr_Sewer_Mainlines_d_7,lyr_Storm_Lines_d_8];
lyr_Address_1.set('fieldAliases', {'fid': 'fid', 'SITUSLINE1': 'SITUSLINE1', 'SITUSHOUSE': 'SITUSHOUSE', });
lyr_Parcel_Dims_2.set('fieldAliases', {'fid': 'fid', 'new_length': 'new_length', });
lyr_LealletBF_3.set('fieldAliases', {'fid': 'fid', 'parcel_ID': 'parcel_ID', 'HouseNum': 'HouseNum', 'GoogleStView': 'GoogleStView', 'Shape_Area': 'Shape_Area', });
lyr_Water_Services_d_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', });
lyr_Sewer_Services_d_5.set('fieldAliases', {'fid': 'fid', });
lyr_Water_Mainlines_d_6.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', });
lyr_Sewer_Mainlines_d_7.set('fieldAliases', {'fid': 'fid', 'FAC_ID': 'FAC_ID', 'name': 'name', });
lyr_Storm_Lines_d_8.set('fieldAliases', {'fid': 'fid', 'ASSET_ID': 'ASSET_ID', });
lyr_Address_1.set('fieldImages', {'fid': 'TextEdit', 'SITUSLINE1': 'TextEdit', 'SITUSHOUSE': 'TextEdit', });
lyr_Parcel_Dims_2.set('fieldImages', {'fid': 'TextEdit', 'new_length': 'TextEdit', });
lyr_LealletBF_3.set('fieldImages', {'fid': 'TextEdit', 'parcel_ID': 'TextEdit', 'HouseNum': 'TextEdit', 'GoogleStView': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Water_Services_d_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', });
lyr_Sewer_Services_d_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_Water_Mainlines_d_6.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Sewer_Mainlines_d_7.set('fieldImages', {'fid': 'TextEdit', 'FAC_ID': 'TextEdit', 'name': 'TextEdit', });
lyr_Storm_Lines_d_8.set('fieldImages', {'fid': 'TextEdit', 'ASSET_ID': 'TextEdit', });
lyr_Address_1.set('fieldLabels', {'fid': 'no label', 'SITUSLINE1': 'no label', 'SITUSHOUSE': 'no label', });
lyr_Parcel_Dims_2.set('fieldLabels', {'fid': 'no label', 'new_length': 'no label', });
lyr_LealletBF_3.set('fieldLabels', {'fid': 'no label', 'parcel_ID': 'no label', 'HouseNum': 'no label', 'GoogleStView': 'no label', 'Shape_Area': 'no label', });
lyr_Water_Services_d_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', });
lyr_Sewer_Services_d_5.set('fieldLabels', {'fid': 'no label', });
lyr_Water_Mainlines_d_6.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', });
lyr_Sewer_Mainlines_d_7.set('fieldLabels', {'fid': 'no label', 'FAC_ID': 'no label', 'name': 'no label', });
lyr_Storm_Lines_d_8.set('fieldLabels', {'fid': 'no label', 'ASSET_ID': 'no label', });
lyr_Storm_Lines_d_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});