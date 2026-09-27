var wms_layers = [];

var lyr_GemeindeinformationenAV_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo-vd.geometa-gemeinde",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gemeindeinformationen - AV',
                            popuplayertitle: 'Gemeindeinformationen - AV',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GemeindeinformationenAV_0, 0]);
var lyr_Landeskarte110000farbig_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.landeskarte-farbe-10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landeskarte 1:10`000 (farbig)',
                            popuplayertitle: 'Landeskarte 1:10`000 (farbig)',
                            type: '',
                            opacity: 0.699000,
                            
                            
                          });
              wms_layers.push([lyr_Landeskarte110000farbig_1, 0]);
var format_BisAugust26gefunden_2 = new ol.format.GeoJSON();
var features_BisAugust26gefunden_2 = format_BisAugust26gefunden_2.readFeatures(json_BisAugust26gefunden_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BisAugust26gefunden_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BisAugust26gefunden_2.addFeatures(features_BisAugust26gefunden_2);
cluster_BisAugust26gefunden_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BisAugust26gefunden_2
});
var lyr_BisAugust26gefunden_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BisAugust26gefunden_2,
maxResolution:28004.466152261964,
 minResolution:0.00028004466152261963,

                style: style_BisAugust26gefunden_2,
                popuplayertitle: 'Bis August 26 gefunden',
                interactive: true,
                title: '<img src="styles/legend/BisAugust26gefunden_2.png" /> Bis August 26 gefunden'
            });

lyr_GemeindeinformationenAV_0.setVisible(true);lyr_Landeskarte110000farbig_1.setVisible(true);lyr_BisAugust26gefunden_2.setVisible(true);
var layersList = [lyr_GemeindeinformationenAV_0,lyr_Landeskarte110000farbig_1,lyr_BisAugust26gefunden_2];
lyr_BisAugust26gefunden_2.set('fieldAliases', {'id': 'id', 'Trivialnamen': 'Trivialnamen', 'Lat. Name': 'Lat. Name', 'Familie': 'Familie', 'Status': 'Status', 'Datum': 'Datum', 'altitude': 'altitude', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_BisAugust26gefunden_2.set('fieldImages', {'id': 'TextEdit', 'Trivialnamen': 'TextEdit', 'Lat. Name': 'TextEdit', 'Familie': 'TextEdit', 'Status': 'TextEdit', 'Datum': 'TextEdit', 'altitude': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_BisAugust26gefunden_2.set('fieldLabels', {'id': 'hidden field', 'Trivialnamen': 'inline label - always visible', 'Lat. Name': 'inline label - always visible', 'Familie': 'hidden field', 'Status': 'hidden field', 'Datum': 'hidden field', 'altitude': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_BisAugust26gefunden_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});