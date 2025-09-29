button1.onclick=function(){
    const landmark=
    document.getElementById('landmark');
    landmark.src="zion.jpg";
    landmark.style.width="400px";
    text.textContent="Zion National Park is a national park in southwestern Utah known for its massive sandstone cliffs, deep canyons, and the Virgin River, with popular attractions including Zion Canyon, the Narrows wading hike, and the Emerald Pools. ";
}
button2.onclick=function(){
    const landmark=
    document.getElementById('landmark');
    landmark.src="yellowstone.jpg";
    landmark.style.width="600px";
    text.textContent="Yellowstone National Park is a vast wilderness primarily in Wyoming, with portions in Montana and Idaho, famous for its abundant hydrothermal features, including over half the world's geysers and hot springs, and diverse wildlife like bison, wolves, and bears. The park is situated on a supervolcano's caldera and offers diverse landscapes, from the Grand Canyon of the Yellowstone to Yellowstone Lake, and serves as the core of the Greater Yellowstone Ecosystem, a globally significant natural environment";
}
button3.onclick=function(){
    const landmark=
    document.getElementById('landmark');
    landmark.src="yosemite.jpg";
    landmark.style.width="600px";
    text.textContent="Yosemite National Park is a renowned park in California's Sierra Nevada mountains, protected in 1890 and famous for its massive granite cliffs, towering waterfalls like Yosemite Falls, ancient giant sequoia groves, vast meadows, and deep valleys, including the iconic Yosemite Valley. The park is a designated World Heritage Site, recognized for its unique geological formations and biological diversity, with over 90% of its nearly 1,200 square miles managed as wilderness";
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
