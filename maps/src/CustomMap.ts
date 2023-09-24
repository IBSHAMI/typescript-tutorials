export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerTextContent(): string;
}

export class CustomMap {
    private map: google.maps.Map;
    
    constructor(divId: string) {
        const element = document.getElementById(divId);
        if (!element) {
            throw new Error(`Element with id ${divId} not found`);
        }
        this.map = new google.maps.Map(element as Element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerTextContent()
            });

            infoWindow.open(this.map, marker);
        });
    }
}