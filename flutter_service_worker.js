'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a976d15e50e054fcf1f0ae84cd01f34c",
"assets/assets/gider.png": "f6a8fdfef3237f29f0b3c1ec9a94247a",
"assets/assets/logo.png": "20cfebea2f1c571e8b6e9ff22551e5c7",
"assets/assets/logo_transparent.png": "df00eefef4d80eb2269d027893f3d1a4",
"assets/FontManifest.json": "1bea77f908e728900842c1f2b421df54",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "82db57fa6908403681d96ef2c5943796",
"assets/packages/circle_flags/assets/svg/ac.svg": "f80befc6bb09c504fd69508b340ffa86",
"assets/packages/circle_flags/assets/svg/ad.svg": "89b7675faf3014508b3e55b18224f0ef",
"assets/packages/circle_flags/assets/svg/ae.svg": "43158b83ebde34baa15ecfe1fe132470",
"assets/packages/circle_flags/assets/svg/af.svg": "ed52837b76b3344324e6dac01b16b0bc",
"assets/packages/circle_flags/assets/svg/ag.svg": "ee8aea90d169850d7c3a43643ec2fb59",
"assets/packages/circle_flags/assets/svg/ai.svg": "3a3b21bddea6d67a13b28411e70451f7",
"assets/packages/circle_flags/assets/svg/al.svg": "b446bc5e6def7dd1ac2eba18a85eabed",
"assets/packages/circle_flags/assets/svg/am.svg": "2ae7caa5b6e139b07c8ea08219c97a3b",
"assets/packages/circle_flags/assets/svg/an.svg": "0acef1e241af15dc29d63b781ee02729",
"assets/packages/circle_flags/assets/svg/ao.svg": "6f079c2bfe91da95fb3169239a1cc9b2",
"assets/packages/circle_flags/assets/svg/aq.svg": "f2e93396d986f788f57bb8c8caec7aa3",
"assets/packages/circle_flags/assets/svg/ar.svg": "22bbd3b859135396d5730cab8e0faa12",
"assets/packages/circle_flags/assets/svg/as.svg": "65f8dee7ba68cd59d69731c395aaa8b6",
"assets/packages/circle_flags/assets/svg/at.svg": "087cdf6b4741896b5fe42a1a019e4859",
"assets/packages/circle_flags/assets/svg/au.svg": "684f6a8ed8fc024181974a721b2f841d",
"assets/packages/circle_flags/assets/svg/aw.svg": "41e4a727f4960628e98923f98a2c56e2",
"assets/packages/circle_flags/assets/svg/ax.svg": "4f00f0fdfec805730f79130cf7490099",
"assets/packages/circle_flags/assets/svg/az.svg": "0a46d81b9f4d6e74df6c0a553c8f616e",
"assets/packages/circle_flags/assets/svg/ba.svg": "ee48e572ba1aca5dddd3f532157c2f7d",
"assets/packages/circle_flags/assets/svg/bb.svg": "f01c3e98ab28dc4706ac9b19ae136515",
"assets/packages/circle_flags/assets/svg/bd.svg": "aa6eb8bc767dabcfe4612ac98da2b6f5",
"assets/packages/circle_flags/assets/svg/be.svg": "cae09b00847008df8bb6e74ab7d25770",
"assets/packages/circle_flags/assets/svg/bf.svg": "2bd8b89e7b9f329f9636d3588d60c9c1",
"assets/packages/circle_flags/assets/svg/bg.svg": "c04b3b71c8cdc255c27d64ef11ef8ac3",
"assets/packages/circle_flags/assets/svg/bh.svg": "c16d2afd114265d947e946db7d021cec",
"assets/packages/circle_flags/assets/svg/bi.svg": "fb54479ca4a35ce10471d7876dbb0f2b",
"assets/packages/circle_flags/assets/svg/bj.svg": "f3bc44b414a8085fd4ac4b74bdfdbdee",
"assets/packages/circle_flags/assets/svg/bl.svg": "c813413a12855888ccd979df6b4a3ab3",
"assets/packages/circle_flags/assets/svg/bm.svg": "53e4b5358eeff31139276d2d008e21d7",
"assets/packages/circle_flags/assets/svg/bn.svg": "225c366e11cb68905c1ee127a80402ed",
"assets/packages/circle_flags/assets/svg/bo.svg": "14aba2a82a6b42eb86d47f6a6284658a",
"assets/packages/circle_flags/assets/svg/bq-bo.svg": "2e33672677f003fc1706bcf38dfee72f",
"assets/packages/circle_flags/assets/svg/bq-sa.svg": "52ed892c88ef61e42e1c3465362db300",
"assets/packages/circle_flags/assets/svg/bq-se.svg": "3e551d07e69dbcc311e3db6e5f7ec2ef",
"assets/packages/circle_flags/assets/svg/bq.svg": "2e33672677f003fc1706bcf38dfee72f",
"assets/packages/circle_flags/assets/svg/br.svg": "02d17088bb4aaf4527bbb2261b9a3aeb",
"assets/packages/circle_flags/assets/svg/bs.svg": "e00480ec602269f3d2f356ed88760cd0",
"assets/packages/circle_flags/assets/svg/bt.svg": "cb65501b256c18d1dcb80497185db82d",
"assets/packages/circle_flags/assets/svg/bv.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/bw.svg": "5f244372b0faf6f7884465c008b0215e",
"assets/packages/circle_flags/assets/svg/by.svg": "964d8abf2f4aa07de1da875ab2206481",
"assets/packages/circle_flags/assets/svg/bz.svg": "1dcacf986aeeaf8e43fb9bf4fd777c4f",
"assets/packages/circle_flags/assets/svg/ca-bc.svg": "18d129f55796f28217e5368f096d97bc",
"assets/packages/circle_flags/assets/svg/ca.svg": "f9299ca944f3ba88b92d3e8bf166cdac",
"assets/packages/circle_flags/assets/svg/cc.svg": "1efea451d3404a0de1c007fe10436eba",
"assets/packages/circle_flags/assets/svg/cd.svg": "eec94b8481f006513b9507a8a9967ce1",
"assets/packages/circle_flags/assets/svg/cf.svg": "c6bd4164c18408f225007f5974cfcd3c",
"assets/packages/circle_flags/assets/svg/cg.svg": "b11f1a83dc32e04a0ecb00107db933fd",
"assets/packages/circle_flags/assets/svg/ch.svg": "2f2cb6a2d15e64be332d8d488d3006ca",
"assets/packages/circle_flags/assets/svg/ci.svg": "526c99fc456aed2ede320a3a44552a06",
"assets/packages/circle_flags/assets/svg/ck.svg": "dc0b2706e9bed3b7086639ad1721a180",
"assets/packages/circle_flags/assets/svg/cl.svg": "69f0f9526b171eb1c0e6168fb5fe178a",
"assets/packages/circle_flags/assets/svg/cm.svg": "59543e68e1a774db1a75092c6ad22a98",
"assets/packages/circle_flags/assets/svg/cn.svg": "33bc8425ef551d9f442c6c231b19c0b0",
"assets/packages/circle_flags/assets/svg/co.svg": "a343c4b17cdc9b56ad71ba1e0de1b5d2",
"assets/packages/circle_flags/assets/svg/cr.svg": "b40308827907504485607b95c68072b2",
"assets/packages/circle_flags/assets/svg/cu.svg": "26857a69d78fb2ec36e439d435589a25",
"assets/packages/circle_flags/assets/svg/cv.svg": "7838e341fdee013e76a8a0f02e02a896",
"assets/packages/circle_flags/assets/svg/cw.svg": "aa010b115b2e25d743f9e6de55bc255b",
"assets/packages/circle_flags/assets/svg/cx.svg": "bd82abf700acd550d17a82bc26dc8e64",
"assets/packages/circle_flags/assets/svg/cy.svg": "ff143ee1a95fdb2806addb8f123f9973",
"assets/packages/circle_flags/assets/svg/cz.svg": "dd724558a466f4f4ee069f39fff62818",
"assets/packages/circle_flags/assets/svg/de.svg": "55dcf5508162c371f3da65ad50180474",
"assets/packages/circle_flags/assets/svg/dj.svg": "15c3c2b832e24791ba2cf68cee1ddf0b",
"assets/packages/circle_flags/assets/svg/dk.svg": "4da8f611498458c86a3cc0feafe9f2e2",
"assets/packages/circle_flags/assets/svg/dm.svg": "4d90ade9aa265fc48c9aff0b1be5e919",
"assets/packages/circle_flags/assets/svg/do.svg": "00a61779a588b564b26cc4b276f43be1",
"assets/packages/circle_flags/assets/svg/dz.svg": "81c542cc9c3eed9b2901402868370a8d",
"assets/packages/circle_flags/assets/svg/easter_island.svg": "ef05c647c03de345776b876b64339d09",
"assets/packages/circle_flags/assets/svg/ec-w.svg": "0027f5bd4872d5906a9b4476478d4f8a",
"assets/packages/circle_flags/assets/svg/ec.svg": "cc99c0f2ca07d2ba955a8f60873cab64",
"assets/packages/circle_flags/assets/svg/ee.svg": "660823717af2e31fd5ff4e35a068afc5",
"assets/packages/circle_flags/assets/svg/eg.svg": "e4700665f17734eb444cf5075528db5d",
"assets/packages/circle_flags/assets/svg/eh.svg": "fe53008c7626792ee0e3bcdb24eb26b9",
"assets/packages/circle_flags/assets/svg/er.svg": "ad9abd0ec23f81081447a406b5545a09",
"assets/packages/circle_flags/assets/svg/es-ce.svg": "4b77e8a38b294567848c5bbbcfdc61e5",
"assets/packages/circle_flags/assets/svg/es-cn.svg": "eda9ddb6623e7f01e7195e37a6c44f59",
"assets/packages/circle_flags/assets/svg/es-ga.svg": "98d4d5e8669155d14fed1e8696813ccb",
"assets/packages/circle_flags/assets/svg/es-ib.svg": "40ad6feef01064938cb741af68a25ca4",
"assets/packages/circle_flags/assets/svg/es-ml.svg": "6fa87d6de5b0aa9ff692b8158b0d6929",
"assets/packages/circle_flags/assets/svg/es-pv.svg": "290d42d66b6e93eb7e3ddde33f1c50c2",
"assets/packages/circle_flags/assets/svg/es-variant.svg": "3902bb17032f3f68e80d5e4351605e78",
"assets/packages/circle_flags/assets/svg/es.svg": "67ed39e8fe57c68b711c26a6587cba00",
"assets/packages/circle_flags/assets/svg/esperanto.svg": "b6d57fb0c24ebce04220870aff30e035",
"assets/packages/circle_flags/assets/svg/et.svg": "95faaa7cebe254bc77ed0271fc707b48",
"assets/packages/circle_flags/assets/svg/european_union.svg": "9b140a871cc76b99499cb4da03a4046b",
"assets/packages/circle_flags/assets/svg/fi.svg": "4e896c6448e6451ebbee545d9343f3ab",
"assets/packages/circle_flags/assets/svg/fj.svg": "144cd809e139a4186ed3164a368ef3b8",
"assets/packages/circle_flags/assets/svg/fk.svg": "c4db4cbbe6f71fa8c3962d379d9e35a3",
"assets/packages/circle_flags/assets/svg/fm.svg": "63ba16dbcfde8b70b87bfaf88951941c",
"assets/packages/circle_flags/assets/svg/fo.svg": "019a0480bc1c34daa8eef499e9a07351",
"assets/packages/circle_flags/assets/svg/fr-h.svg": "43089b2c762b067a316ee6dbc954ebf8",
"assets/packages/circle_flags/assets/svg/fr.svg": "f8eb4977b540e0061fff1083b20d4377",
"assets/packages/circle_flags/assets/svg/ga.svg": "c01b3a0105f28ae37b9bbc2661ed2565",
"assets/packages/circle_flags/assets/svg/gb-eng.svg": "d050a56e287a41eaeacc78eaef7c0358",
"assets/packages/circle_flags/assets/svg/gb-ork.svg": "55041097d3b91b8de580d6c68a7e7ba6",
"assets/packages/circle_flags/assets/svg/gb-sct.svg": "d0351c4d43a3f3f110d708709f553cda",
"assets/packages/circle_flags/assets/svg/gb-wls.svg": "38bc63f22463f3515144e305d31f9d75",
"assets/packages/circle_flags/assets/svg/gb.svg": "106f5c7c1d3a0df64d60bd8a0d17680e",
"assets/packages/circle_flags/assets/svg/gd.svg": "95309fac39e70b44cc36df81d69b94ac",
"assets/packages/circle_flags/assets/svg/ge-ab.svg": "998a80783383964d8298e5aac40b6b8d",
"assets/packages/circle_flags/assets/svg/ge.svg": "7a4eb95de109613e2f401ea09dfcf9e8",
"assets/packages/circle_flags/assets/svg/gf.svg": "ecb5d6990b83932d031980964f652c3e",
"assets/packages/circle_flags/assets/svg/gg.svg": "a5a8b9eb8ef644f39c5037da4b143e5b",
"assets/packages/circle_flags/assets/svg/gh.svg": "a90a4cf2eab37a18c9c5bbe96f9ba74d",
"assets/packages/circle_flags/assets/svg/gi.svg": "437cb19a7aa9c0711599d3b574648c2d",
"assets/packages/circle_flags/assets/svg/gl.svg": "17037df287fbc73d3e5be596c3fda6c2",
"assets/packages/circle_flags/assets/svg/gm.svg": "c8b00a525dd0bb3acfbba286fef8f0e3",
"assets/packages/circle_flags/assets/svg/gn.svg": "59d8d02810b1159f3076618035501077",
"assets/packages/circle_flags/assets/svg/gp.svg": "88c2095c1d5b9eb67906b273dbf19893",
"assets/packages/circle_flags/assets/svg/gq.svg": "5890884b214d2c12fd9f2a448695fd2d",
"assets/packages/circle_flags/assets/svg/gr.svg": "6e60512ccae8faf69d66fcd3db947ccc",
"assets/packages/circle_flags/assets/svg/gs.svg": "4728036cce38ab7b41e20d0a7b9bf847",
"assets/packages/circle_flags/assets/svg/gt.svg": "cda3aef87638b5b1a9a0dd76bcc8dc4f",
"assets/packages/circle_flags/assets/svg/gu.svg": "0487468b04ba93e5c77b25274f811537",
"assets/packages/circle_flags/assets/svg/gw.svg": "348dad3673dfe6004ee0b675a49f77f4",
"assets/packages/circle_flags/assets/svg/gy.svg": "3b9273f9ac8e17066062c43d7ebd951a",
"assets/packages/circle_flags/assets/svg/hausa.svg": "9a83dad6facbe7da17fee9cdeb0938b3",
"assets/packages/circle_flags/assets/svg/hk.svg": "9d2df129593fff7d297fe22e90460917",
"assets/packages/circle_flags/assets/svg/hm.svg": "684f6a8ed8fc024181974a721b2f841d",
"assets/packages/circle_flags/assets/svg/hmong.svg": "d1e8c16e006679f3932f61239683cebe",
"assets/packages/circle_flags/assets/svg/hn.svg": "e1e066e80767cfe830026ae09eafcc5a",
"assets/packages/circle_flags/assets/svg/hr.svg": "47e482440ca6980316313a6684eff0ef",
"assets/packages/circle_flags/assets/svg/ht.svg": "a9aaf67e111bd07793c6af3de4079493",
"assets/packages/circle_flags/assets/svg/hu.svg": "8d6fd787377df5f98055cd4b506bad06",
"assets/packages/circle_flags/assets/svg/id.svg": "1f9fa768c4f4679d3a27a1d8e06b44d9",
"assets/packages/circle_flags/assets/svg/ie.svg": "ed6b8bf7dcfe3a6d33374347f7ec15e0",
"assets/packages/circle_flags/assets/svg/il.svg": "40b2f701cccb3374067946e1751d3d2e",
"assets/packages/circle_flags/assets/svg/im.svg": "f5054ba360c196c53bc9410bcfcc5292",
"assets/packages/circle_flags/assets/svg/in.svg": "06d51a462030a6065253ff0709b7a19b",
"assets/packages/circle_flags/assets/svg/io.svg": "2270085857db59b2b6d576504fb2a839",
"assets/packages/circle_flags/assets/svg/iq.svg": "10f3bee9c0b794beb44b87d2b1d1a23b",
"assets/packages/circle_flags/assets/svg/ir.svg": "e580175b60301cd0f31cfd15333379f8",
"assets/packages/circle_flags/assets/svg/is.svg": "7639e9bd3ad101576713a38e94a7d512",
"assets/packages/circle_flags/assets/svg/it-82.svg": "56a874b68c6aa074e1197b3447949c96",
"assets/packages/circle_flags/assets/svg/it-88.svg": "c90a93eadf4f50443f33b5b6e5b892e4",
"assets/packages/circle_flags/assets/svg/it.svg": "db65ec5f57579bc6d60ac64c74fd36b2",
"assets/packages/circle_flags/assets/svg/je.svg": "f59ffe9a3faae24cb6d3aa1bfc69de18",
"assets/packages/circle_flags/assets/svg/jm.svg": "32d6f134c76c3bd6f2cdca5cd8739cea",
"assets/packages/circle_flags/assets/svg/jo.svg": "b2b71c7206885530255e1585d24e4914",
"assets/packages/circle_flags/assets/svg/jp.svg": "fe9962c9b147543656765ae9c3e70cae",
"assets/packages/circle_flags/assets/svg/kannada.svg": "2648ec163d71181ee1d1cba0cc06ef72",
"assets/packages/circle_flags/assets/svg/ke.svg": "9b414a3bd6f825654ede89172de6cf42",
"assets/packages/circle_flags/assets/svg/kg.svg": "4a37a402786d1bf4ff500caadeb0f76f",
"assets/packages/circle_flags/assets/svg/kh.svg": "dc6a5ea8ad2b973bec240f8efccfb2fe",
"assets/packages/circle_flags/assets/svg/ki.svg": "7835336c6e38700eb8b06095d4b97895",
"assets/packages/circle_flags/assets/svg/km.svg": "522a06e37a46c98e45923cfc50eb827a",
"assets/packages/circle_flags/assets/svg/kn.svg": "cc4ace7dd4148be9c189dab15aebe9e3",
"assets/packages/circle_flags/assets/svg/kp.svg": "a83222b2d9152b65538dec35d09969dd",
"assets/packages/circle_flags/assets/svg/kr.svg": "ce45246807f9d517c9f3791f69939e46",
"assets/packages/circle_flags/assets/svg/kurdistan.svg": "741ccd3babdcb24d72428af01263af47",
"assets/packages/circle_flags/assets/svg/kw.svg": "88a9a029209d7781c0c11dbd3e7bcfff",
"assets/packages/circle_flags/assets/svg/ky.svg": "1321e97ad34a39fed6f51a444957572a",
"assets/packages/circle_flags/assets/svg/kz.svg": "faead64233c731547eb8393cbd2373b1",
"assets/packages/circle_flags/assets/svg/la.svg": "2f670c6d617823c1ecf80ed22dc4f06b",
"assets/packages/circle_flags/assets/svg/lb.svg": "a465a8b4aff49a86c11bcbe3589328e4",
"assets/packages/circle_flags/assets/svg/lc.svg": "8b4adb02d5dae577f1e12015518e49ec",
"assets/packages/circle_flags/assets/svg/li.svg": "aeabe40f9d0d856ea15abf280f9f8a97",
"assets/packages/circle_flags/assets/svg/lk.svg": "1c3ab16dd25d4dd631955fa6e359e218",
"assets/packages/circle_flags/assets/svg/lr.svg": "f6a01fbd251db505a30f130623fe18c2",
"assets/packages/circle_flags/assets/svg/ls.svg": "cbc5db3a3f03615cf9cadc23e740ee1f",
"assets/packages/circle_flags/assets/svg/lt.svg": "f90d4d0df85d57a86b7ae09809e21b0c",
"assets/packages/circle_flags/assets/svg/lu.svg": "5bb7b44f4447b23c0599be9018c6ab86",
"assets/packages/circle_flags/assets/svg/lv.svg": "955c9b9fbc7c495ed7edbb2133c1e3e2",
"assets/packages/circle_flags/assets/svg/ly.svg": "21d21965596bb14a6f50961e1b45915b",
"assets/packages/circle_flags/assets/svg/ma.svg": "8b2b3efe3d903f9b6a917f9b7e9b4a8c",
"assets/packages/circle_flags/assets/svg/malayali.svg": "da4074e5829d9e254b99798875004137",
"assets/packages/circle_flags/assets/svg/maori.svg": "780a41357161eda9c3ed73ad1f8fb197",
"assets/packages/circle_flags/assets/svg/mc.svg": "a3d94920055ecaf056afb18277c2ca4d",
"assets/packages/circle_flags/assets/svg/md.svg": "6dacb299c8e879ede7a67e557be88784",
"assets/packages/circle_flags/assets/svg/me.svg": "b7e44ea3f52feb5eedf3000a71390363",
"assets/packages/circle_flags/assets/svg/mf.svg": "cd673c838473fd13e132e2484ae24aac",
"assets/packages/circle_flags/assets/svg/mg.svg": "0ff81480075cbebcc7b0304cc939e479",
"assets/packages/circle_flags/assets/svg/mh.svg": "95c8d96a5e5a56c0d967d64c25e31382",
"assets/packages/circle_flags/assets/svg/mk.svg": "1a8049eadc2b6c5a419d463424edf981",
"assets/packages/circle_flags/assets/svg/ml.svg": "8db39654af03c82a301bd72741deb954",
"assets/packages/circle_flags/assets/svg/mm.svg": "62ac27359e8fd15428ebb0312047b59b",
"assets/packages/circle_flags/assets/svg/mn.svg": "d89b351b7a3f47e05c5035f8fcbc0b64",
"assets/packages/circle_flags/assets/svg/mo.svg": "ae4cbc769c622ddac3222c848c50e270",
"assets/packages/circle_flags/assets/svg/mp.svg": "ab4edb746288b44caa1475bf8e7216d6",
"assets/packages/circle_flags/assets/svg/mq.svg": "237aebaa3473d9b3b378e5701659a239",
"assets/packages/circle_flags/assets/svg/mr.svg": "48cf1e4b5dd10fc85ddf2f64b17c03b7",
"assets/packages/circle_flags/assets/svg/ms.svg": "488b3eab793b471fe8a1cd671067b91e",
"assets/packages/circle_flags/assets/svg/mt.svg": "dfc9e91b66c8fcf3613b2075fcb952fe",
"assets/packages/circle_flags/assets/svg/mu.svg": "b36ca35897f653cd9d5e1d8ab7b925c0",
"assets/packages/circle_flags/assets/svg/mv.svg": "27371507bc0fd45f4de4b0eaac241f46",
"assets/packages/circle_flags/assets/svg/mw.svg": "fecbd81c8f515994e86c67612f8cba3c",
"assets/packages/circle_flags/assets/svg/mx.svg": "eba2f3900bc96e43df95b08ff5680c0d",
"assets/packages/circle_flags/assets/svg/my.svg": "15a8ec6f22b16844597f5cd9dbb7f698",
"assets/packages/circle_flags/assets/svg/mz.svg": "a237483ad034d6b93ded6130e5a28b22",
"assets/packages/circle_flags/assets/svg/na.svg": "d99b27fe92f05056d239f1b1369a559a",
"assets/packages/circle_flags/assets/svg/nato.svg": "cdf78a6e76cb756a074668f51f5a4aff",
"assets/packages/circle_flags/assets/svg/nc.svg": "fc309bf7c91a0dc20f2a7e91bb74fffe",
"assets/packages/circle_flags/assets/svg/ne.svg": "ee61581e941c96e5a18e081bbb8e038a",
"assets/packages/circle_flags/assets/svg/nf.svg": "fc331cd706a83a3cacbbaeaf68af8f8c",
"assets/packages/circle_flags/assets/svg/ng.svg": "5c430af7aada0e26ce1fc2ec0f1fbdad",
"assets/packages/circle_flags/assets/svg/ni.svg": "4f75194fba70bd74c98b7fadafc48eef",
"assets/packages/circle_flags/assets/svg/nl.svg": "94f110dcfe37cba0290f966dd5359259",
"assets/packages/circle_flags/assets/svg/no.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/northern_cyprus.svg": "b99e898aaf75ecf42727ac9b3764a5a2",
"assets/packages/circle_flags/assets/svg/np.svg": "1838bca752dc49398794161b3e3ef3c9",
"assets/packages/circle_flags/assets/svg/nr.svg": "7db9ac8fad539857d637110db31cc561",
"assets/packages/circle_flags/assets/svg/nu.svg": "7e5ffcccd7f8261cac29066ee378b8ee",
"assets/packages/circle_flags/assets/svg/nz.svg": "69439867cc71f89c6a94aedc748af601",
"assets/packages/circle_flags/assets/svg/om.svg": "3f98a1426fac16eadc5706a209b7dfc4",
"assets/packages/circle_flags/assets/svg/pa.svg": "4963ef7238b3f2b8e1e8d890a4f7916c",
"assets/packages/circle_flags/assets/svg/pe.svg": "68ee39e30571c1632f7d30e2f1443223",
"assets/packages/circle_flags/assets/svg/pf.svg": "07e87ad595fd358f1812fa649701b7d1",
"assets/packages/circle_flags/assets/svg/pg.svg": "73c850ae80c2389a589a749d7392096c",
"assets/packages/circle_flags/assets/svg/ph.svg": "e8ba0912f6f8e2ad603b966540511347",
"assets/packages/circle_flags/assets/svg/pk.svg": "ab4fe19e3e1a45a1a5aa87960a788488",
"assets/packages/circle_flags/assets/svg/pl.svg": "93e96e132d4357fc98c9ea257cc44583",
"assets/packages/circle_flags/assets/svg/pm.svg": "81eaa34ed80b925ca6197cada5cdb9a8",
"assets/packages/circle_flags/assets/svg/pn.svg": "6cf5dce6ce5971f6b64bbe21d9601f21",
"assets/packages/circle_flags/assets/svg/pr.svg": "51383b487d0588d1dbdb7a0be9abd416",
"assets/packages/circle_flags/assets/svg/ps.svg": "2ae41583410d95be9f7a66c91d9e18b7",
"assets/packages/circle_flags/assets/svg/pt-20.svg": "a596a02d4bc1a13285777fbc05430a52",
"assets/packages/circle_flags/assets/svg/pt-30.svg": "e3fb9bb891fa0b38c778802d8c719b0e",
"assets/packages/circle_flags/assets/svg/pt.svg": "fcd61103126462ca397f4f3243e1d1cd",
"assets/packages/circle_flags/assets/svg/pw.svg": "0441d82cb23bb770be13a421b476f27f",
"assets/packages/circle_flags/assets/svg/py.svg": "b879aeb7a091ce4e433710db6b0b4355",
"assets/packages/circle_flags/assets/svg/qa.svg": "98d025a69ca529fb81c656240eb620ee",
"assets/packages/circle_flags/assets/svg/re.svg": "16ec0a3f3334115dde5125bb453eefae",
"assets/packages/circle_flags/assets/svg/ro.svg": "1f1fa55f9a81c1eaea22eee7e36685c9",
"assets/packages/circle_flags/assets/svg/rs.svg": "a995e1e300551178751e422f1b810dda",
"assets/packages/circle_flags/assets/svg/ru.svg": "839ee62b646310b857b1679b54ae5f4c",
"assets/packages/circle_flags/assets/svg/rw.svg": "1e2b64d0ca702e9c166e6aa6a8a25ec7",
"assets/packages/circle_flags/assets/svg/sa.svg": "ab8d4ba846bd8e3a5c211da92f215e6d",
"assets/packages/circle_flags/assets/svg/sb.svg": "973491fc588823e54a3bb8b1f1806921",
"assets/packages/circle_flags/assets/svg/sc.svg": "a99c39ec468f7f30726dc0bd1ec0a30f",
"assets/packages/circle_flags/assets/svg/sd.svg": "2df0511e89ccff16325df02e795a4adb",
"assets/packages/circle_flags/assets/svg/se.svg": "7396469458dffa7c1ec99f506e828b5a",
"assets/packages/circle_flags/assets/svg/sg.svg": "5d5bdb0d940a36aba1bef299222743c1",
"assets/packages/circle_flags/assets/svg/sh-ac.svg": "f80befc6bb09c504fd69508b340ffa86",
"assets/packages/circle_flags/assets/svg/sh-hl.svg": "2f5e28ec7330d2fd43ffd5f766a13ba3",
"assets/packages/circle_flags/assets/svg/sh-ta.svg": "54ffc77512cd8a4d0aae57e82f8d115f",
"assets/packages/circle_flags/assets/svg/sh.svg": "2f5e28ec7330d2fd43ffd5f766a13ba3",
"assets/packages/circle_flags/assets/svg/si.svg": "a91deb607ff6f47c0fce06da505baccc",
"assets/packages/circle_flags/assets/svg/sindh.svg": "52dbd15d1a3b821a6d56f54dab7f7128",
"assets/packages/circle_flags/assets/svg/sj.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/sk.svg": "add61d27b201faca12abe48c5989097f",
"assets/packages/circle_flags/assets/svg/sl.svg": "b0bef4e052fefb5b16e625779eb8a5db",
"assets/packages/circle_flags/assets/svg/sm.svg": "5419fce82d47b20aa1cfbff58612edf0",
"assets/packages/circle_flags/assets/svg/sn.svg": "ce02b4362767028f6485e158377b21da",
"assets/packages/circle_flags/assets/svg/so.svg": "4627fd9171cecdc0f2b6832bbbd7188f",
"assets/packages/circle_flags/assets/svg/somaliland.svg": "2629d69fe6199ba15e457336520ad1c4",
"assets/packages/circle_flags/assets/svg/south_ossetia.svg": "9103c2bf68a2cfd62683b0f5e0fc5741",
"assets/packages/circle_flags/assets/svg/sr.svg": "66b316222fcad7113d15a0b89cc9bbe1",
"assets/packages/circle_flags/assets/svg/ss.svg": "d2370529dbb3e090a4db66d856f7527f",
"assets/packages/circle_flags/assets/svg/st.svg": "25911ebe140d36c94f405cc6041a5167",
"assets/packages/circle_flags/assets/svg/sv.svg": "cfe7380b093828f1609ff709adf61b20",
"assets/packages/circle_flags/assets/svg/sx.svg": "b3d74780ab0cf3a1b1a0b516f0dfaec5",
"assets/packages/circle_flags/assets/svg/sy.svg": "bd539fd8b4ed01f50918f523ac2052d8",
"assets/packages/circle_flags/assets/svg/sz.svg": "074e9bf030d8bb281c24afda74640ea9",
"assets/packages/circle_flags/assets/svg/ta.svg": "54ffc77512cd8a4d0aae57e82f8d115f",
"assets/packages/circle_flags/assets/svg/tc.svg": "5caf39764cb15e0709e652e94e986f5e",
"assets/packages/circle_flags/assets/svg/td.svg": "8d662163422a1017dcf5feaaa0a89ae2",
"assets/packages/circle_flags/assets/svg/tf.svg": "6d41d1a5b400beb74213c17bc67e9844",
"assets/packages/circle_flags/assets/svg/tg.svg": "842212033bc37af4a47814e9cce03825",
"assets/packages/circle_flags/assets/svg/th.svg": "07eebb9921f05fcd67133a994b1de346",
"assets/packages/circle_flags/assets/svg/tibet.svg": "0b1b4721d2e507f50d57868263398959",
"assets/packages/circle_flags/assets/svg/tj.svg": "e50d19d84862233e45387f998d5c796c",
"assets/packages/circle_flags/assets/svg/tk.svg": "90c74fc0eb5727469333cc9be72e4fc9",
"assets/packages/circle_flags/assets/svg/tl.svg": "9e56b5b168d1f3f1c63224574fe2138d",
"assets/packages/circle_flags/assets/svg/tm.svg": "dee9a77e197c95c514993e76c8ec773b",
"assets/packages/circle_flags/assets/svg/tn.svg": "6f8ff7904a3b0a38c421cc5b9c960ee8",
"assets/packages/circle_flags/assets/svg/to.svg": "b936fe5947c7062a5dccdd5776a2dc99",
"assets/packages/circle_flags/assets/svg/tr.svg": "245ead5bb540880d309ac8f0086ca560",
"assets/packages/circle_flags/assets/svg/transnistria.svg": "f1d0f3cc33a89aa123722ff0a0ec7f1d",
"assets/packages/circle_flags/assets/svg/tt.svg": "52c1733868446f64fef5003b838068f0",
"assets/packages/circle_flags/assets/svg/tv.svg": "a7eda155b40cb801fe9241b68eae5e83",
"assets/packages/circle_flags/assets/svg/tw.svg": "0f92646f3f1c384fd31db6e11504f4b4",
"assets/packages/circle_flags/assets/svg/tz.svg": "58737e5afc27d0776101152943b49c0b",
"assets/packages/circle_flags/assets/svg/ua.svg": "6c0f32b588419a29795dc2f396d4baaf",
"assets/packages/circle_flags/assets/svg/ug.svg": "95ae11d0f72a5e4891523d0fee48e3f7",
"assets/packages/circle_flags/assets/svg/um.svg": "4281df1053156e9f9d4608aa28a0fb85",
"assets/packages/circle_flags/assets/svg/united_nations.svg": "ace4d8cc09fda98cc416b17ca976ae94",
"assets/packages/circle_flags/assets/svg/us-hi.svg": "3dc47ef92dc763fd0f95f847c8235f7c",
"assets/packages/circle_flags/assets/svg/us.svg": "4281df1053156e9f9d4608aa28a0fb85",
"assets/packages/circle_flags/assets/svg/uy.svg": "ce36b1fde94b9e32a0868efcfbd239aa",
"assets/packages/circle_flags/assets/svg/uz.svg": "8f5dd129f3f134ea6acaaa1eaccc1cc8",
"assets/packages/circle_flags/assets/svg/va.svg": "4d77e062e0b68a361fcf5dad55085f0a",
"assets/packages/circle_flags/assets/svg/vc.svg": "c1dacf0b7be831c5d76f2f1e39d8695e",
"assets/packages/circle_flags/assets/svg/ve.svg": "3bea8466103da76add3fec9f754f1c39",
"assets/packages/circle_flags/assets/svg/vg.svg": "1119c051959cb02049b2bf91de21f217",
"assets/packages/circle_flags/assets/svg/vi.svg": "c037a1d1a843f2dfdf79d1f71d776280",
"assets/packages/circle_flags/assets/svg/vn.svg": "aeb24c3f5309494bc256e04b5fcda385",
"assets/packages/circle_flags/assets/svg/vu.svg": "ede1218c12210aefaeb56cdb7c585f7c",
"assets/packages/circle_flags/assets/svg/wf.svg": "2d5f8e4cf4bcb23643bd2a819dad8acb",
"assets/packages/circle_flags/assets/svg/ws.svg": "8a51f7d2114dfd16fa68f258a1541825",
"assets/packages/circle_flags/assets/svg/xk.svg": "691fbb7fb344d34bed8431105ea95c24",
"assets/packages/circle_flags/assets/svg/xx.svg": "e7211fa8bc91a38a9f0cdc104560de73",
"assets/packages/circle_flags/assets/svg/ye.svg": "c51cacdcb38497fef0550f194a72d7bf",
"assets/packages/circle_flags/assets/svg/yiddish.svg": "3c4832acb4d8a2c13290e6221c055193",
"assets/packages/circle_flags/assets/svg/yt.svg": "d47884b93bfed3eb63c0a53e283c9e09",
"assets/packages/circle_flags/assets/svg/za.svg": "c5883cb64e958cd98a103b2df8c68649",
"assets/packages/circle_flags/assets/svg/zm.svg": "fba9f9ee5a6034fed1483b56e3f5a78f",
"assets/packages/circle_flags/assets/svg/zw.svg": "ef4f4ac72c1247cd9715492f11284336",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/intl_phone_field/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/packages/intl_phone_field/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/packages/intl_phone_field/assets/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/packages/intl_phone_field/assets/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/packages/intl_phone_field/assets/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/packages/intl_phone_field/assets/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/packages/intl_phone_field/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/packages/intl_phone_field/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/packages/intl_phone_field/assets/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/packages/intl_phone_field/assets/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/packages/intl_phone_field/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/packages/intl_phone_field/assets/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/packages/intl_phone_field/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/packages/intl_phone_field/assets/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/packages/intl_phone_field/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/packages/intl_phone_field/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/packages/intl_phone_field/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/packages/intl_phone_field/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/packages/intl_phone_field/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/packages/intl_phone_field/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/packages/intl_phone_field/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/packages/intl_phone_field/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/packages/intl_phone_field/assets/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/packages/intl_phone_field/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/packages/intl_phone_field/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/packages/intl_phone_field/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/packages/intl_phone_field/assets/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/packages/intl_phone_field/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/packages/intl_phone_field/assets/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/packages/intl_phone_field/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/packages/intl_phone_field/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/packages/intl_phone_field/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/packages/intl_phone_field/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/packages/intl_phone_field/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/packages/intl_phone_field/assets/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/packages/intl_phone_field/assets/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/packages/intl_phone_field/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/packages/intl_phone_field/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/packages/intl_phone_field/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/packages/intl_phone_field/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/packages/intl_phone_field/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/packages/intl_phone_field/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/packages/intl_phone_field/assets/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/packages/intl_phone_field/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/intl_phone_field/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/packages/intl_phone_field/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/packages/intl_phone_field/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/packages/intl_phone_field/assets/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/packages/intl_phone_field/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/packages/intl_phone_field/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/packages/intl_phone_field/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/packages/intl_phone_field/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/packages/intl_phone_field/assets/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/packages/intl_phone_field/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/packages/intl_phone_field/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/packages/intl_phone_field/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/packages/intl_phone_field/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/packages/intl_phone_field/assets/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/packages/intl_phone_field/assets/flags/do.png": "ed35983a9263bb5713be37d9a52caddc",
"assets/packages/intl_phone_field/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/packages/intl_phone_field/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/packages/intl_phone_field/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/packages/intl_phone_field/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/packages/intl_phone_field/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/packages/intl_phone_field/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/packages/intl_phone_field/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/packages/intl_phone_field/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/packages/intl_phone_field/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/packages/intl_phone_field/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/intl_phone_field/assets/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/packages/intl_phone_field/assets/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/packages/intl_phone_field/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/packages/intl_phone_field/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/packages/intl_phone_field/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/packages/intl_phone_field/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/intl_phone_field/assets/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/packages/intl_phone_field/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/packages/intl_phone_field/assets/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/packages/intl_phone_field/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/packages/intl_phone_field/assets/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/packages/intl_phone_field/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/intl_phone_field/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/packages/intl_phone_field/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/packages/intl_phone_field/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/packages/intl_phone_field/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/packages/intl_phone_field/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/packages/intl_phone_field/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/packages/intl_phone_field/assets/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/packages/intl_phone_field/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/packages/intl_phone_field/assets/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/packages/intl_phone_field/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/packages/intl_phone_field/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/packages/intl_phone_field/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/packages/intl_phone_field/assets/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/packages/intl_phone_field/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/packages/intl_phone_field/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/packages/intl_phone_field/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/packages/intl_phone_field/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/intl_phone_field/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/intl_phone_field/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/packages/intl_phone_field/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/packages/intl_phone_field/assets/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/packages/intl_phone_field/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/packages/intl_phone_field/assets/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/packages/intl_phone_field/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/packages/intl_phone_field/assets/flags/is.png": "907840430252c431518005b562707831",
"assets/packages/intl_phone_field/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/packages/intl_phone_field/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/packages/intl_phone_field/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/packages/intl_phone_field/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/packages/intl_phone_field/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/packages/intl_phone_field/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/packages/intl_phone_field/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/packages/intl_phone_field/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/packages/intl_phone_field/assets/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/packages/intl_phone_field/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/packages/intl_phone_field/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/packages/intl_phone_field/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/packages/intl_phone_field/assets/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/packages/intl_phone_field/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/packages/intl_phone_field/assets/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/packages/intl_phone_field/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/packages/intl_phone_field/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/packages/intl_phone_field/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/packages/intl_phone_field/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/packages/intl_phone_field/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/packages/intl_phone_field/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/packages/intl_phone_field/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/packages/intl_phone_field/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/intl_phone_field/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/packages/intl_phone_field/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/packages/intl_phone_field/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/packages/intl_phone_field/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/packages/intl_phone_field/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/packages/intl_phone_field/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/packages/intl_phone_field/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/packages/intl_phone_field/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/packages/intl_phone_field/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/intl_phone_field/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/packages/intl_phone_field/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/packages/intl_phone_field/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/packages/intl_phone_field/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/packages/intl_phone_field/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/packages/intl_phone_field/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/packages/intl_phone_field/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/packages/intl_phone_field/assets/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/packages/intl_phone_field/assets/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/packages/intl_phone_field/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/packages/intl_phone_field/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/packages/intl_phone_field/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/packages/intl_phone_field/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/packages/intl_phone_field/assets/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/packages/intl_phone_field/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/packages/intl_phone_field/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/packages/intl_phone_field/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/packages/intl_phone_field/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/packages/intl_phone_field/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/packages/intl_phone_field/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/packages/intl_phone_field/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/packages/intl_phone_field/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/packages/intl_phone_field/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/packages/intl_phone_field/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/packages/intl_phone_field/assets/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/packages/intl_phone_field/assets/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/packages/intl_phone_field/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/packages/intl_phone_field/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/packages/intl_phone_field/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/packages/intl_phone_field/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/packages/intl_phone_field/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/packages/intl_phone_field/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/packages/intl_phone_field/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/packages/intl_phone_field/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/packages/intl_phone_field/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/packages/intl_phone_field/assets/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/packages/intl_phone_field/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/packages/intl_phone_field/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/packages/intl_phone_field/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/packages/intl_phone_field/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/packages/intl_phone_field/assets/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/packages/intl_phone_field/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/packages/intl_phone_field/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/packages/intl_phone_field/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/intl_phone_field/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/packages/intl_phone_field/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/packages/intl_phone_field/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/packages/intl_phone_field/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/packages/intl_phone_field/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/packages/intl_phone_field/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/packages/intl_phone_field/assets/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/packages/intl_phone_field/assets/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/packages/intl_phone_field/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/packages/intl_phone_field/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/intl_phone_field/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/packages/intl_phone_field/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/packages/intl_phone_field/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/packages/intl_phone_field/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/packages/intl_phone_field/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/packages/intl_phone_field/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/packages/intl_phone_field/assets/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/packages/intl_phone_field/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/packages/intl_phone_field/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/packages/intl_phone_field/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/packages/intl_phone_field/assets/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/packages/intl_phone_field/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/packages/intl_phone_field/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/packages/intl_phone_field/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/packages/intl_phone_field/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/packages/intl_phone_field/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/packages/intl_phone_field/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/packages/intl_phone_field/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/packages/intl_phone_field/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/packages/intl_phone_field/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/packages/intl_phone_field/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/intl_phone_field/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/packages/intl_phone_field/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/packages/intl_phone_field/assets/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/packages/intl_phone_field/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/packages/intl_phone_field/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/packages/intl_phone_field/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/intl_phone_field/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/packages/intl_phone_field/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/packages/intl_phone_field/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/packages/intl_phone_field/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/packages/intl_phone_field/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/packages/intl_phone_field/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/packages/intl_phone_field/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/packages/intl_phone_field/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/packages/intl_phone_field/assets/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/packages/intl_phone_field/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/packages/intl_phone_field/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/intl_phone_field/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/packages/intl_phone_field/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/packages/intl_phone_field/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/packages/intl_phone_field/assets/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/packages/intl_phone_field/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/intl_phone_field/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/packages/intl_phone_field/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/packages/intl_phone_field/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61d6f8b8a84441507bf793f5f62c87a0",
"/": "61d6f8b8a84441507bf793f5f62c87a0",
"main.dart.js": "94112d0aad4bc4eaa9ba19610d0a2dfa",
"manifest.json": "03871feb49187022544858572311ce39",
"version.json": "b0f930d7567418c836212908e037bb24"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
