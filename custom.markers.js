/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 1: Simple marker
/*        {
            x: -200,
            z: -200,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },
*/
        // Example 2: Marker with text
        {
            x: 0,
            z: 0,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "World Center 0/0",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },

        // Example 3: Text only
/*        {
            x: 200,
            z: 200,
            text: "Text only", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },*/

        // add your markers here
        {
            x: 402,
            z: -43,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Spawn Village Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
        {
            x: 286,
            z: 11,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "HipHopScotch's Base Portal & Piglin Trading Hall",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
        {
            x: 285,
            z: -72,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Clament Siren's Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                {
            x: 216,
            z: -229,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Guardian Farm Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                {
            x: 433,
            z: -467,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Jungle Biome Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                {
            x: 433,
            z: -692,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Wither Battle Base Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                {
            x: 218,
            z: -105,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "End Portal Base",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                {
            x: 188,
            z: -44,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Sam's Town Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                {
            x: -144,
            z: 180,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Christmas Village Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                {
            x: 244,
            z: 177,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Tunnel to Christmas Town!",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                        {
            x: 436,
            z: 177,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Monument Trading Hall",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                        {
            x: 436,
            z: 584,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Mushroom Island Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
                        {
            x: 950,
            z: 87,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Mushroom Island Portal",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Calibri,sans serif",
        },
        // do not delete the following two closing brackets
    ]
}
