var wms_layers = [];


        var lyr_GoogleSatellite2_0 = new ol.layer.Tile({
            'title': 'Google Satellite 2',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Sentinel_1 = new ol.format.GeoJSON();
var features_Sentinel_1 = format_Sentinel_1.readFeatures(json_Sentinel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel_1.addFeatures(features_Sentinel_1);
var lyr_Sentinel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel_1, 
                style: style_Sentinel_1,
                popuplayertitle: 'Sentinel',
                interactive: false,
                title: '<img src="styles/legend/Sentinel_1.png" /> Sentinel'
            });
var format_Historyczna_2 = new ol.format.GeoJSON();
var features_Historyczna_2 = format_Historyczna_2.readFeatures(json_Historyczna_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Historyczna_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Historyczna_2.addFeatures(features_Historyczna_2);
var lyr_Historyczna_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Historyczna_2, 
                style: style_Historyczna_2,
                popuplayertitle: 'Historyczna',
                interactive: false,
                title: '<img src="styles/legend/Historyczna_2.png" /> Historyczna'
            });
var format_VMap_3 = new ol.format.GeoJSON();
var features_VMap_3 = format_VMap_3.readFeatures(json_VMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMap_3.addFeatures(features_VMap_3);
var lyr_VMap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMap_3, 
                style: style_VMap_3,
                popuplayertitle: 'VMap',
                interactive: false,
                title: '<img src="styles/legend/VMap_3.png" /> VMap'
            });
var format_GenerateTessellation_4 = new ol.format.GeoJSON();
var features_GenerateTessellation_4 = format_GenerateTessellation_4.readFeatures(json_GenerateTessellation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GenerateTessellation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GenerateTessellation_4.addFeatures(features_GenerateTessellation_4);
var lyr_GenerateTessellation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GenerateTessellation_4, 
                style: style_GenerateTessellation_4,
                popuplayertitle: 'GenerateTessellation',
                interactive: false,
    title: 'GenerateTessellation<br />\
    <img src="styles/legend/GenerateTessellation_4_0.png" /> -100 - -75<br />\
    <img src="styles/legend/GenerateTessellation_4_1.png" /> -75 - -50<br />\
    <img src="styles/legend/GenerateTessellation_4_2.png" /> -50 - -25<br />\
    <img src="styles/legend/GenerateTessellation_4_3.png" /> -25 - 0<br />\
    <img src="styles/legend/GenerateTessellation_4_4.png" /> 0 - 25<br />\
    <img src="styles/legend/GenerateTessellation_4_5.png" /> 25 - 50<br />\
    <img src="styles/legend/GenerateTessellation_4_6.png" /> 50 - 75<br />\
    <img src="styles/legend/GenerateTessellation_4_7.png" /> 75 - 100<br />'
        });

lyr_GoogleSatellite2_0.setVisible(true);lyr_Sentinel_1.setVisible(true);lyr_Historyczna_2.setVisible(true);lyr_VMap_3.setVisible(true);lyr_GenerateTessellation_4.setVisible(true);
var layersList = [lyr_GoogleSatellite2_0,lyr_Sentinel_1,lyr_Historyczna_2,lyr_VMap_3,lyr_GenerateTessellation_4];
lyr_Sentinel_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_sentinel_ClipLayer': 'FID_sentinel_ClipLayer', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'obw': 'obw', 'wsp': 'wsp', 'FID_bug_historyczna_Merge': 'FID_bug_historyczna_Merge', 'Id_1': 'Id', 'Field': 'Field', 'obw_1': 'obw', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Historyczna_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_bug_historyczna_Merge': 'FID_bug_historyczna_Merge', 'Id': 'Id', 'Field': 'Field', 'obw': 'obw', 'FID_sentinel_ClipLayer': 'FID_sentinel_ClipLayer', 'OBJECTID_1': 'OBJECTID', 'Id_1': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'obw_1': 'obw', 'wsp': 'wsp', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_VMap_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_bug': 'FID_bug', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'obw': 'obw', 'wsp': 'wsp', 'FID_bug_historyczna_Merge': 'FID_bug_historyczna_Merge', 'Id_1': 'Id', 'Field': 'Field', 'obw_1': 'obw', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GenerateTessellation_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'proc_A': 'proc_A', 'proc_B': 'proc_B', 'proc_C': 'proc_C', 'roznicaA_B': 'roznicaA_B', 'roznicaB_C': 'roznicaB_C', 'roznicaA_C': 'roznicaA_C', });
lyr_Sentinel_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_sentinel_ClipLayer': 'Range', 'OBJECTID': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'InPoly_FID': 'Range', 'obw': 'TextEdit', 'wsp': 'TextEdit', 'FID_bug_historyczna_Merge': 'Range', 'Id_1': 'Range', 'Field': 'TextEdit', 'obw_1': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Historyczna_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_bug_historyczna_Merge': 'Range', 'Id': 'Range', 'Field': 'TextEdit', 'obw': 'TextEdit', 'FID_sentinel_ClipLayer': 'Range', 'OBJECTID_1': 'Range', 'Id_1': 'Range', 'gridcode': 'Range', 'InPoly_FID': 'Range', 'obw_1': 'TextEdit', 'wsp': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMap_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_bug': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'obw': 'TextEdit', 'wsp': 'TextEdit', 'FID_bug_historyczna_Merge': 'Range', 'Id_1': 'Range', 'Field': 'TextEdit', 'obw_1': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GenerateTessellation_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'proc_A': 'TextEdit', 'proc_B': 'TextEdit', 'proc_C': 'TextEdit', 'roznicaA_B': 'TextEdit', 'roznicaB_C': 'TextEdit', 'roznicaA_C': 'TextEdit', });
lyr_Sentinel_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_sentinel_ClipLayer': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'obw': 'no label', 'wsp': 'no label', 'FID_bug_historyczna_Merge': 'no label', 'Id_1': 'no label', 'Field': 'no label', 'obw_1': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Historyczna_2.set('fieldLabels', {'OBJECTID': 'no label', 'FID_bug_historyczna_Merge': 'no label', 'Id': 'no label', 'Field': 'no label', 'obw': 'no label', 'FID_sentinel_ClipLayer': 'no label', 'OBJECTID_1': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'obw_1': 'no label', 'wsp': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_VMap_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_bug': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'obw': 'no label', 'wsp': 'no label', 'FID_bug_historyczna_Merge': 'no label', 'Id_1': 'no label', 'Field': 'no label', 'obw_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_GenerateTessellation_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'proc_A': 'no label', 'proc_B': 'no label', 'proc_C': 'no label', 'roznicaA_B': 'no label', 'roznicaB_C': 'no label', 'roznicaA_C': 'no label', });
lyr_GenerateTessellation_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});