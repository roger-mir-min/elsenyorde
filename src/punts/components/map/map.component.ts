import { Component, EventEmitter, OnInit, Output, effect } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { PuntsService } from 'src/punts/services/punts.service';
import { baseMap } from 'src/shared/constants/constants';
import { addBaseLayerToMap, centerMap } from 'src/shared/utils/functions';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map!: Map;

  markersArr = this.puntsService.markersArray;
  @Output() coordEmitter = new EventEmitter<{lat:number, lng:number}>();

  //INPUT VARIABLES for MAP COMPONENT
  currentLat: number = 0;
  currentLon: number = 0;

  constructor(private puntsService: PuntsService) {
  }

  ngOnInit() {
    console.log("Map component initilized");
  }

  ngAfterViewInit() {
    //MAPA
    this.map = baseMap;

    //LAYER
    addBaseLayerToMap(this.map);

    //MARKERS
    this.addMarkersArrToMap();

    //EVENT
    this.map.on('click', e => {
      this.coordEmitter.emit({ lat: e.latlng.lat, lng: e.latlng.lng });
    });

  }

  //When markersArr is updated, map is updated
  resetMapAfterMarkersArrUpdate = effect(() => {
    console.log("Update map with new markers: " + this.markersArr());
    this.map.eachLayer(layer => { this.map.removeLayer(layer) });
    addBaseLayerToMap(this.map);
    this.addMarkersArrToMap();
  });
  
  addMarkersArrToMap() {
    this.markersArr().map(mark => {
      const markerItem = marker([mark.lat, mark.lng], { draggable: true }).addTo(this.map)
        .bindPopup(`<div class="text-crimson position-relative"></div><h2>Info del nou punt</h2>
        <p>Nom: ${mark!.name}</p>
        <p>Puntuació: ${mark!.puntuacio}</p>
        <p>Descripció: ${mark!.descripcio}</p>
        <i *ngIf="marker.fav==true && marker.default == false" class="fa-solid fa-star" style="position:absolute; 
        bottom:16px; right:12px"></i>
        <button (click)="deleteMarker(e)" class="btn btn-primary text-crimson">Eliminar marcador</button>
        </div>`);
  });
  }

  //when clicking on a place card, scroll to top (where map component is)
  //and center map into the card coordenates
  centerMap(lat: number, lng: number) {
    centerMap(lat, lng, this.map);
  }

}
