import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet"
import { MapCard } from './MapCard';

 var maasaimara = new Icon({
    iconUrl:'/imgs/maasaimara.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var amboseli = new Icon({
    iconUrl:'/imgs/amboseli.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var nakuru = new Icon({
    iconUrl:'/imgs/lakenakuru.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var tsavo = new Icon({
    iconUrl:'/imgs/tsavo.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var samburu = new Icon({
    iconUrl:'/imgs/samburu.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var diani = new Icon({
    iconUrl:'/imgs/diani.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var lamu = new Icon({
    iconUrl:'/imgs/lamu.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var nairobi = new Icon({
    iconUrl:'/imgs/nairobi.jpeg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var kisumu = new Icon({
    iconUrl:'/imgs/kisumu.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })

const Map = () => {
  return (
      <div className='w-full flex justify-center my-20'>
    <MapContainer center={[1.2921, 36.8219]} zoom={6} scrollWheelZoom={false} className='h-[70vh] w-[80vw] rounded-2xl shadow-2xl'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker icon={maasaimara} key={1} position={[-1.4050, 35.0624]}>
        <Popup closeButton={false} closeOnEscapeKey={true} >
          <MapCard subTitle='metropolitan' img='/imgs/maasaimara.jpg' title='Maasai Mara' desc='Maasai Mara National Reserve: Famous for its spectacular wildlife, including the annual wildebeest migration, Maasai Mara is a must-visit destination for safari enthusiasts.' />
        </Popup>
      </Marker>
      <Marker  icon={amboseli} key={2} position={[-2.6520, 37.2585]}>
        <Popup closeButton={false}>
        <MapCard subTitle='metropolitan' img='/imgs/amboseli.jpg' title='Amboseli ' desc='Amboseli National Park: Known for its stunning views of Mount Kilimanjaro and large herds of elephants, Amboseli offers incredible opportunities for wildlife viewing and photography.' />
        </Popup>
      </Marker>
      <Marker  icon={nakuru} key={3} position={[-0.3031, 36.0804]}>
        <Popup closeButton={false}>
        <MapCard subTitle='metropolitan' img='/imgs/lakenakuru.jpg' title='Nakuru' desc='Lake Nakuru National Park: Renowned for its vast flocks of flamingos, as well as rhinos and other wildlife, Lake Nakuru is a paradise for birdwatchers and safari-goers alike.' />
        </Popup>
      </Marker>
      <Marker  icon={tsavo} key={4} position={[-2.9723, 38.4806 ]}>
        <Popup closeButton={false}>
        <MapCard subTitle='capital' img='/imgs/tsavo.jpg' title='Tsavo' desc='Tsavo National Park (East and West): Together, these parks form one of the largest wildlife reserves in the world, offering diverse landscapes and abundant wildlife viewing opportunities.' />
        </Popup>
      </Marker>
      <Marker  icon={samburu} key={5} position={[0.7171, 37.6723]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Mayor–council' img='/imgs/samburu.jpg' title='Samburu' desc='Samburu National Reserve: Home to unique wildlife species such as the reticulated giraffe and Grevys zebra, Samburu offers a distinct safari experience in a stunning semi-arid landscape.' />
        </Popup>
      </Marker>
      <Marker  icon={diani} key={6} position={[ -4.2760, 39.5943]}>
        <Popup closeButton={false}>
        <MapCard subTitle='port-city' img='/imgs/diani.jpg' title='Diani' desc='Diani Beach: With its pristine white sands and turquoise waters, Diani Beach is a top destination for relaxation, water sports, and snorkeling. ' />
        </Popup>
      </Marker>
      <Marker  icon={lamu} key={7} position={[ -2.2710, 40.9028]}>
        <Popup closeButton={false}>
        <MapCard subTitle='port-city' img='/imgs/lamu.jpeg' title='Lamu' desc='Lamu Island: A UNESCO World Heritage Site, Lamu is a picturesque island with well-preserved Swahili architecture, rich culture, and beautiful beaches.' />
        </Popup>
      </Marker>
      <Marker  icon={nairobi} key={8} position={[ -1.2921, 36.8219]}>
        <Popup closeButton={false}>
        <MapCard subTitle='cosmopolitan' img='/imgs/nairobi.jpg' title='Nairobi City' desc='Nairobi: Kenyas capital city offers a blend of urban attractions and natural beauty, including Nairobi National Park, the Giraffe Centre, and the Karen Blixen Museum.' />
        </Popup>
      </Marker>
      <Marker  icon={kisumu} key={9} position={[35.8819,74.4643]}>
        <Popup closeButton={false}>
        <MapCard subTitle='cosmopolitan' img='/imgs/kisumu.jpg' title='Kisumu' desc='Welcome to Kisumu, Kenya-s vibrant lakeside city! Explore bustling markets, tranquil lakeside views, and rich culture. With its stunning scenery and warm hospitality, Kisumu promises an unforgettable experience for travelers. ' />
        </Popup>
      </Marker>
    </MapContainer>
        </div>
  )
}
export default Map
