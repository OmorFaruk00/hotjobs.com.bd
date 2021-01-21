<template>
  <div>

    <div class="page-content">

      <div class="container-fluid">

        <div class="row">
          <singleAds/>

          <div class="col-lg-12">
            <div class="card">
              <div class="card-body contact">

                <h1 class="card-title">Contact information</h1>

                <hr>

                <h2 class="card-title"><i class="bx bx-phone-call"></i> Dial <a href="tel:+8801726893448">
                  +88 017 2689 3448
                </a> from any number.</h2>

                <hr>
                <p class="card-title">+880255040889 (Extension: 221)</p>


              </div>
            </div>
          </div>

        </div>

        <div class="row">

          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <GMap
                  ref="gMap"
                  language="en"
                  :cluster="{options: {styles: clusterStyle}}"
                  :center="{lat: locations[0].lat, lng: locations[0].lng}"
                  :options="{fullscreenControl: true, styles: mapStyle}"
                  :zoom="18"
                >
                  <GMapMarker
                    v-for="location in locations"
                    :key="location.id"
                    :position="{lat: location.lat, lng: location.lng}"
                    @click="currentLocation = location"
                  >
                    <GMapInfoWindow :options="{maxWidth: 200}">
                      <code>
                        lat: {{ location.lat }},
                        lng: {{ location.lng }}
                      </code>
                    </GMapInfoWindow>
                  </GMapMarker>
<!--                  <GMapCircle :options="circleOptions"/>-->
                </GMap>


              </div>
            </div>
          </div>

          <thirdAds/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import singleAds from "~/components/SingleAds";
import doubleAds from "~/components/DoubleAds";
import thirdAds from "~/components/ThirdAds";
export default {
  name: "contact",
  components: {
    singleAds,
    doubleAds,
    thirdAds,
  },
  data() {
    return {

      /*circleOptions: {
        ...
      },*/
      /*locations: [
        {
          lat: 23.7877539,
          lng: 90.3987216
        },
      ],*/
      locations: [
        {
          lat: 23.821214,
          lng: 90.423087,
          name: "Al-Hera Tower"
        },
      ],
      pins: {
        selected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=",
        notSelected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
      },
      mapStyle: [

      ],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 800,
          textColor: "#000"
        }
      ],

    }
  }
}
</script>

<style scoped>
.contact p {
  color: #000;
}

</style>
