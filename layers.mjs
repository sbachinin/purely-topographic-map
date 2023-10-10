const road_hue = 320
const road_lum = '50%'
const road_opa = '80%'

export const layers = [
    {
        "id": "Background",
        "type": "background",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "background-color": "hsl(60, 30%, 93%)"
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
            "fill-opacity": 0.4,
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
            // "hillshade-accent-color": 'red',
            "hillshade-shadow-color": 'hsl(14, 30%, 30%)',
            "hillshade-highlight-color": 'hsl(56, 40%, 88%)',
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
                1,
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
            "line-color": "hsl(199, 44%, 59%)",
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
            "line-color": "hsl(199, 44%, 59%)",
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
                        "hsl(199, 44%, 59%)"
                    ],
                    [
                        8,
                        "hsl(191, 51%, 85%)"
                    ],
                    [
                        9,
                        "hsl(199, 44%, 59%)"
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
            "line-color": "hsl(199, 44%, 59%)",
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
            "line-color": "hsl(199, 44%, 59%)",
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
            "fill-color": "hsl(199,44%,59%)"
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
        "id": "Runway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "aeroway",
        "minzoom": 11,
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0, 0%, 100%)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        11,
                        3
                    ],
                    [
                        20,
                        16
                    ]
                ]
            }
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "$type",
                "LineString"
            ],
            [
                "==",
                "class",
                "runway"
            ]
        ]
    },
    {
        "id": "Taxiway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "aeroway",
        "minzoom": 11,
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0, 0%, 100%)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        11,
                        0.5
                    ],
                    [
                        20,
                        6
                    ]
                ]
            }
        },
        "metadata": {},
        "filter": [
            "==",
            "class",
            "taxiway"
        ]
    },
    {
        "id": "Ferry",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(201, 59%, 45%)",
            "line-width": 1.1,
            "line-dasharray": [
                2,
                2
            ]
        },
        "filter": [
            "==",
            "class",
            "ferry"
        ]
    },
    /* {
        "id": "Tunnel outline",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 6.5,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": [
                "match",
                [
                    "get",
                    "class"
                ],
                "motorway",
                "hsl(28,72%,69%)",
                [
                    "trunk",
                    "primary"
                ],
                "hsl(26, 56%, 68%)",
                "hsl(36,5%,80%)"
            ],
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                6,
                0,
                7,
                0.5,
                10,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        0,
                        2.5
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    2,
                    0
                ],
                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        2,
                        6
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    3,
                    [
                        "secondary",
                        "tertiary"
                    ],
                    2,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    1,
                    0.5
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        5,
                        8
                    ],
                    [
                        "trunk"
                    ],
                    4,
                    [
                        "primary"
                    ],
                    6,
                    [
                        "secondary"
                    ],
                    6,
                    [
                        "tertiary"
                    ],
                    4,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    3,
                    3
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway",
                        "trunk",
                        "primary"
                    ],
                    10,
                    [
                        "secondary"
                    ],
                    8,
                    [
                        "tertiary"
                    ],
                    8,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    4,
                    4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway",
                        "trunk",
                        "primary"
                    ],
                    26,
                    [
                        "secondary"
                    ],
                    26,
                    [
                        "tertiary"
                    ],
                    26,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    18,
                    18
                ]
            ],
            "line-dasharray": [
                0.5,
                0.25
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "brunnel",
                "tunnel"
            ],
            [
                "any",
                [
                    "!has",
                    "class"
                ],
                [
                    "in",
                    "class",
                    "bus_guideway",
                    "busway",
                    "courtyard",
                    "minor",
                    "motorway",
                    "path_construction",
                    "primary",
                    "raceway",
                    "raceway_construction",
                    "secondary",
                    "service",
                    "storage_tank",
                    "tertiary",
                    "track",
                    "trunk"
                ]
            ]
        ]
    },*/
    {
        "id": "Tunnel",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 6.5,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(300, 100%, 76%)",
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                5,
                0,
                6,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "brunnel"
                        ],
                        [
                            "bridge"
                        ],
                        0,
                        1
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    0,
                    0
                ],
                10,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        0,
                        2.5
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    1.5,
                    1
                ],
                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        1,
                        4
                    ],
                    [
                        "trunk"
                    ],
                    2.5,
                    [
                        "primary"
                    ],
                    2.5,
                    [
                        "secondary",
                        "tertiary"
                    ],
                    1.5,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    1,
                    1
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        5,
                        6
                    ],
                    [
                        "trunk"
                    ],
                    3,
                    [
                        "primary"
                    ],
                    5,
                    [
                        "secondary"
                    ],
                    4,
                    [
                        "tertiary"
                    ],
                    3,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    2,
                    2
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway",
                        "trunk",
                        "primary"
                    ],
                    8,
                    [
                        "secondary"
                    ],
                    7,
                    [
                        "tertiary"
                    ],
                    6,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    4,
                    4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway",
                        "trunk",
                        "primary"
                    ],
                    24,
                    [
                        "secondary"
                    ],
                    24,
                    [
                        "tertiary"
                    ],
                    24,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    16,
                    16
                ]
            ],
            "line-opacity": 1
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "brunnel",
                "tunnel"
            ],
            [
                "!in",
                "class",
                "ferry",
                "rail",
                "transit",
                "pier",
                "bridge",
                "path",
                "aerialway",
                "motorway_construction",
                "trunk_construction",
                "primary_construction",
                "secondary_construction",
                "tertiary_construction",
                "minor_construction",
                "service_construction",
                "track_construction"
            ]
        ]
    }, 
    {
        "id": "Railway tunnel",
        "type": "line",
        "minzoom": 8,
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(300,70%,63%)",
            "line-width": {
                "base": 2.8,
                "stops": [
                    [
                        14,
                        4
                    ],
                    [
                        15,
                        7.5
                    ],
                    [
                        20,
                        10
                    ]
                ]
            },
            "line-opacity": 0.4
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "brunnel",
                "tunnel"
            ],
            [
                "==",
                "class",
                "rail"
            ]
        ]
    },
    {
        "id": "Railway tunnel hatching",
        "type": "line",
        "minzoom": 8,
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0,0%,73%)",
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        14.5,
                        0
                    ],
                    [
                        15,
                        3
                    ],
                    [
                        20,
                        8
                    ]
                ]
            },
            "line-opacity": 0.5,
            "line-dasharray": [
                0.2,
                8
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "brunnel",
                "tunnel"
            ],
            [
                "==",
                "class",
                "rail"
            ]
        ]
    },
    {
        "id": "Tunnel path",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 12,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsla(0,0%,63%,0.45)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        14,
                        0.5
                    ],
                    [
                        16,
                        1
                    ],
                    [
                        18,
                        2
                    ],
                    [
                        22,
                        5
                    ]
                ]
            },
            "line-opacity": 1,
            "line-dasharray": [
                3,
                2
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "class",
                "path"
            ],
            [
                "==",
                "brunnel",
                "tunnel"
            ]
        ]
    },
    {
        "id": "Bridge",
        "type": "fill",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsla(42, 49%, 93%, 0.6)",
            "fill-antialias": true
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
                "==",
                "brunnel",
                "bridge"
            ]
        ]
    },
    {
        "id": "Pier",
        "type": "fill",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsl(47, 16%, 89%)",
            "fill-antialias": true
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
                "==",
                "class",
                "pier"
            ]
        ]
    },
    {
        "id": "Pier road",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(47, 16%, 89%)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        13,
                        0.5
                    ],
                    [
                        15,
                        1
                    ],
                    [
                        18,
                        4
                    ]
                ]
            }
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "$type",
                "LineString"
            ],
            [
                "in",
                "class",
                "pier"
            ]
        ]
    },
    /* 
    {
        "id": "Minor road outline",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 10,
        "maxzoom": 24,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "transparent",
            "line-opacity": 0
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "any",
                [
                    "!has",
                    "class"
                ],
                [
                    "in",
                    "class",
                    "bus_guideway",
                    "busway",
                    "courtyard",
                    "minor",
                    "path_construction",
                    "raceway",
                    "raceway_construction",
                    "secondary",
                    "service",
                    "storage_tank",
                    "tertiary",
                    "track"
                ]
            ]
        ]
    },
    
    {
        "id": "Major road outline",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 4,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(28, 72%, 69%)",
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                6,
                0,
                7,
                0.5,
                10,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    2.4,
                    0
                ],
                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    3,
                    0.7
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk"
                    ],
                    4,
                    [
                        "primary"
                    ],
                    6,
                    3
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    10,
                    4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    26,
                    17
                ]
            ],
            "line-opacity": 1
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "in",
                "class",
                "primary",
                "trunk"
            ]
        ]
    },
    
    {
        "id": "Highway outline",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 4,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(25, 75%, 61%)",
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                6,
                0,
                7,
                0.5,
                10,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        0,
                        2.5
                    ],
                    0
                ],
                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        2,
                        6
                    ],
                    0.7
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        5,
                        8
                    ],
                    3
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    10,
                    4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    26,
                    17
                ]
            ],
            "line-opacity": 1
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "==",
                "class",
                "motorway"
            ]
        ]
    },
    */
    {
        "id": "Minor road",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 13,
        "maxzoom": 24,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": `hsla(0, 0%, ${road_lum}, ${road_opa})`,
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],


                13,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "tertiary"
                    ],
                    1.6,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    1,
                    1
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "tertiary"
                    ],
                    6,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    3,
                    3
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "tertiary"
                    ],
                    24,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    12,
                    12
                ]
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "any",
                [
                    "!has",
                    "class"
                ],
                [
                    "in",
                    "class",
                    "bus_guideway",
                    "busway",
                    "courtyard",
                    "minor",
                    "path_construction",
                    "raceway",
                    "raceway_construction",
                    "service",
                    "storage_tank",
                    "tertiary",
                    "track"
                ]
            ]
        ]
    },
    {
        "id": "Major road",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 8,
        "maxzoom": 24,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": `#EF8DD0`,
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                8,
                [
                    // if trunk, 1
                    // if primary, 0.5
                    // else 0
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk"
                    ],
                    1,
                    [
                        "match",
                        [
                            "get",
                            "class"
                        ],
                        [
                            "primary"
                        ],
                        0.5,
                        0
                    ]

                ],
                10,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    1.5,
                    1
                ],
                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk"
                    ],
                    2.5,
                    [
                        "primary"
                    ],
                    2.5,
                    1.5
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk"
                    ],
                    3,
                    [
                        "primary"
                    ],
                    5,
                    4
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    4,
                    4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    24,
                    24
                ]
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "in",
                "class",
                "primary",
                "secondary",
                "trunk"
            ]
        ]
    },
    {
        "id": "Highway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 8,
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": `hsl(267, 83%, 72%)`,
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                8,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "brunnel"
                        ],
                        [
                            "bridge"
                        ],
                        0,
                        3
                    ],
                    0
                ],
                10,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        2,
                        0,
                        3.2
                    ],
                    2
                ],
                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        2,
                        2,
                        6
                    ],
                    1.4
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        2,
                        5,
                        6
                    ],
                    2
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    8,
                    2.4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    24,
                    16
                ]
            ],
            "line-opacity": 1
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "==",
                "class",
                "motorway"
            ]
        ]
    },
    {
        "id": "Path",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 12,
        "layout": {
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": {
                "stops": [
                    [
                        6,
                        "hsl(0, 0%, 60%)"
                    ],
                    [
                        18,
                        "hsl(0, 0%, 51%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        14,
                        0.5
                    ],
                    [
                        22,
                        3
                    ]
                ]
            },
            "line-dasharray": [
                3,
                2
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "$type",
                "LineString"
            ],
            [
                "!in",
                "brunnel",
                "tunnel"
            ],
            [
                "in",
                "class",
                "path",
                "pedestrian"
            ]
        ]
    },
    {
        "id": "Major railway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(30,70%,72%)",
            "line-width": {
                "base": 2.8,
                "stops": [
                    [
                        14,
                        4.8
                    ],
                    [
                        15,
                        10
                    ],
                    [
                        20,
                        16
                    ]
                ]
            },
            "line-opacity": 0.5
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "!in",
                "brunnel",
                "tunnel"
            ],
            [
                "==",
                "class",
                "rail"
            ]
        ]
    },
    {
        "id": "Major railway hatching",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0,0%,72%)",
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        14.5,
                        0
                    ],
                    [
                        15,
                        3
                    ],
                    [
                        20,
                        8
                    ]
                ]
            },
            "line-opacity": [
                "match",
                [
                    "get",
                    "service"
                ],
                "yard",
                0.5,
                1
            ],
            "line-dasharray": [
                0.2,
                9
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "!in",
                "brunnel",
                "tunnel"
            ],
            [
                "==",
                "class",
                "rail"
            ]
        ]
    },
    {
        "id": "Minor railway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0,0%,73%)",
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        14,
                        0.4
                    ],
                    [
                        15,
                        0.75
                    ],
                    [
                        20,
                        2
                    ]
                ]
            }
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "in",
                "subclass",
                "tram",
                "light_rail"
            ]
        ]
    },
    {
        "id": "Minor railway hatching",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0,0%,73%)",
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        14.5,
                        0
                    ],
                    [
                        15,
                        2
                    ],
                    [
                        20,
                        6
                    ]
                ]
            },
            "line-dasharray": [
                0.2,
                4
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "in",
                "subclass",
                "tram",
                "light_rail"
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
        "minzoom": 13,
        "layout": {
            "text-font": [
                "Noto Sans Italic"
            ],
            "text-size": {
                "stops": [
                    [
                        13,
                        10
                    ],
                    [
                        16,
                        14
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
            "text-color": "hsl(213, 56%, 32%)",
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
            "text-color": "hsl(200, 88%, 26%)",
            "text-halo-color": "hsla(0, 0%, 100%, 0.45)",
            "text-halo-width": 1.5
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
            "text-color": {
                "stops": [
                    [
                        1,
                        "hsl(206, 0%, 40%)"
                    ],
                    [
                        4,
                        "hsl(201, 0%, 34%)"
                    ],
                    [
                        6,
                        "hsl(207, 0%, 28%)"
                    ]
                ]
            },
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
                10,
                3,
                13,
                9,
                17,
                14,
                20
            ],
            "text-field": "{name:latin}",
            "visibility": "visible",
            "text-max-width": 5,
            "text-transform": "none",
            "symbol-placement": "point"
        },
        "paint": {
            "text-color": {
                "stops": [
                    [
                        1,
                        "hsl(206, 30%, 40%)"
                    ],
                    [
                        4,
                        "hsl(201, 28%, 34%)"
                    ],
                    [
                        6,
                        "hsl(207, 31%, 28%)"
                    ]
                ]
            },
            "text-opacity": 1,
            "text-halo-blur": 1,
            "text-halo-color": {
                "stops": [
                    [
                        1,
                        "hsla(200,72%,70%,0.05)"
                    ],
                    [
                        3,
                        "hsla(200,72%,70%,0.5)"
                    ]
                ]
            },
            "text-halo-width": 1
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
            "text-color": "hsl(200, 88%, 26%)",
            "text-halo-color": "hsla(0, 0%, 100%, 0.45)",
            "text-halo-width": 1.5
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
                        13
                    ],
                    [
                        12,
                        15
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
            "text-halo-blur": 6,
            "text-halo-color": "hsl(86, 20%, 84%)",
            "text-halo-width": 3
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
        "id": "Volcano labels",
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
    /* 
    {
        "id": "Place labels",
        "type": "symbol",
        "source": "maptiler_planet",
        "source-layer": "place",
        "minzoom": 4,
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
                3,
                11,
                8,
                13,
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
            "text-opacity": [
                "step",
                [
                    "zoom"
                ],
                1,
                8,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "island"
                    ],
                    0,
                    1
                ],
                9,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "island"
                    ],
                    1,
                    1
                ]
            ],
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
    */
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
            "text-color": "hsl(0,0%,40%)",
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
            "text-color": "hsl(0,0%,40%)",
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
            "text-color": "hsl(0,0%,30%)",
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