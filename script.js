
function fetchTracks(callback) {
    fetch('.\tracks.json')
      .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Error fetching track data:', error);
        });
}

function displayTracks(tracksData) {
    var modal = document.getElementById("myModal");
    var modalTrackInfo = document.getElementById("modalTrackInfo");
    var closeBtn = document.querySelector(".close");

    tracksData.items.forEach(function(item, index) {
        var track = item.track;

//need to go deeper.
        var trackInfoText = JSON.stringify(track, null, 1);


        var openModal = function() {
            modalTrackInfo.innerHTML = "<pre>" + trackInfoText + "</pre>";
            modal.style.display = "block";
        };

        var trackDiv = document.createElement("div");
        trackDiv.className = "grid-item";
        var imgElement = document.createElement("img");
        imgElement.src = track.album.images[0].url;

        var pElement = document.createElement("p");

        pElement.textContent = track.name + " - " + track.artists[0].name;;

        trackDiv.appendChild(imgElement);
        trackDiv.appendChild(pElement);
        trackDiv.addEventListener("click", openModal);

        document.getElementById("trackInfo").appendChild(trackDiv);
    });


    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });


    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

let tracks = {
    "href": "https://api.spotify.com/v1/playlists/0KBB2QrYIyGUiBAysfSPnT/tracks?offset=0&limit=100",
    "items": [
        {
            "added_at": "2024-02-07T18:27:02Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "single",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1VJ0briNOlXRtJUAzoUJdt"
                            },
                            "href": "https://api.spotify.com/v1/artists/1VJ0briNOlXRtJUAzoUJdt",
                            "id": "1VJ0briNOlXRtJUAzoUJdt",
                            "name": "FISHER",
                            "type": "artist",
                            "uri": "spotify:artist:1VJ0briNOlXRtJUAzoUJdt"
                        }
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/143cxYCazoiNfviHRmxkdv"
                    },
                    "href": "https://api.spotify.com/v1/albums/143cxYCazoiNfviHRmxkdv",
                    "id": "143cxYCazoiNfviHRmxkdv",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2739367c1ee2eec0bf3a04b4868",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e029367c1ee2eec0bf3a04b4868",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048519367c1ee2eec0bf3a04b4868",
                            "width": 64
                        }
                    ],
                    "name": "Losing It",
                    "release_date": "2018-07-13",
                    "release_date_precision": "day",
                    "total_tracks": 1,
                    "type": "album",
                    "uri": "spotify:album:143cxYCazoiNfviHRmxkdv"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1VJ0briNOlXRtJUAzoUJdt"
                        },
                        "href": "https://api.spotify.com/v1/artists/1VJ0briNOlXRtJUAzoUJdt",
                        "id": "1VJ0briNOlXRtJUAzoUJdt",
                        "name": "FISHER",
                        "type": "artist",
                        "uri": "spotify:artist:1VJ0briNOlXRtJUAzoUJdt"
                    }
                ],
                
                "disc_number": 1,
                "duration_ms": 248035,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "CA5KR1821202"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6ho0GyrWZN3mhi9zVRW7xi"
                },
                "href": "https://api.spotify.com/v1/tracks/6ho0GyrWZN3mhi9zVRW7xi",
                "id": "6ho0GyrWZN3mhi9zVRW7xi",
                "is_local": false,
                "name": "Losing It",
                "popularity": 76,
                "preview_url": null,
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:6ho0GyrWZN3mhi9zVRW7xi"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:27:21Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4kI8Ie27vjvonwaB2ePh8T"
                            },
                            "href": "https://api.spotify.com/v1/artists/4kI8Ie27vjvonwaB2ePh8T",
                            "id": "4kI8Ie27vjvonwaB2ePh8T",
                            "name": "Portugal. The Man",
                            "type": "artist",
                            "uri": "spotify:artist:4kI8Ie27vjvonwaB2ePh8T"
                        }
                    ],
  
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/4VzzEviJGYUtAeSsJlI9QB"
                    },
                    "href": "https://api.spotify.com/v1/albums/4VzzEviJGYUtAeSsJlI9QB",
                    "id": "4VzzEviJGYUtAeSsJlI9QB",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273af52c228c9619ff6298b08cd",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02af52c228c9619ff6298b08cd",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851af52c228c9619ff6298b08cd",
                            "width": 64
                        }
                    ],
                    "name": "Woodstock",
                    "release_date": "2017-06-16",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:4VzzEviJGYUtAeSsJlI9QB"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4kI8Ie27vjvonwaB2ePh8T"
                        },
                        "href": "https://api.spotify.com/v1/artists/4kI8Ie27vjvonwaB2ePh8T",
                        "id": "4kI8Ie27vjvonwaB2ePh8T",
                        "name": "Portugal. The Man",
                        "type": "artist",
                        "uri": "spotify:artist:4kI8Ie27vjvonwaB2ePh8T"
                    }
                ],
    
                "disc_number": 1,
                "duration_ms": 163253,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USAT21700437"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6QgjcU0zLnzq5OrUoSZ3OK"
                },
                "href": "https://api.spotify.com/v1/tracks/6QgjcU0zLnzq5OrUoSZ3OK",
                "id": "6QgjcU0zLnzq5OrUoSZ3OK",
                "is_local": false,
                "name": "Feel It Still",
                "popularity": 83,
                "preview_url": "https://p.scdn.co/mp3-preview/47e41f47a7627e34bf34d039b32b9774b9b88768?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 4,
                "type": "track",
                "uri": "spotify:track:6QgjcU0zLnzq5OrUoSZ3OK"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:27:41Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                            },
                            "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
                            "id": "2YZyLoL8N0Wb9xBt1NhZWg",
                            "name": "Kendrick Lamar",
                            "type": "artist",
                            "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
                        }
                    ],
     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/1bkN9nIkkCnXeG4yitVS1J"
                    },
                    "href": "https://api.spotify.com/v1/albums/1bkN9nIkkCnXeG4yitVS1J",
                    "id": "1bkN9nIkkCnXeG4yitVS1J",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273eddb2639b74ac6c202032ebe",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02eddb2639b74ac6c202032ebe",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851eddb2639b74ac6c202032ebe",
                            "width": 64
                        }
                    ],
                    "name": "Section.80",
                    "release_date": "2011-07-02",
                    "release_date_precision": "day",
                    "total_tracks": 15,
                    "type": "album",
                    "uri": "spotify:album:1bkN9nIkkCnXeG4yitVS1J"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                        },
                        "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
                        "id": "2YZyLoL8N0Wb9xBt1NhZWg",
                        "name": "Kendrick Lamar",
                        "type": "artist",
                        "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
                    }
                ],
           
                "disc_number": 1,
                "duration_ms": 215509,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "USUYG1008102"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/2Fw5S2gaOSZzdN5dFoC2dj"
                },
                "href": "https://api.spotify.com/v1/tracks/2Fw5S2gaOSZzdN5dFoC2dj",
                "id": "2Fw5S2gaOSZzdN5dFoC2dj",
                "is_local": false,
                "name": "A.D.H.D",
                "popularity": 76,
                "preview_url": "https://p.scdn.co/mp3-preview/373593dd102cf4caddd5f3404aa1150bc186adcd?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 3,
                "type": "track",
                "uri": "spotify:track:2Fw5S2gaOSZzdN5dFoC2dj"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:30:09Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0EdvGhlC1FkGItLOWQzG4J"
                            },
                            "href": "https://api.spotify.com/v1/artists/0EdvGhlC1FkGItLOWQzG4J",
                            "id": "0EdvGhlC1FkGItLOWQzG4J",
                            "name": "Sublime",
                            "type": "artist",
                            "uri": "spotify:artist:0EdvGhlC1FkGItLOWQzG4J"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0vuwlanMPucXrYMGnOjhYL"
                    },
                    "href": "https://api.spotify.com/v1/albums/0vuwlanMPucXrYMGnOjhYL",
                    "id": "0vuwlanMPucXrYMGnOjhYL",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d77299e3d29f44495cd7fbcb",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02d77299e3d29f44495cd7fbcb",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851d77299e3d29f44495cd7fbcb",
                            "width": 64
                        }
                    ],
                    "name": "40oz. To Freedom",
                    "release_date": "1992-06-01",
                    "release_date_precision": "day",
                    "total_tracks": 22,
                    "type": "album",
                    "uri": "spotify:album:0vuwlanMPucXrYMGnOjhYL"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0EdvGhlC1FkGItLOWQzG4J"
                        },
                        "href": "https://api.spotify.com/v1/artists/0EdvGhlC1FkGItLOWQzG4J",
                        "id": "0EdvGhlC1FkGItLOWQzG4J",
                        "name": "Sublime",
                        "type": "artist",
                        "uri": "spotify:artist:0EdvGhlC1FkGItLOWQzG4J"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 317640,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USMC19544449"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/72KtYadTtUchP2opNvcSWr"
                },
                "href": "https://api.spotify.com/v1/tracks/72KtYadTtUchP2opNvcSWr",
                "id": "72KtYadTtUchP2opNvcSWr",
                "is_local": false,
                "name": "5446 Thats My Number/ Ball And Chain",
                "popularity": 56,
                "preview_url": null,
                "track": true,
                "track_number": 6,
                "type": "track",
                "uri": "spotify:track:72KtYadTtUchP2opNvcSWr"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:31:23Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2aoFQUeHD1U7pL098lRsDU"
                            },
                            "href": "https://api.spotify.com/v1/artists/2aoFQUeHD1U7pL098lRsDU",
                            "id": "2aoFQUeHD1U7pL098lRsDU",
                            "name": "Madvillain",
                            "type": "artist",
                            "uri": "spotify:artist:2aoFQUeHD1U7pL098lRsDU"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5LhTec3c7dcqBvpLRWbMcf"
                            },
                            "href": "https://api.spotify.com/v1/artists/5LhTec3c7dcqBvpLRWbMcf",
                            "id": "5LhTec3c7dcqBvpLRWbMcf",
                            "name": "Madlib",
                            "type": "artist",
                            "uri": "spotify:artist:5LhTec3c7dcqBvpLRWbMcf"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2pAWfrd7WFF3XhVt9GooDL"
                            },
                            "href": "https://api.spotify.com/v1/artists/2pAWfrd7WFF3XhVt9GooDL",
                            "id": "2pAWfrd7WFF3XhVt9GooDL",
                            "name": "MF DOOM",
                            "type": "artist",
                            "uri": "spotify:artist:2pAWfrd7WFF3XhVt9GooDL"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk"
                    },
                    "href": "https://api.spotify.com/v1/albums/19bQiwEKhXUBJWY6oV3KZk",
                    "id": "19bQiwEKhXUBJWY6oV3KZk",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27374dc897ea75402db37ef239a",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0274dc897ea75402db37ef239a",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485174dc897ea75402db37ef239a",
                            "width": 64
                        }
                    ],
                    "name": "Madvillainy",
                    "release_date": "2004-03-24",
                    "release_date_precision": "day",
                    "total_tracks": 22,
                    "type": "album",
                    "uri": "spotify:album:19bQiwEKhXUBJWY6oV3KZk"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2aoFQUeHD1U7pL098lRsDU"
                        },
                        "href": "https://api.spotify.com/v1/artists/2aoFQUeHD1U7pL098lRsDU",
                        "id": "2aoFQUeHD1U7pL098lRsDU",
                        "name": "Madvillain",
                        "type": "artist",
                        "uri": "spotify:artist:2aoFQUeHD1U7pL098lRsDU"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5LhTec3c7dcqBvpLRWbMcf"
                        },
                        "href": "https://api.spotify.com/v1/artists/5LhTec3c7dcqBvpLRWbMcf",
                        "id": "5LhTec3c7dcqBvpLRWbMcf",
                        "name": "Madlib",
                        "type": "artist",
                        "uri": "spotify:artist:5LhTec3c7dcqBvpLRWbMcf"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2pAWfrd7WFF3XhVt9GooDL"
                        },
                        "href": "https://api.spotify.com/v1/artists/2pAWfrd7WFF3XhVt9GooDL",
                        "id": "2pAWfrd7WFF3XhVt9GooDL",
                        "name": "MF DOOM",
                        "type": "artist",
                        "uri": "spotify:artist:2pAWfrd7WFF3XhVt9GooDL"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 130479,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "US2S70465020"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/21O0XXPEWPtePt5RMY93Ob"
                },
                "href": "https://api.spotify.com/v1/tracks/21O0XXPEWPtePt5RMY93Ob",
                "id": "21O0XXPEWPtePt5RMY93Ob",
                "is_local": false,
                "name": "All Caps",
                "popularity": 74,
                "preview_url": "https://p.scdn.co/mp3-preview/20b7649ef7daa77fa4eac4c36dc60ac5b6df1e3b?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 20,
                "type": "track",
                "uri": "spotify:track:21O0XXPEWPtePt5RMY93Ob"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:31:47Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
                            },
                            "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
                            "id": "7tYKF4w9nC0nq9CsPZTHyP",
                            "name": "SZA",
                            "type": "artist",
                            "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/07w0rG5TETcyihsEIZR3qG"
                    },
                    "href": "https://api.spotify.com/v1/albums/07w0rG5TETcyihsEIZR3qG",
                    "id": "07w0rG5TETcyihsEIZR3qG",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0270dbc9f47669d120ad874ec1",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485170dbc9f47669d120ad874ec1",
                            "width": 64
                        }
                    ],
                    "name": "SOS",
                    "release_date": "2022-12-09",
                    "release_date_precision": "day",
                    "total_tracks": 23,
                    "type": "album",
                    "uri": "spotify:album:07w0rG5TETcyihsEIZR3qG"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
                        },
                        "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
                        "id": "7tYKF4w9nC0nq9CsPZTHyP",
                        "name": "SZA",
                        "type": "artist",
                        "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 153946,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USRC12204584"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/3OHfY25tqY28d16oZczHc8"
                },
                "href": "https://api.spotify.com/v1/tracks/3OHfY25tqY28d16oZczHc8",
                "id": "3OHfY25tqY28d16oZczHc8",
                "is_local": false,
                "name": "Kill Bill",
                "popularity": 86,
                "preview_url": "https://p.scdn.co/mp3-preview/49dfe4ea78c5d3c5d2923d4a34c50fc4709855cb?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:3OHfY25tqY28d16oZczHc8"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:32:29Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "single",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1gR0gsQYfi6joyO1dlp76N"
                            },
                            "href": "https://api.spotify.com/v1/artists/1gR0gsQYfi6joyO1dlp76N",
                            "id": "1gR0gsQYfi6joyO1dlp76N",
                            "name": "Justice",
                            "type": "artist",
                            "uri": "spotify:artist:1gR0gsQYfi6joyO1dlp76N"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
                            },
                            "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
                            "id": "5INjqkS1o8h1imAzPqGZBb",
                            "name": "Tame Impala",
                            "type": "artist",
                            "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3ISYaclw23kCz3IZtn7koK"
                    },
                    "href": "https://api.spotify.com/v1/albums/3ISYaclw23kCz3IZtn7koK",
                    "id": "3ISYaclw23kCz3IZtn7koK",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e2d85e24e16dadb90a67a6df",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02e2d85e24e16dadb90a67a6df",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851e2d85e24e16dadb90a67a6df",
                            "width": 64
                        }
                    ],
                    "name": "One Night/All Night",
                    "release_date": "2024-01-23",
                    "release_date_precision": "day",
                    "total_tracks": 1,
                    "type": "album",
                    "uri": "spotify:album:3ISYaclw23kCz3IZtn7koK"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1gR0gsQYfi6joyO1dlp76N"
                        },
                        "href": "https://api.spotify.com/v1/artists/1gR0gsQYfi6joyO1dlp76N",
                        "id": "1gR0gsQYfi6joyO1dlp76N",
                        "name": "Justice",
                        "type": "artist",
                        "uri": "spotify:artist:1gR0gsQYfi6joyO1dlp76N"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
                        },
                        "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
                        "id": "5INjqkS1o8h1imAzPqGZBb",
                        "name": "Tame Impala",
                        "type": "artist",
                        "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 276066,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "FR8EU2300040"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/7sjuNUjWtSqhbxJ3RAUffm"
                },
                "href": "https://api.spotify.com/v1/tracks/7sjuNUjWtSqhbxJ3RAUffm",
                "id": "7sjuNUjWtSqhbxJ3RAUffm",
                "is_local": false,
                "name": "One Night/All Night",
                "popularity": 76,
                "preview_url": "https://p.scdn.co/mp3-preview/a8742ce4b1598a9c702bcb582ada7617dde41e6e?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:7sjuNUjWtSqhbxJ3RAUffm"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:32:55Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
                            },
                            "href": "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
                            "id": "3AA28KZvwAUcZuOKwyblJQ",
                            "name": "Gorillaz",
                            "type": "artist",
                            "uri": "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT"
                    },
                    "href": "https://api.spotify.com/v1/albums/0bUTHlWbkSQysoM3VsWldT",
                    "id": "0bUTHlWbkSQysoM3VsWldT",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0219d85a472f328a6ed9b704cf",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485119d85a472f328a6ed9b704cf",
                            "width": 64
                        }
                    ],
                    "name": "Demon Days",
                    "release_date": "2005-05-23",
                    "release_date_precision": "day",
                    "total_tracks": 15,
                    "type": "album",
                    "uri": "spotify:album:0bUTHlWbkSQysoM3VsWldT"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
                        },
                        "href": "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
                        "id": "3AA28KZvwAUcZuOKwyblJQ",
                        "name": "Gorillaz",
                        "type": "artist",
                        "uri": "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 165093,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBAYE0500175"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6lrDckuosGpwEHtm1hHBcf"
                },
                "href": "https://api.spotify.com/v1/tracks/6lrDckuosGpwEHtm1hHBcf",
                "id": "6lrDckuosGpwEHtm1hHBcf",
                "is_local": false,
                "name": "November Has Come",
                "popularity": 64,
                "preview_url": "https://p.scdn.co/mp3-preview/db4bd6c8eed902e18411d63a4bf05b841f228deb?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:6lrDckuosGpwEHtm1hHBcf"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:33:49Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
                            },
                            "href": "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
                            "id": "0k17h0D3J5VfsdmQ1iZtE9",
                            "name": "Pink Floyd",
                            "type": "artist",
                            "uri": "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
                        }
                    ],
                    "available_markets": [],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3a0UOgDWw2pTajw85QPMiz"
                    },
                    "href": "https://api.spotify.com/v1/albums/3a0UOgDWw2pTajw85QPMiz",
                    "id": "3a0UOgDWw2pTajw85QPMiz",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27305d4eec40a828850aa8cd2f7",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0205d4eec40a828850aa8cd2f7",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485105d4eec40a828850aa8cd2f7",
                            "width": 64
                        }
                    ],
                    "name": "The Dark Side Of The Moon (2011 Remastered Version)",
                    "release_date": "1973-03-16",
                    "release_date_precision": "day",
                    "total_tracks": 20,
                    "type": "album",
                    "uri": "spotify:album:3a0UOgDWw2pTajw85QPMiz"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
                        },
                        "href": "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
                        "id": "0k17h0D3J5VfsdmQ1iZtE9",
                        "name": "Pink Floyd",
                        "type": "artist",
                        "uri": "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
                    }
                ],
                "available_markets": [],
                "disc_number": 1,
                "duration_ms": 382834,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBN9Y1100081"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/3aoDEt6zSuYQ47gzarlaVo"
                },
                "href": "https://api.spotify.com/v1/tracks/3aoDEt6zSuYQ47gzarlaVo",
                "id": "3aoDEt6zSuYQ47gzarlaVo",
                "is_local": false,
                "name": "Money - 2011 Remastered Version",
                "popularity": 0,
                "preview_url": null,
                "track": true,
                "track_number": 6,
                "type": "track",
                "uri": "spotify:track:3aoDEt6zSuYQ47gzarlaVo"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:34:04Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/20qISvAhX20dpIbOOzGK3q"
                            },
                            "href": "https://api.spotify.com/v1/artists/20qISvAhX20dpIbOOzGK3q",
                            "id": "20qISvAhX20dpIbOOzGK3q",
                            "name": "Nas",
                            "type": "artist",
                            "uri": "spotify:artist:20qISvAhX20dpIbOOzGK3q"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1"
                    },
                    "href": "https://api.spotify.com/v1/albums/3kEtdS2pH6hKcMU9Wioob1",
                    "id": "3kEtdS2pH6hKcMU9Wioob1",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273045fc920ecf4f8094888ec26",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02045fc920ecf4f8094888ec26",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851045fc920ecf4f8094888ec26",
                            "width": 64
                        }
                    ],
                    "name": "Illmatic",
                    "release_date": "1994-04-19",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:3kEtdS2pH6hKcMU9Wioob1"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/20qISvAhX20dpIbOOzGK3q"
                        },
                        "href": "https://api.spotify.com/v1/artists/20qISvAhX20dpIbOOzGK3q",
                        "id": "20qISvAhX20dpIbOOzGK3q",
                        "name": "Nas",
                        "type": "artist",
                        "uri": "spotify:artist:20qISvAhX20dpIbOOzGK3q"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 293973,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "USSM10017351"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/0trHOzAhNpGCsGBEu7dOJo"
                },
                "href": "https://api.spotify.com/v1/tracks/0trHOzAhNpGCsGBEu7dOJo",
                "id": "0trHOzAhNpGCsGBEu7dOJo",
                "is_local": false,
                "name": "N.Y. State of Mind",
                "popularity": 76,
                "preview_url": "https://p.scdn.co/mp3-preview/f27225424bca80900ee9a32f4a494c900a012200?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:0trHOzAhNpGCsGBEu7dOJo"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:34:30Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh"
                            },
                            "href": "https://api.spotify.com/v1/artists/6olE6TJLqED3rqDCT0FyPh",
                            "id": "6olE6TJLqED3rqDCT0FyPh",
                            "name": "Nirvana",
                            "type": "artist",
                            "uri": "spotify:artist:6olE6TJLqED3rqDCT0FyPh"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ"
                    },
                    "href": "https://api.spotify.com/v1/albums/2guirTSEqLizK7j9i1MTTZ",
                    "id": "2guirTSEqLizK7j9i1MTTZ",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02e175a19e530c898d167d39bf",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851e175a19e530c898d167d39bf",
                            "width": 64
                        }
                    ],
                    "name": "Nevermind (Remastered)",
                    "release_date": "1991-09-26",
                    "release_date_precision": "day",
                    "total_tracks": 13,
                    "type": "album",
                    "uri": "spotify:album:2guirTSEqLizK7j9i1MTTZ"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh"
                        },
                        "href": "https://api.spotify.com/v1/artists/6olE6TJLqED3rqDCT0FyPh",
                        "id": "6olE6TJLqED3rqDCT0FyPh",
                        "name": "Nirvana",
                        "type": "artist",
                        "uri": "spotify:artist:6olE6TJLqED3rqDCT0FyPh"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 218920,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USGF19942503"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/4P5KoWXOxwuobLmHXLMobV"
                },
                "href": "https://api.spotify.com/v1/tracks/4P5KoWXOxwuobLmHXLMobV",
                "id": "4P5KoWXOxwuobLmHXLMobV",
                "is_local": false,
                "name": "Come As You Are",
                "popularity": 80,
                "preview_url": null,
                "track": true,
                "track_number": 3,
                "type": "track",
                "uri": "spotify:track:4P5KoWXOxwuobLmHXLMobV"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:35:52Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "single",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs"
                            },
                            "href": "https://api.spotify.com/v1/artists/4Gso3d4CscCijv0lmajZWs",
                            "id": "4Gso3d4CscCijv0lmajZWs",
                            "name": "Don Toliver",
                            "type": "artist",
                            "uri": "spotify:artist:4Gso3d4CscCijv0lmajZWs"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0jSSRlhYuZmtLMrYB8pjzC"
                    },
                    "href": "https://api.spotify.com/v1/albums/0jSSRlhYuZmtLMrYB8pjzC",
                    "id": "0jSSRlhYuZmtLMrYB8pjzC",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a149905378aeccdfcc04aa80",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02a149905378aeccdfcc04aa80",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851a149905378aeccdfcc04aa80",
                            "width": 64
                        }
                    ],
                    "name": "Bandit",
                    "release_date": "2024-02-01",
                    "release_date_precision": "day",
                    "total_tracks": 1,
                    "type": "album",
                    "uri": "spotify:album:0jSSRlhYuZmtLMrYB8pjzC"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs"
                        },
                        "href": "https://api.spotify.com/v1/artists/4Gso3d4CscCijv0lmajZWs",
                        "id": "4Gso3d4CscCijv0lmajZWs",
                        "name": "Don Toliver",
                        "type": "artist",
                        "uri": "spotify:artist:4Gso3d4CscCijv0lmajZWs"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 147746,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "USAT22400561"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/7sTyAjxDXq9afwfSQy6D0s"
                },
                "href": "https://api.spotify.com/v1/tracks/7sTyAjxDXq9afwfSQy6D0s",
                "id": "7sTyAjxDXq9afwfSQy6D0s",
                "is_local": false,
                "name": "Bandit",
                "popularity": 82,
                "preview_url": "https://p.scdn.co/mp3-preview/08082a5c6306207179dcc44af304b9967c3ca9d0?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:7sTyAjxDXq9afwfSQy6D0s"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:37:34Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4RnBFZRiMLRyZy0AzzTg2C"
                            },
                            "href": "https://api.spotify.com/v1/artists/4RnBFZRiMLRyZy0AzzTg2C",
                            "id": "4RnBFZRiMLRyZy0AzzTg2C",
                            "name": "Run The Jewels",
                            "type": "artist",
                            "uri": "spotify:artist:4RnBFZRiMLRyZy0AzzTg2C"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/57UnSUpae3SbRekxNa5Kgl"
                            },
                            "href": "https://api.spotify.com/v1/artists/57UnSUpae3SbRekxNa5Kgl",
                            "id": "57UnSUpae3SbRekxNa5Kgl",
                            "name": "El-P",
                            "type": "artist",
                            "uri": "spotify:artist:57UnSUpae3SbRekxNa5Kgl"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2N4EYkIlG1kv25g6Wv8LGI"
                            },
                            "href": "https://api.spotify.com/v1/artists/2N4EYkIlG1kv25g6Wv8LGI",
                            "id": "2N4EYkIlG1kv25g6Wv8LGI",
                            "name": "Killer Mike",
                            "type": "artist",
                            "uri": "spotify:artist:2N4EYkIlG1kv25g6Wv8LGI"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/2vY03PfKPFUUM1FA2lgmC2"
                    },
                    "href": "https://api.spotify.com/v1/albums/2vY03PfKPFUUM1FA2lgmC2",
                    "id": "2vY03PfKPFUUM1FA2lgmC2",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273708b420d0de80525f3d63206",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02708b420d0de80525f3d63206",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851708b420d0de80525f3d63206",
                            "width": 64
                        }
                    ],
                    "name": "Run The Jewels 3",
                    "release_date": "2016-12-25",
                    "release_date_precision": "day",
                    "total_tracks": 14,
                    "type": "album",
                    "uri": "spotify:album:2vY03PfKPFUUM1FA2lgmC2"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4RnBFZRiMLRyZy0AzzTg2C"
                        },
                        "href": "https://api.spotify.com/v1/artists/4RnBFZRiMLRyZy0AzzTg2C",
                        "id": "4RnBFZRiMLRyZy0AzzTg2C",
                        "name": "Run The Jewels",
                        "type": "artist",
                        "uri": "spotify:artist:4RnBFZRiMLRyZy0AzzTg2C"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/57UnSUpae3SbRekxNa5Kgl"
                        },
                        "href": "https://api.spotify.com/v1/artists/57UnSUpae3SbRekxNa5Kgl",
                        "id": "57UnSUpae3SbRekxNa5Kgl",
                        "name": "El-P",
                        "type": "artist",
                        "uri": "spotify:artist:57UnSUpae3SbRekxNa5Kgl"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2N4EYkIlG1kv25g6Wv8LGI"
                        },
                        "href": "https://api.spotify.com/v1/artists/2N4EYkIlG1kv25g6Wv8LGI",
                        "id": "2N4EYkIlG1kv25g6Wv8LGI",
                        "name": "Killer Mike",
                        "type": "artist",
                        "uri": "spotify:artist:2N4EYkIlG1kv25g6Wv8LGI"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4PrinKSrmILmo0kERG0Ogn"
                        },
                        "href": "https://api.spotify.com/v1/artists/4PrinKSrmILmo0kERG0Ogn",
                        "id": "4PrinKSrmILmo0kERG0Ogn",
                        "name": "Trina",
                        "type": "artist",
                        "uri": "spotify:artist:4PrinKSrmILmo0kERG0Ogn"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 221173,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "QZ6AM1600010"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/2c9ZkNtBxIbyetjR3ctuBn"
                },
                "href": "https://api.spotify.com/v1/tracks/2c9ZkNtBxIbyetjR3ctuBn",
                "id": "2c9ZkNtBxIbyetjR3ctuBn",
                "is_local": false,
                "name": "Panther Like a Panther (Miracle Mix) [feat. Trina]",
                "popularity": 47,
                "preview_url": "https://p.scdn.co/mp3-preview/63f66516be88c5a2be560ecde00d4fa9ce23d405?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 10,
                "type": "track",
                "uri": "spotify:track:2c9ZkNtBxIbyetjR3ctuBn"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:38:23Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "single",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4VjWi8luQOkJ3hLEW7UMhl"
                            },
                            "href": "https://api.spotify.com/v1/artists/4VjWi8luQOkJ3hLEW7UMhl",
                            "id": "4VjWi8luQOkJ3hLEW7UMhl",
                            "name": "Chau Sara",
                            "type": "artist",
                            "uri": "spotify:artist:4VjWi8luQOkJ3hLEW7UMhl"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/1hQ64GsYQDdqkS3mb1CppX"
                    },
                    "href": "https://api.spotify.com/v1/albums/1hQ64GsYQDdqkS3mb1CppX",
                    "id": "1hQ64GsYQDdqkS3mb1CppX",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273cf7b1950fb0a098526402f92",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02cf7b1950fb0a098526402f92",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851cf7b1950fb0a098526402f92",
                            "width": 64
                        }
                    ],
                    "name": "Saturn Beach",
                    "release_date": "2024-01-22",
                    "release_date_precision": "day",
                    "total_tracks": 1,
                    "type": "album",
                    "uri": "spotify:album:1hQ64GsYQDdqkS3mb1CppX"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4VjWi8luQOkJ3hLEW7UMhl"
                        },
                        "href": "https://api.spotify.com/v1/artists/4VjWi8luQOkJ3hLEW7UMhl",
                        "id": "4VjWi8luQOkJ3hLEW7UMhl",
                        "name": "Chau Sara",
                        "type": "artist",
                        "uri": "spotify:artist:4VjWi8luQOkJ3hLEW7UMhl"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 105367,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "SE66N2353905"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/3UBsL5HYG3AkGqAIyf64CC"
                },
                "href": "https://api.spotify.com/v1/tracks/3UBsL5HYG3AkGqAIyf64CC",
                "id": "3UBsL5HYG3AkGqAIyf64CC",
                "is_local": false,
                "name": "Saturn Beach",
                "popularity": 39,
                "preview_url": "https://p.scdn.co/mp3-preview/aaf05c388a3e776b8101d1db8b95d5f78e623a90?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:3UBsL5HYG3AkGqAIyf64CC"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:39:27Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/01QTIT5P1pFP3QnnFSdsJf"
                            },
                            "href": "https://api.spotify.com/v1/artists/01QTIT5P1pFP3QnnFSdsJf",
                            "id": "01QTIT5P1pFP3QnnFSdsJf",
                            "name": "Lupe Fiasco",
                            "type": "artist",
                            "uri": "spotify:artist:01QTIT5P1pFP3QnnFSdsJf"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0MihD70HInk2rDaChdAdEy"
                    },
                    "href": "https://api.spotify.com/v1/albums/0MihD70HInk2rDaChdAdEy",
                    "id": "0MihD70HInk2rDaChdAdEy",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c3244d303444a43b933b9bf4",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02c3244d303444a43b933b9bf4",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851c3244d303444a43b933b9bf4",
                            "width": 64
                        }
                    ],
                    "name": "Lupe Fiasco's The Cool",
                    "release_date": "2007-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 19,
                    "type": "album",
                    "uri": "spotify:album:0MihD70HInk2rDaChdAdEy"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/01QTIT5P1pFP3QnnFSdsJf"
                        },
                        "href": "https://api.spotify.com/v1/artists/01QTIT5P1pFP3QnnFSdsJf",
                        "id": "01QTIT5P1pFP3QnnFSdsJf",
                        "name": "Lupe Fiasco",
                        "type": "artist",
                        "uri": "spotify:artist:01QTIT5P1pFP3QnnFSdsJf"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 312933,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USAT20705112"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/1R6nmC4HUGOGSKU02Wqa0v"
                },
                "href": "https://api.spotify.com/v1/tracks/1R6nmC4HUGOGSKU02Wqa0v",
                "id": "1R6nmC4HUGOGSKU02Wqa0v",
                "is_local": false,
                "name": "The Coolest",
                "popularity": 40,
                "preview_url": "https://p.scdn.co/mp3-preview/49ba15532d3243d00c6e47aec9246514122a75be?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 4,
                "type": "track",
                "uri": "spotify:track:1R6nmC4HUGOGSKU02Wqa0v"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:39:37Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5CE2IfdYZEQGIDsfiRm8SI"
                            },
                            "href": "https://api.spotify.com/v1/artists/5CE2IfdYZEQGIDsfiRm8SI",
                            "id": "5CE2IfdYZEQGIDsfiRm8SI",
                            "name": "DJ Shadow",
                            "type": "artist",
                            "uri": "spotify:artist:5CE2IfdYZEQGIDsfiRm8SI"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6PQn1xJAsfSUbtKtO2O4nC"
                    },
                    "href": "https://api.spotify.com/v1/albums/6PQn1xJAsfSUbtKtO2O4nC",
                    "id": "6PQn1xJAsfSUbtKtO2O4nC",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273843dc457903f7a33a9fd97b5",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02843dc457903f7a33a9fd97b5",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851843dc457903f7a33a9fd97b5",
                            "width": 64
                        }
                    ],
                    "name": "The Mountain Will Fall",
                    "release_date": "2016-06-24",
                    "release_date_precision": "day",
                    "total_tracks": 12,
                    "type": "album",
                    "uri": "spotify:album:6PQn1xJAsfSUbtKtO2O4nC"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5CE2IfdYZEQGIDsfiRm8SI"
                        },
                        "href": "https://api.spotify.com/v1/artists/5CE2IfdYZEQGIDsfiRm8SI",
                        "id": "5CE2IfdYZEQGIDsfiRm8SI",
                        "name": "DJ Shadow",
                        "type": "artist",
                        "uri": "spotify:artist:5CE2IfdYZEQGIDsfiRm8SI"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4RnBFZRiMLRyZy0AzzTg2C"
                        },
                        "href": "https://api.spotify.com/v1/artists/4RnBFZRiMLRyZy0AzzTg2C",
                        "id": "4RnBFZRiMLRyZy0AzzTg2C",
                        "name": "Run The Jewels",
                        "type": "artist",
                        "uri": "spotify:artist:4RnBFZRiMLRyZy0AzzTg2C"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 195965,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "QM8RL1400325"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/3UajtqBR1vopHl4EVQutul"
                },
                "href": "https://api.spotify.com/v1/tracks/3UajtqBR1vopHl4EVQutul",
                "id": "3UajtqBR1vopHl4EVQutul",
                "is_local": false,
                "name": "Nobody Speak (feat. Run The Jewels)",
                "popularity": 40,
                "preview_url": "https://p.scdn.co/mp3-preview/1eb6d12dbf295d1dfccd483dac41d8848e08d0f7?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:3UajtqBR1vopHl4EVQutul"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:43:20Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6V3F8MZrOKdT9fU686ybE9"
                            },
                            "href": "https://api.spotify.com/v1/artists/6V3F8MZrOKdT9fU686ybE9",
                            "id": "6V3F8MZrOKdT9fU686ybE9",
                            "name": "Mark Morrison",
                            "type": "artist",
                            "uri": "spotify:artist:6V3F8MZrOKdT9fU686ybE9"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6plavTFCGXv5vpy0jZVtOV"
                    },
                    "href": "https://api.spotify.com/v1/albums/6plavTFCGXv5vpy0jZVtOV",
                    "id": "6plavTFCGXv5vpy0jZVtOV",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27301841d493ec3808242042c0f",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0201841d493ec3808242042c0f",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485101841d493ec3808242042c0f",
                            "width": 64
                        }
                    ],
                    "name": "Return of the Mack",
                    "release_date": "1996-04-22",
                    "release_date_precision": "day",
                    "total_tracks": 13,
                    "type": "album",
                    "uri": "spotify:album:6plavTFCGXv5vpy0jZVtOV"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6V3F8MZrOKdT9fU686ybE9"
                        },
                        "href": "https://api.spotify.com/v1/artists/6V3F8MZrOKdT9fU686ybE9",
                        "id": "6V3F8MZrOKdT9fU686ybE9",
                        "name": "Mark Morrison",
                        "type": "artist",
                        "uri": "spotify:artist:6V3F8MZrOKdT9fU686ybE9"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 213093,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "GBAHT0200668"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/3jDdpx9PMlfMBS5tOBHFm9"
                },
                "href": "https://api.spotify.com/v1/tracks/3jDdpx9PMlfMBS5tOBHFm9",
                "id": "3jDdpx9PMlfMBS5tOBHFm9",
                "is_local": false,
                "name": "Return of the Mack",
                "popularity": 80,
                "preview_url": "https://p.scdn.co/mp3-preview/456989fb9b32c4525f0668676ad5067d20479b4a?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 6,
                "type": "track",
                "uri": "spotify:track:3jDdpx9PMlfMBS5tOBHFm9"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:43:49Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0Mz5XE0kb1GBnbLQm2VbcO"
                            },
                            "href": "https://api.spotify.com/v1/artists/0Mz5XE0kb1GBnbLQm2VbcO",
                            "id": "0Mz5XE0kb1GBnbLQm2VbcO",
                            "name": "Mos Def",
                            "type": "artist",
                            "uri": "spotify:artist:0Mz5XE0kb1GBnbLQm2VbcO"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/5v3WMkjb8qzmVLREB2AuQR"
                    },
                    "href": "https://api.spotify.com/v1/albums/5v3WMkjb8qzmVLREB2AuQR",
                    "id": "5v3WMkjb8qzmVLREB2AuQR",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2735df4b79ea8baf27cf3da6492",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e025df4b79ea8baf27cf3da6492",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048515df4b79ea8baf27cf3da6492",
                            "width": 64
                        }
                    ],
                    "name": "The New Danger",
                    "release_date": "2004-10-12",
                    "release_date_precision": "day",
                    "total_tracks": 17,
                    "type": "album",
                    "uri": "spotify:album:5v3WMkjb8qzmVLREB2AuQR"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0Mz5XE0kb1GBnbLQm2VbcO"
                        },
                        "href": "https://api.spotify.com/v1/artists/0Mz5XE0kb1GBnbLQm2VbcO",
                        "id": "0Mz5XE0kb1GBnbLQm2VbcO",
                        "name": "Mos Def",
                        "type": "artist",
                        "uri": "spotify:artist:0Mz5XE0kb1GBnbLQm2VbcO"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 190106,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "USMC10400750"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/5LQY9vHNDIiKnFMogpJdPz"
                },
                "href": "https://api.spotify.com/v1/tracks/5LQY9vHNDIiKnFMogpJdPz",
                "id": "5LQY9vHNDIiKnFMogpJdPz",
                "is_local": false,
                "name": "Close Edge",
                "popularity": 41,
                "preview_url": null,
                "track": true,
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:5LQY9vHNDIiKnFMogpJdPz"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:44:13Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "single",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6aaMZ3fcfLv4tEbmY7bjRM"
                            },
                            "href": "https://api.spotify.com/v1/artists/6aaMZ3fcfLv4tEbmY7bjRM",
                            "id": "6aaMZ3fcfLv4tEbmY7bjRM",
                            "name": "Isaiah Rashad",
                            "type": "artist",
                            "uri": "spotify:artist:6aaMZ3fcfLv4tEbmY7bjRM"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/1zRXmMa2gKZ9C2giHrnj4D"
                    },
                    "href": "https://api.spotify.com/v1/albums/1zRXmMa2gKZ9C2giHrnj4D",
                    "id": "1zRXmMa2gKZ9C2giHrnj4D",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d770c3ede4ee9edf1394a10b",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02d770c3ede4ee9edf1394a10b",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851d770c3ede4ee9edf1394a10b",
                            "width": 64
                        }
                    ],
                    "name": "Nelly",
                    "release_date": "2015-09-30",
                    "release_date_precision": "day",
                    "total_tracks": 1,
                    "type": "album",
                    "uri": "spotify:album:1zRXmMa2gKZ9C2giHrnj4D"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6aaMZ3fcfLv4tEbmY7bjRM"
                        },
                        "href": "https://api.spotify.com/v1/artists/6aaMZ3fcfLv4tEbmY7bjRM",
                        "id": "6aaMZ3fcfLv4tEbmY7bjRM",
                        "name": "Isaiah Rashad",
                        "type": "artist",
                        "uri": "spotify:artist:6aaMZ3fcfLv4tEbmY7bjRM"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 200655,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "TCACI1590033"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/5VPFATm85G3P04Q5g8yxqr"
                },
                "href": "https://api.spotify.com/v1/tracks/5VPFATm85G3P04Q5g8yxqr",
                "id": "5VPFATm85G3P04Q5g8yxqr",
                "is_local": false,
                "name": "Nelly",
                "popularity": 47,
                "preview_url": "https://p.scdn.co/mp3-preview/c514a688f9d4a47476a83972107fb9bb621af584?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:5VPFATm85G3P04Q5g8yxqr"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:44:48Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4salDzkGmfycRqNUbyBphh"
                            },
                            "href": "https://api.spotify.com/v1/artists/4salDzkGmfycRqNUbyBphh",
                            "id": "4salDzkGmfycRqNUbyBphh",
                            "name": "Styx",
                            "type": "artist",
                            "uri": "spotify:artist:4salDzkGmfycRqNUbyBphh"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/294yFGYq9SBXWR4g6dK63D"
                    },
                    "href": "https://api.spotify.com/v1/albums/294yFGYq9SBXWR4g6dK63D",
                    "id": "294yFGYq9SBXWR4g6dK63D",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273f106d873a30a31efa73f4e74",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02f106d873a30a31efa73f4e74",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851f106d873a30a31efa73f4e74",
                            "width": 64
                        }
                    ],
                    "name": "Pieces Of Eight",
                    "release_date": "1978-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:294yFGYq9SBXWR4g6dK63D"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4salDzkGmfycRqNUbyBphh"
                        },
                        "href": "https://api.spotify.com/v1/artists/4salDzkGmfycRqNUbyBphh",
                        "id": "4salDzkGmfycRqNUbyBphh",
                        "name": "Styx",
                        "type": "artist",
                        "uri": "spotify:artist:4salDzkGmfycRqNUbyBphh"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 257226,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USAM17800365"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/1CQqupcyMg7176PPmIVmSj"
                },
                "href": "https://api.spotify.com/v1/tracks/1CQqupcyMg7176PPmIVmSj",
                "id": "1CQqupcyMg7176PPmIVmSj",
                "is_local": false,
                "name": "Renegade",
                "popularity": 70,
                "preview_url": null,
                "track": true,
                "track_number": 8,
                "type": "track",
                "uri": "spotify:track:1CQqupcyMg7176PPmIVmSj"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:45:30Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HPYUQ6GsPbZHvkyYe2jdm"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HPYUQ6GsPbZHvkyYe2jdm",
                            "id": "2HPYUQ6GsPbZHvkyYe2jdm",
                            "name": "Shawn James",
                            "type": "artist",
                            "uri": "spotify:artist:2HPYUQ6GsPbZHvkyYe2jdm"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/2xOSOv33mT55CRz3uhmmtg"
                    },
                    "href": "https://api.spotify.com/v1/albums/2xOSOv33mT55CRz3uhmmtg",
                    "id": "2xOSOv33mT55CRz3uhmmtg",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730a9fc81f86d6a77ac042a1a2",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e020a9fc81f86d6a77ac042a1a2",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048510a9fc81f86d6a77ac042a1a2",
                            "width": 64
                        }
                    ],
                    "name": "Shadows",
                    "release_date": "2012-08-19",
                    "release_date_precision": "day",
                    "total_tracks": 12,
                    "type": "album",
                    "uri": "spotify:album:2xOSOv33mT55CRz3uhmmtg"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HPYUQ6GsPbZHvkyYe2jdm"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HPYUQ6GsPbZHvkyYe2jdm",
                        "id": "2HPYUQ6GsPbZHvkyYe2jdm",
                        "name": "Shawn James",
                        "type": "artist",
                        "uri": "spotify:artist:2HPYUQ6GsPbZHvkyYe2jdm"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 220248,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USHM81263726"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6YowAxI2HIbhAwumOqpldE"
                },
                "href": "https://api.spotify.com/v1/tracks/6YowAxI2HIbhAwumOqpldE",
                "id": "6YowAxI2HIbhAwumOqpldE",
                "is_local": false,
                "name": "Through the Valley",
                "popularity": 59,
                "preview_url": "https://p.scdn.co/mp3-preview/9be899746792ec9c2c14b9ff0ca683e486fd79fb?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 6,
                "type": "track",
                "uri": "spotify:track:6YowAxI2HIbhAwumOqpldE"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T18:45:48Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/01QTIT5P1pFP3QnnFSdsJf"
                            },
                            "href": "https://api.spotify.com/v1/artists/01QTIT5P1pFP3QnnFSdsJf",
                            "id": "01QTIT5P1pFP3QnnFSdsJf",
                            "name": "Lupe Fiasco",
                            "type": "artist",
                            "uri": "spotify:artist:01QTIT5P1pFP3QnnFSdsJf"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/7F58zK8t8whSFjX5X09d28"
                    },
                    "href": "https://api.spotify.com/v1/albums/7F58zK8t8whSFjX5X09d28",
                    "id": "7F58zK8t8whSFjX5X09d28",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273cc5c6f9f9d6ca3353dbb6c75",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02cc5c6f9f9d6ca3353dbb6c75",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851cc5c6f9f9d6ca3353dbb6c75",
                            "width": 64
                        }
                    ],
                    "name": "Tetsuo & Youth",
                    "release_date": "2015-01-20",
                    "release_date_precision": "day",
                    "total_tracks": 16,
                    "type": "album",
                    "uri": "spotify:album:7F58zK8t8whSFjX5X09d28"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/01QTIT5P1pFP3QnnFSdsJf"
                        },
                        "href": "https://api.spotify.com/v1/artists/01QTIT5P1pFP3QnnFSdsJf",
                        "id": "01QTIT5P1pFP3QnnFSdsJf",
                        "name": "Lupe Fiasco",
                        "type": "artist",
                        "uri": "spotify:artist:01QTIT5P1pFP3QnnFSdsJf"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 528880,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "USAT21405241"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/2zWZV7b1xu1qZPaMjavvpS"
                },
                "href": "https://api.spotify.com/v1/tracks/2zWZV7b1xu1qZPaMjavvpS",
                "id": "2zWZV7b1xu1qZPaMjavvpS",
                "is_local": false,
                "name": "Mural",
                "popularity": 47,
                "preview_url": "https://p.scdn.co/mp3-preview/651029b9bc5be04ab20a0461ce67c2f89cac6f61?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:2zWZV7b1xu1qZPaMjavvpS"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T19:13:18Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4VmEWwd8y9MCLwexFMdpwt"
                            },
                            "href": "https://api.spotify.com/v1/artists/4VmEWwd8y9MCLwexFMdpwt",
                            "id": "4VmEWwd8y9MCLwexFMdpwt",
                            "name": "Method Man",
                            "type": "artist",
                            "uri": "spotify:artist:4VmEWwd8y9MCLwexFMdpwt"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0Y2ArrqJQ8WuUA5tetAkZi"
                    },
                    "href": "https://api.spotify.com/v1/albums/0Y2ArrqJQ8WuUA5tetAkZi",
                    "id": "0Y2ArrqJQ8WuUA5tetAkZi",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2733e6139ca94ae5e3d6c3c4818",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e023e6139ca94ae5e3d6c3c4818",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048513e6139ca94ae5e3d6c3c4818",
                            "width": 64
                        }
                    ],
                    "name": "4:21...The Day After",
                    "release_date": "2006-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 20,
                    "type": "album",
                    "uri": "spotify:album:0Y2ArrqJQ8WuUA5tetAkZi"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4VmEWwd8y9MCLwexFMdpwt"
                        },
                        "href": "https://api.spotify.com/v1/artists/4VmEWwd8y9MCLwexFMdpwt",
                        "id": "4VmEWwd8y9MCLwexFMdpwt",
                        "name": "Method Man",
                        "type": "artist",
                        "uri": "spotify:artist:4VmEWwd8y9MCLwexFMdpwt"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 253786,
                "episode": false,
                "explicit": true,
                "external_ids": {
                    "isrc": "USUM70607489"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/1JkrWCnQrSZpNRxpAMXzlW"
                },
                "href": "https://api.spotify.com/v1/tracks/1JkrWCnQrSZpNRxpAMXzlW",
                "id": "1JkrWCnQrSZpNRxpAMXzlW",
                "is_local": false,
                "name": "Got To Have It",
                "popularity": 56,
                "preview_url": null,
                "track": true,
                "track_number": 12,
                "type": "track",
                "uri": "spotify:track:1JkrWCnQrSZpNRxpAMXzlW"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T19:13:41Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6ZLTlhejhndI4Rh53vYhrY"
                            },
                            "href": "https://api.spotify.com/v1/artists/6ZLTlhejhndI4Rh53vYhrY",
                            "id": "6ZLTlhejhndI4Rh53vYhrY",
                            "name": "Ozzy Osbourne",
                            "type": "artist",
                            "uri": "spotify:artist:6ZLTlhejhndI4Rh53vYhrY"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6eh82ojicL8RSJF7GkYTh7"
                    },
                    "href": "https://api.spotify.com/v1/albums/6eh82ojicL8RSJF7GkYTh7",
                    "id": "6eh82ojicL8RSJF7GkYTh7",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c2b61984b54ad58c8d6fdd19",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02c2b61984b54ad58c8d6fdd19",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851c2b61984b54ad58c8d6fdd19",
                            "width": 64
                        }
                    ],
                    "name": "No More Tears (Expanded Edition)",
                    "release_date": "1991-09-17",
                    "release_date_precision": "day",
                    "total_tracks": 13,
                    "type": "album",
                    "uri": "spotify:album:6eh82ojicL8RSJF7GkYTh7"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6ZLTlhejhndI4Rh53vYhrY"
                        },
                        "href": "https://api.spotify.com/v1/artists/6ZLTlhejhndI4Rh53vYhrY",
                        "id": "6ZLTlhejhndI4Rh53vYhrY",
                        "name": "Ozzy Osbourne",
                        "type": "artist",
                        "uri": "spotify:artist:6ZLTlhejhndI4Rh53vYhrY"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 443240,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USSM19100025"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/7w6PJe5KBPyvuRYxFkPssC"
                },
                "href": "https://api.spotify.com/v1/tracks/7w6PJe5KBPyvuRYxFkPssC",
                "id": "7w6PJe5KBPyvuRYxFkPssC",
                "is_local": false,
                "name": "No More Tears",
                "popularity": 76,
                "preview_url": "https://p.scdn.co/mp3-preview/ae9f4164e51e875e0e46fd26d5a87387003f8c45?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 5,
                "type": "track",
                "uri": "spotify:track:7w6PJe5KBPyvuRYxFkPssC"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T19:14:01Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "single",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4FCzCS0KEgb0rgySWINItO"
                            },
                            "href": "https://api.spotify.com/v1/artists/4FCzCS0KEgb0rgySWINItO",
                            "id": "4FCzCS0KEgb0rgySWINItO",
                            "name": "CID",
                            "type": "artist",
                            "uri": "spotify:artist:4FCzCS0KEgb0rgySWINItO"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6TQj5BFPooTa08A7pk8AQ1"
                            },
                            "href": "https://api.spotify.com/v1/artists/6TQj5BFPooTa08A7pk8AQ1",
                            "id": "6TQj5BFPooTa08A7pk8AQ1",
                            "name": "Kaskade",
                            "type": "artist",
                            "uri": "spotify:artist:6TQj5BFPooTa08A7pk8AQ1"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/4Yo4vneja64fF2YT5iunOk"
                    },
                    "href": "https://api.spotify.com/v1/albums/4Yo4vneja64fF2YT5iunOk",
                    "id": "4Yo4vneja64fF2YT5iunOk",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731a8bc9b929c42c2ca2d3d9e5",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e021a8bc9b929c42c2ca2d3d9e5",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048511a8bc9b929c42c2ca2d3d9e5",
                            "width": 64
                        }
                    ],
                    "name": "Sweet Memories",
                    "release_date": "2016-08-26",
                    "release_date_precision": "day",
                    "total_tracks": 1,
                    "type": "album",
                    "uri": "spotify:album:4Yo4vneja64fF2YT5iunOk"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4FCzCS0KEgb0rgySWINItO"
                        },
                        "href": "https://api.spotify.com/v1/artists/4FCzCS0KEgb0rgySWINItO",
                        "id": "4FCzCS0KEgb0rgySWINItO",
                        "name": "CID",
                        "type": "artist",
                        "uri": "spotify:artist:4FCzCS0KEgb0rgySWINItO"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6TQj5BFPooTa08A7pk8AQ1"
                        },
                        "href": "https://api.spotify.com/v1/artists/6TQj5BFPooTa08A7pk8AQ1",
                        "id": "6TQj5BFPooTa08A7pk8AQ1",
                        "name": "Kaskade",
                        "type": "artist",
                        "uri": "spotify:artist:6TQj5BFPooTa08A7pk8AQ1"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 157451,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "USAT21602395"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6F3rgQfSns1slUnMfHXjOA"
                },
                "href": "https://api.spotify.com/v1/tracks/6F3rgQfSns1slUnMfHXjOA",
                "id": "6F3rgQfSns1slUnMfHXjOA",
                "is_local": false,
                "name": "Sweet Memories",
                "popularity": 49,
                "preview_url": "https://p.scdn.co/mp3-preview/433b9c3ec21ee852023be7bdfc47059900f60f5e?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:6F3rgQfSns1slUnMfHXjOA"
            },
            "video_thumbnail": {
                "url": null
            }
        },
        {
            "added_at": "2024-02-07T19:14:34Z",
            "added_by": {
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dbrkani"
                },
                "href": "https://api.spotify.com/v1/users/dbrkani",
                "id": "dbrkani",
                "type": "user",
                "uri": "spotify:user:dbrkani"
            },
            "is_local": false,
            "primary_color": null,
            "track": {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0o7WWONtleH6PWLn5GIoCM"
                            },
                            "href": "https://api.spotify.com/v1/artists/0o7WWONtleH6PWLn5GIoCM",
                            "id": "0o7WWONtleH6PWLn5GIoCM",
                            "name": "Every Time I Die",
                            "type": "artist",
                            "uri": "spotify:artist:0o7WWONtleH6PWLn5GIoCM"
                        }
                    ],
                     
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6bL6rFAbAPxrmvuRZx9tfz"
                    },
                    "href": "https://api.spotify.com/v1/albums/6bL6rFAbAPxrmvuRZx9tfz",
                    "id": "6bL6rFAbAPxrmvuRZx9tfz",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734c5337f4145d4ce99f93ac78",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e024c5337f4145d4ce99f93ac78",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048514c5337f4145d4ce99f93ac78",
                            "width": 64
                        }
                    ],
                    "name": "Gutter Phenomenon",
                    "release_date": "2006-06-13",
                    "release_date_precision": "day",
                    "total_tracks": 11,
                    "type": "album",
                    "uri": "spotify:album:6bL6rFAbAPxrmvuRZx9tfz"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0o7WWONtleH6PWLn5GIoCM"
                        },
                        "href": "https://api.spotify.com/v1/artists/0o7WWONtleH6PWLn5GIoCM",
                        "id": "0o7WWONtleH6PWLn5GIoCM",
                        "name": "Every Time I Die",
                        "type": "artist",
                        "uri": "spotify:artist:0o7WWONtleH6PWLn5GIoCM"
                    }
                ],
                 
                "disc_number": 1,
                "duration_ms": 172653,
                "episode": false,
                "explicit": false,
                "external_ids": {
                    "isrc": "US3H40505806"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/22EXrfNV0f9ZcWMpK2lF67"
                },
                "href": "https://api.spotify.com/v1/tracks/22EXrfNV0f9ZcWMpK2lF67",
                "id": "22EXrfNV0f9ZcWMpK2lF67",
                "is_local": false,
                "name": "The New Black",
                "popularity": 46,
                "preview_url": "https://p.scdn.co/mp3-preview/c7df1326035f94001658c820404faed81d574316?cid=46df5ea3533c4c49827372b93c96218e",
                "track": true,
                "track_number": 6,
                "type": "track",
                "uri": "spotify:track:22EXrfNV0f9ZcWMpK2lF67"
            },
            "video_thumbnail": {
                "url": null
            }
        }
    ],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 26
}


displayTracks(tracks);
console.log(tracks);