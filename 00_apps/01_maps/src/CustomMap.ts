/// <reference types="@types/google.maps" />

interface MapLocation {
  lat: number;
  lng: number;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(containerId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(containerId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(input: MapLocation, makerContent: string): void {
    const marker = new google.maps.Marker({ map: this.googleMap, position: input });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: makerContent,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
