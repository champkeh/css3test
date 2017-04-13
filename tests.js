// Firefox test case: http://mxr.mozilla.org/mozilla-central/source/layout/style/test/property_database.js

window.Specs = {
    "css3-background": {
        "title": "Backgrounds and Borders 3",
        "properties": {
            "background-repeat":
              ["space", "round"]
              .concat(["repeat", "space", "round", "no-repeat"].times(2))
              .concat(["repeat", "space", "round", "no-repeat"].times(3, 3, ", ")),
            "background-image": "url(foo.png), url(bar.svg)",
            "background-attachment":
                                    ["local"]
                                    .concat(["scroll", "local", "fixed"].times(3, 3, ", ")),
            "background-position": ["bottom 10px right 20px", "bottom 10px right", "right 3em bottom 10px", "top right 10px"],
            "background-clip": ["border-box", "padding-box", "content-box"]
                                .concat(["border-box", "padding-box", "content-box"].times(3, 3, ", ")),
            "-webkit-background-clip": ["padding", "border"].concat(["padding", "border", "border-box", "padding-box", "content-box"].times(3, 3, ", ")),
            "background-origin": ["border-box", "padding-box", "content-box"].concat(["border-box", "padding-box", "content-box"].times(3, 3, ", ")),
            "background-size": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"]
                .concat(["auto", "cover", "contain", "50em 50%"].times(3, 3, ", ")),
            "background": [
                "none",
                "0",
                "0 0",
                "border-box",
                "padding-box",
                "content-box",
                "no-repeat",
                "space",
                "round",
                "10px / auto",
                "50% / cover",
                "50% / contain",
                "url(foo.png), url(bar.svg)",
                "bottom 10px right 20px",
                "top left / 50% 60%",
                "border-box padding-box",
                "url(foo.png) bottom right / cover padding-box content-box"
            ],
            "border-radius": ["10px", "50%", "10px / 20px", "2px 4px 8px 16px"],
            "border-image-source": ["none", "url(foo.png)"],
            "border-image-slice": ["10", "30%"].times(1, 4).concat(["fill 30%", "fill 10", "fill 2 4 8% 16%", "30% fill", "10 fill", "2 4 8% 16% fill"]),
            "border-image-width": ["10px", "5%", "28", "auto", "10px 10px", "5% 10px", "28 10px", "auto 10px", "10px 5%", "5% 5%", "28 5%", "auto 5%", "10px 28", "5% 28", "28 28", "auto 28", "10px auto", "5% auto", "28 auto", "auto auto", "10px 10% 10", "5% 10px 20 auto"],
            "border-image-outset": ["10px", "20", "10px 20", "10px 20px", "20 30", "2px 3px 4", "1 2px 3px 4"],
            // Chrome 支持 space，但实际效果和 repeat 一样，Safari 9.3 支持。
            "border-image-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
            "border-image": [
                "url(foo.png) 10", "url(foo.png) 10%", "url(foo.png) 10% fill",
                "url(foo.png) 10 round", "url(foo.png) 10 stretch repeat",
                "url(foo.png) 10 / 10px", "url(foo.png) 10 / 10% / 10px",
                "url(foo.png) fill 10 / 10% / 10px", "url(foo.png) fill 10 / 10% / 10px space"
            ],
            "box-decoration-break": ["slice", "clone"],
            "box-shadow": [
                "1px 1px", "0 0 black", "1px 2px 3px black", "1px 2px 3px 4px black",
                "inset 1px 1px", "1px 2px 3px 4px black inset",
                "1px 2px 3px #ccc, 1px 2px 3px 4px black inset"
            ]
        }
    },

    "css-backgrounds-4": {
        "title": "Backgrounds and Borders 4",
        "properties": {
            "background-repeat": ["extend"],
            "background-position-x": ["0", "center", "left", "right", "30em", "93%", "-163px", "0px, center", "86%, -92px, center", "left 13px", "right 13px", "right 13px, 50%", "x-start", "x-end"],
            "background-position-y": ["0", "center", "top", "bottom", "30em", "93%", "-163px", "0px, center", "86%, -92px, center", "top 13px", "bottom 13px", "bottom 13px, 50%","y-start", "y-end"],
            "background-position-inline": ["center", "28px", "21%", "start 16px", "end 16px"],
            "background-position-block": ["center", "28px", "21%", "start 16px", "end 16px"],
            "corner-shape": ["round", "bevel", "scoop", "notch", "round bevel", "round bevel scoop notch"],
            "corners": ["bevel 50%", "bevel 0.25em 0.25em 0 0 / 50% 50% 0 0"],
            "border-limit": ["all", "sides", "corners", "sides 50%", "left 4em", "corners 10px", "corners", "corners"],
            "border-clip": ["normal", "10px", "10px 30% 50px", "0 5px 2em 25px", "40px 20px 0 1fr repeat(20px 20px) 0 1fr 40px"]
        }
    },

    "css3-images": {
        "title": "Image Values and Replaced Content 3",
        "values": {
            "properties": [
                "background",
                "background-image",
                "list-style",
                "list-style-image",
                "border-image",
                "border-image-source",
                "mask-image",
                "mask-box-image",
                "mask-border-source",
                "cursor",
                "mask",
                "content",
                "shape-outside"
            ],
            "linear-gradient()": [
                "linear-gradient(white, black)",
                "linear-gradient(45deg, white, black)",
                "linear-gradient(0, white, black)",
                "linear-gradient(white 50%, black)",
                "linear-gradient(white 5px, black)",
                "linear-gradient(white 0, black)",
                "linear-gradient(white, #f06, black)",
                "linear-gradient(currentColor, black)",
                "linear-gradient(30grad, #000 35px, red, blue)",
                "linear-gradient(10deg, red, blue)",
                "linear-gradient(90deg, red, transparent, blue)",
                "linear-gradient(to right, white, black)",
                "linear-gradient(to top right, red, white, blue)",
                "linear-gradient(to bottom right, red, white, blue)",
                "linear-gradient(to left top, red, white, blue)",
                "linear-gradient(to left bottom, red, white, blue)",
                "linear-gradient(to bottom, yellow 0%, blue 100%)",
                "linear-gradient(red -50%, white 25%, blue 100%)",
                "linear-gradient(calc(10deg), red, blue)",
                "linear-gradient(red calc(50% - 30px), white 25%, blue 100%)",
                "linear-gradient(red -50px, white calc(-25px + 50%), blue 100%)",
                // CSS image 4 color interpolation hint(aka Midpoints)
                // Webkit: https://bugs.webkit.org/show_bug.cgi?id=137171
                // Chrome: https://crbug.com/420527
                // Firefox:https://bugzilla.mozilla.org/show_bug.cgi?id=1074056
                // Edge: https://msdn.microsoft.com/en-us/library/jj152126(v=vs.85).aspx#Remarks
                "linear-gradient(red, green 35%, 15%, blue)",
                "linear-gradient(218rad, red 50%, 50%, blue 50%)",
                "linear-gradient(red, 50%, blue)",
                "linear-gradient(.36rad, red 50%, 20%, blue 50%)",
                "linear-gradient(to right bottom, red, 20%, green 50%, 65%, blue)",
                "linear-gradient(yellow, calc(50% - 60px), green)",

                // Multiple Color-Stop Positions
                // https://bugs.chromium.org/p/chromium/issues/detail?id=707047
                "linear-gradient(black 10% 20%, white)",
                "linear-gradient(95deg, black, white 100px 200px)",
                "linear-gradient(to right, black 10% 20%, 10%, white 200px)"
            ],
            "radial-gradient()": [
                "radial-gradient(white, black)",
                "radial-gradient(circle, white, black)",
                "radial-gradient(ellipse, white, black)",
                "radial-gradient(closest-corner, white, black)",
                "radial-gradient(circle closest-corner, white, black)",
                "radial-gradient(farthest-side, white, black)",
                "radial-gradient(circle farthest-side, white, black)",
                "radial-gradient(90px, white, black)",
                "radial-gradient(60% 0, white, black)",
                "radial-gradient(0% 60%, white, black)",
                "radial-gradient(80px 60%, yellow, blue)",
                "radial-gradient(20px 30px at 20px 30px, yellow, green)",
                "radial-gradient(closest-side at 20px 30px, yellow, green)",
                "radial-gradient(closest-side circle at 20px 30px, yellow, green)",
                "radial-gradient(80px at 60% bottom, yellow, blue)",
                "radial-gradient(80px circle at 60% bottom, yellow, blue)",
                "radial-gradient(10em circle at left 60%, yellow, blue)",
                "radial-gradient(circle 10em at left 60%, yellow, blue)",
                "radial-gradient(circle at 60%, yellow, blue)",
                "radial-gradient(circle at 20% 60%, yellow, blue)",
                "radial-gradient(circle at left 60%, yellow, blue)",
                "radial-gradient(calc(0px), white, black)",
                "radial-gradient(calc(30px), white, black)",
                "radial-gradient(50% calc(50% - 10%), white calc(-25px + 50%), black)",
                "radial-gradient(at 50% calc(50% - 30px), white calc(-25px + 50%), black)",

                // CSS edge offsets <position>
                "radial-gradient(50% 50% at left 20px bottom 30px , yellow, green)",
                "radial-gradient(50% 50% at right 10px bottom, yellow, green)",
                "radial-gradient(50% 50% at right 10px bottom 10px, yellow, green)",
                "radial-gradient(50% 50% at bottom right 10px , yellow, green)",
                "radial-gradient(circle at bottom right 10px , yellow, green)",
                "radial-gradient(ellipse at bottom right 10px , yellow, green)",

                // Multiple Color-Stop Positions
                // https://bugs.chromium.org/p/chromium/issues/detail?id=707047
                "radial-gradient(black 10% 20%, white)",
                "radial-gradient(50% 20%, black, white 100px 200px)",
                "radial-gradient(circle, black 10% 20%, 10%, white 200px)"
            ],
            "repeating-linear-gradient()": [
                "repeating-linear-gradient(white, black)",
                "repeating-linear-gradient(white, red 0 10%, blue 0 300px, black)"
                ],
            "repeating-radial-gradient()": [
                "repeating-radial-gradient(white, black)",
                "repeating-radial-gradient(white, red 0 10%, blue 0 300px, black)"
              ],
            "image-set()": [
                "image-set('foo.png' 1x, 'foo-2x.png' 2x);",
                "image-set('foo.png' 1x, 'foo-2x.png' 2x #ccc);",
                "image-set('foo.png' 1x, 'foo-2x.png' 2x, 'foo-print.png' 600dpi );"
            ],
            "-webkit-image-set()": [
                "image-set(url(foo.png) 1x, url(foo-2x.png) 2x)",
                "image-set(url(foo.png) 1x, url(foo-2x.png) 2x, url(foo-3x.png) 3x)",
                "image-set(url(foo.png) 1.5x)",
                "image-set(url(foo.png) 600dpi)"
            ],

            // 新语法：cross-fade() = cross-fade( [ <percentage>? && <image> ] [, <image> | <color> ]? )
            "cross-fade()": [
                "cross-fade(20% url(foo.png), url(bar.png))",
                "cross-fade(100% url(foo.png), url(bar.png))",
                "cross-fade(0.2 url(foo.png), url(bar.png))",
                "cross-fade(-0.2 url(foo.png), url(bar.png))",
                "cross-fade(20% url(foo.png), #000)",
                "cross-fade(100% url(foo.png), rgba(89, 22, 13, 0.6))"
            ],

            //http://trac.webkit.org/changeset/100535
            // Demo: http://peter.sh/files/examples/cross-fading.html
            "-webkit-cross-fade()": [
                "cross-fade(url(foo.png), url(bar.png), 20%)",
                "cross-fade(url(foo.png), url(bar.png), 100%)",
                "cross-fade(url(foo.png), url(bar.png), 0.2)",
                "cross-fade(url(foo.png), url(bar.png), -0.2)",
                "cross-fade(20% url(foo.png), #000)",
                "cross-fade(100% url(foo.png), rgba(89, 22, 13, 0.6))"
            ]
        },
        "properties": {
            "object-fit": ["fill", "contain", "cover", "none", "scale-down"],
            "object-position": ["50% 50%", "center", "top right", "bottom 10px right 20px"],
            "image-resolution": ["from-image", "from-image snap", "snap from-image", "1dppx", "1dpcm", "300dpi", "from-image 300dpi", "300dpi from-image", "300dpi from-image snap"],
            "image-orientation": ["0deg", "90deg", "45deg", "1turn", "100grad", "2rad"],
            "image-rendering": ["auto", "crisp-edges", "pixelated", "optimizeQuality", "optimizeSpeed", "optimize-contrast"],
            "-ms-interpolation-mode": ["nearest-neighbor", "bicubic"]
        }
    },

    "css4-images": {
        "title": "Image Values and Replaced Content 4",
        "values": {
            "properties": [
                "background",
                "background-image",
                "list-style",
                "list-style-image",
                "border-image",
                "border-image-source",
                "cursor",
                "mask",
                "content",
                "mask-image",
                "mask-box-image",
                "mask-border-source",
                "shape-outside"
            ],

            "image()": [
                "image('sprites.png#xywh=10,30,60,20')",
                "image('wavy.svg', 'wavy.png' , 'wavy.gif')",
                "image('dark.png', black)", "image(green)",
                "image(rgba(0,0,255,.5)), url('bg-image.png')"
            ],

            "element()": [
                "element(#foo)"
            ],

            "conic-gradient()": [
                "conic-gradient(#f06, gold)",
                "conic-gradient(at 50% 50%, #f06, gold)",
                "conic-gradient(from 0deg, #f06, gold)",
                "conic-gradient(from 0deg at center, #f06, gold)",
                "conic-gradient(from 45deg at left bottom, yellow, green)",
                "conic-gradient(from 45deg at 50px -10px, yellow, green)",
                "conic-gradient(#f06 0%, gold 100%)",
                "conic-gradient(#f06 0deg, gold 1turn)",
                "conic-gradient(#eee .1turn, black, #eee 326deg)",
                "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",
                "conic-gradient(black 25%, white 0deg, white 50%, black 0deg, black 75%, white 0deg)",
                "conic-gradient(black 25%, white 0deg 50%, black 0deg 75%, white 0deg)",

                "conic-gradient(green calc(360deg), transparent 0 100%)",
                "conic-gradient(green 0 calc(360deg), red 0 100%)",
                "conic-gradient(green 360deg, red 0 calc(100%))",
                "conic-gradient(green 360deg, red calc(0deg) calc(100%))",
                "conic-gradient(green 360deg, red calc(0%) 100%)",
                "conic-gradient(at calc(0%) 50%, #f06, gold)",
                "conic-gradient(at calc(50%) 50%, #f06, gold)",
                "conic-gradient(from calc(0deg) at center, #f06, gold)",
                "conic-gradient(from calc(50deg) at center, #f06, gold)",
                "conic-gradient(from 45deg at calc(50px) calc(-10px), yellow, green)",
                "conic-gradient(from 45deg at calc(50%) calc(100% - 10px), yellow, green)",

                // 插值
                "conic-gradient(#f06, 20%, gold)",
                "conic-gradient(#f06, 20%, gold, 30deg, green)",
                "conic-gradient(#f06, 20deg, gold)",
                "conic-gradient(#f06, 20deg, gold, 60deg, green)",
                "conic-gradient(#f06, calc(20deg), gold)",
                "conic-gradient(#f06, calc(20%), gold)",
                "conic-gradient(#f06, calc(20% + 15deg), gold)",
                "conic-gradient(#f06, calc(20%), gold, calc(60%), green)",


                // Multiple Color-Stop Positions
                // https://bugs.chromium.org/p/chromium/issues/detail?id=707047
                "conic-gradient(black 10% 20%, white)",
                "conic-gradient(black, white 270deg 360deg)",
                "conic-gradient(black 10% 20%, white 270deg 360deg)",
                "conic-gradient(blue 10% 20%, blue 30%, white)",
                "conic-gradient(blue 10% 20%, blue 30% 40%, white)",
                "conic-gradient(blue 10%, blue 20%, #fff 270deg, #fff 360deg)",
                "conic-gradient(blue 10% 20%, white 270deg 360deg)",
                "conic-gradient(blue 10% 20%, blue 30%, white)",
                "conic-gradient(black, white calc(270deg) calc(360deg))",
                "conic-gradient(blue calc(10%) calc(20%), blue 30%, white)",
                "conic-gradient(blue calc(10%) calc(45deg), blue 30%, white)",
                "conic-gradient(blue calc(10%) calc(45deg), blue calc(30%) calc(160deg), white)",

                // CSS edge offsets <position>
                "conic-gradient(at left 50px bottom 30% , yellow, green)",
                "conic-gradient(at right 30% bottom, yellow, green)",
                "conic-gradient(from 0deg at right 60px bottom -100%, yellow, green)",
                "conic-gradient(from 0 at right 60px bottom -100%, yellow, green)",
                "conic-gradient(from -45deg at bottom right 10px , yellow, green)",
                "conic-gradient(at right calc(30% - 20px) bottom, yellow, green)",
                "conic-gradient(from calc(-45deg) at bottom right 10px , yellow, green)"
            ],
            "repeating-conic-gradient()": [
                "repeating-conic-gradient(white, black)",
                "repeating-conic-gradient(gold, #f06 20deg)",
                "repeating-conic-gradient(black 0deg, black 25%, white 0deg, white 50%)",
                "repeating-conic-gradient(black, black 15deg, white 0deg, white 30deg)",
                "repeating-conic-gradient(hsla(0,0%,100%,.2) 0deg, hsla(0,0%,100%,.2) 15deg, transparent 0deg, transparent 30deg)",

                "repeating-conic-gradient(black 0deg 25%, white 0deg 50%)",
                "repeating-conic-gradient(black 0deg 15deg, white 0deg 30deg)",
                "repeating-conic-gradient(hsla(0,0%,100%,.2) 0deg 15deg, transparent 0deg 30deg)"
              ]
        }
    },

    "css3-selectors": {
        "title": "Selectors 3",
        "selectors": {
            "Sibling combinator": "foo ~ bar",
            "::before": "::before",
            "::after": "::after",
            "::first-letter": "::first-letter",
            "::first-line": "::first-line",
            "[att^=val]": ["[att^=val]", "[att^=\"val\"]"],
            "[att*=val]": ["[att*=val]", "[att*=\"val\"]"],
            "[att$=val]": ["[att$=val]", "[att$=\"val\"]"],
            "[att|=en]":  ["[att|=en]", "[att|=\"en\"]"],
            "Namespaces": ["*|html", "[*|attr]", "[*|attr=val]", "*|html[*|attr]", "foo|h1", "foo|*", "|h1", "*|h1"],
            ":target": [":target", ":target::before"],
            ":dir()": [":dir(rtl)", ":dir(ltr)", ":dir(ltr)::before"],
            ":lang()": [":lang(fr-be)", ":lang(fr-be)::before"],
            ":enabled": [":enabled", ":enabled::before"],
            ":disabled": [":disabled", ":disabled::before"],
            ":checked": [":checked", ":checked::before"],
            ":indeterminate": [":indeterminate", ":indeterminate::before"],
            ":root": [":root", ":root::before"],
            ":nth-child": [
                ":nth-child(even)", ":nth-child(odd)",
                ":nth-child(n)", ":nth-child(-n)", ":nth-child(0n)",
                ":nth-child(1)", ":nth-child(-1)", ":nth-child(0)",
                ":nth-child(n+1)", ":nth-child(3n+1)", ":nth-child(3n + 1)",
                ":nth-child(-n+1)", ":nth-child(-n-1)", ":nth-child(3n-1)",
                ":nth-child(n+6):nth-child(-n+4)", ":nth-child(-n+5):nth-child(n+2)"
            ],
            ":nth-last-child": [
                ":nth-last-child(even)", ":nth-last-child(odd)",
                ":nth-last-child(n)", ":nth-last-child(-n)", ":nth-last-child(0n)",
                ":nth-last-child(1)", ":nth-last-child(-1)", ":nth-last-child(0)",
                ":nth-last-child(n+1)", ":nth-last-child(3n+1)", ":nth-last-child(3n + 1)",
                ":nth-last-child(-n+1)", ":nth-last-child(-n-1)", ":nth-last-child(3n-1)"
            ],
            ":nth-of-type": [
                ":nth-of-type(even)", ":nth-of-type(odd)",
                ":nth-of-type(n)", ":nth-of-type(-n)", ":nth-of-type(0n)",
                ":nth-of-type(1)", ":nth-of-type(-1)", ":nth-of-type(0)",
                ":nth-of-type(n+1)", ":nth-of-type(3n+1)", ":nth-of-type(3n + 1)",
                ":nth-of-type(-n+1)", ":nth-of-type(-n-1)", ":nth-of-type(3n-1)"
            ],
            ":nth-last-of-type": [
                ":nth-last-of-type(even)", ":nth-last-of-type(odd)",
                ":nth-last-of-type(n)", ":nth-last-of-type(-n)", ":nth-last-of-type(0n)",
                ":nth-last-of-type(1)", ":nth-last-of-type(-1)", ":nth-last-of-type(0)",
                ":nth-last-of-type(n+1)", ":nth-last-of-type(3n+1)", ":nth-last-of-type(3n + 1)",
                ":nth-last-of-type(-n+1)", ":nth-last-of-type(-n-1)", ":nth-last-of-type(3n-1)"
            ],
            ":last-child": ":last-child",
            ":only-child": ":only-child",
            ":first-of-type": ":first-of-type",
            ":last-of-type": ":last-of-type",
            ":only-of-type": ":only-of-type",
            ":empty": [":empty", ":empty::before"],
            ":not()": [":not(*)", "*:not(FOO)", ":not(element)", "html|*:not(:link):not(:visited)", ":not(.class):not(#id):not([attr]):not(:link)", "h2:not(:first-of-type):not(:last-of-type)"
                ],
            ":blank": [":blank", ":blank::before"] //:-moz-whitespace-only
        }
    },

    "selectors4": {
        "title": "Selectors 4",
        "selectors": {
            ">>": ">>",
            "Column combinator": "col.selected || td",
            // Case-sensitivity selector
            // Safari 9, Opera 36, Chrome 49 support: https://crbug.com/567732
            "[i]": ["[frame=hsides i]", "[foo=bar I]"],
            ":current": ":current",
            ":current()": [":current(p, li, dt, dd)"],
            ":past": ":past",
            ":future": ":future",
            ":matches()": ["*|*:matches(:hover, :focus)", "*|*:matches(*:hover, *:focus)", ".foo :matches(h1, h2, h3, h4, h5, h6)", ":matches(section, nav) h1", ":matches(section, nav) ~ :matches(h1, h2)", ":matches(:hover, :focus)", ":matches(h1 + h2, h3 > h4)", ":matches(.foo :matches(h1, h2))", ":matches(:matches(h1, h2), h3)", ":matches(:not(.foo, .bar))",
              ":matches(::before)", ":matches(::after)", ":matches(::after, ::before)"
            ],
            ":any()": [".foo :any(h1, h2, h3, h4, h5, h6)", ":any(section, nav) h1", ":any(section, nav) ~ :any(h1, h2)", ":any(:hover, :focus)",
                ":any(::before)", ":any(::after)", ":any(::after, ::before)"
            ],
            ":not()": [":not(element, .class, #id)", ":not(element, .class, #id):not(.foo, .bar)","h2:not(:first-of-type, :last-of-type)", ":not(:matches(h1, h2))", ":not(:matches(h1, h2), h3)", ":not(:matches(:not(h1, h2)))", ":not(:not(.foo), .bar)", ":not(:not(:not(.foo)), .bar)", "img:not(.foo[alt][src])",
                // 模拟 :nth-child(n of S)
                ".foo:not(.foo ~ .foo)"
            ],
            ":has()": ["a:has(> img)","dt:has(+ dt)","section:not(:has(h1, h2, h3, h4, h5, h6))"],
            ":focus-within": ":focus-within",
            ":drop": ":drop",
            ":drop()": [":drop(active)", ":drop(valid active invalid)"],
            ":any-link": ":any-link",
            ":nth-column": ":future",
            ":nth-column": [
                ":nth-column(even)", ":nth-column(odd)",
                ":nth-column(n)", ":nth-column(-n)", ":nth-column(0n)",
                ":nth-column(1)", ":nth-column(-1)", ":nth-column(0)",
                ":nth-column(n+1)", ":nth-column(3n+1)", ":nth-column(3n + 1)",
                ":nth-column(-n+1)", ":nth-column(-n-1)", ":nth-column(3n-1)"
            ],
            ":nth-last-column": [
                ":nth-last-column(even)", ":nth-last-column(odd)",
                ":nth-last-column(n)", ":nth-last-column(-n)", ":nth-last-column(0n)",
                ":nth-last-column(1)", ":nth-last-column(-1)", ":nth-last-column(0)",
                ":nth-last-column(n+1)", ":nth-last-column(3n+1)", ":nth-last-column(3n + 1)",
                ":nth-last-column(-n+1)", ":nth-last-column(-n-1)", ":nth-last-column(3n-1)"
            ],

            ":future": ":future",
            // nth of
            // https://bugzilla.mozilla.org/show_bug.cgi?id=854148
            ":nth-child(An+B [of s]?)": [":nth-child(-n+3 of li.important)", ":nth-child(even of :not([hidden]))", "tr:nth-child(even of tr:nth-child(odd))", ":nth-child(1 of li.foo)", "li:nth-child(1 of .foo)"],
            ":nth-last-child(An+B [of s]?)": [":nth-last-child(-n+3 of li.important)", ":nth-last-child(even of :not([hidden]))", ":nth-last-child(1 of .foo)"],
            ":lang()": [":lang(en, de-DE)", ":lang('*-Hant')", ":lang('*-Hant-CN')", ":lang(zh, '*-hant')", ":lang(en-)", ":lang(en--)"],
            //https://bugs.webkit.org/show_bug.cgi?id=118162
            //https://bugzilla.mozilla.org/show_bug.cgi?id=1069012
            //http://caniuse.com/#feat=css-placeholder
            ":placeholder-shown": ":placeholder-shown",

            //  Input Pseudo-classes
            ":user-error": ":user-error", //:-moz-ui-valid
            ":-moz-ui-valid":":-moz-ui-valid",

            // Transfer from CSS UI 3
            ":indeterminate": ":indeterminate",
            ":default": ":default",
            ":valid": ":valid",
            ":invalid": ":invalid",
            ":in-range": ":in-range",
            ":out-of-range": ":out-of-range",
            ":required": ":required",
            ":optional": ":optional",
            ":read-only": ":read-only",
            ":read-write": ":read-write",
            "::value": "::value", // 已删除 dropped
            "::choices": "::choices", // 已删除 dropped
            "::repeat-item": "::repeat-item",
            "::repeat-index": "::repeat-index"
        }
    },

    "css-scoping": {
        "title": "CSS Scoping Module Level 1",
        "selectors": {
            ":scope": ":scope",
            ":scope-context()": [":scope-context(.foo)", ":scope-context(div) h2"],
            ":unresolved": ":unresolved",
            ":host": ":host",
            ":host()": ":host(.foo)",
            ":host-context()": ":host-context(.foo)",
            "::shadow": "::shadow",
            // Renamed ::content to ::slotted.
            // https://drafts.csswg.org/css-scoping/#changes
            // https://codereview.chromium.org/1523843004/
            // "::content": "::content",
            "::slotted": "::slotted",
            "::slotted()": ["::slotted(.foo)", "::slotted(*)"],
            "::region": "#region-1::region p",
            /*
            For those who are following this issue about /deep/ and '>>>' combinator,
            here are the status as of now:

            - /deep/ is for Shadow DOM v0 and still available in Chrome, but deprecated.
            - '>>>' is implemented for querySelector (not for CSS) behind the flag
              (chrome://flags/#enable-experimental-web-platform-features) on M56+.
              Only works for V1 open shadows.
            - https://github.com/w3c/webcomponents/issues/78 is the active thread to
              discuss this in the spec.
              Apple recently proposed an idea of new API
              (collectMatchingElementsInFlatTree).
            */
            // https://bugs.chromium.org/p/chromium/issues/detail?id=633007#c37
            ">>>": ["x-foo >>> span", ">>> .foo", ">>> #bar"],
            // Rename "/deep" to ">>>"
            // https://code.google.com/p/chromium/issues/detail?id=446051
            "/deep/": ["/deep/ .foo", "x-foo /deep/ span", ":host(#host1) /deep/ #content1::content > .content"]
        },
        "@rules": {
            "@scope": [
                "@scope div",
                "@scope .foo"
            ]
        }
    },

    /*
     * Note: the following media queries must be true in supporting UAs!
     */
    "css3-mediaqueries": {
        "title": "Media Queries",
        "Media queries": {
            "not": ["not print", "not all and (width:1px)", "not grid and (width:1px)", "not (max-width: 50px)", "all and not (monochrome)", "not ((any-pointer:none) or (any-pointer:on-demand))"],
            "only": ["only print", "only print and (color)", "only screen and (color)", "only speech and (width:1px)", "only grid and (width:1px)", "only (max-width: 50px)", "all and only (monochrome)", "only ((any-pointer:none) or (any-pointer:on-demand))"],
            "width": [
                      "(width)",
                      "(min-width: 0)",
                      "(min-width: 1px)",
                      "(min-width: .832px)",
                      "(min-width: 26.28em)",
                      "(min-width: 26.28rem)",
                      "(min-width: 13.85vw)",
                      "(min-width: 13.85vh)",
                      "(min-width: 6.001in)",
                      "(min-width: 93ch)",
                      "(max-width: 0)",
                      "(max-width: 10895px)",
                      "(max-width: 7686.832px)",
                      "(max-width: 1626.28em)",
                      "(max-width: 1626.28rem)",
                      "(max-width: 152.85vw)",
                      "(max-width: 1562.85vh)",
                      "(max-width: 6987.001in)",
                      "(max-width: 9312ch)",
                      ],
            "height": [
                      "(height)",
                      "(min-height: 0)",
                      "(min-height: 1px)",
                      "(min-height: .832px)",
                      "(min-height: 26.28em)",
                      "(min-height: 26.28rem)",
                      "(min-height: 13.85vw)",
                      "(min-height: 13.85vh)",
                      "(min-height: 6.001in)",
                      "(min-height: 93ch)",
                      "(max-height: 0)",
                      "(max-height: 10895px)",
                      "(max-height: 7686.832px)",
                      "(max-height: 1626.28em)",
                      "(max-height: 1626.28rem)",
                      "(max-height: 152.85vw)",
                      "(max-height: 1562.85vh)",
                      "(max-height: 6987.001in)",
                      "(max-height: 9312ch)",
                      ],
            "device-width": ["(device-width)", "(min-device-width:1px)", "(max-device-width:1000000px)"],
            "device-height": ["(device-height)", "(min-device-height:1px)", "(max-device-height:1000000px)"],
            "orientation": "(orientation:portrait), (orientation:landscape)",
            "aspect-ratio": [
                "(aspect-ratio)",
                "(min-aspect-ratio:1/1000000)",
                "(min-aspect-ratio:1 / 1000000)",
                "(max-aspect-ratio:1000000/1)",
            ],
            "device-aspect-ratio": [
                "(device-aspect-ratio)",
                "(device-aspect-ratio: 16/9)",
                "(device-aspect-ratio: 1280/720)",
                "(min-device-aspect-ratio:1/1000000)",
                "(min-device-aspect-ratio:1 / 1000000)",
                "(max-device-aspect-ratio:3/2)",
            ],
            "color": [
                "(color)", "(min-color: 0)", "(max-color: 100)"
            ],
            "color-index": [
                "all, (color-index)",
                "(min-color-index: 0)",
                "(max-color-index: 10000000)"
            ],
            "monochrome": [
                "all, (monochrome)", "(min-monochrome: 0)", "(max-monochrome: 10000)"
            ],
            "resolution": [
                "(resolution)",
                "(min-resolution: 1dpi)",
                "(max-resolution: 1.5dppx)",
                "(max-resolution: 1000000dpi)",
                "(max-resolution: 1000000dpcm)"
            ],
            "scan": ["not tv, (scan: progressive)", "not tv, (scan: interlace)"],
            "grid": ["all, (grid)", "(grid: 0), (grid: 1)", "(grid: -0)"]
        }
    },

    "mediaqueries-4": {
        "title": "Media Queries 4",
        "Media queries": {
            "width": ["(width >= 500px)", "(width <= 1200px)", "(500px <= width <= 1200px)"],
            "height": ["(height >= 500px)", "(height <= 1200px)", "(500px <= height <= 1200px)"],
            "hover": ["(hover)", "(hover: on-demand)", "(hover: none)"],
            "any-hover": ["(any-hover)", "(any-hover: hover)", "(any-hover: on-demand)", "(any-hover: none)"],
            "pointer": ["(pointer: none)", "(pointer: coarse)", "(pointer: fine)"],
            "any-pointer": ["(any-pointer)", "(any-pointer: none)", "(any-pointer: coarse)", "(any-pointer: fine)", "not (any-pointer: fine)"],
            "light-level": ["(light-level: dim)", "(light-level: normal)", "(light-level: washed)"],
            "scripting": ["(scripting: none)", "(scripting: initial-only)", "(scripting: enabled)"],
            "update": ["(update: none)", "(update: slow)", "(update: fast)"],
            "overflow-block": ["(overflow-block: none)", "(overflow-block: scroll)", "(overflow-block: optional-paged)", "(overflow-block: paged)"],
            "overflow-inline": ["(overflow-inline: none)", "(overflow-inline: scroll)"],
            "inverted-colors": ["(inverted-colors)", "(inverted-colors: none)", "(inverted-colors: inverted)"],
            "color-gamut": ["(color-gamut)", "(color-gamut: srgb)", "(color-gamut: p3)", "(color-gamut: rec2020)"]
        }
    },


    // Changes http://www.w3.org/TR/css-ui-3/#changes
    "css3-ui": {
        "title": "Basic User Interface",
        "properties": {
            //Dropped "icon": ["auto", "url(foo.png)", "url(foo.png), url(foo.gif)"],
            // Dropped padding-box
            "box-sizing": ["border-box", "content-box"],
            "outline": ["auto"], // https://bugzilla.mozilla.org/show_bug.cgi?id=1031662
            "outline-offset": ["-5px", "0", "5px"],
            "resize": ["none", "both", "horizontal", "vertical"],
            "text-overflow": ["clip", "ellipsis", "'foo'"].times(1, 2),
            "cursor": [
                "url(foo.png) 2 2, auto", "url(example.svg#linkcursor), url(hyper.cur), url(hyper.png) 2 3, pointer", "default", "none", "context-menu", "cell", "vertical-text", "alias", "copy", "no-drop", "not-allowed",
                "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "all-scroll", "zoom-in", "zoom-out"
            ],
            "caret-color": ["auto", "#00aacc", "rgba(65, 20, 109, .6)", "transparent", "currentColor"], // New
            "nav-index": ["auto", "1", "10"],
            "nav-up": ["auto", "#foo", "#foo current", "#foo root"],
            "nav-right": ["auto", "#foo", "#foo current", "#foo root"],
            "nav-down": ["auto", "#foo", "#foo current", "#foo root"],
            "nav-left": ["auto", "#foo", "#foo current", "#foo root"],
            "ime-mode": ["auto", "normal", "active", "inactive", "disabled"]
        },
        // Move to Selectors Level 4
        "selectors": {
            //"::value": "::value", // 已删除 dropped
            //"::choices": "::choices", // 已删除 dropped
        }
    },

    "css-ui-4": {
        "title": "Basic User Interface Level 4",
        "properties": {
            "user-select": ["auto", "text", "none", "all", "contain"],
            "appearance": ["auto", "none"]
        }
    },

    "css3-transitions": {
        "title": "Transitions",
        "properties": {
            "transition-property": ["none", "all", "width", "width, height", "foo", "_foo", "--foo", "foo-bar", "width, foo, bar"],
            "transition-duration": ["0s", "1s", "100ms"],
            "transition-timing-function": [
                "ease", "linear", "ease-in", "ease-out", "ease-in-out",
                "cubic-bezier(.5, .5, .5, .5)",
                "cubic-bezier(.5, 1.5, .5, -2.5)",
                "step-start", "step-end", "steps(3, start)", "steps(5, end)"
            ],
            "transition-delay": ["1s", "-1s"],
            "transition": [
                "0",
                "none",
                "all",
                "1s 2s width linear",
                "foo 2s",
                "_foo 2s linear",
                "--foo 2s",
                "foo-bar 2s linear",
                "width 1s, foo 2s, bar 3s",
                "width 1s 0.5s linear, foo 2s 0.5s linear, bar 3s 0.5s linear",
            ]
        }
    },

    "css3-animations": {
        "title": "Animations",
        "properties": {
            "animation-name": ["foo", "foo, bar"],
            "animation-duration": ["0s", "1s", "100ms"],
            "animation-timing-function": [
                "ease", "linear", "ease-in", "ease-out", "ease-in-out",
                "cubic-bezier(.5, .5, .5, .5)",
                "cubic-bezier(.5, 1.5, .5, -2.5)",
                "step-start", "step-end", "steps(3, start)", "steps(5, end)"
            ],
            "animation-iteration-count": ["infinite", "8", "4.35"],
            "animation-direction": ["normal", "alternate", "reverse", "alternate-reverse"],
            "animation-play-state": ["running", "paused"],
            "animation-delay": ["1s", "-1s"],
            "animation-fill-mode": ["none", "forwards", "backwards", "both"],
            "animation": [
                "foo 200ms ease .8s infinite alternate both",
                "foo .8s infinite both, bar 3s infinite both",
                "foo 200ms ease .8s infinite alternate both paused",
                "0"
            ],
            /*
              Name: animation-trigger
              Value: auto | scroll(<snap point> [, <snap point>]+)
              Initial: auto
              Inherited: no
              Animatable: no

              See also: https://lists.w3.org/Archives/Public/www-style/2014Sep/0135.html
              Webkit Trac: http://trac.webkit.org/changeset/181655
            */
            "animation-trigger": ["auto", "container-scroll(0)", "container-scroll(23px)", "container-scroll(9.5em)", "container-scroll(23px, 56px)"]
        },
        "@rules": {
            "@keyframes": "@keyframes foo"
        }
    },

    "css3-transforms": {
        "title": "Transforms",
        "properties": {
            "transform": [
                "none",
                "translate(5px)", "translate(5px, 10px)", "translateY(5px)", "translateX(5px)", "translateY(5%)", "translateX(5%)",
                "scale(2)", "scale(2, -1)", "scaleX(2)", "scaleY(2.5)",
                "rotate(45deg)", "rotate(0)",
                "rotate3d(1, 2, 3, 0)",
                "rotate3d(1, 1, 1, 45deg)",
                "rotateX(-45deg)",
                "rotateX(0)",
                "rotateY(-45deg)",
                "rotateY(0)",
                "rotateZ(-45deg)",
                "rotateZ(0)",
                "skew(45deg)", "skew(0)", "skew(45deg, 15deg)", "skew(0, 0)", "skewX(45deg)", "skewX(0)", "skewY(45deg)", "skewY(0)",
                "matrix(1,-.2,0,1,0,0)", "matrix(1,-.2,0,1,10,10)",
                "translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)",
                "translate3d(0, 0, 5px)", "translateZ(5px)",
                "scale3d(1, 0, -1)", "scaleZ(1.5)",
                "matrix3d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)", "matrix3d(0,0,0,0,0,0,0,0,0,0,1,0,10,10,0,1)",
                "translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)",
                "none", "perspective(600px)"
            ],
            "transform-origin": ["10px", "top", "top left", "50% 100%", "left 0%", "left 50% 0"],
            "transform-style": ["flat", "preserve-3d"],
            "perspective": ["none", "600px"],
            "perspective-origin": ["10px", "top", "top left", "50% 100%", "left 0%"],
            "backface-visibility": ["visible", "hidden"],
            "transform-box": ["border-box", "fill-box", "view-box"] //https://bugs.webkit.org/show_bug.cgi?id=145783
        }
    },

    "css3-transforms-2": {
        "title": "Transforms 2",
        "properties": {
            "translate": ["0", "10px", "-30px -90px", "6% 8em"],
            "rotate": ["0deg", "0", "18deg", "18deg 1 3 2"],
            "scale": ["0", "1.8", "2 3", "2 3 1"],
        }
    },

    "css3-text": {
        "title": "Text Level 3",
        "properties": {
            "text-transform": ["full-width"],
            "tab-size": ["4", "1em", "6px", "0.5vw", "calc(-8 + 10)", "calc(3 * 1px)"],
            "line-break": ["auto", "loose", "normal", "strict"],
            "white-space": ["pre-wrap-auto"], //http://dev.w3.org/csswg/css-text-3/#valdef-white-space-pre-wrap-auto
            "word-break": ["normal", "keep-all", "break-all"],
            "hyphens": ["auto", "manual", "none"],
            "overflow-wrap": ["normal", "break-word"],
            "word-wrap": ["normal", "break-word"],
            //true moz only
            "text-align": [
              "start", "end", "justify", "match-parent", "justify-all",
              // Firefox 27 support true value(using "layout.css.text-align-true-value.enabled")
              // https://bugzilla.mozilla.org/show_bug.cgi?id=929991
              // Firefox 47 rename true to unsafe
              "start safe", "end safe", "justify safe", "justify-all safe",
              "start unsafe", "end unsafe", "justify unsafe", "justify-all unsafe"
            ],
            "text-align-last": [
              "auto", "start", "end", "left", "right", "center", "justify",
              "auto safe", "center safe", "start safe", "justify safe",
              "auto unsafe", "center unsafe", "start unsafe", "justify unsafe"
            ],
            "text-align-all": [
              "start", "end", "left", "right", "center", "justify", "match-parent",
              "start safe", "end safe", "left safe", "right safe", "center safe", "justify safe", "match-parent safe",
              "start unsafe", "end unsafe", "left unsafe", "right unsafe", "center unsafe", "justify unsafe", "match-parent safe"
            ],
            "text-justify": ["auto", "none", "inter-word", "inter-ideograph", "inter-character", "inter-cluster", "distribute", "kashida"],
            "word-spacing": ["50%", "1em", "normal"],
            "letter-spacing": ["normal"],
            "text-indent": ["1em hanging", "1em each-line", "1em hanging each-line"],
            "hanging-punctuation": ["none", "first", "last", "force-end", "allow-end", "first last"]
        }
    },

    "css-text-4": {
        "title": "Text Level 4",
        "properties": {
          "text-align": [
              // Firefox support true value
              //
              "'.' center", "':' center", "'.' left", "'.' right", "'foo' center",
            ],
           "text-space-collapse": ["collapse", "discard", "preserve", "preserve-breaks"],
           "text-space-trim": ["none", "trim-inner", "consume-before", "consume-after", "consume-before consume-after", "none consume-before", "trim-inner consume-after"],
           "text-wrap": ["normal", "nowrap", "balance"],// remove avoid
           "wrap-before": ["auto", "avoid", "avoid-line", "avoid-flex", "line", "flex"],
           "wrap-after": ["auto", "avoid", "avoid-line", "avoid-flex", "line", "flex"],
           "wrap-inside": ["auto", "avoid"],
           "hyphenate-character": ["auto", "\"\\2010\"", "'\\2010'"],
           "hyphenate-limit-zone": ["20%", "5em", ".86em", "30px"],
           "hyphenate-limit-chars": ["auto", "auto 3", "5", "5 2", "5 2 2"],
           "hyphenate-limit-lines": ["no-limit", "0", "13"],
           "hyphenate-limit-last": ["none", "always", "column", "page", "spread"],
           // Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=289130
           // -ms-text-autospace https://msdn.microsoft.com/zh-cn/library/ms531164(v=vs.85).aspx
           "text-spacing": ["normal", "none", "trim-start", "space-start", "trim-end", "space-end", "allow-end", "trim-adjacent", "space-adjacent", "no-compress", "ideograph-alpha", "ideograph-numeric", "punctuation", "space-start allow-end trim-adjacent"]
        }
    },

    "css-text-decor-3": {
        "title": "Text Decoration",
        "properties": {
            "text-decoration-line": ["none", "underline", "overline", "line-through", "underline overline"],
            "text-decoration-color": "white",
            "text-decoration-style": ["solid", "double", "dotted", "dashed", "wavy"],
            //https://code.google.com/p/chromium/issues/detail?id=377462
            "text-decoration": [
              // Old value
              "underline",
              "underline dotted green",
              "underline overline solid red",
              "line-through overline red dotted",
              "solid red underline overline line-through",
            ],
            // Blink bug https://code.google.com/p/chromium/issues/detail?id=313888
            "text-underline-position": ["auto", "under", "left", "right", "under left", "under right"],
            "text-emphasis-style": ["none", "filled", "open", "dot", "circle", "double-circle", "triangle", "sesame", "filled dot", "open dot", "'foo'"],
            "text-emphasis-color": ["green", "rgba(102, 51, 153, 0.55)", "currentColor", "transparent"],
            "text-emphasis": ["none", "filled", "open", "dot", "circle", "filled dot", "open circle", "'foo'", "'汉字'", "'\\25B2'", "'foo' green", "dot #999", "filled dot #999", "open dot #999", "#999 filled dot", "#999 dot filled"],
            "text-emphasis-position": [
              // Old value
              "over", "under",
              "over right", "over left", "under right", "under left"],
            "text-shadow": ["none", "1px 1px", "0 0 black", "1px 2px 3px black"]
        }
    },

    "css-text-decor-4": {
        "title": "Text Decoration 4",
        "properties": {
            "fill-color": ["currentColor", "transparent", "#999", "rgba(90, 105, 39, .8)"],
            "fill-image": ["url('../img/foo.png')", "url(../img/foo.png)"],
            "fill-origin": ["match-parent", "fill-box", "stroke-box", "content-box", "padding-box", "border-box"],
            "fill-break": ["bounding-box", "slice", "clone"],
            "fill-opacity": ["1", "0", "0.86", ".582"],
            "fill": ["#999", "lightblue url(../img/foo.png)"],
            "stroke-width": ["1px", "0", "0.5px", "3em", "39.5%", "100%", "calc(100% - 18px)"],
            "stroke-position": ["center", "inset", "outset"],
            "stroke-linejoin": ["miter", "round", "bevel"],
            "stroke-dasharray": ["none", "0", "20px 39px", "5.8em 108px"],
            "stroke-dashoffset": ["0", "0.5px", "3em", "39.5%", "100%", "calc(100% - 18px)"],
            "stroke-color": ["transparent", "currentColor", "#999", "rgba(90, 105, 39, .8)"],
            "stroke-image": ["none", "url('../img/foo.png')", "url(../img/foo.png)"],
            "stroke-origin": ["match-parent", "content-box"],
            "stroke-break": ["bounding-box", "slice", "clone"],
            "stroke": ["#999", "lightblue url(../img/foo.png)", "url(#foo), red", "none red"],
            "text-decoration-skip": ["none", "objects", "spaces", "ink", "edges", "box-decoration", "objects edges"],
            "text-emphasis-skip": ["spaces", "punctuation", "symbols", "narrow", "spaces punctuation symbols", "spaces punctuation symbols narrow"],
        }
    },

    "css3-fonts": {
        "title": "Fonts Level 3",
        "properties": {
            // font-size 和 font-family 是必须写的。
            "font": ["0/0 foo", "0 foo", "2em sans-serif", "2em 'Open Sans', sans-serif", "italic 2em 'Open Sans', sans-serif", "italic small-caps bolder 16px/3 cursive",
                // CSS3 Add
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1057680
                "italic small-caps bolder condensed 16px/3 cursive",
                "caption", "icon", "menu", "message-box", "small-caption", "status-bar"
            ],
            "font-stretch": ["normal", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
            "font-size-adjust": ["none", ".5"],
            "font-synthesis": ["none", "weight", "style", "weight style", "style weight"],
            "font-kerning": ["auto", "normal", "none"],
            "font-variant-position": ["normal", "sub", "super"],
            "font-variant-ligatures": [
                "normal", "none",
                "common-ligatures", "no-common-ligatures",
                "discretionary-ligatures", "no-discretionary-ligatures",
                "historical-ligatures", "no-historical-ligatures",
                "contextual", "no-contextual",
                "common-ligatures discretionary-ligatures historical-ligatures contextual"
            ],
            "font-variant-caps": ["normal", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "titling-caps", "unicase"],
            "font-variant-numeric": [
                "normal",
                "lining-nums", "oldstyle-nums",
                "proportional-nums", "tabular-nums",
                "diagonal-fractions", "stacked-fractions",
                "ordinal", "slashed-zero",
                "lining-nums proportional-nums diagonal-fractions",
                "oldstyle-nums tabular-nums stacked-fractions ordinal slashed-zero",
                "slashed-zero ordinal tabular-nums stacked-fractions oldstyle-nums"
            ],
            "font-variant-alternates": [
                "normal",
                "historical-forms",
                // TODO add tests for functions
                "swash(flowing)",
                "stylistic(user-defined-ident)",
                "styleset(user-defined-ident)",
                "character-variant(user-defined-ident)",
                "ornaments(user-defined-ident)",
                "annotation(user-defined-ident)",
                "swash(ident1) annotation(ident2)"
            ],
            "font-variant-east-asian": [
                "normal",
                "jis78", "jis83", "jis90", "jis04", "simplified", "traditional",
                "full-width", "proportional-width",
                "ruby", "simplified full-width ruby"
            ],
            "font-variant": ["none", "small-caps", "common-ligatures", "common-ligatures small-caps", "stylistic(user-defined-ident) all-petite-caps sub lining-nums contextual ruby"],
            "font-feature-settings": ["normal", "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"],
            "font-language-override": ["normal", "'SRB'"],
            "unicode-range": ["U+416", "U+0-7F", "U+A5, U+4E00-9FFF", "U+30??", "U+0025-00FF, U+4??"]
        },
        "@rules": {
            "@font-face": "@font-face",
            "@font-feature-values": "@font-feature-values Jupiter Sans"
        }
    },

    "css-fonts-4": {
        "title": "Fonts Level 4",
        "properties": {
            "font-family": [
                // https://drafts.csswg.org/css-fonts-4/#valdef-font-family-system-ui
                // Blink: https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/hvN9YVvIb5c
                "system-ui",
                // WebKit: Shipped “-apple-system”, has a bug to alias to “system-ui”.
                // https://bugs.webkit.org/show_bug.cgi?id=151493

                // Firefox: Shipped “-apple-system” for the compat with WebKit.
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1226042
                "-apple-system",
                "emoji", "math", "fangsong"],
            "font-style": ["oblique 12deg", "oblique 390deg", "oblique -20deg", "oblique 0deg"],
            "font-weight": ["0", "90", "860", "1000"],
            "font-stretch": ["0%", "20%", "100%", "260%", "87.5%"],
            "min-font-size": ["3px", "3.5em", "10%", "100%"],
            "max-font-size": ["3px", "3.5em", "10%", "100%"],
            "font-optical-sizing": ["auto", "none"],
            "font-variation-settings": ["normal", "'wght' 2, 'wght' 3", "'wdth' 0.7", "'wdth' 3"]
        }
    },

    "css3-writing-modes": {
        "title": "Writing Modes",
        "properties": {
            "direction": ["ltr", "rtl"],
            "unicode-bidi": ["normal", "embed", "isolate", "bidi-override", "isolate-override", "plaintext"],
            "writing-mode": [
                // 垂直模式下 text-shadow 位置不正确：
                // https://bugs.webkit.org/show_bug.cgi?id=112655
                // 垂直模式不支持 table-cell
                // https://crbug.com/550963
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1077521
                "horizontal-tb", "vertical-rl", "vertical-lr",
                // Supporting SVG1.1 writing-mode values in CSS syntax
                "lr", "lr-tb", "rl", "rl-tb", // horizontal-tb
                "tb", "tb-rl", // vertical-rl
                // CR 可能会被删除
                "sideways-rl", "sideways-lr",

                // Only in old IE
                "bt-rl" , "tb-lr" , "bt-lr" , "lr-bt" , "rl-bt"
                ],
            "text-orientation": [
                "mixed", "upright", "sideways",
                // Remove
                // sideways to behave as sideways-right
                "sideways-right",
                // "sideways-left", "use-glyph-orientation",
            ],
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1097499
            // WebKit support old name: text-combine https://bugs.webkit.org/show_bug.cgi?id=48538
            // WebKit update text-combine to match spec: https://bugs.webkit.org/show_bug.cgi?id=150821
            // http://generatedcontent.org/post/60984978732/text-combine-horizontal
            "text-combine-upright": ["none", "all", "digits", "digits 3"],
            "glyph-orientation-vertical": ["auto", "0deg", "90deg", "0", "90", ],
            // Firefox support other caption-side values https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side#Browser_compatibility
            "caption-side": ["block-start", "block-end", "inline-start", "inline-end"],
            "text-combine-horizontal": ["none", "all", "digits 2"]
        }
    },

    "css3-color": {
        "title": "CSS Color Module Level 3",
        "values": {
            "properties": [
                "color",
                "background",
                "background-color",
                "border",
                "border-color",
                // "text-decoration",
                "text-decoration-color",
                "text-emphasis",
                "text-emphasis-color",
                "column-rule",
                "column-rule-color",
                "outline",
                "outline-color"
            ],
            "rgb()": ["rgb(255, 0, 0)", "rgb(110%, 0%, 0%)"],
            "rgba()": ["rgba(0, 0, 0, .5)", "rgba(100%, 0%, 0%, 0.1)"],
            "hsl()": ["hsl(0, 0%, 0%)", "hsl(120, 100%, 50%)"],
            "hsla()": ["hsla(0, 0%, 0%, .5)", "hsla(120, 100%, 50%, 1)"],
            "transparent": "transparent",
            "currentColor": "currentColor"
        },
        "properties": {
            "opacity": ["-5", "0", ".5", "1", "2"]
        }
    },

    "css-color": {
        "title": "CSS Color Module Level 4",
        "values": {
            "properties": [
                "color",
                "background",
                "background-color",
                "border",
                "border-color",
                "text-decoration",
                "text-decoration-color",
                "text-emphasis",
                "text-emphasis-color",
                "column-rule",
                "column-rule-color",
                "outline",
                "outline-color"
            ],
            "rebeccapurple": "rebeccapurple",
            "#RGBA": ["#0033ffcc", "#03fc"],
            // CSS color 4 https://bugzilla.mozilla.org/show_bug.cgi?id=1295456
            "rgb()": ["rgb(255, 0, 0, 0.6)", "rgb(0%, 0%, 100%, 80%)", "rgb(255, 0, 0, 80%)", "rgb(255 0 0 / 0.6)", "rgb(255 0 0 / 80%)"],
            "rgba()": ["rgba(0%, 0%, 100%, 80%)", "rgba(255, 0, 0, 80%)", "rgba(255 0 0 / 0.4)", "rgba(255 0 0 / 40%)"],
            "hsl()": ["hsl(120 60% 70%)", "hsl(0deg, 80%, 50%)", "hsl(120deg, 20%, 56%)", "hsl(120deg 60% 70%)", "hsl(240, 100%, 50%, 0.05)", "hsl(240, 100%, 50%, 5%)", "hsl(240 100% 50% / 0.05)", "hsl(240 100% 50% / 5%)", "hsl(orange greenish, 20%, 56%)", "hsl(orangish(20%) red, 20%, 56%)"],
            "hsla()": ["hsla(240 100% 50% / 0.05)", "hsla(240 100% 50% / 5%)", "hsla(240deg 100% 50% / 5%)", "hsla(240deg, 100%, 50%, 0.4)"],
            "gray()": ["gray(0)", "gray(16)", "gray(255, 50%)", "gray(255, .2)"],
            "hwb()": ["hwb(90, 0%, 0%, 0.5)", "hwb(190, 50%, 0%)", "hwb(190, 50%, 10%, .2)", "hwb(120deg, 44%, 50%)"],
            "color()": ["color(yellow blend(blue 50%))", "color(red)", "color(red tint(50%))", "color(hsla(125, 50%, 50%, .4) hue(200))", "color(yellow blend(blue 50% hsl))", ],
            "device-cmyk()": "device-cmyk(0, 81%, 81%, 30%)"
        },
        "properties": {
            "opacity": ["0%", "63%", "100%"],
            "color-correction": ["auto", "sRGB"],
            // Firefox
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1209273
            // https://drafts.csswg.org/css-color-4/#color-adjust
            "color-adjust": ["economy", "exact"],
            // 私有属性
            "-webkit-print-color-adjust": ["economy", "exact"]
        }
    },

    "css3-multicol": {
        "title": "Multi-column Layout",
        "properties": {
            "column-width": ["10em", "auto"],
            "column-count": ["2", "auto"],
            "columns": ["100px", "3", "10em 2", "auto 2", "10em auto", "auto auto", "2 10em", "auto 10em", "2 auto"],
            "column-gap": ["1em", "normal", "calc(239px - 3em)"],
            "column-rule-color": ["red"],
            "column-rule-style": ["none", "solid", "dotted"],
            "column-rule-width": "1px",
            "column-rule": ["transparent", "1px solid black"],
            "column-span": ["none", "all"],
            "column-fill": ["auto", "balance", "balance-all"],
            "break-before": ["auto", "avoid", "avoid-page", "page", "left", "right", "recto", "verso", "avoid-column", "column", "avoid-region", "region"],
            "break-after": ["auto", "avoid", "avoid-page", "page", "left", "right", "recto", "verso", "avoid-column", "column", "avoid-region", "region"],
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column", "avoid-region"],

            //Only WebKit/Blink support width -webkit-
            "column-break-before": ["auto", "always", "avoid", "left", "right", "page", "column", "avoid-page", "avoid-column"],
            "column-break-after": ["auto", "always", "avoid", "left", "right", "page", "column", "avoid-page", "avoid-column"],
            "column-break-inside": ["auto", "always", "avoid", "left", "right", "page", "column", "avoid-page", "avoid-column"]

        }
    },

    "css3-values": {
        "title": "Values and Units",
        "values": {
            "properties": [
                "width",
                "height",
                "min-width",
                "max-width",
                "min-height",
                "max-height",
                "left",
                "line-height",
                "letter-spacing",
                "word-spacing",
                "text-indent",
                "vertical-align",
                "border-spacing",
                "outline-width",
                "outline-offset",
                "magrin",
                "padding",
                "border-left-width",
                "border-image-width",
                "background-position",
                "background-size",
                "column-gap",
                "column-rule-width",
                "column-width",
                //integer
                "flex-basis",
                "flex",
                "flex-grow",
                "flex-shrink",
                "order",
                "mask-position",
                "mask-size",
                "mask-border-width",
                "shape-image-threshold",
                "shape-margin",
                "motion-offset",
                "motion-rotation",
                "object-position",
                "image-resolution",
                "image-orientation",
                "transition",
                "transition-delay",
                "transition-duration",
                "animation-duration",
                "animation-iteration-count",
                "animation-delay",
                "transform-style",
                "perspective",
                "tab-size"
            ],
            "rem": "5rem",
            "ch": "5ch",
            "vw": "5vw",
            "vh": "5vh",
            "vmin": "5vmin",
            "vmax": "5vmax",
            // quarter-millimeters  1q = 1/40th of 1cm
            // http://www.w3.org/TR/2015/CR-css-values-3-20150611/#changes
            "q": "1q",
            //More case http://dev.w3.org/csswg/css-egg/#celestial-css
            "attr()": ["attr(data-px)", "attr(title color)", "attr(data-px px)", "attr(data-px px, initial)", "attr(end-of-quote string, inherit)", "linear-gradient(attr(data-bg-rotation deg), blue, green)", "calc( 10px + attr(data-addition px))"],
            "calc()": ["calc(1px + 2px)", "calc(5px*2)", "calc(5px/2)", "calc(5px/2 - 2*1px)", "calc(100%/10)", "calc(100%/3 - 2*1em - 2*1px)", "calc(attr(data-px)*2)", "calc(5px - 10px)", "calc(1vw - 1px)", "calc(100% - -35px)",
                // Nested
                "calc( calc(0) )",
                "calc( calc(0.5) )",
                "calc( calc(6) )",
                "calc( calc(39px) )",
                "calc( calc(100% - 30px) )",
                "calc( calc(39px + 5.2em) )",
                "calc( calc(39px + 5.2em) * 8 )",
                "calc( 933px - calc(58px + 3em) - 20px )",
                "calc( calc(150px * 2)/2 - 2px )"
                ],
            "toggle()": "toggle(1px, 2px)"
        },
        "properties": {
            "content": [
              "attr(data-foo)", "attr(class)", "attr(width px, auto)",
              "linear-gradient(45deg, white, black)",
              "radial-gradient(circle, white, black)",
              "repeating-linear-gradient(white, black)",
              "repeating-radial-gradient(white, black)",
              "image-set(url(foo.png) 1x, url(foo-2x.png) 2x)",
              "image-set(url(foo.png) 1.5x)",
              "cross-fade(url(foo.png), url(bar.png), 20%)",
              "cross-fade(url(foo.png), url(bar.png), 100%)",
              "conic-gradient(#f06, gold)",
              "repeating-conic-gradient(gold, #f06 20deg)",
            ]
        }
    },

    "css3-regions": {
        "title": "Regions",
        "properties": {
            "break-after": ["region", "avoid-region"],
            "break-before": ["region", "avoid-region"],
            "flow-into": ["none", "named", "element", "content"],
            "flow-from": ["none", "named"],
            "region-fragment": ["auto", "break"]
        }
    },

    "css3-flexbox": {
        "title": "Flexible Box Layout",
        "properties": {
            // flex-item 中使用 display: table-cell 各个浏览器表现不一致：https://crbug.com/243056
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1230207
            "display": ["flex", "inline-flex"],
            "align-content": ["flex-start", "flex-end", "center", "space-between", "space-around"],
            "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around"],
            "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
            "align-self": ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
            "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
            "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
            "flex-flow": ["row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse"],
            "flex": ["none", "auto", "0", "5 7 10%", "0.32 7 10%", "0 0.58 auto", "0 0 calc(56px*2)", "calc(1/3) 1 auto", "0 calc(1/3) auto"],
            // https://lists.w3.org/Archives/Public/www-style/2013Oct/0246.html
            // Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=985304
            // Chrome https://code.google.com/p/chromium/issues/detail?id=480752
            "flex-grow": ["0", "5", "0.63", "calc(9/3)", "calc(6/4)"],
            "flex-shrink": ["1", "10", "0.63", "calc(9/3)", "calc(6/4)"],
            "flex-basis": ["auto", "1px", "calc(100%/3)", "content", "fill", "fill-available", "-moz-available", "min-content", "max-content", "fit-content"],
            "order": ["0", "1", "-3", "calc(9/3)", "calc(2 - 8)"],
            "min-width": "auto",
            "min-height": "auto",
        }
    },


    // Blink: https://code.google.com/p/chromium/issues/detail?id=79180
    // WebKit: https://bugs.webkit.org/show_bug.cgi?id=60731
    // Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=616605
    "css3-grid-layout": {
        "title": "Grid Layout",
        "properties": {
            "display": ["grid", "inline-grid"],
            "grid-template-columns": [
                "0",
                "none",
                "auto",
                "100px",
                "1fr",
                "0.82fr",
                "100px 1fr auto",
                "repeat(2, 100px 1fr)",
                "repeat(17, minmax(20px, auto))",
                "repeat(18, minmax(auto, 20px))",
                "repeat(17, minmax(20px, 1fr))",
                "repeat(18, minmax(20px, min-content))",
                "repeat(18, minmax(min-content, 20px))",
                "repeat(17, minmax(18%, auto))",
                "repeat(17, minmax(auto, 18%))",

                // multiple tracks on repeat()
                "repeat(5, 100px 50px)",
                "repeat(5, auto 1fr 18%)",
                "repeat(5, 100% auto 1fr 10em)",

                // fit-content( [ <length> | <percentage> ]
                "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)",
                "repeat(5, fit-content(0))",
                "repeat(12, fit-content(58px))",
                "repeat(1, fit-content(39%)",

                "100px 1fr 100px 1fr 100px",
                "minmax(36px, 1fr)",
                "minmax(0, 100%)",
                "minmax(39%, 23.36rem)",
                // WebKit support -webkit-min-content/-webkit-max-content
                "min-content",
                "max-content",
                "100px 1fr max-content minmax(min-content, 1fr)",
                "10px [col-start] 250px [col-end]",
                // 语法由之前的() 改为了 []，因为更容易阅读
                // mozilla41
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1164953
                "[first nav] 150px [main] 1fr [last]",
                "repeat(4, 10px [col-start] 250px [col-end]) 10px",
                "[a] auto [b] minmax(min-content, 1fr) [b c d] repeat(2, [e] 40px) repeat(5, auto)",
                "repeat(2, 1fr auto minmax(30%, 1fr))",
                "10px repeat(2, 1fr auto minmax(30%, 1fr))",
                "calc(4em - 5px)",
                "minmax(calc(4em - 5px), 1fr)",
                "calc(4em - 5px) 1fr minmax(calc(4em - 5px), 1fr)",
                "repeat(2, calc(4em - 5px) 1fr)",
                // 介绍 auto-repeat 文章 https://blogs.igalia.com/svillar/2016/05/10/automatizing-the-grid/
                // Add https://lists.w3.org/Archives/Public/www-style/2015Aug/0342.html
                // demo: http://gridbyexample.com/examples/code/example20.html
                // Blink test: https://codereview.chromium.org/1582793002/patch/40001/50002
                "repeat(auto-fill, 0)",
                "repeat(auto-fit, 0)",
                "repeat(auto-fill, 159px)",
                "repeat(auto-fit, 159px)",
                "repeat(auto-fill, 59%)",
                "repeat(auto-fit, 59%)",
                // Automatic repetitions (auto-fill or auto-fit) cannot be combined with intrinsic or flexible sizes.
                // "repeat(auto-fill, 1fr)",
                // "repeat(auto-fit, auto)",
                // "repeat(auto-fit, min-content)",
                // "repeat(auto-fit, max-content)",
                // "repeat(auto-fit, minmax(auto, auto))",

                "repeat(auto-fit, [] minmax(19px, min-content))",
                "repeat(auto-fit, [a] minmax(15.8%, auto) [])",
                "repeat(auto-fill, minmax(26px, 100%))",
                "repeat(auto-fill, minmax(26px, auto))",
                "repeat(auto-fill, minmax(26px, 1fr))",
                "repeat(auto-fill, minmax(26%, max-content))",
                // Firefox 47
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1251999
                "repeat(auto-fill, minmax(1%, auto))",
                "repeat(auto-fill, minmax(1em, min-content))",
                "repeat(auto-fill, minmax(max-content, 1mm))",

                "repeat(auto-fill, minmax(20px, auto))",
                "repeat(auto-fill, minmax(auto, 20px))",
                "repeat(auto-fill, minmax(20px, 1fr))",
                "repeat(auto-fill, minmax(20px, min-content))",
                "repeat(auto-fill, minmax(min-content, 20px))",
                "repeat(auto-fill, minmax(18%, auto))",
                "repeat(auto-fill, minmax(auto, 18%))",

                "repeat(auto-fill, [a] 20px [b]) [c]",
                "repeat(auto-fit, [a] 20px [b]) [c] 30px [d]",
                "repeat(auto-fit,[] 1%)",

                //  multiple tracks on auto repeat()
                "repeat(auto-fill, 100px 50px)",
                "repeat(auto-fill, auto 1fr 18%)",
                "repeat(auto-fill, 100% auto 1fr 10em)",
                "repeat(auto-fit, 100px 50px)",
                "repeat(auto-fit, auto 1fr 18%)",
                "repeat(auto-fit, 100% auto 1fr 10em)",

                "subgrid",
                "subgrid [first] [second] [third] [fourth] [fifth]",
                "subgrid [] [foo bar]",
                "subgrid repeat(1, [])",
                "subgrid Repeat(4, [a] [b c] [] [d])",
                "subgrid repeat(auto-fill, [])",
                "subgrid [x] repeat( Auto-fill, [a b c]) []",
                "subgrid [x] repeat(auto-fill, []) [y z]",
                "subgrid [a] repeat(auto-fit,[])",
                "subgrid repeat(auto-fill, 1px)",
                "subgrid repeat(auto-fill, 1px [])",
                "subgrid repeat(Auto-fill, [a] [b c] [] [d])",
                ],
            "grid-template-rows": [
                "0",
                "none",
                "auto",
                "100px",
                "1fr",
                "0.82fr",
                "100px 1fr auto",
                "repeat(2, 100px 1fr)",
                "100px 1fr 100px 1fr 100px",
                "minmax(36px, 1fr)",
                "minmax(0, 100%)",
                "minmax(39%, 23.36rem)",
                // WebKit support -webkit-min-content/-webkit-max-content
                "min-content",
                "max-content",
                "100px 1fr max-content minmax(min-content, 1fr)",
                "10px [col-start] 250px [col-end]",
                "[first nav] 150px [main] 1fr [last]",
                "repeat(4, 10px [col-start] 250px [col-end]) 10px",
                "[a] auto [b] minmax(min-content, 1fr) [b c d] repeat(2, [e] 40px) repeat(5, auto)",
                "repeat(2, 1fr auto minmax(30%, 1fr))",
                "10px repeat(2, 1fr auto minmax(30%, 1fr))",
                "calc(4em - 5px)",
                "minmax(calc(4em - 5px), 1fr)",
                "calc(4em - 5px) 1fr minmax(calc(4em - 5px), 1fr)",
                "repeat(2, calc(4em - 5px) 1fr)",
                // Add https://lists.w3.org/Archives/Public/www-style/2015Aug/0342.html
                // demo: http://gridbyexample.com/examples/code/example20.html
                "repeat(auto-fill, 159px)",
                "repeat(auto-fit, 159px)",
                "repeat(auto-fill, 59%)",
                "repeat(auto-fit, 59%)",
                "repeat(auto-fill, minmax(26px, 100%))",
                "repeat(auto-fill, minmax(26px, auto))",
                "repeat(auto-fill, minmax(26px, 1fr))",
                "repeat(auto-fill, minmax(26px, max-content))",
                "subgrid",
                "subgrid [first] [second] [third] [fourth] [fifth]"
                ],

            "grid-template-areas": ["none", "'articles'", "'nav articles'", "'. a' 'b a' '. a'", "'head head' 'nav main' 'foot ....'",
                ",", "10%", "USD$"],
            "grid-template": [
                "none",
                "auto / auto",
                "0 / 0",
                "1fr / 1fr",
                "100px / 50px",
                "auto 1fr auto / auto 1fr",
                // Swap the order of column/row values for 'grid', 'grid-template' and 'grid-gap' properties.
                // https://drafts.csswg.org/css-grid/#grid-shorthand
                // <‘grid-template’> | [ <‘grid-auto-flow’> [ <‘grid-auto-rows’> [ / <‘grid-auto-columns’> ]? ]? ]
                // https://bugs.chromium.org/p/chromium/issues/detail?id=583215
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1240956
                "'a' / 10px",
                "'a' 'a' / 10px",
                "'a' 15px / 10px",
                "[head] 'a' 15px [tail] / 10px",
                "[header-top] 'a a a' [header-bottom] [main-top] 'b b b' 1fr [main-bottom] / auto 1fr auto",
                "[header-top] 'a a a' 1fr [header-bottom] [main-top] 'b b b' 1fr [main-bottom] / auto 1fr auto",
                // Old syntax
                // https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#grid-shorthand
                // <‘grid-template’> | [ <‘grid-auto-flow’> [ <‘grid-auto-columns’> [ / <‘grid-auto-rows’> ]? ]? ]
                "10px / 'a'",
                "10px / 'a' 'a'",
                "10px / 'a' 15px",
                "10px / [head] 'a' 15px [tail]",
                "auto 1fr auto / [header-top] 'a a a' [header-bottom] [main-top] 'b b b' 1fr [main-bottom]",
                "auto 1fr auto / [header-top] 'a a a' 1fr [header-bottom] [main-top] 'b b b' 1fr [main-bottom]",
                "subgrid",
                // https://bugs.chromium.org/p/chromium/issues/detail?id=614314
                // The following declaration should be invalid:
                "'a b' / repeat(2, 100px)"
            ],

            "grid-auto-columns": [
                "auto", "1fr", "100px", "min-content", "max-content", "minmax(min-content, 1fr)",
                // <track-size>+
                // https://drafts.csswg.org/css-grid/#auto-tracks
                // Moz bug https://bugzilla.mozilla.org/show_bug.cgi?id=1339672
                "auto 1fr", "1fr 50px",
                "min-content max-content", "max-content max-content",
                "minmax(min-content, 1fr) max-content",
                "minmax(min-content, 1fr) 100px",
                "68% 100px 1fr auto max-content",
                "fit-content(90px)", "fit-content(68%)",
                "fit-content(90px) fit-content(68%)",
                "fit-content(90px) fit-content(68%) 100px"
            ],
            "grid-auto-rows": ["auto", "1fr", "100px", "min-content", "max-content", "minmax(min-content, 1fr)",
                // <track-size>+
                // https://drafts.csswg.org/css-grid/#auto-tracks
                "auto 1fr", "1fr 50px",
                "min-content max-content", "max-content max-content",
                "minmax(min-content, 1fr) max-content",
                "minmax(min-content, 1fr) 100px",
                "68% 100px 1fr auto max-content",
                "fit-content(90px)", "fit-content(68%)",
                "fit-content(90px) fit-content(68%)",
                "fit-content(90px) fit-content(68%) 100px"
            ],
            "grid-auto-flow": ["row", "column", "dense", "row dense", "dense row", "dense column"], // Remove grid-auto-flow stack value
            /*
             Removed
             http://www.w3.org/blog/CSS/2014/02/22/minutes-seattle-f2f-part-ii/
             "grid-auto-position": ["1 / 1"],
             */
            "grid": [
                "none",
                "auto / auto",
                "0 / 0",
                "column 1fr / auto",
                "column 2fr / 30px",
                "35px / auto",
                "row",
                "column",
                "10rem 10rem 10rem / 1fr 1fr",
                "'a' 15px / 10px",
                "[head] 'a' 15px [tail] / 10px",
                "subgrid"
                ],
            "grid-row-start": ["auto", "4", "C", "C 2", "span C", "span 1"],
            "grid-column-start": ["auto", "4", "C", "C 2", "span C", "span 1"],
            "grid-row-end": ["auto", "4", "C", "C 2", "span C", "span 1"],
            "grid-column-end": ["auto", "4", "C", "C 2", "span C", "span 1"],
            "grid-column": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
            "grid-row": ["auto", "1", "-1", "1 / 1", "1 / -1", "auto / auto", "2 / span 2"],
            "grid-area": ["auto", "1 / 1", "1 / span 1", "span / 10 / -1", "articles"],
            "grid-row-gap": ["0", "16px", "3.6em", "31rem", "28vw", "16vmax","calc(239px - 3em)"], //Rename row-gap to grid-row-gap
            "grid-column-gap": ["0", "16px", "3.6em", "31rem", "28vw", "16vmax","calc(239px - 3em)"],
            // normal 可能会被删除 https://lists.w3.org/Archives/Public/www-style/2015Nov/0072.html
            "grid-gap": ["normal", "0", "16px 3.6em", "31rem 28vw", "16vmax calc(239px - 3em)", "16px", "3.6em", "31rem", "28vw", "16vmax","calc(239px - 3em)", "18%", "100%", "18% 81%", "18% 21px", "calc(69% - 3em)"]
        }
    },
    // Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1105570
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1207698
    // WebKit https://bugs.webkit.org/show_bug.cgi?id=91512

    "css3-align": {
        "title": "Box Alignment",
        "properties": {
            // Change "baseline|last-baseline" to "[ first | last ]? baseline"
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1313254
            "justify-self": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe", "left safe", "right safe"],
            "align-self": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe", "left safe", "right safe"],
            "justify-items": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe", "legacy left", "legacy right", "legacy center", "legacy left", "legacy right", "legacy center"],
            // No auto value
            // adding 'normal' keyword, dropping 'auto'
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1233106
            "align-items": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center", "center safe", "start safe", "end safe", "self-start safe", "self-end safe", "flex-start safe", "flex-end safe"],
            "justify-content": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "left", "right", "center safe", "start safe", "end safe", "flex-start safe", "flex-end safe", "left safe", "right safe",
                // Rename 'true' to 'unsafe'
                // Chrome bug: crbug.com/565883
                // WebKit bug: http://trac.webkit.org/changeset/194104
                // "center true", "start true", "end true", "flex-start true", "flex-end true", "left true", "right true", "space-around start true",
                "center unsafe", "start unsafe", "end unsafe", "flex-start unsafe", "flex-end unsafe", "left unsafe", "right unsafe", "space-around start unsafe",
                "space-between center", "space-around start", "space-evenly end", "stretch flex-start", "space-between flex-end", "space-between left", "space-between right", "space-between center safe"
                ],
            "align-content": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "left", "right", "center safe", "start safe", "end safe", "flex-start safe", "flex-end safe", "left safe", "right safe",
                // Rename 'true' to 'unsafe'
                // "center true", "start true", "end true", "flex-start true", "flex-end true", "left true", "right true", "space-around start true",
                "center unsafe", "start unsafe", "end unsafe", "flex-start unsafe", "flex-end unsafe", "left unsafe", "right unsafe", "space-around start unsafe",
                "space-between center", "space-around start", "space-evenly end", "stretch flex-start", "space-between flex-end", "space-between left", "space-between right", "space-between center safe"
                ],

            // 缩写
            // [align-content][justify-content]?
            // 不包括 <overflow-position>
            "place-content": ["normal", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "center", "start", "end", "flex-start", "flex-end", "left", "right",
                "normal start", "end baseline", "end end", "center center",
                "space-between flex-end", "first baseline start", "last baseline start"
                ],
            // 不包括 <overflow-position>
            // [align-items][justify-items]?
            // <x> [ auto | <x> ]?
            // <x> = [ normal | stretch | <baseline-position> | <self-position> ]
            "place-items": ["normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center",
            "normal center", "end baseline", "end auto", "center auto", "first baseline auto","start last baseline", "left flex-end", "last baseline start", "stretch"
            ],
            // 不包括 <overflow-position>
            // [align-self][justify-self]?
            "place-self": ["auto", "normal", "stretch", "baseline", "first baseline", "last baseline", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end", "left", "right", "center",
                "normal start", "end first baseline", "end auto", "start baseline", "left self-end", "last baseline start"
            ]
        }
    },

    "css-cascade-3": {
        "title": "CSS Cascading and Inheritance Level 3",
        "properties": {
            "all": ["initial", "inherit", "unset"]
        },
        "values": {
            "properties": [
                "unicode-bidi",
                "direction",
                "background-color",
                "border-color",
                "text-decoration",
                "column-rule-color"
            ],
            "unset": "unset"
        },
        "@rules": {
            "@import": [
                "@import url('mystyle.css')",
                "@import url('fineprint.css') print",
                "@import url('bluish.css') projection, tv",
                "@import url('narrow.css') handheld and (max-width: 400px)"
            ]
        }
    },

    "css-cascade-4": {
        "title": "CSS Cascading and Inheritance Level 4",
        "values": {
            "properties": [
                "unicode-bidi",
                "direction",
                "background-color",
                "border-color",
                "text-decoration",
                "column-rule-color"
            ],
            "all": [
              // WebKit support https://bugs.webkit.org/show_bug.cgi?id=149702
              "revert"
            ]
        },
        "@rules": {
            "@import": [
                "@import url('fallback-layout.css') supports(display: block)",
                "@import url('fallback-layout.css') supports(not (display: flex))"
            ]
        }
    },

    "css3-positioning": {
        "title": "Positioned Layout Module",
        "properties": {
            "position": [
              // https://bugzilla.mozilla.org/show_bug.cgi?id=975644
              // https://bugs.webkit.org/show_bug.cgi?id=112024
              // https://crbug.com/231752
              "sticky",
              "center",
              "page"
            ]
        }
    },

    "css3-conditional": {
        "title": "Conditional Rules",
        "@rules": {
            "@supports": [
                "@supports (color: green){display:block}",
                "@supports (color: green !important)",
                "@supports not (foo: bar)",
                "@supports (color: green) or (color: red)",
                "@supports (color: green) and (color: red)",
                "@supports (color: green) and (not (foo: bar))",
                "@supports (color: green) or (not (foo: bar))",
                "@supports (--foo: green)",
                "@supports (--foo: )",
                "@supports (--\\*: green)",
                "@supports (--foo: \\;)"
            ]
        }
    },

    "css-counter-styles": {
        "title": "CSS Counter Styles",
        "@rules": {
            "@counter-style": [
                "@counter-style triangle {system: cyclic;}",
                "@counter-style box-corner"
            ]
        },
        // "values": {
        //     "properties": [
        //         "margin",
        //         "padding",
        //         "border-width",
        //         "border-color",
        //         "border-style"
        //     ],
        //     "logical": [
        //         "logical 10px 23% 3em 0",
        //         "logical red green blue yellow", //border-color
        //         "logical solid dotted dashed none" //border-style
        //     ]
        // },
         "properties": {
            "list-style-type": [
                "string",

                "japanese-formal",
                "japanese-informal",
                "simp-chinese-formal",
                "trad-chinese-formal",
                "simp-chinese-informal",
                "trad-chinese-informal",

                "korean-hangul-formal",
                "korean-hanja-informal",
                "korean-hanja-formal",
                "cjk-decimal",

                "ethiopic-numeric",
                "persian",
                "arabic-indic",
                "devanagari",
                "bengali",
                "gurmukhi",
                "gujarati",
                "oriya",
                "tamil",
                "telugu",
                "kannada",
                "malayalam",
                "mongolian",
                "thai",
                "lao",
                "myanmar",
                "khmer",
                "cjk-heavenly-stem",
                "cjk-earthly-branch",

                "cjk-ideographic", // crbug.com/344214

                "disclosure-open",
                "disclosure-closed"
            ],

            "system": ["cyclic", "numeric", "alphabetic", "symbolic", "additive", "fixed", "fixed 3", "extends decimal"],
            "negative": [" '-' ", " '(' ')' "],
            "prefix": ["»", "Page"],
            "suffix": [" '-' ", " '(' ')' "],
            "range": ["auto", "2 5", "infinite 10", "6 infinite", "infinite infinite", "2 5, 8 10", "infinite 6, 10 infinite"],
            "pad": ["3 '0'", "2 ''"],
            "fallback": ["decimal", "upper-alpha"],
            "symbols": ["A B C D E", "'\\24B6' '\\24B7' '\\24B8' D E", "'0' '1' '2' '4' '5' '6' '7' '8' '9'", "url('first.svg') url('second.svg') url('third.svg')", "indic-numbers", "A '1' '\\24B7' url('firefox.svg')"],
            "additive-symbols": ["3 '0'", "3 '0', 2 '\\2E\\20'", "3 '0', 2 url(symbol.png)"],
            "speak-as": ["auto", "bullets", "numbers", "words", "spell-out", "numbers"]
        }
    },

    "css3-sizing": {
        "title": "Intrinsic & Extrinsic Sizing",
        "properties": {
            // fill renamed to stretch
            // https://drafts.csswg.org/css-sizing-3/#changes
            "width":        ["stretch", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)",
              // 私有：https://code.google.com/p/chromium/issues/detail?id=475104
              "intrinsic", "min-intrinsic"
            ],
            "height":       ["stretch", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)"],
            "min-width":    ["stretch", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)", "contain-floats"],
            "min-height":   ["stretch", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)", "contain-floats"],
            "max-width":    ["stretch", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)"],
            "max-height":   ["stretch", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)"],
            "column-width": ["stretch", "fill-available", "-moz-available", "min-content", "max-content", "fit-content", "fit-content(0)",
                "fit-content(58px)",
                "fit-content(39%)",
                "fit-content(100%)"]
        }
    },

    "css-shapes": {
        "title": "Shapes",
        "properties": {
            "shape-outside": [
                "none",
                "inset(10% round 10% 40% 10% 40%)",
                "inset(10% round 10% 40% / 10% 40%)",
                "ellipse(at top 50% left 20%)",
                "circle(at right 5% top)",
                "polygon(100% 0, 100% 100%, 0 100%)",
                "margin-box",
                "border-box",
                "padding-box",
                "content-box",
                "margin-box",
                "ellipse(at top 50% left 20%) margin-box",
                "circle(at right 5% top) margin-box",
                "polygon(100% 0, 100% 100%, 0 100%) margin-box",
                "linear-gradient(white, black)",
                "radial-gradient(white, black)",
                "repeating-linear-gradient(white, black)",
                "repeating-radial-gradient(white, black)",
                // https://drafts.csswg.org/css-shapes/#shapes-from-image
                "url(image.png)",
                "url(#svg)",
                "url(foo.svg#svg)",
                "attr(src url)"
            ],
            "shape-image-threshold": ["0", "1", "0.0", "0.1"],
            "shape-margin": ["0", "10px", "50%"]
        }
    },

    "css-shapes-2": {
        "title": "Shapes 2",
        "properties": {
            "shape-inside": [
                "auto",
                "outside-shape",
                "inset(10% round 10% 40% 10% 40%)",
                "inset(10% round 10% 40% / 10% 40%)",
                "ellipse(at top 50% left 20%)",
                "circle(at right 5% top)",
                "polygon(100% 0, 100% 100%, 0 100%)",
                "ellipse(at top 50% left 20%) shape-box",
                "circle(at right 5% top) shape-box",
                "polygon(100% 0, 100% 100%, 0 100%) shape-box",
                "url(image.png)",
                "path(\"M 60 40 l 20 0 l 0 60 l 20 0 l 0 -20 l -40 0 l 0 -20 l 80 0 l 0 60 l -60 0 l 0 -80 Z\")",
                "display"
            ],
            "shape-padding": ["0", "10px"],
            "clip-path": [
            "path(\"M 60 40 l 20 0 l 0 60 l 20 0 l 0 -20 l -40 0 l 0 -20 l 80 0 l 0 60 l -60 0 l 0 -80 Z\")",
            "path(nonzero, 'M 100 40 l 20 0 l 0 60 l 20 0 l 0 -20 l -60 0 l 0 -20 l 80 0 l 0 60 l -60 0 l 0 -80 Z')",
            "path(evenodd, 'M 100 40 l 20 0 l 0 60 l 20 0 l 0 -20 l -60 0 l 0 -20 l 80 0 l 0 60 l -60 0 l 0 -80 Z')"
            ]
        }
    },

    //fxtf group
    "css-masking-1": {
        "title": "Masking",
        "group": "fxtf",
        "properties": {
            "clip-path": [
            "none",
            "url('#clip')",
            "inset(16% 35px 2em 3.5vw)",
            "inset(calc(100% - 210px) 19px)",
            "inset(10% round 10% 40% / 10% 40%)",
            // basic shapes for clip-path
            // Firefox used flag: layout.css.clip-path-shapes.enabled
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1110460
            "circle()", "circle(38.6% at 56% 51%)", "circle(closest-side)", "circle(farthest-side)", "ellipse()", "ellipse(26% 45% at 58% 52%)", "ellipse(closest-side farthest-side)", "ellipse(farthest-side farthest-side)", "polygon(50% 0%, 0% 100%, 100% 100%)", "polygon(5em 13px, 76% 280px, 0 230px)", "polygon(nonzero, 5em 13px, 76% 280px, 0 230px)", "polygon(evenodd, 5em 13px, 76% 280px, 0 230px)", "border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "circle() border-box"],
            "clip-rule": ["nonzero", "evenodd"],
            "mask-type": ["alpha", "luminance"],
            "mask-image": [
                "none",
                "url(image.png)",
                "url(foo.svg#svg)",
                "url(#svg)",
                "url(image1.png), url(image2.jpg)",
                "linear-gradient(black 0%, transparent 100%)",
                "linear-gradient(black 0%, transparent 100%), url(image.png)"
                ],
            "mask-repeat": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2)),
            "mask-position": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"],
            "mask-position-x": ["center", "left", "10px"],
            "mask-position-y": ["center", "bottom", "10px"],
            // mask-origin and mask-clip should not have a margin-box value
            // https://github.com/w3c/fxtf-drafts/issues/5
            "mask-clip": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "no-clip"],
            "mask-origin": ["border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box"],
            "mask-size": ["auto", "10px", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
            "mask-composite":
              ["add", "subtract", "intersect", "exclude"]
              .concat(["add", "subtract", "intersect", "exclude"].times(2, 2, ", ")),
            "mask-mode": ["alpha", "luminance", "auto"],
            "mask": [
              "none",
              "0",
              "0 0",
              "auto",
              "top",
              "no-repeat",
              "luminance",
              "url(image.png)",
              "url(foo.png), url(bar.svg)",
              "url(image.png) luminance",
              "url(image.png) luminance top no-repeat",
              "linear-gradient(black 0%, transparent 100%)",
              "linear-gradient(black 0%, transparent 100%), url(image.png)",
              "top left / 50% 60%",
              "auto top left / auto 60%",
              "top left / 50% 60% luminance",
              "border-box exclude",
              "border-box padding-box",
              "url(foo.png) bottom right / cover padding-box content-box"
            ],
            "mask-border-source": ["none", "url(image.png)"],
            "mask-border-mode": ["luminance ", "alpha"],
            "mask-border-slice": ["0 fill", "50% fill", "1.1 fill", "0 1 fill", "0 1 2 fill", "0 1 2 3 fill"],
            "mask-border-width": ["auto", "10px", "50%", "1", "1.0", "auto 1", "auto 1 50%", "auto 1 50% 1.1"],
            "mask-border-outset": ["0", "1.1", "0 1", "0 1 2", "0 1 2 3"],
            "mask-border-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
            "mask-border": ["url(image.png)", "url(image.png) 10px", "url(image.png) space", "url(image.png) 1 fill", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px 2"],

            /*
             * WebKit Support old specs (-webkit-)
               http://www.w3.org/TR/2012/WD-css-masking-20121115/
             * Only support <number>(like 1.3) not <integer>
             * See also
              https://www.webkit.org/blog/181/css-masks/
              http://www.html5rocks.com/en/tutorials/masking/adobe/
            */
            "mask-box-image-source": ["none", "url(image.png)"],
            "mask-box-image-slice": ["0 fill", "50% fill", "1 fill", "0 1 fill", "0 1 2 fill", "0 1 2 3 fill"],
            "mask-box-image-width": ["auto", "10px", "50%", "1", "auto 1", "auto 1 50%", "auto 1 50% 1"],
            "mask-box-image-outset": ["0", "1", "0 1", "0 1 2", "0 1 2 3"],
            "mask-box-image-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
            "mask-box-image": ["url(image.png)", "url(image.png) 10px", "url(image.png) space", "url(image.png) 1 fill", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px 2"]
        }
    },

    "compositing-1": {
        "title": "Compositing and Blending",
        "group": "fxtf",
        "properties": {
            "mix-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            "isolation": ["auto", "isolate"],
            "background-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal, multiply"]
        }
    },

    //filters-1
    "filter-effects": {
        "title": "Filter Effects Module Level 1",
        "group": "fxtf",
        "values": {
            "properties": [
                "background",
                "background-image",
                "list-style",
                "list-style-image",
                "border-image",
                "border-image-source",
                "content",
                "mask",
                "mask-image",
                "mask-box-image",
                "mask-border-source"
            ],
            // More test case:
            // http://trac.webkit.org/browser/trunk/LayoutTests/fast/filter-image/parse-filter-image.html
            "filter()": [
                "filter('image.jpg', invert(80%))",
                "filter(none, url(image.jpg))",
                "filter(none, url(foo.jpg) url(bar.jpg))",
                "filter(none, sepia(0.5))",
                "filter(none, sepia(0.5) sepia(0.25))",
                "filter(url(image.jpg), blur(2px))",
                "filter(url(image.jpg), url('blur.svg'))",
                "filter(url(image.jpg), url('blur.svg') blur(2px))",
                "filter(url(image.svg), blur(2px) invert(80%))",
                "filter(radial-gradient(circle, #9ef, #0000af 100%), hue-rotate(90deg))",
                "filter(radial-gradient(circle, #9ef, #0000af 100%), hue-rotate(0))",
                "filter(radial-gradient(circle, #9ef, #0000af 100%), blur(2px) invert(80%))",
                "filter(url(image.svg), contrast(0.75) blur(3px) hue-rotate(45deg))",
                //cross-fade must be add -webkit-
                "filter(cross-fade(url(image.svg), url(image.svg), 50%), sepia(1))",
                "filter(image-set(url(foo.png) 1x), blur(2px))",
                "filter(filter(url/image.svg), blur(2px)), sepia(1))"
            ]
        },
        "properties": {
            "filter": ["none", "url(#id)", "url(image.svg#id)", "blur(5px)", "brightness(0.5)", "contrast(150%)", "drop-shadow(15px 15px 15px black)", "grayscale(50%)", "hue-rotate(50deg)", "hue-rotate(0)", "invert(50%)", "opacity(50%)", "sepia(50%)", "saturate(150%)", "grayscale(100%) sepia(100%)"],
        }
    },

    //WebKit(-webkit-backdrop-filter): http://trac.webkit.org/changeset/175716
    //Demo: http://codepen.io/TheNix/pen/KwKQGx
    "filters-2": {
        "title": "Filter Effects Module Level 2",
        "group": "fxtf",
        "properties": {
            "backdrop-filter": ["none", "url(#id)", "url(image.svg#id)", "blur(5px)", "brightness(0.5)", "contrast(150%)", "drop-shadow(15px 15px 15px black)", "grayscale(50%)", "hue-rotate(50deg)", "invert(50%)", "opacity(50%)", "sepia(50%)", "saturate(150%)", "grayscale(100%) sepia(100%)"],
        }
    },

    "pointerevents": {
        "title": "Pointer Events",
        "properties": {
            "touch-action": [
                              "auto",
                              "none",
                              "pan-x",
                              "pan-left",
                              "pan-right",
                              "pan-y",
                              "pan-up",
                              "pan-down",
                              "pan-x pan-y",
                              "pan-y pan-left",
                              "pan-left pan-up",
                              "pan-left pan-y",
                              "manipulation",
                              // https://bugs.chromium.org/p/chromium/issues/detail?id=626086
                              "pinch-zoom"
                            ]
        }
    },

    "css-will-change": {
        "title": "Will Change",
        "properties": {
            "will-change": ["auto", "scroll-position", "contents", "transform", "\\2010", "_foo", "--foo", "foo-bar"]
        }
    },

    "css3-break": {
        "title": "Fragmentation",
        "properties": {
            "break-after": ["any", "recto", "verso"],
            "break-before": ["any", "recto", "verso"],
            "break-inside": ["avoid-region"],
            "orphans": ["1", "2"],
            "widows": ["1", "2"]
        }
    },

    "css-logical-props": {
        "title": "Logical Properties",
        "properties": {
            "caption-side": ["block-start", "block-end", "inline-start", "inline-end"],
            "float": ["inline-start", "inline-end"],
            "clear": ["inline-start", "inline-end"],
            "text-align": ["start", "end"],
            "resize": ["block", "inline"],
            "inline-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "block-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "min-inline-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "min-block-size": ["20px", "15%", "auto", "fill", "min-content", "max-content", "fit-content"],
            "max-inline-size": ["20px", "15%", "none", "fill", "min-content", "max-content", "fit-content"],
            "max-block-size": ["20px", "15%", "none", "fill", "min-content", "max-content", "fit-content"],
            "offset-block-start": ["20px", "15%", "auto"],
            "offset-block-end": ["20px", "15%", "auto"],
            "offset-inline-start": ["20px", "15%", "auto"],
            "offset-inline-end": ["20px", "15%", "auto"],

            "margin-block-start": ["20px", "15%", "auto"],
            "margin-block-end": ["20px", "15%", "auto"],
            "margin-inline-start": ["20px", "15%", "auto"],
            "margin-inline-end": ["20px", "15%", "auto"],
            "padding-block-start": ["20px", "15%"],
            "padding-block-end": ["20px", "15%"],
            "padding-inline-start": ["20px", "15%"],
            "padding-inline-end": ["20px", "15%"],
            "border-block-start": ["20px solid blue"],
            "border-block-end": ["20px solid blue"],
            "border-inline-start": ["20px solid blue"],
            "border-inline-end": ["20px solid blue"],

            //旧版本
            "margin-before": ["20px", "15%", "auto"],
            "margin-after": ["20px", "15%", "auto"],
            "margin-start": ["20px", "15%", "auto"],
            "margin-end": ["20px", "15%", "auto"],
            "padding-before": ["20px", "15%"],
            "padding-after": ["20px", "15%"],
            "padding-start": ["20px", "15%"],
            "padding-end": ["20px", "15%"],
            "border-before": ["20px solid blue"],
            "border-after": ["20px solid blue"],
            "border-start": ["20px solid blue"],
            "border-end": ["20px solid blue"],

            "background-repeat": ["logical repeat-x", "logical repeat-x no-repeat"],
            "background-image-transform": ["logical", "physical", "rotate"],
            "border-image-transform": ["logical", "physical", "rotate"]
        },
        "values": {
            "properties": [
                "margin",
                "padding",
                "border-width",
                "border-color",
                "border-style"
            ],
            "logical": [
                "logical 10px 23% 3em 0",
                "logical red green blue yellow", //border-color
                "logical solid dotted dashed none" //border-style
            ]
        },
    },

    // https://drafts.csswg.org/cssom-view/#smooth-scrolling
    // https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
    "cssom-view": {
        "title": "CSSOM View Module",
        "properties": {
            "scroll-behavior": ["auto", "smooth"]
        }
    },

    // Blink bug: https://code.google.com/p/chromium/issues/detail?id=311234
    // Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=945584
    "css-scroll-snap": {
        "title": "CSS Scroll Snapping Change Proposal",
        "properties": {
            "scroll-snap-type": ["none", "mandatory", "proximity"],
            "scroll-snap-type-x": ["none", "mandatory", "proximity"],
            "scroll-snap-type-y": ["none", "mandatory", "proximity"],
            "scroll-snap-points-x": ["none", "repeat(100%)", "repeat(50px)", "repeat(calc(25px + 1%))"],
            "scroll-snap-points-y": ["none", "repeat(100%)", "repeat(50px)", "repeat(calc(25px + 1%))"],
            "scroll-snap-destination": ["left", "bottom", "20px -90px", "center bottom", "calc(10% + 20px) 40%", "calc(10% + 20px) calc(3 * 25px + 50%)", "top right 10px", "bottom 10px right 20px"],
            // scroll-snap-coordinate 支持多个值
            "scroll-snap-coordinate": ["none", "left", "bottom", "20px -90px", "center bottom", "200px calc(10% + 20px)", "calc(10% + 20px) 150%, 200px calc(10% + 20px)", "top right 10px", "bottom 10px right 20px", "50px 100px, 150px 100px, left 200px top 100px", "50% 100%, left top 100%, 200% 100%"]
        }
    },

    "css-snappoints": {
        "title": "CSS Scroll Snap Points Module Level 1",
        "properties": {
            "scroll-snap-type": ["none", "mandatory", "proximity x", "proximity y", "proximity block", "proximity inline", "proximity both", "proximity point"],
            "scroll-snap-padding": ["0", "13px", "3.68em", "12.321rem", "26vw", "92%", "calc(16% + 63px)", "3em 103px", "3em 0 28%", "3em 0 0 0"],
            "scroll-snap-margin": ["0", "13px", "3.68em", "12.321rem", "26vw", "calc(29px + 63px)", "18px 103px", "18px 0 0", "18px 0 0 0"],
            "scroll-snap-align": ["none", "start", "end", "center", "center none", "end center"],
            "scroll-snap-stop": ["normal", "always"]
        }
    },

    "css-round-display": {
        "title": "CSS Round Display Level 1",
        "properties": {
            "shape-inside": ["display"],
            "position": ["polar"],
            "polar-angle": ["0", "16deg", "-169deg", "1trun", "102grad"],
        }
    },


    // 参考 css-shapes 语法
    //https://code.google.com/p/chromium/issues/detail?id=416731
    //https://code.google.com/p/chromium/issues/detail?id=464242

    //https://bugs.chromium.org/p/chromium/issues/detail?id=637543
    /*
        motion-offset -> offset-distance
        motion-path -> offset-path
        motion-rotation -> offset-rotation
        motion -> offset
    */
    // Rename offset-rotation to be offset-rotate
    // https://github.com/w3c/fxtf-drafts/issues/70
    "motion-1": {
        "title": "Motion Path Module Level 1",
        "group": "fxtf",
        "properties": {
            "motion-path": ["none", "path('M 1 2 V 3')", "path(nonzero, 'M 1 2 V 3')", "path(evenodd, 'M 1 2 V 3')", "url(../images/foo.svg)", "polygon(0% 50%, 50% 100%, 0 100%)", "fill-box", "stroke-box", "view-box"],
            "motion-offset": ["0", "123px", "123vw", "18rem", "-200px", "30%", "unset"],
            "motion-rotation": ["auto", "0", "reverse", "-45deg", "auto 180deg", "reverse 45deg", "2turn reverse"],
            "motion": ["none 50% auto 400grad", "path('M 20 20 H 80 V 30') 0rad 100px", "10px 90deg reverse none", "path('M 1 2 V 3') 4px 5deg", "none 10px reverse 90deg", "url(../images/foo.svg) 0rad 100px"],
        }
    },

    "motion-2": {
        "title": "Motion Path Module Level 2",
        "group": "fxtf",
        "properties": {
            "offset-path": [
                "none",
                "path('M 1 2 V 3')",
                "url(../images/foo.svg)",
                "url(#myRect)",
                "polygon(0% 50%, 50% 100%, 0 100%)",
                "polygon(evenodd, 5em 13px, 76% 280px, 0 230px)",
                "fill-box", "stroke-box", "view-box",
                // <angle> and <size>
                // https://bugs.chromium.org/p/chromium/issues/detail?id=641245
                "ray(45deg)", "ray(180deg)", "ray(0deg)", "ray(-28deg)",
                "ray(39deg) closest-side", "ray(39deg) farthest-side", "ray(39deg) closest-corner", "ray(39deg) arthest-corner",
                 "ray(45deg contain)"
            ],
            "offset-distance": ["0", "123px", "123vw", "18rem", "-200px", "30%", "unset"],
            "offset-rotation": ["auto", "0", "reverse", "-45deg", "auto 180deg", "reverse 45deg", "2turn reverse"],
            // New
            "offset-position": [
                "auto", "right top", "right bottom", "left bottom", "center", "20% 92%",
                "bottom 10px right 20px", "bottom 10px right", "top right 10px"
            ],
            // New
            "offset-anchor": [
                "auto", "right top", "right bottom", "left bottom", "center", "20% 92%",
                "bottom 10px right 20px", "bottom 10px right", "top right 10px"
            ],
            "offset": ["none 50% auto 400grad", "path('M 20 20 H 80 V 30') 0rad 100px", "10px 90deg reverse none", "path('M 1 2 V 3') 4px 5deg", "none 10px reverse 90deg", "url(../images/foo.svg) 0rad 100px"],
        }
    },

    "css-device-adapt": {
        "title": "CSS Device Adaptation",
        "@rules": {
            "@viewport": [
                "@viewport"
            ]
        },
        "properties": {
            "width": ["auto", "320px", "63%", "320px auto", "device-width", "device-height", "extend-to-zoom", "extend-to-zoom 500px"],
            "height": ["auto", "320px", "63%", "320px auto", "device-width", "device-height", "extend-to-zoom", "extend-to-zoom 500px"],

            "min-width": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],
            "max-width": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],
            "min-height": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],
            "max-height": ["auto", "320px", "63%", "device-width", "device-height", "extend-to-zoom"],

            "zoom": ["auto", "2", "1.5", ".5", "63%"],
            "min-zoom": ["auto", "2", "1.5", ".5", "63%"],
            "max-zoom": ["auto", "2", "1.5", ".5", "63%"],
            "user-zoom": ["zoom", "fixed"],
            "orientation": ["auto", "portrait", "landscape"],
        }
    },

    //http://dev.w3.org/csswg/css-inline
    "css-size-adjust": {
        "title": "CSS Mobile Text Size Adjustment",
        "properties": {
            "text-size-adjust": ["auto", "none", "100%", "32.56%", "189%"]
        }
    },

    "css-inline": {
        "title": "CSS Inline Layout Module Level 3",
        "properties": {
            "dominant-baseline": ["auto",  "text-bottom", "alphabetic", "central", "mathematical", "hanging", "text-top"],
            "alignment-baseline": ["baseline", "text-bottom", "alphabetic", "middle", "central", "mathematical", "text-top", "bottom", "center", "top"],
            "baseline-shift": [ "0", "28px", "-28px", "3.2em", "52%", "sub", "super"],
            // normal | [<number> <integer>?]
            "initial-letter": ["normal", "3", "3 1", "1 2", "2.51 3"],
            "initial-letter-align": ["alphabetic", "ideographic", "hebrew", "hanging", "border-box", "border-box ideographic"],
            "initial-letter-wrap": ["none", "first", "all", "grid", "9em", "62%"]
          }
    },

    "css-line-grid": {
        "title": "CSS Line Grid Module Level 1",
        "properties": {
            "line-grid": ["match-parent", "create", "custom"],
            "line-snap": ["none", "baseline", "contain"],
            "box-snap": ["none", "block-start", "block-end", "center", "baseline", "last-baseline"],
            //非规范属性 http://trac.webkit.org/changeset/108133
            "line-align": ["none", "edges"]

        }
    },

    //https://fullscreen.spec.whatwg.org/#::backdrop-pseudo-element
    //Demo: http://demo.agektmr.com/dialog/
    "fullscreen": {
        "title": "Fullscreen API",
        "selectors": {
            "::backdrop": ["::backdrop"],
            ":fullscreen": [":fullscreen", ":fullscreen::backdrop"],
            // Old
            ":full-screen": [":full-screen", ":full-screen::backdrop"]
        }
    },

    //
    "css-overflow": {
        "title": "Overflow",
        "properties": {
            "overflow-x": ["visible", "hidden", "clip", "scroll", "auto", "-moz-hidden-unscrollable"],
            "overflow-y": ["visible", "hidden", "clip", "scroll", "auto", "-moz-hidden-unscrollable"],
            "overflow-x": ["visible", "hidden", "clip", "scroll", "auto", "-moz-hidden-unscrollable"],
            "overflow-x": ["visible", "hidden", "clip", "scroll", "auto", "-moz-hidden-unscrollable"],
            //moz only
            "overflow-clip-box": ["content-box", "padding-box"],
            "max-lines": ["none", "3"]
        },
        "selectors": {
            "::nth-fragment()": ["::nth-fragment(2)", "::nth-fragment(2n)", "::nth-fragment(-n+3)", "::nth-fragment(2) :link"],
        }
    },

    //Blink: https://code.google.com/p/chromium/issues/detail?id=457718
    "css-lists-3": {
        "title": "CSS Lists and Counters Module Level 3",
        "properties": {
            "display": ["inline-list-item"],
            "position": ["marker"],
            "marker-side": ["list-item", "list-container"]
        },
        "selectors": {
            "::marker": ["li::marker", "p.note::marker"]
        }
    },

    "css-pseudo": {
        "title": "CSS Pseudo-Elements Module Level 4",
        "selectors": {
            "::first-line": [".foo::first-line"],
            "::first-letter": [".foo::first-letter"],
            "::before": [".foo::before"],
            "::after": [".foo::after"],
            "::selection": [".foo::selection"],
            // Add in https://github.com/w3c/csswg-drafts/commit/cd0d328d6210e078c01d05f5afe1348c6cb58af0
            "::inactive-selection": [".foo::inactive-selection"],
            "::spelling-error": [".foo::spelling-error"],
            "::grammar-error": [".foo::grammar-error"],
            "::marker": ["li::marker"],
            "::placeholder": ["input::placeholder"]
        }
    },
    // Old spec http://disruptive-innovations.com/zoo/cssvariables/
    "css-variables": {
        "title": "CSS Custom Properties for Cascading Variables Module Level 1",
        "properties": {
            "--foo": ["16px", "26%", "center", "'string'"]
        },
        "values": {
            "properties": [
                "all",
                "color",
                "margin",
                "padding",
                "background",
                "border-width",
                "border-color",
                "border-style",
                "box-shadow",
                "text-shadow",
                "content"
            ],
            "var()": [
                "var(--foo)",
                "var(--main-color, blue)",
                "calc(var(--gap) * 1px)",
                "calc( var(--gap) * calc(100% - 3em) )",
                "linear-gradient(to top, var(--main-color), white)",
                "'var(--foo)'",
                "\"var(--foo)\""
            ]
        },
    },

    // https://drafts.csswg.org/css-containment/
    // https://crbug.com/561713  M-49 fixed
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1150081
    "css-containment": {
        "title": "CSS Containment Module Level 3",
        "properties": {
            // Only support paint
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1170781
            "contain": ["none", "strict", "content", "size", "layout", "style", "paint", "size layout style paint", "layout style paint", "layout style size", "style paint", "layout paint", "layout style"],
        }
    },

    // http://tabatkins.github.io/specs/css-font-display/
    "css-font-display": {
        "title": "CSS Font Rendering Controls Module Level 1",
        "properties": {
            "font-display": ["auto", "block", "swap", "fallback", "optional"]
        }
    },

    "css-snap-size": {
        "title": "CSS Snap Size",
        // https://code.google.com/p/chromium/issues/detail?id=586413
        "properties": {
            "snap-width": ["0px", "0", "28px", "3.56em", "19vh"],
            "snap-height": ["0px", "0", "19vh", "28px 38", "28px 1", "28px 100"],
        }
    },

    "css-apply-rule": {
        "title": "CSS @apply Rule",
        // https://bugs.chromium.org/p/chromium/issues/detail?id=586974
        "properties": {
            "--mixin": ["{foo}", "{color: red; border: 1px solid blue;}"],
        },
        "@rules": {
            "@apply": ["@apply --mixin;", "@apply --foo-styles;"],
        }
    },

    // https://www.w3.org/TR/2016/WD-appmanifest-20160315/#the-display-mode-media-feature
    "css-display-mode": {
        "title": "The 'display-mode' media feature",
        // https://bugs.chromium.org/p/chromium/issues/detail?id=586974
        "Media queries": {
            "display-mode": ["(display-mode: browser)", "(display-mode: fullscreen)", "(display-mode: standalone)", "(display-mode: minimal-ui)", "all and (display-mode: browser)"],
        }
    },

    // https://drafts.csswg.org/css-rhythm/
    "css-rhythm": {
        "title": "CSS Rhythmic Sizing",
        "properties": {
            "line-height-step": ["none", "0", "20px", "18pt", "8em", "2vw", "3vh"],
            "block-step-size": ["none", "0", "20px", "18pt", "8em", "2vw", "3vh"],
            "block-step-insert": ["margin", "padding"],
            "block-step-align": ["auto", "center", "start", "end"],
            "block-step-round": ["up", "down", "nearest"],
        },
    },
};
