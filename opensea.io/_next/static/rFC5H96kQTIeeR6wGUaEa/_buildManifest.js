self.__BUILD_MANIFEST = function(c, s, t, a, e, n, i, l, o, d, u, r, k, b, h, f, g, j, p, S, y, I, m, v, _, C, x, A, w, L, z, N, T, U, B, F, W, D, E, M, P, q, G, H, J) {
    return {
        __rewrites: {
            beforeFiles: [{
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/favicon.ico",
                destination: W
            }, {
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/apple-touch-icon-precomposed.png",
                destination: W
            }],
            afterFiles: [{
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/assets/:collectionSlug",
                destination: "/:nextInternalLocale/assets"
            }, {
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/activity/:collectionSlug",
                destination: "/:nextInternalLocale/activity"
            }],
            fallback: []
        },
        "/": [c, _, N, s, n, w, L, T, D, E, "static/chunks/pages/index-2f9c7846a6b9f0d7.js"],
        "/_app.spec": ["static/chunks/07e27881-74e665feeb70ee10.js", "static/chunks/24578-ac1a96bd195ef618.js", "static/chunks/pages/_app.spec-f49072c882e2a7b2.js"],
        "/_error": ["static/chunks/pages/_error-4ded009e5aa305ec.js"],
        "/about": ["static/chunks/pages/about-7687c3c0ae40e798.js"],
        "/account": [o, c, t, e, d, h, f, g, C, s, a, n, i, l, u, r, k, b, j, p, y, S, I, m, v, x, "static/chunks/pages/account-bbd79bc5cf1cbf22.js"],
        "/account/settings": [c, g, s, "static/chunks/pages/account/settings-a366148a138718aa.js"],
        "/account/verify-email": ["static/chunks/pages/account/verify-email-2f9632be70a91692.js"],
        "/account/[collectionSlug]": [o, c, t, e, d, h, f, g, C, s, a, n, i, l, u, r, k, b, j, p, y, S, I, m, v, x, "static/chunks/pages/account/[collectionSlug]-e3534b3b290e8566.js"],
        "/activity": [o, c, t, d, h, f, "static/chunks/97165-2771c4a866918a8a.js", s, a, l, u, b, p, m, "static/chunks/pages/activity-f63e43f0c3e8207d.js"],
        "/asset/create": [t, U, M, "static/chunks/pages/asset/create-4dfd71b10fd27dc5.js"],
        "/assets": [o, c, t, e, d, h, f, g, C, s, a, n, i, l, u, r, k, b, j, p, y, S, I, m, v, x, "static/chunks/pages/assets-00c1b2303cbd7f71.js"],
        "/assets/solana/[mint]": [o, c, t, e, d, h, f, g, s, a, i, l, u, r, k, b, p, S, I, v, A, B, P, "static/chunks/pages/assets/solana/[mint]-cfb164e5800e44bc.js"],
        "/assets/solana/[mint]/sell": [i, r, A, q, "static/chunks/pages/assets/solana/[mint]/sell-f1edff38c1fa30cc.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]": [o, c, t, e, d, h, f, g, s, a, i, l, u, r, k, b, p, S, I, v, A, B, P, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]-5bc35fa20bef9803.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/sell": [i, r, A, q, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]/sell-6df149e03bf9fbbc.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/transfer": [S, G, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]/transfer-984ade2880297a96.js"],
        "/bulk-list": [c, s, "static/chunks/pages/bulk-list-7a56f1d0b30e71d5.js"],
        "/bundle/[chain]/sell": [i, r, A, "static/chunks/pages/bundle/[chain]/sell-ce0257003873d700.js"],
        "/bundle/[chain]/transfer": [S, G, "static/chunks/pages/bundle/[chain]/transfer-38ab701a259bcedf.js"],
        "/bundles/[chain]/[slug]": [c, t, e, g, s, a, i, l, u, r, k, I, A, B, "static/chunks/pages/bundles/[chain]/[slug]-c4de51163980a7c3.js"],
        "/callback/bitski": ["static/chunks/pages/callback/bitski-0891523bb64db4a2.js"],
        "/careers": [L, "static/chunks/pages/careers-0742469a8b9d2f40.js"],
        "/category/[categorySlug]": [c, e, j, F, "static/chunks/pages/category/[categorySlug]-c797c58d91bdb067.js"],
        "/collection/create": [t, a, H, "static/chunks/pages/collection/create-8261f0606ad37fb7.js"],
        "/collection/[collectionSlug]": [o, c, t, e, d, h, f, g, C, s, a, n, i, l, u, r, k, b, j, p, y, S, I, m, v, x, z, "static/chunks/pages/collection/[collectionSlug]-4b484aeb6484fe96.js"],
        "/collection/[collectionSlug]/activity": [o, c, t, e, d, h, f, "static/chunks/59292-fce3104203b420e6.js", s, a, n, l, u, b, j, p, y, m, z, "static/chunks/pages/collection/[collectionSlug]/activity-41a493844889dcfc.js"],
        "/collection/[collectionSlug]/analytics": [o, t, e, d, a, n, i, k, b, j, y, z, J, "static/chunks/pages/collection/[collectionSlug]/analytics-8343d0f8c0e134c8.js"],
        "/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit": [t, U, "static/chunks/pages/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit-09e1fd36d327cd35.js"],
        "/collection/[collectionSlug]/assets/create": [t, U, M, "static/chunks/pages/collection/[collectionSlug]/assets/create-244700307497cc87.js"],
        "/collection/[collectionSlug]/drop": ["static/chunks/92a4436f-9a49dd38a57d7c07.js", t, e, N, "static/css/1905a78644faed02.css", "static/chunks/14256-d1ea5e27c9d0213e.js", a, "static/chunks/pages/collection/[collectionSlug]/drop-fa599e66234a307c.js"],
        "/collection/[collectionSlug]/edit": [t, a, H, "static/chunks/pages/collection/[collectionSlug]/edit-bcc3519ffe8c2146.js"],
        "/collection/[collectionSlug]/mint": [T, "static/chunks/pages/collection/[collectionSlug]/mint-9aae69976eb5f557.js"],
        "/collection/[collectionSlug]/orderbook": [o, t, e, d, a, n, i, l, k, j, y, z, J, "static/chunks/pages/collection/[collectionSlug]/orderbook-35f0dba58ea6b3a3.js"],
        "/collection/[collectionSlug]/payouts": [c, t, "static/chunks/48914-ff6d97d248bba398.js", s, a, l, u, "static/chunks/pages/collection/[collectionSlug]/payouts-c6d1e885a009e2c5.js"],
        "/collections": ["static/chunks/pages/collections-c4109aebfccbe618.js"],
        "/connected-socials/account-instagram-callback": ["static/chunks/pages/connected-socials/account-instagram-callback-3b73662922aea779.js"],
        "/connected-socials/account-twitter-callback": ["static/chunks/pages/connected-socials/account-twitter-callback-adbe4bb379b88047.js"],
        "/connected-socials/collection-instagram-callback": ["static/chunks/pages/connected-socials/collection-instagram-callback-7d789f224de89890.js"],
        "/connected-socials/twitter-callback": ["static/chunks/pages/connected-socials/twitter-callback-e28257711cdbd24f.js"],
        "/explore-collections": [c, F, "static/chunks/pages/explore-collections-ac3ca21c123d30ee.js"],
        "/explore-solana": [c, _, N, s, n, w, L, T, D, E, "static/chunks/pages/explore-solana-c5a5eeffcfc8c67b.js"],
        "/internal/footer": ["static/chunks/pages/internal/footer-b4276eb3084250f7.js"],
        "/login": ["static/chunks/pages/login-46cca93f8619e601.js"],
        "/my-watchlist": [c, _, s, "static/chunks/pages/my-watchlist-2c20ad13b4024508.js"],
        "/opensea-grants": ["static/chunks/pages/opensea-grants-315a574faf26aa95.js"],
        "/opensea-ventures": ["static/chunks/pages/opensea-ventures-6b6714837b746761.js"],
        "/partners": [L, "static/chunks/pages/partners-c6a06671bcde9992.js"],
        "/privacy": ["static/chunks/pages/privacy-e5dab052a99264df.js"],
        "/rankings": [c, _, s, n, w, "static/chunks/pages/rankings-acb2878e9ba9e191.js"],
        "/rankings/trending": [c, _, s, n, w, "static/chunks/pages/rankings/trending-dd1190367d16d641.js"],
        "/rankings/watchlist": [c, _, s, n, w, "static/chunks/pages/rankings/watchlist-fc0d11e6a335de5d.js"],
        "/solana-collections": [c, e, F, "static/chunks/pages/solana-collections-89a0630fd4e43ae9.js"],
        "/tax-resources": ["static/chunks/pages/tax-resources-5bad8b068c3b1c8f.js"],
        "/tos": ["static/chunks/pages/tos-4d4fe7176ce62480.js"],
        "/[identifier]": [o, c, t, e, d, h, f, g, C, s, a, n, i, l, u, r, k, b, j, p, y, S, I, m, v, x, "static/chunks/pages/[identifier]-ef303d25ac83ae30.js"],
        "/[identifier]/[collectionSlug]": [o, c, t, e, d, h, f, g, C, s, a, n, i, l, u, r, k, b, j, p, y, S, I, m, v, x, "static/chunks/pages/[identifier]/[collectionSlug]-6101eef3c2f70383.js"],
        sortedPages: ["/", "/_app", "/_app.spec", "/_error", "/about", "/account", "/account/settings", "/account/verify-email", "/account/[collectionSlug]", "/activity", "/asset/create", "/assets", "/assets/solana/[mint]", "/assets/solana/[mint]/sell", "/assets/[chain]/[assetContractAddress]/[tokenId]", "/assets/[chain]/[assetContractAddress]/[tokenId]/sell", "/assets/[chain]/[assetContractAddress]/[tokenId]/transfer", "/bulk-list", "/bundle/[chain]/sell", "/bundle/[chain]/transfer", "/bundles/[chain]/[slug]", "/callback/bitski", "/careers", "/category/[categorySlug]", "/collection/create", "/collection/[collectionSlug]", "/collection/[collectionSlug]/activity", "/collection/[collectionSlug]/analytics", "/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit", "/collection/[collectionSlug]/assets/create", "/collection/[collectionSlug]/drop", "/collection/[collectionSlug]/edit", "/collection/[collectionSlug]/mint", "/collection/[collectionSlug]/orderbook", "/collection/[collectionSlug]/payouts", "/collections", "/connected-socials/account-instagram-callback", "/connected-socials/account-twitter-callback", "/connected-socials/collection-instagram-callback", "/connected-socials/twitter-callback", "/explore-collections", "/explore-solana", "/internal/footer", "/login", "/my-watchlist", "/opensea-grants", "/opensea-ventures", "/partners", "/privacy", "/rankings", "/rankings/trending", "/rankings/watchlist", "/solana-collections", "/tax-resources", "/tos", "/[identifier]", "/[identifier]/[collectionSlug]"]
    }
}("static/chunks/50114-0f185a0fb1c27a9b.js", "static/chunks/3405-626b0668518698fa.js", "static/chunks/44833-acf7cabbb1b71bc7.js", "static/chunks/25459-00d7d0f2dd807d2c.js", "static/chunks/28263-ef811ba12172856a.js", "static/chunks/5371-f16159a431d24e5c.js", "static/chunks/40237-eecec4b001e2df47.js", "static/chunks/60354-eff0a66ff77fed4d.js", "static/chunks/3143e8a8-80a1c40993de99bc.js", "static/chunks/66391-8a391964d39253fd.js", "static/chunks/4459-9e455cc1c32ddd40.js", "static/chunks/13056-94f940a58af65d8f.js", "static/chunks/11424-5ba2b8d657f4dda6.js", "static/chunks/39653-aa1ca629fd6d3aa3.js", "static/chunks/19969-c87987ca53c9dced.js", "static/chunks/71736-c30d00b210304790.js", "static/chunks/31523-70853feea38f899c.js", "static/chunks/57063-1f1ae170049a2814.js", "static/chunks/61793-5032219e40e9b55a.js", "static/chunks/45890-2480b5c0434015d3.js", "static/chunks/96521-635bdb105db7ddbd.js", "static/chunks/88515-d8ad3b74760aa6dc.js", "static/chunks/90186-06d518eaddf929ce.js", "static/chunks/59476-66329985aa149a1d.js", "static/chunks/54951-ee7a72c5fce04a5d.js", "static/chunks/57334-9b4f21f48746fcff.js", "static/chunks/80585-b70d9a618d2b4910.js", "static/chunks/90249-287fb48654f63a99.js", "static/chunks/13465-2e529713bc1e0005.js", "static/chunks/30372-5d36f033d0912de9.js", "static/chunks/99807-dbf4b473a653877a.js", "static/chunks/50746-38de257680898c82.js", "static/chunks/7428-d3238bfabed6f7a8.js", "static/chunks/11224-0f506dbf0c043b22.js", "static/chunks/62761-7a85e89a92143ecc.js", "static/chunks/46422-54db5151e1532015.js", "/:nextInternalLocale/static/images/favicon/favicon.ico", "static/chunks/76158-8a3eafb716eb47af.js", "static/css/9e0b79f72d163b3c.css", "static/chunks/32919-264b48651b001296.js", "static/chunks/20924-9c6e6e3d703d9b11.js", "static/chunks/4234-1c91e3e6beec2dff.js", "static/chunks/23864-f36b554fba6e526a.js", "static/chunks/68223-6c2009ee7fa799b2.js", "static/chunks/49925-5c5e41cec84c4e66.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();