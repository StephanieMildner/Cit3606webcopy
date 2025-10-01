button1.onclick=function(){
    const landmark=
    document.getElementById('landmark');
    landmark.src="zion.jpg";
    landmark.style.width="500px";
    text.textContent="Zion National Park is a national park in southwestern Utah known for its massive sandstone cliffs, deep canyons, and the Virgin River, with popular attractions including Zion Canyon, the Narrows wading hike, and the Emerald Pools. ";
}
button2.onclick=function(){
    const landmark=
    document.getElementById('landmark');
    landmark.src="yellowstone.jpg";
    landmark.style.width="500px";
    text.textContent="Yellowstone National Park is a vast wilderness primarily in Wyoming, with portions in Montana and Idaho, famous for its abundant hydrothermal features, including over half the world's geysers and hot springs, and diverse wildlife like bison, wolves, and bears. The park is situated on a supervolcano's caldera and offers diverse landscapes, from the Grand Canyon of the Yellowstone to Yellowstone Lake, and serves as the core of the Greater Yellowstone Ecosystem, a globally significant natural environment";
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727460.1866517995!2d-111.17205080422873!3d44.58390618115036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5351e55555555555%3A0xaca8f930348fe1bb!2sYellowstone%20National%20Park!5e0!3m2!1sen!2sus!4v1759334527532!5m2!1sen!2sus";
}
button3.onclick=function(){
    const landmark=
    document.getElementById('landmark');
    landmark.src="yosemite.jpg";
    landmark.style.width="500px";
    text.textContent="Yosemite National Park is a renowned park in California's Sierra Nevada mountains, protected in 1890 and famous for its massive granite cliffs, towering waterfalls like Yosemite Falls, ancient giant sequoia groves, vast meadows, and deep valleys, including the iconic Yosemite Valley. The park is a designated World Heritage Site, recognized for its unique geological formations and biological diversity, with over 90% of its nearly 1,200 square miles managed as wilderness";
map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d806496.4033309188!2d-120.20912981493184!3d37.85147828269632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park!5e0!3m2!1sen!2sus!4v1759334675311!5m2!1sen!2sus"
}
size.onchange=function(){
    var size =
    document.getElementById("size").value;
    if (size=="small")
        landmark.style.width="200px";
    else if (size=="medium")
         landmark.style.width="400px";
    else if (size=="large")
         landmark.style.width="600px";}
