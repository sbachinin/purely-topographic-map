import { transport_layers } from './transport_layers.mjs'
import { contour_layers } from './contour_layers.mjs'
import { countries_layers } from './countries_layers.mjs'

const city_label_color = "hsl(300, 45%, 35%)"
const water_color = 'hsl(199,44%,59%)'
const ocean_label_color = "hsl(206, 0%, 30%)"

const layers_visibility = {
    contours: true,
    countries: false,
    transport: true
}

export const set_layers_visibility = (l_vis_partial) => {
    Object.assign(layers_visibility, l_vis_partial)
}

export const get_actual_layers = () => {
    return [
        {
            "id": "Background",
            "type": "background",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "hsl(0,0%,93%)"
            }
        },
        {
            "id": "Glacier",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landcover",
            "minzoom": 0,
            "maxzoom": 22,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0,0%,100%)",
                "fill-opacity": 1,
                "fill-antialias": false
            },
            "metadata": {},
            "filter": [
                "==",
                "class",
                "ice"
            ]
        },
        /*
        {
            "id": "Residential",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landuse",
            "maxzoom": 16,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(45,14%,71%)",
                "fill-opacity": {
                    "stops": [
                        [
                            4,
                            0.6
                        ],
                        [
                            16,
                            0.1
                        ]
                    ]
                }
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "in",
                    "class",
                    "residential",
                    "suburb",
                    "neighbourhood"
                ]
            ]
        },
         */
        {
            "id": "Industrial",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landuse",
            "minzoom": 10,
            "maxzoom": 22,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            12,
                            "hsl(0,0%,70%)"
                        ],
                        [
                            16,
                            "hsl(47,16%,89%)"
                        ]
                    ]
                },
                "fill-opacity": 0.5
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "in",
                    "class",
                    "industrial",
                    "commercial",
                    "retail"
                ]
            ]
        },
        {
            "id": "Pedestrian",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "transportation",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(43,25%,99%)",
                "fill-opacity": 0.5
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "!in",
                    "class",
                    "bridge",
                    "pier"
                ],
                [
                    "in",
                    "subclass",
                    "pedestrian",
                    "platform"
                ]
            ]
        },
        {
            "id": "Dam",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landuse",
            "minzoom": 9,
            "maxzoom": 24,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(69, 20%, 79%)",
                "fill-opacity": {
                    "stops": [
                        [
                            9,
                            0.25
                        ],
                        [
                            16,
                            1
                        ]
                    ]
                },
                "fill-antialias": true
            },
            "metadata": {},
            "filter": [
                "==",
                "class",
                "dam"
            ]
        },
        {
            "id": "Garages",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landuse",
            "minzoom": 9,
            "maxzoom": 24,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0, 0%, 93%)",
                "fill-opacity": {
                    "stops": [
                        [
                            9,
                            0.25
                        ],
                        [
                            16,
                            1
                        ]
                    ]
                },
                "fill-antialias": true
            },
            "metadata": {},
            "filter": [
                "in",
                "class",
                "cemetery",
                "college",
                "dam",
                "garages",
                "hospital",
                "school",
                "university"
            ]
        },
        {
            "id": "Cemetery",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landuse",
            "minzoom": 9,
            "maxzoom": 24,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0, 0%, 76%)",
                "fill-opacity": {
                    "stops": [
                        [
                            9,
                            0.25
                        ],
                        [
                            16,
                            1
                        ]
                    ]
                },
                "fill-antialias": true
            },
            "metadata": {},
            "filter": [
                "==",
                "class",
                "cemetery"
            ]
        },
        {
            "id": "Hospital",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landuse",
            "minzoom": 9,
            "maxzoom": 24,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(325, 26%, 91%)",
                "fill-opacity": {
                    "stops": [
                        [
                            9,
                            0.25
                        ],
                        [
                            16,
                            1
                        ]
                    ]
                },
                "fill-antialias": true
            },
            "metadata": {},
            "filter": [
                "==",
                "class",
                "hospital"
            ]
        },
        {
            "id": "Stadium",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "landuse",
            "minzoom": 9,
            "maxzoom": 24,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(90, 49%, 70%)",
                "fill-opacity": {
                    "stops": [
                        [
                            9,
                            0.25
                        ],
                        [
                            16,
                            1
                        ]
                    ]
                },
                "fill-antialias": true
            },
            "metadata": {},
            "filter": [
                "in",
                "class",
                "pitch",
                "stadium"
            ]
        },
        {
            "id": "Hillshade",
            "type": "hillshade",
            "source": "terrain_rgb",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                // "hillshade-accent-color": "hsl(51, 30%, 79%)",
                "hillshade-shadow-color": 'hsl(24, 20%, 60%)',
                "hillshade-highlight-color": 'hsl(56, 30%, 88%)',
                'hillshade-exaggeration': [
                    "interpolate",
                    [
                        "linear",
                        1
                    ],
                    [
                        "zoom"
                    ],
                    1,
                    0.8,
                    16,
                    0.5
                ]
            }
        },



        {
            "id": "River tunnel",
            "type": "line",
            "source": "maptiler_planet",
            "source-layer": "waterway",
            "minzoom": 14,
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": water_color,
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            13,
                            0.5
                        ],
                        [
                            20,
                            6
                        ]
                    ]
                },
                "line-dasharray": [
                    2,
                    4
                ]
            },
            "filter": [
                "all",
                [
                    "==",
                    "brunnel",
                    "tunnel"
                ]
            ]
        },
        {
            "id": "River",
            "type": "line",
            "source": "maptiler_planet",
            "source-layer": "waterway",
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": water_color,
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            11,
                            1
                        ],
                        [
                            20,
                            18
                        ]
                    ]
                }
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "river"
                ],
                [
                    "!=",
                    "brunnel",
                    "tunnel"
                ],
                [
                    "!=",
                    "intermittent",
                    1
                ]
            ]
        },
        {
            "id": "River intermittent",
            "type": "line",
            "source": "maptiler_planet",
            "source-layer": "waterway",
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "stops": [
                        [
                            6,
                            water_color
                        ],
                        [
                            8,
                            "hsl(191, 51%, 85%)"
                        ],
                        [
                            9,
                            water_color
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            11,
                            1
                        ],
                        [
                            20,
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    2,
                    1.6
                ]
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "river"
                ],
                [
                    "!=",
                    "brunnel",
                    "tunnel"
                ],
                [
                    "==",
                    "intermittent",
                    1
                ]
            ]
        },
        {
            "id": "Waterway",
            "type": "line",
            "source": "maptiler_planet",
            "source-layer": "waterway",
            "layout": {
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": water_color,
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            13,
                            0.5
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                }
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "any",
                    [
                        "!has",
                        "class"
                    ],
                    [
                        "in",
                        "class",
                        "canal",
                        "ditch",
                        "drain",
                        "stream"
                    ]
                ],
                [
                    "any",
                    [
                        "!has",
                        "brunnel"
                    ],
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ]
                ],
                [
                    "any",
                    [
                        "!has",
                        "intermittent"
                    ],
                    [
                        "==",
                        "intermittent",
                        0
                    ]
                ]
            ]
        },
        {
            "id": "Waterway intermittent",
            "type": "line",
            "source": "maptiler_planet",
            "source-layer": "waterway",
            "layout": {
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": water_color,
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            13,
                            0.5
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "line-dasharray": [
                    4,
                    3
                ]
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "!=",
                    "class",
                    "river"
                ],
                [
                    "!=",
                    "brunnel",
                    "tunnel"
                ],
                [
                    "==",
                    "intermittent",
                    1
                ]
            ]
        },
        {
            "id": "Water",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "water",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": water_color
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "!=",
                    "intermittent",
                    1
                ],
                [
                    "!=",
                    "brunnel",
                    "tunnel"
                ]
            ]
        },
        {
            "id": "Water intermittent",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "water",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(200, 45%, 75%)",
                "fill-opacity": 1
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "intermittent",
                    1
                ]
            ]
        },
        {
            "id": "Building",
            "type": "fill",
            "source": "maptiler_planet",
            "source-layer": "building",
            "minzoom": 13,
            "maxzoom": 24,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsla(37, 11%, 60%, 20%)",
                "fill-antialias": true,
            }
        },
        /* 
        {
            "id": "Building 3D",
            "type": "fill-extrusion",
            "source": "maptiler_planet",
            "source-layer": "building",
            "minzoom": 14,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-base": {
                    "type": "identity",
                    "property": "render_min_height"
                },
                "fill-extrusion-color": "hsl(36, 8%, 64%)",
                "fill-extrusion-height": {
                    "type": "identity",
                    "property": "render_height"
                },
                "fill-extrusion-opacity": 0.5
            },
            "metadata": {}
        },
         */
        {
            "id": "Cablecar",
            "type": "line",
            "source": "maptiler_planet",
            "source-layer": "transportation",
            "minzoom": 13,
            "maxzoom": 24,
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 9%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            1
                        ],
                        [
                            19,
                            2.5
                        ]
                    ]
                }
            },
            "filter": [
                "==",
                "class",
                "aerialway"
            ]
        },
        {
            "id": "Cablecar dash",
            "type": "line",
            "source": "maptiler_planet",
            "source-layer": "transportation",
            "minzoom": 13,
            "maxzoom": 24,
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 96%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            1
                        ],
                        [
                            19,
                            2.5
                        ]
                    ]
                },
                "line-dasharray": [
                    2,
                    3
                ]
            },
            "filter": [
                "==",
                "class",
                "aerialway"
            ]
        },

        {
            "id": "River labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "waterway",
            "minzoom": 0,
            "layout": {
                "text-font": [
                    "Noto Sans Italic"
                ],
                "text-size": {
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            16,
                            16
                        ]
                    ]
                },
                "text-field": "{name:latin}",
                "visibility": "visible",
                "symbol-spacing": 350,
                "text-max-width": 5,
                "symbol-placement": "line",
                "text-letter-spacing": 0.1,
                "text-rotation-alignment": "map"
            },
            "paint": {
                // "text-color": "hsl(213, 56%, 100%)",
                // "text-halo-color": water_color,
                // "text-halo-width": 2
                "text-color": "hsl(213, 56%, 22%)",
                "text-halo-blur": 0.5,
                "text-halo-color": "hsla(197, 87%, 88%, 0.6)",
                "text-halo-width": 1
            },
            "filter": [
                "has",
                "name"
            ]
        },
        {
            "id": "Lakeline labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "water_name",
            "minzoom": 0,
            "layout": {
                "text-font": [
                    "Roboto Regular",
                    "Noto Sans Regular"
                ],
                "text-size": 12,
                "text-field": "{name:latin}",
                "visibility": "visible",
                "text-max-width": 5,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": ocean_label_color
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ]
            ]
        },
        {
            "id": "Ocean labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "water_name",
            "minzoom": 0,
            "layout": {
                "text-font": [
                    "Roboto Italic",
                    "Noto Sans Italic"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear",
                        1
                    ],
                    [
                        "zoom"
                    ],
                    1,
                    13,
                    3,
                    17,
                    9,
                    17,
                    14,
                    25
                ],
                "text-field": "{name:latin}",
                "visibility": "visible",
                "text-max-width": 5,
                "text-transform": "none",
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": ocean_label_color,
                "text-opacity": 1,
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "has",
                    "name"
                ],
                [
                    "==",
                    "class",
                    "ocean"
                ]
            ]
        },
        {
            "id": "Sea labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "water_name",
            "minzoom": 3,
            "maxzoom": 24,
            "layout": {
                "text-font": [
                    "Roboto Italic",
                    "Noto Sans Italic"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear",
                        1
                    ],
                    [
                        "zoom"
                    ],
                    1,
                    12,
                    3,
                    15,
                    9,
                    19,
                    14,
                    22
                ],
                "text-field": "{name:latin}",
                "visibility": "visible",
                "text-max-width": 5,
                "text-transform": "none",
                "symbol-placement": "point"
            },
            "paint": {
                "text-color": ocean_label_color,
                "text-opacity": 1,
                // "text-halo-blur": 1,
                // "text-halo-color": {
                //     "stops": [
                //         [
                //             1,
                //             "hsla(200,72%,70%,0.05)"
                //         ],
                //         [
                //             3,
                //             "hsla(200,72%,70%,0.5)"
                //         ]
                //     ]
                // },
                // "text-halo-width": 1
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "has",
                    "name"
                ],
                [
                    "==",
                    "class",
                    "sea"
                ]
            ]
        },
        {
            "id": "Lake labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "water_name",
            "minzoom": 7,
            "maxzoom": 24,
            "layout": {
                "text-font": [
                    "Noto Sans Italic"
                ],
                "text-size": 12,
                "text-field": "{name:latin}",
                "visibility": "visible",
                "text-max-width": 5
            },
            "paint": {
                "text-color": ocean_label_color
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "class",
                    "lake"
                ]
            ]
        },



        ...contour_layers.map(l => {
            return {
                ...l,
                layout: {
                    ...l.layout,
                    visibility: layers_visibility.contours ? 'visible' : 'none'
                }
            }
        }),

        ...transport_layers.map(l => {
            return {
                ...l,
                layout: {
                    ...l.layout,
                    visibility: layers_visibility.transport ? 'visible' : 'none'
                }
            }
        }),


        ...countries_layers.map(l => {
            return {
                ...l,
                layout: {
                    ...l.layout,
                    visibility: layers_visibility.countries ? 'visible' : 'none'
                }
            }
        }),


        {
            "id": "Peak labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "mountain_peak",
            "minzoom": 0,
            "maxzoom": 24,
            "layout": {
                "icon-size": 1,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            9,
                            12
                        ],
                        [
                            12,
                            14
                        ],
                        [
                            16,
                            16
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{ele}m\n▲",
                "visibility": "visible",
                "text-anchor": "bottom",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-max-width": {
                    "stops": [
                        [
                            6,
                            8
                        ],
                        [
                            10,
                            8
                        ]
                    ]
                },
                "text-line-height": 1
            },
            "paint": {
                "text-color": "hsl(25, 87%, 0%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "rank",
                    1
                ],
                [
                    "in",
                    "class",
                    "peak"
                ],
                [
                    "!has",
                    "customary_ft"
                ]
            ]
        },

        {
            "id": "Peak labels (US)",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "mountain_peak",
            "minzoom": 9,
            "maxzoom": 24,
            "layout": {
                "icon-size": 1,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            9,
                            9
                        ],
                        [
                            12,
                            11
                        ],
                        [
                            16,
                            12
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{ele_ft}ft\n▲",
                "visibility": "visible",
                "text-anchor": "bottom",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-max-width": {
                    "stops": [
                        [
                            6,
                            8
                        ],
                        [
                            10,
                            8
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "hsl(24,24%,24%)",
                "text-halo-blur": 1,
                "text-halo-color": "hsl(0,0%,100%)",
                "text-halo-width": 1
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "rank",
                    1
                ],
                [
                    "in",
                    "class",
                    "peak"
                ],
                [
                    "has",
                    "customary_ft"
                ]
            ]
        },

        {
            "id": "Volcano labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "mountain_peak",
            "minzoom": 0,
            "maxzoom": 24,
            "layout": {
                "icon-size": 1,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            9,
                            12
                        ],
                        [
                            12,
                            14
                        ],
                        [
                            16,
                            16
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{ele}m\n▲",
                "visibility": "visible",
                "text-anchor": "bottom",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-rotate": 0,
                "text-max-width": {
                    "stops": [
                        [
                            6,
                            8
                        ],
                        [
                            10,
                            8
                        ]
                    ]
                },
                "text-line-height": 1,
                "text-radial-offset": 0
            },
            "paint": {
                "text-color": "hsl(19,91%,35%)",
                "text-halo-blur": 0,
                "text-halo-color": "hsl(0,0%,100%)",
                "text-halo-width": 1.5
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "rank",
                    1
                ],
                [
                    "in",
                    "class",
                    "volcano"
                ],
                [
                    "!has",
                    "customary_ft"
                ]
            ]
        },

        {
            "id": "Volcano labels (US)",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "mountain_peak",
            "minzoom": 9,
            "maxzoom": 24,
            "layout": {
                "icon-size": 1,
                "text-font": [
                    "Noto Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            9,
                            9
                        ],
                        [
                            12,
                            11
                        ],
                        [
                            16,
                            12
                        ]
                    ]
                },
                "text-field": "{name:latin}\n{ele_ft}ft\n▲",
                "visibility": "visible",
                "text-anchor": "bottom",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-max-width": {
                    "stops": [
                        [
                            6,
                            8
                        ],
                        [
                            10,
                            8
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "hsl(19,91%,45%)",
                "text-halo-blur": 1,
                "text-halo-color": "hsl(0,0%,100%)",
                "text-halo-width": 1
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "rank",
                    1
                ],
                [
                    "in",
                    "class",
                    "volcano"
                ],
                [
                    "has",
                    "customary_ft"
                ]
            ]
        },

        {
            "id": "Place labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "place",
            "minzoom": 13,
            "layout": {
                "icon-size": {
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            8.9,
                            0.8
                        ],
                        [
                            9,
                            0
                        ]
                    ]
                },
                "text-font": [
                    "Roboto Regular",
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear",
                        1
                    ],
                    [
                        "zoom"
                    ],
                    11,
                    [
                        "match",
                        [
                            "get",
                            "class"
                        ],
                        [
                            "suburb",
                            "neighbourhood",
                            "quarter",
                            "hamlet",
                            "isolated_dwelling"
                        ],
                        9,
                        "island",
                        8,
                        12
                    ],
                    16,
                    [
                        "match",
                        [
                            "get",
                            "class"
                        ],
                        [
                            "suburb",
                            "neighbourhood",
                            "quarter",
                            "hamlet",
                            "isolated_dwelling"
                        ],
                        15,
                        "island",
                        11,
                        16
                    ]
                ],
                "text-field": "{name:latin}",
                "visibility": "visible",
                "text-anchor": "bottom",
                "text-offset": [
                    0,
                    0
                ],
                "text-padding": 2,
                "icon-optional": false,
                "text-max-width": [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "island"
                    ],
                    6,
                    8
                ],
                "text-transform": [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "suburb",
                        "neighborhood",
                        "neighbourhood",
                        "quarter",
                        "island"
                    ],
                    "uppercase",
                    "none"
                ],
                "icon-allow-overlap": true,
                "text-letter-spacing": [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "suburb",
                        "neighborhood",
                        "neighbourhood",
                        "quarter",
                        "island"
                    ],
                    0.2,
                    0
                ]
            },
            "paint": {
                "text-color": "hsl(0,0%,20%)",
                "icon-opacity": 1,
                "text-halo-blur": [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "suburb",
                        "neighborhood",
                        "neighbourhood",
                        "quarter"
                    ],
                    0.5,
                    1
                ],
                "text-halo-color": "hsl(0,0%,100%)",
                "text-halo-width": [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "suburb",
                        "neighborhood",
                        "neighbourhood",
                        "quarter"
                    ],
                    1,
                    1.2
                ]
            },
            "metadata": {},
            "filter": [
                "any",
                [
                    "!has",
                    "class"
                ],
                [
                    "in",
                    "class",
                    "hamlet",
                    "island",
                    "isolated_dwelling",
                    "neighbourhood",
                    "quarter",
                    "suburb"
                ]
            ]
        },

        {
            "id": "Village labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "place",
            "minzoom": 13,
            "maxzoom": 24,
            "layout": {
                "icon-size": {
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            8.9,
                            0.8
                        ],
                        [
                            9,
                            0
                        ]
                    ]
                },
                "text-font": [
                    "Roboto Regular",
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear",
                        1
                    ],
                    [
                        "zoom"
                    ],
                    13,
                    14,
                    16,
                    16
                ],
                "text-field": "{name:latin}",
                "visibility": "visible",
                "text-anchor": "bottom",
                "text-offset": [
                    0,
                    0
                ],
                "text-padding": 2,
                "icon-optional": false,
                "text-max-width": 8,
                "text-transform": "none",
                "icon-allow-overlap": true,
                "text-letter-spacing": 0
            },
            "paint": {
                "text-color": city_label_color,
                "icon-opacity": 1,
                "text-opacity": 1,
                "text-halo-blur": 1,
                "text-halo-width": 1.2
            },
            "metadata": {},
            "filter": [
                "==",
                "class",
                "village"
            ]
        },
        /*
        {
            "id": "Park labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "park",
            "minzoom": 7,
            "maxzoom": 12,
            "layout": {
                "text-font": [
                    "Roboto Italic",
                    "Noto Sans Italic"
                ],
                "text-size": {
                    "base": 1.2,
                    "stops": [
                        [
                            7,
                            9
                        ],
                        [
                            12,
                            14
                        ]
                    ]
                },
                "text-field": "{name:latin}",
                "visibility": "visible",
                "symbol-spacing": 250,
                "text-max-width": 10,
                "text-transform": "none",
                "symbol-avoid-edges": false,
                "text-letter-spacing": 0.1
            },
            "paint": {
                "text-color": "hsl(120,12%,19%)",
                "text-halo-blur": 1,
                "text-halo-color": "hsla(0, 0%, 100%, 0.5)",
                "text-halo-width": 1
            },
            "metadata": {},
            "filter": [
                "any",
                [
                    "!has",
                    "rank"
                ],
                [
                    "any",
                    [
                        "in",
                        "rank",
                        1
                    ],
                    [
                        "!in",
                        "rank",
                        1
                    ]
                ]
            ]
        },   
        */

        {
            "id": "Town labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "place",
            "minzoom": 7,
            "maxzoom": 16,
            "layout": {
                "icon-size": {
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            14,
                            0.8
                        ]
                    ]
                },
                "text-font": [
                    "Roboto Regular",
                    "Noto Sans Regular"
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear",
                        1
                    ],
                    [
                        "zoom"
                    ],
                    6,
                    [
                        "case",
                        [
                            "<=",
                            [
                                "get",
                                "rank"
                            ],
                            12
                        ],
                        11,
                        10
                    ],
                    9,
                    [
                        "case",
                        [
                            "<=",
                            [
                                "get",
                                "rank"
                            ],
                            15
                        ],
                        11,
                        10
                    ],
                    16,
                    [
                        "case",
                        [
                            "<=",
                            [
                                "get",
                                "rank"
                            ],
                            15
                        ],
                        16,
                        14
                    ]
                ],
                "icon-image": "circle-stroke",
                "text-field": "{name:latin}",
                "visibility": "visible",
                "text-anchor": "bottom",
                "text-offset": [
                    0,
                    0
                ],
                "icon-optional": false,
                "text-max-width": 8,
                "icon-allow-overlap": true
            },
            "paint": {
                "text-color": city_label_color,
                "icon-opacity": [
                    "step",
                    [
                        "zoom"
                    ],
                    1,
                    12,
                    0
                ],
                "text-halo-color": "transparent",
                "text-halo-width": 1.2
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "town"
                ]
            ]
        },

        {
            "id": "City labels",
            "type": "symbol",
            "source": "maptiler_planet",
            "source-layer": "place",
            "minzoom": 4,
            "maxzoom": 16,
            "layout": {
                "icon-size": 1,
                "text-font": [
                    "Roboto",
                ],
                "text-size": [
                    "interpolate",
                    [
                        "linear",
                        1
                    ],
                    [
                        "zoom"
                    ],
                    4,
                    [
                        "case",
                        [
                            "<=",
                            [
                                "get",
                                "rank"
                            ],
                            2
                        ],
                        12,
                        11
                    ],
                    8,
                    [
                        "case",
                        [
                            "<=",
                            [
                                "get",
                                "rank"
                            ],
                            4
                        ],
                        15,
                        13
                    ],
                    12,
                    [
                        "case",
                        [
                            "<=",
                            [
                                "get",
                                "rank"
                            ],
                            4
                        ],
                        20,
                        15
                    ],
                    16,
                    [
                        "case",
                        [
                            "<=",
                            [
                                "get",
                                "rank"
                            ],
                            4
                        ],
                        24,
                        20
                    ]
                ],
                "text-field": "{name:latin}\n•",
                "visibility": "visible",
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-optional": false,
                "text-max-width": 9,
                "text-line-height": 0.8,
                "icon-allow-overlap": true
            },
            "paint": {
                "text-color": city_label_color,
                "text-halo-color": "#E3F4EB",
                "text-halo-width": 1
            },
            "metadata": {},
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "city"
                ]
            ]
        },
    ]
}