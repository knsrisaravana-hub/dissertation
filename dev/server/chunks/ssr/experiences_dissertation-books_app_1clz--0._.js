module.exports = [
"[project]/experiences/dissertation-books/app/ProgressLibrary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressLibrary",
    ()=>ProgressLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$ShelfEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/ShelfEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/site-config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ArrowIcon({ direction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": "true",
        className: `arrow-icon arrow-icon--${direction}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function ProgressLibrary() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("browse");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Preparing the complete catalog");
    const activeBook = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"][activeIndex];
    const selectedBook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedIndex === null ? null : __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"][selectedIndex], [
        selectedIndex
    ]);
    const isFocused = mode !== "browse";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        let engine = null;
        async function start() {
            if (!canvasRef.current) return;
            await document.fonts.ready;
            if (cancelled || !canvasRef.current) return;
            engine = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$ShelfEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShelfEngine"](canvasRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"], {
                onActiveIndex: setActiveIndex,
                onMode: (nextMode, index)=>{
                    setMode(nextMode);
                    setSelectedIndex(index);
                },
                onStatus: setStatus,
                onReady: ()=>setReady(true)
            });
            engineRef.current = engine;
        }
        void start();
        return ()=>{
            cancelled = true;
            engine?.dispose();
            engineRef.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `press-experience ${ready ? "is-ready" : ""} ${isFocused ? "is-focused" : "is-browsing"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "shelf-canvas",
                "data-testid": "shelf-canvas",
                role: "application",
                tabIndex: 0,
                "aria-label": `Interactive three-dimensional shelf of ${__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].length} books. Drag or use the arrow keys to browse. Press Enter to inspect the selected book.`
            }, void 0, false, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "site-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wordmark",
                        "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].wordmark}, ${__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].collectionName}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].wordmark
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "wordmark__divider"
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].collectionName
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "edition-mark",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].length,
                                        " VOLUMES"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "01 CONTINUOUS SHELF"
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "browse-caption",
                "aria-hidden": isFocused,
                "data-testid": "browse-caption",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: String(activeIndex + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow__line"
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: String(__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].length).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: activeBook.shortTitle
                    }, void 0, false, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "browse-caption__author",
                        children: activeBook.author
                    }, void 0, false, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "inspect-button",
                        "data-testid": "inspect-active",
                        disabled: isFocused,
                        onClick: ()=>engineRef.current?.focusBook(activeIndex),
                        "aria-label": `Inspect ${activeBook.title}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Inspect volume"
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "shelf-arrow shelf-arrow--left",
                "data-testid": "browse-previous",
                "aria-label": "Previous book",
                disabled: isFocused || activeIndex === 0,
                onClick: ()=>engineRef.current?.browseBy(-1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                    direction: "left"
                }, void 0, false, {
                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "shelf-arrow shelf-arrow--right",
                "data-testid": "browse-next",
                "aria-label": "Next book",
                disabled: isFocused || activeIndex === __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].length - 1,
                onClick: ()=>engineRef.current?.browseBy(1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                    direction: "right"
                }, void 0, false, {
                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "shelf-index",
                "aria-label": "Catalog position",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shelf-index__ticks",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].map((book, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: index === activeIndex ? "is-active" : "",
                                "aria-label": `Browse to ${book.title}`,
                                "aria-current": index === activeIndex ? "true" : undefined,
                                disabled: isFocused,
                                onClick: ()=>engineRef.current?.browseTo(index),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            }, book.id, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "input-hint",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "DRAG"
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SCROLL"
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "ARROW KEYS"
                            }, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "book-details",
                "aria-hidden": !isFocused,
                "aria-label": selectedBook ? `Details for ${selectedBook.title}` : "Book details",
                "data-testid": "book-details",
                children: selectedBook ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "book-details__inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "back-button",
                            "data-testid": "return-to-shelf",
                            onClick: ()=>engineRef.current?.returnToShelf(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                    direction: "left"
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Return to shelf"
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "book-details__position",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: String(selectedIndex + 1).padStart(2, "0")
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: String(__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].length).padStart(2, "0")
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "book-details__copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].editionEyebrow
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: selectedBook.title
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "book-details__author",
                                    children: selectedBook.author
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "book-details__description",
                                    children: selectedBook.description
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "“",
                                                selectedBook.quote,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                            children: selectedBook.quoteBy
                                        }, void 0, false, {
                                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Format"
                                                }, void 0, false, {
                                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: selectedBook.format
                                                }, void 0, false, {
                                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Availability"
                                                }, void 0, false, {
                                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: selectedBook.availability
                                                }, void 0, false, {
                                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "official-link",
                                    "data-testid": "official-link",
                                    href: selectedBook.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedBook.linkLabel ?? __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].bookLinkLabel
                                        }, void 0, false, {
                                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "focus-controls",
                            "aria-label": "Inspection controls",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Drag to orbit"
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Pinch or scroll to zoom"
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "data-testid": "reset-view",
                                    onClick: ()=>engineRef.current?.resetFocusView(),
                                    children: "Reset view"
                                }, void 0, false, {
                                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "experience-status",
                role: "status",
                "aria-live": "polite",
                "data-testid": "experience-status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "experience-status__dot"
                    }, void 0, false, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-screen",
                "aria-hidden": ready,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loading-screen__mark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Assembling ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalog"].length,
                            " volumes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "independent-note",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].independentNote
            }, void 0, false, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sr-only",
                "aria-live": "polite",
                children: isFocused && selectedBook ? `Inspecting ${selectedBook.title} by ${selectedBook.author}.` : `Selected ${activeBook.title} by ${activeBook.author}.`
            }, void 0, false, {
                fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/experiences/dissertation-books/app/ProgressLibrary.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/experiences/dissertation-books/app/ShelfEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShelfEngine",
    ()=>ShelfEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/examples/jsm/controls/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$OBJLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/examples/jsm/loaders/OBJLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/book-motion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$cover$2d$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/cover-art.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$stripe$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/stripe-assets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$stripe$2d$foil$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/stripe-foil.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/site-config.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const shelfTop = 0.34;
const browseCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.42, 6.65);
const browseTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.28, 0.15);
const pageColor = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#e9dfca");
const shelfColor = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#5a4132");
const clamp = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].clamp;
const focusInDuration = 0.46;
const focusOutDuration = 0.34;
const desktopDetailWidthRatio = 0.41;
const compactDetailWidthRatio = 0.48;
const desktopDetailMaxWidth = 620;
const compactDetailMaxWidth = 570;
const desktopFocusX = -0.58;
const desktopFocusZ = 1.66;
const desktopFocusScale = 1.08;
const mobileFocusZ = 1.4;
const mobileFocusScale = 0.92;
const inspectionIdleLift = 0.014;
const inspectionIdlePitch = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(0.28);
const inspectionIdleYaw = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(0.48);
const inspectionIdleRoll = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(0.22);
// Downloaded Stripe OBJ basis: X = thickness, Y = up/height, Z = width,
// and the front cover is on +X. Rotating -90° maps that cover to world +Z,
// toward the browse camera.
const stripeBookCoverFacingRotationY = -Math.PI / 2;
function damp(current, target, lambda, delta) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].damp(current, target, lambda, delta);
}
function easeOutCubic(value) {
    const t = 1 - clamp(value, 0, 1);
    return 1 - t * t * t;
}
function toTexture(canvas, renderer, anisotropy = 8) {
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    texture.anisotropy = Math.min(anisotropy, renderer.capabilities.getMaxAnisotropy());
    texture.generateMipmaps = true;
    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
    return texture;
}
function createLivingMaterial(color) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
        transparent: true,
        depthWrite: false,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        uniforms: {
            uTime: {
                value: 0
            },
            uStrength: {
                value: 0
            },
            uColor: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](color)
            }
        },
        vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uStrength;
      uniform vec3 uColor;

      void main() {
        float diagonal = fract(vUv.x * 0.72 + vUv.y * 0.31 + uTime * 0.045);
        float sheen = smoothstep(0.44, 0.5, diagonal) * (1.0 - smoothstep(0.5, 0.57, diagonal));
        float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        float alpha = sheen * edge * uStrength * 0.32;
        gl_FragColor = vec4(uColor, alpha);
      }
    `
    });
}
class ShelfEngine {
    canvas;
    booksData;
    callbacks;
    renderer;
    scene = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
    camera;
    controls;
    shelfGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    shelfFurniture = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    runtimeBooks = [];
    pickTargets = [];
    raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Raycaster"]();
    pointer = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](10, 10);
    animationFrame = 0;
    resizeObserver;
    mode = "browse";
    selectedIndex = null;
    activeIndex = 0;
    presentedIndex = 0;
    pendingFocusIndex = null;
    browseMotionPhase = "idle";
    browseMotionProgress = 0;
    motionBookIndex = null;
    motionLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMotionLayout"])([]);
    collisionRejects = 0;
    lastCollisionPair = null;
    scrollIndex = 0;
    targetScrollIndex = 0;
    focusProgress = 0;
    lastInputTime = 0;
    pointerDown = false;
    pointerId = null;
    pointerStartX = 0;
    pointerLastX = 0;
    pointerTravel = 0;
    reducedMotion = false;
    assetCount = 0;
    assetFailures = 0;
    stripeTextureCache = new Map();
    stripeTextures = new Set();
    stripeGeometry = null;
    stripeGeometrySize = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    focusCameraPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    focusCameraTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    responsiveBrowseCamera = browseCamera.clone();
    lastTimestamp = 0;
    lastDiagnosticsAt = 0;
    isDisposed = false;
    constructor(canvas, books, callbacks){
        this.canvas = canvas;
        this.booksData = books;
        this.callbacks = callbacks;
        this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            canvas,
            antialias: true,
            powerPreference: "high-performance"
        });
        this.renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        this.renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
        this.renderer.toneMappingExposure = 1.03;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFShadowMap"];
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](27, 1, 0.08, 80);
        this.camera.position.copy(browseCamera);
        this.camera.lookAt(browseTarget);
        this.controls = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"](this.camera, this.canvas);
        this.controls.enabled = false;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.075;
        this.controls.enablePan = true;
        this.controls.screenSpacePanning = true;
        this.controls.enableZoom = true;
        this.controls.minDistance = 2.7;
        this.controls.maxDistance = 7.2;
        this.controls.minPolarAngle = Math.PI * 0.22;
        this.controls.maxPolarAngle = Math.PI * 0.78;
        this.resizeObserver = new ResizeObserver(this.handleResize);
        this.setupScene();
        this.createBooks();
        this.bindEvents();
        this.resizeObserver.observe(canvas);
        this.handleResize();
        this.callbacks.onReady();
        this.callbacks.onStatus(`${this.booksData.length} volumes ready`);
        this.animate();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].enableOptionalStripeArchive) {
            void this.loadStripeAssets();
        }
        window.__PRESS_LIBRARY__ = {
            diagnostics: ()=>this.getDiagnostics(),
            focus: (index)=>this.focusBook(index),
            browse: (index)=>this.browseTo(index),
            returnToShelf: ()=>this.returnToShelf()
        };
    }
    setupScene() {
        this.scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#eee8db");
        this.scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fog"]("#eee8db", 10, 26);
        const hemisphere = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HemisphereLight"]("#fff8ea", "#6e5848", 2.4);
        this.scene.add(hemisphere);
        const key = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#fff6e7", 4.6);
        key.position.set(-4.2, 7.4, 5.5);
        key.castShadow = true;
        key.shadow.mapSize.set(window.innerWidth < 700 ? 1024 : 2048, window.innerWidth < 700 ? 1024 : 2048);
        key.shadow.camera.left = -8;
        key.shadow.camera.right = 8;
        key.shadow.camera.top = 6;
        key.shadow.camera.bottom = -2;
        key.shadow.camera.near = 0.5;
        key.shadow.camera.far = 22;
        key.shadow.bias = -0.0005;
        this.scene.add(key);
        const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#c8d5e5", 2.1);
        rim.position.set(5, 3, -4);
        this.scene.add(rim);
        const warmBounce = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"]("#d79b72", 1.2, 10, 2);
        warmBounce.position.set(-3, 0.4, 3.2);
        this.scene.add(warmBounce);
        const wall = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](34, 18), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: "#eee8db",
            roughness: 1,
            metalness: 0
        }));
        wall.position.set(0, 5, -3.2);
        wall.receiveShadow = true;
        this.scene.add(wall);
        const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](36, 18), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: "#e7dfd0",
            roughness: 0.94,
            metalness: 0
        }));
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.24;
        ground.receiveShadow = true;
        this.scene.add(ground);
        this.scene.add(this.shelfGroup);
        this.shelfGroup.add(this.shelfFurniture);
    }
    createBooks() {
        let cursor = 0;
        const gap = 0.045;
        this.booksData.forEach((book, index)=>{
            cursor += book.thickness * 0.5;
            const runtime = this.createBook(book, index, cursor);
            this.runtimeBooks.push(runtime);
            this.shelfGroup.add(runtime.slot);
            if (book.coverImage) {
                void this.loadCustomCover(runtime, book.coverImage);
            }
            cursor += book.thickness * 0.5 + gap;
        });
        this.motionLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMotionLayout"])(this.runtimeBooks.map((book)=>({
                width: book.width,
                thickness: book.data.thickness
            })));
        this.runtimeBooks.forEach((book, index)=>{
            this.commitBookPose(book, index === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presentedBookPose"])(this.motionLayout) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shelvedBookPose"])(this.motionLayout), false);
        });
        const shelfWidth = cursor + 8;
        const shelfGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](shelfWidth, 0.22, 1.72, 4, 0.045);
        const shelfMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: shelfColor,
            roughness: 0.62,
            metalness: 0.03
        });
        const shelf = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](shelfGeometry, shelfMaterial);
        shelf.name = "continuousShelf";
        shelf.position.set(cursor * 0.5, shelfTop - 0.14, 0);
        shelf.castShadow = true;
        shelf.receiveShadow = true;
        this.shelfFurniture.add(shelf);
        const shelfEdge = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](shelfWidth, 0.12, 0.16, 3, 0.025), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
            color: "#4b3429",
            roughness: 0.46,
            clearcoat: 0.14,
            clearcoatRoughness: 0.5
        }));
        shelfEdge.position.set(cursor * 0.5, shelfTop - 0.08, 0.85);
        shelfEdge.castShadow = true;
        this.shelfFurniture.add(shelfEdge);
    }
    createBook(book, index, x) {
        const width = 1.31 + (index % 5 - 2) * 0.018;
        const depth = book.thickness;
        const slot = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        slot.name = `bookSlot:${book.id}`;
        slot.position.set(x, shelfTop + book.height * 0.5, 0.04);
        const content = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        content.name = `bookPresentation:${book.id}`;
        slot.add(content);
        const pose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shelvedBookPose"])(this.motionLayout);
        content.position.set(pose.x, 0, pose.z);
        content.rotation.y = pose.yaw;
        content.scale.setScalar(pose.scale);
        const inspectionIdle = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        inspectionIdle.name = `bookInspectionIdle:${book.id}`;
        content.add(inspectionIdle);
        const physical = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        physical.name = `proceduralBook:${book.id}`;
        inspectionIdle.add(physical);
        const assetHolder = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        assetHolder.name = `stripePressBook:${book.id}`;
        inspectionIdle.add(assetHolder);
        const boardMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
            color: book.cover,
            roughness: 0.78,
            metalness: 0,
            sheen: 0.36,
            sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](book.ink),
            sheenRoughness: 0.82,
            clearcoat: book.motif === "gather" ? 0.12 : 0.03,
            clearcoatRoughness: 0.7
        });
        const paperMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: pageColor,
            roughness: 0.88,
            metalness: 0
        });
        const pageBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](width - 0.075, book.height - 0.105, Math.max(0.08, depth - 0.052), 3, 0.018), paperMaterial);
        pageBlock.name = "pageBlock";
        pageBlock.castShadow = true;
        pageBlock.receiveShadow = true;
        physical.add(pageBlock);
        const boardGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](width, book.height, 0.034, 4, 0.025);
        const frontBoard = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](boardGeometry, boardMaterial);
        frontBoard.name = "frontBoard";
        frontBoard.position.z = depth * 0.5;
        frontBoard.castShadow = true;
        frontBoard.receiveShadow = true;
        physical.add(frontBoard);
        const backBoard = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](boardGeometry, boardMaterial);
        backBoard.name = "backBoard";
        backBoard.position.z = -depth * 0.5;
        backBoard.castShadow = true;
        backBoard.receiveShadow = true;
        physical.add(backBoard);
        const spine = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.055, book.height - 0.01, depth + 0.012, 3, 0.018), boardMaterial);
        spine.name = "spine";
        spine.position.x = -width * 0.5 + 0.022;
        spine.castShadow = true;
        physical.add(spine);
        const headbandMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
            color: book.accent,
            roughness: 0.62,
            metalness: 0.2
        });
        const headbandGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.017, 0.017, width - 0.1, 10);
        headbandGeometry.rotateZ(Math.PI / 2);
        const headbandTop = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](headbandGeometry, headbandMaterial);
        headbandTop.position.set(0, book.height * 0.5 - 0.045, 0);
        physical.add(headbandTop);
        const headbandBottom = headbandTop.clone();
        headbandBottom.position.y = -book.height * 0.5 + 0.045;
        physical.add(headbandBottom);
        const frontTexture = toTexture((0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$cover$2d$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFrontCover"])(book), this.renderer);
        const titleTexture = toTexture((0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$cover$2d$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTitleDecal"])(book), this.renderer);
        const spineTexture = toTexture((0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$cover$2d$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSpineCover"])(book), this.renderer, 4);
        const backTexture = toTexture((0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$cover$2d$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBackCover"])(book), this.renderer);
        const textures = [
            frontTexture,
            titleTexture,
            spineTexture,
            backTexture
        ];
        const frontSurface = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](width - 0.065, book.height - 0.065), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
            map: frontTexture,
            roughness: 0.66,
            metalness: 0.02,
            clearcoat: book.motif === "gather" ? 0.18 : 0.05,
            clearcoatRoughness: 0.48
        }));
        frontSurface.name = "frontArtwork";
        frontSurface.position.z = depth * 0.5 + 0.019;
        physical.add(frontSurface);
        const titleDecal = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](width - 0.065, book.height - 0.065), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: titleTexture,
            transparent: true,
            alphaTest: 0.02,
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -2
        }));
        titleDecal.name = "accurateTitleDecal";
        titleDecal.position.z = depth * 0.5 + 0.026;
        titleDecal.visible = false;
        inspectionIdle.add(titleDecal);
        const backSurface = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](width - 0.065, book.height - 0.065), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            map: backTexture,
            roughness: 0.72
        }));
        backSurface.name = "backArtwork";
        backSurface.position.z = -depth * 0.5 - 0.019;
        backSurface.rotation.y = Math.PI;
        physical.add(backSurface);
        const spineSurface = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](depth - 0.02, book.height - 0.04), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
            map: spineTexture,
            roughness: 0.68,
            metalness: 0.015
        }));
        spineSurface.name = "spineArtwork";
        spineSurface.rotation.y = -Math.PI / 2;
        spineSurface.position.x = -width * 0.5 - 0.019;
        physical.add(spineSurface);
        let livingMaterial;
        if (book.living) {
            livingMaterial = createLivingMaterial(book.accent);
            const shimmer = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](width - 0.07, book.height - 0.07), livingMaterial);
            shimmer.name = "livingCoverShimmer";
            shimmer.position.z = depth * 0.5 + 0.034;
            inspectionIdle.add(shimmer);
        }
        const pickProxy = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](width, book.height, depth + 0.07), new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            transparent: true,
            opacity: 0,
            depthWrite: false
        }));
        pickProxy.name = `pick:${book.id}`;
        pickProxy.userData.bookIndex = index;
        inspectionIdle.add(pickProxy);
        this.pickTargets.push(pickProxy);
        return {
            data: book,
            index,
            slot,
            content,
            inspectionIdle,
            physical,
            assetHolder,
            frontSurface,
            titleDecal,
            pickProxy,
            livingMaterial,
            x,
            width,
            pose,
            hover: 0,
            targetHover: 0,
            idleAmount: 0,
            textures
        };
    }
    bindEvents() {
        this.canvas.addEventListener("wheel", this.handleWheel, {
            passive: false
        });
        this.canvas.addEventListener("pointerdown", this.handlePointerDown);
        this.canvas.addEventListener("pointermove", this.handlePointerMove);
        this.canvas.addEventListener("pointerup", this.handlePointerUp);
        this.canvas.addEventListener("pointercancel", this.handlePointerCancel);
        this.canvas.addEventListener("pointerleave", this.handlePointerLeave);
        this.canvas.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("blur", this.handleWindowBlur);
    }
    handleWheel = (event)=>{
        if (this.mode !== "browse") return;
        event.preventDefault();
        this.pendingFocusIndex = null;
        const dominant = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
        this.targetScrollIndex = clamp(this.targetScrollIndex + dominant * 0.0024, 0, this.runtimeBooks.length - 1);
        this.lastInputTime = performance.now();
    };
    handlePointerDown = (event)=>{
        if (this.mode !== "browse") return;
        this.pointerDown = true;
        this.pointerId = event.pointerId;
        this.pointerStartX = event.clientX;
        this.pointerLastX = event.clientX;
        this.pointerTravel = 0;
        this.canvas.setPointerCapture(event.pointerId);
    };
    handlePointerMove = (event)=>{
        this.updatePointer(event);
        if (this.mode !== "browse") return;
        if (this.pointerDown && event.pointerId === this.pointerId) {
            this.pendingFocusIndex = null;
            const delta = event.clientX - this.pointerLastX;
            this.pointerLastX = event.clientX;
            this.pointerTravel += Math.abs(delta);
            this.targetScrollIndex = clamp(this.targetScrollIndex - delta / Math.max(105, this.canvas.clientWidth * 0.11), 0, this.runtimeBooks.length - 1);
            this.lastInputTime = performance.now();
            this.canvas.classList.add("is-dragging");
            return;
        }
        this.updateHover();
    };
    handlePointerUp = (event)=>{
        if (event.pointerId !== this.pointerId) return;
        const wasClick = this.pointerTravel < 7 && Math.abs(event.clientX - this.pointerStartX) < 7;
        this.pointerDown = false;
        this.pointerId = null;
        this.canvas.classList.remove("is-dragging");
        if (this.canvas.hasPointerCapture(event.pointerId)) {
            this.canvas.releasePointerCapture(event.pointerId);
        }
        if (this.mode === "browse" && wasClick) {
            this.updatePointer(event);
            const hit = this.raycastBook();
            if (hit !== null) this.focusBook(hit);
        }
    };
    handlePointerCancel = (event)=>{
        if (event.pointerId !== this.pointerId) return;
        this.pointerDown = false;
        this.pointerId = null;
        this.canvas.classList.remove("is-dragging");
    };
    handlePointerLeave = ()=>{
        if (!this.pointerDown) {
            this.runtimeBooks.forEach((book)=>{
                book.targetHover = 0;
            });
            this.canvas.style.cursor = "grab";
        }
    };
    handleWindowBlur = ()=>{
        this.pointerDown = false;
        this.pointerId = null;
        this.canvas.classList.remove("is-dragging");
    };
    handleKeyDown = (event)=>{
        if (event.key === "Escape") {
            this.returnToShelf();
            return;
        }
        if ((event.key === "r" || event.key === "R") && this.mode === "inspect") {
            this.resetFocusView();
            return;
        }
        if (this.mode !== "browse") return;
        if (event.key === "ArrowRight") {
            event.preventDefault();
            this.browseBy(1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            this.browseBy(-1);
        } else if (event.key === "Home") {
            event.preventDefault();
            this.browseTo(0);
        } else if (event.key === "End") {
            event.preventDefault();
            this.browseTo(this.runtimeBooks.length - 1);
        } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.focusBook(this.activeIndex);
        }
    };
    updatePointer(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.pointer.x = (event.clientX - rect.left) / rect.width * 2 - 1;
        this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }
    raycastBook() {
        this.raycaster.setFromCamera(this.pointer, this.camera);
        const hit = this.raycaster.intersectObjects(this.pickTargets, false)[0];
        return typeof hit?.object.userData.bookIndex === "number" ? hit.object.userData.bookIndex : null;
    }
    updateHover() {
        const hit = this.raycastBook();
        this.runtimeBooks.forEach((book)=>{
            book.targetHover = book.index === hit ? 1 : 0;
        });
        this.canvas.style.cursor = hit === null ? "grab" : "pointer";
    }
    xAtIndex(index) {
        const lower = Math.floor(index);
        const upper = Math.min(this.runtimeBooks.length - 1, Math.ceil(index));
        const fraction = index - lower;
        return __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(this.runtimeBooks[lower]?.x ?? 0, this.runtimeBooks[upper]?.x ?? 0, fraction);
    }
    footprintFor(book, pose = book.pose) {
        return {
            id: book.data.id,
            x: book.x + pose.x,
            z: book.slot.position.z + pose.z,
            yaw: pose.yaw,
            scale: pose.scale,
            width: book.width,
            thickness: book.data.thickness
        };
    }
    collisionFor(book, pose) {
        const proposed = this.footprintFor(book, pose);
        return this.runtimeBooks.find((other)=>other !== book && (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bookFootprintsOverlap"])(proposed, this.footprintFor(other), this.motionLayout.collisionMargin)) ?? null;
    }
    commitBookPose(book, pose, guardCollision = true) {
        if (guardCollision) {
            const collidedWith = this.collisionFor(book, pose);
            if (collidedWith) {
                this.collisionRejects += 1;
                this.lastCollisionPair = [
                    book.data.id,
                    collidedWith.data.id
                ];
                return false;
            }
        }
        book.pose = {
            ...pose
        };
        book.content.position.x = pose.x;
        book.content.position.z = pose.z;
        book.content.rotation.y = pose.yaw;
        book.content.scale.setScalar(pose.scale);
        return true;
    }
    beginFocus(index) {
        if (this.mode !== "browse" || this.browseMotionPhase !== "idle" || this.presentedIndex !== index) {
            return;
        }
        this.pendingFocusIndex = null;
        this.selectedIndex = index;
        this.focusProgress = 0;
        this.mode = "focusing";
        this.runtimeBooks.forEach((book)=>{
            book.targetHover = 0;
        });
        this.callbacks.onMode(this.mode, index);
        this.callbacks.onStatus(`Opening ${this.runtimeBooks[index].data.shortTitle}`);
    }
    updateBrowseMotion(delta) {
        if (this.browseMotionPhase === "idle") {
            if (this.presentedIndex === this.activeIndex) {
                if (this.pendingFocusIndex === this.activeIndex) {
                    this.beginFocus(this.activeIndex);
                }
                return;
            }
            this.motionBookIndex = this.presentedIndex;
            this.browseMotionPhase = this.motionBookIndex === null ? "extract-next" : "retreat-current";
            if (this.motionBookIndex === null) {
                this.motionBookIndex = this.activeIndex;
            }
            this.browseMotionProgress = 0;
        }
        const phase = this.browseMotionPhase;
        const motionIndex = this.motionBookIndex;
        if (motionIndex === null) return;
        const duration = this.reducedMotion ? Math.max(0.055, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browsePhaseDuration"][phase] * 0.45) : __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browsePhaseDuration"][phase];
        const nextProgress = clamp(this.browseMotionProgress + delta / duration, 0, 1);
        const movingBook = this.runtimeBooks[motionIndex];
        const proposedPose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browseMotionPose"])(phase, nextProgress, this.motionLayout);
        if (!this.commitBookPose(movingBook, proposedPose)) return;
        this.browseMotionProgress = nextProgress;
        if (nextProgress < 1) return;
        this.browseMotionProgress = 0;
        switch(phase){
            case "retreat-current":
                this.browseMotionPhase = "turn-current";
                break;
            case "turn-current":
                this.browseMotionPhase = "shelve-current";
                break;
            case "shelve-current":
                this.presentedIndex = null;
                this.motionBookIndex = this.activeIndex;
                this.browseMotionPhase = "extract-next";
                break;
            case "extract-next":
                this.browseMotionPhase = "turn-next";
                break;
            case "turn-next":
                this.browseMotionPhase = "settle-next";
                break;
            case "settle-next":
                this.presentedIndex = motionIndex;
                this.motionBookIndex = null;
                this.browseMotionPhase = "idle";
                if (this.pendingFocusIndex === this.presentedIndex) {
                    this.beginFocus(this.presentedIndex);
                }
                break;
        }
    }
    animate = ()=>{
        if (this.isDisposed) return;
        this.animationFrame = requestAnimationFrame(this.animate);
        const timestamp = performance.now();
        const elapsed = timestamp / 1000;
        const delta = clamp((timestamp - this.lastTimestamp) / 1000 || 1 / 60, 0, 0.05);
        this.lastTimestamp = timestamp;
        this.updateState(delta, timestamp);
        this.updateBooks(delta, elapsed);
        if (this.controls.enabled) this.controls.update();
        this.renderer.render(this.scene, this.camera);
        if (timestamp - this.lastDiagnosticsAt > 500) {
            const diagnostics = this.getDiagnostics();
            this.canvas.dataset.drawCalls = String(diagnostics.drawCalls);
            this.canvas.dataset.triangles = String(diagnostics.triangles);
            this.canvas.dataset.geometries = String(diagnostics.geometries);
            this.canvas.dataset.textures = String(diagnostics.textures);
            this.canvas.dataset.stripeAssets = String(diagnostics.stripeAssetsLoaded);
            this.canvas.dataset.pixelRatio = String(diagnostics.pixelRatio);
            this.canvas.dataset.motionPhase = diagnostics.motionPhase;
            this.canvas.dataset.collisionFree = String(diagnostics.currentCollision === null);
            this.canvas.dataset.collisionRejects = String(diagnostics.collisionRejects);
            this.lastDiagnosticsAt = timestamp;
        }
    };
    updateState(delta, timestamp) {
        if (this.mode === "browse") {
            if (!this.pointerDown && timestamp - this.lastInputTime > 150) {
                this.targetScrollIndex = damp(this.targetScrollIndex, Math.round(this.targetScrollIndex), this.reducedMotion ? 18 : 8.5, delta);
            }
            this.scrollIndex = damp(this.scrollIndex, this.targetScrollIndex, this.reducedMotion ? 20 : 10, delta);
            this.focusProgress = damp(this.focusProgress, 0, 10, delta);
            this.camera.position.lerp(this.responsiveBrowseCamera, 1 - Math.exp(-(this.reducedMotion ? 18 : 7) * delta));
            this.camera.lookAt(browseTarget);
        } else if (this.mode === "focusing") {
            this.focusProgress = clamp(this.focusProgress + delta / (this.reducedMotion ? 0.08 : focusInDuration), 0, 1);
            this.updateFocusCamera(delta);
            if (this.focusProgress >= 1) {
                this.mode = "inspect";
                this.controls.enabled = true;
                this.controls.target.copy(this.focusCameraTarget);
                this.callbacks.onMode(this.mode, this.selectedIndex);
                if (this.selectedIndex !== null) {
                    this.callbacks.onStatus(`Inspecting ${this.runtimeBooks[this.selectedIndex].data.shortTitle}`);
                }
            }
        } else if (this.mode === "returning") {
            this.controls.enabled = false;
            this.focusProgress = clamp(this.focusProgress - delta / (this.reducedMotion ? 0.08 : focusOutDuration), 0, 1);
            this.applyFocusViewOffset(easeOutCubic(this.focusProgress));
            this.camera.position.lerp(this.responsiveBrowseCamera, 1 - Math.exp(-(this.reducedMotion ? 24 : 14) * delta));
            this.camera.lookAt(browseTarget);
            if (this.focusProgress <= 0) {
                if (this.selectedIndex !== null) {
                    this.commitBookPose(this.runtimeBooks[this.selectedIndex], (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presentedBookPose"])(this.motionLayout));
                    this.presentedIndex = this.selectedIndex;
                }
                this.selectedIndex = null;
                this.mode = "browse";
                this.callbacks.onMode(this.mode, null);
                this.callbacks.onStatus(`${this.booksData.length} volumes ready`);
                this.canvas.focus({
                    preventScroll: true
                });
            }
        }
        const nextActive = clamp(Math.round(this.scrollIndex), 0, this.runtimeBooks.length - 1);
        if (nextActive !== this.activeIndex) {
            this.activeIndex = nextActive;
            this.callbacks.onActiveIndex(this.activeIndex);
        }
        this.shelfGroup.position.x = -this.xAtIndex(this.scrollIndex);
        if (this.mode === "browse") {
            this.updateBrowseMotion(delta);
        }
    }
    updateBooks(delta, elapsed) {
        const motionFocus = this.mode === "returning" ? this.focusProgress : easeOutCubic(this.focusProgress);
        const isolated = this.selectedIndex !== null && motionFocus > 0.72;
        this.shelfFurniture.visible = !isolated;
        const focusX = window.innerWidth < 760 ? 0 : desktopFocusX;
        const focusZ = window.innerWidth < 760 ? mobileFocusZ : desktopFocusZ;
        const focusScale = window.innerWidth < 760 ? mobileFocusScale : desktopFocusScale;
        if (this.selectedIndex !== null) {
            const selected = this.runtimeBooks[this.selectedIndex];
            this.commitBookPose(selected, (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusedBookPose"])(motionFocus, this.motionLayout, focusX, focusZ, focusScale));
        }
        this.runtimeBooks.forEach((book)=>{
            book.hover = damp(book.hover, book.targetHover, 12, delta);
            const isSelected = book.index === this.selectedIndex;
            book.content.visible = !isolated || isSelected;
            book.content.position.y = isSelected ? motionFocus * 0.04 : 0;
            const idleTarget = isSelected && this.mode === "inspect" && !this.reducedMotion ? 1 : 0;
            book.idleAmount = damp(book.idleAmount, idleTarget, 5, delta);
            const idleStrength = isSelected ? book.idleAmount : 0;
            const idlePhase = elapsed * 0.78 + book.index * 0.37;
            book.inspectionIdle.position.y = Math.sin(idlePhase) * inspectionIdleLift * idleStrength;
            book.inspectionIdle.rotation.set(Math.sin(idlePhase * 0.73 + 0.8) * inspectionIdlePitch * idleStrength, Math.sin(idlePhase * 0.61) * inspectionIdleYaw * idleStrength, Math.sin(idlePhase * 0.89 + 1.7) * inspectionIdleRoll * idleStrength);
            if (book.livingMaterial) {
                book.livingMaterial.uniforms.uTime.value = elapsed;
                const livingStrength = this.reducedMotion ? 0 : isSelected ? 0.24 + motionFocus * 0.55 : book.index === this.presentedIndex ? 0.24 + book.hover * 0.08 : book.hover * 0.04;
                book.livingMaterial.uniforms.uStrength.value = damp(book.livingMaterial.uniforms.uStrength.value, livingStrength, 5, delta);
            }
        });
    }
    updateFocusCamera(delta) {
        if (this.selectedIndex === null) return;
        const selected = this.runtimeBooks[this.selectedIndex];
        const worldPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        selected.content.getWorldPosition(worldPosition);
        this.frameFocusedBook(worldPosition, easeOutCubic(this.focusProgress));
        this.camera.position.lerp(this.focusCameraPosition, 1 - Math.exp(-(this.reducedMotion ? 28 : 13) * delta));
        this.camera.lookAt(this.focusCameraTarget);
    }
    applyFocusViewOffset(progress) {
        const width = Math.max(1, this.canvas.clientWidth);
        const height = Math.max(1, this.canvas.clientHeight);
        const isMobile = width < 760;
        const detailWidth = width <= 1020 ? Math.min(compactDetailMaxWidth, width * compactDetailWidthRatio) : Math.min(desktopDetailMaxWidth, width * desktopDetailWidthRatio);
        const focusDistance = isMobile ? 5.8 : 5.4;
        const verticalHalfSpan = Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(this.camera.fov * 0.5)) * focusDistance;
        const clampedProgress = clamp(progress, 0, 1);
        const horizontalOffset = isMobile ? 0 : detailWidth * 0.5 * clampedProgress;
        const verticalOffset = isMobile ? 0.28 / verticalHalfSpan * height * 0.5 * clampedProgress : 0;
        if (clampedProgress <= 0.001) {
            this.camera.clearViewOffset();
            return;
        }
        // Shift the composition through an asymmetric frustum. The camera and
        // OrbitControls can then keep the exact center of the book as their target.
        this.camera.setViewOffset(width, height, horizontalOffset, verticalOffset, width, height);
    }
    frameFocusedBook(worldPosition, compositionProgress = 1) {
        const isMobile = this.canvas.clientWidth < 760;
        const focusDistance = isMobile ? 5.8 : 5.4;
        this.applyFocusViewOffset(compositionProgress);
        this.focusCameraTarget.copy(worldPosition);
        this.focusCameraPosition.set(worldPosition.x + (isMobile ? 0 : 0.58), worldPosition.y + 0.12, worldPosition.z + focusDistance);
    }
    handleResize = ()=>{
        const width = Math.max(1, this.canvas.clientWidth);
        const height = Math.max(1, this.canvas.clientHeight);
        const dprCap = width < 760 ? 1.5 : 1.75;
        this.responsiveBrowseCamera.set(0, width < 760 ? 1.5 : browseCamera.y, width < 760 ? 8.3 : browseCamera.z);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
        this.renderer.setSize(width, height, false);
        this.camera.aspect = width / height;
        this.camera.fov = width < 600 ? 33 : width < 920 ? 30 : 27;
        this.camera.updateProjectionMatrix();
        if (this.mode === "browse" && this.focusProgress < 0.01) {
            this.camera.clearViewOffset();
            this.camera.position.copy(this.responsiveBrowseCamera);
            this.camera.lookAt(browseTarget);
        } else if (this.mode === "inspect" && this.selectedIndex !== null) {
            const worldPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            this.runtimeBooks[this.selectedIndex].content.getWorldPosition(worldPosition);
            this.frameFocusedBook(worldPosition);
        }
    };
    async loadStripeAssets() {
        try {
            this.callbacks.onStatus("Finishing the shelf");
            const [booksResponse, objResponse] = await Promise.all([
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$stripe$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRIPE_ASSET_ROOT"]}/books.json`),
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$stripe$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRIPE_ASSET_ROOT"]}/mesh/stripe-press-book.obj`)
            ]);
            if (!booksResponse.ok || !objResponse.ok) {
                throw new Error("Stripe Press asset archive unavailable");
            }
            const bookAssets = await booksResponse.json();
            const parsed = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$OBJLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJLoader"]().parse(await objResponse.text());
            const sourceMesh = parsed.children.find((child)=>child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]);
            if (!sourceMesh) throw new Error("Shared book mesh unavailable");
            // Normalize the imported asset once. Every edition then shares a centered
            // canonical mesh while presentation rotation remains on its wrapper.
            const geometry = sourceMesh.geometry.clone();
            geometry.computeBoundingBox();
            if (!geometry.boundingBox) throw new Error("Shared book bounds unavailable");
            geometry.boundingBox.getSize(this.stripeGeometrySize);
            if (this.stripeGeometrySize.x <= 0 || this.stripeGeometrySize.y <= 0 || this.stripeGeometrySize.z <= 0) {
                throw new Error("Shared book bounds are invalid");
            }
            const geometryCenter = geometry.boundingBox.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
            geometry.translate(-geometryCenter.x, -geometryCenter.y, -geometryCenter.z);
            geometry.computeBoundingBox();
            this.stripeGeometry = geometry;
            await Promise.allSettled(bookAssets.map((bookAsset)=>this.loadStripeBook(bookAsset)));
            this.callbacks.onStatus(`${this.booksData.length} volumes ready`);
        } catch  {
            this.callbacks.onStatus(`${this.booksData.length} volumes ready`);
        }
    }
    textureFor(reference, color = false) {
        if (!reference?.local_file) {
            return Promise.resolve(null);
        }
        const key = reference.local_file;
        const cached = this.stripeTextureCache.get(key);
        if (cached) return cached;
        const promise = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]().loadAsync((0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$stripe$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeAssetUrl"])(key)).then((texture)=>{
            texture.name = key;
            texture.colorSpace = color ? __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"] : __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoColorSpace"];
            texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
            this.stripeTextures.add(texture);
            return texture;
        }).catch(()=>null);
        this.stripeTextureCache.set(key, promise);
        return promise;
    }
    async loadCustomCover(runtime, coverImage) {
        try {
            const texture = await new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]().loadAsync(coverImage);
            if (this.isDisposed) {
                texture.dispose();
                return;
            }
            texture.name = `customCover:${runtime.data.id}`;
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
            const material = runtime.frontSurface.material;
            const proceduralTexture = material.map;
            material.map = texture;
            material.needsUpdate = true;
            runtime.textures.push(texture);
            if (proceduralTexture) {
                const index = runtime.textures.indexOf(proceduralTexture);
                if (index >= 0) runtime.textures.splice(index, 1);
                proceduralTexture.dispose();
            }
        } catch  {
        // Keep the generated procedural cover when an optional image is missing
        // or blocked by cross-origin policy.
        }
    }
    async loadStripeBook(bookAsset) {
        const runtime = this.runtimeBooks.find((book)=>book.data.id === bookAsset.slug);
        if (!runtime || !this.stripeGeometry) return;
        try {
            const [diffuse, bump, foil] = await Promise.all([
                this.textureFor(bookAsset.textures.diffuseMapCustom, true),
                this.textureFor(bookAsset.textures.bumpMapCustom ?? bookAsset.textures.bumpMapBase),
                this.textureFor(bookAsset.textures.foilMap)
            ]);
            if (!diffuse || this.isDisposed) {
                throw new Error(`Missing cover texture for ${bookAsset.slug}`);
            }
            const foilSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$stripe$2d$foil$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeFoilSettings"])(bookAsset.material);
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
                name: `stripePressMaterial:${bookAsset.slug}`,
                map: diffuse,
                bumpMap: bump,
                bumpScale: Number(bookAsset.material.bumpScaleCustom ?? 0.035),
                metalnessMap: foil,
                metalness: foil ? 0.22 : 0.04,
                roughness: 0.68,
                clearcoat: 0.12,
                clearcoatRoughness: 0.55
            });
            if (foil && foilSettings.enabled) {
                material.onBeforeCompile = (shader)=>{
                    shader.uniforms.stripeFoilMap = {
                        value: foil
                    };
                    shader.uniforms.stripeFoilOpacity = {
                        value: foilSettings.opacity
                    };
                    shader.uniforms.stripeFoilDetail = {
                        value: foilSettings.detail
                    };
                    shader.fragmentShader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$stripe$2d$foil$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addStripeFoilBlend"])(shader.fragmentShader);
                };
                material.customProgramCacheKey = ()=>"stripe-colored-foil-v1";
                material.userData.stripeFoil = {
                    opacity: foilSettings.opacity,
                    detail: foilSettings.detail
                };
            }
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.stripeGeometry, material);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            const root = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
            root.name = `stripePressEdition:${bookAsset.slug}`;
            root.add(mesh);
            root.rotation.y = stripeBookCoverFacingRotationY;
            const targetWidth = 1.31 + (runtime.index % 5 - 2) * 0.018;
            root.scale.set(runtime.data.thickness / this.stripeGeometrySize.x, runtime.data.height / this.stripeGeometrySize.y, targetWidth / this.stripeGeometrySize.z);
            root.updateMatrixWorld(true);
            root.userData.displaySize = {
                width: targetWidth,
                height: runtime.data.height,
                thickness: runtime.data.thickness
            };
            root.userData.coverFacing = "+Z";
            runtime.assetHolder.add(root);
            runtime.physical.visible = false;
            runtime.titleDecal.visible = false;
            runtime.textures.forEach((texture)=>texture.dispose());
            runtime.textures.length = 0;
            this.assetCount += 1;
        } catch  {
            this.assetFailures += 1;
        }
    }
    browseBy(direction) {
        if (this.mode !== "browse") return;
        this.browseTo(Math.round(this.targetScrollIndex) + direction);
    }
    browseTo(index) {
        if (this.mode !== "browse") return;
        const next = clamp(Math.round(index), 0, this.runtimeBooks.length - 1);
        this.pendingFocusIndex = null;
        this.targetScrollIndex = next;
        this.lastInputTime = performance.now() - 1000;
    }
    focusBook(index = this.activeIndex) {
        if (this.mode !== "browse") return;
        const next = clamp(Math.round(index), 0, this.runtimeBooks.length - 1);
        this.targetScrollIndex = next;
        this.scrollIndex = next;
        this.activeIndex = next;
        this.pendingFocusIndex = next;
        this.callbacks.onActiveIndex(next);
        this.callbacks.onStatus(`Preparing ${this.runtimeBooks[next].data.shortTitle}`);
        if (this.browseMotionPhase === "idle" && this.presentedIndex === next) {
            this.beginFocus(next);
        }
    }
    returnToShelf() {
        if (this.mode === "browse" && this.pendingFocusIndex !== null) {
            this.pendingFocusIndex = null;
            this.callbacks.onStatus("Opening cancelled");
            return;
        }
        if (this.mode === "browse" || this.mode === "returning") return;
        this.controls.enabled = false;
        this.mode = "returning";
        this.callbacks.onMode(this.mode, this.selectedIndex);
        this.callbacks.onStatus("Returning to the complete shelf");
    }
    resetFocusView() {
        if (this.mode !== "inspect" || this.selectedIndex === null) return;
        const selected = this.runtimeBooks[this.selectedIndex];
        const worldPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        selected.content.getWorldPosition(worldPosition);
        this.frameFocusedBook(worldPosition);
        this.controls.target.copy(this.focusCameraTarget);
        this.camera.position.copy(this.focusCameraPosition);
        this.controls.update();
    }
    findAnyCollision() {
        for(let leftIndex = 0; leftIndex < this.runtimeBooks.length; leftIndex += 1){
            const left = this.runtimeBooks[leftIndex];
            for(let rightIndex = leftIndex + 1; rightIndex < this.runtimeBooks.length; rightIndex += 1){
                const right = this.runtimeBooks[rightIndex];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$book$2d$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bookFootprintsOverlap"])(this.footprintFor(left), this.footprintFor(right), this.motionLayout.collisionMargin)) {
                    return [
                        left.data.id,
                        right.data.id
                    ];
                }
            }
        }
        return null;
    }
    getDiagnostics() {
        const info = this.renderer.info;
        return {
            mode: this.mode,
            activeIndex: this.activeIndex,
            selectedIndex: this.selectedIndex,
            books: this.runtimeBooks.length,
            stripeAssetsLoaded: this.assetCount,
            stripeAssetFailures: this.assetFailures,
            drawCalls: info.render.calls,
            triangles: info.render.triangles,
            geometries: info.memory.geometries,
            textures: info.memory.textures,
            pixelRatio: this.renderer.getPixelRatio(),
            motionPhase: this.browseMotionPhase,
            collisionRejects: this.collisionRejects,
            lastCollisionPair: this.lastCollisionPair,
            currentCollision: this.findAnyCollision(),
            canvas: {
                width: this.canvas.width,
                height: this.canvas.height,
                clientWidth: this.canvas.clientWidth,
                clientHeight: this.canvas.clientHeight
            }
        };
    }
    dispose() {
        this.isDisposed = true;
        cancelAnimationFrame(this.animationFrame);
        this.resizeObserver.disconnect();
        this.controls.dispose();
        this.canvas.removeEventListener("wheel", this.handleWheel);
        this.canvas.removeEventListener("pointerdown", this.handlePointerDown);
        this.canvas.removeEventListener("pointermove", this.handlePointerMove);
        this.canvas.removeEventListener("pointerup", this.handlePointerUp);
        this.canvas.removeEventListener("pointercancel", this.handlePointerCancel);
        this.canvas.removeEventListener("pointerleave", this.handlePointerLeave);
        this.canvas.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("blur", this.handleWindowBlur);
        this.scene.traverse((object)=>{
            if (!(object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"])) return;
            object.geometry?.dispose();
            const materials = Array.isArray(object.material) ? object.material : [
                object.material
            ];
            materials.forEach((material)=>material?.dispose());
        });
        this.runtimeBooks.forEach((book)=>{
            book.textures.forEach((texture)=>texture.dispose());
        });
        this.stripeTextures.forEach((texture)=>texture.dispose());
        this.stripeTextureCache.clear();
        this.stripeTextures.clear();
        this.stripeGeometry = null;
        this.stripeGeometrySize.set(0, 0, 0);
        this.renderer.dispose();
        delete window.__PRESS_LIBRARY__;
    }
}
}),
"[project]/experiences/dissertation-books/app/book-motion.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bookFootprintsOverlap",
    ()=>bookFootprintsOverlap,
    "browseMotionPose",
    ()=>browseMotionPose,
    "browsePhaseDuration",
    ()=>browsePhaseDuration,
    "createMotionLayout",
    ()=>createMotionLayout,
    "focusedBookPose",
    ()=>focusedBookPose,
    "presentedBookPose",
    ()=>presentedBookPose,
    "presentedYaw",
    ()=>presentedYaw,
    "shelvedBookPose",
    ()=>shelvedBookPose,
    "shelvedYaw",
    ()=>shelvedYaw
]);
const shelvedYaw = Math.PI / 2;
const presentedYaw = 0;
const shelvedZ = -0.64;
const presentedZ = 0.4;
const presentedScale = 1.035;
const maximumFocusScale = 1.08;
const collisionMargin = 0.035;
const browsePhaseDuration = {
    "retreat-current": 0.11,
    "turn-current": 0.14,
    "shelve-current": 0.13,
    "extract-next": 0.13,
    "turn-next": 0.14,
    "settle-next": 0.11
};
function clamp01(value) {
    return Math.min(1, Math.max(0, value));
}
function smooth(value) {
    const t = clamp01(value);
    return t * t * (3 - 2 * t);
}
function lerp(start, end, amount) {
    return start + (end - start) * amount;
}
function createMotionLayout(books) {
    const maxShelvedHalfDepth = books.reduce((maximum, book)=>Math.max(maximum, book.width * 0.5), 0);
    const maxRotationRadius = books.reduce((maximum, book)=>Math.max(maximum, Math.hypot(book.width, book.thickness) * 0.5 * maximumFocusScale), 0);
    return {
        shelvedZ,
        presentedZ,
        rotationLaneZ: shelvedZ + maxShelvedHalfDepth + maxRotationRadius + collisionMargin,
        presentedScale,
        collisionMargin
    };
}
function shelvedBookPose(layout) {
    return {
        x: 0,
        z: layout.shelvedZ,
        yaw: shelvedYaw,
        scale: 1
    };
}
function presentedBookPose(layout) {
    return {
        x: 0,
        z: layout.presentedZ,
        yaw: presentedYaw,
        scale: layout.presentedScale
    };
}
function browseMotionPose(phase, progress, layout) {
    const t = smooth(progress);
    switch(phase){
        case "retreat-current":
            return {
                x: 0,
                z: lerp(layout.presentedZ, layout.rotationLaneZ, t),
                yaw: presentedYaw,
                scale: lerp(layout.presentedScale, 1, t)
            };
        case "turn-current":
            return {
                x: 0,
                z: layout.rotationLaneZ,
                yaw: lerp(presentedYaw, shelvedYaw, t),
                scale: 1
            };
        case "shelve-current":
            return {
                x: 0,
                z: lerp(layout.rotationLaneZ, layout.shelvedZ, t),
                yaw: shelvedYaw,
                scale: 1
            };
        case "extract-next":
            return {
                x: 0,
                z: lerp(layout.shelvedZ, layout.rotationLaneZ, t),
                yaw: shelvedYaw,
                scale: 1
            };
        case "turn-next":
            return {
                x: 0,
                z: layout.rotationLaneZ,
                yaw: lerp(shelvedYaw, presentedYaw, t),
                scale: 1
            };
        case "settle-next":
            return {
                x: 0,
                z: lerp(layout.rotationLaneZ, layout.presentedZ, t),
                yaw: presentedYaw,
                scale: lerp(1, layout.presentedScale, t)
            };
    }
}
function focusedBookPose(progress, layout, focusX, focusZ, focusScale) {
    const value = clamp01(progress);
    const clearanceProgress = smooth(Math.min(1, value / 0.55));
    const presentationProgress = smooth(Math.max(0, (value - 0.55) / 0.45));
    return {
        x: lerp(0, focusX, presentationProgress),
        z: lerp(layout.presentedZ, focusZ, clearanceProgress),
        yaw: presentedYaw,
        scale: lerp(layout.presentedScale, focusScale, presentationProgress)
    };
}
function dot(left, right) {
    return left.x * right.x + left.z * right.z;
}
function axesFor(footprint) {
    const cosine = Math.cos(footprint.yaw);
    const sine = Math.sin(footprint.yaw);
    return {
        width: {
            x: cosine,
            z: -sine
        },
        thickness: {
            x: sine,
            z: cosine
        }
    };
}
function bookFootprintsOverlap(left, right, margin = collisionMargin) {
    const leftAxes = axesFor(left);
    const rightAxes = axesFor(right);
    const axes = [
        leftAxes.width,
        leftAxes.thickness,
        rightAxes.width,
        rightAxes.thickness
    ];
    const centerDelta = {
        x: right.x - left.x,
        z: right.z - left.z
    };
    const leftHalfWidth = left.width * left.scale * 0.5 + margin * 0.5;
    const leftHalfThickness = left.thickness * left.scale * 0.5 + margin * 0.5;
    const rightHalfWidth = right.width * right.scale * 0.5 + margin * 0.5;
    const rightHalfThickness = right.thickness * right.scale * 0.5 + margin * 0.5;
    return axes.every((axis)=>{
        const distance = Math.abs(dot(centerDelta, axis));
        const leftRadius = leftHalfWidth * Math.abs(dot(leftAxes.width, axis)) + leftHalfThickness * Math.abs(dot(leftAxes.thickness, axis));
        const rightRadius = rightHalfWidth * Math.abs(dot(rightAxes.width, axis)) + rightHalfThickness * Math.abs(dot(rightAxes.thickness, axis));
        return distance < leftRadius + rightRadius;
    });
}
}),
"[project]/experiences/dissertation-books/app/catalog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalog",
    ()=>catalog
]);
const catalog = [
    {
        id: "PhD-Dissertation",
        title: "Improving Modeling of Corrosion Products (CRUD) in the Pressurized Water Reactors through the Experimental Determination of CRUD Characteristics",
        shortTitle: "CRUD deposition",
        author: "Sri Saravana",
        description: "PhD Dissertation",
        quote: "",
        quoteBy: "",
        format: "Hardcover · 1008 pages",
        availability: "",
        url: "https://scholarsarchive.library.albany.edu/etd/552/",
        cover: "#1b2a4a",
        accent: "#c49a45",
        ink: "#f4eedb",
        motif: "boom",
        height: 2.22,
        thickness: 0.32
    },
    {
        id: "UG-Dissertation",
        title: "Investigation of Lignocellulose-Based Materials for Electronics",
        shortTitle: "Lignocellulose-Based Encapsulants",
        author: "Sri Saravana",
        description: "UG Dissertation",
        quote: "",
        quoteBy: "",
        format: "Hardcover · 500 pages",
        availability: "",
        url: "#",
        cover: "#362b48",
        accent: "#8ecae6",
        ink: "#f0edf5",
        motif: "wave",
        height: 2.06,
        thickness: 0.18
    }
].sort((left, right)=>right.height - left.height);
}),
"[project]/experiences/dissertation-books/app/cover-art.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBackCover",
    ()=>createBackCover,
    "createFrontCover",
    ()=>createFrontCover,
    "createSpineCover",
    ()=>createSpineCover,
    "createTitleDecal",
    ()=>createTitleDecal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/app/site-config.ts [app-ssr] (ecmascript)");
;
const serif = '"Newsreader Variable", "Iowan Old Style", Georgia, serif';
const sans = '"Inter Variable", Inter, Arial, sans-serif';
function seeded(seed) {
    let state = 2166136261;
    for (const char of seed){
        state ^= char.charCodeAt(0);
        state = Math.imul(state, 16777619);
    }
    return ()=>{
        state += 0x6d2b79f5;
        let value = state;
        value = Math.imul(value ^ value >>> 15, value | 1);
        value ^= value + Math.imul(value ^ value >>> 7, value | 61);
        return ((value ^ value >>> 14) >>> 0) / 4294967296;
    };
}
function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
}
function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 8) {
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words){
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = word;
        } else {
            line = test;
        }
    }
    if (line) lines.push(line);
    lines.slice(0, maxLines).forEach((entry, index)=>{
        ctx.fillText(entry, x, y + index * lineHeight);
    });
    return Math.min(lines.length, maxLines);
}
function strokeLine(ctx, points, width = 4) {
    if (!points.length) return;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (const [x, y] of points.slice(1))ctx.lineTo(x, y);
    ctx.lineWidth = width;
    ctx.stroke();
}
function drawMotif(ctx, book, width, height) {
    const random = seeded(book.id);
    ctx.save();
    ctx.strokeStyle = book.accent;
    ctx.fillStyle = book.accent;
    ctx.globalAlpha = 0.88;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    switch(book.motif){
        case "lattice":
            {
                const nodes = [];
                for(let i = 0; i < 24; i += 1){
                    nodes.push([
                        110 + random() * (width - 220),
                        380 + random() * (height - 560)
                    ]);
                }
                ctx.globalAlpha = 0.38;
                nodes.forEach((point, i)=>{
                    nodes.slice(i + 1).forEach((other)=>{
                        const distance = Math.hypot(point[0] - other[0], point[1] - other[1]);
                        if (distance < 240) strokeLine(ctx, [
                            point,
                            other
                        ], 3);
                    });
                });
                ctx.globalAlpha = 0.9;
                nodes.forEach(([x, y], index)=>{
                    ctx.beginPath();
                    ctx.arc(x, y, index % 5 === 0 ? 12 : 6, 0, Math.PI * 2);
                    ctx.fill();
                });
                break;
            }
        case "corrosion":
            {
                ctx.globalAlpha = 0.55;
                for(let ring = 0; ring < 8; ring += 1){
                    ctx.beginPath();
                    const cx = width * (0.34 + random() * 0.38);
                    const cy = height * (0.38 + random() * 0.42);
                    const radius = 40 + ring * 42 + random() * 22;
                    for(let a = 0; a <= Math.PI * 2 + 0.2; a += 0.16){
                        const wobble = Math.sin(a * 5 + ring) * 8 + random() * 7;
                        const x = cx + Math.cos(a) * (radius + wobble);
                        const y = cy + Math.sin(a) * (radius + wobble);
                        if (a === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
                break;
            }
        case "efficiency":
            {
                ctx.globalAlpha = 0.72;
                for(let x = 140; x < width - 100; x += 150){
                    ctx.strokeRect(x, 450, 94, height - 690);
                    for(let y = 520; y < height - 250; y += 130){
                        ctx.beginPath();
                        ctx.arc(x + 47, y, 26, 0, Math.PI * 2);
                        ctx.stroke();
                        strokeLine(ctx, [
                            [
                                x + 10,
                                y
                            ],
                            [
                                x + 84,
                                y
                            ]
                        ], 3);
                    }
                }
                strokeLine(ctx, [
                    [
                        120,
                        height - 315
                    ],
                    [
                        width - 120,
                        420
                    ]
                ], 9);
                break;
            }
        case "network":
            {
                ctx.globalAlpha = 0.66;
                const cols = 7;
                const rows = 9;
                for(let x = 0; x < cols; x += 1){
                    for(let y = 0; y < rows; y += 1){
                        const px = 130 + x * 126 + Math.sin(y) * 18;
                        const py = 390 + y * 105;
                        if (x < cols - 1) {
                            strokeLine(ctx, [
                                [
                                    px,
                                    py
                                ],
                                [
                                    px + 126 + Math.sin(y + 1) * 18,
                                    py + 105
                                ]
                            ], 2.5);
                        }
                        ctx.beginPath();
                        ctx.arc(px, py, (x + y) % 5 === 0 ? 11 : 4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                break;
            }
        case "boom":
            {
                ctx.globalAlpha = 0.86;
                for(let i = 0; i < 9; i += 1){
                    ctx.beginPath();
                    ctx.arc(width * 0.54, height * 0.63, 48 + i * 68, 0, Math.PI * 2);
                    ctx.lineWidth = i % 3 === 0 ? 13 : 4;
                    ctx.stroke();
                }
                break;
            }
        case "organization":
            {
                ctx.globalAlpha = 0.8;
                const levels = [
                    1,
                    3,
                    5,
                    7
                ];
                levels.forEach((count, level)=>{
                    const y = 470 + level * 240;
                    for(let i = 0; i < count; i += 1){
                        const x = (i + 1) * width / (count + 1);
                        roundedRect(ctx, x - 44, y - 32, 88, 64, 12);
                        ctx.strokeStyle = book.ink;
                        ctx.lineWidth = 4;
                        ctx.stroke();
                        ctx.strokeStyle = book.accent;
                        if (level < levels.length - 1) {
                            strokeLine(ctx, [
                                [
                                    x,
                                    y + 32
                                ],
                                [
                                    x,
                                    y + 128
                                ]
                            ], 3);
                        }
                    }
                });
                break;
            }
        case "schematic":
            {
                ctx.globalAlpha = 0.72;
                for(let i = 0; i < 6; i += 1){
                    const y = 430 + i * 165;
                    strokeLine(ctx, [
                        [
                            110,
                            y
                        ],
                        [
                            300,
                            y
                        ],
                        [
                            380,
                            y + (i % 2 ? -72 : 72)
                        ],
                        [
                            610,
                            y + (i % 2 ? -72 : 72)
                        ],
                        [
                            700,
                            y
                        ],
                        [
                            width - 110,
                            y
                        ]
                    ], 5);
                    [
                        300,
                        700
                    ].forEach((x)=>{
                        ctx.beginPath();
                        ctx.arc(x, y, 14, 0, Math.PI * 2);
                        ctx.fill();
                    });
                }
                break;
            }
        case "flight":
            {
                ctx.globalAlpha = 0.92;
                ctx.beginPath();
                ctx.moveTo(70, height * 0.82);
                ctx.bezierCurveTo(width * 0.2, height * 0.56, width * 0.68, height * 0.62, width * 0.9, height * 0.36);
                ctx.lineWidth = 8;
                ctx.stroke();
                ctx.save();
                ctx.translate(width * 0.87, height * 0.38);
                ctx.rotate(-0.62);
                ctx.beginPath();
                ctx.moveTo(-58, 0);
                ctx.lineTo(40, -26);
                ctx.lineTo(72, 0);
                ctx.lineTo(40, 26);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
                break;
            }
        case "circuit":
            {
                ctx.globalAlpha = 0.82;
                for(let i = 0; i < 14; i += 1){
                    const y = 390 + i * 76;
                    const mid = 250 + random() * 510;
                    strokeLine(ctx, [
                        [
                            85,
                            y
                        ],
                        [
                            mid,
                            y
                        ],
                        [
                            mid,
                            y + (random() > 0.5 ? 42 : -42)
                        ],
                        [
                            width - 80,
                            y + (random() > 0.5 ? 42 : -42)
                        ]
                    ], 3);
                    ctx.beginPath();
                    ctx.arc(mid, y, 9, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;
            }
        case "orbit":
            {
                ctx.globalAlpha = 0.66;
                ctx.save();
                ctx.translate(width * 0.52, height * 0.64);
                for(let i = 0; i < 7; i += 1){
                    ctx.rotate(0.42);
                    ctx.beginPath();
                    ctx.ellipse(0, 0, 100 + i * 48, 36 + i * 20, 0, 0, Math.PI * 2);
                    ctx.lineWidth = i === 3 ? 8 : 3;
                    ctx.stroke();
                }
                ctx.restore();
                ctx.beginPath();
                ctx.arc(width * 0.52, height * 0.64, 24, 0, Math.PI * 2);
                ctx.fill();
                break;
            }
        case "branches":
            {
                ctx.globalAlpha = 0.84;
                const root = [
                    width / 2,
                    height - 185
                ];
                for(let level = 0; level < 5; level += 1){
                    const count = 2 ** level;
                    for(let index = 0; index < count; index += 1){
                        const y = height - 240 - level * 180;
                        const span = width * (0.13 + level * 0.1);
                        const x = width / 2 + (index / Math.max(1, count - 1) - 0.5) * span * 2;
                        const parentIndex = Math.floor(index / 2);
                        const parentCount = 2 ** Math.max(0, level - 1);
                        const parentX = level === 0 ? root[0] : width / 2 + (parentIndex / Math.max(1, parentCount - 1) - 0.5) * width * (0.13 + (level - 1) * 0.1) * 2;
                        const parentY = level === 0 ? root[1] : y + 180;
                        strokeLine(ctx, [
                            [
                                parentX,
                                parentY
                            ],
                            [
                                x,
                                y
                            ]
                        ], 4);
                        ctx.beginPath();
                        ctx.arc(x, y, level === 4 ? 10 : 6, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                break;
            }
        case "wave":
            {
                ctx.globalAlpha = 0.8;
                for(let row = 0; row < 10; row += 1){
                    ctx.beginPath();
                    for(let x = 80; x <= width - 80; x += 12){
                        const y = 430 + row * 92 + Math.sin(x * 0.025 + row * 0.78) * (18 + row * 3);
                        if (x === 80) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.lineWidth = row % 3 === 0 ? 7 : 3;
                    ctx.stroke();
                }
                break;
            }
        case "runner":
            {
                ctx.globalAlpha = 0.82;
                for(let frame = 0; frame < 7; frame += 1){
                    const x = 150 + frame * 122;
                    const y = 760 + Math.sin(frame * 0.8) * 42;
                    ctx.beginPath();
                    ctx.arc(x, y - 125, 22, 0, Math.PI * 2);
                    ctx.fill();
                    strokeLine(ctx, [
                        [
                            x,
                            y - 98
                        ],
                        [
                            x + 4,
                            y - 28
                        ],
                        [
                            x - 38 + frame * 4,
                            y + 42
                        ]
                    ], 9);
                    strokeLine(ctx, [
                        [
                            x + 2,
                            y - 70
                        ],
                        [
                            x + 52,
                            y - 42
                        ]
                    ], 8);
                    strokeLine(ctx, [
                        [
                            x + 4,
                            y - 28
                        ],
                        [
                            x + 48,
                            y + 28
                        ]
                    ], 9);
                }
                break;
            }
        case "gather":
            {
                ctx.globalAlpha = 0.76;
                const colors = [
                    book.ink,
                    book.accent,
                    "#2b5f83"
                ];
                for(let i = 0; i < 18; i += 1){
                    ctx.strokeStyle = colors[i % colors.length];
                    ctx.lineWidth = 16;
                    ctx.beginPath();
                    ctx.arc(width * (0.2 + random() * 0.6), height * (0.34 + random() * 0.48), 42 + random() * 110, 0, Math.PI * 2);
                    ctx.stroke();
                }
                break;
            }
        case "maze":
            {
                ctx.globalAlpha = 0.76;
                const size = 94;
                for(let x = 92; x < width - 92; x += size){
                    for(let y = 400; y < height - 180; y += size){
                        const open = random() > 0.48;
                        strokeLine(ctx, open ? [
                            [
                                x,
                                y
                            ],
                            [
                                x + size,
                                y
                            ]
                        ] : [
                            [
                                x,
                                y
                            ],
                            [
                                x,
                                y + size
                            ]
                        ], 7);
                    }
                }
                ctx.strokeStyle = book.accent;
                strokeLine(ctx, [
                    [
                        95,
                        height - 215
                    ],
                    [
                        310,
                        height - 215
                    ],
                    [
                        310,
                        680
                    ],
                    [
                        720,
                        680
                    ],
                    [
                        720,
                        430
                    ],
                    [
                        width - 95,
                        430
                    ]
                ], 14);
                break;
            }
        case "fracture":
            {
                ctx.globalAlpha = 0.88;
                for(let i = 0; i < 16; i += 1){
                    const startX = width * 0.5 + (random() - 0.5) * 160;
                    const startY = height * 0.62 + (random() - 0.5) * 140;
                    const endX = random() > 0.5 ? width - 50 : 50;
                    const endY = 340 + random() * (height - 500);
                    strokeLine(ctx, [
                        [
                            startX,
                            startY
                        ],
                        [
                            (startX + endX) / 2 + (random() - 0.5) * 90,
                            (startY + endY) / 2
                        ],
                        [
                            endX,
                            endY
                        ]
                    ], i % 4 === 0 ? 12 : 4);
                }
                break;
            }
        case "continuum":
            {
                ctx.globalAlpha = 0.88;
                ctx.beginPath();
                ctx.moveTo(70, height * 0.72);
                for(let x = 70; x <= width - 70; x += 16){
                    const t = (x - 70) / (width - 140);
                    const y = height * 0.72 - Math.sin(t * Math.PI * 5) * 90 - Math.pow(t, 2) * 330;
                    ctx.lineTo(x, y);
                }
                ctx.lineWidth = 12;
                ctx.stroke();
                break;
            }
        case "windows":
            {
                ctx.globalAlpha = 0.72;
                for(let i = 0; i < 9; i += 1){
                    const inset = 90 + i * 48;
                    ctx.strokeRect(inset, 390 + i * 32, width - inset * 2, height - 590 - i * 64);
                    ctx.lineWidth = i === 0 ? 11 : 4;
                    ctx.stroke();
                }
                roundedRect(ctx, width * 0.49, height * 0.62, 24, 118, 8);
                ctx.fill();
                break;
            }
        case "steps":
            {
                ctx.globalAlpha = 0.86;
                for(let i = 0; i < 8; i += 1){
                    ctx.fillRect(120 + i * 92, height - 230 - i * 102, 78, 102 + i * 102);
                }
                ctx.globalAlpha = 0.34;
                strokeLine(ctx, [
                    [
                        110,
                        height - 235
                    ],
                    [
                        width - 115,
                        420
                    ]
                ], 8);
                break;
            }
    }
    ctx.restore();
}
function addPaperGrain(ctx, width, height, seed) {
    const random = seeded(`${seed}-grain`);
    ctx.save();
    for(let i = 0; i < 1600; i += 1){
        const alpha = 0.018 + random() * 0.03;
        ctx.fillStyle = random() > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;
        const size = random() * 2.2 + 0.35;
        ctx.fillRect(random() * width, random() * height, size, size);
    }
    ctx.restore();
}
function drawCoverTypography(ctx, book, width, height, decalOnly = false) {
    ctx.save();
    ctx.fillStyle = book.ink;
    ctx.textBaseline = "top";
    ctx.letterSpacing = "7px";
    ctx.font = `600 25px ${sans}`;
    ctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].coverImprint, 82, 74);
    ctx.letterSpacing = "0px";
    const titleSize = book.title.length > 38 ? 74 : book.title.length > 24 ? 86 : 112;
    ctx.font = `520 ${titleSize}px ${serif}`;
    const titleY = 142;
    const titleLines = wrapText(ctx, book.title, 78, titleY, width - 156, titleSize * 0.91, 5);
    ctx.font = `520 31px ${sans}`;
    ctx.letterSpacing = "0.2px";
    ctx.fillText(book.author, 82, Math.max(320, titleY + titleLines * titleSize * 0.91 + 35));
    if (!decalOnly) {
        ctx.globalAlpha = 0.75;
        ctx.font = `500 20px ${sans}`;
        ctx.letterSpacing = "3px";
        ctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].coverTagline, 82, height - 90);
    }
    ctx.restore();
}
function createFrontCover(book) {
    const logicalWidth = 1024;
    const logicalHeight = 1536;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;
    ctx.scale(0.5, 0.5);
    ctx.fillStyle = book.cover;
    ctx.fillRect(0, 0, logicalWidth, logicalHeight);
    drawMotif(ctx, book, logicalWidth, logicalHeight);
    addPaperGrain(ctx, logicalWidth, logicalHeight, book.id);
    ctx.save();
    ctx.globalAlpha = 0.26;
    ctx.strokeStyle = book.ink;
    ctx.lineWidth = 4;
    ctx.strokeRect(22, 22, logicalWidth - 44, logicalHeight - 44);
    ctx.restore();
    drawCoverTypography(ctx, book, logicalWidth, logicalHeight);
    return canvas;
}
function createTitleDecal(book) {
    const logicalWidth = 1024;
    const logicalHeight = 1536;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;
    ctx.scale(0.5, 0.5);
    drawCoverTypography(ctx, book, logicalWidth, logicalHeight, true);
    return canvas;
}
function createSpineCover(book) {
    const logicalWidth = 256;
    const logicalHeight = 2048;
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;
    ctx.scale(0.5, 0.5);
    ctx.fillStyle = book.cover;
    ctx.fillRect(0, 0, logicalWidth, logicalHeight);
    addPaperGrain(ctx, logicalWidth, logicalHeight, `${book.id}-spine`);
    ctx.save();
    ctx.fillStyle = book.accent;
    ctx.fillRect(20, 24, 8, logicalHeight - 48);
    ctx.fillStyle = book.ink;
    ctx.translate(logicalWidth / 2 + 24, logicalHeight - 130);
    ctx.rotate(-Math.PI / 2);
    const size = book.shortTitle.length > 24 ? 68 : 82;
    ctx.font = `560 ${size}px ${serif}`;
    ctx.textBaseline = "middle";
    ctx.fillText(book.shortTitle, 0, 0, 1660);
    ctx.font = `520 35px ${sans}`;
    ctx.fillText(book.author.replace(/^Edited by /, ""), 0, 72, 1450);
    ctx.restore();
    ctx.save();
    ctx.fillStyle = book.ink;
    ctx.font = `700 26px ${sans}`;
    ctx.textAlign = "center";
    ctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].spineMark, logicalWidth / 2 + 10, logicalHeight - 42);
    ctx.restore();
    return canvas;
}
function createBackCover(book) {
    const logicalWidth = 1024;
    const logicalHeight = 1536;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;
    ctx.scale(0.5, 0.5);
    ctx.fillStyle = book.cover;
    ctx.fillRect(0, 0, logicalWidth, logicalHeight);
    addPaperGrain(ctx, logicalWidth, logicalHeight, `${book.id}-back`);
    ctx.fillStyle = book.ink;
    ctx.font = `500 45px ${serif}`;
    ctx.textBaseline = "top";
    const lines = wrapText(ctx, book.description, 108, 180, 808, 58, 12);
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = book.accent;
    ctx.fillRect(108, 180 + lines * 58 + 78, 108, 9);
    ctx.restore();
    ctx.font = `italic 500 54px ${serif}`;
    wrapText(ctx, `“${book.quote}”`, 108, 180 + lines * 58 + 132, 808, 63, 6);
    ctx.font = `600 24px ${sans}`;
    ctx.letterSpacing = "2px";
    ctx.fillText(book.quoteBy.toUpperCase(), 110, 1160);
    ctx.globalAlpha = 0.78;
    ctx.font = `500 20px ${sans}`;
    ctx.letterSpacing = "3px";
    ctx.fillText(`${__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].coverImprint} · ${__TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$app$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].coverTagline}`, 110, 1380);
    ctx.restore();
    return canvas;
}
}),
"[project]/experiences/dissertation-books/app/site-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    title: "The Complete Shelf — An Interactive 3D Library",
    applicationName: "The Complete Shelf",
    description: "Explore a tactile 3D bookshelf with procedural hardcovers and optional contributor-owned cover art.",
    wordmark: "THE COMPLETE SHELF",
    collectionName: "AN INTERACTIVE 3D LIBRARY",
    editionEyebrow: "LIBRARY EDITION",
    coverImprint: "THE COMPLETE SHELF",
    coverTagline: "AN INTERACTIVE LIBRARY",
    spineMark: "CS",
    bookLinkLabel: "View book",
    socialImageAlt: "The Complete Shelf, with tactile abstract hardcovers and one book pulled forward on a walnut shelf.",
    enableOptionalStripeArchive: false,
    independentNote: "Independent open-source project. Not affiliated with or endorsed by Stripe."
};
}),
"[project]/experiences/dissertation-books/app/stripe-assets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STRIPE_ASSET_ROOT",
    ()=>STRIPE_ASSET_ROOT,
    "stripeAssetUrl",
    ()=>stripeAssetUrl
]);
const STRIPE_ASSET_ROOT = "/assets/stripe-press";
function stripeAssetUrl(localFile) {
    return `${STRIPE_ASSET_ROOT}/${localFile}`;
}
}),
"[project]/experiences/dissertation-books/app/stripe-foil.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addStripeFoilBlend",
    ()=>addStripeFoilBlend,
    "stripeFoilSettings",
    ()=>stripeFoilSettings
]);
const mapParametersHook = "#include <map_pars_fragment>";
const normalMapsHook = "#include <normal_fragment_maps>";
const stripeFoilParameters = `${mapParametersHook}
uniform sampler2D stripeFoilMap;
uniform float stripeFoilOpacity;
uniform float stripeFoilDetail;`;
const stripeFoilBlend = `${normalMapsHook}
#ifdef USE_MAP
  float stripeFoilCoverage = clamp(
    texture2D(stripeFoilMap, vMapUv).r * stripeFoilOpacity,
    0.0,
    1.0
  );
  vec2 stripeFoilIndex = vec2(
    sin(-normal.y * stripeFoilDetail + vViewPosition.y * stripeFoilDetail / 10.0),
    cos(-normal.x * stripeFoilDetail + vViewPosition.x * stripeFoilDetail / 10.0)
  ) / 2.0;
  const vec2 stripeFoilUvSize = vec2(0.14, -0.19);
  stripeFoilIndex =
    vec2(0.0, 1.0) +
    stripeFoilUvSize / 2.0 +
    stripeFoilIndex * stripeFoilUvSize;
  vec3 stripeFoilColor = texture2D(map, stripeFoilIndex).rgb;
  diffuseColor.rgb = mix(
    diffuseColor.rgb,
    stripeFoilColor,
    stripeFoilCoverage
  );
#endif`;
function addStripeFoilBlend(fragmentShader) {
    if (!fragmentShader.includes(mapParametersHook) || !fragmentShader.includes(normalMapsHook)) {
        throw new Error("MeshPhysicalMaterial shader hooks are unavailable");
    }
    return fragmentShader.replace(mapParametersHook, stripeFoilParameters).replace(normalMapsHook, stripeFoilBlend);
}
function stripeFoilSettings(material) {
    const rawOpacity = material.foilOpacity;
    const rawDetail = material.foilDetail;
    const opacity = typeof rawOpacity === "number" && Number.isFinite(rawOpacity) ? Math.min(1.5, Math.max(0, rawOpacity)) : 0;
    const detail = typeof rawDetail === "number" && Number.isFinite(rawDetail) ? Math.max(0.1, rawDetail) : 1;
    return {
        enabled: opacity > 0,
        opacity,
        detail
    };
}
}),
];

//# sourceMappingURL=experiences_dissertation-books_app_1clz--0._.js.map