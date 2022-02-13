/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-12 14:40:57
 * @LastEditTime: 2022-02-13 18:00:30
 * @FilePath: \小米首页\js\index.js
 */
window.onload = () => {
    // 类别模拟数据
    const categoryData = [
        {
            category: '手机',
            list: [
                {
                    title: 'Xiaomi 12Pro',
                    img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c0553468a73cc445012577d8993dfc9.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi 12',
                    img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi 12X',
                    img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a7002e89afcdc705744bb395ad29ca4.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi 11 青春活力版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Note 11 Pro 系列',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a95d59ec8c9c6ae7061f314eb4901e7c.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Note 11 4G',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2c570b7cd666114a7d351a1dd10a527.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Note 11 5G',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca3caca774dc8be0a453c90d1fa58e13.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Redmi K40',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi Civi',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f33903e1162959f500360a39896f2306.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi MIX 4',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa2bae1f43611e80a8e4877719c76bdb.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi MIX FOLD',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi 11 Ultra',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: 'Xiaomi 11 Pro',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Xiaomi 11',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Xiaomi 10S',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'K40 游戏增强版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab956ee82c24bdd83d21bc212aad3eb5.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'K40 Pro 系列',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Note 10 5G',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/79e2935264bf9247aa7512e330112820.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Note 10 Pro',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi 9A',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Xiaomi 11 青春',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }
                , {
                    title: '黑鲨4S Pro',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b45cbcf2bbe244982b2e865fa5077a52.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: '黑鲨4S',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/958d5b4cf1f6a755b97b797f4cec67ed.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi Note 9  4G',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }
            ]
        },
        {
            category: '电视',
            list: [
                {
                    title: 'Redmi X65 2022款',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: '小米拍拍4K高清投屏器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/943995e8d1b1a884e123aec25cc1f8b8.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi X55 2022款',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视6 55”  OLED',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50194366cfebbc7c82489d0094c1f944.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视6 65”  OLED',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50194366cfebbc7c82489d0094c1f944.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视 大师  77”  OLED',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b91c9ef670fa1c12eddf23b209f9ff33.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视6 至尊版 55英寸',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视6 至尊版 65英寸',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视6 至尊版 75英寸',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视 ES43 2022款',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视 ES55 2022款',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视 ES65 2022款',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视 ES75 2022款',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '金属全面屏电视',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d219d8b9c4a74eda4ae6c0222d194cd2.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '大师电视 65英寸 OLED',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视4A 60英寸',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1df560d16cc983b0f34d24fc484bd697.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi 智能电视 X55',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米全面屏电视',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '米家激光投影仪',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce75f4a3fef148b6729061a18f994aa7.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi 智能电视 MAX 98"',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视5 75英寸',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视4A 70英寸',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6797917392e912577135d9eb8ad92f1f.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米电视4S 75英寸',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cb5791161d8b25897f60385f0ec7ab2.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '激光投影电视',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fa264c15d3829e6de4283a552651e22.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }
            ]
        },
        {
            category: '笔记本 平板',
            list: [
                {
                    title: 'RedmiBook Pro 14 增强版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本 Pro 14 锐龙版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69901cac7084025d81300155e9beb5f2.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'RedmiBook Pro 15 增强版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本 Pro X 14',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/903da48ebe975727aeb5ef76186d03cf.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi G 2021 Intel版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/994d6bcece6aa49d9c6cb709f4d9344a.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi G 2021 AMD版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/90bbbedc36c06c931c471d3587425914.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米平板5',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8760786dbdaff5162ba9b0c3c61a7ab.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米平板5 Pro',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d63d8ac9dfb64bf7ca84c7d674047f19.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米平板5 Pro 5G',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b34e14c8896df008e17e73e5cfdd3e2c.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本 Pro 14 增强版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本 Pro 15 增强版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本 Pro X 15',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e69fe4849e3e42bd4394e2be04a5c82.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'RedmiBook Pro 14 锐龙版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'RedmiBook Pro 15 锐龙版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本 Pro 15 锐龙版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本Pro 15',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米笔记本Pro 14',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'RedmiBook Air 13',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '键鼠套装',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eb7e33b11443f6927e2035eca7c3d9e.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '鼠标',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png?thumb=1&w=50&h=50',
                    href: '#'
                }
            ]
        },
        {
            category: '家电',
            list: [
                {
                    title: '冰箱',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                },
                {
                    title: '立式空调',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '壁挂空调',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '滚筒洗衣机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: 'Redmi全自动波轮洗衣机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '净水器',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '微波炉',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '电烤箱',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7f39b7ac49227fc59c3f2b2105d25d6.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '扫地机器人',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '吸尘器',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '空气净化器',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '电饭煲',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '电磁炉',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '电水壶',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '滤水壶',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ffcebcacca008ed2d92a692f7312ef6.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '落地风扇',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '投影仪',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '灯具',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '插线板',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '新风机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '电暖器',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '电压力锅',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ba8d2a2d383f612575d323ce159bdce3.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '料理机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '电煮壶',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b7de8a5bc64975df73f5fde5507fc8d1.jpg?thumb=1&w=50&h=50',
                    href: '#'
                },
            ]
        },
        {
            category: '出行 穿戴',
            list: [
                {
                    title: 'Xiaomi Watch S1',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f1e9923aac0604cfd8058f862ad26d06.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi 手表 2',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Xiaomi Watch Color 2',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8f0da517177fd03bb14e1f2ef3b448b.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米手环6 NFC版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米手环6 标准版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi 手表',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米手环5NFC',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e8c85f251ed8b5cd54651c4be13bc68.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米手环5',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/18f75b53afbe8ce2e858cb5622d60613.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '平衡车',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '自行车',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/749c779fd3789ba94033da8aaa547dcd.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '滑板车',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '车载充电器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/787c807176455f9ae40146af11e98b1e.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '智能记录仪',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '充气宝',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4003fd9fe0f81232c5e7c6ce2a9b3b7.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '石英表',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f941386e72f745b02e8921b6c8055cd6.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }
            ]
        },
        {
            category: '智能 路由器',
            list: [
                {
                    title: 'CyberDog',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'MIJIA K歌麦克风',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/435f8b56d41de210d1c4598f4f00fa50.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '打印机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '喷墨打印机',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '喷墨打印机墨水',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米路由器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '智能家庭',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '对讲机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '摄像机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '智能门锁',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '小爱老师',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: 'Redmi路由器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/51eacc66512a31713808a60b5695ae28.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小爱音箱',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }
            ]
        }, {

            category: '电源 配件',
            list: [
                {
                    title: '移动电源',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '数据线',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '充电器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '电池',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '自拍杆',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '手机壳',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '手机贴膜',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '无线充电器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '平板配件',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '黑鲨配件',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '其他配件',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }]
        },
        {
            category: '健康 儿童',
            list: [
                {
                    title: '米家跑步机',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '洗手机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '修剪器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '剃须刀',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '牙刷',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '吹风机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '体重秤',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '体脂秤',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '早教启智',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '益智积木',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9d211ae20e700690ce9eec644ac3f31.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '儿童手表',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '儿童滑板车',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '婴儿推车',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '理发器',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4568ec9535a8707cea88dcd0148dda8.jpeg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '走步机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '智能遥控车',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5852aab5992fdb1db09cd89edcb802c0.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }
            ]
        },
        {
            category: '耳机 音响',
            list: [
                {
                    title: 'Xiaomi 真无线降噪耳机 3',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3eefd81174858e0300c66c8421a553a4.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi Buds 3 青春版',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi Buds 3',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/336df8c7b2a0bdc4398ffa9094cd28a5.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Xiaomi Sound',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc146116e24cc288014cc40e28f15a2.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: 'Redmi小爱触屏音箱 8',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小爱触屏音箱Pro 8',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/146ad5dbbe9721c031aa168d4bf580ec.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小爱音箱 Pro ',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米小爱音箱',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米小爱触屏音箱',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: 'Redmi音箱',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米小爱音箱 Play',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '线控耳机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '蓝牙耳机',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '头戴耳机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '品牌耳机',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '蓝牙音箱',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e8b89fb3702dc7c41248898f2b86f6d.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '小米AI音箱',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '小米小爱音箱HD',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4df2fa022495e79f890a943a9d7e70a5.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }
            ]
        },
        {
            category: '生活 箱包',
            list: [
                {
                    title: '小背包',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '双肩包',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '旅行箱',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '运动鞋',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '眼镜',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '床垫',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '枕头',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '螺丝刀',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '保温杯',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '驱蚊器',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '毛巾/浴巾',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }, {
                    title: '米兔',
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ac95ad25bb8f6391abcb937b03c1743.png?thumb=1&w=50&h=50&f=webp&q=90',
                    href: '#'
                }, {
                    title: '笔',
                    img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&w=50&h=50',
                    href: '#'
                }
            ]
        },

    ]
    // 商品类别
    const category = document.querySelectorAll('.category li');
    const categoryDetails = document.querySelector('.category-details');
    categoryDetails.addEventListener('mouseover', () => {
        categoryDetails.style.display = 'flex';
    });
    categoryDetails.addEventListener('mouseout', () => {
        categoryDetails.style.display = 'none';
    });
    for (let i = 0; i < category.length; i++) {
        category[i].addEventListener('mouseover', () => {
            categoryDetails.style.display = 'flex';
            let html = '';
            for (const item of categoryData[i].list) {
                html += `<a href="${item.href}">
                    <img src="${item.img}">
                    <span>${item.title}</span>
                </a>`;
            }
            categoryDetails.innerHTML = html;
        });
        category[i].addEventListener('mouseout', () => {
            categoryDetails.style.display = 'none';
        });
    }






    // 实现轮播图左右按钮的功能
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const swiper = document.querySelector('.swiper');
    console.log();
    const swiperNum = swiper.children.length - 2;
    const swiperWidth = 1226;
    let curIndex = 1;
    let flag = true;
    // 渲染 小圆点
    const dotBox = document.querySelector('.dots-container ul');
    for (let i = 0; i < swiperNum; i++) {
        const li = document.createElement('li');
        dotBox.appendChild(li);
    }
    dotBox.children[curIndex - 1].classList.add('active');
    // 左键
    leftBtn.addEventListener('click', (e) => {
        if (!flag) return;
        flag = false;
        --curIndex;
        for (const li of dotBox.children) {
            li.classList.remove('active')
        }
        if (curIndex === 0) {
            dotBox.children[swiperNum - 1].classList.add('active');
        } else {
            dotBox.children[curIndex - 1].classList.add('active');
        }
        swiper.style.left = curIndex * -swiperWidth + 'px';
        setTimeout(() => {
            if (curIndex === 0) {
                curIndex = swiperNum;
                swiper.style.transition = "none";
                swiper.style.left = curIndex * -swiperWidth + 'px';
            }
            flag = true;
        }, 800)
        swiper.style.transition = "all 0.8s";

    });
    // 右键
    rightBtn.addEventListener('click', (e) => {
        if (!flag) return;
        flag = false;
        ++curIndex
        for (const li of dotBox.children) {
            li.classList.remove('active')
        }
        if (curIndex === swiperNum + 1) {
            dotBox.children[0].classList.add('active');
        } else {
            dotBox.children[curIndex - 1].classList.add('active');
        }
        swiper.style.left = curIndex * -swiperWidth + 'px';
        setTimeout(() => {
            if (curIndex === swiperNum + 1) {
                curIndex = 1;
                swiper.style.transition = "none";
                swiper.style.left = curIndex * -swiperWidth + 'px';
            }
            flag = true;
        }, 800)

        swiper.style.transition = "all 0.8s";

    });
    // 小圆点点击
    for (let i = 0; i < dotBox.children.length; i++) {
        dotBox.children[i].addEventListener('click', () => {
            if (!flag) return;
            flag = false;
            for (const li of dotBox.children) {
                li.classList.remove('active');
            }
            dotBox.children[i].classList.add('active');
            curIndex = i + 1;
            swiper.style.transition = "all 0.8s";
            swiper.style.left = curIndex * -swiperWidth + 'px';
            setTimeout(() => {
                flag = true;
            }, 800);
        })
    }
    // 自动轮播
    setInterval(() => {
        rightBtn.click();
    }, 8000)

    // 商品数据模拟
    const goodsData = [
        {
            title: '手机',
            moreUrl: '#',
            hotImg: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=293&h=768&f=webp&q=90',
            hotUrl: '#',
            goodsList: [
                {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7382271e3a677bf188679ca38d68a42.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Xiaomi 12 Pro',
                    subtitle: '全新晓龙8 | 2K AMOLED屏幕',
                    price: '4699元起',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e870129c5c374088bf7cc46be0b7ace2.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Xiaomi 12',
                    subtitle: '全新骁龙8｜5000万主摄',
                    price: '3699元起',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/63e15f377e87212d460592b4a1369ccd.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Xiaomi 12X',
                    subtitle: '骁龙870｜5000万主摄',
                    price: '3199元起',
                    url: '#'
                },
                {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d4b362431de4bdda03315ffdbc7b32a.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Xiaomi 11 青春活力版',
                    subtitle: '轻薄5G，内外皆出彩',
                    price: '1999元起',
                    url: '#'
                },
                {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Redmi Note 11 Pro系列',
                    subtitle: '三星AMOLED高刷屏',
                    price: '1799元起',
                    url: '#'
                },
                {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50da95e9e4496dcac8704da2deb94f6e.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Redmi Note 11 5G',
                    subtitle: '5000mAh大电量',
                    price: '1199元起',
                    url: '#'
                },
                {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c001ebc4aee69bc9ff6fae9ecf9137d0.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Redmi Note 11 4G',
                    subtitle: '5000mAh大电量',
                    price: '999元起',
                    url: '#'
                },
                {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3490cfc52dc7c9abf9badfa1dc2d0eae.png?thumb=1&w=250&h=250&f=webp&q=90',
                    title: '黑鲨4S Pro',
                    subtitle: '磁动力升降肩键',
                    price: '4799元起',
                    url: '#'
                },
            ]
        }, {
            title: '智能穿戴',
            moreUrl: '#',
            hotImg: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9895c56a7b792fb9053e3085fc261072.jpg?thumb=1&w=293&h=768&f=webp&q=90',
            hotUrl: '#',
            goodsList: [
                {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8259e8fb355acf168c66f75d375c6af.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Xiaomi Watch S1',
                    subtitle: '腕事俱备',
                    price: '1099元起',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b271a074e087848357aa61ae665b214.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Xiaomi真无线降噪耳机3',
                    subtitle: '静听好声音',
                    price: '499元',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f84503dbf5adbdf17111c61d4a7cf893.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Redmi 手表 2',
                    subtitle: 'AMOLED高清大屏',
                    price: '399元',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b28153b80cb2c67564608e56d5c2f3f3.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: '小米手环6 NFC版',
                    subtitle: '全屏实力',
                    price: '279元',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfec307342eb35ee4a437f664004c50f.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Redmi 手表',
                    subtitle: '35g超轻/1.4"大屏/多功能NFC/7天长续航',
                    price: '299元',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cc4e8e58d7288cd8dff13b98bdc3ea8.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Xiaomi 真无线降噪耳机 3 Pro',
                    subtitle: '动态降噪 静听曼妙',
                    price: '699元',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/11570d5371f16d2d9b19f504e09d01f0.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Redmi Buds 3半入耳真无线蓝牙耳机',
                    subtitle: '轻巧半入耳，舒适有天分',
                    price: '199元',
                    url: '#'
                }, {
                    img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/66c7a6e46c5f1a7214eab8182d78171e.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                    title: 'Redmi AirDots 3真无线蓝牙耳机',
                    subtitle: '圈铁音质，超长续航',
                    price: '199元',
                    url: '#'
                },
            ]
        }
    ];
    let goodsHtml = `            
            <div class="hot-ad">
                <img
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8fcbfdaef3d482f7e187fcc63c9a17f3.jpg?thumb=1&w=1533&h=150&f=webp&q=90">
            </div>
        `
    for (const item of goodsData) {
        goodsHtml += `
            <div class="goods-box">
                <div class="goods-box-title">
                    <span>${item.title}</span>
                    <a href="${item.moreUrl}">
                        查看更多
                        <span><i class="iconfont icon-xiangyou1"></i></span>
                    </a>
                </div>
                <div class="goods-list-container">
                    <a class="hot-goods" href="${item.hotUrl}">
                        <img
                            src="${item.hotImg}">
                    </a>
                    <ul class="goods-list">
        `;
        for (const goods of item.goodsList) {
            goodsHtml += `
                <li>
                    <a href="${goods.url}">
                        <img src="${goods.img}">
                        <span class="goods-title">${goods.title}</span>
                        <span class="goods-subtitle">${goods.subtitle}</span>
                        <span class="goods-price">${goods.price}</span>
                    </a>
                </li>`
        }
        goodsHtml += `
                    </ul>
                </div>
            </div>
        `
        document.querySelector('.goods-main').innerHTML = goodsHtml;
    }
}