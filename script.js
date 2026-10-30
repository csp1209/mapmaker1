// ==========================================================================
// 1. DEFAULT AUTHENTIC B13 DATA & COLUMN SPACING HELPERS
// ==========================================================================
function getDefaultConfig() {
  const raw = {
    layout: {
      mapPosition: 'left',          // 'left' (左邊路線圖+右邊資料) | 'right' (右邊路線圖+左邊資料)
      mapWidthPercent: 63,          // Route map width ratio (%)
      sheetPaddingMm: 5,            // Uniform outer margin in mm-equivalent (supports 0~15mm freely)
      mapOffsetX: 0,                // Flexible X offset (px)
      mapOffsetY: 0,                // Flexible Y offset (px)
      autoSplitMaxStops: 23,        // Automatically split to next column on the right if exceeded
      colTopSpaces: [0, 0, 0],      // Per-column custom top pull-down space (px)
      columnGapPx: 14,              // Gap between route map columns
      stopVerticalGapPx: 3.0,       // Customizable vertical spacing gap between stops (px)
      nodeToNameGapPx: 6.0,         // Customizable horizontal gap between stop marker and stop name (px)
      stopNameFontSizePx: 10.2,     // Stop Chinese font size
      stopEnFontSizePx: 8.0,        // Stop English font size
      lineThicknessPx: 4.5,         // Route line thickness
      normalNodeSizePx: 9.5,        // Normal stop circle diameter
      parallelLineSpacingPx: 14,    // Spacing between multiple parallel route lines (supports small values 6px~26px)
      variantDisplayMode: 'single_with_style', // 'single_with_style' | 'parallel_lines'
      showVariantLegend: true,      // Freely toggle route map top variant legend bar
      evenZoneCoverAllStops: true,  // Even section fare light background wraps all stops in that even fare zone as ONE container
      stickLastModuleToBottom: false,
      exportEngine: 'svg',
      exportScale: 2,
      exportTextOffsetY: 0
    },
    colors: {
      themePrimary: '#0d8556',
      routeLineColor: '#0d8556',
      originDestBg: '#0d8556',
      originDestText: 'white',
      districtBg: '#0d8556',
      districtText: 'white',
      fareBg: '#0d8556',
      fareText: 'white',
      // 路線圖雙數分段收費淺色背景（獨立於時間表時段與時鐘背景）
      evenZoneBgEnabled: true,
      evenZoneBg: '#dcedc8',
      landmarkBg: '#e5e7eb',
      landmarkText: '#111827',
      // 路線框、分開模式的目的地及途徑方向背景顏色
      routeBoxBg: '#0d8556',
      routeBoxText: '#ffffff',
      destBoxBg: '#0d8556',
      destBoxText: '#ffffff',
      viaBoxBg: '#006829',
      viaBoxText: '#ffffff',
      // 開出背景、「班次(分鐘)」、時段背景、時鐘 SVG 背景 及 路線框目的地（只限 目的地+途徑同一個Container）背景顏色：統一與時間表日期背景顏色 (dateHeaderBg) 一樣
      dateHeaderBg: '#dcedc8',
      dateHeaderText: '#111827',
      originHeaderBg: '#dcedc8',
      originHeaderText: 'black',
      headwayHeaderBg: '#dcedc8',
      headwayHeaderText: 'black',
      clockContainerBg: '#dcedc8',
      clockSvgColor: '#0d8556',
      combinedDestViaBg: '#dcedc8',
      combinedDestViaText: '#111827',
      timetableSlotEvenBg: '#f8fafc',
      timetableSlotOddBg: '#f1f5f9',
      // 路線中英文簡介橫幅、時間表標題、八達通分段收費及巴士轉乘計劃背景與文字顏色
      timetableHeaderBg: '#0d8556',
      timetableHeaderText: '#ffffff',
      introBannerBg: '#0d8556',
      introBannerText: '#ffffff',
      octopusHeaderBg: '#0d8556',
      octopusHeaderText: '#ffffff',
      bbiHeaderBg: '#0d8556',
      bbiHeaderText: '#ffffff',
      timetableBg: '#ffffff',
      timetableThickLineColor: '#0d8556',
      infoSectionHeaderBg: '#f3f4f6',
      infoAccentColor: '#0d8556',
      _v3ColorSynced: true
    },
    variants: [
      {
        id: 'v1',
        name: '常規班次 (全程)',
        code: '',
        routeNumber: '',
        routeBoxInnerWhiteLine: true,
        routeBoxPosition: 'left',
        routeBoxColor: '#0d8556',
        routeBoxTextColor: '#ffffff',
        color: '#0d8556',
        badgeText: 'white',
        lineStyle: 'solid'
      },
      {
        id: 'v2',
        name: '特別班次 (不經錦田公路#)',
        code: '#',
        routeNumber: '',
        routeBoxInnerWhiteLine: true,
        routeBoxPosition: 'left',
        routeBoxColor: '#0d8556',
        routeBoxTextColor: '#ffffff',
        color: '#0284c7',
        badgeText: 'white',
        lineStyle: 'dashed'
      }
    ],
    rightModulesOrder: [
      'route_header',
      'intro_banner',
      'timetable',
      'additional_info',
      'octopus_fare',
      'bbi_info',
      'effective_footer'
    ],
    rightData: {
      routeNumber: 'B13',
      routeNumberFontSizePx: 100,
      headerMentionedRouteFontSizePx: 13,
      headerMentionedRoutes: '',
      routeBoxInnerWhiteLine: true,
      headerMentionedInnerWhiteLine: false,
      headerTwoPerRow: false,
      routeBoxes: [
        {
          id: 'rb_1',
          routeNumber: 'B13',
          fontSizePx: 100,
          innerWhiteLine: true,
          padX: 8,
          padY: 20,
          outerPad: 5,
          letterSpacingEm: -0.025,
          tokenGapPx: 2.5,
          owlPosition: 'auto',
          bgColor: '',
          textColor: '',
          destZh: '',
          destEn: ''
        }
      ],
      destZh: '皇崗口岸',
      destEn: 'Huanggang Port',
      viaZh: '西隧、大欖隧道',
      viaEn: 'WHC, Tai Lam Tunnel',
      introEnabled: true,
      introZh: '一程直達深圳・北上更方便',
      introEn: 'Direct access to Shenzhen, easier than ever',
      timetable: {
        titleZh: '時間表',
        titleEn: 'Timetable',
        mentionedRouteFontSizePx: 9.2,
        mentionedRouteStyle: 'badge',
        mentionedRouteNumbers: '',
        originHeaderZh: '小西灣(藍灣半島)開出',
        originHeaderEn: 'From Siu Sai Wan (Island Resort)',
        headwayLabelZh: '班次(分鐘)',
        headwayLabelEn: 'Headway (min)',
        dateGroups: [
          {
            id: 'dg1',
            dateTitleZh: '每日',
            dateTitleEn: 'Daily',
            rows: [
              { time: '0600 - 0030', headway: '30' }
            ]
          }
        ],
        variantTables: [
          {
            variantId: 'v1',
            enabled: true,
            showVariantBadge: true,
            routeNumber: '',
            routeBoxInnerWhiteLine: true,
            routeBoxPosition: 'left',
            routeBoxColor: '#0d8556',
            routeBoxTextColor: '#ffffff',
            mentionedRouteNumbers: '',
            showHeadwayCol: true,
            showDateHeader: true,
            originHeaderZh: '小西灣(藍灣半島)開出',
            originHeaderEn: 'From Siu Sai Wan (Island Resort)',
            headwayLabelZh: '班次(分鐘)',
            headwayLabelEn: 'Headway (min)',
            topNoteZh: '',
            topNoteEn: '',
            bottomNoteZh: '',
            bottomNoteEn: '',
            dateGroups: [
              {
                id: 'dg_v1_1',
                dateTitleZh: '每日',
                dateTitleEn: 'Daily',
                rows: [
                  { time: '0600 - 0030', headway: '30' }
                ]
              }
            ]
          },
          {
            variantId: 'v2',
            enabled: true,
            showVariantBadge: true,
            routeNumber: '',
            routeBoxInnerWhiteLine: true,
            routeBoxPosition: 'left',
            routeBoxColor: '#0d8556',
            routeBoxTextColor: '#ffffff',
            mentionedRouteNumbers: '',
            showHeadwayCol: true,
            showDateHeader: true,
            originHeaderZh: '小西灣(藍灣半島)開出',
            originHeaderEn: 'From Siu Sai Wan (Island Resort)',
            headwayLabelZh: '班次(分鐘)',
            headwayLabelEn: 'Headway (min)',
            topNoteZh: '',
            topNoteEn: '',
            bottomNoteZh: '視乎乘客需求加開',
            bottomNoteEn: 'Operated subject to passenger demand',
            dateGroups: [
              {
                id: 'dg_v2_1',
                dateTitleZh: '每日',
                dateTitleEn: 'Daily',
                rows: [
                  { time: '0700 - 2200', headway: '30 - 60' }
                ]
              }
            ]
          }
        ]
      },
      additionalInfo: {
        enabled: true,
        notes: [
          {
            symbol: '#',
            zh: '視乎乘客需求，或會加開不經錦田公路至新田的特別班次。',
            en: 'Additional express journeys omitting Kam Tin Rd to San Tin may be operated subject to demand.'
          }
        ],
        disclaimerZh: '本時間表只供參考之用。',
        disclaimerEn: 'This timetable is published as a guide to the general level of service only.'
      },
      octopusFare: {
        enabled: true,
        titleZh: '八達通及電子支付分段收費',
        titleEn: 'Octopus & e-payment Section Fare',
        items: [
          {
            sectionZh: '高埔村往新田',
            sectionEn: 'Ko Po Tsuen to San Tin',
            price: '$6.6'
          }
        ],
        noteZh: '乘客在上下車時，必須使用同一張八達通或同一個電子支付工具的帳戶在收費器上拍卡或掃描二維碼一次，方可享用分段收費優惠。',
        noteEn: 'To enjoy the section fare discount, passengers must present the same Octopus card or use the same e-payment account when boarding and alighting the bus.'
      },
      bbiInfo: {
        enabled: true,
        titleZh: '巴士轉乘計劃',
        titleEn: 'Bus-Bus Interchange',
        items: [],
        footerZh: '詳情請瀏覽城巴網頁',
        footerEn: 'Please refer to Citybus Website for details',
        showQrBox: true
      },
      effectiveFooter: {
        enabled: true,
        dateZh: '2026年10月12日',
        dateEn: '12 October 2026',
        concessionZh: '十二歲以下小童及六十五歲或以上長者可享半價優惠',
        concessionEn: 'Half fare for children under the age of 12 and seniors aged 65 or above',
        showNoGovConcession: false, // 默認不選「政府長者及合資格殘障人士公共運輸票價優惠計劃不適用」
        noGovConcessionText: '「政府長者及合資格殘障人士公共運輸票價優惠計劃」並不適用於本路線 | The Government Public Transport Fare Concession Scheme for the Elderly and Eligible Persons with Disabilities is not applicable to this route',
        website: 'www.citybus.com.hk',
        hotline: '2136 8888',
        showWebsiteSvg: true,
        showHotlineSvg: true,
        contactOrder: 'website_first',
        contactFontSizePx: 8.4,
        contactSvgSizePx: 9.5,
        contactGapPx: 10,
        operatorZh: '城巴',
        operatorEn: 'Citybus',
        versionCode: 'B13_261012_V1',
        operatorFontSizePx: 7.0,        // 右邊第二行：營運商名稱字體大小 (px)
        versionFontSizePx: 8.2,         // 右邊第一行：版本編號字體大小 (px，較營運商大一點)
        operatorVersionColor: '#64748b',// 版本編號與營運商統一字體顏色
        operatorVersionWeight: '700',   // 版本編號與營運商統一字體粗細
        operatorVersionLineGapPx: 1.5,  // 右邊第一行(版本號)與右邊第二行(營運商)的行距 (px)
        footerBottomLayout: 'stacked',  // 'stacked' (先左邊一行，再右邊兩行) | 'side_by_side' (左邊一行與右邊兩行左右並排)
        autoSyncVersionDate: true,      // 修改生效日期時自動同步版本號內的 YYMMDD
        _v2NoGovDefaultUnchecked: true
      }
    },
    stops: [
      { id: 's1', type: 'origin', variantType: { v1: 'origin', v2: 'origin' }, zh: '小西灣(藍灣半島)', en: 'Siu Sai Wan (Island Resort)', districtZh: '', districtEn: '', districtWidth: '100%', fare: '$27.60', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's2', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '富景花園, 小西灣道', en: 'Fullview Garden, Siu Sai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's3', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '小西灣邨, 小西灣道', en: 'Siu Sai Wan Est, Siu Sai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's4', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '富城閣, 柴灣道', en: 'Fu Shing Court, Chai Wan Rd', districtZh: '柴灣', districtEn: 'Chai Wan', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's5', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '樂軒臺, 柴灣道', en: 'Lok Hin Terrace, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's6', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '環翠商場, 柴灣道', en: 'Wan Tsui Shopping Centre, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's7', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '青年廣場, 柴灣道', en: 'Youth Sq, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's8', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '興華邨裕興樓, 柴灣道', en: 'Yu Hing Hse Hing Wah Est, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's9', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '天主教海星堂, 柴灣道', en: 'Star of the Sea Catholic Church, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's10', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '興民邨, 柴灣道', en: 'Hing Man Est, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's11', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '山翠苑, 柴灣道', en: 'Shan Tsui Court, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's12', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '筲箕灣官立中學, 柴灣道', en: 'Shau Kei Wan Gov Sec Sch, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's13', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '阿公岩道, 柴灣道', en: 'A Kung Ngam Rd, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's14', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '南安里, 筲箕灣道', en: 'Nam On Lane, Shau Kei Wan Rd', districtZh: '筲箕灣', districtEn: 'Shau Kei Wan', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's15', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '新成街, 筲箕灣道', en: 'Sun Sing St, Shau Kei Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's16', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '海晏街, 筲箕灣道', en: 'Hoi An St, Shau Kei Wan Rd', districtZh: '西灣河', districtEn: 'Sai Wan Ho', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's17', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '西灣河文娛中心, 筲箕灣道', en: 'Sai Wan Ho Civic Centre, Shau Kei Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's18', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '太富街, 筲箕灣道', en: 'Tai Foo St, Shau Kei Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's19', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '康怡廣場, 康山道', en: 'Kornhill Plaza, Kornhill Rd', districtZh: '太古', districtEn: 'Taikoo', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's20', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '新威園, 英皇道', en: "Sunway Gardens, King's Rd", districtZh: '鰂魚涌', districtEn: 'Quarry Bay', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's21', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '北角官立小學, 英皇道', en: "North Point Gov Pri Sch, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's22', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '模範邨, 英皇道', en: "Model Housing Est, King's Rd", districtZh: '北角', districtEn: 'North Point', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '*', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's23', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '健康村, 英皇道', en: "Healthy Village, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: true, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's24', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '健威花園, 英皇道', en: "Healthy Gardens, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's25', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '琴行街, 英皇道', en: "Kam Hong St, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's26', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '皇后像廣場, 干諾道中', en: 'Statue Sq, Connaught Rd C', districtZh: '中環', districtEn: 'Central', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's27', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '砵典乍街, 干諾道中', en: 'Pottinger St, Connaught Rd C', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's28', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '租庇利街, 干諾道中', en: 'Jubilee St, Connaught Rd C', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's29', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '永安中心, 干諾道中', en: 'Wing On Centre, Connaught Rd C', districtZh: '上環', districtEn: 'Sheung Wan', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's30', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '西區海底隧道巴士轉乘站', en: 'Western Harbour Crossing Bus-Bus Interchange', districtZh: '西九龍', districtEn: 'West Kowloon', districtWidth: '100%', fare: '$19.50', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '*', manualBreakAfter: false, landmarks: [{ zh: '圓方/西九文化區', en: 'Elements/West Kowloon Cultural District', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's31', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '大欖隧道巴士轉乘站', en: 'Tai Lam Tunnel Bus-Bus Interchange', districtZh: '錦田 / 元朗', districtEn: 'Kam Tin / Yuen Long', districtWidth: '100%', fare: '$11.50', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '#', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's32', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '高埔村, 錦田公路', en: 'Ko Po Tsuen, Kam Tin Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '爾巒', en: 'Riva', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's33', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '下高埔村, 錦田公路', en: 'Ha Ko Po Tsuen, Kam Tin Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '山水盈', en: 'Crescent Green', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's34', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '凹頭, 錦田公路', en: 'Au Tau, Kam Tin Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '峻巒', en: 'Park Yoho', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's35', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '紅毛橋, 青山公路', en: 'Hung Mo Kiu, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's36', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '沙埔村, 青山公路', en: 'Sha Po Tsuen, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's37', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '逢吉鄉, 青山公路', en: 'Fung Kat Heung, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's38', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '模範鄉, 青山公路', en: 'Mo Fan Heung, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's39', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '壆圍, 青山公路', en: 'Pok Wai, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's40', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '大生圍, 青山公路', en: 'Tai Sang Wai, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '邁爾豪園/錦綉花園', en: 'Meister Hse/Fairview Park', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's41', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '新田', en: 'San Tin', districtZh: '新田', districtEn: 'San Tin', districtWidth: '100%', fare: '$10.50', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '#', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's42', type: 'destination', variantType: { v1: 'destination', v2: 'destination' }, zh: '皇崗口岸', en: 'Huanggang Port', districtZh: '皇崗口岸', districtEn: 'Huanggang Port', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '深圳地鐵', en: 'Shenzhen Metro', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'stop' } }
    ]
  };
  return raw;
}

// 香港主流巴士營運商預設範本
const HK_BUS_OPERATOR_PRESETS = [
  { key: 'ctb', label: '城巴 Citybus', zh: '城巴', en: 'Citybus', hotline: '2136 8888', website: 'www.citybus.com.hk' },
  { key: 'kmb', label: '九巴 KMB', zh: '九巴', en: 'KMB', hotline: '2745 4466', website: 'www.kmb.hk' },
  { key: 'lwb', label: '龍運 LWB', zh: '龍運', en: 'LWB', hotline: '2261 2791', website: 'www.lwb.hk' },
  { key: 'nlb', label: '嶼巴 NLB', zh: '新大嶼山巴士', en: 'NLB', hotline: '2984 9848', website: 'www.nlb.com.hk' },
  { key: 'mtr', label: '港鐵巴士 MTR', zh: '港鐵巴士', en: 'MTR Bus', hotline: '2881 8888', website: 'www.mtr.com.hk' }
];

// 確保「生效日期與營運商資訊 (effectiveFooter)」所有排版、字體與 SVG 設定完整同步
function ensureEffectiveFooterConfigSynced() {
  const R = appConfig.rightData;
  const defaultNoGovText = '「政府長者及合資格殘障人士公共運輸票價優惠計劃」並不適用於本路線 | The Government Public Transport Fare Concession Scheme for the Elderly and Eligible Persons with Disabilities is not applicable to this route';

  const defaults = {
    enabled: true,
    dateZh: '2026年10月12日',
    dateEn: '12 October 2026',
    dateFontSizePx: 7.2,             // 生效日期字體大小 (px)
    concessionZh: '十二歲以下小童及六十五歲或以上長者可享半價優惠',
    concessionEn: 'Half fare for children under the age of 12 and seniors aged 65 or above',
    concessionFontSizePx: 7.2,       // 車費優惠條款字體大小 (px)
    showNoGovConcession: false,      // 默認不選「政府長者及合資格殘障人士公共運輸票價優惠計劃不適用」
    noGovConcessionText: defaultNoGovText,
    website: 'www.citybus.com.hk',
    hotline: '2136 8888',
    showWebsiteSvg: true,
    showHotlineSvg: true,
    contactOrder: 'website_first',   // 'website_first' (先網站後電話) | 'hotline_first' (先電話後網站)
    contactFontSizePx: 8.4,          // 左邊一行：網站與電話字體大小 (px)
    contactSvgSizePx: 9.5,           // 左邊一行：網站與電話 SVG 圖標大小 (px)
    contactGapPx: 10,                // 網站與電話之間的水平間距 (px)
    operatorZh: '城巴',
    operatorEn: 'Citybus',
    versionCode: 'B13_261012_V1',
    operatorFontSizePx: 7.0,         // 營運商名稱字體大小 (px)
    versionFontSizePx: 8.2,          // 版本編號字體大小 (px，較營運商名稱大一點)
    operatorVersionColor: '#64748b', // 版本編號與營運商統一字體顏色
    operatorVersionWeight: '700',    // 版本編號與營運商統一字體粗細 ('500' | '600' | '700' | '800')
    operatorVersionLineGapPx: 1.5,   // 版本編號與營運商之間的垂直行距 (px)
    rightMetaOrder: 'version_first', // 'version_first' (上版本號・下營運商) | 'operator_first' (上營運商・下版本號)
    footerBottomLayout: 'stacked',   // 'stacked' (左一行+右兩行) | 'side_by_side' (左右並排) | 'stacked_inline_right' (左一行+右下同行)
    showTopDivider: false,           // 聯絡方式上方是否顯示細分隔線
    autoSyncVersionDate: true,       // 修改生效日期時自動同步版本號內的 YYMMDD
    _v3NoGovDefaultUnchecked: true
  };

  if (!R.effectiveFooter || typeof R.effectiveFooter !== 'object') {
    R.effectiveFooter = { ...defaults };
  } else {
    if (!R.effectiveFooter._v3NoGovDefaultUnchecked) {
      R.effectiveFooter.showNoGovConcession = false;
      R.effectiveFooter._v3NoGovDefaultUnchecked = true;
    }

    Object.keys(defaults).forEach(k => {
      if (R.effectiveFooter[k] === undefined || R.effectiveFooter[k] === null) {
        R.effectiveFooter[k] = defaults[k];
      }
    });

    const opSize = Number(R.effectiveFooter.operatorFontSizePx) || 7.0;
    const verSize = Number(R.effectiveFooter.versionFontSizePx) || 8.2;
    if (verSize <= opSize && !R.effectiveFooter._customVersionSize) {
      R.effectiveFooter.versionFontSizePx = Math.round((opSize + 1.2) * 10) / 10;
    }
  }

  return R.effectiveFooter;
}

// 一鍵還原原版設定：100% 保留顏色、站名、地標、班次與右側時間表等所有重要資料，將其餘排版、字號、圓圈尺寸、留白與個別邊框微調重置回原版預設值
function resetLayoutAndStylesKeepData() {
  if (isTempScratchMode) {
    showToast('請先退出臨時製作模式再執行還原原版設定', 'rose');
    return;
  }

  const def = getDefaultConfig();

  // 1. 重置全局 layout 為原版預設值（關閉自動縮放鎖定，還原標準字號 10.0px、站圈 9.2px、頂部留白 [0,0,0]、外邊距 5mm 等）
  const prevExportEngine = appConfig.layout?.exportEngine || 'svg';
  const prevExportScale = appConfig.layout?.exportScale || 2;
  const isMultiVariants = Array.isArray(appConfig.variants) && appConfig.variants.length > 1;

  appConfig.layout = {
    ...JSON.parse(JSON.stringify(def.layout)),
    lineThicknessPx: 4.2,
    normalNodeSizePx: 9.2,
    terminalNodeExtraPx: 2.2,
    nodeStrokeWidthPx: 2.2,
    terminalStrokeWidthPx: 2.8,
    nodeToNameGapPx: 5.5,
    stopVerticalGapPx: 2.8,
    stopNameFontSizePx: 10.0,
    stopEnFontSizePx: 8.2,
    stopZhWeight: '700',
    stopEnWeight: '600',
    coloredStopZhWeight: '900',
    coloredStopEnWeight: '700',
    colTopSpaces: [0, 0, 0],
    autoSplitMaxStops: 23,
    mapWidthPercent: 63,
    sheetPaddingMm: 5,
    mapOffsetX: 0,
    mapOffsetY: 0,
    variantDisplayMode: isMultiVariants ? 'parallel_lines' : 'single_with_style',
    originBadgePosition: 'all_first_stop_fare',
    autoScaleByStopCount: false,
    forceMaxTwoColumns: true,
    routeArrowStyle: 'classic',
    routeArrowScale: 100,
    contDashStyle: 'standard',
    contBlockGapPx: 3,
    mtrIconScale: 100,
    exportEngine: prevExportEngine,
    exportScale: prevExportScale,
    _v3GoogleNotoMediumCalibrated: true
  };

  // 2. 保留 appConfig.colors 所有顏色設定（僅確保必要欄位同步）
  ensureColorsConfigSynced();

  // 3. 保留 appConfig.variants 的名稱、符號、路線號碼、配色與捆綁，僅重置圓形編號位置為原版默認
  ensureVariantsConfigSynced();
  (appConfig.variants || []).forEach((v) => {
    v.originBadgePosition = 'all_first_stop_fare';
    delete v.routeBoxFontSizePx;
  });

  // 4. 保留 appConfig.stops 的所有站名、地區、收費、MTR、走廊/隧道、地標、宣傳框與轉乘框文字，重置各站自訂寬度/內距/強制換欄微調
  (appConfig.stops || []).forEach((s) => {
    s.manualBreakAfter = false;
    s.contFromLeft = false;
    s.contToRight = false;
    s.districtWidth = '100%';
    s.districtExtraPx = 0;
    delete s.districtFontSizePx;
    delete s.districtPadX;
    delete s.districtPadY;

    s.fareLabelExtraPx = 0;
    s.fareLineWidth = '100%';
    delete s.fareBoxWidth;
    delete s.fareWidth;
    delete s.fareBoxPadX;
    delete s.fareBoxPadY;
    delete s.fareFontSizePx;
    delete s.fareLineThicknessPx;

    s.coloredBoxWidth = '';
    s.coloredBoxExtraPx = 0;
    s.ignoreLandmarkLimit = false;
    s.ignoreLandmarkZh = false;
    s.ignoreLandmarkEn = false;
    delete s.corridorPipeHeightPx;
    delete s.landmarkPosition;
    delete s.landmarkRowGapPx;

    if (Array.isArray(s.landmarks)) {
      s.landmarks.forEach(lm => {
        lm.extraWidthPx = 0;
        delete lm.position;
      });
    }
  });

  // 5. 保留右側資訊欄 (rightData) 所有文字、路線號碼、目的地、途徑、時間表與頁尾內容，重置排版字號與內距微調
  const R = appConfig.rightData;
  if (R) {
    appConfig.rightModulesOrder = [...def.rightModulesOrder];
    const boxes = ensureHeaderRouteBoxesSynced();
    const isSingleBox = boxes.length <= 1;
    R.routeNumberFontSizePx = isSingleBox ? 100 : 52;
    R.headerMentionedRouteFontSizePx = 13;
    R.routeLayoutMode = isSingleBox ? 'single_row' : 'two_per_row';
    R.destLayoutMode = isSingleBox ? 'shared_below' : 'per_route_stack';
    R.destViaStyle = 'separate';
    R.viaLineBreakAlign = 'hanging';
    R.viaZhFontSizePx = 12.5;
    R.viaEnFontSizePx = 10.5;
    R.viaZhBold = true;
    R.viaZhItalic = false;
    R.viaEnBold = true;
    R.viaEnItalic = false;
    R.introZhFontSizePx = 13;
    R.introEnFontSizePx = 9.8;
    R.introZhBold = true;
    R.introZhItalic = false;
    R.introEnBold = true;
    R.introEnItalic = false;
    R.introIconSizePx = 22;

    R.owlSvgConfig = null;
    ensureOwlSvgConfigSynced();

    boxes.forEach((b, idx) => {
      b.fontSizePx = isSingleBox ? 100 : 52;
      b.padX = 8;
      b.padY = isSingleBox ? 20 : 6;
      b._customPadY = false;
      b.outerPad = 5;
      b.letterSpacingEm = -0.025;
      b._customLetterSpacing = false;
      b.fontScaleX = 100;
      b.tokenGapPx = 2.5;
      b.nOffsetX = 0;
      b.nOffsetY = 0;
      b.viaZhFontSizePx = 12.5;
      b.viaEnFontSizePx = 10.5;
      b.viaZhBold = true;
      b.viaZhItalic = false;
      b.viaEnBold = true;
      b.viaEnItalic = false;
    });

    if (R.timetable) {
      R.timetable.mentionedRouteFontSizePx = 9.2;
      R.timetable.mentionedRouteStyle = 'badge';
      delete R.timetable.dateHeaderFontSizePx;
      delete R.timetable.dateHeaderHeightPx;
      ensureVariantTimetablesSynced();
      (R.timetable.variantTables || []).forEach(vt => {
        vt.routeBoxPadX = 5.5;
        vt.routeBoxPadY = 2;
        vt.routeBoxOuterPad = 2;
        vt.routeBoxTightnessEm = -0.025;
        vt._customTightness = false;
        vt.routeBoxFontScaleX = 100;
        vt.routeBoxTokenGapPx = 2;
        delete vt.routeBoxFontSizePx;
      });
    }

    if (R.bbiInfo) {
      R.bbiInfo.textAlign = 'center';
      R.bbiInfo.showBorderFrame = false;
      R.bbiInfo.qrPosition = 'right';
      R.bbiInfo.qrSizePx = 190;
      R.bbiInfo.qrScaleMode = 'proportional';
      R.bbiInfo.qrRightMarginPx = 10;
      R.bbiInfo.footerZhFontSizePx = 9.8;
      R.bbiInfo.footerEnFontSizePx = 8.4;
      R.bbiInfo.itemZhFontSizePx = 8.8;
      R.bbiInfo.itemEnFontSizePx = 7.8;
      R.bbiInfo.contentPadY = 8;
    }

    if (R.effectiveFooter) {
      R.effectiveFooter.dateFontSizePx = 7.2;
      R.effectiveFooter.concessionFontSizePx = 7.2;
      R.effectiveFooter.contactOrder = 'website_first';
      R.effectiveFooter.contactFontSizePx = 8.4;
      R.effectiveFooter.contactSvgSizePx = 9.5;
      R.effectiveFooter.contactGapPx = 10;
      R.effectiveFooter.operatorFontSizePx = 7.0;
      R.effectiveFooter.versionFontSizePx = 8.2;
      R.effectiveFooter.operatorVersionWeight = '700';
      R.effectiveFooter.operatorVersionLineGapPx = 1.5;
      R.effectiveFooter.rightMetaOrder = 'version_first';
      R.effectiveFooter.footerBottomLayout = 'stacked';
      R.effectiveFooter.showTopDivider = false;
    }
  }

  renderA4Sheet();
  renderEditorSidebar();
  showToast('已一鍵還原原版排版與尺寸設定（所有顏色與站名等重要資料均已完整保留）！');
}

// 切換「強制 2 欄內完成 (推薦)」與「不強制 2 欄內完成 (不建議)」按鈕狀態
function toggleForceMaxTwoColumns(forceTwoCols) {
  const L = ensureStopAndLineStyleConfigSynced();
  const nextState = forceTwoCols !== undefined ? Boolean(forceTwoCols) : !(L.forceMaxTwoColumns !== false);
  L.forceMaxTwoColumns = nextState;

  renderA4Sheet();
  if (L.autoScaleByStopCount) {
    calibrateAutoLayoutWithDOM(L.lastResolvedProfileKey || 'auto');
  }
  renderEditorSidebar();

  if (nextState) {
    showToast('已啟用「強制 2 欄內完成」（官方推薦標準排版）！', 'success');
  } else {
    showToast('注意：已切換為「不強制 2 欄內完成」（不建議，超過換欄站數時會分出第 3 欄導致版面過窄）', 'rose');
  }
}

// 將分站切分為路線圖欄位（當開啟 forceMaxTwoColumns 時強制最多 2 欄內完成；若用戶選擇不強制則允許按換欄站數分出第 3 欄）
function splitStopsIntoColumns(enrichedStops) {
  const L = appConfig.layout || {};
  const maxPerCol = Math.max(5, Number(L.autoSplitMaxStops) || 23);
  const enforceMaxTwoCols = L.forceMaxTwoColumns !== false;
  const columns = [];
  let currentCol = [];

  enrichedStops.forEach((stop, idx) => {
    currentCol.push(stop);
    const isLastOverall = idx === enrichedStops.length - 1;
    if (!isLastOverall) {
      if (stop.manualBreakAfter) {
        columns.push(currentCol);
        currentCol = [];
      } else if (currentCol.length >= maxPerCol) {
        if (!enforceMaxTwoCols || columns.length < 1) {
          columns.push(currentCol);
          currentCol = [];
        }
      }
    }
  });

  if (currentCol.length > 0) {
    columns.push(currentCol);
  }
  return columns;
}

// 智能計算最佳「換欄站數 (autoSplitMaxStops)」
function computeSmartColumnSplitMaxStops(stops, targetCols = 2, profileKey = 'stop4_balanced_2col') {
  const L = appConfig.layout || {};
  const enforceMaxTwoCols = L.forceMaxTwoColumns !== false;
  const total = (stops || []).length;

  if (targetCols <= 1 || total <= 12) {
    return Math.max(20, total + 2);
  }

  // 若用戶主動選擇「不強制 2 欄內完成 (不建議)」且站數極多 (>= 58 站)，允許按 3 欄計算
  if (!enforceMaxTwoCols && total >= 58) {
    return Math.ceil(total / 3) + 1;
  }

  const weights = stops.map(s => getStopVisualWeightUnits(s));
  const totalWeight = weights.reduce((a, b) => a + b, 0);

  // 參考 stop4.pdf (14/25=56%)、stop1.png (25/42=59.5%)、manystop.png (28/49=57.1%)：
  // 左欄（第1欄）最佳視覺權重佔比約為總權重的 56.5% ~ 59%
  const targetCol1WeightRatio = profileKey === 'stop1_stepped_2col'
    ? 0.585
    : (profileKey === 'manystop_dense_2col' ? 0.568 : 0.565);
  const targetCol1Weight = totalWeight * targetCol1WeightRatio;

  let accW = 0;
  let rawSplitIdx = Math.ceil(total * 0.57);
  for (let i = 0; i < total - 1; i++) {
    accW += weights[i];
    if (accW >= targetCol1Weight) {
      rawSplitIdx = i + 1;
      break;
    }
  }

  const minForTwoCols = Math.max(8, Math.ceil(total * 0.51));
  const minCandidate = Math.max(minForTwoCols, rawSplitIdx - 2);
  const maxCandidate = Math.min(total - 2, Math.max(minCandidate, rawSplitIdx + 2));

  let bestCount = Math.max(minForTwoCols, rawSplitIdx);
  let bestScore = -999;

  for (let count = minCandidate; count <= maxCandidate; count++) {
    const nextStop = stops[count];
    if (!nextStop) continue;
    let score = -Math.abs(count - rawSplitIdx) * 1.1;
    if (nextStop.fare && String(nextStop.fare).trim() !== '') score += 3.6;
    if ((nextStop.districtZh && nextStop.districtZh.trim()) || (nextStop.districtEn && nextStop.districtEn.trim())) score += 2.8;
    if (score > bestScore) {
      bestScore = score;
      bestCount = count;
    }
  }

  return Math.max(minForTwoCols, Math.min(total, bestCount));
}

// 巴士轉乘計劃：五大營運商預設字句範本
const HK_BBI_OPERATOR_PRESETS = [
  {
    key: 'ctb',
    label: '城巴 Citybus',
    footerZh: '詳情請參閱城巴網頁',
    footerEn: 'Please refer to Citybus Website\nfor details'
  },
  {
    key: 'kmb',
    label: '九巴 KMB',
    footerZh: '詳情請參閱九巴網頁或 App1933',
    footerEn: 'Please refer to KMB Website or\nApp1933 for details'
  },
  {
    key: 'lwb',
    label: '龍運 LWB',
    footerZh: '詳情請參閱龍運網頁或 App1933',
    footerEn: 'Please refer to LWB Website or\nApp1933 for details'
  },
  {
    key: 'nlb',
    label: '嶼巴 NLB',
    footerZh: '詳情請參閱新大嶼山巴士網頁',
    footerEn: 'Please refer to NLB Website\nfor details'
  },
  {
    key: 'mtr',
    label: '港鐵巴士 MTR',
    footerZh: '詳情請參閱港鐵網頁或 MTR Mobile',
    footerEn: 'Please refer to MTR Website or\nMTR Mobile for details'
  }
];

// 確保「6. 巴士轉乘計劃 (bbiInfo)」所有排版、無外框、文字置中與 190x190 二維碼設定完整同步（已取消頂部裝飾線）
function ensureBbiInfoConfigSynced() {
  const R = appConfig.rightData;
  const defaults = {
    enabled: true,
    titleZh: '巴士轉乘計劃',
    titleEn: 'Bus-Bus Interchange',
    items: [],
    footerZh: '詳情請參閱城巴網頁',
    footerEn: 'Please refer to Citybus Website\nfor details',
    textAlign: 'center',             // 預設文字置中 ('center' | 'left')
    showBorderFrame: false,          // 預設取消外框 (false = 無框架)
    showQrBox: true,                 // 顯示二維碼
    qrPosition: 'right',             // 二維碼位置 ('right' | 'left' | 'bottom')
    qrSizePx: 190,                   // 二維碼尺寸預設 190px * 190px
    qrScaleMode: 'proportional',     // 'proportional' (按原圖800px寬之190x190比例適配A4右欄) | 'raw_px' (A4畫布1:1直出px)
    qrRightMarginPx: 10,             // 二維碼右側留白內距 (px)
    qrColor: '#000000',              // 二維碼顏色
    customQrDataUrl: '',             // 用戶自訂上傳的二維碼圖片 DataURL
    footerZhFontSizePx: 9.8,         // 中文提示字體大小 (px)
    footerEnFontSizePx: 8.4,         // 英文提示字體大小 (px)
    footerTextColor: '#6b7280',      // 提示文字顏色（中性灰）
    itemZhFontSizePx: 8.8,           // 轉乘條目中文字號 (px)
    itemEnFontSizePx: 7.8,           // 轉乘條目英文字號 (px)
    contentPadY: 8,                  // 內容區上下內距 (px)
    _v2BorderlessCentered190Synced: true
  };

  if (!R.bbiInfo || typeof R.bbiInfo !== 'object') {
    R.bbiInfo = { ...defaults };
  } else {
    if (!R.bbiInfo._v2BorderlessCentered190Synced) {
      R.bbiInfo.showBorderFrame = false;
      R.bbiInfo.textAlign = 'center';
      R.bbiInfo.qrSizePx = 190;
      R.bbiInfo.qrScaleMode = 'proportional';
      R.bbiInfo.footerTextColor = '#6b7280';
      if (R.bbiInfo.footerZh === '詳情請瀏覽城巴網頁') {
        R.bbiInfo.footerZh = '詳情請參閱城巴網頁';
      }
      if (R.bbiInfo.footerEn === 'Please refer to Citybus Website for details') {
        R.bbiInfo.footerEn = 'Please refer to Citybus Website\nfor details';
      }
      R.bbiInfo._v2BorderlessCentered190Synced = true;
    }

    // 強制關閉並移除舊版頂部裝飾線屬性
    delete R.bbiInfo.showTopLine;

    Object.keys(defaults).forEach(k => {
      if (R.bbiInfo[k] === undefined || R.bbiInfo[k] === null) {
        R.bbiInfo[k] = defaults[k];
      }
    });

    if (!Array.isArray(R.bbiInfo.items)) {
      R.bbiInfo.items = [];
    }
  }

  return R.bbiInfo;
}

// ==========================================================================
// 範疇三：巴士轉乘計劃 (BBI) 二維碼生成與模組渲染（純 <path> 向量防塌縮）
// ==========================================================================

// 生成城巴風格擬真向量二維碼 SVG（全面改用 <path> 封閉向量路徑並同步 SVG width/height 屬性，確保 PNG/PDF 導出 100% 清晰無損）
function createAuthenticBbiQrCodeSvg(renderSizePx = 190, fgColor = '#000000', customQrDataUrl = '') {
  const s = Math.max(24, Math.round(Number(renderSizePx) * 10) / 10);

  if (customQrDataUrl && String(customQrDataUrl).trim() !== '') {
    return `
      <img
        src="${esc(customQrDataUrl)}"
        alt="QR Code"
        crossorigin="anonymous"
        width="${s}"
        height="${s}"
        data-export-label="bbi-qr-img"
        style="width:${s}px; height:${s}px; min-width:${s}px; min-height:${s}px; object-fit:contain; display:block; flex-shrink:0;"
      />
    `;
  }

  // 25x25 標準二維碼矩陣（已排除三個 7x7 定位角與 1 格分隔白邊）
  const matrixRows = [
    '0000000010110110100000000',
    '0000000011011001000000000',
    '0000000000101110100000000',
    '0000000010110101100000000',
    '0000000001101000100000000',
    '0000000011010111000000000',
    '0000000010101010100000000',
    '0000000001101101000000000',
    '1101101010010110110101101',
    '1011010101101001011011011',
    '0111001110110110101100110',
    '1100110101011101010011001',
    '1010111011001011101101110',
    '0110100101110100110110100',
    '1101011010011011001011011',
    '0101110110101101101100101',
    '1011001011010010111110110',
    '0000000010110110100010101',
    '0000000011001011101011101',
    '0000000001110100100010011',
    '0000000010101110111110110',
    '0000000011010011010111001',
    '0000000001101101101101110',
    '0000000010110110011010101',
    '0000000001011011100111011'
  ];

  const cell = 7.2; // 25 * 7.2 = 180，四周留 5px 邊距 = 190x190
  const offset = 5;
  const dotPathCommands = [];

  for (let r = 0; r < 25; r++) {
    const rowStr = matrixRows[r];
    for (let c = 0; c < 25; c++) {
      if ((r < 8 && c < 8) || (r < 8 && c >= 17) || (r >= 17 && c < 8)) continue;
      if (rowStr[c] === '1') {
        const x1 = Math.round((offset + c * cell) * 100) / 100;
        const y1 = Math.round((offset + r * cell) * 100) / 100;
        const x2 = Math.round((x1 + cell + 0.18) * 100) / 100;
        const y2 = Math.round((y1 + cell + 0.18) * 100) / 100;
        dotPathCommands.push(`M${x1},${y1}H${x2}V${y2}H${x1}Z`);
      }
    }
  }

  // 輔助生成圓角矩形的純 <path> 路徑指令
  const roundedRectPathD = (x, y, w, h, rx) => {
    const r = Math.min(rx, w / 2, h / 2);
    const x2 = Math.round((x + w) * 100) / 100;
    const y2 = Math.round((y + h) * 100) / 100;
    return [
      `M ${Math.round((x + r) * 100) / 100} ${y}`,
      `H ${Math.round((x2 - r) * 100) / 100}`,
      `A ${r} ${r} 0 0 1 ${x2} ${Math.round((y + r) * 100) / 100}`,
      `V ${Math.round((y2 - r) * 100) / 100}`,
      `A ${r} ${r} 0 0 1 ${Math.round((x2 - r) * 100) / 100} ${y2}`,
      `H ${Math.round((x + r) * 100) / 100}`,
      `A ${r} ${r} 0 0 1 ${x} ${Math.round((y2 - r) * 100) / 100}`,
      `V ${Math.round((y + r) * 100) / 100}`,
      `A ${r} ${r} 0 0 1 ${Math.round((x + r) * 100) / 100} ${y}`,
      'Z'
    ].join(' ');
  };

  // 三個圓角定位框（Finder Patterns：外框與內點均採用純 <path> 繪製）
  const renderFinderPattern = (gridR, gridC) => {
    const x = Math.round((offset + gridC * cell) * 100) / 100;
    const y = Math.round((offset + gridR * cell) * 100) / 100;
    const outerSize = Math.round((7 * cell) * 100) / 100; // 50.4
    const strokeW = Math.round(cell * 100) / 100;        // 7.2
    const ringX = Math.round((x + strokeW / 2) * 100) / 100;
    const ringY = Math.round((y + strokeW / 2) * 100) / 100;
    const ringSize = Math.round((outerSize - strokeW) * 100) / 100; // 43.2
    const innerX = Math.round((x + 2 * cell) * 100) / 100;
    const innerY = Math.round((y + 2 * cell) * 100) / 100;
    const innerSize = Math.round((3 * cell) * 100) / 100; // 21.6

    return `
      <path d="${roundedRectPathD(ringX, ringY, ringSize, ringSize, 9.5)}" fill="none" stroke="${fgColor}" stroke-width="${strokeW}" />
      <path d="${roundedRectPathD(innerX, innerY, innerSize, innerSize, 5)}" fill="${fgColor}" />
    `;
  };

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="bbi-qr-svg"
      width="${s}"
      height="${s}"
      viewBox="0 0 190 190"
      preserveAspectRatio="xMidYMid meet"
      style="width:${s}px; height:${s}px; min-width:${s}px; min-height:${s}px; display:block; flex-shrink:0; overflow:visible;"
    >
      <path d="M0,0H190V190H0Z" fill="#ffffff" />
      ${renderFinderPattern(0, 0)}
      ${renderFinderPattern(0, 18)}
      ${renderFinderPattern(18, 0)}
      <path d="${dotPathCommands.join('')}" fill="${fgColor}" />
    </svg>
  `;
}

// 渲染 A4 畫布上的「6. 巴士轉乘計劃 (bbi_info)」模組
function renderBbiInfoModuleHTML(B, C, R, T, themePrimaryColor, globalExtraRoutes = '', pushToBottomStyle = '') {
  ensureBbiInfoConfigSynced();
  if (!B.enabled) return '';

  const bbiHeaderBg = C.bbiHeaderBg || C.timetableHeaderBg || themePrimaryColor;
  const bbiHeaderText = C.bbiHeaderText || C.timetableHeaderText || '#ffffff';

  const containerRouteOpts = {
    fontSizePx: Math.max(6, Number(T?.mentionedRouteFontSizePx) || 9.2),
    bgColor: C.routeBoxBg || '#0d8556',
    textColor: C.routeBoxText || '#ffffff',
    styleMode: 'badge',
    extraRoutes: globalExtraRoutes,
    allowPureNumbers: false,
    innerWhiteLine: false
  };

  const textAlign = B.textAlign === 'left' ? 'left' : 'center';
  const alignItemsCss = textAlign === 'center' ? 'center' : 'flex-start';
  const showFrame = Boolean(B.showBorderFrame);
  const footerTextColor = B.footerTextColor || '#6b7280';
  const footerZhSize = Math.max(6, Number(B.footerZhFontSizePx) || 9.8);
  const footerEnSize = Math.max(5.5, Number(B.footerEnFontSizePx) || 8.4);
  const itemZhSize = Math.max(6, Number(B.itemZhFontSizePx) || 8.8);
  const itemEnSize = Math.max(5.5, Number(B.itemEnFontSizePx) || 7.8);
  const padY = Math.max(2, Number(B.contentPadY) ?? 8);
  const qrRightMargin = Math.max(0, Number(B.qrRightMarginPx) ?? 10);

  const renderedQrSizePx = getResolvedBbiQrRenderSizePx(B, 'a4');
  const qrPos = B.qrPosition || 'right';
  const flexDir = qrPos === 'left' ? 'row-reverse' : (qrPos === 'bottom' ? 'column' : 'row');

  const itemsListHTML = (B.items || []).length > 0 ? `
    <div style="display:flex; flex-direction:column; gap:3.5px; width:100%; text-align:${textAlign}; align-items:${alignItemsCss};">
      ${(B.items || []).map(item => `
        <div style="width:100%; padding-bottom:2.5px; border-bottom:0.5px dashed #cbd5e1; text-align:${textAlign};">
          ${item.zh ? `<div class="sheet-text-fix" style="font-size:${itemZhSize}px; font-weight:800; color:#111827; display:block; line-height:1.2;">${formatBbiMultilineTextHTML(item.zh, containerRouteOpts)}</div>` : ''}
          ${item.en ? `<div class="sheet-text-fix" style="font-size:${itemEnSize}px; font-weight:600; color:${footerTextColor}; display:block; line-height:1.15; margin-top:1px;">${formatBbiMultilineTextHTML(item.en, containerRouteOpts)}</div>` : ''}
        </div>
      `).join('')}
    </div>
  ` : '';

  const footerTextHTML = (B.footerZh || B.footerEn) ? `
    <div style="
      display:flex;
      flex-direction:column;
      align-items:${alignItemsCss};
      justify-content:center;
      text-align:${textAlign};
      width:100%;
      gap:1.5px;
    ">
      ${B.footerZh ? `
        <div class="sheet-text-fix" style="font-size:${footerZhSize}px; font-weight:700; color:${footerTextColor}; display:block; line-height:1.22; text-align:${textAlign};">
          ${formatBbiMultilineTextHTML(B.footerZh, containerRouteOpts)}
        </div>
      ` : ''}
      ${B.footerEn ? `
        <div class="sheet-text-fix" style="font-size:${footerEnSize}px; font-weight:500; color:${footerTextColor}; display:block; line-height:1.18; text-align:${textAlign};">
          ${formatBbiMultilineTextHTML(B.footerEn, containerRouteOpts)}
        </div>
      ` : ''}
    </div>
  ` : '';

  const qrCodeBlockHTML = B.showQrBox ? `
    <div
      data-export-label="bbi-qr-box"
      style="
        width:${renderedQrSizePx}px;
        height:${renderedQrSizePx}px;
        min-width:${renderedQrSizePx}px;
        min-height:${renderedQrSizePx}px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
        ${qrPos === 'right' ? `margin-right:${qrRightMargin}px;` : (qrPos === 'left' ? `margin-left:${qrRightMargin}px;` : 'margin-top:4px;')}
      "
    >
      ${createAuthenticBbiQrCodeSvg(renderedQrSizePx, B.qrColor || '#000000', B.customQrDataUrl)}
    </div>
  ` : '';

  return `
    <div onclick="switchEditorTab('info', 'sec-bbi')" class="preview-clickable" style="
      display:flex;
      flex-direction:column;
      width:100%;
      ${pushToBottomStyle}
    ">
      ${renderRightModuleTitleLabelHTML(B.titleZh, B.titleEn, C, 'inline', bbiHeaderBg, bbiHeaderText)}
      <div style="
        ${showFrame ? `border:1.5px solid ${bbiHeaderBg}; border-radius:4px; padding:${padY}px 8px;` : `border:none; padding:2px 1px;`}
        background:transparent;
        display:flex;
        flex-direction:${flexDir};
        align-items:center;
        justify-content:space-between;
        gap:8px;
        width:100%;
        box-sizing:border-box;
      ">
        <div style="
          flex:1;
          min-width:0;
          display:flex;
          flex-direction:column;
          align-items:${alignItemsCss};
          justify-content:center;
          text-align:${textAlign};
          gap:4px;
        ">
          ${itemsListHTML}
          ${footerTextHTML}
        </div>
        ${qrCodeBlockHTML}
      </div>
    </div>
  `;
}

// 格式化巴士轉乘計劃的多行文字（支援 \n 或 | 換行，並自動將預設英文在 "for details" 前換行置中）
function formatBbiMultilineTextHTML(rawText, badgeOpts) {
  if (!rawText) return '';
  let normalized = String(rawText)
    .replace(/\\n/g, '\n')
    .replace(/\s*\|\s*/g, '\n');

  // 若英文為單行預設句子，自動於 for details 前換行以符合參考圖雙行置中排版
  if (!normalized.includes('\n') && /^Please refer to .+ for details$/i.test(normalized.trim())) {
    normalized = normalized.trim().replace(/\s+(for details)$/i, '\n$1');
  }

  return normalized
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `<span style="display:block;">${formatTextWithRouteBadges(line, badgeOpts)}</span>`)
    .join('');
}

// 計算二維碼實際渲染尺寸（支援「按原圖比例適配右欄」與「1:1 原始像素 190px*190px」兩種模式）
function getResolvedBbiQrRenderSizePx(B, context = 'a4') {
  const rawPx = Math.max(30, Number(B.qrSizePx) || 190);
  if (B.qrScaleMode === 'raw_px') {
    return rawPx;
  }
  // 原圖 (image_4dffc7.png) 總寬為 800px、QR Code 為 190px*190px (佔寬度 23.75%)
  // A4 右欄寬度約為 280px，折算後 190 * (280 / 800) ≈ 66.5px；預覽卡寬度約 380px，折算約 86px
  const scaleFactor = context === 'preview' ? 0.45 : 0.355;
  return Math.max(28, Math.round(rawPx * scaleFactor * 10) / 10);
}

// 渲染 #sec-bbi 控制面板頂部的「所見即所得白底即時預覽卡」（已移除頂部裝飾線）
function renderBbiLivePreviewCardInnerHTML(B, C, themePrimaryColor = '#0d8556', globalExtraRoutes = '') {
  ensureBbiInfoConfigSynced();
  const bbiHeaderBg = C.bbiHeaderBg || C.timetableHeaderBg || themePrimaryColor;
  const bbiHeaderText = C.bbiHeaderText || C.timetableHeaderText || '#ffffff';

  const badgeOpts = {
    fontSizePx: 10,
    bgColor: C.routeBoxBg || '#0d8556',
    textColor: C.routeBoxText || '#ffffff',
    styleMode: 'badge',
    extraRoutes: globalExtraRoutes,
    allowPureNumbers: false,
    innerWhiteLine: false
  };

  const textAlign = B.textAlign === 'left' ? 'left' : 'center';
  const alignItemsCss = textAlign === 'center' ? 'center' : 'flex-start';
  const showFrame = Boolean(B.showBorderFrame);
  const footerTextColor = B.footerTextColor || '#6b7280';
  const footerZhSize = Math.max(6, Number(B.footerZhFontSizePx) || 9.8) + 1.5;
  const footerEnSize = Math.max(5.5, Number(B.footerEnFontSizePx) || 8.4) + 1.5;
  const itemZhSize = Math.max(6, Number(B.itemZhFontSizePx) || 8.8) + 1.2;
  const itemEnSize = Math.max(5.5, Number(B.itemEnFontSizePx) || 7.8) + 1.2;

  const previewQrSize = Math.min(135, getResolvedBbiQrRenderSizePx(B, 'preview'));
  const qrPos = B.qrPosition || 'right';
  const flexDir = qrPos === 'left' ? 'row-reverse' : (qrPos === 'bottom' ? 'column' : 'row');

  const itemsHTML = (B.items || []).map(item => `
    <div style="width:100%; padding-bottom:3px; border-bottom:1px dashed #cbd5e1; text-align:${textAlign};">
      ${item.zh ? `<div style="font-size:${itemZhSize}px; font-weight:800; color:#111827; line-height:1.2;">${formatBbiMultilineTextHTML(item.zh, badgeOpts)}</div>` : ''}
      ${item.en ? `<div style="font-size:${itemEnSize}px; font-weight:600; color:${footerTextColor}; line-height:1.15; margin-top:1px;">${formatBbiMultilineTextHTML(item.en, badgeOpts)}</div>` : ''}
    </div>
  `).join('');

  return `
    <div style="
      width:100%;
      background:#ffffff;
      padding:8px 10px;
      border-radius:6px;
      border:1px solid #cbd5e1;
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
    ">
      <div style="
        background-color:${bbiHeaderBg};
        color:${bbiHeaderText};
        padding:4.5px 10px;
        border-radius:4px;
        font-size:11.5px;
        font-weight:900;
        line-height:1.15;
      ">
        ${esc(B.titleZh)}${B.titleEn ? ` | ${esc(B.titleEn)}` : ''}
      </div>

      <div style="
        ${showFrame ? `border:1.5px solid ${bbiHeaderBg}; border-radius:4px; padding:8px 10px; margin-top:3px;` : 'border:none; padding:10px 4px 4px 4px;'}
        display:flex;
        flex-direction:${flexDir};
        align-items:center;
        justify-content:space-between;
        gap:10px;
        width:100%;
        box-sizing:border-box;
      ">
        <div style="
          flex:1;
          min-width:0;
          display:flex;
          flex-direction:column;
          align-items:${alignItemsCss};
          justify-content:center;
          text-align:${textAlign};
          gap:4px;
        ">
          ${itemsHTML}
          ${B.footerZh ? `<div style="font-size:${footerZhSize}px; font-weight:700; color:${footerTextColor}; line-height:1.25; text-align:${textAlign};">${formatBbiMultilineTextHTML(B.footerZh, badgeOpts)}</div>` : ''}
          ${B.footerEn ? `<div style="font-size:${footerEnSize}px; font-weight:500; color:${footerTextColor}; line-height:1.2; text-align:${textAlign};">${formatBbiMultilineTextHTML(B.footerEn, badgeOpts)}</div>` : ''}
        </div>

        ${B.showQrBox ? `
          <div style="flex-shrink:0; display:flex; align-items:center; justify-content:center; margin-right:${qrPos === 'right' ? Math.max(0, Number(B.qrRightMarginPx) || 10) : 0}px;">
            ${createAuthenticBbiQrCodeSvg(previewQrSize, B.qrColor || '#000000', B.customQrDataUrl)}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// 路綫號碼框專用樣式模板（保留所有 N 綫樣式及普通樣式1，共 10 款，與全頁主色範本庫完全獨立）
const ROUTE_BOX_TEMPLATES = [
  {
    key: 'night_n',
    label: 'N綫樣式',
    desc: '黑底黃字・N下貓頭鷹',
    bgColor: '#000000',
    textColor: '#ffdd00',
    showOwlUnderN: true,
    sampleRoute: 'N796'
  },
  {
    key: 'whc_green',
    label: '西隧樣式',
    desc: '綠底白字',
    bgColor: '#0d8556',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: 'B13'
  },
  {
    key: 'cht_ehc_red',
    label: '紅隧/東隧樣式',
    desc: '紅底白字',
    bgColor: '#e02525',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '694S'
  },
  {
    key: 'urban_blue',
    label: '市區樣式',
    desc: '藍底白字',
    bgColor: '#1e2188',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '20A'
  },
  {
    key: 'normal_yellow1',
    label: '普通樣式1',
    desc: '黃底白字',
    bgColor: '#f1d840',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '798B'
  },
  {
    key: 'normal_yellow',
    label: '普通樣式',
    desc: '黃底黑字',
    bgColor: '#f1d840',
    textColor: '#000000',
    showOwlUnderN: false,
    sampleRoute: '798B'
  },
  {
    key: 'airport_magenta',
    label: '機場樣式',
    desc: '桃紅底白字',
    bgColor: '#c2193f',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: 'A26P'
  },
  {
    key: 'airport_night_n',
    label: '機場N綫樣式',
    desc: '桃紅底白字・N下貓頭鷹',
    bgColor: '#c2193f',
    textColor: '#ffffff',
    showOwlUnderN: true,
    sampleRoute: 'NA29'
  },
  {
    key: 'nwfb1',
    label: '新巴樣式1',
    desc: '紫色主題',
    bgColor: '#7228af',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '796C'
  },
  {
    key: 'nwfb2',
    label: '新巴樣式2',
    desc: '左橙右藍',
    bgColor: '#0049b8',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '701S'
  }
];

// 香港巴士路線框主色範本庫（已取消所有 N 綫樣式與普通樣式1，並與路綫號碼框樣式模板解除連結）
const MAIN_THEME_PRESETS = [
  {
    key: 'whc_green',
    label: '西隧樣式',
    desc: '綠底白字',
    bgColor: '#0d8556',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: 'B13',
    themeColors: {
      themePrimary: '#0d8556',
      routeLineColor: '#0d8556',
      originDestBg: '#0d8556',
      originDestText: 'white',
      districtBg: '#0d8556',
      districtText: 'white',
      fareBg: '#0d8556',
      fareText: 'white',
      evenZoneBg: '#dcedc8',
      destBoxBg: '#0d8556',
      destBoxText: '#ffffff',
      viaBoxBg: '#006829',
      viaBoxText: '#ffffff',
      dateHeaderBg: '#dcedc8',
      dateHeaderText: '#111827',
      originHeaderBg: '#dcedc8',
      originHeaderText: 'black',
      headwayHeaderBg: '#dcedc8',
      headwayHeaderText: 'black',
      clockContainerBg: '#dcedc8',
      clockSvgColor: '#0d8556',
      combinedDestViaBg: '#dcedc8',
      combinedDestViaText: '#111827',
      timetableHeaderBg: '#0d8556',
      timetableHeaderText: '#ffffff',
      introBannerBg: '#0d8556',
      introBannerText: '#ffffff',
      octopusHeaderBg: '#0d8556',
      octopusHeaderText: '#ffffff',
      bbiHeaderBg: '#0d8556',
      bbiHeaderText: '#ffffff',
      timetableBg: '#ffffff',
      timetableThickLineColor: '#0d8556',
      infoAccentColor: '#0d8556'
    }
  },
  {
    key: 'urban_blue',
    label: '市區樣式',
    desc: '藍底白字',
    bgColor: '#1e2188',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '795X',
    themeColors: {
      themePrimary: '#1e2188',
      routeLineColor: '#1e2188',
      originDestBg: '#1e2188',
      originDestText: 'white',
      districtBg: '#1e2188',
      districtText: 'white',
      fareBg: '#1e2188',
      fareText: 'white',
      evenZoneBg: '#dce0f1',
      destBoxBg: '#1e2188',
      destBoxText: '#ffffff',
      viaBoxBg: '#003d82',
      viaBoxText: '#ffffff',
      dateHeaderBg: '#dce0f1',
      dateHeaderText: '#111827',
      originHeaderBg: '#dce0f1',
      originHeaderText: 'black',
      headwayHeaderBg: '#dce0f1',
      headwayHeaderText: 'black',
      clockContainerBg: '#dce0f1',
      clockSvgColor: '#1e2188',
      combinedDestViaBg: '#dce0f1',
      combinedDestViaText: '#111827',
      timetableHeaderBg: '#1e2188',
      timetableHeaderText: '#ffffff',
      introBannerBg: '#1e2188',
      introBannerText: '#ffffff',
      octopusHeaderBg: '#1e2188',
      octopusHeaderText: '#ffffff',
      bbiHeaderBg: '#1e2188',
      bbiHeaderText: '#ffffff',
      timetableBg: '#ffffff',
      timetableThickLineColor: '#1e2188',
      infoAccentColor: '#1e2188'
    }
  },
  {
    key: 'normal_yellow',
    label: '普通樣式',
    desc: '黃底黑字',
    bgColor: '#f1d840',
    textColor: '#000000',
    showOwlUnderN: false,
    sampleRoute: '8P',
    themeColors: {
      themePrimary: '#f1d840',
      routeLineColor: '#f1d840',
      originDestBg: '#f1d840',
      originDestText: 'black',
      districtBg: '#f1d840',
      districtText: 'black',
      fareBg: '#f1d840',
      fareText: 'black',
      evenZoneBg: '#fffabd',
      destBoxBg: '#f1d840',
      destBoxText: '#000000',
      viaBoxBg: '#fde047',
      viaBoxText: '#000000',
      dateHeaderBg: '#fffabd',
      dateHeaderText: '#111827',
      originHeaderBg: '#fffabd',
      originHeaderText: 'black',
      headwayHeaderBg: '#fffabd',
      headwayHeaderText: 'black',
      clockContainerBg: '#fffabd',
      clockSvgColor: '#f1d840',
      combinedDestViaBg: '#fffabd',
      combinedDestViaText: '#111827',
      timetableHeaderBg: '#f1d840',
      timetableHeaderText: '#000000',
      introBannerBg: '#f1d840',
      introBannerText: '#000000',
      octopusHeaderBg: '#f1d840',
      octopusHeaderText: '#000000',
      bbiHeaderBg: '#f1d840',
      bbiHeaderText: '#000000',
      timetableBg: '#ffffff',
      timetableThickLineColor: '#f1d840',
      infoAccentColor: '#f1d840'
    }
  },
  {
    key: 'airport_magenta',
    label: '機場樣式',
    desc: '桃紅底白字',
    bgColor: '#c2193f',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: 'A29',
    themeColors: {
      themePrimary: '#c2193f',
      routeLineColor: '#c2193f',
      originDestBg: '#c2193f',
      originDestText: 'white',
      districtBg: '#c2193f',
      districtText: 'white',
      fareBg: '#c2193f',
      fareText: 'white',
      evenZoneBg: '#fbdac7',
      destBoxBg: '#c2193f',
      destBoxText: '#ffffff',
      viaBoxBg: '#9d174d',
      viaBoxText: '#ffffff',
      dateHeaderBg: '#fbdac7',
      dateHeaderText: '#111827',
      originHeaderBg: '#fbdac7',
      originHeaderText: 'black',
      headwayHeaderBg: '#fbdac7',
      headwayHeaderText: 'black',
      clockContainerBg: '#fbdac7',
      clockSvgColor: '#c2193f',
      combinedDestViaBg: '#fbdac7',
      combinedDestViaText: '#111827',
      timetableHeaderBg: '#c2193f',
      timetableHeaderText: '#ffffff',
      introBannerBg: '#c8a063',
      introBannerText: '#ffffff',
      octopusHeaderBg: '#c8a063',
      octopusHeaderText: '#ffffff',
      bbiHeaderBg: '#c8a063',
      bbiHeaderText: '#ffffff',
      timetableBg: '#ffffff',
      timetableThickLineColor: '#c2193f',
      infoAccentColor: '#c2193f'
    }
  },
  {
    key: 'nwfb1',
    label: '新巴樣式1',
    desc: '紫色主題',
    bgColor: '#7228af',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '793',
    themeColors: {
      themePrimary: '#7228af',
      routeLineColor: '#7228af',
      originDestBg: '#7228af',
      originDestText: 'white',
      districtBg: '#7228af',
      districtText: 'white',
      fareBg: '#7228af',
      fareText: 'white',
      evenZoneBg: '#c9bfe1',
      destBoxBg: '#7228af',
      destBoxText: '#ffffff',
      viaBoxBg: '#fe9b1a',
      viaBoxText: '#ffffff',
      dateHeaderBg: '#c9bfe1',
      dateHeaderText: '#000000',
      originHeaderBg: '#c9bfe1',
      originHeaderText: 'black',
      headwayHeaderBg: '#c9bfe1',
      headwayHeaderText: 'black',
      clockContainerBg: '#c9bfe1',
      clockSvgColor: '#7228af',
      combinedDestViaBg: '#c9bfe1',
      combinedDestViaText: '#000000',
      timetableHeaderBg: '#7228af',
      timetableHeaderText: '#ffffff',
      introBannerBg: '#7228af',
      introBannerText: '#ffffff',
      octopusHeaderBg: '#7228af',
      octopusHeaderText: '#ffffff',
      bbiHeaderBg: '#7228af',
      bbiHeaderText: '#ffffff',
      timetableBg: '#ffffff',
      timetableThickLineColor: '#7228af',
      infoAccentColor: '#7228af'
    }
  },
  {
    key: 'nwfb2',
    label: '新巴樣式2',
    desc: '左橙右藍',
    bgColor: '#0049b8',
    textColor: '#ffffff',
    showOwlUnderN: false,
    sampleRoute: '50M',
    themeColors: {
      themePrimary: '#0049b8',
      routeLineColor: '#fe9b1a',
      originDestBg: '#fe9b1a',
      originDestText: 'white',
      districtBg: '#fe9b1a',
      districtText: 'white',
      fareBg: '#fe9b1a',
      fareText: 'white',
      evenZoneBg: '#f6cc9c',
      destBoxBg: '#0049b8',
      destBoxText: '#ffffff',
      viaBoxBg: '#003d82',
      viaBoxText: '#ffffff',
      dateHeaderBg: '#c5c8e7',
      dateHeaderText: '#111827',
      originHeaderBg: '#c5c8e7',
      originHeaderText: 'black',
      headwayHeaderBg: '#c5c8e7',
      headwayHeaderText: 'black',
      clockContainerBg: '#c5c8e7',
      clockSvgColor: '#0049b8',
      combinedDestViaBg: '#dce0f1',
      combinedDestViaText: '#111827',
      timetableHeaderBg: '#0049b8',
      timetableHeaderText: '#ffffff',
      introBannerBg: '#0049b8',
      introBannerText: '#ffffff',
      octopusHeaderBg: '#0049b8',
      octopusHeaderText: '#ffffff',
      bbiHeaderBg: '#0049b8',
      bbiHeaderText: '#ffffff',
      timetableBg: '#ffffff',
      timetableThickLineColor: '#0049b8',
      infoAccentColor: '#0049b8'
    }
  }
];

// 紀錄「5. 顏色與SVG」分頁目前聚焦的子分區 ('all' | 'map' | 'svg' | 'header' | 'timetable' | 'variants')
let activeColorTabSection = 'all';

// 確保整張路線紙所有可自定義顏色與「同步主色／跟隨班次色」開關完整初始化
function ensureColorsConfigSynced() {
  if (!appConfig.colors || typeof appConfig.colors !== 'object') {
    appConfig.colors = {};
  }
  const C = appConfig.colors;
  const themeColor = C.themePrimary || C.routeLineColor || '#0d8556';

  // 1. 核心主色與自動同步開關
  if (C.themePrimary === undefined) C.themePrimary = themeColor;
  if (C.autoSyncPrimary === undefined) C.autoSyncPrimary = true;
  if (C.autoSyncIncludeTints === undefined) C.autoSyncIncludeTints = true;

  // 2. 路線圖線條、站圈、起訖總站、地區、分段收費與雙數分段淺色底
  if (C.routeLineColor === undefined) C.routeLineColor = themeColor;
  if (C.nodeColor === undefined) C.nodeColor = '';
  if (C.nodeFillColor === undefined) C.nodeFillColor = '#ffffff';
  if (C.originDestBg === undefined) C.originDestBg = themeColor;
  if (C.originDestText === undefined) C.originDestText = 'white';
  if (C.districtBg === undefined) C.districtBg = themeColor;
  if (C.districtText === undefined) C.districtText = 'white';
  if (C.fareBg === undefined) C.fareBg = themeColor;
  if (C.fareText === undefined) C.fareText = 'white';
  if (C.evenZoneBgEnabled === undefined) C.evenZoneBgEnabled = true;
  if (C.evenZoneBg === undefined) C.evenZoneBg = '#dcedc8';

  // 3. 路線圖站名文字、注解、周邊地標、宣傳橫幅與轉乘框顏色
  if (C.stopNameZhColor === undefined) C.stopNameZhColor = '#111827';
  if (C.stopNameEnColor === undefined) C.stopNameEnColor = '#1f2937';
  if (C.stopRemarkColor === undefined) C.stopRemarkColor = '#475569';
  if (C.landmarkBg === undefined) C.landmarkBg = '#e5e7eb';
  if (C.landmarkText === undefined) C.landmarkText = '#111827';
  if (C.promoBannerBg === undefined) C.promoBannerBg = C.introBannerBg || themeColor;
  if (C.promoBannerText === undefined) C.promoBannerText = '#ffffff';
  if (C.fastClockSvgColor === undefined) C.fastClockSvgColor = '#ffffff';
  if (C.interchangeDefaultBg === undefined) C.interchangeDefaultBg = C.introBannerBg || themeColor;
  if (C.interchangeDefaultText === undefined) C.interchangeDefaultText = '#ffffff';

  // 4. 港鐵 MTR、快速公路/走廊 (353) 與隧道標誌 SVG 顏色及「跟隨班次顏色」開關
  if (C.mtrSvgBg === undefined) C.mtrSvgBg = '#A81428';
  if (C.mtrSvgFg === undefined) C.mtrSvgFg = '#ffffff';
  if (C.corridorFollowVariantColor === undefined) C.corridorFollowVariantColor = true;
  if (C.corridorSvgBg === undefined) C.corridorSvgBg = themeColor;
  if (C.corridorSvgFg === undefined) C.corridorSvgFg = '#ffffff';
  if (C.tunnelFollowVariantColor === undefined) C.tunnelFollowVariantColor = true;
  if (C.tunnelSvgBg === undefined) C.tunnelSvgBg = themeColor;
  if (C.tunnelSvgFg === undefined) C.tunnelSvgFg = '#ffffff';

  // 5. 右側資訊欄：路線號碼框、目的地、途徑、合併容器與簡介橫幅
  if (C.routeBoxBg === undefined) C.routeBoxBg = themeColor;
  if (C.routeBoxText === undefined) C.routeBoxText = '#ffffff';
  if (C.destBoxBg === undefined) C.destBoxBg = themeColor;
  if (C.destBoxText === undefined) C.destBoxText = '#ffffff';
  if (C.viaBoxBg === undefined) C.viaBoxBg = '#006829';
  if (C.viaBoxText === undefined) C.viaBoxText = '#ffffff';
  if (C.dateHeaderBg === undefined) C.dateHeaderBg = '#dcedc8';
  if (C.dateHeaderText === undefined) C.dateHeaderText = '#111827';
  if (C.timetableHeaderBg === undefined) C.timetableHeaderBg = themeColor;
  if (C.timetableHeaderText === undefined) C.timetableHeaderText = '#ffffff';

  if (!C._v3ColorSynced) {
    C.introBannerBg = C.timetableHeaderBg;
    C.introBannerText = C.timetableHeaderText;
    C.originHeaderBg = C.dateHeaderBg;
    C.originHeaderText = 'black';
    C.headwayHeaderBg = C.dateHeaderBg;
    C.headwayHeaderText = 'black';
    C.clockContainerBg = C.dateHeaderBg;
    C.combinedDestViaBg = C.dateHeaderBg;
    C.combinedDestViaText = C.dateHeaderText || '#111827';
    C._v3ColorSynced = true;
  }

  if (C.introBannerBg === undefined) C.introBannerBg = C.timetableHeaderBg || themeColor;
  if (C.introBannerText === undefined) C.introBannerText = C.timetableHeaderText || '#ffffff';
  if (C.combinedDestViaBg === undefined) C.combinedDestViaBg = C.dateHeaderBg || '#dcedc8';
  if (C.combinedDestViaText === undefined) C.combinedDestViaText = C.dateHeaderText || '#111827';

  // 6. 時間表、分段收費、轉乘計劃與頁尾細節顏色
  if (C.originHeaderBg === undefined) C.originHeaderBg = C.dateHeaderBg || '#dcedc8';
  if (C.originHeaderText === undefined) C.originHeaderText = 'black';
  if (C.headwayHeaderBg === undefined) C.headwayHeaderBg = C.dateHeaderBg || '#dcedc8';
  if (C.headwayHeaderText === undefined) C.headwayHeaderText = 'black';
  if (C.clockContainerBg === undefined) C.clockContainerBg = C.dateHeaderBg || '#dcedc8';
  if (C.clockSvgColor === undefined) C.clockSvgColor = themeColor;
  if (C.timetableSlotEvenBg === undefined) C.timetableSlotEvenBg = '#f8fafc';
  if (C.timetableSlotOddBg === undefined) C.timetableSlotOddBg = '#f1f5f9';
  if (C.timetableBg === undefined) C.timetableBg = '#ffffff';
  if (C.timetableThickLineColor === undefined) C.timetableThickLineColor = themeColor;
  if (C.octopusHeaderBg === undefined) C.octopusHeaderBg = C.timetableHeaderBg || themeColor;
  if (C.octopusHeaderText === undefined) C.octopusHeaderText = C.timetableHeaderText || '#ffffff';
  if (C.bbiHeaderBg === undefined) C.bbiHeaderBg = C.timetableHeaderBg || themeColor;
  if (C.bbiHeaderText === undefined) C.bbiHeaderText = C.timetableHeaderText || '#ffffff';
  if (C.additionalNotesTextColor === undefined) C.additionalNotesTextColor = '#1f2937';
  if (C.effectiveDateHighlightColor === undefined) C.effectiveDateHighlightColor = '#dc2626';
  if (C.footerClauseTextColor === undefined) C.footerClauseTextColor = '#475569';
  if (C.footerContactIconColor === undefined) C.footerContactIconColor = themeColor;
  if (C.footerContactTextColor === undefined) C.footerContactTextColor = '#111827';

  return C;
}

// 輔助計算：將 HEX 顏色與白色混合，自動生成柔和淺色底（用於雙數分段底色、時間表日期底色等）
function deriveLightTintHex(hexColor, whiteWeight = 0.82) {
  const clean = String(hexColor || '#0d8556').replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return '#dcedc8';
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const mix = (c) => Math.min(255, Math.max(0, Math.round(c * (1 - whiteWeight) + 255 * whiteWeight)));
  const toHex = (n) => n.toString(16).padStart(2, '0');
  return `#${toHex(mix(r))}${toHex(mix(g))}${toHex(mix(b))}`;
}

// 輔助計算：將 HEX 顏色加深，自動生成協調的深色途徑框底色 (viaBoxBg)
function deriveDarkShadeHex(hexColor, darkenRatio = 0.24) {
  const clean = String(hexColor || '#0d8556').replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return '#006829';
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const shade = (c) => Math.min(255, Math.max(0, Math.round(c * (1 - darkenRatio))));
  const toHex = (n) => n.toString(16).padStart(2, '0');
  return `#${toHex(shade(r))}${toHex(shade(g))}${toHex(shade(b))}`;
}

// 輔助計算：根據背景色明暗度自動判斷最佳對比文字色
function getAutoContrastTextInfo(hexColor) {
  const clean = String(hexColor || '#0d8556').replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return { mode: 'white', hex: '#ffffff' };
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 165
    ? { mode: 'black', hex: '#111827' }
    : { mode: 'white', hex: '#ffffff' };
}

// 核心功能：「同步主色」— 將全頁主色 (themePrimary) 一鍵同步至整張路線紙所有主色調元素
// mode: 'primary_only' (僅同步所有主色塊，保留現有淺色底) | 'full_smart' (同步主色塊 + 自動計算對應淺色底與深色途徑底) | 'all_variants' (連同所有班次一併同步為主色)
function syncAllColorsToPrimary(mode = 'primary_only', silent = false) {
  const C = ensureColorsConfigSynced();
  const primary = C.themePrimary || '#0d8556';
  const contrast = getAutoContrastTextInfo(primary);

  // 1. 同步路線圖與右側所有主色系欄位
  C.routeLineColor = primary;
  C.nodeColor = primary;
  C.originDestBg = primary;
  C.originDestText = contrast.mode;
  C.districtBg = primary;
  C.districtText = contrast.mode;
  C.fareBg = primary;
  C.fareText = contrast.mode;
  C.promoBannerBg = primary;
  C.promoBannerText = contrast.hex;
  C.interchangeDefaultBg = primary;
  C.interchangeDefaultText = contrast.hex;

  C.corridorSvgBg = primary;
  C.tunnelSvgBg = primary;

  C.destBoxBg = primary;
  C.destBoxText = contrast.hex;
  C.introBannerBg = primary;
  C.introBannerText = contrast.hex;
  C.timetableHeaderBg = primary;
  C.timetableHeaderText = contrast.hex;
  C.octopusHeaderBg = primary;
  C.octopusHeaderText = contrast.hex;
  C.bbiHeaderBg = primary;
  C.bbiHeaderText = contrast.hex;
  C.timetableThickLineColor = primary;
  C.clockSvgColor = primary;
  C.footerContactIconColor = primary;
  C.infoAccentColor = primary;

  // 2. 若選擇「智能全套同步」或開啟了自動衍生淺色底，一併同步雙數分段底、時間表日期/開出/班次/時鐘淺色底與深色途徑框
  if (mode === 'full_smart' || (mode === 'auto' && C.autoSyncIncludeTints)) {
    const lightTint = deriveLightTintHex(primary, 0.82);
    const darkVia = deriveDarkShadeHex(primary, 0.24);
    const viaContrast = getAutoContrastTextInfo(darkVia);

    C.evenZoneBg = lightTint;
    C.dateHeaderBg = lightTint;
    C.dateHeaderText = '#111827';
    C.originHeaderBg = lightTint;
    C.originHeaderText = 'black';
    C.headwayHeaderBg = lightTint;
    C.headwayHeaderText = 'black';
    C.clockContainerBg = lightTint;
    C.combinedDestViaBg = lightTint;
    C.combinedDestViaText = '#111827';
    C.viaBoxBg = darkVia;
    C.viaBoxText = viaContrast.hex;
  }

  // 3. 同步常規第 1 班次及所有設為「跟隨全頁主色 (__theme__)」的班次
  const variants = ensureVariantsConfigSynced();
  variants.forEach((v, idx) => {
    if (idx === 0 || v.boundToId === '__theme__' || mode === 'all_variants') {
      v.color = primary;
      v.badgeText = contrast.mode;
      if (!v._customNodeColor) delete v.nodeColor;
      if (!v._customOriginDestBg) delete v.originDestBg;
      if (!v._customDistrictBg) delete v.districtBg;
      if (!v._customFareBg) delete v.fareBg;
      if (C.corridorFollowVariantColor !== false && !v._customCorridorSvgBg) {
        v.corridorSvgBg = primary;
      }
      if (C.tunnelFollowVariantColor !== false && !v._customTunnelSvgBg) {
        v.tunnelSvgBg = primary;
      }
      if (!v._customThickLine) v.timetableThickLineColor = primary;
      if (!v._customClockSvg) v.clockSvgColor = primary;
      if (mode === 'full_smart' || (mode === 'auto' && C.autoSyncIncludeTints)) {
        v.dateHeaderBg = C.dateHeaderBg;
        v.originHeaderBg = C.originHeaderBg;
        v.headwayHeaderBg = C.headwayHeaderBg;
        v.clockContainerBg = C.clockContainerBg;
      }
    }
  });

  syncBoundVariants();
  renderA4Sheet();
  updateVariantsLivePreviewBarDOM();

  if (!silent) {
    renderEditorSidebar();
    const msg = mode === 'full_smart'
      ? `已智能同步主色 (${primary}) 並自動配搭淺色底與深色途徑框！`
      : (mode === 'all_variants'
          ? `已將全頁及全部 ${variants.length} 個班次統一同步為主色 (${primary})！`
          : `已將全頁主色系區塊同步為主色 (${primary})！`);
    showToast(msg);
  }
}

// 更新全局顏色欄位（支援即時渲染 A4 畫布而不失焦；修改 themePrimary 且開啟自動同步時即時連動全頁）
function updateGlobalColorField(key, val, refreshSidebar = false) {
  const C = ensureColorsConfigSynced();
  C[key] = val;

  if (key === 'themePrimary') {
    if (C.autoSyncPrimary) {
      syncAllColorsToPrimary('auto', true);
    } else {
      C.routeLineColor = val;
    }
    const hexLabel = document.getElementById('label-master-themePrimary');
    if (hexLabel) hexLabel.textContent = val;
  }

  if (key === 'dateHeaderBg') {
    C.originHeaderBg = val;
    C.headwayHeaderBg = val;
    C.clockContainerBg = val;
    C.combinedDestViaBg = val;
  }

  if (key === 'corridorSvgBg') {
    (appConfig.variants || []).forEach(v => {
      if (!C.corridorFollowVariantColor && !v._customCorridorSvgBg) {
        v.corridorSvgBg = val;
      }
    });
  }

  if (key === 'tunnelSvgBg') {
    (appConfig.variants || []).forEach(v => {
      if (!C.tunnelFollowVariantColor && !v._customTunnelSvgBg) {
        v.tunnelSvgBg = val;
      }
    });
  }

  syncBoundVariants();
  renderA4Sheet();
  updateVariantsLivePreviewBarDOM();

  // 即時更新面板內的走廊/隧道動態 SVG 預覽列
  const svgPreviewEl = document.getElementById('special-signs-live-preview-bar');
  if (svgPreviewEl && typeof renderSpecialSignsLivePreviewBarHTML === 'function') {
    svgPreviewEl.innerHTML = renderSpecialSignsLivePreviewBarHTML();
  }

  if (refreshSidebar) {
    renderEditorSidebar();
  }
}

// 解析指定班次的「快速公路／走廊標誌 (353)」最終底色與圖案色（支援根據目前班次顏色自動改變）
function resolveCorridorSignColors(variant, C = appConfig.colors) {
  ensureColorsConfigSynced();
  const followVariant = C.corridorFollowVariantColor !== false;
  const v = variant || appConfig.variants?.[0] || {};
  const variantLineColor = v.color || C.routeLineColor || C.themePrimary || '#0d8556';

  let bg;
  if (v._customCorridorSvgBg && v.corridorSvgBg) {
    bg = v.corridorSvgBg;
  } else if (followVariant) {
    bg = variantLineColor;
  } else {
    bg = C.corridorSvgBg || C.themePrimary || '#0d8556';
  }

  const fg = (v._customCorridorSvgFg && v.corridorSvgFg)
    ? v.corridorSvgFg
    : (C.corridorSvgFg || '#ffffff');

  return { bg, fg, followVariant };
}

// 解析指定班次的「隧道標誌 (Tunnel)」最終底色與圖案色（支援根據目前班次顏色自動改變）
function resolveTunnelSignColors(variant, C = appConfig.colors) {
  ensureColorsConfigSynced();
  const followVariant = C.tunnelFollowVariantColor !== false;
  const v = variant || appConfig.variants?.[0] || {};
  const variantLineColor = v.color || C.routeLineColor || C.themePrimary || '#0d8556';

  let bg;
  if (v._customTunnelSvgBg && v.tunnelSvgBg) {
    bg = v.tunnelSvgBg;
  } else if (followVariant) {
    bg = variantLineColor;
  } else {
    bg = C.tunnelSvgBg || C.themePrimary || '#0d8556';
  }

  const fg = (v._customTunnelSvgFg && v.tunnelSvgFg)
    ? v.tunnelSvgFg
    : (C.tunnelSvgFg || '#ffffff');

  return { bg, fg, followVariant };
}

// 切換快速公路／走廊或隧道標誌是否「根據目前班次顏色而改變」
function toggleSpecialSignFollowVariantColor(kind, checked) {
  const C = ensureColorsConfigSynced();
  const variants = ensureVariantsConfigSynced();
  const isFollow = Boolean(checked);

  if (kind === 'corridor') {
    C.corridorFollowVariantColor = isFollow;
    variants.forEach(v => {
      delete v._customCorridorSvgBg;
      v.corridorSvgBg = isFollow ? (v.color || C.routeLineColor || '#0d8556') : (C.corridorSvgBg || '#0d8556');
    });
    showToast(isFollow ? '走廊標誌已設為「根據目前班次顏色而改變」！' : '走廊標誌已改為使用統一固定底色！', 'info');
  } else if (kind === 'tunnel') {
    C.tunnelFollowVariantColor = isFollow;
    variants.forEach(v => {
      delete v._customTunnelSvgBg;
      v.tunnelSvgBg = isFollow ? (v.color || C.routeLineColor || '#0d8556') : (C.tunnelSvgBg || '#0d8556');
    });
    showToast(isFollow ? '隧道標誌已設為「根據目前班次顏色而改變」！' : '隧道標誌已改為使用統一固定底色！', 'info');
  }

  renderA4Sheet();
  renderEditorSidebar();
}

function applyThemeColorsFromTemplate(templateKey, updateSampleRouteNumber = false) {
  const tpl = MAIN_THEME_PRESETS.find(t => t.key === templateKey);
  if (!tpl) return;

  currentActivePresetKey = tpl.key;
  const tc = tpl.themeColors || {
    themePrimary: tpl.bgColor,
    routeLineColor: tpl.bgColor,
    originDestBg: tpl.bgColor,
    originDestText: tpl.textColor === '#000000' ? 'black' : 'white',
    districtBg: tpl.bgColor,
    districtText: tpl.textColor === '#000000' ? 'black' : 'white',
    fareBg: tpl.bgColor,
    fareText: tpl.textColor === '#000000' ? 'black' : 'white',
    destBoxBg: tpl.bgColor,
    destBoxText: tpl.textColor,
    timetableHeaderBg: tpl.bgColor,
    timetableHeaderText: tpl.textColor,
    introBannerBg: tpl.bgColor,
    introBannerText: tpl.textColor,
    octopusHeaderBg: tpl.bgColor,
    octopusHeaderText: tpl.textColor,
    bbiHeaderBg: tpl.bgColor,
    bbiHeaderText: tpl.textColor,
    timetableThickLineColor: tpl.bgColor,
    infoAccentColor: tpl.bgColor
  };

  // 保留現有路線框預設色，避免主色範本庫改動路線號碼框樣式
  const prevRouteBoxBg = appConfig.colors.routeBoxBg || '#0d8556';
  const prevRouteBoxText = appConfig.colors.routeBoxText || '#ffffff';

  Object.assign(appConfig.colors, tc);
  appConfig.colors.routeBoxBg = prevRouteBoxBg;
  appConfig.colors.routeBoxText = prevRouteBoxText;
  appConfig.colors.octopusHeaderBg = tc.octopusHeaderBg || tc.timetableHeaderBg || tc.themePrimary || tpl.bgColor;
  appConfig.colors.octopusHeaderText = tc.octopusHeaderText || tc.timetableHeaderText || tpl.textColor || '#ffffff';
  appConfig.colors.bbiHeaderBg = tc.bbiHeaderBg || tc.timetableHeaderBg || tc.themePrimary || tpl.bgColor;
  appConfig.colors.bbiHeaderText = tc.bbiHeaderText || tc.timetableHeaderText || tpl.textColor || '#ffffff';
  appConfig.colors._v3ColorSynced = true;

  const R = appConfig.rightData;
  const boxes = ensureHeaderRouteBoxesSynced();
  if (boxes[0] && updateSampleRouteNumber && tpl.sampleRoute) {
    boxes[0].routeNumber = tpl.sampleRoute;
    R.routeNumber = tpl.sampleRoute;
  }

  const isBlackBadge = tc.originDestText === 'black';
  (appConfig.variants || []).forEach((v, idx) => {
    if (idx === 0 || v.boundToId === '__theme__') {
      v.color = tc.routeLineColor || tpl.bgColor;
      v.badgeText = isBlackBadge ? 'black' : 'white';
      if (tc.dateHeaderBg) {
        v.dateHeaderBg = tc.dateHeaderBg;
        v.originHeaderBg = tc.dateHeaderBg;
        v.originHeaderText = 'black';
        v.headwayHeaderBg = tc.dateHeaderBg;
        v.headwayHeaderText = 'black';
        v.clockContainerBg = tc.dateHeaderBg;
      }
      v.clockSvgColor = tc.clockSvgColor || v.color;
      v.timetableThickLineColor = tc.timetableThickLineColor || v.color;
    }
  });

  ensureVariantTimetablesSynced();
  (appConfig.rightData.timetable?.variantTables || []).forEach((vt, idx) => {
    if (updateSampleRouteNumber && tpl.sampleRoute && idx === 0) {
      vt.routeNumber = tpl.sampleRoute;
    }
  });

  syncBoundVariants();
  renderA4Sheet();
  renderEditorSidebar();
  updateTopPresetTriggerBadge();
}

// 紀錄當前範本套用模式：'theme_only' (僅套用主題色，保留現有站點與文字) | 'full' (載入完整範例路線及主題色)
let presetApplyMode = 'theme_only';
let currentActivePresetKey = 'whc_green';

function loadPreset(presetKey, forceMode = null) {
  if (isTempScratchMode) {
    showToast('臨時製作路線紙模式禁止使用「範本主題」！請先還原至正式模式', 'rose');
    return;
  }

  const keyMap = {
    B13: 'whc_green',
    CTB_CITY: 'urban_blue',
    KMB_RED: 'cht_ehc_red'
  };
  const resolvedKey = keyMap[presetKey] || presetKey;
  const tpl = MAIN_THEME_PRESETS.find(t => t.key === resolvedKey) || MAIN_THEME_PRESETS[0];
  const mode = forceMode || (presetKey === 'B13' ? 'full' : presetApplyMode);

  if (mode === 'full') {
    appConfig = getDefaultConfig();
    ensureOwlSvgConfigSynced();
    ensureHeaderRouteBoxesSynced();
    ensureVariantTimetablesSynced();
    applyThemeColorsFromTemplate(tpl.key, true);
  } else {
    applyThemeColorsFromTemplate(tpl.key, false);
  }

  closePresetPopover();
  showToast(
    mode === 'full'
      ? `已載入「${tpl ? tpl.label : presetKey}」完整範本及主色配置！`
      : `已套用「${tpl ? tpl.label : presetKey}」作為全頁主色主題（不影響路線號碼框樣式）！`
  );
}

// 開關頂部「視覺化範本與主題庫」彈出選單（臨時模式下禁止開啟）
function togglePresetPopover(event) {
  if (event) event.stopPropagation();
  if (isTempScratchMode) {
    closePresetPopover();
    showToast('臨時製作路線紙模式禁止使用「範本主題」！請先還原至正式模式', 'rose');
    return;
  }
  ensurePresetMenuInjected();
  const popover = document.getElementById('preset-gallery-popover');
  if (!popover) return;
  const isHidden = popover.classList.contains('hidden');
  if (isHidden) {
    renderPresetPopoverContent();
    popover.classList.remove('hidden');
  } else {
    popover.classList.add('hidden');
  }
}

function renderPresetPopoverContent() {
  const container = document.getElementById('preset-gallery-popover');
  if (!container) return;

  const cardsHTML = MAIN_THEME_PRESETS.map(tpl => {
    const isActive = currentActivePresetKey === tpl.key;
    const previewToken = tpl.sampleRoute || 'B13';
    const previewFontSize = previewToken.length >= 4 ? 22 : 26;

    return `
      <button
        type="button"
        onclick="loadPreset('${tpl.key}')"
        class="group p-2.5 rounded-xl border text-left transition flex items-center gap-3 ${
          isActive
            ? 'bg-emerald-950/60 border-emerald-400 ring-1 ring-emerald-400/60 shadow-md'
            : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 hover:border-slate-500'
        }"
      >
        <div style="
          background-color:${tpl.bgColor};
          color:${tpl.textColor};
          padding:3px;
          border-radius:5px;
          min-width:82px;
          height:48px;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          box-shadow:0 2px 5px rgba(0,0,0,0.45);
        ">
          <div style="
            border:1.4px solid rgba(255,255,255,0.88);
            border-radius:3px;
            width:100%;
            height:100%;
            padding:2px 6px;
            display:flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
          ">
            ${renderRouteTokenWithOwlHTML(previewToken, previewFontSize, tpl.textColor, tpl.bgColor, false)}
          </div>
        </div>

        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between gap-1">
            <span class="font-bold text-xs text-slate-100 group-hover:text-emerald-300 truncate">${esc(tpl.label)}</span>
            <span class="w-2.5 h-2.5 rounded-full border border-white/40 shrink-0" style="background:${tpl.bgColor};"></span>
          </div>
          <div class="text-[10px] text-slate-400 truncate mt-0.5">${esc(tpl.desc)}</div>
        </div>
      </button>
    `;
  }).join('');

  container.innerHTML = `
    <div onclick="event.stopPropagation()" class="w-[420px] sm:w-[460px] bg-slate-900/98 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl p-3.5 space-y-3 text-xs z-50">
      <div class="flex items-center justify-between border-b border-slate-800 pb-2">
        <div>
          <div class="font-bold text-slate-100 flex items-center gap-1.5">
            <i class="fa-solid fa-swatchbook text-emerald-400"></i>
            <span>香港巴士路線框主色範本庫</span>
          </div>
          <div class="text-[10px] text-slate-400">點擊任意樣式即可設為全頁主色（不包括路線號碼框樣式模板）</div>
        </div>
        <button type="button" onclick="closePresetPopover()" class="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="grid grid-cols-2 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
        <button
          type="button"
          onclick="setPresetApplyMode('theme_only')"
          class="py-1.5 px-2 rounded-lg text-[10px] font-bold transition ${
            presetApplyMode === 'theme_only'
              ? 'bg-emerald-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }"
        >
          <i class="fa-solid fa-palette mr-1"></i>僅套用主題色 (保留現有資料)
        </button>
        <button
          type="button"
          onclick="setPresetApplyMode('full')"
          class="py-1.5 px-2 rounded-lg text-[10px] font-bold transition ${
            presetApplyMode === 'full'
              ? 'bg-sky-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }"
        >
          <i class="fa-solid fa-rotate mr-1"></i>載入完整測試範本 (重置資料)
        </button>
      </div>

      <div class="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-0.5">
        ${cardsHTML}
      </div>
    </div>
  `;
}

function ensurePresetMenuInjected() {
  if (!document.getElementById('top-preset-dropdown-wrapper')) {
    const legacyPresetBtn = document.querySelector('#top-navbar button[onclick*="loadPreset"]');
    if (legacyPresetBtn && legacyPresetBtn.parentElement) {
      const tpl = MAIN_THEME_PRESETS.find(t => t.key === currentActivePresetKey) || MAIN_THEME_PRESETS[0];
      const wrapper = document.createElement('div');
      wrapper.id = 'top-preset-dropdown-wrapper';
      wrapper.className = 'relative flex items-center';
      wrapper.innerHTML = `
        <button
          id="btn-top-preset-trigger"
          type="button"
          onclick="togglePresetPopover(event)"
          class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs flex items-center gap-2 transition shadow-sm"
          title="打開香港巴士路線框主色範本庫"
        >
          <i class="fa-solid fa-swatchbook text-emerald-400"></i>
          <span class="text-slate-200 font-semibold hidden sm:inline">範本主題：</span>
          <span id="top-preset-active-badge" class="px-2 py-0.5 rounded text-xs font-black shadow-sm" style="background-color:${tpl.bgColor}; color:${tpl.textColor};">
            ${esc(tpl.label)}
          </span>
          <i class="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
        </button>
        <div id="preset-gallery-popover" class="hidden absolute left-0 top-full mt-2 z-50"></div>
      `;
      legacyPresetBtn.parentElement.replaceWith(wrapper);

      document.addEventListener('click', (e) => {
        const wrap = document.getElementById('top-preset-dropdown-wrapper');
        if (wrap && !wrap.contains(e.target)) {
          closePresetPopover();
        }
      });
    }
  }

  const triggerBtn = document.getElementById('btn-top-preset-trigger');
  if (triggerBtn) {
    if (isTempScratchMode) {
      triggerBtn.classList.add('opacity-45', 'cursor-not-allowed');
      triggerBtn.title = '臨時製作路線紙模式禁止使用範本主題！請先還原至正式模式';
      closePresetPopover();
    } else {
      triggerBtn.classList.remove('opacity-45', 'cursor-not-allowed');
      triggerBtn.title = '打開香港巴士路線框主色範本庫';
    }
  }
}

function updateTopPresetTriggerBadge() {
  const badgeEl = document.getElementById('top-preset-active-badge');
  if (!badgeEl) return;
  const tpl = MAIN_THEME_PRESETS.find(t => t.key === currentActivePresetKey) || MAIN_THEME_PRESETS[0];
  badgeEl.style.backgroundColor = tpl.bgColor;
  badgeEl.style.color = tpl.textColor;
  badgeEl.textContent = tpl.label;
}

// 切換範本套用模式（僅換主色 vs 載入完整範例）
function setPresetApplyMode(mode) {
  presetApplyMode = mode === 'full' ? 'full' : 'theme_only';
  renderPresetPopoverContent();
}

function closePresetPopover() {
  const popover = document.getElementById('preset-gallery-popover');
  if (popover) popover.classList.add('hidden');
}

// ==========================================================================
// 範疇一：導出樣式攔截與 1:1 Label 長度及 SVG 幾何鎖定核心
// ==========================================================================

// 攔截並修復 html-to-image@1.11.11 將所有 font-size 執行 Math.floor(px) - 0.1 縮小的 Bug，
// 同時保護所有 <svg> 內部向量節點與已鎖定的 Label 1:1 像素長度
function installExportComputedStyleGuard(sheet) {
  const origGetComputedStyle = window.getComputedStyle.bind(window);

  window.getComputedStyle = function (el, pseudo) {
    const cs = origGetComputedStyle(el, pseudo);
    if (!sheet || !el || !(el === sheet || sheet.contains(el)) || pseudo) {
      return cs;
    }

    // 關鍵修復 1：若元素為 <svg> 或位於 <svg> 內部（如二維碼 <rect>/<path>、續欄短方塊、站點圓圈），
    // 直接回傳原生 ComputedStyle，絕不將 height / block-size / width 改為 'auto'，避免 SVG2 幾何屬性塌縮為 0
    const tag = (el.tagName || '').toLowerCase();
    if (
      tag === 'svg' ||
      (typeof SVGElement !== 'undefined' && el instanceof SVGElement) ||
      (typeof el.closest === 'function' && el.closest('svg'))
    ) {
      return cs;
    }

    const origGetPropertyValue = cs.getPropertyValue.bind(cs);
    const isRootOrCol = Boolean(
      el === sheet ||
      el.hasAttribute('data-map-col') ||
      el.classList?.contains('col-continuous-track-svg')
    );
    const isLockedRow = Boolean(
      el.hasAttribute('data-stop-item') ||
      el.hasAttribute('data-stop-main-row') ||
      el.hasAttribute('data-stop-marker-cell') ||
      el.hasAttribute('data-cont-top') ||
      el.hasAttribute('data-cont-bot') ||
      el.hasAttribute('data-export-locked-h')
    );

    return new Proxy(cs, {
      get(target, prop) {
        if (prop === 'cssText') {
          return '';
        }
        if (prop === 'getPropertyValue') {
          return function (name) {
            const val = origGetPropertyValue(name);

            // 1. 對所有 px 字號包裹 calc(...)，100% 繞過 html-to-image 的 value.endsWith('px') 縮水邏輯
            if (name === 'font-size' && val && val.endsWith('px')) {
              const exactFs = (el.style && el.style.fontSize && el.style.fontSize.endsWith('px'))
                ? el.style.fontSize
                : val;
              return `calc(${exactFs})`;
            }

            // 2. 關鍵修復 2：最高優先級回傳已鎖定 1:1 實際像素長度的 Label 寬度，確保所有 Label 導出長度 100% 與預覽一致
            if (name === 'width' || name === 'inline-size') {
              if (isRootOrCol) return val;
              const inlineW = el.style ? el.style.width : '';

              if (el.hasAttribute('data-export-locked-w') && inlineW) {
                return inlineW;
              }
              if (inlineW === 'fit-content' || el.classList?.contains('sheet-badge')) {
                return 'fit-content';
              }
              if (inlineW === 'max-content') {
                return 'max-content';
              }
              if (inlineW && (inlineW.endsWith('%') || inlineW === 'auto')) {
                return inlineW;
              }
              const display = origGetPropertyValue('display') || '';
              if (!inlineW && (display.startsWith('inline') || el.classList?.contains('sheet-text-fix'))) {
                return 'auto';
              }
              return val;
            }

            // 3. 保護已鎖定高度之結構列與 Label，避免非結構文字區塊被截斷行高
            if (name === 'height' || name === 'block-size') {
              if (isRootOrCol || isLockedRow) {
                return (el.style && el.style.height) ? el.style.height : val;
              }
              const inlineH = el.style ? el.style.height : '';
              if (!inlineH) return 'auto';
              return val;
            }

            // 4. 允許字重與斜體正常合成
            if (name === 'font-synthesis') {
              return 'weight style';
            }

            return val;
          };
        }
        const value = Reflect.get(target, prop, target);
        return typeof value === 'function' ? value.bind(target) : value;
      }
    });
  };

  return function restoreComputedStyleGuard() {
    window.getComputedStyle = origGetComputedStyle;
  };
}

// 導出前在 1:1 原始尺寸且字體與軌道已完全穩定後，精準凍結所有 Label 長度、分站結構列高與 SVG 尺寸
function freezeSheetGeometryForExport(sheet) {
  if (!sheet) return;

  // 1. 確保所有內嵌 SVG 具備標準命名空間與明確像素寬高
  sheet.querySelectorAll('svg').forEach(svg => {
    if (!svg.getAttribute('xmlns')) {
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
    const rect = svg.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const exactW = String(Math.round(rect.width * 100) / 100);
      const exactH = String(Math.round(rect.height * 100) / 100);
      svg.setAttribute('width', exactW);
      svg.setAttribute('height', exactH);
    }
  });

  // 2. 讀取階段：批次收集所有結構列與所有 Label 的真實 1:1 渲染幾何尺寸（讀寫分離，零重排誤差）
  const allEls = Array.from(sheet.querySelectorAll('*'));
  const snapshots = allEls.map(el => {
    const tag = el.tagName ? el.tagName.toLowerCase() : '';
    if (tag === 'style' || tag === 'script') return null;
    if (el.closest('svg') && tag !== 'svg') return null;

    const rect = el.getBoundingClientRect();
    const cs = window.getComputedStyle(el);

    const lockRowHeight = Boolean(
      el.hasAttribute('data-stop-item') ||
      el.hasAttribute('data-stop-main-row') ||
      el.hasAttribute('data-stop-marker-cell') ||
      el.hasAttribute('data-cont-top') ||
      el.hasAttribute('data-cont-bot')
    );

    const lockColBox = Boolean(el.hasAttribute('data-map-col'));

    // 識別所有需要精確鎖定導出長度的 Label、色塊、底線與容器
    const display = cs.display || '';
    const bgColor = cs.backgroundColor || '';
    const hasBgColor = bgColor !== '' && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
    const isExplicitLabel = Boolean(
      el.hasAttribute('data-export-label') ||
      el.hasAttribute('data-stop-content-col') ||
      el.classList?.contains('sheet-badge')
    );
    const isAutoDetectedLabel = !el.classList?.contains('sheet-text-fix') &&
      !lockColBox &&
      !lockRowHeight &&
      rect.width > 3 &&
      (
        display === 'inline-flex' ||
        display === 'inline-block' ||
        (hasBgColor && rect.height > 1.2 && rect.height < 180)
      );

    const shouldLockLabelWidth = isExplicitLabel || isAutoDetectedLabel;
    const isFareLineOrBar = rect.width > 6 && rect.height >= 1 && rect.height <= 6 && hasBgColor;

    return {
      el,
      origStyle: el.getAttribute('style'),
      lockRowHeight,
      lockColBox,
      shouldLockLabelWidth,
      isFareLineOrBar,
      isInlineBadge: display === 'inline-flex' || display === 'inline-block',
      w: Math.round(rect.width * 100) / 100,
      h: Math.round(rect.height * 100) / 100
    };
  }).filter(Boolean);

  // 3. 寫入階段：批次寫入精確像素寬高鎖定屬性
  snapshots.forEach(s => {
    const { el } = s;
    el.setAttribute('data-export-orig-style', s.origStyle !== null ? s.origStyle : '__NONE__');

    if (s.lockColBox && s.w > 0 && s.h > 0) {
      el.style.width = `${s.w}px`;
      el.style.minWidth = `${s.w}px`;
      el.style.maxWidth = `${s.w}px`;
      el.style.height = `${s.h}px`;
      el.setAttribute('data-export-locked-w', '1');
      el.setAttribute('data-export-locked-h', '1');
    } else if (s.lockRowHeight && s.h > 0) {
      el.style.height = `${s.h}px`;
      el.style.minHeight = `${s.h}px`;
      el.style.maxHeight = `${s.h}px`;
      el.setAttribute('data-export-locked-h', '1');
    }

    if (s.shouldLockLabelWidth && s.w > 0) {
      // 對 inline-flex / inline-block 類型徽章預留 +0.4px 亞像素防斷行緩衝，對百分比/區塊型 Label 鎖定 1:1 實測寬度
      const lockedW = s.isInlineBadge
        ? Math.round((s.w + 0.4) * 100) / 100
        : s.w;
      el.style.width = `${lockedW}px`;
      el.style.minWidth = `${lockedW}px`;
      el.style.maxWidth = `${lockedW}px`;
      el.style.boxSizing = 'border-box';
      el.setAttribute('data-export-locked-w', '1');
    }

    if (s.isFareLineOrBar && s.h > 0) {
      el.style.height = `${s.h}px`;
      el.style.minHeight = `${s.h}px`;
      el.setAttribute('data-export-locked-h', '1');
    }
  });
}

// 導出完成後無損還原畫布內所有元素的原始內聯樣式
function unfreezeSheetGeometryAfterExport(sheet) {
  if (!sheet) return;
  sheet.querySelectorAll('[data-export-orig-style]').forEach(el => {
    const orig = el.getAttribute('data-export-orig-style');
    if (orig === '__NONE__') {
      el.removeAttribute('style');
    } else {
      el.setAttribute('style', orig);
    }
    el.removeAttribute('data-export-orig-style');
    el.removeAttribute('data-export-locked-w');
    el.removeAttribute('data-export-locked-h');
  });
}

// ==========================================================================
// 範疇二：零閃爍高清 PNG / A4 PDF 導出主流程與進度遮罩 UX
// ==========================================================================

// 顯示毛玻璃導出進度遮罩（遮蔽 1:1 尺寸切換瞬間，杜絕預覽畫面跳動閃爍）
function updateExportProgressOverlay(stepText, percent = 25) {
  let overlay = document.getElementById('a4-export-progress-overlay');
  const workspace = document.getElementById('main-workspace') || document.body;

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'a4-export-progress-overlay';
    overlay.className = 'fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-150';
    overlay.innerHTML = `
      <div class="bg-slate-900 border border-slate-700/90 rounded-2xl p-5 w-[340px] shadow-2xl space-y-3 text-center">
        <div class="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <i class="fa-solid fa-wand-magic-sparkles fa-spin text-base"></i>
        </div>
        <div class="space-y-1">
          <div class="text-xs font-bold text-slate-100">正在 1:1 無損導出高清路線紙</div>
          <div id="export-overlay-step-text" class="text-[11px] text-emerald-300 font-medium">${esc(stepText)}</div>
        </div>
        <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div id="export-overlay-progress-bar" class="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-200" style="width:${percent}%;"></div>
        </div>
        <div class="text-[9.5px] text-slate-400">已啟用 Label 長度鎖定、續欄方塊保護與向量二維碼校準</div>
      </div>
    `;
    workspace.appendChild(overlay);
  } else {
    const stepEl = document.getElementById('export-overlay-step-text');
    const barEl = document.getElementById('export-overlay-progress-bar');
    if (stepEl) stepEl.textContent = stepText;
    if (barEl) barEl.style.width = `${percent}%`;
  }
}

function removeExportProgressOverlay() {
  const overlay = document.getElementById('a4-export-progress-overlay');
  if (overlay) overlay.remove();
}

// 導出前檢查是否有內容超出 A4 高度 (1123px)，提供貼心 UX 提示
function checkA4OverflowBeforeExport(sheet) {
  if (!sheet) return false;
  const colEls = Array.from(sheet.querySelectorAll('[data-map-col]'));
  const sheetRect = sheet.getBoundingClientRect();
  const scale = sheetRect.width > 0 ? (sheetRect.width / 794) : 1;

  for (const colEl of colEls) {
    const stopItems = colEl.querySelectorAll('[data-stop-item]');
    if (!stopItems.length) continue;
    const lastStop = stopItems[stopItems.length - 1];
    const relBottom = (lastStop.getBoundingClientRect().bottom - sheetRect.top) / (scale || 1);
    if (relBottom > 1121) {
      return true;
    }
  }
  return false;
}

// 導出 A4 PNG / PDF（1.注入字體 -> 2.切換1:1重排 -> 3.重繪軌道 -> 4.凍結所有Label寬度與列高 -> 5.二次校準軌道 -> 6.渲染導出）
async function exportA4(format = 'png') {
  if (isTempScratchMode && format === 'pdf') {
    showToast('臨時製作路線紙模式禁止導出 A4 PDF！請先還原至正式模式', 'rose');
    return;
  }

  const sheet = document.getElementById('a4-sheet');
  const scaleWrapper = document.getElementById('a4-scale-wrapper');
  if (!sheet) return;

  const btnId = format === 'pdf' ? 'btn-export-pdf' : 'btn-export-png';
  const btn = document.getElementById(btnId);
  const origBtnHTML = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>導出中...</span>`;
  }

  const origWrapperTransform = scaleWrapper ? scaleWrapper.style.transform : '';
  const origWrapperTransition = scaleWrapper ? scaleWrapper.style.transition : '';
  const origWrapperMarginBottom = scaleWrapper ? scaleWrapper.style.marginBottom : '';
  let inlineFontStyleEl = null;
  let restoreStyleGuard = null;

  try {
    updateExportProgressOverlay('步驟 1/4：正在載入並內嵌 Base64 印刷字體...', 20);
    ensureRobotoFontLoaded();
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const fontEmbedCSS = await getEmbeddedGoogleFontsCSS();
    const exportOffsetPx = Number(appConfig.layout?.exportTextOffsetY) || 0;

    const exportCssText = `
      ${fontEmbedCSS}
      #a4-sheet {
        --sheet-font: 'Gill Sans MT', 'Noto Sans TC', sans-serif !important;
        --export-text-offset: ${exportOffsetPx}px !important;
        width: 794px !important;
        height: 1123px !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
        background-color: #ffffff !important;
        font-family: 'Gill Sans MT', 'Noto Sans TC', sans-serif !important;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: geometricPrecision !important;
        font-kerning: normal !important;
        font-synthesis: weight style !important;
      }
      #a4-sheet *, #a4-sheet *::before, #a4-sheet *::after {
        box-sizing: border-box;
        -webkit-text-size-adjust: 100% !important;
        text-size-adjust: 100% !important;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: geometricPrecision !important;
        font-synthesis: weight style !important;
      }
      .sheet-badge {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        line-height: 1 !important;
        vertical-align: middle !important;
        box-sizing: border-box !important;
      }
      .stop-node-svg, .bbi-qr-svg {
        display: block !important;
        flex-shrink: 0 !important;
        aspect-ratio: 1 / 1 !important;
        overflow: visible !important;
      }
    `;

    updateExportProgressOverlay('步驟 2/4：正在鎖定 1:1 Label 長度、續欄方塊與同軸軌道...', 48);

    // 1. 注入內嵌字體與導出樣式，並切換至 1:1 無縮放尺寸
    inlineFontStyleEl = document.createElement('style');
    inlineFontStyleEl.id = 'a4-export-inline-font-style';
    inlineFontStyleEl.textContent = exportCssText;
    sheet.appendChild(inlineFontStyleEl);

    if (scaleWrapper) {
      scaleWrapper.style.transition = 'none';
      scaleWrapper.style.transform = 'none';
      scaleWrapper.style.marginBottom = '0px';
    }
    sheet.classList.add('exporting-clean');

    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    // 2. 初次繪製全欄連續路線、續欄短方塊與站點圓圈 SVG
    renderAllColumnsContinuousTracks();
    await new Promise(r => requestAnimationFrame(r));

    const hasOverflow = checkA4OverflowBeforeExport(sheet);

    // 3. 凍結所有 Label 1:1 實際長度與分站結構列高，再執行一次軌道同步確保 SVG 座標零偏差
    freezeSheetGeometryForExport(sheet);
    renderAllColumnsContinuousTracks();
    await new Promise(r => requestAnimationFrame(r));

    updateExportProgressOverlay('步驟 3/4：正在進行向量字體預熱與高解析度渲染...', 76);

    const exportScale = Math.max(1, Number(appConfig.layout.exportScale) || 2);
    const engine = appConfig.layout.exportEngine || 'svg';
    let dataUrl = '';

    if (engine === 'svg' && window.htmlToImage) {
      try {
        restoreStyleGuard = installExportComputedStyleGuard(sheet);

        const svgDataUrl = await window.htmlToImage.toSvg(sheet, {
          width: 794,
          height: 1123,
          backgroundColor: '#ffffff',
          cacheBust: false,
          skipAutoScale: true,
          fontEmbedCSS: exportCssText,
          style: {
            transform: 'none',
            transformOrigin: 'top left',
            width: '794px',
            height: '1123px',
            margin: '0',
            boxShadow: 'none'
          }
        });

        if (restoreStyleGuard) {
          restoreStyleGuard();
          restoreStyleGuard = null;
        }

        dataUrl = await renderSvgDataUrlToPngWithFontWarmup(svgDataUrl, 794, 1123, exportScale);
      } catch (svgErr) {
        console.warn('SVG 引擎導出異常，自動切換至 html2canvas 後備引擎:', svgErr);
        if (restoreStyleGuard) {
          restoreStyleGuard();
          restoreStyleGuard = null;
        }
      }
    }

    if (!dataUrl && window.html2canvas) {
      const canvas = await window.html2canvas(sheet, {
        scale: exportScale,
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });
      dataUrl = canvas.toDataURL('image/png', 1.0);
    }

    if (!dataUrl) {
      throw new Error('找不到可用的導出渲染引擎');
    }

    updateExportProgressOverlay('步驟 4/4：正在封裝並下載檔案...', 95);

    const routeNo = String(appConfig.rightData?.routeNumber || 'Route').trim() || 'Route';
    const fileBaseName = `${routeNo}_A4_RouteSheet_${Date.now()}`;

    if (format === 'pdf') {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
      pdf.save(`${fileBaseName}.pdf`);
      showToast(
        hasOverflow
          ? '已導出 A4 PDF！（提示：偵測到部分分站接近底部邊界，可點「自動選擇適合排版方式」最佳化）'
          : '已成功導出 A4 PDF（Label 長度、續欄方塊與二維碼 100% 與預覽一致）！',
        hasOverflow ? 'info' : 'success'
      );
    } else {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${fileBaseName}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast(
        hasOverflow
          ? '已導出 PNG！（提示：偵測到部分分站接近底部邊界，可點「自動選擇適合排版方式」最佳化）'
          : '已成功導出高清 PNG（Label 長度、續欄方塊與二維碼 100% 與預覽一致）！',
        hasOverflow ? 'info' : 'success'
      );
    }
  } catch (err) {
    console.error('Export error:', err);
    showToast('導出失敗，請嘗試在「4. 班次與微調」切換導出引擎或使用原生列印', 'rose');
  } finally {
    if (restoreStyleGuard) {
      restoreStyleGuard();
    }
    if (inlineFontStyleEl && inlineFontStyleEl.parentNode) {
      inlineFontStyleEl.remove();
    }
    unfreezeSheetGeometryAfterExport(sheet);
    sheet.classList.remove('exporting-clean');
    if (scaleWrapper) {
      scaleWrapper.style.transform = origWrapperTransform;
      scaleWrapper.style.marginBottom = origWrapperMarginBottom;
      requestAnimationFrame(() => {
        scaleWrapper.style.transition = origWrapperTransition;
        renderAllColumnsContinuousTracks();
      });
    }
    removeExportProgressOverlay();
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = origBtnHTML;
    }
  }
}

// ==========================================================================
// 範疇二：字體載入、全字重映射與 Base64 預熱解碼引擎
// ==========================================================================

// 自動載入 Google Fonts 全字重 (400~900) 及本地/系統 Gill Sans MT (區分常規與粗體以支援正確字重渲染)
function ensureRobotoFontLoaded() {
  if (!document.getElementById('google-font-noto-roboto')) {
    const link = document.createElement('link');
    link.id = 'google-font-noto-roboto';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+TC:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600;1,700&display=swap';
    document.head.appendChild(link);
  }

  document.querySelectorAll('link[rel="stylesheet"]').forEach(lnk => {
    if (lnk.href && (lnk.href.includes('fonts.googleapis.com') || lnk.href.includes('cdnjs.cloudflare.com')) && !lnk.crossOrigin) {
      lnk.crossOrigin = 'anonymous';
    }
  });

  if (!document.getElementById('custom-global-ttf-fonts')) {
    const style = document.createElement('style');
    style.id = 'custom-global-ttf-fonts';
    style.textContent = `
      @font-face {
        font-family: 'Gill Sans MT';
        src: local('Gill Sans MT Bold'), local('GillSansMT-Bold'), local('Gill Sans Bold'),
             local('Gill Sans MT'), local('GillSansMT'),
             url('Gill Sans MT.ttf') format('truetype'),
             url('./Gill Sans MT.ttf') format('truetype'),
             url('fonts/Gill Sans MT.ttf') format('truetype');
        font-weight: 700 900;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Gill Sans MT';
        src: local('Gill Sans MT'), local('GillSansMT'), local('Gill Sans'),
             url('Gill Sans MT.ttf') format('truetype'),
             url('./Gill Sans MT.ttf') format('truetype'),
             url('fonts/Gill Sans MT.ttf') format('truetype');
        font-weight: 100 600;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }
}

// 擷取當前 A4 畫布上的所有唯一字元（供 Google Fonts 動態子集內嵌）
function collectSheetUniqueCharacters() {
  const sheet = document.getElementById('a4-sheet');
  const rawText = (sheet ? (sheet.innerText || sheet.textContent || '') : '') +
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$.,:-/()[]#*▲➔|&\'"+%~・ ';
  const charSet = new Set();
  for (const ch of rawText) {
    const code = ch.charCodeAt(0);
    if (code > 31 && code !== 127) {
      charSet.add(ch);
    }
  }
  return Array.from(charSet).sort().join('');
}

let cachedFontEmbedKey = '';
let cachedLocalGillSansCSS = null;

// 將 Google Fonts (Noto Sans TC / Roboto / Inter) 與本地 Gill Sans MT 轉為 Base64 內嵌 CSS
async function getEmbeddedGoogleFontsCSS() {
  const uniqueChars = collectSheetUniqueCharacters();
  if (typeof cachedFontEmbedCSS !== 'undefined' && cachedFontEmbedCSS && cachedFontEmbedKey === uniqueChars) {
    return cachedFontEmbedCSS;
  }

  const blobToDataUrlWithMime = (blob, forcedMime) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      let result = String(reader.result || '');
      if (forcedMime && result.startsWith('data:')) {
        result = result.replace(/^data:[^;]+;/, `data:${forcedMime};`);
      }
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

  if (cachedLocalGillSansCSS === null) {
    cachedLocalGillSansCSS = `
      @font-face {
        font-family: 'Gill Sans MT';
        src: local('Gill Sans MT Bold'), local('GillSansMT-Bold'), local('Gill Sans Bold'), local('Gill Sans MT'), local('GillSansMT');
        font-weight: 700 900;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gill Sans MT';
        src: local('Gill Sans MT'), local('GillSansMT'), local('Gill Sans');
        font-weight: 100 600;
        font-style: normal;
      }
    `;
    const candidatePaths = ['Gill Sans MT.ttf', './Gill Sans MT.ttf', 'fonts/Gill Sans MT.ttf'];
    for (const path of candidatePaths) {
      try {
        const res = await fetch(encodeURI(path));
        if (!res.ok) continue;
        const blob = await res.blob();
        if (blob.size < 100) continue;
        const dataUrl = await blobToDataUrlWithMime(blob, 'font/ttf');
        cachedLocalGillSansCSS = `
          @font-face {
            font-family: 'Gill Sans MT';
            src: local('Gill Sans MT Bold'), local('GillSansMT-Bold'), url('${dataUrl}') format('truetype');
            font-weight: 700 900;
            font-style: normal;
          }
          @font-face {
            font-family: 'Gill Sans MT';
            src: local('Gill Sans MT'), local('GillSansMT'), url('${dataUrl}') format('truetype');
            font-weight: 100 600;
            font-style: normal;
          }
        `;
        break;
      } catch (e) {
        // 繼續嘗試下一個路徑
      }
    }
  }

  const encodedText = encodeURIComponent(uniqueChars);
  const subsetFontCssUrls = [
    `https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700;800;900&display=swap&text=${encodedText}`,
    `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600;1,700&display=swap&text=${encodedText}`,
    `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap&text=${encodedText}`
  ];

  const fallbackFontCssUrls = [
    'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
  ];

  const fetchAndInlineCssUrl = async (cssUrl) => {
    const res = await fetch(cssUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let cssText = await res.text();

    const urlRegex = /url\((['"]?)(https:\/\/fonts\.gstatic\.com\/[^)'"]+)\1\)/g;
    const matches = [...cssText.matchAll(urlRegex)];
    const uniqueUrls = [...new Set(matches.map(m => m[2]))];

    const urlToDataMap = {};
    const batchSize = 8;
    for (let i = 0; i < uniqueUrls.length; i += batchSize) {
      const batch = uniqueUrls.slice(i, i + batchSize);
      await Promise.all(batch.map(async (fontFileUrl) => {
        try {
          const fontRes = await fetch(fontFileUrl);
          if (!fontRes.ok) return;
          const fontBlob = await fontRes.blob();
          const mime = fontFileUrl.includes('.woff2') ? 'font/woff2' : (fontFileUrl.includes('.ttf') ? 'font/ttf' : 'font/woff');
          const dataUrl = await blobToDataUrlWithMime(fontBlob, mime);
          urlToDataMap[fontFileUrl] = dataUrl;
        } catch (err) {
          console.warn('無法內嵌字體分片:', fontFileUrl, err);
        }
      }));
    }

    Object.keys(urlToDataMap).forEach(u => {
      cssText = cssText.split(u).join(urlToDataMap[u]);
    });

    return cssText;
  };

  try {
    let combinedCss = cachedLocalGillSansCSS || '';

    for (let idx = 0; idx < subsetFontCssUrls.length; idx++) {
      try {
        const inlined = await fetchAndInlineCssUrl(subsetFontCssUrls[idx]);
        combinedCss += '\n' + inlined;
      } catch (subsetErr) {
        if (fallbackFontCssUrls[idx]) {
          try {
            const fallbackInlined = await fetchAndInlineCssUrl(fallbackFontCssUrls[idx]);
            combinedCss += '\n' + fallbackInlined;
          } catch (fbErr) {
            console.warn('字體 CSS 後備載入失敗:', fbErr);
          }
        }
      }
    }

    if (combinedCss.trim()) {
      cachedFontEmbedCSS = combinedCss;
      cachedFontEmbedKey = uniqueChars;
    }
  } catch (e) {
    console.warn('載入 Google Fonts Base64 CSS 失敗:', e);
  }

  return (typeof cachedFontEmbedCSS !== 'undefined' && cachedFontEmbedCSS) ? cachedFontEmbedCSS : (cachedLocalGillSansCSS || '');
}

// 預熱並將 SVG ForeignObject DataURL 繪製為高清 PNG（解決瀏覽器首次導出時 Base64 字體尚未在 SVG 沙盒內激活而退回預設字體的 Bug）
async function renderSvgDataUrlToPngWithFontWarmup(svgDataUrl, widthPx, heightPx, scale = 2) {
  const loadAndDecodeImage = (src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = async () => {
      try {
        if (typeof img.decode === 'function') {
          await img.decode();
        }
      } catch (e) {
        // 忽略部分瀏覽器對 SVG decode 的非致命警告
      }
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });

  // 第一次載入：觸發 SVG 內部 @font-face Base64 字體解析
  const warmImg = await loadAndDecodeImage(svgDataUrl);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(widthPx * scale);
  canvas.height = Math.round(heightPx * scale);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // 先做一次預熱繪製，等待 60ms 讓 SVG 沙盒字體快取生效後再正式繪製
  ctx.drawImage(warmImg, 0, 0, canvas.width, canvas.height);
  await new Promise(r => setTimeout(r, 60));

  const finalImg = await loadAndDecodeImage(svgDataUrl);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(finalImg, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL('image/png', 1.0);
}

// 同步站點、四大 Label（收費/總站/區域/地標）、圓圈尺寸與線條長度配置（確保 L 永遠安全定義）
function ensureStopAndLineStyleConfigSynced() {
  if (!appConfig.layout || typeof appConfig.layout !== 'object') {
    appConfig.layout = {};
  }
  const L = appConfig.layout;
  const defaults = {
    lineThicknessPx: 4.3,          // 班次路線線條粗度 (px)
    normalNodeSizePx: 10.1,        // 一般分站圓圈直徑 (px)
    terminalNodeExtraPx: 3.4,      // 起訖點總站圓圈比一般站放大的額外直徑 (px)
    nodeStrokeWidthPx: 2.4,        // 一般分站圓圈外環線條粗度 (px)
    terminalStrokeWidthPx: 3.1,    // 起訖點總站圓圈外環線條粗度 (px)
    nodeToNameGapPx: 5.2,          // 站點圓圈與站名文字水平距離 (px)
    stopVerticalGapPx: 2.6,        // 分站與分站之間的垂直間距 / 站間線條長度 (px)
    destArrowLeadPx: 6.5,          // 終點站箭嘴上方額外垂直引線長度 (px)
    stopNameFontSizePx: 10.4,      // 中文站名字體大小 (px)
    stopEnFontSizePx: 8.4,         // 英文站名字體大小 (px)
    fareFontSizePx: 17.4,          // 收費 Label 字體大小 (px)
    fareBoxPadX: 6.5,              // 收費 Label 左右內距 (px)
    fareBoxPadY: 1.6,              // 收費 Label 上下內距 (px)
    fareLineThicknessPx: 2.2,      // 收費 Label 底線粗度 (px)
    districtFontSizePx: 9.6,       // 區域 Label 字體大小 (px)
    districtPadX: 5.5,             // 區域 Label 左右內距 (px)
    districtPadY: 1.5,             // 區域 Label 上下內距 (px)
    landmarkZhFontSizePx: 7.6,     // 地標 Label 中文字體大小 (px)
    landmarkEnFontSizePx: 6.6,     // 地標 Label 英文字體大小 (px)
    landmarkPadX: 4.8,             // 地標 Label 左右內距 (px)
    landmarkPadY: 1.6,             // 地標 Label 上下內距 (px)
    coloredStopPadX: 7.0,          // 起訖總站色塊 Label 左右內距 (px)
    coloredStopPadY: 2.0,          // 起訖總站色塊 Label 上下內距 (px)
    stopZhWeight: '700',           // 一般站中文預設粗體 ('700') 確保紙張遠看清晰
    stopEnWeight: '600',           // 一般站英文粗細
    coloredStopZhWeight: '900',    // 純色底起訖站中文粗細
    coloredStopEnWeight: '700',    // 純色底起訖站英文粗細
    autoScaleByStopCount: true,    // 預設開啟按站點數量自動縮放全部 Label 與字號
    linkNodeSizeToFontSize: true,  // 預設開啟字號與 Label/站圈等比連動
    forceMaxTwoColumns: true,      // 預設強制 2 欄內完成
    _v5DynamicLabelsCalibrated: true
  };

  if (!L._v5DynamicLabelsCalibrated) {
    Object.keys(defaults).forEach(k => {
      if (L[k] === undefined || L[k] === null || L[k] === '') {
        L[k] = defaults[k];
      }
    });
    if (!L._customStopZhWeight) L.stopZhWeight = '700';
    L._v5DynamicLabelsCalibrated = true;
  }

  Object.keys(defaults).forEach(k => {
    if (L[k] === undefined || L[k] === null || L[k] === '') {
      L[k] = defaults[k];
    }
  });

  return L;
}

// 防止 DOM 閉環校準重入的旗標
let _isCalibratingRouteMapDOM = false;

// 根據目前站點數量即時同步更新全局與分站的「收費 Label、區域 Label、地標 Label、站點字號與圓圈大小」
function syncAllLabelsAndFontSizesByCurrentStopCount(forceApply = false) {
  const L = ensureStopAndLineStyleConfigSynced();
  if (!forceApply && !L.autoScaleByStopCount) return false;

  const stops = appConfig.stops || [];
  const currentStopCount = stops.length;
  const profileKey = L.autoLayoutProfileKey || 'auto';
  const { profile, stats } = selectOptimalAutoLayoutProfile(profileKey);
  const isSingleColSparse = profile.targetCols === 1 && currentStopCount < 20;

  L.lastResolvedProfileKey = profile.key;
  L._lastAutoScaledStopCount = currentStopCount;

  // 1. 同步換欄站數、路線圖寬度與外邊距
  L.autoSplitMaxStops = computeSmartColumnSplitMaxStops(stops, profile.targetCols, profile.key);
  let mapWidth = profile.mapWidthPercent;
  if (stats.isParallel && stats.variantCount >= 2) {
    mapWidth = Math.min(70, mapWidth + (stats.variantCount - 1) * 1.5);
  } else if (profile.targetCols === 1 && stats.landmarkStopCount >= 2) {
    mapWidth = Math.min(58, mapWidth + 2);
  }
  L.mapWidthPercent = Math.round(mapWidth);
  L.columnGapPx = profile.columnGapPx;
  L.sheetPaddingMm = profile.sheetPaddingMm;

  // 2. 同步站名、收費 Label、區域 Label、地標 Label 字號與盒模型內距、站圈大小與線粗
  syncNodeAndLineProportionsToFontSize(profile.stopNameFontSizePx, true);
  L.stopVerticalGapPx = profile.stopVerticalGapPx;

  // 3. 清除分站上殘留的舊字號/內距覆寫，並按站數調整單欄少站 (如城巴 629) 的 Label 寬度比例
  stops.forEach(s => {
    delete s.districtFontSizePx;
    delete s.districtPadX;
    delete s.districtPadY;
    delete s.fareFontSizePx;
    delete s.fareBoxPadX;
    delete s.fareBoxPadY;
    delete s.fareLineThicknessPx;

    if (isSingleColSparse && currentStopCount <= 12) {
      if (!s.districtWidth || s.districtWidth === '100%') s.districtWidth = '76%';
      if (!s.fareLineWidth || s.fareLineWidth === '100%') s.fareLineWidth = '78%';
      if (!s.coloredBoxWidth) s.coloredBoxWidth = '78%';
    } else {
      if (s.districtWidth === '76%') s.districtWidth = '100%';
      if (s.fareLineWidth === '78%') s.fareLineWidth = '100%';
      if (s.coloredBoxWidth === '78%') s.coloredBoxWidth = '';
    }
  });

  return true;
}

// 渲染 A4 畫布：自動偵測站點數量變化並即時縮放「收費 Label、區域 Label、地標 Label、站名與站圈」
function renderA4Sheet() {
  ensureRobotoFontLoaded();
  ensurePresetMenuInjected();
  if (typeof ensureColorTabButtonInjected === 'function') {
    ensureColorTabButtonInjected();
  }
  const sheet = document.getElementById('a4-sheet');
  if (!sheet) return;

  const L = ensureStopAndLineStyleConfigSynced();
  const currentStopCount = (appConfig.stops || []).length;
  let needDomCalibrationAfterRender = false;

  // 當開啟「按站數自動適配」且站點數量發生改變（或首次渲染）時，自動根據最新站點數量更新所有 Label 與字體大小！
  if (!_isCalibratingRouteMapDOM && L.autoScaleByStopCount && L._lastAutoScaledStopCount !== currentStopCount) {
    syncAllLabelsAndFontSizesByCurrentStopCount(true);
    needDomCalibrationAfterRender = true;
  }

  const fontStack = "'Gill Sans MT', 'Noto Sans TC', sans-serif";
  sheet.style.setProperty('--export-text-offset', `${Number(L.exportTextOffsetY) || 0}px`);
  sheet.style.setProperty('--sheet-font', fontStack);
  sheet.style.fontFamily = fontStack;
  sheet.style.fontWeight = '500';
  sheet.style.lineHeight = '1.5';
  sheet.style.webkitTextSizeAdjust = '100%';
  sheet.style.textSizeAdjust = '100%';

  const rawMm = L.sheetPaddingMm !== undefined && L.sheetPaddingMm !== '' ? Number(L.sheetPaddingMm) : 5;
  const padPx = Math.max(0, Math.round(rawMm * 3.78));
  const isMapLeft = L.mapPosition !== 'right';

  const mapHTML = renderRouteMapSectionHTML();
  const infoHTML = renderRightInfoColumnHTML();

  sheet.innerHTML = `
    <div style="
      width:100%;
      height:100%;
      padding:${padPx}px;
      box-sizing:border-box;
      display:flex;
      flex-direction:${isMapLeft ? 'row' : 'row-reverse'};
      align-items:stretch;
      justify-content:space-between;
      background:#ffffff;
      font-family:${fontStack};
      font-weight:500;
      -webkit-text-size-adjust:100%;
      text-size-adjust:100%;
    ">
      ${mapHTML}
      ${infoHTML}
    </div>
  `;

  if (needDomCalibrationAfterRender && !_isCalibratingRouteMapDOM) {
    calibrateAutoLayoutWithDOM(L.autoLayoutProfileKey || 'auto');
    return;
  }

  renderAllColumnsContinuousTracks();
}

// DOM 實測閉環校準器：每次微調字號時，收費 Label、區域 Label、地標 Label 與站圈皆按官方比例同步縮放
function calibrateAutoLayoutWithDOM(profileKey = 'auto') {
  const sheet = document.getElementById('a4-sheet');
  if (!sheet || _isCalibratingRouteMapDOM) return;

  _isCalibratingRouteMapDOM = true;
  try {
    const L = ensureStopAndLineStyleConfigSynced();
    const totalStops = (appConfig.stops || []).length;
    L._lastAutoScaledStopCount = totalStops;

    const { profile } = selectOptimalAutoLayoutProfile(profileKey);
    const minLegibleZh = totalStops > 54 ? 8.6 : (profile.minLegibleZhPx || 9.2);
    const maxScaleUpZh = totalStops <= 10 ? 16.5 : (totalStops < 20 ? 14.8 : (profile.maxScaleUpZhPx || 12.2));

    L.colTopSpaces = [0, 0, 0];
    renderA4Sheet();

    const measureColumns = () => {
      const colEls = Array.from(sheet.querySelectorAll('[data-map-col]'));
      if (!colEls.length) return null;

      const sheetRect = sheet.getBoundingClientRect();
      const scale = sheetRect.height > 0 ? (sheetRect.height / 1123) : 1;

      const col0El = colEls[0];
      const availMapH = (col0El.offsetHeight || (col0El.getBoundingClientRect().height / scale)) || 1055;

      const colContentHeights = colEls.map((colEl) => {
        const children = Array.from(colEl.children).filter(
          el => !el.classList.contains('col-continuous-track-svg')
        );
        if (!children.length) return 0;
        const colTop = colEl.getBoundingClientRect().top;
        const lastChild = children[children.length - 1];
        const lastBottom = lastChild.getBoundingClientRect().bottom;
        const topPad = parseFloat(colEl.style.paddingTop || '0') || 0;
        return Math.max(0, (lastBottom - colTop) / (scale || 1) - topPad);
      });

      return {
        colCount: colEls.length,
        availMapH,
        colContentHeights
      };
    };

    // 第 0 步：若單欄模式下內容高度嚴重超出可用高度且站數 >= 17 站，自動切換為 2 欄模式
    let initMeasure = measureColumns();
    if (initMeasure && initMeasure.colCount === 1 && totalStops >= 17 && initMeasure.colContentHeights[0] > initMeasure.availMapH + 45) {
      L.autoSplitMaxStops = computeSmartColumnSplitMaxStops(appConfig.stops, 2, 'stop4_balanced_2col');
      if (L.mapWidthPercent < 60) L.mapWidthPercent = 62;
      renderA4Sheet();
    }

    // 第 1 步：高度動態平衡、少於 20 站自動拉大比例與延展線條長度 & 防溢出閉環校準
    for (let pass = 0; pass < 9; pass++) {
      const m = measureColumns();
      if (!m) break;

      if (m.colCount === 2 && m.colContentHeights[1] > m.colContentHeights[0] - 10 && L.autoSplitMaxStops < totalStops - 2) {
        L.autoSplitMaxStops += 1;
        renderA4Sheet();
        continue;
      }

      if (
        m.colCount === 2 &&
        m.colContentHeights[0] > m.availMapH - 3 &&
        m.colContentHeights[1] < m.availMapH - 75 &&
        L.autoSplitMaxStops > Math.ceil(totalStops * 0.5)
      ) {
        L.autoSplitMaxStops -= 1;
        renderA4Sheet();
        continue;
      }

      const maxContentH = Math.max(...m.colContentHeights);
      const col0Stops = sheet.querySelectorAll('[data-map-col="0"] [data-stop-item]').length || 1;
      const targetFillH = m.availMapH - 6;
      const diffPx = targetFillH - maxContentH;

      if (diffPx < -1.5) {
        const gapsCount = Math.max(1, col0Stops - 1);
        const reducePerGap = Math.abs(diffPx) / gapsCount;
        const minGap = totalStops >= 40 ? 0.0 : (totalStops < 20 ? 2.0 : 0.3);
        const nextGap = Math.max(minGap, Math.round((Number(L.stopVerticalGapPx) - reducePerGap) * 10) / 10);

        if (Number(L.stopVerticalGapPx) > minGap + 0.05 && nextGap < Number(L.stopVerticalGapPx)) {
          L.stopVerticalGapPx = nextGap;
        } else if (L.sheetPaddingMm > 3.2) {
          L.sheetPaddingMm = Math.max(3.2, Math.round((L.sheetPaddingMm - 0.5) * 10) / 10);
        } else if (L.showVariantLegend && (appConfig.variants || []).length > 1) {
          L.showVariantLegend = false;
        } else if (Number(L.stopNameFontSizePx) > minLegibleZh) {
          const nextZhSize = Math.max(minLegibleZh, Math.round((Number(L.stopNameFontSizePx) - 0.25) * 10) / 10);
          // 同步縮放站名、收費 Label、區域 Label、地標 Label 與站圈大小
          syncNodeAndLineProportionsToFontSize(nextZhSize, true);
        } else {
          break;
        }
        renderA4Sheet();
      } else if (diffPx > 14) {
        if (totalStops < 20 && m.colCount === 1) {
          if (Number(L.stopNameFontSizePx) < maxScaleUpZh && diffPx > 45 && pass < 4) {
            const boostStep = diffPx > 180 ? 0.8 : (diffPx > 90 ? 0.5 : 0.3);
            const boostZh = Math.min(maxScaleUpZh, Math.round((Number(L.stopNameFontSizePx) + boostStep) * 10) / 10);
            // 同步拉大站名、收費 Label、區域 Label、地標 Label 與站圈大小
            syncNodeAndLineProportionsToFontSize(boostZh, true);
            const gapsCount = Math.max(1, col0Stops - 1);
            const addGap = (diffPx * 0.45) / gapsCount;
            L.stopVerticalGapPx = Math.min(140.0, Math.round((Number(L.stopVerticalGapPx) + addGap) * 10) / 10);
            renderA4Sheet();
          } else {
            const gapsCount = Math.max(1, col0Stops - 1);
            const addPerGap = (diffPx * 0.92) / gapsCount;
            const nextGap = Math.min(140.0, Math.round((Number(L.stopVerticalGapPx) + addPerGap) * 10) / 10);
            if (nextGap > Number(L.stopVerticalGapPx) + 0.2) {
              L.stopVerticalGapPx = nextGap;
              renderA4Sheet();
            } else {
              break;
            }
          }
        } else if (pass <= 2) {
          const gapsCount = Math.max(1, col0Stops - 1);
          const maxAllowedGap = 6.5;
          const addPerGap = (diffPx * 0.88) / gapsCount;
          const nextGap = Math.min(maxAllowedGap, Math.round((Number(L.stopVerticalGapPx) + addPerGap) * 10) / 10);
          if (nextGap > Number(L.stopVerticalGapPx) + 0.1) {
            L.stopVerticalGapPx = nextGap;
            renderA4Sheet();
          } else {
            break;
          }
        } else {
          break;
        }
      } else {
        break;
      }
    }

    // 第 2 步：根據第 1 欄最終底部位置，自動計算第 2 欄的「頂部留白數值 (colTopSpaces[1])」
    const finalMeasure = measureColumns();
    if (finalMeasure && finalMeasure.colCount >= 2) {
      const col0H = finalMeasure.colContentHeights[0] || 0;
      const refBottomY = Math.min(finalMeasure.availMapH - 3, Math.max(col0H, finalMeasure.availMapH * 0.90));

      L.colTopSpaces = finalMeasure.colContentHeights.map((h, idx) => {
        if (idx === 0) return 0;
        const pullDown = Math.round(refBottomY - h);
        return Math.max(0, Math.min(380, pullDown));
      });
      renderA4Sheet();
    } else {
      L.colTopSpaces = [0, 0, 0];
    }
  } finally {
    _isCalibratingRouteMapDOM = false;
  }
}

// 核心主入口：執行路線圖「自動選擇適合排版方式」
function runSmartAutoRouteMapLayout(modeKey = 'auto', silent = false) {
  const L = ensureStopAndLineStyleConfigSynced();
  L.autoLayoutProfileKey = modeKey || 'auto';
  L.autoScaleByStopCount = true;
  if (L.forceMaxTwoColumns === undefined) {
    L.forceMaxTwoColumns = true;
  }

  (appConfig.stops || []).forEach(s => {
    if (s.manualBreakAfter) s.manualBreakAfter = false;
  });

  syncAllLabelsAndFontSizesByCurrentStopCount(true);
  L.mapOffsetX = 0;
  L.mapOffsetY = 0;

  const { profile } = selectOptimalAutoLayoutProfile(modeKey);
  calibrateAutoLayoutWithDOM(profile.key);

  if (!silent) {
    renderEditorSidebar();
    const col2Top = Array.isArray(L.colTopSpaces) && L.colTopSpaces[1] ? `・第2欄留白 ${L.colTopSpaces[1]}px` : '';
    const termSize = Math.round((L.normalNodeSizePx + L.terminalNodeExtraPx) * 10) / 10;
    showToast(`已套用「${profile.refName}」比例（站名 ${L.stopNameFontSizePx}px・收費 ${L.fareFontSizePx}px・區域 ${L.districtFontSizePx}px・地標 ${L.landmarkZhFontSizePx}px・站圈 ${L.normalNodeSizePx}/${termSize}px${col2Top}）！`);
  }
}

function applyAutoStopTypographyAndGap(forceApply = false) {
  const L = ensureStopAndLineStyleConfigSynced();
  if (L.autoScaleByStopCount === undefined) L.autoScaleByStopCount = true;
  if (!forceApply && !L.autoScaleByStopCount) return;
  runSmartAutoRouteMapLayout(L.autoLayoutProfileKey || 'auto', true);
}

function applySampleRoutePdfProportions(silent = false) {
  runSmartAutoRouteMapLayout('auto', silent);
}

// 五大官方路線紙參考範本排版配置庫（嚴格依據 stop2.png, stop3.pdf, stop4.pdf, stop1.png, manystop.png 校準全部 11 項尺寸與線條長度）
const ROUTE_MAP_AUTO_LAYOUT_PROFILES = [
  {
    key: 'stop2_sparse_1col',
    refName: 'stop2.png (城巴 629)',
    label: '少站單欄特大比例版',
    desc: '2–12 站・自動拉大全部 Label 與字號、加長站間路線線條貫穿全頁',
    minStops: 1,
    maxStops: 12,
    targetCols: 1,
    mapWidthPercent: 53,
    sheetPaddingMm: 5.5,
    columnGapPx: 14,
    stopNameFontSizePx: 15.6,
    stopEnFontSizePx: 12.6,
    fareFontSizePx: 23.0,
    fareBoxPadX: 9.5,
    fareBoxPadY: 3.0,
    fareLineThicknessPx: 2.6,
    districtFontSizePx: 13.6,
    districtPadX: 10.0,
    districtPadY: 3.0,
    landmarkZhFontSizePx: 10.8,
    landmarkEnFontSizePx: 9.3,
    landmarkPadX: 9.0,
    landmarkPadY: 3.6,
    coloredStopPadX: 11.5,
    coloredStopPadY: 4.4,
    stopZhWeight: '700',
    stopEnWeight: '600',
    coloredStopZhWeight: '900',
    coloredStopEnWeight: '700',
    normalNodeSizePx: 14.8,
    terminalNodeExtraPx: 4.6,
    nodeStrokeWidthPx: 3.2,
    terminalStrokeWidthPx: 4.0,
    lineThicknessPx: 5.6,
    nodeToNameGapPx: 8.0,
    stopVerticalGapPx: 24.0,
    destArrowLeadPx: 14.0,
    minLegibleZhPx: 13.5,
    maxScaleUpZhPx: 16.6
  },
  {
    key: 'stop3_standard_1col',
    refName: 'stop3.pdf (城巴 22S)',
    label: '13–19站單欄拉大清晰版',
    desc: '13–19 站・單欄拉大比例與線條長度（站名 12.8px・收費 20.0px・站圈 12.2px）',
    minStops: 13,
    maxStops: 19,
    targetCols: 1,
    mapWidthPercent: 54,
    sheetPaddingMm: 5.0,
    columnGapPx: 14,
    stopNameFontSizePx: 12.8,
    stopEnFontSizePx: 10.3,
    fareFontSizePx: 20.0,
    fareBoxPadX: 8.0,
    fareBoxPadY: 2.2,
    fareLineThicknessPx: 2.3,
    districtFontSizePx: 11.6,
    districtPadX: 7.5,
    districtPadY: 2.2,
    landmarkZhFontSizePx: 9.2,
    landmarkEnFontSizePx: 8.0,
    landmarkPadX: 7.0,
    landmarkPadY: 2.6,
    coloredStopPadX: 9.2,
    coloredStopPadY: 3.2,
    stopZhWeight: '700',
    stopEnWeight: '600',
    coloredStopZhWeight: '900',
    coloredStopEnWeight: '700',
    normalNodeSizePx: 12.2,
    terminalNodeExtraPx: 3.8,
    nodeStrokeWidthPx: 2.8,
    terminalStrokeWidthPx: 3.5,
    lineThicknessPx: 5.0,
    nodeToNameGapPx: 6.6,
    stopVerticalGapPx: 6.5,
    destArrowLeadPx: 9.5,
    minLegibleZhPx: 11.4,
    maxScaleUpZhPx: 14.8
  },
  {
    key: 'stop4_balanced_2col',
    refName: 'stop4.pdf (城巴 79)',
    label: '中量站雙欄均衡版',
    desc: '20–32 站・2欄均衡配置（站名 11.2px・收費 18.4px・區域 10.4px・地標 8.2px・站圈 10.8px）',
    minStops: 20,
    maxStops: 32,
    targetCols: 2,
    mapWidthPercent: 62,
    sheetPaddingMm: 4.8,
    columnGapPx: 13,
    stopNameFontSizePx: 11.2,
    stopEnFontSizePx: 9.0,
    fareFontSizePx: 18.4,
    fareBoxPadX: 7.0,
    fareBoxPadY: 1.8,
    fareLineThicknessPx: 2.2,
    districtFontSizePx: 10.4,
    districtPadX: 6.2,
    districtPadY: 1.7,
    landmarkZhFontSizePx: 8.2,
    landmarkEnFontSizePx: 7.1,
    landmarkPadX: 5.6,
    landmarkPadY: 1.9,
    coloredStopPadX: 7.6,
    coloredStopPadY: 2.3,
    stopZhWeight: '700',
    stopEnWeight: '600',
    coloredStopZhWeight: '900',
    coloredStopEnWeight: '700',
    normalNodeSizePx: 10.8,
    terminalNodeExtraPx: 3.4,
    nodeStrokeWidthPx: 2.5,
    terminalStrokeWidthPx: 3.2,
    lineThicknessPx: 4.5,
    nodeToNameGapPx: 5.8,
    stopVerticalGapPx: 2.8,
    destArrowLeadPx: 7.5,
    minLegibleZhPx: 10.4,
    maxScaleUpZhPx: 12.2
  },
  {
    key: 'stop1_stepped_2col',
    refName: 'stop1.png (城巴 6)',
    label: '多站雙欄階梯版',
    desc: '33–43 站・2欄左滿右階梯（站名 10.4px・收費 17.4px・區域 9.6px・地標 7.6px・站圈 10.1px）',
    minStops: 33,
    maxStops: 43,
    targetCols: 2,
    mapWidthPercent: 63,
    sheetPaddingMm: 4.2,
    columnGapPx: 11,
    stopNameFontSizePx: 10.4,
    stopEnFontSizePx: 8.4,
    fareFontSizePx: 17.4,
    fareBoxPadX: 6.2,
    fareBoxPadY: 1.5,
    fareLineThicknessPx: 2.0,
    districtFontSizePx: 9.6,
    districtPadX: 5.2,
    districtPadY: 1.4,
    landmarkZhFontSizePx: 7.6,
    landmarkEnFontSizePx: 6.6,
    landmarkPadX: 4.8,
    landmarkPadY: 1.5,
    coloredStopPadX: 6.5,
    coloredStopPadY: 1.8,
    stopZhWeight: '700',
    stopEnWeight: '600',
    coloredStopZhWeight: '900',
    coloredStopEnWeight: '700',
    normalNodeSizePx: 10.1,
    terminalNodeExtraPx: 3.4,
    nodeStrokeWidthPx: 2.4,
    terminalStrokeWidthPx: 3.1,
    lineThicknessPx: 4.3,
    nodeToNameGapPx: 5.2,
    stopVerticalGapPx: 1.4,
    destArrowLeadPx: 6.0,
    minLegibleZhPx: 9.8,
    maxScaleUpZhPx: 11.0
  },
  {
    key: 'manystop_dense_2col',
    refName: 'manystop.png (城巴 971)',
    label: '超多站高密度雙欄版',
    desc: '44 站以上・嚴格 2 欄內完成（站名 9.8px・收費 16.4px・區域 9.1px・地標 7.2px・站圈 9.6px）',
    minStops: 44,
    maxStops: 999,
    targetCols: 2,
    mapWidthPercent: 65,
    sheetPaddingMm: 3.5,
    columnGapPx: 10,
    stopNameFontSizePx: 9.8,
    stopEnFontSizePx: 7.9,
    fareFontSizePx: 16.4,
    fareBoxPadX: 5.6,
    fareBoxPadY: 1.2,
    fareLineThicknessPx: 1.8,
    districtFontSizePx: 9.1,
    districtPadX: 4.6,
    districtPadY: 1.1,
    landmarkZhFontSizePx: 7.2,
    landmarkEnFontSizePx: 6.2,
    landmarkPadX: 4.2,
    landmarkPadY: 1.2,
    coloredStopPadX: 5.8,
    coloredStopPadY: 1.5,
    stopZhWeight: '700',
    stopEnWeight: '600',
    coloredStopZhWeight: '900',
    coloredStopEnWeight: '700',
    normalNodeSizePx: 9.6,
    terminalNodeExtraPx: 3.2,
    nodeStrokeWidthPx: 2.3,
    terminalStrokeWidthPx: 3.0,
    lineThicknessPx: 4.1,
    nodeToNameGapPx: 4.8,
    stopVerticalGapPx: 0.7,
    destArrowLeadPx: 5.0,
    minLegibleZhPx: 9.2,
    maxScaleUpZhPx: 10.2
  }
];

// 根據中文站名字號 (zhFontSizePx) 自動按 5 份官方路線紙黃金比例同步計算：
// 1. 站點中英文字號與起訖總站 Label 內距
// 2. 收費 Label 字號、內距與底線粗度
// 3. 區域 Label 字號與內距
// 4. 地標 Label 中英文字號與內距
// 5. 一般站圓圈、起訖總站大圓圈、外環粗度、路線線粗與終點箭嘴引線長度
function syncNodeAndLineProportionsToFontSize(zhFontSizePx, applyToLayout = true) {
  const zh = Math.max(8.5, Math.min(17.5, Number(zhFontSizePx) || 10.4));
  const en = Math.round(Math.max(7.0, zh * 0.805) * 10) / 10;
  const scale = zh / 10.0;

  // 1. 收費 Label 字號與盒模型內距（629 少站時顯著放大至 23px，多站時精煉至 16.4px）
  const farePx = Math.round(Math.max(15.0, Math.min(24.5, 16.8 * Math.pow(scale, 0.70))) * 10) / 10;
  const farePadX = Math.round(Math.max(5.2, Math.min(11.0, 5.9 * Math.pow(scale, 1.05))) * 10) / 10;
  const farePadY = Math.round(Math.max(1.1, Math.min(3.4, 1.35 * Math.pow(scale, 1.65))) * 10) / 10;
  const fareLineThick = Math.round(Math.max(1.8, Math.min(3.2, 1.95 * Math.pow(scale, 0.65))) * 10) / 10;

  // 2. 區域 Label 字號與盒模型內距（629 少站時放大至 13.6px，多站時 9.1px）
  const districtPx = Math.round(Math.max(8.6, Math.min(15.0, 9.3 * Math.pow(scale, 0.85))) * 10) / 10;
  const districtPadX = Math.round(Math.max(4.4, Math.min(11.0, 4.9 * Math.pow(scale, 1.55))) * 10) / 10;
  const districtPadY = Math.round(Math.max(1.0, Math.min(3.4, 1.25 * Math.pow(scale, 1.85))) * 10) / 10;

  // 3. 地標 Label 中英文字號與盒模型內距（629 少站時放大至 10.8px/9.3px，多站時 7.2px/6.2px）
  const landmarkZhPx = Math.round(Math.max(6.8, Math.min(11.8, 7.35 * Math.pow(scale, 0.86))) * 10) / 10;
  const landmarkEnPx = Math.round(Math.max(5.8, Math.min(10.2, landmarkZhPx * 0.865)) * 10) / 10;
  const landmarkPadX = Math.round(Math.max(4.0, Math.min(10.0, 4.4 * Math.pow(scale, 1.55))) * 10) / 10;
  const landmarkPadY = Math.round(Math.max(1.1, Math.min(3.8, 1.35 * Math.pow(scale, 2.0))) * 10) / 10;

  // 4. 起訖總站色塊 Label 內距
  const coloredStopPadX = Math.round(Math.max(5.6, Math.min(13.0, 6.2 * Math.pow(scale, 1.35))) * 10) / 10;
  const coloredStopPadY = Math.round(Math.max(1.4, Math.min(5.0, 1.65 * Math.pow(scale, 2.0))) * 10) / 10;

  // 5. 站點圓圈直徑、總站放大直徑、外環粗度、路線線粗與終點箭嘴引線長度
  const normNode = Math.round(Math.max(8.6, zh * 0.96) * 10) / 10;
  const termExtra = Math.round(Math.max(3.0, zh * 0.305) * 10) / 10;
  const nodeStroke = Math.round(Math.max(2.1, normNode * 0.23) * 10) / 10;
  const termStroke = Math.round(Math.max(2.8, (normNode + termExtra) * 0.225) * 10) / 10;
  const lineThick = Math.round(Math.max(3.8, normNode * 0.41) * 10) / 10;
  const nodeGap = Math.round(Math.max(4.6, zh * 0.51) * 10) / 10;
  const destArrowLead = Math.round(Math.max(4.8, Math.min(16.0, 5.8 * Math.pow(scale, 1.55))) * 10) / 10;

  const computed = {
    stopNameFontSizePx: Math.round(zh * 10) / 10,
    stopEnFontSizePx: en,
    fareFontSizePx: farePx,
    fareBoxPadX: farePadX,
    fareBoxPadY: farePadY,
    fareLineThicknessPx: fareLineThick,
    districtFontSizePx: districtPx,
    districtPadX,
    districtPadY,
    landmarkZhFontSizePx: landmarkZhPx,
    landmarkEnFontSizePx: landmarkEnPx,
    landmarkPadX,
    landmarkPadY,
    coloredStopPadX,
    coloredStopPadY,
    normalNodeSizePx: normNode,
    terminalNodeExtraPx: termExtra,
    nodeStrokeWidthPx: nodeStroke,
    terminalStrokeWidthPx: termStroke,
    lineThicknessPx: lineThick,
    nodeToNameGapPx: nodeGap,
    destArrowLeadPx: destArrowLead
  };

  if (applyToLayout && appConfig && appConfig.layout) {
    Object.assign(appConfig.layout, computed);
    if (appConfig.layout.variantDisplayMode === 'parallel_lines' && (appConfig.variants || []).length > 1) {
      const minSafeParallelSpacing = Math.round((normNode + 4.4) * 2) / 2;
      if ((Number(appConfig.layout.parallelLineSpacingPx) || 14) < minSafeParallelSpacing) {
        appConfig.layout.parallelLineSpacingPx = Math.min(24, minSafeParallelSpacing);
      }
    }
  }
  return computed;
}

// 計算單一分站的等效視覺高度權重
function getStopVisualWeightUnits(stop) {
  if (!stop) return 1.0;
  let u = 1.0;
  const zhLen = String(stop.zh || '').replace(/\\n|\|/g, '').length;
  const enLen = String(stop.en || '').replace(/\\n|\|/g, '').length;
  const hasExplicitBreak = /\\n|\n|\|/.test(String(stop.zh || '')) || /\\n|\n|\|/.test(String(stop.en || ''));

  if (hasExplicitBreak || zhLen >= 13 || enLen >= 27) {
    u += 0.36;
  }
  if ((stop.districtZh && stop.districtZh.trim()) || (stop.districtEn && stop.districtEn.trim())) {
    u += 0.44;
  }
  if (stop.fare && String(stop.fare).trim() !== '') {
    u += 0.70;
  }
  if (stop.hasCorridor || stop.hasTunnel || stop.type === 'corridor' || stop.type === 'tunnel') {
    u += 0.38;
  }
  if (stop.hasTimePromo) {
    u += (stop.timePromoLayout === 'stacked' ? 0.82 : 0.22);
  }
  if (stop.hasInterchangeBox) {
    u += ((stop.interchangeLayout === 'stacked' || stop.interchangeLayout === 'above_name') ? 0.88 : 0.25);
  }
  if ((stop.remarkZh && stop.remarkZh.trim()) || (stop.remarkEn && stop.remarkEn.trim())) {
    u += 0.40;
  }
  return u;
}

// 全面分析目前路線圖的站點數量、視覺權重與寬度需求
function analyzeRouteMapComplexity() {
  const stops = appConfig.stops || [];
  const variants = appConfig.variants || [];
  const L = ensureStopAndLineStyleConfigSynced();
  const isParallel = L.variantDisplayMode === 'parallel_lines' && variants.length > 1;

  let totalVisualUnits = 0;
  let districtCount = 0;
  let fareCount = 0;
  let landmarkStopCount = 0;
  let calloutStopCount = 0;

  stops.forEach((s) => {
    totalVisualUnits += getStopVisualWeightUnits(s);
    if ((s.districtZh && s.districtZh.trim()) || (s.districtEn && s.districtEn.trim())) districtCount++;
    if (s.fare && String(s.fare).trim() !== '') fareCount++;
    if (Array.isArray(s.landmarks) && s.landmarks.some(lm => (lm.zh && lm.zh.trim()) || (lm.en && lm.en.trim()))) {
      landmarkStopCount++;
    }
    if (s.hasTimePromo || s.hasInterchangeBox) calloutStopCount++;
  });

  const totalStops = stops.length;
  const effectiveStopCount = Math.round((totalStops * 0.54 + totalVisualUnits * 0.46) * 10) / 10;

  return {
    totalStops,
    totalVisualUnits: Math.round(totalVisualUnits * 10) / 10,
    effectiveStopCount,
    districtCount,
    fareCount,
    landmarkStopCount,
    calloutStopCount,
    isParallel,
    variantCount: variants.length
  };
}

// 根據路線複雜度或指定 key 選擇最適合的官方排版範本（根據目前站點數量連續平滑計算收費/區域/地標 Label 與字號比例）
function selectOptimalAutoLayoutProfile(forcedKey = 'auto') {
  const stats = analyzeRouteMapComplexity();

  if (forcedKey && forcedKey !== 'auto') {
    const found = ROUTE_MAP_AUTO_LAYOUT_PROFILES.find(p => p.key === forcedKey);
    if (found) {
      const synced = syncNodeAndLineProportionsToFontSize(found.stopNameFontSizePx, false);
      return { profile: { ...found, ...synced }, stats };
    }
  }

  const eff = stats.effectiveStopCount;
  const raw = stats.totalStops;

  // 1. 站點少於 20 個：自動啟用「城巴 629 / 22S 單欄拉大比例與長線條模式」
  if (raw < 20 && eff <= 25.5) {
    const baseProfile = raw <= 12
      ? { ...ROUTE_MAP_AUTO_LAYOUT_PROFILES[0] }
      : { ...ROUTE_MAP_AUTO_LAYOUT_PROFILES[1] };

    const clampedStops = Math.max(4, Math.min(19, raw));
    const ratio = (19 - clampedStops) / (19 - 4); // 4站時 ratio=1.0 (特大)，19站時 ratio=0.0
    const interpolatedZh = Math.round((12.5 + ratio * 3.5) * 10) / 10; // 12.5px ~ 16.0px
    const syncedProps = syncNodeAndLineProportionsToFontSize(interpolatedZh, false);
    const estimatedGap = Math.round((4.5 + Math.pow(ratio, 1.35) * 34.0) * 10) / 10;

    Object.assign(baseProfile, syncedProps, {
      stopVerticalGapPx: estimatedGap,
      targetCols: 1
    });

    return { profile: baseProfile, stats };
  }

  // 2. 站點 20 個或以上：根據實際站點數量 (20 ~ 52 站) 平滑插值計算雙欄模式的字號與三大 Label 大小
  let selected = ROUTE_MAP_AUTO_LAYOUT_PROFILES[2];
  let interpolatedZh = 11.2;

  if (raw <= 32 && eff <= 39.0) {
    selected = ROUTE_MAP_AUTO_LAYOUT_PROFILES[2]; // stop4.pdf (79 中量雙欄均衡, 20-32站)
    const r = (Math.min(32, Math.max(20, raw)) - 20) / (32 - 20);
    interpolatedZh = Math.round((11.6 - r * 0.8) * 10) / 10; // 20站 11.6px -> 32站 10.8px
  } else if (raw <= 43 && eff <= 53.0) {
    selected = ROUTE_MAP_AUTO_LAYOUT_PROFILES[3]; // stop1.png (6 多站雙欄階梯, 33-43站)
    const r = (Math.min(43, Math.max(33, raw)) - 33) / (43 - 33);
    interpolatedZh = Math.round((10.7 - r * 0.6) * 10) / 10; // 33站 10.7px -> 43站 10.1px
  } else {
    selected = ROUTE_MAP_AUTO_LAYOUT_PROFILES[4]; // manystop.png (971 超多站高密度雙欄, 44站+)
    const r = Math.min(1, Math.max(0, (raw - 44) / 14));
    interpolatedZh = Math.round((9.9 - r * 0.5) * 10) / 10; // 44站 9.9px -> 58站 9.4px
  }

  const syncedProps = syncNodeAndLineProportionsToFontSize(interpolatedZh, false);
  return {
    profile: {
      ...selected,
      ...syncedProps
    },
    stats
  };
}

// 確保「貓頭鷹與月亮 SVG 修復設定」初始化並同步至 appConfig.rightData.owlSvgConfig
function ensureOwlSvgConfigSynced() {
  const R = appConfig.rightData;

  const defaults = {
    totalScale: 90,                 // 1. 整體貓頭鷹與月亮SVG圖標總比例 (%)
    owlHeightRatio: 100,              // 2. 貓頭鷹修長比例 (%) -> scaleY
    owlWidthRatio: 100,              // 3. 貓頭鷹寬度比例 (%) -> scaleX
    totalWidthScale: 100,            // 4. 整體圖標總寬度 (%)
    totalHeightScale: 100,           // 5. 整體圖標總高度 (%)
    nFontScale: 120,                 // 6. N字大小比例 (%)
    strokeWidthMode: 'auto',         // 7. SVG 粗度模式：'auto' (自動適配) | 'manual' (手動設定)
    svgStrokeWidth: 4,               //    SVG 手動/基準粗度
    owlOffsetX: 3,                   // 8. 貓頭鷹水平位移 X
    owlOffsetY: 0,                   //    貓頭鷹垂直位移 Y
    moonOffsetX: 3,                  // 9. 彎月水平位移 X
    moonOffsetY: 0,                  //    彎月垂直位移 Y
    nOffsetX: 1,                     // 後備預設 N字水平位移 X
    nOffsetY: 1                      // 後備預設 N字垂直位移 Y
  };

  if (!R.owlSvgConfig || typeof R.owlSvgConfig !== 'object') {
    R.owlSvgConfig = { ...defaults };
  } else {
    const cleaned = {};
    Object.keys(defaults).forEach(k => {
      if (k === 'strokeWidthMode') {
        cleaned[k] = (R.owlSvgConfig[k] === 'manual' || R.owlSvgConfig[k] === 'auto')
          ? R.owlSvgConfig[k]
          : defaults[k];
      } else if (R.owlSvgConfig[k] === undefined || R.owlSvgConfig[k] === null || isNaN(Number(R.owlSvgConfig[k]))) {
        cleaned[k] = defaults[k];
      } else {
        cleaned[k] = Number(R.owlSvgConfig[k]);
      }
    });
    R.owlSvgConfig = cleaned;
  }
  return R.owlSvgConfig;
}

// 一鍵重設貓頭鷹與月亮 SVG 為預設緊密邊界比例、貓頭鷹寬高 100% 與自動粗度適配
function resetOwlSvgConfig() {
  appConfig.rightData.owlSvgConfig = null;
  ensureOwlSvgConfigSynced();
  const boxes = ensureHeaderRouteBoxesSynced();
  boxes.forEach(b => {
    b.nOffsetX = 0;
    b.nOffsetY = 0;
  });
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已重設貓頭鷹與月亮 SVG 為緊密置中預設參數');
}

// 繪製通宵路線「彎月 + 貓頭鷹」向量圖標
// 修復彎月位移被 viewBox 抵消的漏洞，並支援整體貓頭鷹與月亮 SVG 圖標總比例 (totalScale)
function createNightOwlSvg(widthPx = 28, fgColor = '#ffdd00', bgColor = 'transparent', customCfg = null, counterScaleX = 1) {
  const cfg = customCfg || ensureOwlSvgConfigSynced();
  const baseW = Math.max(6, Number(widthPx) || 28);
  const baseH = baseW * 0.98;

  const totalScale = Math.max(0.3, (Number(cfg.totalScale) || 100) / 100);
  const wScale = Math.max(0.3, (Number(cfg.totalWidthScale) || 100) / 100) * totalScale;
  const hScale = Math.max(0.3, (Number(cfg.totalHeightScale) || 100) / 100) * totalScale;

  // 根據自動或手動模式取得最終 SVG 粗度
  const sw = getAdaptiveOwlStrokeWidth(baseW, cfg);
  const innerSw = Math.max(1.2, Math.round(sw * 0.915 * 100) / 100);
  const eyeR = Math.max(1.5, Math.round(sw * 0.69 * 100) / 100);

  const oScaleX = Math.max(0.4, (Number(cfg.owlWidthRatio) || 100) / 100);
  const oScaleY = Math.max(0.4, (Number(cfg.owlHeightRatio) || 100) / 100);
  const oOffX = Number(cfg.owlOffsetX) || 0;
  const oOffY = Number(cfg.owlOffsetY) || 0;

  const mOffX = Number(cfg.moonOffsetX) || 0;
  const mOffY = Number(cfg.moonOffsetY) || 0;

  // 1. 彎月曲線的基準幾何極值（不加 mOffX / mOffY，避免 viewBox 跟隨彎月移動而抵消位移）
  const baseMoonMinX = 17.55;
  const baseMoonMaxX = 86.5;
  const baseMoonMinY = 15.5;
  const baseMoonMaxY = 92.25;

  // 2. 貓頭鷹本體經縮放後的基準幾何極值（不加 oOffX / oOffY，維持固定基準畫布）
  const baseOwlMinX = 63.5 + (46.2 - 63.5) * oScaleX;
  const baseOwlMaxX = 63.5 + (80.8 - 63.5) * oScaleX;
  const baseOwlMinY = 46.0 + (9.0 - 46.0) * oScaleY;
  const baseOwlMaxY = 46.0 + (82.5 - 46.0) * oScaleY;

  // 3. 合併彎月與貓頭鷹的緊密基準外框 (加上線條半徑 sw/2，使預設狀態 100% 緊貼線條外緣且支援自由位移)
  const strokePad = sw / 2 + 0.35;
  const tightMinX = Math.round((Math.min(baseMoonMinX, baseOwlMinX) - strokePad) * 100) / 100;
  const tightMaxX = Math.round((Math.max(baseMoonMaxX, baseOwlMaxX) + strokePad) * 100) / 100;
  const tightMinY = Math.round((Math.min(baseMoonMinY, baseOwlMinY) - strokePad) * 100) / 100;
  const tightMaxY = Math.round((Math.max(baseMoonMaxY, baseOwlMaxY) + strokePad) * 100) / 100;

  const tightVbW = Math.max(10, Math.round((tightMaxX - tightMinX) * 100) / 100);
  const tightVbH = Math.max(10, Math.round((tightMaxY - tightMinY) * 100) / 100);

  // 按緊密邊界佔比與總比例換算最終渲染寬高
  const safeCounterX = Math.max(0.4, Number(counterScaleX) || 1);
  const w = Math.max(4, Math.round(baseW * wScale * (tightVbW / 73.65) * safeCounterX * 10) / 10);
  const h = Math.max(4, Math.round(baseH * hScale * (tightVbH / 87.95) * 10) / 10);

  const moonTransform = `translate(${mOffX} ${mOffY})`;
  const owlTransform = `translate(${oOffX} ${oOffY}) translate(63.5 46) scale(${oScaleX} ${oScaleY}) translate(-63.5 -46)`;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${tightMinX} ${tightMinY} ${tightVbW} ${tightVbH}" preserveAspectRatio="none" fill="none" style="width:${w}px; height:${h}px; display:block; flex-shrink:0; overflow:visible;">
      <!-- 1. 左側及底部彎月線條 -->
      <g transform="${moonTransform}">
        <path
          d="M 40.5 55.5 C 33 43.5, 31.5 28.5, 35 15.5 C 12.5 31.5, 11 69.5, 35 87.5 C 52.5 99, 75.5 92, 80.5 82.5"
          stroke="${fgColor}"
          stroke-width="${sw}"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>

      <!-- 2. 右側貓頭鷹本體 -->
      <g transform="${owlTransform}">
        <!-- 貓頭鷹圓拱頭框 -->
        <path
          d="M 46.5 30.5 C 46.5 14, 54 9, 63.5 9 C 73 9, 80.5 14, 80.5 30.5 C 80.5 44, 73 51, 63.5 51 C 54 51, 46.5 44, 46.5 30.5 Z"
          stroke="${fgColor}"
          stroke-width="${sw}"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- 貓頭鷹 M 型雙眉弓與中央垂直鳥喙線 -->
        <path
          d="M 47.5 29 C 50.5 17.5, 60.5 17.5, 63.5 26 C 66.5 17.5, 76.5 17.5, 79.5 29"
          stroke="${fgColor}"
          stroke-width="${innerSw}"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <line
          x1="63.5" y1="26"
          x2="63.5" y2="39.5"
          stroke="${fgColor}"
          stroke-width="${innerSw}"
          stroke-linecap="round"
        />

        <!-- 貓頭鷹雙眼實心圓點 -->
        <circle cx="55.5" cy="34" r="${eyeR}" fill="${fgColor}" />
        <circle cx="71.5" cy="34" r="${eyeR}" fill="${fgColor}" />

        <!-- 貓頭鷹身體外輪廓 -->
        <path
          d="M 47.5 42 C 45 63.5, 52 82.5, 63.5 82.5 C 75 82.5, 82 63.5, 79.5 42"
          stroke="${fgColor}"
          stroke-width="${sw}"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- 貓頭鷹胸腹內部左右羽翼線條 -->
        <path
          d="M 54 48.5 C 53 62.5, 55.5 74.5, 60.5 81.5"
          stroke="${fgColor}"
          stroke-width="${innerSw}"
          stroke-linecap="round"
        />
        <path
          d="M 73.5 48.5 C 74 51.5, 73.5 54, 73 50.5"
          stroke="${fgColor}"
          stroke-width="${innerSw}"
          stroke-linecap="round"
        />
        <path
          d="M 73.5 62 C 72.5 71.5, 70 77.5, 66.5 81.5"
          stroke="${fgColor}"
          stroke-width="${innerSw}"
          stroke-linecap="round"
        />
      </g>
    </svg>
  `;
}

// ==========================================================================
// 範疇四：路線主號碼與通宵線貓頭鷹圖標精準渲染
// ==========================================================================

function renderRouteTokenWithOwlHTML(routeToken, fontSizePx, textColor, bgColor, showOwlUnderN = false, tightnessOpts = {}) {
  const raw = String(routeToken || '').trim();
  if (!raw) return '';
  const routeFontFamily = "'Roboto', 'Inter', 'Noto Sans TC', sans-serif";
  const safeFontSize = Math.max(5, Math.round((Number(fontSizePx) || 16) * 100) / 100);

  const letterSpacingEm = (tightnessOpts && tightnessOpts.letterSpacingEm !== undefined && !isNaN(Number(tightnessOpts.letterSpacingEm)))
    ? Number(tightnessOpts.letterSpacingEm)
    : -0.025;
  const rawFontScaleX = (tightnessOpts && tightnessOpts.fontScaleX !== undefined && !isNaN(Number(tightnessOpts.fontScaleX)))
    ? Number(tightnessOpts.fontScaleX)
    : 100;
  const scaleXRatio = Math.max(0.4, Math.min(1.4, rawFontScaleX / 100));

  const compensMarginRightStyle = letterSpacingEm !== 0 ? `margin-right:${-letterSpacingEm}em;` : '';
  const outerScaleStyle = scaleXRatio !== 1
    ? `transform:scaleX(${scaleXRatio}); transform-origin:center center;`
    : '';

  if (!showOwlUnderN) {
    return `<span style="display:inline-flex; align-items:center; justify-content:center; white-space:nowrap; font-family:${routeFontFamily}; font-size:${safeFontSize}px; font-weight:600; line-height:1; color:${textColor}; -webkit-text-size-adjust:100%; text-size-adjust:100%; ${outerScaleStyle}"><span style="display:inline-block; white-space:nowrap; font-family:${routeFontFamily}; font-size:${safeFontSize}px; font-weight:600; line-height:1; letter-spacing:${letterSpacingEm}em; ${compensMarginRightStyle}">${esc(raw)}</span></span>`;
  }

  const cfg = ensureOwlSvgConfigSynced();
  const owlPosition = (tightnessOpts && tightnessOpts.owlPosition) || 'auto';

  let leadingText = '';
  let trailingText = '';

  if (owlPosition === 'suffix') {
    leadingText = raw.replace(/^[Nn]/, '').replace(/[Nn]$/, '').trim();
    trailingText = '';
  } else if (owlPosition === 'prefix') {
    leadingText = '';
    trailingText = raw.replace(/^[Nn]/, '').replace(/[Nn]$/, '').trim();
  } else {
    if (/[Nn]$/.test(raw) && !/^[Nn]$/i.test(raw)) {
      leadingText = raw.slice(0, -1).trim();
      trailingText = '';
    } else if (/^[Nn]/.test(raw)) {
      leadingText = '';
      trailingText = raw.slice(1).trim();
    } else {
      const matchN = raw.match(/^(.*?)[Nn](.*)$/);
      if (matchN) {
        leadingText = matchN[1].trim();
        trailingText = matchN[2].trim();
      } else {
        leadingText = '';
        trailingText = raw;
      }
    }
  }

  const nScale = Math.max(0.4, (Number(cfg.nFontScale) || 100) / 100);
  const scaleFactor = safeFontSize / 60;

  const rawNOffX = (tightnessOpts && tightnessOpts.nOffsetX !== undefined && tightnessOpts.nOffsetX !== null && !isNaN(Number(tightnessOpts.nOffsetX)))
    ? Number(tightnessOpts.nOffsetX)
    : ((cfg.nOffsetX !== undefined && cfg.nOffsetX !== null && !isNaN(Number(cfg.nOffsetX))) ? Number(cfg.nOffsetX) : 0);
  const rawNOffY = (tightnessOpts && tightnessOpts.nOffsetY !== undefined && tightnessOpts.nOffsetY !== null && !isNaN(Number(tightnessOpts.nOffsetY)))
    ? Number(tightnessOpts.nOffsetY)
    : ((cfg.nOffsetY !== undefined && cfg.nOffsetY !== null && !isNaN(Number(cfg.nOffsetY))) ? Number(cfg.nOffsetY) : 0);

  const nOffX = Math.round(rawNOffX * scaleFactor * 10) / 10;
  const nOffY = Math.round(rawNOffY * scaleFactor * 10) / 10;

  const nFontSize = Math.max(5, Math.round(safeFontSize * 0.43 * nScale * 10) / 10);
  const owlBaseWidth = Math.max(5.5, Math.round(safeFontSize * 0.42 * 10) / 10);

  const defaultGap = Math.max(1, Math.round(safeFontSize * 0.04 * 10) / 10);
  const customTokenGap = (tightnessOpts && tightnessOpts.tokenGapPx !== undefined && tightnessOpts.tokenGapPx !== '' && !isNaN(Number(tightnessOpts.tokenGapPx)))
    ? Math.round(Number(tightnessOpts.tokenGapPx) * scaleFactor * 10) / 10
    : defaultGap;

  const marginLeftPx = leadingText ? customTokenGap : 0;
  const marginRightPx = trailingText ? customTokenGap : 0;
  const owlCounterScaleX = 1 / scaleXRatio;

  const nWithOwlColumnHTML = `
    <span style="
      display:inline-flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:${Math.max(0.5, Math.round(safeFontSize * 0.018 * 10) / 10)}px;
      margin-left:${marginLeftPx}px;
      margin-right:${marginRightPx}px;
      line-height:1;
      flex-shrink:0;
    ">
      <span style="
        font-family:${routeFontFamily};
        font-size:${nFontSize}px;
        font-weight:600;
        line-height:0.78;
        color:${textColor};
        letter-spacing:0;
        display:block;
        white-space:nowrap;
        transform:translate(${nOffX}px, ${nOffY}px);
      ">N</span>
      ${createNightOwlSvg(owlBaseWidth, textColor, bgColor, cfg, owlCounterScaleX)}
    </span>
  `;

  return `
    <span style="display:inline-flex; align-items:center; justify-content:center; white-space:nowrap; line-height:1; vertical-align:middle; font-family:${routeFontFamily}; font-size:${safeFontSize}px; font-weight:600; -webkit-text-size-adjust:100%; text-size-adjust:100%; ${outerScaleStyle}">
      ${leadingText ? `<span style="display:inline-block; white-space:nowrap; font-family:${routeFontFamily}; font-size:${safeFontSize}px; font-weight:600; line-height:0.82; color:${textColor}; letter-spacing:${letterSpacingEm}em; ${compensMarginRightStyle}">${esc(leadingText)}</span>` : ''}
      ${nWithOwlColumnHTML}
      ${trailingText ? `<span style="display:inline-block; white-space:nowrap; font-family:${routeFontFamily}; font-size:${safeFontSize}px; font-weight:600; line-height:0.82; color:${textColor}; letter-spacing:${letterSpacingEm}em; ${compensMarginRightStyle}">${esc(trailingText)}</span>` : ''}
    </span>
  `;
}

// 計算自動/手動模式下的最終貓頭鷹與彎月 SVG 粗度 (Stroke Width)
function getAdaptiveOwlStrokeWidth(baseWidthPx = 42, customCfg = null) {
  const cfg = customCfg || ensureOwlSvgConfigSynced();
  if (cfg.strokeWidthMode === 'manual') {
    return Math.max(1.5, Number(cfg.svgStrokeWidth) || 4);
  }

  // 自動適配模式：根據圖標實際渲染尺寸、總比例、總寬高比例及貓頭鷹寬高比例自動補償視覺線條粗度
  const totalScale = Math.max(0.3, (Number(cfg.totalScale) || 100) / 100);
  const baseW = Math.max(6, (Number(baseWidthPx) || 42) * totalScale);
  const wScale = Math.max(0.3, (Number(cfg.totalWidthScale) || 100) / 100);
  const hScale = Math.max(0.3, (Number(cfg.totalHeightScale) || 100) / 100);
  const oScaleX = Math.max(0.4, (Number(cfg.owlWidthRatio) || 100) / 100);
  const oScaleY = Math.max(0.4, (Number(cfg.owlHeightRatio) || 100) / 100);

  const aspectFactor = Math.sqrt((wScale / 1.2) * (hScale / 1.0) * Math.sqrt(oScaleX * oScaleY));
  const sizeFactor = Math.pow(42 / Math.max(10, baseW), 0.16);
  const autoSw = (4.0 / Math.pow(aspectFactor, 0.5)) * sizeFactor;

  return Math.min(10, Math.max(2.0, Math.round(autoSw * 100) / 100));
}

// 更新貓頭鷹與月亮 SVG 修復設定，並即時同步預覽與 A4 畫布
function updateOwlSvgConfig(field, val, refreshSidebar = false) {
  const cfg = ensureOwlSvgConfigSynced();
  if (field === 'strokeWidthMode') {
    cfg.strokeWidthMode = val === 'manual' ? 'manual' : 'auto';
    refreshSidebar = true;
  } else {
    cfg[field] = Number(val);
    if (field === 'svgStrokeWidth' && cfg.strokeWidthMode !== 'manual') {
      cfg.strokeWidthMode = 'manual';
      refreshSidebar = true;
    }
  }

  renderA4Sheet();

  // 即時更新面板內的放大預覽圖標與自動粗度數值顯示
  const previewBox = document.getElementById('owl-svg-live-preview-box');
  if (previewBox) {
    const previewFg = previewBox.getAttribute('data-fg') || '#ffdd00';
    const previewBg = previewBox.getAttribute('data-bg') || '#000000';
    const firstBox = appConfig.rightData?.routeBoxes?.[0] || {};
    previewBox.innerHTML = renderRouteTokenWithOwlHTML('N', 54, previewFg, previewBg, true, {
      nOffsetX: firstBox.nOffsetX ?? 3,
      nOffsetY: firstBox.nOffsetY ?? 0
    });
  }

  const autoSwBadge = document.getElementById('owl-auto-sw-display');
  if (autoSwBadge && cfg.strokeWidthMode === 'auto') {
    const refFontSize = Number(appConfig.rightData?.routeBoxes?.[0]?.fontSizePx) || Number(appConfig.rightData?.routeNumberFontSizePx) || 100;
    const refOwlBaseW = Math.max(5.5, Math.round(refFontSize * 0.42 * 10) / 10);
    autoSwBadge.textContent = `${getAdaptiveOwlStrokeWidth(refOwlBaseW, cfg)} (自動)`;
  }

  if (refreshSidebar) {
    renderEditorSidebar();
  }
}

// 渲染「貓頭鷹與月亮 SVG 修復及導出設定」UI 面板（新增整體貓頭鷹與月亮SVG圖標總比例）
function renderOwlSvgFixPanelHTML(previewBg = '#000000', previewFg = '#ffdd00') {
  const cfg = ensureOwlSvgConfigSynced();
  const isAutoStroke = cfg.strokeWidthMode !== 'manual';
  const firstBox = appConfig.rightData?.routeBoxes?.[0] || {};
  const refFontSize = Number(firstBox.fontSizePx) || Number(appConfig.rightData?.routeNumberFontSizePx) || 100;
  const refOwlBaseW = Math.max(5.5, Math.round(refFontSize * 0.42 * 10) / 10);
  const currentAutoSw = getAdaptiveOwlStrokeWidth(refOwlBaseW, cfg);

  return `
    <div id="sec-owl-svg-fix" class="bg-slate-950/90 border border-amber-500/50 rounded-xl p-3 space-y-2.5 shadow-inner">
      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2">
        <div class="flex items-center gap-2.5">
          <div id="owl-svg-live-preview-box" data-bg="${esc(previewBg)}" data-fg="${esc(previewFg)}" class="w-16 h-16 rounded-lg border border-amber-400/50 flex items-center justify-center shadow shrink-0 overflow-hidden" style="background-color:${previewBg};">
            ${renderRouteTokenWithOwlHTML('N', 54, previewFg, previewBg, true, { nOffsetX: firstBox.nOffsetX ?? 3, nOffsetY: firstBox.nOffsetY ?? 0 })}
          </div>
          <div>
            <div class="text-[11px] font-bold text-amber-300 flex items-center gap-1">
              <i class="fa-solid fa-sliders"></i>
              <span>貓頭鷹與月亮 SVG 修復及導出設定</span>
            </div>
            <div class="text-[9px] text-slate-400">支援整體貓頭鷹與月亮總比例、獨立寬高比例、彎月位移及自動適配粗度</div>
          </div>
        </div>
        <div class="flex items-center gap-1 flex-wrap">
          <button type="button" onclick="exportStandaloneNightOwl('svg', true)" class="px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] transition shadow-sm">
            <i class="fa-solid fa-download mr-0.5"></i>導出 SVG
          </button>
          <button type="button" onclick="exportStandaloneNightOwl('png', true)" class="px-2 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] transition shadow-sm">
            <i class="fa-solid fa-image mr-0.5"></i>導出 PNG
          </button>
          <button type="button" onclick="exportStandaloneNightOwl('copy', false)" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[10px] transition" title="複製透明底 SVG 代碼">
            <i class="fa-regular fa-copy"></i>
          </button>
          <button type="button" onclick="resetOwlSvgConfig()" class="px-2 py-1 rounded bg-rose-600/25 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] font-bold transition" title="重設為預設值">
            重設
          </button>
        </div>
      </div>

      <!-- 比例與粗度設定（新增 1. 整體貓頭鷹與月亮SVG圖標總比例） -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
        <div class="bg-slate-900/90 p-2 rounded-lg border border-amber-500/40 space-y-1 sm:col-span-2">
          <div class="flex items-center justify-between">
            <span class="text-amber-300 font-bold"><i class="fa-solid fa-expand mr-1"></i>1. 整體貓頭鷹與月亮SVG圖標總比例 (%)</span>
            <input type="number" min="40" max="200" step="1" value="${cfg.totalScale}" oninput="updateOwlSvgConfig('totalScale', this.value); this.parentElement.nextElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-300 font-mono text-[10px]" />
          </div>
          <input type="range" min="40" max="200" step="1" value="${cfg.totalScale}" oninput="updateOwlSvgConfig('totalScale', this.value); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-amber-500" />
        </div>

        <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-amber-300 font-bold">2. 貓頭鷹修長比例 (%)</span>
            <input type="number" min="60" max="160" step="1" value="${cfg.owlHeightRatio}" oninput="updateOwlSvgConfig('owlHeightRatio', this.value); this.parentElement.nextElementSibling.value = this.value;" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-300 font-mono text-[10px]" />
          </div>
          <input type="range" min="60" max="160" step="1" value="${cfg.owlHeightRatio}" oninput="updateOwlSvgConfig('owlHeightRatio', this.value); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-amber-500" />
        </div>

        <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-amber-300 font-bold">3. 貓頭鷹寬度比例 (%)</span>
            <input type="number" min="60" max="160" step="1" value="${cfg.owlWidthRatio}" oninput="updateOwlSvgConfig('owlWidthRatio', this.value); this.parentElement.nextElementSibling.value = this.value;" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-300 font-mono text-[10px]" />
          </div>
          <input type="range" min="60" max="160" step="1" value="${cfg.owlWidthRatio}" oninput="updateOwlSvgConfig('owlWidthRatio', this.value); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-amber-500" />
        </div>

        <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-emerald-300 font-bold">4. 整體圖標總寬度 (%)</span>
            <input type="number" min="50" max="160" step="1" value="${cfg.totalWidthScale}" oninput="updateOwlSvgConfig('totalWidthScale', this.value); this.parentElement.nextElementSibling.value = this.value;" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
          </div>
          <input type="range" min="50" max="160" step="1" value="${cfg.totalWidthScale}" oninput="updateOwlSvgConfig('totalWidthScale', this.value); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-emerald-500" />
        </div>

        <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-emerald-300 font-bold">5. 整體圖標總高度 (%)</span>
            <input type="number" min="50" max="160" step="1" value="${cfg.totalHeightScale}" oninput="updateOwlSvgConfig('totalHeightScale', this.value); this.parentElement.nextElementSibling.value = this.value;" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
          </div>
          <input type="range" min="50" max="160" step="1" value="${cfg.totalHeightScale}" oninput="updateOwlSvgConfig('totalHeightScale', this.value); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-emerald-500" />
        </div>

        <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1 sm:col-span-2">
          <div class="flex items-center justify-between">
            <span class="text-sky-300 font-bold">6. N字大小比例 (%)</span>
            <input type="number" min="50" max="160" step="1" value="${cfg.nFontScale}" oninput="updateOwlSvgConfig('nFontScale', this.value); this.parentElement.nextElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]" />
          </div>
          <input type="range" min="50" max="160" step="1" value="${cfg.nFontScale}" oninput="updateOwlSvgConfig('nFontScale', this.value); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-sky-500" />
        </div>

        <!-- 7. 自動/手動適配 N下貓頭鷹 SVG 的粗度 -->
        <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1.5 sm:col-span-2">
          <div class="flex items-center justify-between flex-wrap gap-1.5">
            <span class="text-purple-300 font-bold">7. N下貓頭鷹 SVG 粗度 (Stroke Width)</span>
            <div class="flex items-center gap-1">
              <button type="button" onclick="updateOwlSvgConfig('strokeWidthMode', 'auto', true)" class="px-2 py-0.5 rounded border text-[9px] font-bold transition ${isAutoStroke ? 'bg-purple-600/35 border-purple-400 text-purple-200 shadow-sm' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'}">
                自動適配
              </button>
              <button type="button" onclick="updateOwlSvgConfig('strokeWidthMode', 'manual', true)" class="px-2 py-0.5 rounded border text-[9px] font-bold transition ${!isAutoStroke ? 'bg-purple-600/35 border-purple-400 text-purple-200 shadow-sm' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'}">
                手動設定
              </button>
            </div>
          </div>

          ${isAutoStroke ? `
            <div class="flex items-center justify-between bg-slate-950/75 px-2.5 py-1.5 rounded border border-purple-500/30">
              <span class="text-[9px] text-slate-300">系統正根據路線字體大小、總比例與長寬比自動適配最佳線條粗度</span>
              <span id="owl-auto-sw-display" class="text-[10px] font-mono font-bold text-purple-300 shrink-0 ml-2">${currentAutoSw} (自動)</span>
            </div>
          ` : `
            <div class="flex items-center gap-2 pt-0.5">
              <input type="range" min="2" max="12" step="0.2" value="${cfg.svgStrokeWidth}" oninput="updateOwlSvgConfig('svgStrokeWidth', this.value); this.nextElementSibling.value = this.value;" class="flex-1 accent-purple-500" />
              <input type="number" min="1.5" max="12" step="0.2" value="${cfg.svgStrokeWidth}" oninput="updateOwlSvgConfig('svgStrokeWidth', this.value); this.previousElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-purple-300 font-mono text-[10px]" />
            </div>
          `}
        </div>
      </div>

      <!-- 2 組獨立 SVG 位移設定：貓頭鷹位移、彎月位移 -->
      <div class="grid grid-cols-2 gap-2 pt-1 text-[9px]">
        <div class="bg-slate-900/80 p-1.5 rounded border border-slate-800">
          <label class="block text-amber-300 font-bold mb-0.5">8. 貓頭鷹位移 (X / Y)</label>
          <div class="flex items-center gap-1">
            <input type="number" min="-30" max="30" step="0.5" value="${cfg.owlOffsetX}" oninput="updateOwlSvgConfig('owlOffsetX', this.value)" title="貓頭鷹水平位移 X" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono text-[10px]" />
            <input type="number" min="-30" max="30" step="0.5" value="${cfg.owlOffsetY}" oninput="updateOwlSvgConfig('owlOffsetY', this.value)" title="貓頭鷹垂直位移 Y" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/80 p-1.5 rounded border border-slate-800">
          <label class="block text-emerald-300 font-bold mb-0.5">9. 彎月位移 (X / Y)</label>
          <div class="flex items-center gap-1">
            <input type="number" min="-30" max="30" step="0.5" value="${cfg.moonOffsetX}" oninput="updateOwlSvgConfig('moonOffsetX', this.value)" title="彎月水平位移 X" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-200 font-mono text-[10px]" />
            <input type="number" min="-30" max="30" step="0.5" value="${cfg.moonOffsetY}" oninput="updateOwlSvgConfig('moonOffsetY', this.value)" title="彎月垂直位移 Y" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-200 font-mono text-[10px]" />
          </div>
        </div>
      </div>
    </div>
  `;
}

// 同步「路線號碼及目的地」內的多個路線號碼框（包含 fontScaleX 號碼字體變窄壓縮 及 nOffsetX / nOffsetY N字位移）
function ensureHeaderRouteBoxesSynced() {
  const R = appConfig.rightData;
  const defaultFontSize = Math.max(20, Number(R.routeNumberFontSizePx) || 100);
  const globalOwlCfg = ensureOwlSvgConfigSynced();

  if (!R.routeLayoutMode) {
    if (R.headerLayoutMode === 'one_row' || R.headerTwoPerRow) {
      R.routeLayoutMode = 'inline_left';
    } else if (R.headerLayoutMode === 'all_routes_first') {
      R.routeLayoutMode = 'all_in_row';
    } else {
      R.routeLayoutMode = 'single_row';
    }
  }

  if (!R.destLayoutMode) {
    if (R.headerLayoutMode === 'all_routes_first') {
      R.destLayoutMode = 'shared_below';
    } else if (!Array.isArray(R.routeBoxes) || R.routeBoxes.length <= 1) {
      R.destLayoutMode = 'shared_below';
    } else {
      R.destLayoutMode = 'per_route_stack';
    }
  }

  if (!R.destViaStyle) {
    R.destViaStyle = 'separate';
  }

  if (R.introZhFontSizePx === undefined) R.introZhFontSizePx = 13;
  if (R.introEnFontSizePx === undefined) R.introEnFontSizePx = 9.8;
  if (R.introZhBold === undefined) R.introZhBold = true;
  if (R.introZhItalic === undefined) R.introZhItalic = false;
  if (R.introEnBold === undefined) R.introEnBold = true;
  if (R.introEnItalic === undefined) R.introEnItalic = false;
  if (!R.introIconType) R.introIconType = 'none';
  if (R.introIconSizePx === undefined) R.introIconSizePx = 22;

  if (R.viaZhFontSizePx === undefined) R.viaZhFontSizePx = 12.5;
  if (R.viaEnFontSizePx === undefined) R.viaEnFontSizePx = 10.5;
  if (R.viaZhBold === undefined) R.viaZhBold = true;
  if (R.viaZhItalic === undefined) R.viaZhItalic = false;
  if (R.viaEnBold === undefined) R.viaEnBold = true;
  if (R.viaEnItalic === undefined) R.viaEnItalic = false;

  const isSingleRouteBox = !Array.isArray(R.routeBoxes) || R.routeBoxes.length <= 1;
  const defaultPadY = isSingleRouteBox ? 20 : 6;

  if (!Array.isArray(R.routeBoxes) || R.routeBoxes.length === 0) {
    R.routeBoxes = [
      {
        id: 'rb_1',
        routeNumber: R.routeNumber ?? 'B13',
        fontSizePx: defaultFontSize,
        innerWhiteLine: R.routeBoxInnerWhiteLine !== false,
        padX: 8,
        padY: 20,
        outerPad: 5,
        letterSpacingEm: -0.025,
        fontScaleX: 100,
        tokenGapPx: 2.5,
        nOffsetX: globalOwlCfg.nOffsetX ?? 0,
        nOffsetY: globalOwlCfg.nOffsetY ?? 0,
        owlPosition: 'auto',
        bgColor: '',
        textColor: '',
        routeBoxTemplate: R.routeBoxTemplate || '',
        showOwlUnderN: Boolean(R.showOwlUnderN),
        destZh: R.destZh ?? '',
        destEn: R.destEn ?? '',
        viaZh: R.viaZh ?? '',
        viaEn: R.viaEn ?? '',
        viaZhFontSizePx: Number(R.viaZhFontSizePx) || 12.5,
        viaEnFontSizePx: Number(R.viaEnFontSizePx) || 10.5,
        viaZhBold: R.viaZhBold !== false,
        viaZhItalic: Boolean(R.viaZhItalic),
        viaEnBold: R.viaEnBold !== false,
        viaEnItalic: Boolean(R.viaEnItalic),
        boundVariantId: '',
        _destSynced: true
      }
    ];
  } else {
    R.routeBoxes = R.routeBoxes.map((box, idx) => {
      const isInitialUnsynced = !box._destSynced && idx === 0 && !box.destZh && !box.destEn;
      const syncedDestZh = isInitialUnsynced ? (R.destZh ?? '') : (box.destZh ?? (idx === 0 ? (R.destZh ?? '') : ''));
      const syncedDestEn = isInitialUnsynced ? (R.destEn ?? '') : (box.destEn ?? (idx === 0 ? (R.destEn ?? '') : ''));
      const syncedViaZh = box.viaZh !== undefined ? box.viaZh : (idx === 0 ? (R.viaZh ?? '') : '');
      const syncedViaEn = box.viaEn !== undefined ? box.viaEn : (idx === 0 ? (R.viaEn ?? '') : '');

      let resolvedPadY = defaultPadY;
      if (box.padY !== undefined && !isNaN(Number(box.padY))) {
        if (isSingleRouteBox && Number(box.padY) === 6 && !box._customPadY) {
          resolvedPadY = 20;
        } else if (!isSingleRouteBox && Number(box.padY) === 20 && !box._customPadY) {
          resolvedPadY = 6;
        } else {
          resolvedPadY = Number(box.padY);
        }
      }

      const resolvedLetterSpacingEm = (box.letterSpacingEm !== undefined && !isNaN(Number(box.letterSpacingEm)))
        ? (Number(box.letterSpacingEm) === 0 && !box._customLetterSpacing ? -0.025 : Number(box.letterSpacingEm))
        : -0.025;

      const resolvedFontScaleX = (box.fontScaleX !== undefined && !isNaN(Number(box.fontScaleX)))
        ? Math.max(40, Math.min(140, Number(box.fontScaleX)))
        : 100;

      const resolvedNOffsetX = (box.nOffsetX !== undefined && box.nOffsetX !== null && !isNaN(Number(box.nOffsetX)))
        ? Number(box.nOffsetX)
        : (globalOwlCfg.nOffsetX ?? 0);

      const resolvedNOffsetY = (box.nOffsetY !== undefined && box.nOffsetY !== null && !isNaN(Number(box.nOffsetY)))
        ? Number(box.nOffsetY)
        : (globalOwlCfg.nOffsetY ?? 0);

      return {
        id: box.id || `rb_${idx + 1}`,
        routeNumber: idx === 0 && box.routeNumber === undefined ? (R.routeNumber ?? 'B13') : (box.routeNumber ?? ''),
        fontSizePx: Math.max(16, Number(box.fontSizePx) || (idx === 0 ? defaultFontSize : 52)),
        innerWhiteLine: box.innerWhiteLine !== undefined ? Boolean(box.innerWhiteLine) : (idx === 0 ? R.routeBoxInnerWhiteLine !== false : true),
        padX: (box.padX !== undefined && !isNaN(Number(box.padX))) ? Number(box.padX) : 8,
        padY: resolvedPadY,
        _customPadY: Boolean(box._customPadY),
        outerPad: (box.outerPad !== undefined && !isNaN(Number(box.outerPad))) ? Number(box.outerPad) : 5,
        letterSpacingEm: resolvedLetterSpacingEm,
        _customLetterSpacing: Boolean(box._customLetterSpacing),
        fontScaleX: resolvedFontScaleX,
        tokenGapPx: (box.tokenGapPx !== undefined && !isNaN(Number(box.tokenGapPx))) ? Number(box.tokenGapPx) : 2.5,
        nOffsetX: resolvedNOffsetX,
        nOffsetY: resolvedNOffsetY,
        owlPosition: box.owlPosition || 'auto',
        bgColor: box.bgColor || '',
        textColor: box.textColor || '',
        routeBoxTemplate: box.routeBoxTemplate || '',
        showOwlUnderN: Boolean(box.showOwlUnderN),
        destZh: syncedDestZh,
        destEn: syncedDestEn,
        viaZh: syncedViaZh,
        viaEn: syncedViaEn,
        viaZhFontSizePx: Math.max(6, Number(box.viaZhFontSizePx) || Number(R.viaZhFontSizePx) || 12.5),
        viaEnFontSizePx: Math.max(5.5, Number(box.viaEnFontSizePx) || Number(R.viaEnFontSizePx) || 10.5),
        viaZhBold: box.viaZhBold !== undefined ? Boolean(box.viaZhBold) : (R.viaZhBold !== false),
        viaZhItalic: box.viaZhItalic !== undefined ? Boolean(box.viaZhItalic) : Boolean(R.viaZhItalic),
        viaEnBold: box.viaEnBold !== undefined ? Boolean(box.viaEnBold) : (R.viaEnBold !== false),
        viaEnItalic: box.viaEnItalic !== undefined ? Boolean(box.viaEnItalic) : Boolean(R.viaEnItalic),
        boundVariantId: box.boundVariantId || '',
        _destSynced: true
      };
    });

    R.routeNumber = R.routeBoxes[0].routeNumber;
    R.routeNumberFontSizePx = R.routeBoxes[0].fontSizePx;
    R.routeBoxInnerWhiteLine = R.routeBoxes[0].innerWhiteLine;
    R.showOwlUnderN = R.routeBoxes[0].showOwlUnderN;
    R.destZh = R.routeBoxes[0].destZh;
    R.destEn = R.routeBoxes[0].destEn;
    R.viaZh = R.routeBoxes[0].viaZh;
    R.viaEn = R.routeBoxes[0].viaEn;
    R.viaZhFontSizePx = R.routeBoxes[0].viaZhFontSizePx;
    R.viaEnFontSizePx = R.routeBoxes[0].viaEnFontSizePx;
    R.viaZhBold = R.routeBoxes[0].viaZhBold;
    R.viaZhItalic = R.routeBoxes[0].viaZhItalic;
    R.viaEnBold = R.routeBoxes[0].viaEnBold;
    R.viaEnItalic = R.routeBoxes[0].viaEnItalic;
  }
  return R.routeBoxes;
}

// 新增頂部路線號碼框（包含預設 fontScaleX: 100 及 nOffsetX: 3, nOffsetY: 0）
function addHeaderRouteBox() {
  const R = appConfig.rightData;
  const boxes = ensureHeaderRouteBoxesSynced();
  boxes.push({
    id: 'rb_' + Date.now(),
    routeNumber: 'A29P',
    fontSizePx: 52,
    innerWhiteLine: true,
    padX: 8,
    padY: 6,
    outerPad: 5,
    letterSpacingEm: -0.025,
    fontScaleX: 100,
    tokenGapPx: 2.5,
    nOffsetX: 3,
    nOffsetY: 0,
    owlPosition: 'auto',
    bgColor: '',
    textColor: '',
    destZh: R.destZh || boxes[0]?.destZh || '',
    destEn: R.destEn || boxes[0]?.destEn || '',
    viaZh: R.viaZh || boxes[0]?.viaZh || '',
    viaEn: R.viaEn || boxes[0]?.viaEn || '',
    boundVariantId: '',
    _destSynced: true
  });

  if (boxes.length >= 2) {
    if (!boxes[0]._customPadY && boxes[0].padY === 20) {
      boxes[0].padY = 6;
    }
    if (boxes.length === 2) {
      if (R.routeLayoutMode === 'single_row') {
        R.routeLayoutMode = 'two_per_row';
      }
      if (!R.destLayoutMode || R.destLayoutMode === 'shared_below') {
        R.destLayoutMode = 'per_route_stack';
      }
      if (boxes[0].fontSizePx > 60) {
        boxes[0].fontSizePx = 52;
        R.routeNumberFontSizePx = 52;
      }
    }
  }

  ensureHeaderRouteBoxesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已新增路線號碼框（多路線框模式垂直內距已自動調整）');
}

// 導出改良後的「彎月 + 貓頭鷹」獨立 SVG 檔案、PNG 圖片或複製 SVG 源碼
function exportStandaloneNightOwl(format = 'svg', withBg = true) {
  const cfg = ensureOwlSvgConfigSynced();
  const boxes = ensureHeaderRouteBoxesSynced();
  const activeOwlBox = boxes.find(b => b.showOwlUnderN) || boxes[0] || {};
  const fgColor = activeOwlBox.textColor || (activeOwlBox.routeBoxTemplate === 'airport_night_n' ? '#ffffff' : '#ffdd00');
  const bgColor = activeOwlBox.bgColor || (activeOwlBox.routeBoxTemplate === 'airport_night_n' ? '#c2193f' : '#000000');

  const totalScale = Math.max(0.3, (Number(cfg.totalScale) || 100) / 100);
  const wScale = Math.max(0.3, (Number(cfg.totalWidthScale) || 100) / 100) * totalScale;
  const hScale = Math.max(0.3, (Number(cfg.totalHeightScale) || 100) / 100) * totalScale;
  const exportW = Math.max(60, Math.round(500 * wScale));
  const exportH = Math.max(60, Math.round(490 * hScale));

  const rawInnerSvg = createNightOwlSvg(500, fgColor, bgColor, cfg).trim();
  const vbMatch = rawInnerSvg.match(/viewBox="([^"]+)"/i);
  const [vbX, vbY, vbW, vbH] = vbMatch ? vbMatch[1].split(/\s+/).map(Number) : [0, 0, 100, 98];

  const bgRect = withBg ? `<rect x="${vbX}" y="${vbY}" width="${vbW}" height="${vbH}" rx="10" fill="${bgColor}" />` : '';
  const fullSvgFileContent = withBg
    ? rawInnerSvg.replace(/<svg([^>]*)>/i, `<svg$1>\n  ${bgRect}`)
    : rawInnerSvg;

  if (format === 'copy') {
    navigator.clipboard.writeText(fullSvgFileContent).then(() => {
      showToast('已複製改良後的貓頭鷹 SVG 源碼至剪貼簿！');
    }).catch(() => {
      showToast('複製失敗，請使用導出 SVG 按鈕', 'rose');
    });
    return;
  }

  if (format === 'svg') {
    const blob = new Blob([fullSvgFileContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HKBus_NightOwl_${Date.now()}.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast('已成功導出改良後的貓頭鷹 SVG 向量檔案！');
    return;
  }

  if (format === 'png') {
    const img = new Image();
    const svgBlob = new Blob([fullSvgFileContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = exportW;
      canvas.height = exportH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, exportW, exportH);
      URL.revokeObjectURL(url);
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `HKBus_NightOwl_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast('已成功導出改良後的貓頭鷹高清 PNG 圖片！');
    };
    img.src = url;
  }
}

// 同步各班次獨立時間表設定（新增 routeBoxFontScaleX 字體變窄壓縮 %，並保留 _customRouteBoxStyle 獨立樣式隔離）
function ensureVariantTimetablesSynced() {
  const R = appConfig.rightData;
  const T = R.timetable;
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  if (!Array.isArray(T.variantTables)) {
    T.variantTables = [];
  }

  const defaultMainRouteNo = String(R.routeNumber || 'B13').trim() || 'B13';

  T.variantTables = variants.map((v, idx) => {
    const existing = T.variantTables.find(vt => vt.variantId === v.id) || T.variantTables[idx];
    const defaultBoxColor = v.routeBoxColor || C.routeBoxBg || '#0d8556';
    const defaultBoxText = v.routeBoxTextColor || C.routeBoxText || '#ffffff';
    const autoOrigin = getVariantFirstStopName(v.id);

    const normalizeDateGroups = (groups) => {
      return (groups || []).map(dg => {
        const presetKey = getDateGroupPresetKey(dg);
        const rows = Array.isArray(dg.rows) ? dg.rows.map(r => ensureTimetableRowSplit({ ...r })) : [];
        return {
          ...dg,
          datePreset: presetKey,
          rows
        };
      });
    };

    if (existing) {
      const rawRouteNo = existing.routeNumber !== undefined ? existing.routeNumber : (v.routeNumber || '');
      const hasLegacyNonEmptyRoute = Boolean(String(rawRouteNo || '').trim() !== '');
      const syncedShowRouteBox = existing.showRouteBox !== undefined
        ? Boolean(existing.showRouteBox)
        : (v.showRouteBox !== undefined ? Boolean(v.showRouteBox) : hasLegacyNonEmptyRoute);

      const syncedRouteNo = String(rawRouteNo || '').trim() !== '' ? rawRouteNo : defaultMainRouteNo;
      const syncedInnerLine = existing.routeBoxInnerWhiteLine !== undefined ? existing.routeBoxInnerWhiteLine : (v.routeBoxInnerWhiteLine !== false);
      const syncedBoxPos = (existing.routeBoxPosition && existing.routeBoxPosition !== 'none')
        ? existing.routeBoxPosition
        : ((v.routeBoxPosition && v.routeBoxPosition !== 'none') ? v.routeBoxPosition : 'left');
      const syncedBoxColor = existing.routeBoxColor || defaultBoxColor;
      const syncedBoxText = existing.routeBoxTextColor || defaultBoxText;
      const syncedTemplate = existing.routeBoxTemplate || v.routeBoxTemplate || '';

      const syncedPadX = (existing.routeBoxPadX !== undefined && !isNaN(Number(existing.routeBoxPadX))) ? Number(existing.routeBoxPadX) : 5.5;
      const syncedPadY = (existing.routeBoxPadY !== undefined && !isNaN(Number(existing.routeBoxPadY))) ? Number(existing.routeBoxPadY) : 2;
      const syncedOuterPad = (existing.routeBoxOuterPad !== undefined && !isNaN(Number(existing.routeBoxOuterPad))) ? Number(existing.routeBoxOuterPad) : 2;
      const syncedTightnessEm = (existing.routeBoxTightnessEm !== undefined && !isNaN(Number(existing.routeBoxTightnessEm)))
        ? (Number(existing.routeBoxTightnessEm) === 0 && !existing._customTightness ? -0.025 : Number(existing.routeBoxTightnessEm))
        : -0.025;
      const syncedFontScaleX = (existing.routeBoxFontScaleX !== undefined && !isNaN(Number(existing.routeBoxFontScaleX)))
        ? Math.max(40, Math.min(140, Number(existing.routeBoxFontScaleX)))
        : 100;
      const syncedTokenGapPx = (existing.routeBoxTokenGapPx !== undefined && !isNaN(Number(existing.routeBoxTokenGapPx))) ? Number(existing.routeBoxTokenGapPx) : 2;

      v.showRouteBox = syncedShowRouteBox;
      v.routeNumber = syncedRouteNo;
      v.routeBoxInnerWhiteLine = syncedInnerLine;
      v.routeBoxPosition = syncedBoxPos;
      v.routeBoxColor = syncedBoxColor;
      v.routeBoxTextColor = syncedBoxText;
      v.showOwlUnderN = false;
      v.routeBoxTemplate = syncedTemplate;

      const rawGroups = Array.isArray(existing.dateGroups)
        ? existing.dateGroups
        : JSON.parse(JSON.stringify(T.dateGroups || [{ id: 'dg_' + Date.now(), datePreset: 'daily', dateTitleZh: '每日', dateTitleEn: 'Daily', rows: [{ startTime: '0600', endTime: '0030', time: '0600 - 0030', headway: '30' }] }]));

      return {
        ...existing,
        variantId: v.id,
        enabled: existing.enabled !== false,
        showVariantBadge: existing.showVariantBadge !== false,
        showRouteBox: syncedShowRouteBox,
        routeNumber: syncedRouteNo,
        routeBoxInnerWhiteLine: syncedInnerLine,
        routeBoxPosition: syncedBoxPos,
        routeBoxColor: syncedBoxColor,
        routeBoxTextColor: syncedBoxText,
        showOwlUnderN: false,
        routeBoxTemplate: syncedTemplate,
        _customRouteBoxStyle: Boolean(existing._customRouteBoxStyle),
        routeBoxPadX: syncedPadX,
        routeBoxPadY: syncedPadY,
        routeBoxOuterPad: syncedOuterPad,
        routeBoxTightnessEm: syncedTightnessEm,
        _customTightness: Boolean(existing._customTightness),
        routeBoxFontScaleX: syncedFontScaleX,
        routeBoxTokenGapPx: syncedTokenGapPx,
        mentionedRouteNumbers: existing.mentionedRouteNumbers ?? '',
        showHeadwayCol: existing.showHeadwayCol !== false,
        showDateHeader: existing.showDateHeader !== false,
        originHeaderMode: existing.originHeaderMode || 'auto',
        originHeaderZh: cleanOriginStopZh(existing.originHeaderZh ?? T.originHeaderZh ?? autoOrigin.zh),
        originHeaderEn: cleanOriginStopEn(existing.originHeaderEn ?? T.originHeaderEn ?? autoOrigin.en),
        headwayLabelZh: existing.headwayLabelZh ?? T.headwayLabelZh ?? '班次(分鐘)',
        headwayLabelEn: existing.headwayLabelEn ?? T.headwayLabelEn ?? 'Headway (min)',
        topNoteZh: existing.topNoteZh ?? '',
        topNoteEn: existing.topNoteEn ?? '',
        bottomNoteZh: existing.bottomNoteZh ?? '',
        bottomNoteEn: existing.bottomNoteEn ?? '',
        dateGroups: normalizeDateGroups(rawGroups)
      };
    }

    const fallbackGroups = JSON.parse(JSON.stringify(T.dateGroups || [
      { id: 'dg_' + Date.now() + '_' + idx, datePreset: 'daily', dateTitleZh: '每日', dateTitleEn: 'Daily', rows: [{ startTime: '0600', endTime: '0030', time: '0600 - 0030', headway: '30' }] }
    ]));

    const initShowRouteBox = v.showRouteBox !== undefined
      ? Boolean(v.showRouteBox)
      : Boolean(v.routeNumber && String(v.routeNumber).trim() !== '');
    const initRouteNo = (v.routeNumber && String(v.routeNumber).trim() !== '') ? v.routeNumber : defaultMainRouteNo;

    v.showRouteBox = initShowRouteBox;
    v.routeNumber = initRouteNo;
    v.showOwlUnderN = false;

    return {
      variantId: v.id,
      enabled: true,
      showVariantBadge: true,
      showRouteBox: initShowRouteBox,
      routeNumber: initRouteNo,
      routeBoxInnerWhiteLine: v.routeBoxInnerWhiteLine !== false,
      routeBoxPosition: v.routeBoxPosition || 'left',
      routeBoxColor: defaultBoxColor,
      routeBoxTextColor: defaultBoxText,
      showOwlUnderN: false,
      routeBoxTemplate: v.routeBoxTemplate || '',
      _customRouteBoxStyle: false,
      routeBoxPadX: 5.5,
      routeBoxPadY: 2,
      routeBoxOuterPad: 2,
      routeBoxTightnessEm: -0.025,
      _customTightness: false,
      routeBoxFontScaleX: 100,
      routeBoxTokenGapPx: 2,
      mentionedRouteNumbers: '',
      showHeadwayCol: true,
      showDateHeader: true,
      originHeaderMode: 'auto',
      originHeaderZh: autoOrigin.zh,
      originHeaderEn: autoOrigin.en,
      headwayLabelZh: T.headwayLabelZh || '班次(分鐘)',
      headwayLabelEn: T.headwayLabelEn || 'Headway (min)',
      topNoteZh: '',
      topNoteEn: '',
      bottomNoteZh: '',
      bottomNoteEn: '',
      dateGroups: normalizeDateGroups(fallbackGroups)
    };
  });

  return T.variantTables;
}

// 同步已捆綁班次與頂部路線號碼框的主題顏色（確保時間表路線框樣式模板不會污染班次主色 v.color 或其他非路線框內容）
function syncBoundVariants() {
  const variants = appConfig.variants || [];
  const C = appConfig.colors;
  const R = appConfig.rightData;
  const T = R.timetable || {};
  const boxes = ensureHeaderRouteBoxesSynced();

  boxes.forEach((box, bIdx) => {
    if (!box.boundVariantId) return;
    const vIdx = variants.findIndex(v => v.id === box.boundVariantId);
    if (vIdx === -1) return;
    const targetV = variants[vIdx];
    const targetVt = Array.isArray(T.variantTables) ? T.variantTables[vIdx] : null;

    // 只以頂部路線框顏色或班次主色作為同步基準，絕不讀取 targetV.routeBoxColor，避免時間表路線框模板污染外部
    const syncedMainColor = box.bgColor || targetV.color || C.routeBoxBg || '#0d8556';
    const syncedMainText = box.textColor || C.routeBoxText || '#ffffff';
    const syncedRouteNo = box.routeNumber || targetV.routeNumber || '';

    box.bgColor = syncedMainColor;
    targetV.color = syncedMainColor;
    targetV.showOwlUnderN = false;
    if (syncedRouteNo) {
      targetV.routeNumber = syncedRouteNo;
    }

    // 只有當該班次時間表路線框未手動套用獨立路線框模板時，才同步路線框顏色
    if (!targetVt || !targetVt._customRouteBoxStyle) {
      targetV.routeBoxColor = syncedMainColor;
      targetV.routeBoxTextColor = syncedMainText;
      if (targetVt) {
        targetVt.routeBoxColor = syncedMainColor;
        targetVt.routeBoxTextColor = syncedMainText;
      }
    }

    if (targetVt) {
      targetVt.showOwlUnderN = false;
      if (syncedRouteNo) {
        targetVt.routeNumber = syncedRouteNo;
      }
    }
    if (bIdx === 0) {
      R.routeNumber = box.routeNumber;
      R.routeBoxInnerWhiteLine = box.innerWhiteLine;
      R.showOwlUnderN = box.showOwlUnderN;
    }
  });

  variants.forEach((v, idx) => {
    if (!v.boundToId) return;
    const targetVt = Array.isArray(T.variantTables) ? T.variantTables[idx] : null;
    const hasCustomVtBox = Boolean(targetVt && targetVt._customRouteBoxStyle);

    if (v.boundToId === '__theme__') {
      v.color = C.routeLineColor || C.themePrimary || '#0d8556';
      if (!hasCustomVtBox) {
        v.routeBoxColor = C.routeBoxBg || C.themePrimary || '#0d8556';
        v.routeBoxTextColor = C.routeBoxText || '#ffffff';
      }
      v.showOwlUnderN = false;
    } else if (v.boundToId.startsWith('rb_')) {
      const targetBox = boxes.find(b => b.id === v.boundToId);
      if (targetBox) {
        const boxBg = targetBox.bgColor || C.routeBoxBg || '#0d8556';
        const boxText = targetBox.textColor || C.routeBoxText || '#ffffff';
        v.color = boxBg;
        if (!hasCustomVtBox) {
          v.routeBoxColor = boxBg;
          v.routeBoxTextColor = boxText;
        }
        v.showOwlUnderN = false;
        if (targetBox.routeNumber) {
          v.routeNumber = targetBox.routeNumber;
        }
      }
    } else {
      const targetV = variants.find(item => item.id === v.boundToId && item.id !== v.id);
      if (targetV) {
        v.color = targetV.color;
        v.badgeText = targetV.badgeText;
        if (!hasCustomVtBox) {
          v.routeBoxColor = targetV.routeBoxColor || targetV.color || C.routeBoxBg || '#0d8556';
          v.routeBoxTextColor = targetV.routeBoxTextColor || C.routeBoxText || '#ffffff';
        }
        v.showOwlUnderN = false;
        if (!v.routeNumber && targetV.routeNumber) {
          v.routeNumber = targetV.routeNumber;
        }
      }
    }

    if (targetVt) {
      if (!hasCustomVtBox) {
        targetVt.routeBoxColor = v.routeBoxColor;
        targetVt.routeBoxTextColor = v.routeBoxTextColor;
      }
      targetVt.showOwlUnderN = false;
      if (v.routeNumber) {
        targetVt.routeNumber = v.routeNumber;
      }
    }
  });
}

// 更新班次時間表欄位（修改路線框樣式/顏色時僅影響該路線框，不改動班次主色 v.color）
function updateVariantTimetableMeta(vtIdx, field, val, refreshSidebar = false) {
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vtIdx];
  if (!vt) return;

  if (field === 'originHeaderMode' && val === 'manual') {
    const autoNames = getVariantFirstStopName(appConfig.variants[vtIdx]?.id || vt.variantId);
    if (!cleanOriginStopZh(vt.originHeaderZh)) vt.originHeaderZh = autoNames.zh;
    if (!cleanOriginStopEn(vt.originHeaderEn)) vt.originHeaderEn = autoNames.en;
  }

  if (field === 'showRouteBox') {
    val = Boolean(val);
    if (val && !String(vt.routeNumber || '').trim()) {
      vt.routeNumber = String(appConfig.rightData.routeNumber || 'B13').trim() || 'B13';
      if (appConfig.variants[vtIdx]) {
        appConfig.variants[vtIdx].routeNumber = vt.routeNumber;
      }
    }
  }

  if (field === 'routeBoxTightnessEm') {
    vt._customTightness = true;
  }

  if (['routeBoxColor', 'routeBoxTextColor', 'routeBoxTemplate'].includes(field)) {
    vt._customRouteBoxStyle = true;
  }

  if (field === 'routeBoxInnerWhiteLine') {
    val = Boolean(val);
    refreshSidebar = true;
  }

  if (field === 'originHeaderZh') {
    vt[field] = cleanOriginStopZh(val);
  } else if (field === 'originHeaderEn') {
    vt[field] = cleanOriginStopEn(val);
  } else {
    vt[field] = val;
  }

  vt.showOwlUnderN = false;

  if (appConfig.variants[vtIdx] && ['showRouteBox', 'routeNumber', 'routeBoxInnerWhiteLine', 'routeBoxPosition', 'routeBoxColor', 'routeBoxTextColor', 'routeBoxTemplate'].includes(field)) {
    appConfig.variants[vtIdx][field] = val;
    appConfig.variants[vtIdx].showOwlUnderN = false;
  }
  if (vtIdx === 0 && ['originHeaderZh', 'originHeaderEn', 'headwayLabelZh', 'headwayLabelEn'].includes(field)) {
    appConfig.rightData.timetable[field] = vt[field];
  }
  syncBoundVariants();
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

// 移除頂部路線號碼框（當刪減回只有 1 個路線號碼框時，自動恢復單框預設 padY = 20）
function removeHeaderRouteBox(bIdx) {
  const R = appConfig.rightData;
  const boxes = ensureHeaderRouteBoxesSynced();
  if (boxes.length <= 1) {
    showToast('至少需保留 1 個路線號碼框', 'info');
    return;
  }
  const removedBox = boxes[bIdx];
  boxes.splice(bIdx, 1);

  if (boxes.length === 1 && !boxes[0]._customPadY) {
    boxes[0].padY = 20;
  }

  if (removedBox && removedBox.id) {
    (appConfig.variants || []).forEach(v => {
      if (v.boundToId === removedBox.id) {
        v.boundToId = '';
      }
    });
  }

  R.routeNumber = boxes[0].routeNumber;
  R.routeNumberFontSizePx = boxes[0].fontSizePx;
  R.routeBoxInnerWhiteLine = boxes[0].innerWhiteLine !== false;
  R.destZh = boxes[0].destZh;
  R.destEn = boxes[0].destEn;
  R.viaZh = boxes[0].viaZh;
  R.viaEn = boxes[0].viaEn;

  ensureHeaderRouteBoxesSynced();
  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已移除路線號碼框 #${bIdx + 1}`);
}

// 臨時製作路線紙模式狀態管理
let isTempScratchMode = false;
let savedStateBeforeTempMode = null;
let savedTabBeforeTempMode = 'theme';
let savedExpandedStopBeforeTempMode = null;

// 生成「由 0 開始」的臨時基礎路線紙空白設定（僅保留單一常規班次、起點與終點 2 個基礎站點）
function getTempScratchBlankConfig() {
  const base = getDefaultConfig();
  const primaryColor = '#0d8556';

  base.layout.mapPosition = 'left';
  base.layout.mapWidthPercent = 63;
  base.layout.sheetPaddingMm = 5;
  base.layout.autoSplitMaxStops = 23;
  base.layout.variantDisplayMode = 'single_with_style';
  base.layout.showVariantLegend = false;

  base.variants = [
    {
      id: 'v1',
      name: '常規班次',
      code: '',
      showRouteBox: true,
      routeNumber: 'S1',
      routeBoxInnerWhiteLine: true,
      routeBoxPosition: 'left',
      routeBoxColor: primaryColor,
      routeBoxTextColor: '#ffffff',
      color: primaryColor,
      badgeText: 'white',
      lineStyle: 'solid'
    }
  ];

  base.rightData.routeNumber = 'S1';
  base.rightData.routeNumberFontSizePx = 96;
  base.rightData.routeLayoutMode = 'single_row';
  base.rightData.destLayoutMode = 'shared_below';
  base.rightData.destViaStyle = 'separate';
  base.rightData.destZh = '測試';
  base.rightData.destEn = 'Test';
  base.rightData.viaZh = '地點';
  base.rightData.viaEn = 'Location';
  base.rightData.introEnabled = true;
  base.rightData.introZh = '簡介';
  base.rightData.introEn = 'Introduction';
  base.rightData.routeBoxes = [
    {
      id: 'rb_1',
      routeNumber: 'S1',
      fontSizePx: 96,
      innerWhiteLine: true,
      padX: 8,
      padY: 20,
      outerPad: 5,
      letterSpacingEm: -0.025,
      tokenGapPx: 2.5,
      owlPosition: 'auto',
      bgColor: '',
      textColor: '',
      destZh: '測試',
      destEn: 'Test',
      viaZh: '地點',
      viaEn: 'Location',
      boundVariantId: '',
      _destSynced: true
    }
  ];

  base.rightData.timetable.variantTables = [
    {
      variantId: 'v1',
      enabled: true,
      showVariantBadge: false,
      showRouteBox: true,
      routeNumber: 'S1',
      routeBoxInnerWhiteLine: true,
      routeBoxPosition: 'left',
      routeBoxColor: primaryColor,
      routeBoxTextColor: '#ffffff',
      mentionedRouteNumbers: '',
      showHeadwayCol: true,
      showDateHeader: true,
      originHeaderMode: 'auto',
      originHeaderZh: '起點',
      originHeaderEn: 'Origin',
      headwayLabelZh: '班次(分鐘)',
      headwayLabelEn: 'Headway (min)',
      topNoteZh: '',
      topNoteEn: '',
      bottomNoteZh: '',
      bottomNoteEn: '',
      dateGroups: [
        {
          id: 'dg_temp_1',
          datePreset: 'daily',
          dateTitleZh: '每日',
          dateTitleEn: 'Daily',
          rows: [
            { startTime: '0600', endTime: '2330', time: '0600 - 2330', headway: '15 - 20', showVariantBadge: false }
          ]
        }
      ]
    }
  ];

  base.rightData.additionalInfo.enabled = false;
  base.rightData.additionalInfo.notes = [];
  base.rightData.octopusFare.enabled = false;
  base.rightData.octopusFare.items = [];
  base.rightData.bbiInfo.enabled = false;
  base.rightData.bbiInfo.items = [];

  base.stops = [
    {
      id: 'temp_s1',
      type: 'origin',
      variantType: { v1: 'origin' },
      zh: '測試站',
      en: 'Test Station',
      districtZh: '測試區域',
      districtEn: 'Test District',
      districtWidth: '100%',
      fare: '$9.90',
      fareLabelExtraPx: 5,
      fareLineWidth: '100%',
      coloredBoxWidth: '',
      ignoreLandmarkZh: false,
      ignoreLandmarkEn: false,
      hasMtr: true,
      symbol: '',
      manualBreakAfter: false,
      landmarks: [],
      variantStatus: { v1: 'stop' }
    },
    {
      id: 'temp_s2',
      type: 'normal',
      variantType: { v1: 'normal' },
      zh: '中途',
      en: 'Midway',
      districtZh: '',
      districtEn: '',
      districtWidth: '100%',
      fare: '',
      fareLabelExtraPx: 0,
      fareLineWidth: '100%',
      coloredBoxWidth: '',
      ignoreLandmarkZh: false,
      ignoreLandmarkEn: false,
      hasMtr: false,
      symbol: '',
      manualBreakAfter: false,
      landmarks: [],
      variantStatus: { v1: 'stop' }
    },
    {
      id: 'temp_s3',
      type: 'destination',
      variantType: { v1: 'destination' },
      zh: '終點',
      en: 'Destination',
      districtZh: '',
      districtEn: '',
      districtWidth: '100%',
      fare: '',
      fareLabelExtraPx: 0,
      fareLineWidth: '100%',
      coloredBoxWidth: '',
      ignoreLandmarkZh: false,
      ignoreLandmarkEn: false,
      hasMtr: false,
      symbol: '',
      manualBreakAfter: false,
      landmarks: [],
      variantStatus: { v1: 'stop' }
    }
  ];

  return base;
}

// 開始「臨時製作路線紙（由 0 開始）」模式（禁止使用「路線號碼及目的地」與「範本主題」）
function startTempScratchMode() {
  if (!isTempScratchMode) {
    savedStateBeforeTempMode = JSON.parse(JSON.stringify(appConfig));
    savedTabBeforeTempMode = currentTab;
    savedExpandedStopBeforeTempMode = expandedStopId;
  }

  isTempScratchMode = true;
  appConfig = getTempScratchBlankConfig();
  expandedStopId = 'temp_s1';
  stopSearchQuery = '';
  closePresetPopover();
  if (typeof closeTutorialModal === 'function') closeTutorialModal();

  syncTopNavbarForTempMode();
  switchEditorTab('stops');
  renderA4Sheet();
  showToast('已進入「臨時製作路線紙」模式！「路線號碼及目的地」與「範本主題」在此模式下已禁止使用', 'info');
}

// 同步頂部導航欄與左側分頁按鈕在「臨時基礎模式」下的顯示與禁用鎖定狀態
function syncTopNavbarForTempMode() {
  ensurePresetMenuInjected();

  // 1. 鎖定或解鎖左側「4. 班次與微調」及「5. 顏色與SVG」分頁按鈕
  ['tab-btn-export', 'tab-btn-colors'].forEach(btnId => {
    const tabBtn = document.getElementById(btnId);
    if (!tabBtn) return;
    if (isTempScratchMode) {
      tabBtn.classList.add('opacity-40', 'cursor-not-allowed');
      tabBtn.title = '臨時製作路線紙模式禁止使用此功能';
    } else {
      tabBtn.classList.remove('opacity-40', 'cursor-not-allowed');
      tabBtn.title = '';
    }
  });

  // 輔助鎖定/解鎖按鈕通用函數
  const toggleButtonLock = (btn, lockMsg, defaultTitle = '') => {
    if (!btn) return;
    if (isTempScratchMode) {
      if (!btn.hasAttribute('data-orig-onclick')) {
        btn.setAttribute('data-orig-onclick', btn.getAttribute('onclick') || '');
      }
      if (!btn.hasAttribute('data-orig-title')) {
        btn.setAttribute('data-orig-title', btn.getAttribute('title') || defaultTitle);
      }
      btn.setAttribute('onclick', `showToast('${lockMsg}', 'rose')`);
      btn.classList.add('opacity-45', 'cursor-not-allowed');
      btn.title = lockMsg;
    } else {
      if (btn.hasAttribute('data-orig-onclick')) {
        btn.setAttribute('onclick', btn.getAttribute('data-orig-onclick'));
        btn.removeAttribute('data-orig-onclick');
      }
      if (btn.hasAttribute('data-orig-title')) {
        btn.title = btn.getAttribute('data-orig-title');
        btn.removeAttribute('data-orig-title');
      }
      btn.classList.remove('opacity-45', 'cursor-not-allowed');
    }
  };

  // 2. 鎖定或解鎖頂部「範本主題」下拉按鈕及所有舊版範本按鈕
  const topPresetTrigger = document.getElementById('btn-top-preset-trigger');
  toggleButtonLock(topPresetTrigger, '臨時製作路線紙模式禁止使用「範本主題」！請先還原至正式模式', '打開 8 款香港巴士路線框主色範本庫');
  if (isTempScratchMode) closePresetPopover();

  const presetBtns = document.querySelectorAll(
    '#top-navbar button[onclick*="loadPreset"], #top-navbar button[data-orig-onclick*="loadPreset"]'
  );
  presetBtns.forEach(btn => {
    toggleButtonLock(btn, '臨時製作路線紙模式禁止使用「範本主題」！請先還原至正式模式');
  });

  // 3. 鎖定或解鎖頂部「備份 JSON」與「載入 JSON」按鈕
  const jsonExportBtn = document.querySelector(
    '#top-navbar button[onclick*="exportConfigJSON"], #top-navbar button[data-orig-onclick*="exportConfigJSON"]'
  );
  toggleButtonLock(jsonExportBtn, '臨時製作路線紙模式不可存儲或備份 JSON！請先還原至正式模式', '匯出設定檔 JSON');

  const jsonImportInput = document.getElementById('json-import-input');
  const jsonImportLabel = jsonImportInput ? jsonImportInput.closest('label') : null;
  if (jsonImportLabel && jsonImportInput) {
    if (isTempScratchMode) {
      jsonImportInput.disabled = true;
      jsonImportLabel.classList.add('opacity-45', 'cursor-not-allowed');
      jsonImportLabel.title = '臨時製作路線紙模式不可載入存儲檔';
    } else {
      jsonImportInput.disabled = false;
      jsonImportLabel.classList.remove('opacity-45', 'cursor-not-allowed');
      jsonImportLabel.title = '匯入設定檔 JSON';
    }
  }

  // 4. 鎖定或解鎖「導出 A4 PDF」按鈕
  const pdfExportBtn = document.getElementById('btn-export-pdf');
  toggleButtonLock(pdfExportBtn, '臨時製作路線紙模式禁止導出 A4 PDF！請先還原至正式模式', '導出 A4 PDF');

  // 5. 鎖定或解鎖「原生列印 (window.print)」按鈕
  const nativePrintBtn = document.querySelector(
    '#top-navbar button[onclick*="window.print"], #top-navbar button[data-orig-onclick*="window.print"]'
  );
  toggleButtonLock(
    nativePrintBtn,
    '臨時製作路線紙模式禁止使用瀏覽器原生向量列印 PDF！請先還原至正式模式',
    '使用瀏覽器原生向量列印 PDF (100% 向量無損)'
  );

  // 6. 更新頂部導航欄「還原先前狀態」快捷按鈕
  const restoreBtn = document.getElementById('btn-restore-temp-top');
  if (restoreBtn) {
    if (isTempScratchMode) {
      restoreBtn.classList.remove('hidden');
      restoreBtn.classList.add('flex');
    } else {
      restoreBtn.classList.add('hidden');
      restoreBtn.classList.remove('flex');
    }
  }
}

function applyHeaderRouteBoxTemplate(bIdx, templateKey) {
  if (isTempScratchMode) {
    showToast('臨時製作路線紙模式禁止使用「路線號碼及目的地」與「範本主題」！', 'rose');
    return;
  }
  const tpl = ROUTE_BOX_TEMPLATES.find(t => t.key === templateKey);
  if (!tpl) return;

  const R = appConfig.rightData;
  const boxes = ensureHeaderRouteBoxesSynced();
  const box = boxes[bIdx];
  if (!box) return;

  box.routeBoxTemplate = tpl.key;
  box.bgColor = tpl.bgColor;
  box.textColor = tpl.textColor;
  box.showOwlUnderN = Boolean(tpl.showOwlUnderN);
  if (!box.owlPosition) box.owlPosition = 'auto';

  const curNo = String(box.routeNumber || '').trim();
  if (tpl.showOwlUnderN && curNo) {
    if (!/[Nn]/.test(curNo)) {
      box.routeNumber = box.owlPosition === 'suffix' ? `${curNo}N` : `N${curNo}`;
    } else if (/[Nn]$/.test(curNo) && !/^[Nn]/i.test(curNo)) { box.owlPosition = 'suffix'; } else if (/^[Nn]/.test(curNo) && !/[Nn]$/i.test(curNo)) {
      box.owlPosition = 'prefix';
    }
  }

  if (bIdx === 0) {
    R.routeNumber = box.routeNumber;
    R.showOwlUnderN = box.showOwlUnderN;
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已套用「${tpl.label}」至路線號碼框 #${bIdx + 1}（與全頁主色範本庫獨立）`);
}

// 一鍵套用路綫號碼框模板至時間表「班次 #vtIdx」（臨時模式下禁止使用範本主題）
function applyVariantTimetableRouteBoxTemplate(vtIdx, templateKey) {
  if (isTempScratchMode) {
    showToast('臨時製作路線紙模式禁止使用「範本主題」！請先還原至正式模式', 'rose');
    return;
  }
  const tpl = ROUTE_BOX_TEMPLATES.find(t => t.key === templateKey);
  if (!tpl) return;
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables?.[vtIdx];
  const v = appConfig.variants?.[vtIdx];
  if (!vt) return;

  vt.showRouteBox = true;
  vt.routeBoxTemplate = tpl.key;
  vt.routeBoxColor = tpl.bgColor;
  vt.routeBoxTextColor = tpl.textColor;
  vt.showOwlUnderN = false;
  vt._customRouteBoxStyle = true;

  if (v) {
    v.showRouteBox = true;
    v.routeBoxTemplate = tpl.key;
    v.routeBoxColor = tpl.bgColor;
    v.routeBoxTextColor = tpl.textColor;
    v.showOwlUnderN = false;
  }

  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已套用「${tpl.label}」至班次 #${vtIdx + 1} 時間表路線框（僅套用於此路線框，不影響其他內容）`);
}

// 更新頂部路線號碼框欄位（臨時模式下禁止修改路線號碼及目的地）
function updateHeaderRouteBox(bIdx, field, val, refreshSidebar = false) {
  if (isTempScratchMode) {
    showToast('臨時製作路線紙模式禁止使用「路線號碼及目的地」！請先還原至正式模式', 'rose');
    return;
  }
  const R = appConfig.rightData;
  const boxes = ensureHeaderRouteBoxesSynced();
  if (!boxes[bIdx]) return;

  if (field === 'viaZh') {
    val = String(val || '').replace(/^經\s*/, '');
  } else if (field === 'viaEn') {
    val = String(val || '').replace(/^via\s+/i, '');
  }

  if (field === 'padY') {
    boxes[bIdx]._customPadY = true;
  }
  if (field === 'letterSpacingEm') {
    boxes[bIdx]._customLetterSpacing = true;
  }

  if (field === 'owlPosition') {
    const curNo = String(boxes[bIdx].routeNumber || '').trim();
    const core = curNo.replace(/^[Nn]/, '').replace(/[Nn]$/, '').trim();
    if (core) {
      if (val === 'suffix') {
        boxes[bIdx].routeNumber = `${core}N`;
      } else if (val === 'prefix') {
        boxes[bIdx].routeNumber = `N${core}`;
      }
    }
    refreshSidebar = true;
  }

  boxes[bIdx][field] = val;
  boxes[bIdx]._destSynced = true;

  if (bIdx === 0 && (field === 'nOffsetX' || field === 'nOffsetY')) {
    const owlCfg = ensureOwlSvgConfigSynced();
    owlCfg[field] = Number(val);
    const previewBox = document.getElementById('owl-svg-live-preview-box');
    if (previewBox) {
      const previewFg = previewBox.getAttribute('data-fg') || '#ffdd00';
      const previewBg = previewBox.getAttribute('data-bg') || '#000000';
      previewBox.innerHTML = renderRouteTokenWithOwlHTML('N', 54, previewFg, previewBg, true, {
        nOffsetX: boxes[0].nOffsetX,
        nOffsetY: boxes[0].nOffsetY
      });
    }
  }

  if (bIdx > 0 && ['destZh', 'destEn', 'viaZh', 'viaEn'].includes(field) && R.destLayoutMode === 'shared_below') {
    R.destLayoutMode = 'per_route_stack';
    refreshSidebar = true;
  }

  if (bIdx === 0) {
    if (field === 'routeNumber' || field === 'owlPosition') R.routeNumber = boxes[0].routeNumber;
    if (field === 'fontSizePx') R.routeNumberFontSizePx = Number(val) || 100;
    if (field === 'innerWhiteLine') R.routeBoxInnerWhiteLine = Boolean(val);
    if (field === 'showOwlUnderN') R.routeBoxShowOwl = Boolean(val);
    if (field === 'showOwlUnderN') R.showOwlUnderN = Boolean(val);
    if (field === 'destZh') R.destZh = val;
    if (field === 'destEn') R.destEn = val;
    if (field === 'viaZh') R.viaZh = val;
    if (field === 'viaEn') R.viaEn = val;
    if (['viaZhFontSizePx', 'viaEnFontSizePx', 'viaZhBold', 'viaZhItalic', 'viaEnBold', 'viaEnItalic'].includes(field)) {
      R[field] = val;
    }
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  if (refreshSidebar || ['innerWhiteLine', 'showOwlUnderN', 'owlPosition', 'viaZhBold', 'viaZhItalic', 'viaEnBold', 'viaEnItalic'].includes(field)) {
    renderEditorSidebar();
  }
}

// 結束臨時製作模式，無損還原至開始前的完整狀態
function exitTempScratchMode() {
  if (!isTempScratchMode || !savedStateBeforeTempMode) return;

  appConfig = JSON.parse(JSON.stringify(savedStateBeforeTempMode));
  const restoreTab = savedTabBeforeTempMode || 'theme';
  expandedStopId = savedExpandedStopBeforeTempMode || (appConfig.stops?.[0]?.id ?? null);
  isTempScratchMode = false;
  savedStateBeforeTempMode = null;

  syncTopNavbarForTempMode();
  switchEditorTab(restoreTab);
  renderA4Sheet();
  showToast('已還原至臨時製作前的完整路線紙狀態！', 'success');
}

// 時間表日期預設選項清單
const TIMETABLE_DATE_PRESETS = [
  { key: 'daily', zh: '每日', en: 'Daily' },
  { key: 'mon_fri', zh: '星期一至五', en: 'Mon - Fri' },
  { key: 'mon_sat', zh: '星期一至六', en: 'Mon - Sat' },
  { key: 'sat', zh: '星期六', en: 'Saturday' },
  { key: 'sun', zh: '星期日', en: 'Sunday' },
  { key: 'sat_sun_ph', zh: '星期六、日及公眾假期', en: 'Sat, Sun & Public Holidays' },
  { key: 'sun_ph', zh: '星期日及公眾假期', en: 'Sun & Public Holidays' },
  { key: 'specific', zh: '指定日子', en: 'Specific Dates' },
  { key: 'custom', zh: '自定義文字', en: 'Custom Text' }
];

// 識別日期組目前所屬的預設項目 key
function getDateGroupPresetKey(dg) {
  if (!dg) return 'daily';
  if (dg.datePreset) return dg.datePreset;
  const zh = String(dg.dateTitleZh || '').trim();
  const en = String(dg.dateTitleEn || '').trim();
  const matched = TIMETABLE_DATE_PRESETS.find(
    p => p.key !== 'custom' && p.zh === zh && p.en.toLowerCase() === en.toLowerCase()
  );
  return matched ? matched.key : 'custom';
}

// 確保時段行擁有獨立的 startTime、endTime 與 showVariantBadge（自動兼容舊版單一 time 字串）
function ensureTimetableRowSplit(row) {
  if (!row) return { startTime: '', endTime: '', time: '', headway: '', showVariantBadge: '' };
  if (row.startTime === undefined && row.endTime === undefined) {
    const raw = String(row.time || '').trim();
    if (raw.includes('-')) {
      const parts = raw.split(/\s*-\s*/);
      row.startTime = (parts[0] || '').trim();
      row.endTime = parts.slice(1).join(' - ').trim();
    } else {
      row.startTime = raw;
      row.endTime = '';
    }
  }
  if (row.showVariantBadge === undefined) {
    row.showVariantBadge = '';
  }
  const s = String(row.startTime || '').trim();
  const e = String(row.endTime || '').trim();
  row.time = (s && e) ? `${s} - ${e}` : (s || e);
  return row;
}

// 1. 規範化起點班次圓形編號顯示位置（嚴格二選一：'all_first_stop_fare' 現在狀況[默認] | 'above_node' 該班次的第一個站點的上面）
function normalizeOriginBadgePosition(rawMode) {
  if (rawMode === 'above_node') return 'above_node';
  return 'all_first_stop_fare';
}

// 2. 取得指定班次的圓形編號位置設定（支援單一班次二選一及全局二選一同步）
function getVariantOriginBadgeMode(variant) {
  const raw = (variant && variant.originBadgePosition) || appConfig.layout?.originBadgePosition || 'all_first_stop_fare';
  return normalizeOriginBadgePosition(raw);
}

// 3. 切換單一班次或全局的圓形編號位置（嚴格二選一）
function updateVariantOriginBadgePosition(vIdx, mode) {
  const normalized = normalizeOriginBadgePosition(mode);
  const variants = appConfig.variants || [];

  if (vIdx === 'all' || vIdx === null || vIdx === undefined) {
    appConfig.layout.originBadgePosition = normalized;
    variants.forEach(v => {
      v.originBadgePosition = normalized;
    });
  } else if (variants[vIdx]) {
    variants[vIdx].originBadgePosition = normalized;
    // 若所有班次均已選用相同模式，同步更新全局預設值
    const allSame = variants.every(v => getVariantOriginBadgeMode(v) === normalized);
    if (allSame) {
      appConfig.layout.originBadgePosition = normalized;
    }
  }

  renderA4Sheet();
  renderEditorSidebar();
}

// 4. 計算分站所屬分段區間及各班次「第一個實際停靠站點 (isVariantOrigin)」
// 自動識別每個班次的第一個有效停靠站 (idx === firstActiveStopIdx)，確保選擇「該班次的第一個站點的上面」時 100% 準確顯示
function computeStopsWithFareZones(stops) {
  const variants = appConfig.variants || [];
  const total = stops.length;

  const variantStopIndicesMap = {};
  variants.forEach(v => {
    const activeIndices = [];
    stops.forEach((s, idx) => {
      const st = (s.variantStatus && s.variantStatus[v.id]) || 'stop';
      const isSpecial = Boolean(s.hasCorridor || s.isCorridor || s.hasTunnel || s.isTunnel || s.type === 'corridor' || s.type === 'tunnel');
      if (st === 'stop' && !isSpecial) {
        activeIndices.push(idx);
      }
    });
    variantStopIndicesMap[v.id] = activeIndices;
  });

  let fareCounter = 0;
  let currentZoneWidth = '100%';

  return stops.map((stop, idx) => {
    ensureStopLandmarkAndIgnoreProps(stop);

    if (stop.hasCorridor && stop.corridorZh && (!stop.zh || stop.zh === '新巴士站, 道路名稱')) {
      stop.zh = stop.corridorZh;
      if (stop.corridorEn) stop.en = stop.corridorEn;
    }

    const hasNewFare = Boolean(stop.fare && stop.fare.trim() !== '');
    if (hasNewFare) {
      fareCounter++;
      currentZoneWidth = formatCssSize(stop.evenZoneWidth, '100%');
    }

    const forceTopCont = Boolean(stop.contFromLeft);
    const forceBottomCont = Boolean(stop.contToRight) || (idx === total - 1 && Boolean(stop.manualBreakAfter));

    const variantLineState = {};
    let anyActiveOrigin = false;
    let anyActiveDest = false;
    let anyActiveColored = false;
    let anyActiveCorridor = Boolean(stop.hasCorridor || stop.isCorridor || stop.type === 'corridor');
    let anyActiveTunnel = Boolean(stop.hasTunnel || stop.isTunnel || stop.type === 'tunnel');

    variants.forEach(v => {
      const st = (stop.variantStatus && stop.variantStatus[v.id]) || 'stop';
      const vType = getStopVariantType(stop, v.id, idx, total);
      const activeIndices = variantStopIndicesMap[v.id] || [];
      const firstActiveStopIdx = activeIndices.length > 0 ? activeIndices[0] : -1;

      const isOriginType = vType === 'origin' || vType === 'origin_number_only';
      const isTunnelType = Boolean(stop.hasTunnel || stop.isTunnel || stop.type === 'tunnel' || vType === 'tunnel');
      const isCorridorType = !isTunnelType && Boolean(stop.hasCorridor || stop.isCorridor || stop.type === 'corridor' || vType === 'corridor');
      const isSpecialPassType = isCorridorType || isTunnelType;

      let hasStopBefore = false;
      for (let k = idx - 1; k >= 0; k--) {
        const kSt = (stops[k].variantStatus && stops[k].variantStatus[v.id]) || 'stop';
        const kType = getStopVariantType(stops[k], v.id, k, total);
        if (kSt === 'stop') {
          if (kType === 'destination') break;
          hasStopBefore = true;
          break;
        }
      }

      let hasStopAfter = false;
      for (let k = idx + 1; k < total; k++) {
        const kSt = (stops[k].variantStatus && stops[k].variantStatus[v.id]) || 'stop';
        const kType = getStopVariantType(stops[k], v.id, k, total);
        if (kSt === 'stop') {
          if (kType === 'origin' || kType === 'origin_number_only') break;
          hasStopAfter = true;
          break;
        }
      }

      const showNode = st === 'stop';
      // 該班次的第一個實際停靠站點或明確標記為起點的分站，均識別為該班次的起點 (isVariantOrigin)
      const isVariantOrigin = showNode && !isSpecialPassType && (isOriginType || idx === firstActiveStopIdx);
      const isVariantDest = showNode && vType === 'destination' && !isSpecialPassType;
      const isVariantColored = showNode && !isSpecialPassType && (vType === 'origin' || vType === 'colored' || vType === 'destination');
      const isVariantCorridor = st !== 'none' && isCorridorType;
      const isVariantTunnel = st !== 'none' && isTunnelType;

      let showTopLine = false;
      let showBottomLine = false;

      if (st === 'stop') {
        showTopLine = (hasStopBefore && !isVariantOrigin) || forceTopCont;
        showBottomLine = (hasStopAfter && vType !== 'destination') || forceBottomCont;
      } else if (st === 'bypass') {
        showTopLine = (hasStopBefore && hasStopAfter) || forceTopCont;
        showBottomLine = (hasStopBefore && hasStopAfter) || forceBottomCont;
      }

      if (isVariantOrigin) anyActiveOrigin = true;
      if (isVariantDest) anyActiveDest = true;
      if (isVariantColored) anyActiveColored = true;
      if (isVariantCorridor) anyActiveCorridor = true;
      if (isVariantTunnel) anyActiveTunnel = true;

      variantLineState[v.id] = {
        status: st,
        vType,
        showNode,
        showTopLine,
        showBottomLine,
        forceTopCont,
        forceBottomCont,
        isVariantOrigin,
        isVariantDest,
        isVariantColored,
        isVariantCorridor,
        isVariantTunnel,
        isTerminalNode: isVariantOrigin || isVariantDest,
        hasActiveStops: activeIndices.length > 0
      };
    });

    const isOrigin = anyActiveOrigin;
    const isDest = anyActiveDest;
    const isColoredBgStop = anyActiveColored;
    const isTunnelStop = anyActiveTunnel;
    const isCorridorStop = !isTunnelStop && anyActiveCorridor;

    const isEvenZoneStop = appConfig.colors.evenZoneBgEnabled &&
      fareCounter > 0 &&
      fareCounter % 2 === 0 &&
      (appConfig.layout.evenZoneCoverAllStops ? true : hasNewFare);

    return {
      ...stop,
      index: idx,
      fareZoneNumber: fareCounter,
      fareZoneWidth: currentZoneWidth,
      hasNewFare,
      isEvenZoneStop,
      isOrigin,
      isDest,
      isColoredBgStop,
      isCorridorStop,
      isTunnelStop,
      variantLineState
    };
  });
}

// 1. 渲染起點圓圈班次編號 ('1', '2'...)：
// - 'first_stop_fare_row'：在第一個站點 (stop.index === 0) 與分段收費平排（包含「現在狀況(默認)」的所有班次，以及「獨立在起點圓圈正上方」模式下以首站為起點的班次）
// - 'above_node'：在中途起點站 (stop.index > 0) 或無分段收費首站，獨立顯示於該班次起點圓圈正上方
function renderOriginParallelNumbersTrackCellHTML(stop, metrics, placementContext = 'first_stop_fare_row', bottomOffsetPx = null) {
  const bSize = metrics.badgeSize || 13.5;
  const fontSize = Math.max(6.8, bSize - 4.0);
  const isFareRowContext = placementContext === 'first_stop_fare_row';
  const alignedBottomPx = (bottomOffsetPx !== null && bottomOffsetPx !== undefined)
    ? Number(bottomOffsetPx)
    : (isFareRowContext ? 5 : 1.5);

  const elementsHTML = metrics.tracks.map(t => {
    const vMode = getVariantOriginBadgeMode(t.variant); // 'all_first_stop_fare' | 'above_node'
    const vState = stop.variantLineState?.[t.variant.id];
    let shouldShowBadge = false;

    if (isFareRowContext) {
      // 首站分段收費平排行：
      // 1. 「現在狀況(默認)」模式下，所有有效班次均在首站與分段收費平排
      // 2. 「獨立在起點圓圈正上方」模式下，起點為第一個站點 (stop.index === 0) 的班次，同樣與第一個站點的分段收費平排
      if (stop.index === 0) {
        if (vMode === 'all_first_stop_fare') {
          shouldShowBadge = vState ? vState.hasActiveStops !== false : true;
        } else if (vMode === 'above_node') {
          shouldShowBadge = Boolean(vState?.isVariantOrigin);
        }
      }
    } else {
      // 起點圓圈正上方獨立行 ('above_node')：
      // 僅渲染「獨立在起點圓圈正上方」模式下，在中途站 (stop.index > 0) 起載的班次（或首站無分段收費時的起點班次）
      if (vMode === 'above_node' && Boolean(vState?.isVariantOrigin)) {
        if (stop.index > 0 || !stop.hasNewFare) {
          shouldShowBadge = true;
        }
      }
    }

    if (!shouldShowBadge) return '';

    const badgeLeftPx = Math.round((t.x - bSize / 2) * 100) / 100;

    return `
      <div style="
        position:absolute;
        left:${badgeLeftPx}px;
        bottom:${alignedBottomPx}px;
        width:${bSize}px;
        height:${bSize}px;
        border-radius:9999px;
        background-color:${t.color};
        color:${t.badgeText};
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:${fontSize}px;
        font-weight:900;
        line-height:1;
        box-shadow:0 0 0 1.2px #ffffff;
        z-index:4;
      ">
        <span class="sheet-text-fix" style="line-height:1;">${esc(t.label)}</span>
      </div>
    `;
  }).join('');

  return `
    <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; min-height:${Math.ceil(bSize) + alignedBottomPx + 2}px; align-self:stretch; flex-shrink:0;">
      ${elementsHTML}
    </div>
  `;
}

// 渲染 1:1 實際 A4 印刷比例的「收費 Label、站點、區域 Label、地標 Label、站圈與線條長度即時預覽卡」（完整顯示全名）
function renderNodeAndFontLivePreviewHTML() {
  const L = ensureStopAndLineStyleConfigSynced();
  const C = ensureColorsConfigSynced();
  const variants = ensureVariantsConfigSynced();
  const primaryColor = variants[0]?.color || C.routeLineColor || '#0d8556';
  const nodeFill = variants[0]?.nodeFillColor || C.nodeFillColor || '#ffffff';

  const zhPx = Math.max(8.0, Number(L.stopNameFontSizePx) || 10.4);
  const enPx = Math.max(6.5, Number(L.stopEnFontSizePx) || 8.4);
  const scale = zhPx / 10.0;

  const farePx = Math.max(14.0, Number(L.fareFontSizePx) || Math.round(17.0 * Math.pow(scale, 0.62) * 10) / 10);
  const farePadX = Math.max(5.0, Number(L.fareBoxPadX) || 6.5);
  const farePadY = Math.max(1.2, Number(L.fareBoxPadY) || 1.6);
  const fareLineThick = Math.max(1.8, Number(L.fareLineThicknessPx) || 2.2);

  const districtPx = Math.max(8.2, Number(L.districtFontSizePx) || Math.round(9.4 * Math.pow(scale, 0.76) * 10) / 10);
  const districtPadX = Math.max(4.5, Number(L.districtPadX) || 5.5);
  const districtPadY = Math.max(1.1, Number(L.districtPadY) || 1.5);

  const lmZhPx = Math.max(6.8, Number(L.landmarkZhFontSizePx) || Math.round(7.4 * Math.pow(scale, 0.76) * 10) / 10);
  const lmEnPx = Math.max(5.8, Number(L.landmarkEnFontSizePx) || Math.round(lmZhPx * 0.865 * 10) / 10);
  const lmPadX = Math.max(4.0, Number(L.landmarkPadX) || 4.8);
  const lmPadY = Math.max(1.2, Number(L.landmarkPadY) || 1.6);

  const coloredPadX = Math.max(6.0, Number(L.coloredStopPadX) || 7.0);
  const coloredPadY = Math.max(1.5, Number(L.coloredStopPadY) || 2.0);

  const normSize = Math.max(8.0, Number(L.normalNodeSizePx) || 10.1);
  const termExtra = Math.max(2.2, Number(L.terminalNodeExtraPx) || 3.4);
  const termSize = Math.round((normSize + termExtra) * 10) / 10;
  const normSw = Math.max(1.8, Number(L.nodeStrokeWidthPx) || 2.4);
  const termSw = Math.max(2.2, Number(L.terminalStrokeWidthPx) || 3.1);
  const lineW = Math.max(2.5, Number(L.lineThicknessPx) || 4.3);
  const gapPx = Math.max(3.5, Number(L.nodeToNameGapPx) || 5.2);
  const trackColW = Math.ceil(termSize) + 6;
  const previewLineGap = Math.min(24, Math.max(2, Math.round(Number(L.stopVerticalGapPx) || 2.6)));

  const originBg = variants[0]?.originDestBg || C.originDestBg || primaryColor;
  const originFg = (variants[0]?.originDestText || C.originDestText) === 'black' ? '#111827' : '#ffffff';
  const districtBg = variants[0]?.districtBg || C.districtBg || primaryColor;
  const districtFg = (variants[0]?.districtText || C.districtText) === 'black' ? '#111827' : '#ffffff';
  const fareBg = variants[0]?.fareBg || C.fareBg || primaryColor;
  const fareFg = (variants[0]?.fareText || C.fareText) === 'black' ? '#111827' : '#ffffff';

  const termNodeSVG = createSvgStopNode({
    kind: 'terminal',
    size: termSize,
    primaryColor,
    fillColor: nodeFill,
    strokeWidth: termSw
  });

  const normNodeSVG = createSvgStopNode({
    kind: 'normal',
    size: normSize,
    primaryColor,
    fillColor: nodeFill,
    strokeWidth: normSw
  });

  const stops = appConfig.stops || [];
  const sampleTerm = stops[0] || { zh: '小西灣(藍灣半島)', en: 'Siu Sai Wan (Island Resort)', fare: '$27.60' };
  const sampleStopWithLm = stops.find((s, idx) => idx > 0 && ((s.districtZh && s.districtZh.trim()) || (Array.isArray(s.landmarks) && s.landmarks.length > 0)))
    || stops[1]
    || { zh: '富城閣, 柴灣道', en: 'Fu Shing Court, Chai Wan Rd', districtZh: '柴灣', districtEn: 'Chai Wan', landmarks: [{ zh: '青年廣場', en: 'Youth Sq' }] };

  const cleanTermZh = String(sampleTerm.zh || '起點總站').replace(/\\n|\|/g, ' ');
  const cleanTermEn = String(sampleTerm.en || 'Origin Terminus').replace(/\\n|\|/g, ' ');
  const cleanStopZh = String(sampleStopWithLm.zh || '中途分站').replace(/\\n|\|/g, ' ');
  const cleanStopEn = String(sampleStopWithLm.en || 'Midway Stop').replace(/\\n|\|/g, ' ');
  const sampleFare = String(sampleTerm.fare || '$12.40').trim() || '$12.40';
  const sampleDistZh = String(sampleStopWithLm.districtZh || '柴灣').trim() || '柴灣';
  const sampleDistEn = String(sampleStopWithLm.districtEn || 'Chai Wan').trim() || 'Chai Wan';
  const firstLm = (Array.isArray(sampleStopWithLm.landmarks) && sampleStopWithLm.landmarks[0])
    ? sampleStopWithLm.landmarks[0]
    : { zh: '時代廣場', en: 'Times Sq' };

  return `
    <div style="
      background:#ffffff;
      border:1px solid #cbd5e1;
      border-radius:8px;
      padding:8px 10px;
      display:flex;
      flex-direction:column;
      gap:5px;
      box-shadow:inset 0 1px 2px rgba(15,23,42,0.06);
    ">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:4px; border-bottom:1px dashed #e2e8f0; padding-bottom:4px;">
        <span style="font-size:9.5px; font-weight:800; color:#1e293b; display:inline-flex; align-items:center; gap:5px;">
          <span style="width:7px; height:7px; border-radius:9999px; background:${primaryColor}; display:inline-block;"></span>
          <span>1:1 紙張實際大小預覽（完整站名・收費/區域/地標 Label・圓圈・線條長度）</span>
        </span>
        <span style="font-size:8.5px; color:#0d8556; font-weight:800;">
          總站圈 ${termSize}px ｜ 中途圈 ${normSize}px ｜ 站名 ${zhPx}px ｜ 收費 ${farePx}px ｜ 區域 ${districtPx}px ｜ 地標 ${lmZhPx}px
        </span>
      </div>

      <div style="display:flex; flex-direction:column; width:100%; padding:2px 0;">
        <!-- 第一站：分段收費 Label + 底線長度 + 起點總站大圓圈 + 完整起點色塊 Label -->
        <div style="display:flex; align-items:stretch; width:100%;">
          <div style="width:${trackColW}px; min-width:${trackColW}px; flex-shrink:0;"></div>
          <div style="flex:1; min-width:0; padding-left:${gapPx}px; padding-bottom:2px;">
            <span style="
              background:${fareBg};
              color:${fareFg};
              font-family:'Arial Black', Arial, sans-serif;
              font-size:${farePx}px;
              font-weight:900;
              padding:${farePadY}px ${farePadX}px;
              border-radius:3.5px;
              line-height:1.05;
              display:inline-block;
            ">${esc(sampleFare)}</span>
            <div style="width:82%; height:${fareLineThick}px; background:${fareBg}; margin-top:2px; border-radius:1px;"></div>
          </div>
        </div>

        <div style="display:flex; align-items:stretch; width:100%;">
          <div style="position:relative; width:${trackColW}px; min-width:${trackColW}px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <div style="position:absolute; top:50%; bottom:-${previewLineGap + 4}px; left:50%; transform:translateX(-50%); width:${lineW}px; background:${primaryColor};"></div>
            <div style="position:relative; z-index:2; display:flex; align-items:center; justify-content:center;">${termNodeSVG}</div>
          </div>
          <div style="flex:1; min-width:0; padding:1.5px 0 3px ${gapPx}px;">
            <div style="background:${originBg}; color:${originFg}; padding:${coloredPadY}px ${coloredPadX}px; border-radius:4px; display:inline-flex; flex-direction:column; max-width:100%;">
              <span style="font-size:${zhPx + 0.7}px; font-weight:${L.coloredStopZhWeight || '900'}; line-height:1.14; word-break:break-word;">${esc(cleanTermZh)}</span>
              <span style="font-size:${enPx + 0.3}px; font-weight:${L.coloredStopEnWeight || '700'}; line-height:1.08; word-break:break-word;">${esc(cleanTermEn)}</span>
            </div>
          </div>
        </div>

        <!-- 站與站之間的垂直路線線段長度預覽 -->
        <div style="height:${previewLineGap}px; width:100%;"></div>

        <!-- 第二站：區域 Label + 中途站圓圈 + 完整中途站名 + 右側地標 Label -->
        <div style="display:flex; align-items:stretch; width:100%;">
          <div style="position:relative; width:${trackColW}px; min-width:${trackColW}px; flex-shrink:0;">
            <div style="position:absolute; top:-4px; bottom:-4px; left:50%; transform:translateX(-50%); width:${lineW}px; background:${primaryColor};"></div>
          </div>
          <div style="flex:1; min-width:0; padding:1px 0 1.5px ${gapPx}px;">
            <span style="
              background:${districtBg};
              color:${districtFg};
              font-size:${districtPx}px;
              font-weight:700;
              padding:${districtPadY}px ${districtPadX + 4}px;
              border-radius:3px;
              line-height:1.05;
              display:inline-block;
            ">${esc(sampleDistZh)} ${esc(sampleDistEn)}</span>
          </div>
        </div>

        <div style="display:flex; align-items:stretch; width:100%;">
          <div style="position:relative; width:${trackColW}px; min-width:${trackColW}px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <div style="position:absolute; top:-4px; bottom:0; left:50%; transform:translateX(-50%); width:${lineW}px; background:${primaryColor};"></div>
            <div style="position:relative; z-index:2; display:flex; align-items:center; justify-content:center;">${normNodeSVG}</div>
          </div>
          <div style="flex:1; min-width:0; padding:1.5px 0 1.5px ${gapPx}px; display:flex; align-items:center; justify-content:space-between; gap:6px;">
            <div style="flex:1; min-width:0; display:flex; flex-direction:column;">
              <span style="font-size:${zhPx}px; font-weight:${L.stopZhWeight || '700'}; color:${C.stopNameZhColor || '#111827'}; line-height:1.12; word-break:break-word;">${esc(cleanStopZh)}</span>
              <span style="font-size:${enPx}px; font-weight:${L.stopEnWeight || '600'}; color:${C.stopNameEnColor || '#1f2937'}; line-height:1.06; word-break:break-word;">${esc(cleanStopEn)}</span>
            </div>
            <span style="
              background:${C.landmarkBg || '#e5e7eb'};
              color:${C.landmarkText || '#111827'};
              padding:${lmPadY}px ${lmPadX}px;
              border-radius:3px;
              display:inline-flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              flex-shrink:0;
            ">
              <span style="font-size:${lmZhPx}px; font-weight:700; line-height:1.08;">${esc(firstLm.zh || '時代廣場')}</span>
              <span style="font-size:${lmEnPx}px; font-weight:600; line-height:1.02;">${esc(firstLm.en || 'Times Sq')}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 專屬全域切換函數：修復原本內聯 onchange="L.linkNodeSizeToFontSize = ..." 造成的 ReferenceError: L is not defined
function toggleLinkNodeSizeToFontSize(checked) {
  const L = ensureStopAndLineStyleConfigSynced();
  L.linkNodeSizeToFontSize = Boolean(checked);
  if (L.linkNodeSizeToFontSize) {
    syncNodeAndLineProportionsToFontSize(L.stopNameFontSizePx, true);
  }
  renderA4Sheet();
  renderEditorSidebar();
}

// 渲染「1. 佈局」分頁（請確保全檔只保留這一個 renderThemeTabHTML，刪除重複定義）
function renderThemeTabHTML() {
  const L = ensureStopAndLineStyleConfigSynced();
  const variants = ensureVariantsConfigSynced();
  if (L.autoScaleByStopCount === undefined) L.autoScaleByStopCount = true;
  if (L.linkNodeSizeToFontSize === undefined) L.linkNodeSizeToFontSize = true;
  if (L.forceMaxTwoColumns === undefined) L.forceMaxTwoColumns = true;
  if (!L.autoLayoutProfileKey) L.autoLayoutProfileKey = 'auto';
  if (!L.routeArrowStyle) L.routeArrowStyle = 'classic';
  if (L.routeArrowScale === undefined || isNaN(Number(L.routeArrowScale))) L.routeArrowScale = 100;
  if (!L.contDashStyle) L.contDashStyle = 'standard';
  if (L.contBlockGapPx === undefined || isNaN(Number(L.contBlockGapPx))) L.contBlockGapPx = 3;

  const { profile: detectedProfile, stats } = selectOptimalAutoLayoutProfile('auto');
  const activeProfileKey = L.autoLayoutProfileKey || 'auto';
  const currentProfile = activeProfileKey === 'auto'
    ? detectedProfile
    : (ROUTE_MAP_AUTO_LAYOUT_PROFILES.find(p => p.key === activeProfileKey) || detectedProfile);

  const enrichedStops = computeStopsWithFareZones(appConfig.stops);
  const columns = splitStopsIntoColumns(enrichedStops);
  const isForce2Col = L.forceMaxTwoColumns !== false;

  const perColumnSpacingControlsHTML = columns.map((colStops, colIdx) => {
    const topVal = getColTopSpacePx(colIdx);
    return `
      <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-700/80 space-y-1">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold text-emerald-300">
            第 ${colIdx + 1} 欄頂部留白數值
            <span class="text-slate-400 font-normal">(${colStops.length} 站${colIdx > 0 ? '・自動下推對齊底邊' : ''})</span>
          </span>
          <div class="flex items-center gap-1.5">
            <span id="col-space-label-top-${colIdx}" class="text-[10px] text-emerald-400 font-mono">${topVal} px</span>
            <input
              type="number" min="0" max="380" step="1"
              value="${topVal}"
              oninput="updateColSpace('top', ${colIdx}, this.value); this.parentElement.parentElement.nextElementSibling.value = this.value;"
              class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[9.5px]"
            />
          </div>
        </div>
        <input
          type="range" min="0" max="380" step="1"
          value="${topVal}"
          oninput="updateColSpace('top', ${colIdx}, this.value); this.previousElementSibling.querySelector('input').value = this.value;"
          class="w-full accent-emerald-500"
        />
      </div>
    `;
  }).join('');

  const quickThemePresetsHTML = MAIN_THEME_PRESETS.map(tpl => {
    const isActive = currentActivePresetKey === tpl.key;
    const sampleToken = tpl.sampleRoute || 'B13';
    const sampleFontSize = sampleToken.length >= 4 ? 19 : 22;

    return `
      <button
        type="button"
        onclick="loadPreset('${tpl.key}', 'theme_only')"
        title="套用「${esc(tpl.label)}（${esc(tpl.desc)}）」作為全頁主色（不影響路線號碼框樣式）"
        class="p-2 rounded-lg border text-left transition flex items-center gap-2.5 ${
          isActive
            ? 'bg-emerald-950/60 border-emerald-400 ring-1 ring-emerald-400/60'
            : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700/80'
        }"
      >
        <div style="
          background-color:${tpl.bgColor};
          color:${tpl.textColor};
          padding:2.5px;
          border-radius:4px;
          min-width:72px;
          height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          box-shadow:0 1px 4px rgba(0,0,0,0.4);
        ">
          <div style="
            border:1.2px solid rgba(255,255,255,0.88);
            border-radius:2px;
            width:100%;
            height:100%;
            padding:1px 4px;
            display:flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
          ">
            ${renderRouteTokenWithOwlHTML(sampleToken, sampleFontSize, tpl.textColor, tpl.bgColor, false)}
          </div>
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-bold text-[11px] text-slate-100 truncate">${esc(tpl.label)}</div>
          <div class="text-[9px] text-slate-400 truncate mt-0.5">${esc(tpl.desc)}</div>
        </div>
      </button>
    `;
  }).join('');

  const autoLayoutProfileButtonsHTML = ROUTE_MAP_AUTO_LAYOUT_PROFILES.map(p => {
    const isMatched = currentProfile.key === p.key;
    const termNodePx = Math.round((p.normalNodeSizePx + p.terminalNodeExtraPx) * 10) / 10;
    return `
      <button
        type="button"
        onclick="runSmartAutoRouteMapLayout('${p.key}', false)"
        title="套用「${esc(p.refName)}」排版比例：${esc(p.desc)}"
        class="p-2 rounded-lg border text-left transition flex flex-col justify-between ${
          isMatched
            ? 'bg-amber-500/20 border-amber-400 text-amber-200 ring-1 ring-amber-400/50 shadow-sm'
            : 'bg-slate-900/90 hover:bg-slate-800 border-slate-800 text-slate-300 hover:border-slate-600'
        }"
      >
        <div class="flex items-center justify-between gap-1">
          <span class="font-bold text-[10px] text-amber-300 truncate">${esc(p.refName)}</span>
          ${isMatched ? '<i class="fa-solid fa-circle-check text-amber-400 text-[10px] shrink-0"></i>' : ''}
        </div>
        <div class="text-[10px] font-bold text-slate-100 mt-0.5 truncate">${esc(p.label)}</div>
        <div class="text-[8.5px] text-emerald-300 font-mono mt-0.5 truncate">站 ${p.stopNameFontSizePx}px・收費 ${p.fareFontSizePx}px・圈 ${p.normalNodeSizePx}/${termNodePx}px</div>
      </button>
    `;
  }).join('');

  const colTopSummaryStr = columns.map((_, idx) => `${getColTopSpacePx(idx)}px`).join(' / ');
  const curTermSize = Math.round((Number(L.normalNodeSizePx) + Number(L.terminalNodeExtraPx || 3.4)) * 10) / 10;

  return `
    ${!isTempScratchMode ? `
      <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
        <div class="flex items-center justify-between flex-wrap gap-1.5">
          <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-swatchbook text-amber-400"></i>
            <span>香港巴士路線框主色範本庫 (一鍵切換全頁主題色)</span>
          </h3>
          <button
            type="button"
            onclick="loadPreset(currentActivePresetKey, 'full')"
            class="px-2 py-0.5 rounded bg-sky-600/30 hover:bg-sky-600 text-sky-200 hover:text-white text-[10px] font-bold transition"
            title="重置為此主題的完整測試路線資料"
          >
            <i class="fa-solid fa-rotate mr-1"></i>載入範例資料
          </button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          ${quickThemePresetsHTML}
        </div>
      </div>
    ` : ''}

    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3.5">
      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-700/80 pb-2">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-sliders text-emerald-400"></i>
          <span>${isTempScratchMode ? '基礎版面佈局與換欄設定' : '路線圖智能自動排版系統（11 大參數連動・少於 20 站自動拉大如城巴 629）'}</span>
        </h3>
        ${!isTempScratchMode ? `
          <button
            type="button"
            onclick="resetLayoutAndStylesKeepData()"
            class="px-2.5 py-1 rounded-lg bg-rose-600/25 hover:bg-rose-600 text-rose-200 hover:text-white border border-rose-500/40 text-[10px] font-bold transition shadow-sm flex items-center gap-1"
            title="保留所有顏色、站名、時間表與文字資料，僅將排版、字號、圓圈尺寸與留白重置回原版預設設定"
          >
            <i class="fa-solid fa-rotate-left"></i>
            <span>一鍵還原原版設定 (保留資料與顏色)</span>
          </button>
        ` : ''}
      </div>

      ${!isTempScratchMode ? `
        <div class="bg-slate-950/90 border border-amber-500/45 rounded-xl p-3 space-y-2.5 shadow-inner">
          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800/90 pb-2.5">
            <div class="min-w-0 flex-1">
              <div class="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span>自動排版（收費/站點/區域/地標 Label・站圈・留白・換欄・寬度・站距線長・邊距）</span>
              </div>
              <div class="text-[9px] text-slate-400 mt-0.5">
                目前偵測：共 <strong class="text-slate-200">${stats.totalStops} 站</strong>（分 <strong class="text-emerald-300">${columns.length} 欄</strong>）➔ ${stats.totalStops < 20 ? '<span class="text-amber-300 font-bold">少於 20 站已自動拉大收費/區域/地標 Label 與線條長度（如城巴 629）</span>' : `推薦比例：<strong class="text-amber-300">${esc(detectedProfile.refName)} ${esc(detectedProfile.label)}</strong>`}
              </div>
            </div>

            <button
              type="button"
              onclick="runSmartAutoRouteMapLayout('auto', false)"
              class="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-black text-[10.5px] transition shadow-md flex items-center gap-1.5 shrink-0"
              title="參考 stop1~stop4 及 manystop 官方比例，根據目前站點數量一鍵同步設定全部 11 項字號、Label、圓圈與線條長度參數"
            >
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <span>自動選擇適合排版方式</span>
            </button>
          </div>

          <!-- 「強制 2 欄內完成」雙態切換按鈕 -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-[9.5px] text-slate-300">
              <span class="font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-table-columns text-emerald-400"></i>
                <span>路線圖欄位上限模式：</span>
              </span>
              <span class="text-[8.5px] ${isForce2Col ? 'text-emerald-400' : 'text-amber-400 font-bold'}">
                ${isForce2Col ? '✓ 目前務求於 2 欄內完成（符合城巴官方規格）' : '⚠️ 目前允許超過 2 欄（不建議，字體與欄寬易變窄）'}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button
                type="button"
                onclick="toggleForceMaxTwoColumns(true)"
                class="py-1.5 px-2.5 rounded-lg border text-left transition flex items-center justify-between ${
                  isForce2Col
                    ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 font-bold shadow-sm ring-1 ring-emerald-400/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-slate-200'
                }"
              >
                <div class="flex items-center gap-1.5 min-w-0">
                  <i class="fa-solid fa-shield-check text-emerald-400 text-[10px]"></i>
                  <span class="text-[10px] truncate">強制 2 欄內完成 (官方推薦)</span>
                </div>
                ${isForce2Col ? '<span class="px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-200 text-[8px] shrink-0">啟用中</span>' : ''}
              </button>

              <button
                type="button"
                onclick="toggleForceMaxTwoColumns(false)"
                class="py-1.5 px-2.5 rounded-lg border text-left transition flex items-center justify-between ${
                  !isForce2Col
                    ? 'bg-rose-600/25 border-rose-400 text-rose-200 font-bold shadow-sm ring-1 ring-rose-400/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-slate-300'
                }"
              >
                <div class="flex items-center gap-1.5 min-w-0">
                  <i class="fa-solid fa-triangle-exclamation text-amber-400 text-[10px]"></i>
                  <span class="text-[10px] truncate">不強制 2 欄內完成 (不建議)</span>
                </div>
                ${!isForce2Col ? '<span class="px-1.5 py-0.2 rounded bg-rose-500/30 text-rose-200 text-[8px] shrink-0">已開啟</span>' : ''}
              </button>
            </div>

            ${!isForce2Col ? `
              <div class="bg-amber-950/50 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-[9px] text-amber-200 flex items-center justify-between gap-2">
                <span><i class="fa-solid fa-circle-exclamation text-amber-400 mr-1"></i><strong>不建議解除 2 欄限制：</strong>當分站超過「換欄站數」2 倍時會分出第 3 欄，容易令每欄過窄、站名頻繁斷行，在紙張上遠看較難閱讀。</span>
                <button type="button" onclick="toggleForceMaxTwoColumns(true)" class="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[8.5px] shrink-0">改回 2 欄</button>
              </div>
            ` : ''}
          </div>

          <!-- 1:1 紙張實際大小「完整站名、收費/區域/地標 Label、站圈與線條長度」即時預覽卡 -->
          ${renderNodeAndFontLivePreviewHTML()}

          <!-- 10 大核心自動排版參數即時數值總覽列 -->
          <div class="grid grid-cols-5 gap-1 bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-center text-[8.5px]">
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">1. 站點字號</div>
              <div class="text-amber-300 font-mono font-bold mt-0.5">${L.stopNameFontSizePx}/${L.stopEnFontSizePx}px</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">2. 收費Label</div>
              <div class="text-amber-300 font-mono font-bold mt-0.5">${L.fareFontSizePx}px</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">3. 區域Label</div>
              <div class="text-amber-300 font-mono font-bold mt-0.5">${L.districtFontSizePx}px</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">4. 地標Label</div>
              <div class="text-amber-300 font-mono font-bold mt-0.5">${L.landmarkZhFontSizePx}/${L.landmarkEnFontSizePx}px</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">5. 站圈(中/總)</div>
              <div class="text-emerald-300 font-mono font-bold mt-0.5">${L.normalNodeSizePx}/${curTermSize}px</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">6. 站距線長</div>
              <div class="text-emerald-300 font-mono font-bold mt-0.5">${L.stopVerticalGapPx}px</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">7. 頂部留白</div>
              <div class="text-sky-300 font-mono font-bold mt-0.5">${colTopSummaryStr}</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">8. 換欄站數</div>
              <div class="text-emerald-300 font-mono font-bold mt-0.5">${L.autoSplitMaxStops} 站</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">9. 路線圖寬</div>
              <div class="text-amber-300 font-mono font-bold mt-0.5">${L.mapWidthPercent}%</div>
            </div>
            <div class="bg-slate-950/80 p-1 rounded border border-slate-800/80">
              <div class="text-slate-400">10. 紙張邊距</div>
              <div class="text-sky-300 font-mono font-bold mt-0.5">${L.sheetPaddingMm}mm</div>
            </div>
          </div>

          <!-- 5 款官方路線紙參考範本一鍵套用矩陣 -->
          <div class="space-y-1">
            <div class="text-[9px] text-slate-400">
              或直接指定參考範本模式（收費/區域/地標 Label、站圈大小、字號與線條長度嚴格按該範本比例連動）：
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              ${autoLayoutProfileButtonsHTML}
            </div>
          </div>
        </div>
      ` : ''}

      <!-- 左右版面位置、路線圖寬度、換欄站數、紙張外邊距 -->
      <div class="space-y-2.5">
        <div class="grid grid-cols-2 gap-2">
          <button onclick="updateLayout('mapPosition', 'left')" class="p-2 rounded-lg border text-left transition ${L.mapPosition === 'left' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 border-slate-700 text-slate-400'}">
            <div class="text-xs">左邊路線圖 + 右邊資料</div>
            <div class="text-[10px] opacity-75">經典城巴標準排版</div>
          </button>
          <button onclick="updateLayout('mapPosition', 'right')" class="p-2 rounded-lg border text-left transition ${L.mapPosition === 'right' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 border-slate-700 text-slate-400'}">
            <div class="text-xs">右邊路線圖 + 左邊資料</div>
            <div class="text-[10px] opacity-75">鏡像對調版面位置</div>
          </button>
        </div>

        <div class="grid grid-cols-3 gap-2.5">
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">路線圖寬度 (<span id="label-mapWidthPercent" class="text-emerald-400 font-mono">${L.mapWidthPercent}%</span>)</label>
            <input id="range-mapWidthPercent" type="range" min="48" max="76" step="1" value="${L.mapWidthPercent}" oninput="updateLayout('mapWidthPercent', this.value)" class="w-full accent-emerald-500" />
          </div>
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">換欄站數 (<span id="label-autoSplitMaxStops" class="text-emerald-400 font-mono">${L.autoSplitMaxStops} 站</span>)</label>
            <input id="range-autoSplitMaxStops" type="range" min="8" max="55" step="1" value="${L.autoSplitMaxStops}" oninput="updateLayout('autoSplitMaxStops', this.value)" class="w-full accent-emerald-500" />
          </div>
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">紙張外邊距 (<span id="label-sheetPaddingMm" class="text-emerald-400 font-mono">${L.sheetPaddingMm} mm</span>)</label>
            <input id="range-sheetPaddingMm" type="range" min="0" max="15" step="0.5" value="${L.sheetPaddingMm}" oninput="updateLayout('sheetPaddingMm', this.value)" class="w-full accent-emerald-500" />
          </div>
        </div>
      </div>

      ${!isTempScratchMode ? `
        <!-- 字體大小（站點/收費/區域/地標）、站距線條長度、站點圓圈大小與每欄頂部留白微調 -->
        <div class="bg-slate-950/85 border border-slate-800 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-1 border-b border-slate-800/80 pb-1.5 text-[9.5px]">
            <span class="font-bold text-slate-200">站點/收費/區域/地標字號、站點圓圈與線條長度微調</span>
            <label class="flex items-center gap-1.5 cursor-pointer text-amber-300 font-semibold">
              <input
                type="checkbox"
                ${L.linkNodeSizeToFontSize !== false ? 'checked' : ''}
                onchange="toggleLinkNodeSizeToFontSize(this.checked)"
                class="rounded accent-amber-500"
              />
              <span>調整站名字號時自動等比縮放 Label、站圈與線粗</span>
            </label>
          </div>

          <div class="grid grid-cols-2 gap-2.5">
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="text-[10px] text-amber-300 font-bold">
                  中文站名字號 (<span id="label-stopNameFontSizePx" class="text-amber-300 font-mono">${L.stopNameFontSizePx} px</span>)
                </label>
              </div>
              <div class="flex items-center gap-1.5">
                <input id="range-stopNameFontSizePx" type="range" min="8.5" max="16.5" step="0.1" value="${L.stopNameFontSizePx}" oninput="updateLayout('stopNameFontSizePx', this.value)" class="flex-1 accent-amber-500" />
                <input id="input-stopNameFontSizePx" type="number" step="0.1" min="8" max="18" value="${L.stopNameFontSizePx}" oninput="updateLayout('stopNameFontSizePx', this.value)" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-200 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="text-[10px] text-amber-300 font-bold">
                  英文站名字號 (<span id="label-stopEnFontSizePx" class="text-amber-300 font-mono">${L.stopEnFontSizePx} px</span>)
                </label>
              </div>
              <div class="flex items-center gap-1.5">
                <input id="range-stopEnFontSizePx" type="range" min="6.8" max="13.5" step="0.1" value="${L.stopEnFontSizePx}" oninput="updateLayout('stopEnFontSizePx', this.value)" class="flex-1 accent-amber-500" />
                <input id="input-stopEnFontSizePx" type="number" step="0.1" min="6" max="15" value="${L.stopEnFontSizePx}" oninput="updateLayout('stopEnFontSizePx', this.value)" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-200 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[10px] text-emerald-300 font-bold mb-1">
                站距空隙／線條長度 (<span id="label-stopVerticalGapPx" class="text-emerald-400 font-mono">${L.stopVerticalGapPx} px</span>)
              </label>
              <div class="flex items-center gap-1.5">
                <input id="range-stopVerticalGapPx" type="range" min="0" max="80" step="0.2" value="${Math.min(80, Number(L.stopVerticalGapPx) || 0)}" oninput="updateLayout('stopVerticalGapPx', this.value)" class="flex-1 accent-emerald-500" />
                <input id="input-stopVerticalGapPx" type="number" step="0.2" min="0" max="150" value="${L.stopVerticalGapPx}" oninput="updateLayout('stopVerticalGapPx', this.value)" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[10px] text-emerald-300 font-bold mb-1">
                站點與站名水平空隙 (<span id="label-nodeToNameGapPx" class="text-emerald-400 font-mono">${L.nodeToNameGapPx ?? 5.2} px</span>)
              </label>
              <div class="flex items-center gap-1.5">
                <input id="range-nodeToNameGapPx" type="range" min="0" max="24" step="0.5" value="${L.nodeToNameGapPx ?? 5.2}" oninput="updateLayout('nodeToNameGapPx', this.value)" class="flex-1 accent-emerald-500" />
                <input id="input-nodeToNameGapPx" type="number" step="0.5" min="0" max="30" value="${L.nodeToNameGapPx ?? 5.2}" oninput="updateLayout('nodeToNameGapPx', this.value)" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono text-[10px]" />
              </div>
            </div>
          </div>

          <!-- 收費 Label、區域 Label、地標 Label 字號與終點箭嘴引線長度微調 -->
          <div class="grid grid-cols-4 gap-2 pt-1.5 border-t border-slate-800/80 text-[10px]">
            <div>
              <label class="block text-[9px] text-amber-300 font-semibold mb-0.5">收費Label字號</label>
              <input id="input-fareFontSizePx" type="number" step="0.2" min="12" max="26" value="${L.fareFontSizePx}" oninput="updateLayout('fareFontSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-amber-300 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-amber-300 font-semibold mb-0.5">區域Label字號</label>
              <input id="input-districtFontSizePx" type="number" step="0.2" min="7.5" max="16" value="${L.districtFontSizePx}" oninput="updateLayout('districtFontSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-amber-300 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-amber-300 font-semibold mb-0.5">地標Label字號</label>
              <input id="input-landmarkZhFontSizePx" type="number" step="0.2" min="6.5" max="13" value="${L.landmarkZhFontSizePx}" oninput="updateLayout('landmarkZhFontSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-amber-300 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-emerald-300 font-semibold mb-0.5">終點引線長度</label>
              <input id="input-destArrowLeadPx" type="number" step="0.5" min="2" max="24" value="${L.destArrowLeadPx ?? 6.5}" oninput="updateLayout('destArrowLeadPx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-emerald-300 font-mono" />
            </div>
          </div>

          <!-- 站點圓圈大小、圓圈外環粗度、路線線條粗度與位移 -->
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-1.5 border-t border-slate-800/80 text-[10px]">
            <div>
              <label class="block text-[9px] text-emerald-300 font-semibold mb-0.5">一般站圈直徑</label>
              <input id="input-normalNodeSizePx" type="number" step="0.2" min="8.0" max="17" value="${L.normalNodeSizePx}" oninput="updateLayout('normalNodeSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-emerald-300 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-emerald-300 font-semibold mb-0.5">站圈外環粗度</label>
              <input id="input-nodeStrokeWidthPx" type="number" step="0.1" min="1.8" max="4.5" value="${L.nodeStrokeWidthPx}" oninput="updateLayout('nodeStrokeWidthPx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-emerald-300 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-amber-300 font-semibold mb-0.5">總站外環粗度</label>
              <input id="input-terminalStrokeWidthPx" type="number" step="0.1" min="2.2" max="5" value="${L.terminalStrokeWidthPx}" oninput="updateLayout('terminalStrokeWidthPx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-amber-300 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-sky-300 font-semibold mb-0.5">班次線條粗度</label>
              <input id="input-lineThicknessPx" type="number" step="0.2" min="2.5" max="10" value="${L.lineThicknessPx}" oninput="updateLayout('lineThicknessPx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-sky-300 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">路線圖位移 X</label>
              <input type="number" value="${L.mapOffsetX}" oninput="updateLayout('mapOffsetX', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono" />
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">路線圖位移 Y</label>
              <input type="number" value="${L.mapOffsetY}" oninput="updateLayout('mapOffsetY', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono" />
            </div>
          </div>

          <!-- 終點與續欄箭嘴樣式 -->
          <div class="bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/35 space-y-2 pt-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-emerald-300 flex items-center gap-1.5">
                <i class="fa-solid fa-location-arrow"></i>
                <span>終點箭嘴、「▲ 續左欄 Cont.」與「接右欄 Cont. ➔」樣式設定</span>
              </span>
              <span class="text-[9px] text-slate-400">主線合成一條完整線・續欄處為 4 格短方塊</span>
            </div>

            <div class="grid grid-cols-12 gap-2 items-end text-[10px]">
              <div class="col-span-4">
                <label class="block text-[9px] text-slate-400 mb-0.5">箭嘴幾何樣式</label>
                <select onchange="updateLayout('routeArrowStyle', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-slate-100">
                  <option value="classic" ${L.routeArrowStyle === 'classic' ? 'selected' : ''}>▼ 經典等腰三角 (預設)</option>
                  <option value="sharp" ${L.routeArrowStyle === 'sharp' ? 'selected' : ''}>▾ 修長銳角箭嘴</option>
                  <option value="wing" ${L.routeArrowStyle === 'wing' ? 'selected' : ''}>⮟ 立體微凹燕尾</option>
                </select>
              </div>

              <div class="col-span-3">
                <label class="block text-[9px] text-slate-400 mb-0.5">續欄短方塊格數</label>
                <select onchange="updateLayout('contDashStyle', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-slate-100">
                  <option value="standard" ${L.contDashStyle === 'standard' ? 'selected' : ''}>標準 4 格短方塊 (預設)</option>
                  <option value="dense" ${L.contDashStyle === 'dense' ? 'selected' : ''}>緊密 5 格短方塊</option>
                  <option value="dotted" ${L.contDashStyle === 'dotted' ? 'selected' : ''}>精簡 3 格短方塊</option>
                </select>
              </div>

              <div class="col-span-2">
                <label class="block text-[9px] text-emerald-300 font-bold mb-0.5">方塊空隙(px)</label>
                <input id="input-contBlockGapPx" type="number" min="1" max="8" step="0.5" value="${L.contBlockGapPx}" oninput="updateLayout('contBlockGapPx', this.value)" class="w-full bg-slate-950 border border-emerald-500/50 rounded px-1.5 py-1 text-center text-emerald-300 font-mono text-[10px]" />
              </div>

              <div class="col-span-3">
                <label class="block text-[9px] text-slate-400 mb-0.5">箭嘴大小 (<span id="label-routeArrowScale" class="text-emerald-300 font-mono">${L.routeArrowScale}%</span>)</label>
                <input id="range-routeArrowScale" type="range" min="70" max="145" step="5" value="${L.routeArrowScale}" oninput="updateLayout('routeArrowScale', this.value)" class="w-full accent-emerald-500" />
              </div>
            </div>
          </div>

          <!-- 每欄頂部留白數值控制 + 一鍵自動對齊右欄底邊按鈕 -->
          <div class="space-y-1.5 pt-1">
            ${columns.length > 1 ? `
              <div class="flex items-center justify-between text-[9.5px] px-0.5">
                <span class="text-slate-400">各欄頂部留白微調（如 stop1.png / manystop.png 階梯式對齊）：</span>
                <button
                  type="button"
                  onclick="calibrateAutoLayoutWithDOM('auto'); renderEditorSidebar(); showToast('已自動計算頂部留白並對齊左右欄底邊！');"
                  class="px-2 py-0.5 rounded bg-emerald-600/25 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 font-bold text-[9px] transition"
                >
                  <i class="fa-solid fa-arrows-down-to-line mr-1"></i>自動對齊兩欄底邊
                </button>
              </div>
            ` : ''}
            ${perColumnSpacingControlsHTML}
          </div>
        </div>

        <!-- 快捷導航卡：一鍵前往「4. 班次與微調」的新自定義班次數量與圓形編號設定 -->
        <div class="bg-slate-950/90 border border-sky-500/40 rounded-xl p-3 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
              <i class="fa-solid fa-code-branch text-xs"></i>
            </div>
            <div class="min-w-0">
              <div class="text-[11px] font-bold text-sky-300 truncate">自定義班次數量與圓形編號設定（共 ${variants.length} 班次）</div>
              <div class="text-[9px] text-slate-400 truncate">已移至「4. 班次與微調」（含平行線間距、線粗、中英文字號與圓圈編號位置）</div>
            </div>
          </div>
          <button
            type="button"
            onclick="switchEditorTab('export', 'sec-unified-variants-export')"
            class="px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] transition shadow-sm shrink-0 flex items-center gap-1"
          >
            <span>前往設定</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      ` : `
        <div class="text-[10px] text-amber-300/90 bg-amber-950/30 border border-amber-500/30 rounded-lg p-2">
          <i class="fa-solid fa-wand-magic-sparkles mr-1"></i>目前處於「臨時製作路線紙（基礎模式）」，進階位移、每欄微調、「路線號碼及目的地」及「範本主題」已禁止使用。
        </div>
      `}
    </div>
  `;
}

// 更新佈局參數（當手動調整收費/區域/地標字號時，連同對應 Label 外框內距一併等比縮放）
function updateLayout(key, val) {
  const L = ensureStopAndLineStyleConfigSynced();
  if (typeof L[key] === 'boolean' || ['autoScaleByStopCount', 'contFromLeftShowNumbers', 'forceMaxTwoColumns', 'linkNodeSizeToFontSize'].includes(key)) {
    L[key] = Boolean(val);
  } else if (
    val !== '' &&
    !isNaN(Number(val)) &&
    ![
      'mapPosition',
      'variantDisplayMode',
      'exportEngine',
      'originBadgePosition',
      'routeArrowStyle',
      'contDashStyle',
      'stopZhWeight',
      'stopEnWeight',
      'coloredStopZhWeight',
      'coloredStopEnWeight',
      'autoLayoutProfileKey'
    ].includes(key)
  ) {
    L[key] = Number(val);
  } else {
    L[key] = val;
  }

  if (key === 'stopZhWeight') {
    L._customStopZhWeight = true;
  }

  // 當手動調整收費、區域或地標字號時，自動同步其 Label 內距 (PadX / PadY)
  if (key === 'fareFontSizePx') {
    const fScale = Math.max(0.7, Number(L.fareFontSizePx) / 17.0);
    L.fareBoxPadX = Math.round(5.9 * Math.pow(fScale, 1.05) * 10) / 10;
    L.fareBoxPadY = Math.round(1.35 * Math.pow(fScale, 1.45) * 10) / 10;
    L.fareLineThicknessPx = Math.round(Math.max(1.8, 1.95 * Math.pow(fScale, 0.6)) * 10) / 10;
  } else if (key === 'districtFontSizePx') {
    const dScale = Math.max(0.7, Number(L.districtFontSizePx) / 9.3);
    L.districtPadX = Math.round(4.9 * Math.pow(dScale, 1.35) * 10) / 10;
    L.districtPadY = Math.round(1.25 * Math.pow(dScale, 1.55) * 10) / 10;
  } else if (key === 'landmarkZhFontSizePx') {
    const lmScale = Math.max(0.7, Number(L.landmarkZhFontSizePx) / 7.35);
    L.landmarkEnFontSizePx = Math.round(Math.max(5.8, Number(L.landmarkZhFontSizePx) * 0.865) * 10) / 10;
    L.landmarkPadX = Math.round(4.4 * Math.pow(lmScale, 1.35) * 10) / 10;
    L.landmarkPadY = Math.round(1.35 * Math.pow(lmScale, 1.65) * 10) / 10;
  }

  if (key === 'originBadgePosition') {
    const normalized = normalizeOriginBadgePosition(val);
    L.originBadgePosition = normalized;
    (appConfig.variants || []).forEach(v => {
      v.originBadgePosition = normalized;
    });
  }

  // 當手動調整中文字號且開啟「自動等比縮放 Label、站圈與線粗」時，即時同步全部關聯屬性
  if (key === 'stopNameFontSizePx' && L.linkNodeSizeToFontSize !== false) {
    syncNodeAndLineProportionsToFontSize(L.stopNameFontSizePx, true);
    [
      'stopEnFontSizePx',
      'fareFontSizePx',
      'districtFontSizePx',
      'landmarkZhFontSizePx',
      'destArrowLeadPx',
      'normalNodeSizePx',
      'nodeStrokeWidthPx',
      'terminalStrokeWidthPx',
      'lineThicknessPx',
      'nodeToNameGapPx'
    ].forEach(k => {
      const lbl = document.getElementById(`label-${k}`);
      if (lbl) lbl.textContent = `${L[k]} px`;
      const inp = document.getElementById(`input-${k}`);
      if (inp && document.activeElement !== inp) inp.value = L[k];
      const rng = document.getElementById(`range-${k}`);
      if (rng && document.activeElement !== rng) rng.value = L[k];
    });
  }

  if (['stopVerticalGapPx', 'stopNameFontSizePx', 'stopEnFontSizePx', 'fareFontSizePx', 'districtFontSizePx', 'landmarkZhFontSizePx', 'normalNodeSizePx', 'lineThicknessPx'].includes(key)) {
    L.autoScaleByStopCount = false;
    const autoChk = document.getElementById('chk-autoScaleByStopCount');
    if (autoChk) autoChk.checked = false;
  } else if (key === 'autoScaleByStopCount' && L.autoScaleByStopCount) {
    runSmartAutoRouteMapLayout('auto', false);
    return;
  } else if (key === 'variantDisplayMode' || key === 'forceMaxTwoColumns') {
    renderA4Sheet();
    if (L.autoScaleByStopCount) {
      calibrateAutoLayoutWithDOM(L.lastResolvedProfileKey || 'auto');
    }
    renderEditorSidebar();
    return;
  }

  const liveLabel = document.getElementById(`label-${key}`);
  if (liveLabel) {
    if (key === 'mapWidthPercent' || key === 'routeArrowScale' || key === 'mtrIconScale') {
      liveLabel.textContent = `${L[key]}%`;
    } else if (key === 'autoSplitMaxStops') {
      liveLabel.textContent = `${L[key]} 站`;
    } else if (key === 'sheetPaddingMm') {
      liveLabel.textContent = `${L[key]} mm`;
    } else if ([
      'stopVerticalGapPx',
      'nodeToNameGapPx',
      'parallelLineSpacingPx',
      'stopNameFontSizePx',
      'stopEnFontSizePx',
      'fareFontSizePx',
      'districtFontSizePx',
      'landmarkZhFontSizePx',
      'destArrowLeadPx',
      'lineThicknessPx',
      'normalNodeSizePx',
      'nodeStrokeWidthPx',
      'terminalStrokeWidthPx',
      'columnGapPx',
      'contBlockGapPx'
    ].includes(key)) {
      liveLabel.textContent = `${L[key]} px`;
    }
  }

  const numInput = document.getElementById(`input-${key}`);
  if (numInput && document.activeElement !== numInput) {
    numInput.value = L[key];
  }
  const rangeInput = document.getElementById(`range-${key}`);
  if (rangeInput && document.activeElement !== rangeInput) {
    rangeInput.value = L[key];
  }

  renderA4Sheet();
  updateVariantsLivePreviewBarDOM();

  if ([
    'mapPosition',
    'variantDisplayMode',
    'autoSplitMaxStops',
    'stickLastModuleToBottom',
    'showVariantLegend',
    'autoScaleByStopCount',
    'originBadgePosition',
    'contFromLeftShowNumbers',
    'evenZoneCoverAllStops',
    'routeArrowStyle',
    'contDashStyle'
  ].includes(key)) {
    renderEditorSidebar();
  }
}

// 渲染路線圖區域（移除雙數分段區冗餘上下留白，讓多站路線在 2 欄內仍可維持 9.6px~10.2px 遠看清晰大字號與大站圈）
function renderRouteMapSectionHTML() {
  syncBoundVariants();
  const L = ensureStopAndLineStyleConfigSynced();
  const C = ensureColorsConfigSynced();
  const metrics = getTrackMetrics();
  const enrichedStops = computeStopsWithFareZones(appConfig.stops);
  const columns = splitStopsIntoColumns(enrichedStops);
  const totalCols = columns.length;
  const isMapLeft = L.mapPosition !== 'right';

  // 1:1 真實像素站距（不再乘以 1.6 倍膨脹係數，釋放寶貴垂直空間給字體與站圈）
  const interStopGapPx = Math.max(0, Math.round((Number(L.stopVerticalGapPx) ?? 2.6) * 10) / 10);
  const nodeNameGapPx = Math.max(0, Number(L.nodeToNameGapPx) ?? 5.5);
  // 雙數分段收費色塊緊湊上下呼吸空間（如同 manystop.png 與 stop1.png）
  const zonePadPx = interStopGapPx <= 1.5 ? 2.0 : 3.2;

  const showVariantLegend = (L.showVariantLegend !== false) && appConfig.variants && appConfig.variants.length > 1;
  const legendHTML = showVariantLegend ? `
    <div style="
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      gap:8px;
      padding:2.5px 6px;
      margin-bottom:3px;
      background:#f8fafc;
      border:1px solid #e2e8f0;
      border-radius:4px;
      font-size:8px;
      color:#334155;
      flex-shrink:0;
    ">
      ${appConfig.variants.map((v, vIdx) => {
        const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
        return `
          <div style="display:flex; align-items:center; gap:4px; font-weight:700;">
            <span style="
              display:inline-flex;
              align-items:center;
              justify-content:center;
              width:14px;
              height:14px;
              border-radius:9999px;
              background-color:${v.color};
              color:${vBadgeTextColor};
              font-size:9.2px;
              font-weight:900;
              line-height:1;
            ">
              <span class="sheet-text-fix" style="line-height:1;">${vIdx + 1}</span>
            </span>
            <span style="
              display:inline-block;
              width:14px;
              height:0;
              border-top:3px ${v.lineStyle === 'dashed' ? 'dashed' : 'solid'} ${v.color};
            "></span>
            <span class="sheet-text-fix">${esc(v.name)}${v.code ? ` (${esc(v.code)})` : ''}</span>
          </div>
        `;
      }).join('')}
    </div>
  ` : '';

  const columnsHTML = columns.map((colStops, colIdx) => {
    const isFirstCol = colIdx === 0;
    const isLastCol = colIdx === totalCols - 1;

    const fareGroups = groupColumnStopsByFareZone(colStops);
    const groupsHTML = fareGroups.map((group, gIdx) => {
      const isFirstGroupInCol = gIdx === 0;
      const isLastGroupInCol = gIdx === fareGroups.length - 1;
      const firstStopInGroup = group.stops[0];
      const lastStopInGroup = group.stops[group.stops.length - 1];

      const firstStopHasTopCont = (!isFirstCol && isFirstGroupInCol) || Boolean(firstStopInGroup?.contFromLeft);
      const lastStopHasBotCont = (!isLastCol && isLastGroupInCol) || Boolean(lastStopInGroup?.contToRight) || (isLastCol && isLastGroupInCol && Boolean(lastStopInGroup?.manualBreakAfter));

      const innerStopsHTML = group.stops.map((stop, sIdx) => {
        const isFirstStopInCol = isFirstGroupInCol && sIdx === 0;
        const isLastStopInCol = isLastGroupInCol && sIdx === group.stops.length - 1;

        const showTopCont = (!isFirstCol && isFirstStopInCol) || Boolean(stop.contFromLeft);
        const showBotCont = (!isLastCol && isLastStopInCol) || Boolean(stop.contToRight) || (isLastCol && isLastStopInCol && Boolean(stop.manualBreakAfter));

        const topContHTML = showTopCont ? renderColumnContinuationTopHTML(colIdx, stop, metrics) : '';
        const stopHTML = renderStopItemHTML(stop, metrics);
        const botContHTML = showBotCont ? renderColumnContinuationBottomHTML(colIdx, stop, metrics) : '';

        const betweenStopSpacer = (sIdx < group.stops.length - 1 && interStopGapPx > 0)
          ? renderTrackSpacerRowHTML(stop, metrics, 'bottom', interStopGapPx)
          : '';
        return topContHTML + stopHTML + botContHTML + betweenStopSpacer;
      }).join('');

      if (group.isEvenZone) {
        const outerTopSpacer = (!isFirstGroupInCol && !firstStopHasTopCont && interStopGapPx > 0)
          ? renderTrackSpacerRowHTML(firstStopInGroup, metrics, 'top', Math.max(1.5, interStopGapPx))
          : '';
        const innerTopSpacer = firstStopHasTopCont
          ? `<div style="height:1.5px; flex-shrink:0;"></div>`
          : renderTrackSpacerRowHTML(firstStopInGroup, metrics, 'top', zonePadPx);
        const innerBottomSpacer = lastStopHasBotCont
          ? `<div style="height:1.5px; flex-shrink:0;"></div>`
          : renderTrackSpacerRowHTML(lastStopInGroup, metrics, 'bottom', zonePadPx);
        const outerBottomSpacer = (!isLastGroupInCol && !lastStopHasBotCont && interStopGapPx > 0)
          ? renderTrackSpacerRowHTML(lastStopInGroup, metrics, 'bottom', Math.max(1.5, interStopGapPx))
          : '';

        const rawZoneW = group.zoneWidth || '100%';
        const bgWidthStyle = (rawZoneW === '100%')
          ? 'width:100%;'
          : `width:${rawZoneW}; max-width:100%;`;

        return `
          ${outerTopSpacer}
          <div style="position:relative; width:100%; flex:0 0 auto; display:flex; flex-direction:column;">
            <div style="
              position:absolute;
              left:${metrics.trackWidth + nodeNameGapPx}px;
              right:6px;
              top:0;
              bottom:0;
              pointer-events:none;
              z-index:0;
            ">
              <div style="
                ${bgWidthStyle}
                height:100%;
                background-color:${C.evenZoneBg};
                border-radius:4px;
                margin-left:-4.5px;
                padding:0 4.5px;
                box-sizing:content-box;
              "></div>
            </div>
            ${innerTopSpacer}
            ${innerStopsHTML}
            ${innerBottomSpacer}
          </div>
          ${outerBottomSpacer}
        `;
      }

      const nextGroup = fareGroups[gIdx + 1];
      const afterOddGroupSpacer = (!isLastGroupInCol && nextGroup && !nextGroup.isEvenZone && interStopGapPx > 0)
        ? renderTrackSpacerRowHTML(lastStopInGroup, metrics, 'bottom', interStopGapPx)
        : '';

      return `
        <div style="position:relative; width:100%; flex:0 0 auto; display:flex; flex-direction:column;">
          ${innerStopsHTML}
        </div>
        ${afterOddGroupSpacer}
      `;
    }).join('');

    const colTopPad = getColTopSpacePx(colIdx);

    return `
      <div data-map-col="${colIdx}" style="
        flex:1;
        min-width:0;
        height:100%;
        position:relative;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        padding-top:${colTopPad}px;
        ${!isLastCol ? `border-right:1px dashed #cbd5e1; padding-right:${Math.round(L.columnGapPx / 2)}px;` : ''}
      ">
        <!-- 全欄一體化連續班次路線與同軸站點圓圈 SVG 向量層 -->
        <svg class="col-continuous-track-svg" data-col-svg="${colIdx}" preserveAspectRatio="none" style="
          position:absolute;
          left:0;
          top:0;
          width:${metrics.trackWidth}px;
          overflow:visible;
          pointer-events:none;
          z-index:2;
        "></svg>
        ${groupsHTML}
      </div>
    `;
  }).join('');

  return `
    <div style="
      width:${L.mapWidthPercent}%;
      height:100%;
      display:flex;
      flex-direction:column;
      box-sizing:border-box;
      ${isMapLeft ? 'padding-right:8px;' : 'padding-left:8px;'}
      transform:translate(${Number(L.mapOffsetX)}px, ${Number(L.mapOffsetY)}px);
    ">
      ${legendHTML}
      <div style="
        flex:1;
        min-height:0;
        height:100%;
        display:flex;
        flex-direction:row;
        align-items:stretch;
        gap:${Math.round(L.columnGapPx / 2)}px;
        width:100%;
      ">
        ${columnsHTML}
      </div>
    </div>
  `;
}

// 紀錄目前在班次面板中聚焦展開的班次索引與展開模式
let activeEditorVariantIdx = 0;
let expandAllVariantCards = false;
let expandedVariantAdvancedColorMap = {};

// 確保所有班次分支 (appConfig.variants) 屬性完整同步
function ensureVariantsConfigSynced() {
  const L = ensureStopAndLineStyleConfigSynced();
  const C = ensureColorsConfigSynced();
  const R = appConfig.rightData;

  if (!Array.isArray(appConfig.variants) || appConfig.variants.length === 0) {
    appConfig.variants = [
      {
        id: 'v1',
        name: '常規班次 (全程)',
        code: '',
        showRouteBox: false,
        routeNumber: R?.routeNumber || 'B13',
        routeBoxInnerWhiteLine: true,
        routeBoxPosition: 'left',
        routeBoxColor: C.routeBoxBg || '#0d8556',
        routeBoxTextColor: C.routeBoxText || '#ffffff',
        color: C.routeLineColor || '#0d8556',
        badgeText: 'white',
        lineStyle: 'solid',
        originBadgePosition: normalizeOriginBadgePosition(L.originBadgePosition || 'all_first_stop_fare'),
        boundToId: ''
      }
    ];
  }

  const defaultBadgePos = normalizeOriginBadgePosition(L.originBadgePosition || 'all_first_stop_fare');

  appConfig.variants.forEach((v, idx) => {
    if (!v.id) v.id = 'v_' + (idx + 1);
    if (v.name === undefined || v.name === null) v.name = idx === 0 ? '常規班次' : `特別班次 #${idx + 1}`;
    if (v.code === undefined || v.code === null) v.code = '';
    if (!v.color) v.color = idx === 0 ? (C.routeLineColor || '#0d8556') : '#0284c7';
    if (!v.badgeText) v.badgeText = 'white';
    if (!v.lineStyle) v.lineStyle = 'solid';
    v.originBadgePosition = normalizeOriginBadgePosition(v.originBadgePosition || defaultBadgePos);
    if (v.boundToId === undefined) v.boundToId = '';
  });

  if (activeEditorVariantIdx < 0 || activeEditorVariantIdx >= appConfig.variants.length) {
    activeEditorVariantIdx = 0;
  }

  return appConfig.variants;
}

// 切換班次卡片的聚焦索引或「全部展開 / 單一聚焦」模式
function selectEditorVariantCard(vIdx, toggleExpandAll = false) {
  ensureVariantsConfigSynced();
  if (toggleExpandAll) {
    expandAllVariantCards = !expandAllVariantCards;
  } else {
    activeEditorVariantIdx = Math.max(0, Math.min(appConfig.variants.length - 1, Number(vIdx) || 0));
  }
  renderEditorSidebar();
}

// 切換單一班次卡片內的「進階獨立配色」展開狀態
function toggleVariantAdvancedColors(variantId) {
  if (!variantId) return;
  expandedVariantAdvancedColorMap[variantId] = !expandedVariantAdvancedColorMap[variantId];
  renderEditorSidebar();
}

// 局部更新「自定義班次數量與圓形編號設定」頂部的白底即時預覽列（避免重繪整個 Sidebar 導致滑桿或輸入框失焦）
function updateVariantsLivePreviewBarDOM() {
  const previewContainer = document.getElementById('unified-variants-live-preview');
  if (previewContainer && typeof renderVariantsLivePreviewBarHTML === 'function') {
    previewContainer.innerHTML = renderVariantsLivePreviewBarHTML();
  }
}

// 渲染班次面板頂部的「所見即所得」白底即時預覽列（即時反映平行線間距、路線線條粗度、中英文站名字號與圓形編號位置）
function renderVariantsLivePreviewBarHTML() {
  const L = ensureStopAndLineStyleConfigSynced();
  const C = ensureColorsConfigSynced();
  const variants = ensureVariantsConfigSynced();
  const isParallel = L.variantDisplayMode === 'parallel_lines' && variants.length > 1;
  const lineW = Math.max(2, Number(L.lineThicknessPx) || 4.2);
  const normSize = Math.max(7, Number(L.normalNodeSizePx) || 9.2);
  const normSw = Math.max(1.4, Number(L.nodeStrokeWidthPx) || 2.2);
  const zhFontSize = Math.max(7.5, Number(L.stopNameFontSizePx) || 10.0);
  const enFontSize = Math.max(6.0, Number(L.stopEnFontSizePx) || 8.2);
  const zhWeight = L.stopZhWeight || '500';
  const enWeight = L.stopEnWeight || '600';

  const tracksPreviewHTML = variants.map((v, idx) => {
    const isFocused = !expandAllVariantCards && activeEditorVariantIdx === idx;
    const badgeFg = v.badgeText === 'black' ? '#111827' : '#ffffff';
    const nodeStroke = v.nodeColor || v.color || C.routeLineColor || '#0d8556';
    const nodeFill = v.nodeFillColor || C.nodeFillColor || '#ffffff';
    const vBadgeMode = getVariantOriginBadgeMode(v);
    const firstStopInfo = getVariantFirstStopName(v.id);
    const isDashed = v.lineStyle === 'dashed';

    const nodeSvgHTML = (!isParallel && idx > 0)
      ? createSvgStopNode({
          kind: 'partial',
          size: normSize + 1.2,
          primaryColor: variants[0]?.nodeColor || variants[0]?.color || C.routeLineColor,
          fillColor: nodeStroke,
          secondaryColor: variants[0]?.color || C.routeLineColor,
          strokeWidth: normSw
        })
      : createSvgStopNode({
          kind: 'normal',
          size: normSize + 0.8,
          primaryColor: nodeStroke,
          fillColor: nodeFill,
          strokeWidth: normSw
        });

    return `
      <div
        onclick="selectEditorVariantCard(${idx})"
        title="點擊切換編輯「${esc(v.name)}」"
        style="
          cursor:pointer;
          padding:5px 8px;
          border-radius:7px;
          border:1.5px solid ${isFocused ? v.color : '#cbd5e1'};
          background:${isFocused ? '#f1f5f9' : '#ffffff'};
          display:flex;
          align-items:center;
          gap:7px;
          transition:all 0.15s ease;
          flex-shrink:0;
        "
      >
        <!-- 圓形班次編號 -->
        <span style="
          width:16px;
          height:16px;
          border-radius:9999px;
          background-color:${v.color};
          color:${badgeFg};
          font-size:9.5px;
          font-weight:900;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          line-height:1;
          box-shadow:0 0 0 1.2px #ffffff, 0 1px 2px rgba(0,0,0,0.25);
          flex-shrink:0;
        ">${idx + 1}</span>

        <!-- 模擬路線線段 + 同軸站點圓圈 -->
        <div style="display:inline-flex; align-items:center; position:relative; width:28px; height:16px; justify-content:center; flex-shrink:0;">
          <div style="
            position:absolute;
            left:0;
            right:0;
            top:50%;
            transform:translateY(-50%);
            height:0;
            border-top:${lineW}px ${isDashed ? 'dashed' : 'solid'} ${v.color};
          "></div>
          <div style="position:relative; z-index:2; display:flex; align-items:center; justify-content:center;">
            ${nodeSvgHTML}
          </div>
        </div>

        <!-- 班次名稱與首站編號位置狀態 -->
        <div style="display:flex; flex-direction:column; min-width:0;">
          <div style="font-size:${Math.min(12.2, zhFontSize)}px; font-weight:${zhWeight}; color:#0f172a; line-height:1.15; white-space:nowrap;">
            ${esc(v.name)}${v.code ? `<span style="color:#d97706; font-weight:900; margin-left:2px;">${esc(v.code)}</span>` : ''}
          </div>
          <div style="font-size:${Math.min(10.2, enFontSize)}px; font-weight:${enWeight}; color:#64748b; line-height:1.1; white-space:nowrap;">
            ${vBadgeMode === 'above_node' ? `編號置於「${esc(firstStopInfo.zh)}」站圈上` : `編號與首站 (${esc(firstStopInfo.en)}) 收費平排`}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div style="
      background:#ffffff;
      border:1px solid #cbd5e1;
      border-radius:9px;
      padding:7px 9px;
      display:flex;
      flex-direction:column;
      gap:5px;
      box-shadow:inset 0 1px 2px rgba(15,23,42,0.06);
    ">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:4px; border-bottom:1px dashed #e2e8f0; padding-bottom:4px;">
        <span style="font-size:9.5px; font-weight:800; color:#334155; display:inline-flex; align-items:center; gap:4px;">
          <span style="width:6.5px; height:6.5px; border-radius:9999px; background:${isParallel ? '#0284c7' : '#0d8556'}; display:inline-block;"></span>
          <span>${isParallel ? `多班次平行線 (間距 ${L.parallelLineSpacingPx}px・線粗 ${L.lineThicknessPx}px)` : `單一主線模式 (線粗 ${L.lineThicknessPx}px)`}</span>
        </span>
        <span style="font-size:8.5px; color:#64748b; font-weight:700;">
          中文字號 ${L.stopNameFontSizePx}px / 英文字號 ${L.stopEnFontSizePx}px
        </span>
      </div>
      <div style="display:flex; align-items:center; gap:6px; overflow-x:auto; padding-bottom:2px;">
        ${tracksPreviewHTML}
      </div>
    </div>
  `;
}

// 重新設計的新「自定義班次數量與圓形編號設定」核心面板（已取消模組 ② 內的「立即適配」按鈕）
function renderUnifiedVariantsAndBadgesSectionHTML(context = 'export') {
  const L = ensureStopAndLineStyleConfigSynced();
  const variants = ensureVariantsConfigSynced();
  const routeBoxes = ensureHeaderRouteBoxesSynced();
  const curOriginBadgePos = normalizeOriginBadgePosition(L.originBadgePosition || 'all_first_stop_fare');
  const isParallel = L.variantDisplayMode === 'parallel_lines';

  // 班次快速切換膠囊列
  const variantSelectorPillsHTML = variants.map((v, vIdx) => {
    const isSelected = expandAllVariantCards || activeEditorVariantIdx === vIdx;
    const badgeFg = v.badgeText === 'black' ? '#111827' : '#ffffff';
    return `
      <button
        type="button"
        onclick="selectEditorVariantCard(${vIdx})"
        class="px-2.5 py-1.5 rounded-lg border text-[10px] font-bold transition flex items-center gap-1.5 shrink-0 ${
          isSelected
            ? 'bg-sky-600/30 border-sky-400 text-white shadow-sm ring-1 ring-sky-400/40'
            : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 text-slate-400 hover:text-slate-200'
        }"
      >
        <span
          class="w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] font-black shrink-0"
          style="background:${v.color}; color:${badgeFg}; box-shadow:0 0 0 1px rgba(255,255,255,0.85);"
        >${vIdx + 1}</span>
        <span id="variant-pill-label-${vIdx}" class="truncate max-w-[115px]">${esc(v.name)}${v.code ? ` (${esc(v.code)})` : ''}</span>
      </button>
    `;
  }).join('');

  // 決定要渲染哪些班次卡片（單一聚焦模式 vs 全部展開模式）
  const visibleVariants = expandAllVariantCards
    ? variants.map((v, idx) => ({ v, vIdx: idx }))
    : [{ v: variants[activeEditorVariantIdx] || variants[0], vIdx: activeEditorVariantIdx }];

  const variantsCardsHTML = visibleVariants.map(({ v, vIdx }) => {
    if (!v) return '';
    const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
    const vBadgeMode = getVariantOriginBadgeMode(v);
    const firstStopInfo = getVariantFirstStopName(v.id);

    const normalStops = (appConfig.stops || []).filter(s => !(s.hasCorridor || s.hasTunnel || s.type === 'corridor' || s.type === 'tunnel'));
    const totalNormalStops = normalStops.length;
    const activeStopCount = normalStops.filter(s => ((s.variantStatus && s.variantStatus[v.id]) || 'stop') === 'stop').length;

    const boundLabel = !v.boundToId
      ? '獨立配色'
      : (v.boundToId === '__theme__'
          ? '跟隨全頁主色'
          : `捆綁路線框 (${esc(routeBoxes.find(rb => rb.id === v.boundToId)?.routeNumber || '路線框')})`);

    return `
      <div class="bg-slate-900/95 border border-sky-500/35 rounded-xl p-3 space-y-2.5 shadow-md">
        <!-- 卡片頂欄：班次序號徽章 + 排序/複製/時間表/刪除 工具列 -->
        <div class="flex items-center justify-between flex-wrap gap-1.5 border-b border-slate-800 pb-2">
          <div class="flex items-center gap-2">
            <span
              class="w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-black shrink-0 shadow"
              style="background:${v.color}; color:${vBadgeTextColor}; box-shadow:0 0 0 1.2px #ffffff;"
            >${vIdx + 1}</span>
            <span class="text-[11px] font-bold text-sky-200">班次 #${vIdx + 1} 路線與編號設定</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300 font-mono">
              停靠 ${activeStopCount}/${totalNormalStops} 站
            </span>
          </div>

          <div class="flex items-center gap-1">
            ${variants.length > 1 ? `
              <button
                type="button"
                onclick="moveServiceVariant(${vIdx}, -1)"
                ${vIdx === 0 ? 'disabled' : ''}
                title="上移班次順序"
                class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center text-[9px] border border-slate-700 transition"
              ><i class="fa-solid fa-arrow-up"></i></button>
              <button
                type="button"
                onclick="moveServiceVariant(${vIdx}, 1)"
                ${vIdx === variants.length - 1 ? 'disabled' : ''}
                title="下移班次順序"
                class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center text-[9px] border border-slate-700 transition"
              ><i class="fa-solid fa-arrow-down"></i></button>
            ` : ''}
            <button
              type="button"
              onclick="duplicateServiceVariant(${vIdx})"
              title="複製此班次分支"
              class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[9.5px] transition flex items-center gap-1"
            ><i class="fa-regular fa-copy text-sky-400"></i><span>複製</span></button>
            <button
              type="button"
              onclick="switchEditorTab('info', 'sec-timetable-variant-${vIdx}')"
              title="跳轉至此班次的獨立時間表"
              class="px-2 py-1 rounded bg-emerald-600/25 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/35 text-[9.5px] font-bold transition flex items-center gap-1"
            ><i class="fa-regular fa-clock"></i><span>時間表</span></button>
            ${variants.length > 1 ? `
              <button
                type="button"
                onclick="removeServiceVariant(${vIdx})"
                title="刪除此班次"
                class="w-6 h-6 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center justify-center text-[10px] transition"
              ><i class="fa-solid fa-trash-can"></i></button>
            ` : ''}
          </div>
        </div>

        <!-- 區塊 A：班次名稱、備註符號与線條樣式 -->
        <div class="grid grid-cols-12 gap-2 items-end text-[10px]">
          <div class="col-span-6">
            <label class="block text-[9px] text-slate-400 mb-0.5">班次顯示名稱 (圖例與識別用)</label>
            <input
              type="text"
              value="${esc(v.name)}"
              oninput="updateServiceVariantField(${vIdx}, 'name', this.value)"
              placeholder="例如：常規班次 (全程)"
              class="w-full bg-slate-800 border border-slate-700 focus:border-sky-500 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-100"
            />
          </div>
          <div class="col-span-2">
            <label class="block text-[9px] text-amber-300 font-semibold mb-0.5">符號(#/*)</label>
            <input
              type="text"
              value="${esc(v.code || '')}"
              oninput="updateServiceVariantField(${vIdx}, 'code', this.value)"
              placeholder="無"
              class="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-lg px-1.5 py-1 text-[11px] font-black text-amber-300 text-center"
            />
          </div>
          <div class="col-span-4">
            <label class="block text-[9px] text-slate-400 mb-0.5">路線線條樣式</label>
            <select
              onchange="updateServiceVariantField(${vIdx}, 'lineStyle', this.value, true)"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-[10px] text-slate-100 font-semibold"
            >
              <option value="solid" ${v.lineStyle !== 'dashed' ? 'selected' : ''}>━━ 連續實線</option>
              <option value="dashed" ${v.lineStyle === 'dashed' ? 'selected' : ''}>╍╍ 連續虛線</option>
            </select>
          </div>
        </div>

        <!-- 區塊 B：此班次圓形編號顯示位置（嚴格二選一） -->
        <div class="bg-slate-950/90 p-2.5 rounded-lg border border-amber-500/30 space-y-1.5">
          <div class="flex items-center justify-between flex-wrap gap-1 text-[9.5px]">
            <span class="text-amber-300 font-bold flex items-center gap-1">
              <i class="fa-solid fa-circle-dot"></i>
              <span>此班次圓形編號 (${vIdx + 1}) 顯示位置 (二選一)：</span>
            </span>
            <span class="text-[9px] text-slate-400">自動識別首站：<strong class="text-slate-200">${esc(firstStopInfo.zh)}</strong></span>
          </div>
          <div class="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onclick="updateVariantOriginBadgePosition(${vIdx}, 'all_first_stop_fare')"
              class="py-1.5 px-2.5 rounded-lg border text-[9.5px] text-left transition flex items-center justify-between ${
                vBadgeMode === 'all_first_stop_fare'
                  ? 'bg-amber-500/25 border-amber-400 text-amber-200 font-bold shadow-sm'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }"
            >
              <span>1. 現在狀況 (默認)</span>
              ${vBadgeMode === 'all_first_stop_fare' ? '<i class="fa-solid fa-check text-amber-400"></i>' : ''}
            </button>
            <button
              type="button"
              onclick="updateVariantOriginBadgePosition(${vIdx}, 'above_node')"
              class="py-1.5 px-2.5 rounded-lg border text-[9.5px] text-left transition flex items-center justify-between ${
                vBadgeMode === 'above_node'
                  ? 'bg-amber-500/25 border-amber-400 text-amber-200 font-bold shadow-sm'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }"
            >
              <span>2. 該班次首個站點的上面</span>
              ${vBadgeMode === 'above_node' ? '<i class="fa-solid fa-check text-amber-400"></i>' : ''}
            </button>
          </div>
        </div>

        <!-- 區塊 C：停靠站批量設定 & 前往「顏色與SVG」集中調色導航列 -->
        <div class="bg-slate-950/85 p-2.5 rounded-lg border border-slate-800 space-y-2 text-[9.5px]">
          <div class="flex items-center justify-between flex-wrap gap-1.5">
            <span class="text-slate-300 font-semibold"><i class="fa-solid fa-route text-emerald-400 mr-1"></i>停靠站批量設定：</span>
            <div class="flex items-center gap-1 flex-wrap">
              <button
                type="button"
                onclick="setAllStopsForVariant(${vIdx}, 'stop')"
                class="px-2 py-0.5 rounded bg-slate-800 hover:bg-emerald-600/40 text-slate-200 border border-slate-700 transition"
              >全線停靠</button>
              <button
                type="button"
                onclick="setAllStopsForVariant(${vIdx}, 'terminals_only')"
                class="px-2 py-0.5 rounded bg-slate-800 hover:bg-amber-600/40 text-slate-200 border border-slate-700 transition"
              >只停首尾總站</button>
              <button
                type="button"
                onclick="setAllStopsForVariant(${vIdx}, 'invert_mid')"
                class="px-2 py-0.5 rounded bg-slate-800 hover:bg-sky-600/40 text-slate-200 border border-slate-700 transition"
              >反選中途站</button>
              <button
                type="button"
                onclick="switchEditorTab('stops')"
                class="px-2 py-0.5 rounded bg-sky-600/25 hover:bg-sky-600 text-sky-300 hover:text-white border border-sky-500/35 font-bold transition"
              >逐站設定 ➔</button>
            </div>
          </div>

          <!-- 配色狀態預覽與一鍵前往「顏色與SVG」按鈕 -->
          <div class="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-3.5 h-3.5 rounded-full border border-white/60 shrink-0 shadow-sm" style="background:${v.color};"></span>
              <span class="text-slate-300 truncate">
                目前配色：<strong class="font-mono text-slate-200">${esc(v.color)}</strong>
                <span class="text-slate-500 ml-1">(${boundLabel}・${v.badgeText === 'black' ? '黑字' : '白字'})</span>
              </span>
            </div>
            <button
              type="button"
              onclick="switchEditorTab('colors', 'sec-color-variant-${vIdx}')"
              class="px-2.5 py-1 rounded-lg bg-purple-600/25 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 font-bold text-[9.5px] transition flex items-center gap-1 shrink-0 shadow-sm"
            >
              <i class="fa-solid fa-palette"></i>
              <span>於「顏色與SVG」設定此班次配色 ➔</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- 移至「4. 班次與微調」的新自定義班次數量與圓形編號設定（顏色設定統一集中於「顏色與SVG」） -->
    <div id="sec-unified-variants-${esc(context)}" class="bg-slate-950/90 border border-sky-500/40 rounded-xl p-3.5 space-y-3 shadow-inner">
      <!-- 頂部標題與新增班次 / 前往顏色分頁快捷按鈕 -->
      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
            <i class="fa-solid fa-code-branch text-xs"></i>
          </div>
          <div>
            <h4 class="text-[12px] font-bold text-sky-300 flex items-center gap-1.5">
              <span>1. 自定義班次數量與圓形編號設定</span>
              <span class="px-1.5 py-0.2 rounded-full bg-sky-500/25 text-sky-200 text-[9.5px] font-mono">共 ${variants.length} 班次</span>
            </h4>
            <p class="text-[9.5px] text-slate-400">集中管理軌道模式、平行線間距、線粗、中英文字號與圓圈編號位置</p>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onclick="switchEditorTab('colors')"
            class="px-2.5 py-1.5 rounded-lg bg-purple-600/25 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 font-bold text-[10px] transition flex items-center gap-1"
            title="前往「顏色與SVG」集中修改全頁及各班次配色"
          >
            <i class="fa-solid fa-palette"></i>
            <span>顏色與SVG</span>
          </button>
          <button
            type="button"
            onclick="addServiceVariant()"
            class="px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] transition shadow-sm flex items-center gap-1"
          >
            <i class="fa-solid fa-plus"></i>
            <span>新增班次分支</span>
          </button>
        </div>
      </div>

      <!-- 頂部即時白底路線與圓形編號預覽列 -->
      <div id="unified-variants-live-preview">
        ${renderVariantsLivePreviewBarHTML()}
      </div>

      <!-- 模組 ①：路線圖班次線條模式 + 平行線間距 + 路線線條粗度 -->
      <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-2.5">
        <div class="flex items-center justify-between text-[10.5px]">
          <span class="font-bold text-sky-300 flex items-center gap-1.5">
            <span class="w-4 h-4 rounded-full bg-sky-500/25 text-sky-300 inline-flex items-center justify-center text-[9px] font-black">1</span>
            <span>路線圖軌道模式、平行線間距與路線線條粗度</span>
          </span>
          <span class="text-[9px] text-slate-400">${variants.length > 1 ? '已啟用多班次支援' : '目前為單一常規班次'}</span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button
            type="button"
            onclick="updateLayout('variantDisplayMode', 'single_with_style')"
            class="p-2 rounded-lg border text-left transition ${
              !isParallel
                ? 'bg-sky-600/25 border-sky-400 text-sky-200 font-bold shadow-sm'
                : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
            }"
          >
            <div class="text-[10.5px] flex items-center justify-between">
              <span>單一主線 + 特別站圈樣式</span>
              ${!isParallel ? '<i class="fa-solid fa-circle-check text-sky-400 text-[10px]"></i>' : ''}
            </div>
            <div class="text-[8.5px] opacity-75 mt-0.5">主線合成一線・部分停靠以雙環虛線標示</div>
          </button>

          <button
            type="button"
            onclick="updateLayout('variantDisplayMode', 'parallel_lines')"
            class="p-2 rounded-lg border text-left transition ${
              isParallel
                ? 'bg-sky-600/25 border-sky-400 text-sky-200 font-bold shadow-sm'
                : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
            }"
          >
            <div class="text-[10.5px] flex items-center justify-between">
              <span>多班次平行線 + 圓圈編號</span>
              ${isParallel ? '<i class="fa-solid fa-circle-check text-sky-400 text-[10px]"></i>' : ''}
            </div>
            <div class="text-[8.5px] opacity-75 mt-0.5">並排繪製各班次連續路線及 ① ② 圓形編號</div>
          </button>
        </div>

        <!-- 平行線間距 & 路線線條粗度（並排滑桿 + 數字輸入框） -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/90 text-[10px]">
          <div class="bg-slate-950/80 p-2 rounded-lg border border-slate-800/90 space-y-1">
            <div class="flex items-center justify-between">
              <span class="text-sky-300 font-bold">平行線間距 (<span id="label-parallelLineSpacingPx" class="font-mono">${L.parallelLineSpacingPx} px</span>)</span>
              <input
                id="input-parallelLineSpacingPx"
                type="number" min="6" max="26" step="0.5"
                value="${L.parallelLineSpacingPx}"
                oninput="updateLayout('parallelLineSpacingPx', this.value)"
                class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]"
              />
            </div>
            <input
              id="range-parallelLineSpacingPx"
              type="range" min="6" max="26" step="0.5"
              value="${L.parallelLineSpacingPx}"
              oninput="updateLayout('parallelLineSpacingPx', this.value)"
              class="w-full accent-sky-500"
            />
          </div>

          <div class="bg-slate-950/80 p-2 rounded-lg border border-slate-800/90 space-y-1">
            <div class="flex items-center justify-between">
              <span class="text-emerald-300 font-bold">路線線條粗度 (<span id="label-lineThicknessPx" class="font-mono">${L.lineThicknessPx} px</span>)</span>
              <input
                id="input-lineThicknessPx"
                type="number" min="2" max="10" step="0.2"
                value="${L.lineThicknessPx}"
                oninput="updateLayout('lineThicknessPx', this.value)"
                class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]"
              />
            </div>
            <input
              id="range-lineThicknessPx"
              type="range" min="2" max="10" step="0.2"
              value="${L.lineThicknessPx}"
              oninput="updateLayout('lineThicknessPx', this.value)"
              class="w-full accent-emerald-500"
            />
          </div>
        </div>
      </div>

      <!-- 模組 ②：中英文站名字體大小與粗細設定（已取消「立即適配」按鈕） -->
      <div class="bg-slate-900/90 p-3 rounded-xl border border-amber-500/35 space-y-2.5 text-[10px]">
        <div class="flex items-center justify-between flex-wrap gap-1.5 border-b border-slate-800 pb-1.5">
          <span class="font-bold text-amber-300 flex items-center gap-1.5 text-[10.5px]">
            <span class="w-4 h-4 rounded-full bg-amber-500/25 text-amber-300 inline-flex items-center justify-center text-[9px] font-black">2</span>
            <span>中英文站名字體大小與粗細設定</span>
          </span>
          <label class="flex items-center gap-1.5 cursor-pointer text-[9.5px] text-amber-200 hover:text-white font-semibold">
            <input
              id="chk-autoScaleByStopCount"
              type="checkbox"
              ${L.autoScaleByStopCount ? 'checked' : ''}
              onchange="updateLayout('autoScaleByStopCount', this.checked)"
              class="rounded accent-amber-500"
            />
            <span>按站數自動適配比例</span>
          </label>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div class="bg-slate-950/80 p-2 rounded-lg border border-slate-800/90 space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[10px] text-slate-200 font-bold">
                中文站名字號 (<span id="label-stopNameFontSizePx" class="text-amber-300 font-mono">${L.stopNameFontSizePx} px</span>)
              </label>
              <select
                onchange="updateLayout('stopZhWeight', this.value)"
                title="中文站名字體粗細"
                class="bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[9px] text-amber-200"
              >
                <option value="500" ${String(L.stopZhWeight || '500') === '500' ? 'selected' : ''}>Medium 500</option>
                <option value="600" ${String(L.stopZhWeight) === '600' ? 'selected' : ''}>半粗 600</option>
                <option value="700" ${String(L.stopZhWeight) === '700' ? 'selected' : ''}>粗體 700</option>
                <option value="800" ${String(L.stopZhWeight) === '800' ? 'selected' : ''}>特粗 800</option>
                <option value="900" ${String(L.stopZhWeight) === '900' ? 'selected' : ''}>黑體 900</option>
              </select>
            </div>
            <div class="flex items-center gap-1.5">
              <input
                id="range-stopNameFontSizePx"
                type="range" min="8.5" max="16" step="0.1"
                value="${L.stopNameFontSizePx}"
                oninput="updateLayout('stopNameFontSizePx', this.value)"
                class="flex-1 accent-amber-500"
              />
              <input
                id="input-stopNameFontSizePx"
                type="number" min="8" max="18" step="0.1"
                value="${L.stopNameFontSizePx}"
                oninput="updateLayout('stopNameFontSizePx', this.value)"
                class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-200 font-mono text-[10px]"
              />
            </div>
          </div>

          <div class="bg-slate-950/80 p-2 rounded-lg border border-slate-800/90 space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[10px] text-slate-200 font-bold">
                英文站名字號 (<span id="label-stopEnFontSizePx" class="text-amber-300 font-mono">${L.stopEnFontSizePx} px</span>)
              </label>
              <select
                onchange="updateLayout('stopEnWeight', this.value)"
                title="英文站名字體粗細"
                class="bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[9px] text-amber-200"
              >
                <option value="400" ${String(L.stopEnWeight) === '400' ? 'selected' : ''}>常規 400</option>
                <option value="500" ${String(L.stopEnWeight) === '500' ? 'selected' : ''}>中等 500</option>
                <option value="600" ${String(L.stopEnWeight || '600') === '600' ? 'selected' : ''}>半粗 600</option>
                <option value="700" ${String(L.stopEnWeight) === '700' ? 'selected' : ''}>粗體 700</option>
              </select>
            </div>
            <div class="flex items-center gap-1.5">
              <input
                id="range-stopEnFontSizePx"
                type="range" min="6.8" max="13" step="0.1"
                value="${L.stopEnFontSizePx}"
                oninput="updateLayout('stopEnFontSizePx', this.value)"
                class="flex-1 accent-amber-500"
              />
              <input
                id="input-stopEnFontSizePx"
                type="number" min="6" max="15" step="0.1"
                value="${L.stopEnFontSizePx}"
                oninput="updateLayout('stopEnFontSizePx', this.value)"
                class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-200 font-mono text-[10px]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 模組 ③：全局班次圓形編號顯示位置（一鍵二選一）與路線圖輔助開關 -->
      <div class="bg-slate-900/90 p-3 rounded-xl border border-emerald-500/35 space-y-2 text-[10px]">
        <div class="flex items-center justify-between flex-wrap gap-1">
          <span class="text-[10.5px] font-bold text-emerald-300 flex items-center gap-1.5">
            <span class="w-4 h-4 rounded-full bg-emerald-500/25 text-emerald-300 inline-flex items-center justify-center text-[9px] font-black">3</span>
            <span>班次圓形編號顯示位置（全部班次一鍵二選一）</span>
          </span>
          <span class="text-[8.5px] text-slate-400">下方各班次卡亦可單獨指定</span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button
            type="button"
            onclick="updateVariantOriginBadgePosition('all', 'all_first_stop_fare')"
            class="p-2 rounded-lg border text-left transition ${
              curOriginBadgePos === 'all_first_stop_fare'
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold shadow-sm'
                : 'bg-slate-950/75 border-slate-800 text-slate-400 hover:text-slate-200'
            }"
          >
            <div class="text-[10px] flex items-center justify-between">
              <span>1. 現在狀況 (默認)</span>
              ${curOriginBadgePos === 'all_first_stop_fare' ? '<i class="fa-solid fa-circle-check text-emerald-400"></i>' : ''}
            </div>
            <div class="text-[8.5px] opacity-80 mt-0.5">統一與路線首站分段收費平排顯示</div>
          </button>

          <button
            type="button"
            onclick="updateVariantOriginBadgePosition('all', 'above_node')"
            class="p-2 rounded-lg border text-left transition ${
              curOriginBadgePos === 'above_node'
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold shadow-sm'
                : 'bg-slate-950/75 border-slate-800 text-slate-400 hover:text-slate-200'
            }"
          >
            <div class="text-[10px] flex items-center justify-between">
              <span>2. 該班次的第一個站點的上面</span>
              ${curOriginBadgePos === 'above_node' ? '<i class="fa-solid fa-circle-check text-emerald-400"></i>' : ''}
            </div>
            <div class="text-[8.5px] opacity-80 mt-0.5">直接顯示於各班次首個停靠站點圓圈正上方</div>
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-1.5 border-t border-slate-800/80 text-[9.5px] text-slate-300">
          <label class="flex items-center gap-1.5 cursor-pointer hover:text-white">
            <input type="checkbox" ${L.showVariantLegend !== false ? 'checked' : ''} onchange="updateLayout('showVariantLegend', this.checked)" class="rounded accent-sky-500" />
            <span>頂部顯示班次圖例欄</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer hover:text-white">
            <input type="checkbox" ${L.contFromLeftShowNumbers ? 'checked' : ''} onchange="updateLayout('contFromLeftShowNumbers', this.checked)" class="rounded accent-sky-500" />
            <span>「▲ 續左欄」上方顯示圓圈編號</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer hover:text-white">
            <input type="checkbox" ${L.evenZoneCoverAllStops !== false ? 'checked' : ''} onchange="updateLayout('evenZoneCoverAllStops', this.checked)" class="rounded accent-emerald-500" />
            <span>雙數分段淺色底包覆全區分站</span>
          </label>
        </div>
      </div>

      <!-- 模組 ④：班次切換導航列（支援單一聚焦與全部展開切換）與各班次詳細設定卡 -->
      <div class="space-y-2 pt-1">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5 overflow-x-auto pb-0.5 flex-1">
            ${variantSelectorPillsHTML}
          </div>
          ${variants.length > 1 ? `
            <button
              type="button"
              onclick="selectEditorVariantCard(0, true)"
              class="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-[9px] font-semibold shrink-0 transition"
              title="切換顯示單一班次卡片或同時展開所有班次卡片"
            >
              <i class="fa-solid ${expandAllVariantCards ? 'fa-compress' : 'fa-expand'} mr-1 text-sky-400"></i>${expandAllVariantCards ? '單一聚焦' : `全部展開 (${variants.length})`}
            </button>
          ` : ''}
        </div>

        <div class="space-y-2.5">
          ${variantsCardsHTML}
        </div>
      </div>
    </div>
  `;
}

// 更新單一班次欄位（支援即時更新 A4 畫布與預覽列，輸入文字與選色時絕不失焦）
function updateServiceVariantField(vIdx, field, val, refreshSidebar = false) {
  const variants = ensureVariantsConfigSynced();
  const v = variants[vIdx];
  if (!v) return;

  if (field === 'color') {
    if (typeof updateVariantColor === 'function') {
      updateVariantColor(vIdx, 'color', val, false);
    } else {
      v.color = val;
      if (vIdx === 0) appConfig.colors.routeLineColor = val;
    }
  } else {
    v[field] = val;
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();

  // 局部更新面板頂部的即時預覽列與導航膠囊，避免重繪整個 Sidebar 導致輸入框失焦
  const previewContainer = document.getElementById('unified-variants-live-preview');
  if (previewContainer && !refreshSidebar) {
    previewContainer.innerHTML = renderVariantsLivePreviewBarHTML();
  }
  const pillNameEl = document.getElementById(`variant-pill-label-${vIdx}`);
  if (pillNameEl && !refreshSidebar) {
    pillNameEl.textContent = `${v.name || ('班次 #' + (vIdx + 1))}${v.code ? ' (' + v.code + ')' : ''}`;
  }

  if (refreshSidebar || ['lineStyle', 'badgeText'].includes(field)) {
    renderEditorSidebar();
  }
}

// 新增班次分支並自動切換聚焦至新班次
function addServiceVariant() {
  const palette = ['#0284c7', '#d97706', '#7c3aed', '#dc2626', '#0d9488', '#db2777'];
  const variants = ensureVariantsConfigSynced();
  const idx = variants.length;
  const newId = 'v' + Date.now();
  const color = palette[idx % palette.length];
  const defaultBadgePos = normalizeOriginBadgePosition(appConfig.layout?.originBadgePosition || 'all_first_stop_fare');

  variants.push({
    id: newId,
    name: `特別班次 #${idx + 1}`,
    code: idx === 1 ? '#' : (idx === 2 ? '*' : ''),
    showRouteBox: false,
    routeNumber: appConfig.rightData?.routeNumber || 'B13',
    routeBoxInnerWhiteLine: true,
    routeBoxPosition: 'left',
    routeBoxColor: appConfig.colors.routeBoxBg || '#0d8556',
    routeBoxTextColor: appConfig.colors.routeBoxText || '#ffffff',
    color,
    badgeText: 'white',
    lineStyle: idx % 2 === 1 ? 'dashed' : 'solid',
    originBadgePosition: defaultBadgePos,
    boundToId: ''
  });

  const totalStops = appConfig.stops.length;
  appConfig.stops.forEach((s, sIdx) => {
    if (!s.variantStatus) s.variantStatus = {};
    if (!s.variantType) s.variantType = {};
    s.variantStatus[newId] = 'stop';
    const isSpecial = Boolean(s.hasCorridor || s.isCorridor || s.hasTunnel || s.isTunnel || s.type === 'corridor' || s.type === 'tunnel');
    if (isSpecial) {
      s.variantType[newId] = s.hasTunnel || s.type === 'tunnel' ? 'tunnel' : 'corridor';
    } else {
      s.variantType[newId] = sIdx === 0 ? 'origin' : (sIdx === totalStops - 1 ? 'destination' : 'normal');
    }
  });

  if (variants.length > 1 && appConfig.layout.variantDisplayMode !== 'parallel_lines') {
    appConfig.layout.variantDisplayMode = 'parallel_lines';
  }

  activeEditorVariantIdx = variants.length - 1;
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已新增並聚焦至「特別班次 #${idx + 1}」！`);
}

// 複製指定班次分支（連同所有分站停靠狀態與時間表一併複製）
function duplicateServiceVariant(vIdx) {
  const variants = ensureVariantsConfigSynced();
  const srcV = variants[vIdx];
  if (!srcV) return;

  const palette = ['#0284c7', '#d97706', '#7c3aed', '#dc2626', '#0d9488', '#db2777'];
  const newId = 'v' + Date.now();
  const nextColor = palette[variants.length % palette.length];

  const clonedV = {
    ...JSON.parse(JSON.stringify(srcV)),
    id: newId,
    name: `${srcV.name} (副本)`,
    color: nextColor,
    boundToId: ''
  };

  variants.splice(vIdx + 1, 0, clonedV);

  // 複製每個站點的停靠狀態與站點屬性
  (appConfig.stops || []).forEach((s, sIdx, arr) => {
    if (!s.variantStatus) s.variantStatus = {};
    if (!s.variantType) s.variantType = {};
    s.variantStatus[newId] = s.variantStatus[srcV.id] || 'stop';
    s.variantType[newId] = s.variantType[srcV.id] || (sIdx === 0 ? 'origin' : (sIdx === arr.length - 1 ? 'destination' : 'normal'));
  });

  // 複製對應的時間表
  ensureVariantTimetablesSynced();
  const vtList = appConfig.rightData?.timetable?.variantTables;
  if (Array.isArray(vtList) && vtList[vIdx]) {
    const clonedVt = JSON.parse(JSON.stringify(vtList[vIdx]));
    clonedVt.variantId = newId;
    vtList.splice(vIdx + 1, 0, clonedVt);
  }

  if (variants.length > 1 && appConfig.layout.variantDisplayMode !== 'parallel_lines') {
    appConfig.layout.variantDisplayMode = 'parallel_lines';
  }

  activeEditorVariantIdx = vIdx + 1;
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已複製「${srcV.name}」為新班次分支！`);
}

// 上下移動調整班次順序（同時連動時間表順序）
function moveServiceVariant(vIdx, dir = -1) {
  const variants = ensureVariantsConfigSynced();
  const targetIdx = vIdx + dir;
  if (targetIdx < 0 || targetIdx >= variants.length) return;

  ensureVariantTimetablesSynced();
  const vtList = appConfig.rightData?.timetable?.variantTables;

  const tempV = variants[vIdx];
  variants[vIdx] = variants[targetIdx];
  variants[targetIdx] = tempV;

  if (Array.isArray(vtList) && vtList[vIdx] && vtList[targetIdx]) {
    const tempVt = vtList[vIdx];
    vtList[vIdx] = vtList[targetIdx];
    vtList[targetIdx] = tempVt;
  }

  activeEditorVariantIdx = targetIdx;
  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已調整班次順序為 #${targetIdx + 1}`);
}

// 刪除指定班次分支並同步時間表與站點狀態
function removeServiceVariant(vIdx) {
  const variants = ensureVariantsConfigSynced();
  if (variants.length <= 1) {
    showToast('至少需保留 1 個常規班次！', 'info');
    return;
  }
  const removed = variants[vIdx];
  variants.splice(vIdx, 1);

  if (appConfig.rightData?.timetable?.variantTables) {
    appConfig.rightData.timetable.variantTables.splice(vIdx, 1);
  }
  if (removed && removed.id) {
    (appConfig.stops || []).forEach(s => {
      if (s.variantStatus) delete s.variantStatus[removed.id];
      if (s.variantType) delete s.variantType[removed.id];
    });
  }

  if (activeEditorVariantIdx >= variants.length) {
    activeEditorVariantIdx = Math.max(0, variants.length - 1);
  }

  ensureVariantTimetablesSynced();
  syncBoundVariants();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已刪除班次「${removed?.name || '#' + (vIdx + 1)}」`);
}

// 快速批次設定指定班次的分站停靠狀態 ('stop' 全線停靠 | 'terminals_only' 只停首尾總站 | 'invert_mid' 反選中途站)
function setAllStopsForVariant(vIdx, mode = 'stop') {
  const variants = ensureVariantsConfigSynced();
  const v = variants[vIdx];
  if (!v) return;

  (appConfig.stops || []).forEach((s, idx, arr) => {
    if (!s.variantStatus) s.variantStatus = {};
    const isTerminal = idx === 0 || idx === arr.length - 1;
    if (mode === 'terminals_only') {
      s.variantStatus[v.id] = isTerminal ? 'stop' : 'bypass';
    } else if (mode === 'invert_mid') {
      if (isTerminal) {
        s.variantStatus[v.id] = 'stop';
      } else {
        const cur = s.variantStatus[v.id] || 'stop';
        s.variantStatus[v.id] = cur === 'stop' ? 'bypass' : 'stop';
      }
    } else {
      s.variantStatus[v.id] = 'stop';
    }
  });

  renderA4Sheet();
  renderEditorSidebar();
  const msgMap = {
    stop: `已將「${v.name}」設為全線各站停靠`,
    terminals_only: `已將「${v.name}」設為只停首尾總站（中途直達）`,
    invert_mid: `已反轉「${v.name}」的中途站停靠狀態`
  };
  showToast(msgMap[mode] || msgMap.stop);
}

// 捆綁班次顏色與頂部路線號碼框或全頁主色
function bindServiceVariant(vIdx, targetId) {
  const variants = ensureVariantsConfigSynced();
  const v = variants[vIdx];
  if (!v) return;
  v.boundToId = targetId || '';
  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(targetId ? '已捆綁班次顏色與路線設定！' : '已解除捆綁，恢復獨立配色');
}

// 將指定班次 (#vIdx) 的所有下屬項目（站圈、總站色塊、地區、分段、走廊、隧道、時間表粗線與時鐘）一鍵同步為該班次的路線主色
function syncVariantSubColorsToMain(vIdx) {
  const variants = ensureVariantsConfigSynced();
  const v = variants[vIdx];
  if (!v) return;

  const C = ensureColorsConfigSynced();
  const mainColor = v.color || C.routeLineColor || '#0d8556';
  const contrast = getAutoContrastTextInfo(mainColor);
  const lightTint = deriveLightTintHex(mainColor, 0.82);

  v.badgeText = contrast.mode;
  v.nodeColor = mainColor;
  v.originDestBg = mainColor;
  v.originDestText = contrast.mode;
  v.districtBg = mainColor;
  v.districtText = contrast.mode;
  v.fareBg = mainColor;
  v.fareText = contrast.mode;
  v.corridorSvgBg = mainColor;
  v.tunnelSvgBg = mainColor;
  v.timetableThickLineColor = mainColor;
  v.clockSvgColor = mainColor;
  v.dateHeaderBg = lightTint;
  v.originHeaderBg = lightTint;
  v.headwayHeaderBg = lightTint;
  v.clockContainerBg = lightTint;

  delete v._customCorridorSvgBg;
  delete v._customTunnelSvgBg;

  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已將「${v.name || ('班次 #' + (vIdx + 1))}」的所有下屬元素同步為班次主色 (${mainColor})！`);
}

// 更新指定班次 (#vIdx) 的獨立顏色、站圈、標籤、SVG 圖標與時間表配色設定
function updateVariantColorPalette(vIdx, key, val, refreshSidebar = false) {
  const variants = ensureVariantsConfigSynced();
  const v = variants[vIdx];
  if (!v) return;

  const C = ensureColorsConfigSynced();
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData?.timetable?.variantTables?.[vIdx];

  if (key === 'color' && v.boundToId) {
    v.boundToId = '';
  }

  v[key] = val;

  if (key === 'color') {
    if (vIdx === 0) {
      C.routeLineColor = val;
    }
    if (!v._customThickLine) {
      v.timetableThickLineColor = val;
    }
    if (!v._customClockSvg) {
      v.clockSvgColor = val;
    }
    // 若開啟了「走廊/隧道根據目前班次顏色改變」，修改班次主色時即時同步該班次的走廊與隧道標誌顏色
    if (C.corridorFollowVariantColor !== false && !v._customCorridorSvgBg) {
      v.corridorSvgBg = val;
    }
    if (C.tunnelFollowVariantColor !== false && !v._customTunnelSvgBg) {
      v.tunnelSvgBg = val;
    }
  } else if (key === 'corridorSvgBg') {
    v._customCorridorSvgBg = true;
  } else if (key === 'tunnelSvgBg') {
    v._customTunnelSvgBg = true;
  } else if (key === 'timetableThickLineColor') {
    v._customThickLine = true;
  } else if (key === 'clockSvgColor') {
    v._customClockSvg = true;
  }

  if (key === 'dateHeaderBg') {
    if (!v._customOriginHeaderBg) v.originHeaderBg = val;
    if (!v._customHeadwayHeaderBg) v.headwayHeaderBg = val;
    if (!v._customClockContainerBg) v.clockContainerBg = val;
  } else if (key === 'originHeaderBg') {
    v._customOriginHeaderBg = true;
  } else if (key === 'headwayHeaderBg') {
    v._customHeadwayHeaderBg = true;
  } else if (key === 'clockContainerBg') {
    v._customClockContainerBg = true;
  }

  if (vt && (key === 'routeBoxColor' || key === 'routeBoxTextColor')) {
    vt[key] = val;
    vt._customRouteBoxStyle = true;
  }

  syncBoundVariants();
  renderA4Sheet();
  updateVariantsLivePreviewBarDOM();

  const svgPreviewEl = document.getElementById('special-signs-live-preview-bar');
  if (svgPreviewEl && typeof renderSpecialSignsLivePreviewBarHTML === 'function') {
    svgPreviewEl.innerHTML = renderSpecialSignsLivePreviewBarHTML();
  }

  if (refreshSidebar || [
    'badgeText',
    'originDestText',
    'districtText',
    'fareText',
    'originHeaderText',
    'headwayHeaderText'
  ].includes(key)) {
    renderEditorSidebar();
  }
}

// 相容別名：確保呼叫 updateVariantColor 或 updateVariantColorPalette 均正常運作
function updateVariantColor(vIdx, key, val, refreshSidebar = false) {
  updateVariantColorPalette(vIdx, key, val, refreshSidebar);
}

// 一鍵重設指定班次 (#vIdx) 的所有自訂獨立配色
function resetVariantColorPalette(vIdx) {
  const variants = ensureVariantsConfigSynced();
  const v = variants[vIdx];
  if (!v) return;

  const C = ensureColorsConfigSynced();
  const palette = ['#0d8556', '#0284c7', '#d97706', '#7c3aed', '#dc2626', '#0d9488'];
  const defaultLineColor = vIdx === 0 ? (C.routeLineColor || C.themePrimary || '#0d8556') : palette[vIdx % palette.length];

  v.color = defaultLineColor;
  v.badgeText = C.originDestText === 'black' ? 'black' : 'white';
  v.routeBoxColor = C.routeBoxBg || defaultLineColor;
  v.routeBoxTextColor = C.routeBoxText || '#ffffff';

  const customColorKeys = [
    'nodeColor', 'nodeFillColor',
    'originDestBg', 'originDestText',
    'districtBg', 'districtText',
    'fareBg', 'fareText',
    'mtrSvgBg', 'mtrSvgFg',
    'corridorSvgBg', 'corridorSvgFg', '_customCorridorSvgBg', '_customCorridorSvgFg',
    'tunnelSvgBg', 'tunnelSvgFg', '_customTunnelSvgBg', '_customTunnelSvgFg',
    'promoBannerBg', 'promoBannerText', 'fastClockSvgColor',
    'interchangeDefaultBg', 'interchangeDefaultText',
    'dateHeaderBg', 'dateHeaderText',
    'originHeaderBg', 'originHeaderText',
    'headwayHeaderBg', 'headwayHeaderText',
    'clockContainerBg', 'clockSvgColor',
    'timetableThickLineColor',
    'timetableSlotEvenBg', 'timetableSlotOddBg',
    '_customThickLine', '_customClockSvg',
    '_customOriginHeaderBg', '_customHeadwayHeaderBg', '_customClockContainerBg'
  ];
  customColorKeys.forEach(k => delete v[k]);

  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData?.timetable?.variantTables?.[vIdx];
  if (vt) {
    vt.routeBoxColor = v.routeBoxColor;
    vt.routeBoxTextColor = v.routeBoxTextColor;
    vt._customRouteBoxStyle = false;
  }

  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已重設「${v.name || ('班次 #' + (vIdx + 1))}」的所有獨立配色！`);
}

// 新增分站（若開啟自動適配，當站數跨越 <20 站或 >=20 站門檻時自動重新校準比例與線條長度）
function addStop(insertIndex = null) {
  const newId = 's_' + Date.now();
  const variantStatus = {};
  const variantType = {};
  (appConfig.variants || []).forEach(v => {
    variantStatus[v.id] = 'stop';
    variantType[v.id] = 'normal';
  });

  const newStop = {
    id: newId,
    type: 'normal',
    variantType,
    zh: '新巴士站, 道路名稱',
    en: 'New Bus Stop, Road Name',
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    fare: '',
    fareLabelExtraPx: 0,
    fareLineWidth: '100%',
    coloredBoxWidth: '',
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    symbol: '',
    manualBreakAfter: false,
    landmarks: [],
    variantStatus
  };

  if (insertIndex !== null && insertIndex >= 0 && insertIndex <= appConfig.stops.length) {
    appConfig.stops.splice(insertIndex, 0, newStop);
  } else {
    const destIdx = Math.max(0, appConfig.stops.length - 1);
    appConfig.stops.splice(destIdx, 0, newStop);
  }

  expandedStopId = newId;
  if (appConfig.layout?.autoScaleByStopCount) {
    runSmartAutoRouteMapLayout(appConfig.layout.autoLayoutProfileKey || 'auto', true);
  } else {
    renderA4Sheet();
  }
  renderEditorSidebar();
  showToast('已新增分站（版面比例與線條長度已自動同步）');
}

// 刪除分站（當站數減至少於 20 個時，自動拉大比例與延展線條長度如城巴 629）
function removeStop(stopIdx) {
  if ((appConfig.stops || []).length <= 2) {
    showToast('路線至少需保留起點與終點 2 個分站！', 'rose');
    return;
  }
  const removed = appConfig.stops.splice(stopIdx, 1)[0];
  if (expandedStopId === removed?.id) {
    expandedStopId = appConfig.stops[Math.min(stopIdx, appConfig.stops.length - 1)]?.id || null;
  }

  if (appConfig.layout?.autoScaleByStopCount) {
    runSmartAutoRouteMapLayout(appConfig.layout.autoLayoutProfileKey || 'auto', true);
  } else {
    renderA4Sheet();
  }
  renderEditorSidebar();
  showToast('已刪除分站（版面比例與線條長度已自動重新校準）');
}

// 判斷站點是否屬於具有純色底的站點（起點 origin / 終點 destination / 純色底中途站 colored）
function isStopColoredBgActive(stop, stopIdx = 0, totalStops = 1) {
  if (!stop) return false;
  const isSpecial = Boolean(stop.hasCorridor || stop.hasTunnel || stop.type === 'corridor' || stop.type === 'tunnel');
  if (isSpecial) return false;
  if (stop.isColoredBgStop) return true;
  if (stop.type === 'origin' || stop.type === 'colored' || stop.type === 'destination') return true;
  const variants = appConfig.variants || [];
  return variants.some(v => {
    const st = (stop.variantStatus && stop.variantStatus[v.id]) || 'stop';
    const vt = getStopVariantType(stop, v.id, stopIdx, totalStops);
    return st === 'stop' && (vt === 'origin' || vt === 'colored' || vt === 'destination');
  });
}

// 格式化時段行的顯示文字（開始時間 - 結束時間）
function formatTimetableRowTimeDisplay(row) {
  ensureTimetableRowSplit(row);
  const s = String(row.startTime || '').trim();
  const e = String(row.endTime || '').trim();
  if (s && e) return `${s} - ${e}`;
  return s || e || String(row.time || '').trim();
}

// 清理起點名稱中重複的「開出」與「From」，以便統一強制顯示
function cleanOriginStopZh(rawZh) {
  return String(rawZh || '').trim().replace(/\s*開出\s*$/, '').trim();
}

function cleanOriginStopEn(rawEn) {
  return String(rawEn || '').trim().replace(/^From\s+/i, '').trim();
}

// 自動識別指定班次 (variantId) 的第一個停靠站點中英文名稱
function getVariantFirstStopName(variantId) {
  const stops = appConfig.stops || [];
  const total = stops.length;

  // 1. 優先尋找此班次設為「起點 (origin / origin_number_only)」且停靠的分站
  for (let i = 0; i < total; i++) {
    const s = stops[i];
    const isSpecial = Boolean(s.hasCorridor || s.hasTunnel || s.type === 'corridor' || s.type === 'tunnel');
    if (isSpecial) continue;
    const st = (s.variantStatus && s.variantStatus[variantId]) || 'stop';
    const vType = getStopVariantType(s, variantId, i, total);
    if (st === 'stop' && (vType === 'origin' || vType === 'origin_number_only')) {
      return {
        zh: cleanOriginStopZh(String(s.zh || '').replace(/\\n/g, ' ').replace(/\r?\n|\|/g, ' ')),
        en: cleanOriginStopEn(String(s.en || '').replace(/\\n/g, ' ').replace(/\r?\n|\|/g, ' '))
      };
    }
  }

  // 2. 否則尋找此班次第一個停靠的一般分站
  for (let i = 0; i < total; i++) {
    const s = stops[i];
    const isSpecial = Boolean(s.hasCorridor || s.hasTunnel || s.type === 'corridor' || s.type === 'tunnel');
    if (isSpecial) continue;
    const st = (s.variantStatus && s.variantStatus[variantId]) || 'stop';
    if (st === 'stop') {
      return {
        zh: cleanOriginStopZh(String(s.zh || '').replace(/\\n/g, ' ').replace(/\r?\n|\|/g, ' ')),
        en: cleanOriginStopEn(String(s.en || '').replace(/\\n/g, ' ').replace(/\r?\n|\|/g, ' '))
      };
    }
  }

  // 3. Fallback 到路線第一個分站
  const first = stops[0] || {};
  return {
    zh: cleanOriginStopZh(String(first.zh || '總站').replace(/\\n/g, ' ').replace(/\r?\n|\|/g, ' ')),
    en: cleanOriginStopEn(String(first.en || 'Terminus').replace(/\\n/g, ' ').replace(/\r?\n|\|/g, ' '))
  };
}

// 取得班次時間表最終顯示的起點標題（支援自動識別首站或手動輸入，並強制顯示「開出」與「From」）
function resolveVariantOriginHeaderNames(vt, variant) {
  const mode = vt.originHeaderMode || 'auto';
  const autoNames = getVariantFirstStopName(variant?.id || vt.variantId);

  let baseZh = '';
  let baseEn = '';
  if (mode === 'auto') {
    baseZh = autoNames.zh;
    baseEn = autoNames.en;
  } else {
    baseZh = cleanOriginStopZh(vt.originHeaderZh);
    baseEn = cleanOriginStopEn(vt.originHeaderEn);
  }

  return {
    mode,
    autoZh: autoNames.zh,
    autoEn: autoNames.en,
    baseZh,
    baseEn,
    fullZh: `${baseZh || autoNames.zh}開出`,
    fullEn: `From ${baseEn || autoNames.en}`
  };
}

// 計算軌道寬度、平行線間距、站點圓圈直徑與外環粗度（依 5 份官方路線紙範本比例校準，平行線模式亦保持飽滿圓圈）
function getTrackMetrics() {
  const L = ensureStopAndLineStyleConfigSynced();
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  const isParallel = L.variantDisplayMode === 'parallel_lines' && variants.length > 1;

  const normSize = Math.max(7.5, Number(L.normalNodeSizePx) || 9.8);
  const terminalExtra = (L.terminalNodeExtraPx !== undefined && !isNaN(Number(L.terminalNodeExtraPx)))
    ? Math.max(1.8, Number(L.terminalNodeExtraPx))
    : 2.6;
  const terminalSize = Math.round((normSize + terminalExtra) * 10) / 10;

  const baseLineThickness = Math.max(2.0, Number(L.lineThicknessPx) || 4.2);
  const normStrokeWidth = Math.max(1.8, Number(L.nodeStrokeWidthPx) || 2.3);
  const termStrokeWidth = Math.max(2.2, Number(L.terminalStrokeWidthPx) || 2.9);

  if (isParallel) {
    // 參考 stop1.png (6號線)：平行線間距自動適配飽滿站圈，避免圓圈被壓小
    const rawSpacing = Math.max(8, Number(L.parallelLineSpacingPx) ?? 14.5);
    const spacing = Math.max(rawSpacing, normSize + 3.2);
    const parallelNormSize = Math.min(normSize, spacing - 1.2);
    const parallelTerminalSize = Math.min(terminalSize, spacing + 1.4);
    const badgeSize = Math.min(15.0, Math.max(11.5, spacing - 0.8));
    const maxNode = Math.max(parallelTerminalSize, badgeSize);
    const leftPad = Math.ceil(maxNode / 2) + 2.5;
    const rightPad = 7;
    const trackWidth = leftPad + (variants.length - 1) * spacing + Math.ceil(maxNode / 2) + rightPad;

    const parallelLineThickness = Math.min(baseLineThickness, Math.max(2.8, spacing * 0.42));

    const tracks = variants.map((v, idx) => ({
      variant: v,
      index: idx,
      label: String(idx + 1),
      x: leftPad + idx * spacing,
      color: v.color || C.routeLineColor,
      badgeText: v.badgeText === 'black' ? '#111827' : '#ffffff',
      lineStyle: v.lineStyle === 'dashed' ? 'dashed' : 'solid',
      normSize: parallelNormSize,
      terminalSize: parallelTerminalSize,
      normStrokeWidth: Math.max(1.8, Math.min(normStrokeWidth, parallelNormSize * 0.26)),
      termStrokeWidth: Math.max(2.2, Math.min(termStrokeWidth, parallelTerminalSize * 0.27)),
      badgeSize
    }));

    return {
      isParallel: true,
      trackWidth,
      centerX: tracks[0]?.x || 10,
      lineThickness: parallelLineThickness,
      normSize: parallelNormSize,
      terminalSize: parallelTerminalSize,
      normStrokeWidth,
      termStrokeWidth,
      badgeSize,
      tracks
    };
  }

  // 單一主線模式（stop2.png / stop3.pdf / stop4.pdf / manystop.png 標準比例）
  const badgeSize = Math.round(Math.max(12.5, Math.min(16.5, normSize * 1.38)) * 10) / 10;
  const centerX = Math.max(10.0, Math.ceil(terminalSize / 2) + 2.5);
  const trackWidth = centerX + Math.ceil(terminalSize / 2) + 7;
  return {
    isParallel: false,
    trackWidth,
    centerX,
    lineThickness: baseLineThickness,
    normSize,
    terminalSize,
    normStrokeWidth,
    termStrokeWidth,
    badgeSize,
    tracks: [
      {
        variant: variants[0] || { id: 'v1', color: C.routeLineColor, badgeText: 'white', lineStyle: 'solid' },
        index: 0,
        label: '1',
        x: centerX,
        color: C.routeLineColor,
        badgeText: (variants[0]?.badgeText === 'black') ? '#111827' : '#ffffff',
        lineStyle: 'solid',
        normSize,
        terminalSize,
        normStrokeWidth,
        termStrokeWidth,
        badgeSize
      }
    ]
  };
}

// 站點圓圈獨立 SVG 生成器（補齊 xmlns="http://www.w3.org/2000/svg"，確保導出序列化 100% 穩定）
function createSvgStopNode({ kind, size, primaryColor, fillColor, secondaryColor, strokeWidth }) {
  const L = ensureStopAndLineStyleConfigSynced();
  const s = Math.round(Number(size) * 10) / 10;
  const half = s / 2;
  const defaultInnerFill = appConfig?.colors?.nodeFillColor || '#ffffff';

  if (kind === 'solid_dot') {
    const r = Math.max(2.5, half - 0.6);
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
        <circle cx="${half}" cy="${half}" r="${r}" fill="${primaryColor}" />
      </svg>
    `;
  }

  if (kind === 'partial') {
    const sw = strokeWidth || Math.max(1.8, (Number(L.nodeStrokeWidthPx) || 2.3) * 0.92);
    const r = Math.max(2.6, half - sw / 2 - 0.15);
    const dotR = Math.max(1.6, r * 0.44);
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
        <circle cx="${half}" cy="${half}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="${sw}" stroke-dasharray="2.3 1.5" />
        <circle cx="${half}" cy="${half}" r="${dotR}" fill="${secondaryColor || primaryColor}" />
      </svg>
    `;
  }

  if (kind === 'terminal') {
    const strokeW = strokeWidth || Math.max(2.2, Number(L.terminalStrokeWidthPx) || 2.9);
    const r = Math.max(2.8, half - strokeW / 2 - 0.15);
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
        <circle cx="${half}" cy="${half}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="${strokeW}" />
      </svg>
    `;
  }

  const strokeW = strokeWidth || Math.max(1.8, Number(L.nodeStrokeWidthPx) || 2.3);
  const r = Math.max(2.5, half - strokeW / 2 - 0.15);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
      <circle cx="${half}" cy="${half}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="${strokeW}" />
    </svg>
  `;
}

// 在全欄統一 SVG 座標系中，以 (cx, cy) 為絕對圓心繪製高辨識度同軸站點圓圈（外加微白光暈隔離線條，遠看清晰分明）
function createSvgStopNodeAtCenter({ kind, cx, cy, size, primaryColor, fillColor, secondaryColor, strokeWidth }) {
  const L = ensureStopAndLineStyleConfigSynced();
  const s = Math.round(Number(size) * 100) / 100;
  const half = s / 2;
  const x = Math.round(Number(cx) * 100) / 100;
  const y = Math.round(Number(cy) * 100) / 100;
  const defaultInnerFill = appConfig?.colors?.nodeFillColor || '#ffffff';

  if (kind === 'solid_dot') {
    const r = Math.max(2.5, half - 0.6);
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${primaryColor}" />`;
  }

  if (kind === 'partial') {
    const sw = strokeWidth || Math.max(1.8, (Number(L.nodeStrokeWidthPx) || 2.3) * 0.92);
    const r = Math.max(2.6, half - sw / 2 - 0.1);
    const dotR = Math.max(1.6, r * 0.44);
    return `
      <circle cx="${x}" cy="${y}" r="${Math.round((r + sw / 2 + 0.5) * 100) / 100}" fill="#ffffff" />
      <circle cx="${x}" cy="${y}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="${sw}" stroke-dasharray="2.3 1.5" />
      <circle cx="${x}" cy="${y}" r="${dotR}" fill="${secondaryColor || primaryColor}" />
    `;
  }

  if (kind === 'terminal') {
    const strokeW = strokeWidth || Math.max(2.2, Number(L.terminalStrokeWidthPx) || 2.9);
    const r = Math.max(2.8, half - strokeW / 2 - 0.1);
    return `
      <circle cx="${x}" cy="${y}" r="${Math.round((r + strokeW / 2 + 0.65) * 100) / 100}" fill="#ffffff" />
      <circle cx="${x}" cy="${y}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="${strokeW}" />
    `;
  }

  const strokeW = strokeWidth || Math.max(1.8, Number(L.nodeStrokeWidthPx) || 2.3);
  const r = Math.max(2.5, half - strokeW / 2 - 0.1);
  return `
    <circle cx="${x}" cy="${y}" r="${Math.round((r + strokeW / 2 + 0.45) * 100) / 100}" fill="#ffffff" />
    <circle cx="${x}" cy="${y}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="${strokeW}" />
  `;
}

// 計算「▲ 續左欄 Cont.」與「接右欄 Cont. ➔」的緊湊幾何尺寸（參考 stop1.png 與 manystop.png 比例）
function getContinuationTrackMetrics(metrics) {
  const L = appConfig.layout || {};
  const arrowDims = getRouteArrowDimensions(metrics);
  const w = arrowDims.w;
  const contDashMode = L.contDashStyle || 'standard';
  const numBlocks = contDashMode === 'dense' ? 5 : (contDashMode === 'dotted' ? 3 : 4);

  const gapPx = (L.contBlockGapPx !== undefined && !isNaN(Number(L.contBlockGapPx)))
    ? Math.max(1, Number(L.contBlockGapPx))
    : 2.5;

  const blockH = Math.round(Math.max(2.0, w * 0.52) * 100) / 100;
  const stemInCont = Math.round(Math.max(3.2, w * 0.9) * 100) / 100;
  const shaftLen = Math.round(Math.max(4.8, w * 1.25) * 100) / 100;

  const midZoneH = Math.round((numBlocks * blockH + (numBlocks + 1) * gapPx) * 100) / 100;
  const svgH = Math.ceil(stemInCont + midZoneH + shaftLen + arrowDims.arrowH + 1);

  return {
    w,
    arrowDims,
    contDashMode,
    numBlocks,
    gapPx,
    blockH,
    stemInCont,
    shaftLen,
    midZoneH,
    svgH
  };
}

// 1. 輔助生成單條垂直軌道線 HTML（實線採用 -1px 上下微重疊熔接，確保跨子行成為一條完整無裂縫的線）
function buildSeamlessVerticalTrackLineHTML({
  x,
  top = '-1px',
  bottom = '-1px',
  height = '',
  widthPx = 4.5,
  color = '#0d8556',
  lineStyle = 'solid',
  zIndex = 1
}) {
  const w = Math.max(1, Number(widthPx) || 4.5);
  const leftPx = Math.round((Number(x) - w / 2) * 100) / 100;
  const isDashed = lineStyle === 'dashed';

  const normalizeEdge = (val, dashed) => {
    if (dashed && (val === '-1.2px' || val === '-1px' || val === '-0.8px' || val === '-0.4px' || val === '-0.3px')) {
      return '0px';
    }
    if (!dashed && (val === '0px' || val === '-0.3px' || val === '-0.4px')) {
      return '-1px';
    }
    return val;
  };

  const safeTop = normalizeEdge(top, isDashed);
  const safeBottom = normalizeEdge(bottom, isDashed);

  const posStyle = height
    ? `top:${safeTop}; height:${height};`
    : `top:${safeTop}; bottom:${safeBottom};`;

  if (isDashed) {
    const dashOn = Math.round(Math.max(3.4, w * 0.9) * 10) / 10;
    const dashGap = Math.round(Math.max(2.0, w * 0.52) * 10) / 10;
    const dashPeriod = Math.round((dashOn + dashGap) * 10) / 10;
    return `
      <div style="
        position:absolute;
        left:${leftPx}px;
        ${posStyle}
        width:${w}px;
        background-image:repeating-linear-gradient(to bottom, ${color} 0px, ${color} ${dashOn}px, transparent ${dashOn}px, transparent ${dashPeriod}px);
        z-index:${zIndex};
        pointer-events:none;
      "></div>
    `;
  }

  return `
    <div style="
      position:absolute;
      left:${leftPx}px;
      ${posStyle}
      width:${w}px;
      background-color:${color};
      z-index:${zIndex};
      pointer-events:none;
    "></div>
  `;
}

// 1. 分站上方子行（地區標籤 / 分段收費 / 站名上方轉乘框）軌道欄佔位：
// 線條已由全欄連續 SVG 層統一繪製，此處僅保留精確寬度佔位，徹底消除分段重疊與虛線重置問題
function renderTrackPassThroughHTML(stop, metrics) {
  return `<div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0; pointer-events:none;"></div>`;
}

// 2. 分站下方附屬子行（站名下宣傳框 / 轉乘框 / 注解 / 地標）軌道欄佔位
function renderTrackPassThroughBottomHTML(stop, metrics) {
  return `<div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0; pointer-events:none;"></div>`;
}

// 3. 站與站之間的垂直間距行（不畫碎片線段，交由全欄連續 SVG 線條直接貫穿）
function renderTrackSpacerRowHTML(stop, metrics, direction = 'top', heightPx = 5) {
  if (!stop || heightPx <= 0) return '';
  return `
    <div style="display:flex; align-items:stretch; width:100%; height:${heightPx}px; min-height:${heightPx}px; flex-shrink:0; position:relative; pointer-events:none;">
      <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:100%; flex-shrink:0;"></div>
      <div style="flex:1;"></div>
    </div>
  `;
}

// 1. 根據目前線條粗度與平行線間距，計算箭嘴寬度、高度與柄部嵌入點
function getRouteArrowDimensions(metrics, customLineThickness = null) {
  const L = appConfig.layout || {};
  const w = Math.max(1, Number(customLineThickness ?? metrics.lineThickness) || 4.5);
  const arrowScale = Math.max(0.65, Math.min(1.65, (Number(L.routeArrowScale) || 100) / 100));
  const arrowStyle = L.routeArrowStyle || 'classic'; // 'classic' | 'sharp' | 'wing'

  let arrowW;
  let arrowH;

  if (metrics.isParallel) {
    const spacing = Math.max(6, Number(L.parallelLineSpacingPx) ?? 14);
    const maxAllowedW = Math.max(w + 2.2, spacing * 0.88);
    arrowW = Math.round(Math.min(maxAllowedW, Math.max(w * 2.15, w + 4.2) * arrowScale) * 10) / 10;
    arrowH = Math.round(Math.max(w * 1.35, 5.4) * arrowScale * 10) / 10;
  } else {
    arrowW = Math.round(Math.max(w * 2.35, w + 5.2) * arrowScale * 10) / 10;
    arrowH = Math.round(Math.max(w * 1.45, 6.2) * arrowScale * 10) / 10;
  }

  return {
    w,
    arrowW,
    arrowHalfW: Math.round((arrowW / 2) * 100) / 100,
    arrowH,
    arrowStyle
  };
}

// 2. 生成向上或向下箭嘴的 SVG Polygon 座標與線條無縫接合點 Y
function buildRouteArrowPolygonPoints(cx, tipY, arrowH, arrowHalfW, dir = 'down', arrowStyle = 'classic') {
  const x = Math.round(Number(cx) * 100) / 100;
  const tY = Math.round(Number(tipY) * 100) / 100;
  const h = Math.max(3, Number(arrowH) || 6);
  const hw = Math.max(2, Number(arrowHalfW) || 4.5);

  if (dir === 'up') {
    const baseY = Math.round((tY + h) * 100) / 100;
    if (arrowStyle === 'wing') {
      const notchY = Math.round((baseY - h * 0.24) * 100) / 100;
      return {
        points: `${x},${tY} ${Math.round((x - hw) * 100) / 100},${baseY} ${x},${notchY} ${Math.round((x + hw) * 100) / 100},${baseY}`,
        shaftJoinY: Math.round((notchY - 0.5) * 100) / 100,
        baseY
      };
    }
    if (arrowStyle === 'sharp') {
      const sharpH = Math.round(h * 1.15 * 100) / 100;
      const sharpBaseY = Math.round((tY + sharpH) * 100) / 100;
      const sharpHw = Math.round(hw * 0.9 * 100) / 100;
      return {
        points: `${x},${tY} ${Math.round((x - sharpHw) * 100) / 100},${sharpBaseY} ${Math.round((x + sharpHw) * 100) / 100},${sharpBaseY}`,
        shaftJoinY: Math.round((sharpBaseY - 0.6) * 100) / 100,
        baseY: sharpBaseY
      };
    }
    return {
      points: `${x},${tY} ${Math.round((x - hw) * 100) / 100},${baseY} ${Math.round((x + hw) * 100) / 100},${baseY}`,
      shaftJoinY: Math.round((baseY - 0.6) * 100) / 100,
      baseY
    };
  }

  // dir === 'down' (終點箭嘴 & 接右欄 Cont. ➔)
  const baseY = Math.round((tY - h) * 100) / 100;
  if (arrowStyle === 'wing') {
    const notchY = Math.round((baseY + h * 0.24) * 100) / 100;
    return {
      points: `${x},${tY} ${Math.round((x - hw) * 100) / 100},${baseY} ${x},${notchY} ${Math.round((x + hw) * 100) / 100},${baseY}`,
      shaftJoinY: Math.round((notchY + 0.5) * 100) / 100,
      baseY
    };
  }
  if (arrowStyle === 'sharp') {
    const sharpH = Math.round(h * 1.15 * 100) / 100;
    const sharpBaseY = Math.round((tY - sharpH) * 100) / 100;
    const sharpHw = Math.round(hw * 0.9 * 100) / 100;
    return {
      points: `${Math.round((x - sharpHw) * 100) / 100},${sharpBaseY} ${Math.round((x + sharpHw) * 100) / 100},${sharpBaseY} ${x},${tY}`,
      shaftJoinY: Math.round((sharpBaseY + 0.6) * 100) / 100,
      baseY: sharpBaseY
    };
  }
  return {
    points: `${Math.round((x - hw) * 100) / 100},${baseY} ${Math.round((x + hw) * 100) / 100},${baseY} ${x},${tY}`,
    shaftJoinY: Math.round((baseY + 0.6) * 100) / 100,
    baseY
  };
}

// 4. 在全欄統一 SVG 座標系內繪製「▲ 續左欄 Cont.」或「接右欄 Cont. ➔」的 4 格短方塊 (3px 空隙) + 實心箭嘴柄 + 箭嘴
// 註：靠近站點一側的實心直線段已直接併入全欄唯一連續主線 (mergedSegments)，只在此處繪製短方塊與箭嘴，確保主線 100% 不斷開
function buildContinuationTrackSvgElements({
  x,
  zoneTopY = 0,
  zoneBottomY = 44,
  color,
  dir = 'down', // 'down': 接右欄 Cont. ➔ | 'up': ▲ 續左欄 Cont.
  contMetrics,
  drawDetachedStem = false
}) {
  const cx = Math.round(Number(x) * 100) / 100;
  const { w, arrowDims, numBlocks, gapPx, blockH, stemInCont, shaftLen } = contMetrics;
  const rectLeft = Math.round((cx - w / 2) * 100) / 100;

  if (dir === 'down') {
    // 「接右欄 Cont. ➔」：主線已無縫延伸至 stemEndY = zoneTopY + stemInCont
    const stemEndY = Math.round((zoneTopY + stemInCont) * 100) / 100;

    let blocksSVG = '';
    for (let i = 0; i < numBlocks; i++) {
      const by = Math.round((stemEndY + gapPx * (i + 1) + blockH * i) * 100) / 100;
      blocksSVG += `<rect x="${rectLeft}" y="${by}" width="${w}" height="${blockH}" fill="${color}" />`;
    }

    const shaftStartY = Math.round((stemEndY + numBlocks * blockH + (numBlocks + 1) * gapPx) * 100) / 100;
    const tipY = Math.round((shaftStartY + shaftLen + arrowDims.arrowH) * 100) / 100;
    const arrowInfo = buildRouteArrowPolygonPoints(cx, tipY, arrowDims.arrowH, arrowDims.arrowHalfW, 'down', arrowDims.arrowStyle);

    return `
      ${drawDetachedStem ? `<line x1="${cx}" y1="${zoneTopY}" x2="${cx}" y2="${stemEndY}" stroke="${color}" stroke-width="${w}" stroke-linecap="butt" />` : ''}
      ${blocksSVG}
      <line x1="${cx}" y1="${shaftStartY}" x2="${cx}" y2="${arrowInfo.shaftJoinY}" stroke="${color}" stroke-width="${w}" stroke-linecap="butt" />
      <polygon points="${arrowInfo.points}" fill="${color}" />
    `;
  }

  // dir === 'up'（「▲ 續左欄 Cont.」）：由底部 stemStartY = zoneBottomY - stemInCont 向上排列 4 格短方塊 (3px 空隙) 與向上箭嘴
  const stemStartY = Math.round((zoneBottomY - stemInCont) * 100) / 100;
  const topShaftEndY = Math.round((stemStartY - (numBlocks * blockH + (numBlocks + 1) * gapPx)) * 100) / 100;
  const tipY = Math.round((topShaftEndY - shaftLen - arrowDims.arrowH) * 100) / 100;
  const arrowInfo = buildRouteArrowPolygonPoints(cx, tipY, arrowDims.arrowH, arrowDims.arrowHalfW, 'up', arrowDims.arrowStyle);

  let blocksSVG = '';
  for (let i = 0; i < numBlocks; i++) {
    const by = Math.round((topShaftEndY + gapPx * (i + 1) + blockH * i) * 100) / 100;
    blocksSVG += `<rect x="${rectLeft}" y="${by}" width="${w}" height="${blockH}" fill="${color}" />`;
  }

  return `
    <polygon points="${arrowInfo.points}" fill="${color}" />
    <line x1="${cx}" y1="${arrowInfo.shaftJoinY}" x2="${cx}" y2="${topShaftEndY}" stroke="${color}" stroke-width="${w}" stroke-linecap="butt" />
    ${blocksSVG}
    ${drawDetachedStem ? `<line x1="${cx}" y1="${stemStartY}" x2="${cx}" y2="${zoneBottomY}" stroke="${color}" stroke-width="${w}" stroke-linecap="butt" />` : ''}
  `;
}

// 6. 在全欄統一 SVG 座標系中，以 (cx, cy) 為絕對中心繪製走廊 (353) 或隧道標誌（確保標誌與班次線條 100% 正對中間）
function createSvgSpecialSignAtCenter({ kind, cx, cy, size, bgColor, fgColor }) {
  const s = Math.round(Number(size) * 100) / 100;
  const leftX = Math.round((Number(cx) - s / 2) * 100) / 100;
  const topY = Math.round((Number(cy) - s / 2) * 100) / 100;
  const scale = Math.round((s / 100) * 10000) / 10000;

  if (kind === 'tunnel') {
    return `
      <g transform="translate(${leftX}, ${topY}) scale(${scale})">
        <rect x="2" y="2" width="96" height="96" rx="14" ry="14" fill="${bgColor}" stroke="#ffffff" stroke-width="4" />
        <path d="M 15 56 L 15 24 C 15 19.5, 18.5 16, 23 16 L 77 16 C 81.5 16, 85 19.5, 85 24 L 85 56 L 69 56 L 69 41 A 19 17.5 0 0 0 31 41 L 31 56 Z" fill="${fgColor}" />
        <polygon points="33.5,52 46.8,52 46.8,85 16,85" fill="${fgColor}" />
        <polygon points="53.2,52 66.5,52 84,85 53.2,85" fill="${fgColor}" />
      </g>
    `;
  }

  return `
    <g transform="translate(${leftX}, ${topY}) scale(${scale})">
      <rect x="2" y="2" width="96" height="96" rx="14" ry="14" fill="${bgColor}" stroke="#ffffff" stroke-width="4" />
      <polygon points="37,15 46.5,15 46.5,44 26,44" fill="${fgColor}" />
      <polygon points="53.5,15 63,15 74,44 53.5,44" fill="${fgColor}" />
      <rect x="13" y="46.5" width="74" height="4.2" fill="${fgColor}" />
      <polygon points="24,54 46.5,54 46.5,85 14,85" fill="${fgColor}" />
      <polygon points="53.5,54 76,54 86,85 53.5,85" fill="${fgColor}" />
    </g>
  `;
}

// 子像素精度量度元素相對於單欄容器 (colEl) 的真實未縮放 Y 座標與高度（以畫布基準寬 794px 計算精準比例，消除 offsetHeight 整數捨入誤差）
function getRelativeOffsetTopInCol(el, colEl) {
  if (!el || !colEl) return 0;
  const sheet = document.getElementById('a4-sheet');
  const sheetRect = sheet ? sheet.getBoundingClientRect() : null;
  const scale = (sheetRect && sheetRect.width > 0) ? (sheetRect.width / 794) : 1;
  const colRect = colEl.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return (elRect.top - colRect.top) / (scale || 1);
}

function getRelativeHeightInCol(el, colEl) {
  if (!el || !colEl) return 0;
  const sheet = document.getElementById('a4-sheet');
  const sheetRect = sheet ? sheet.getBoundingClientRect() : null;
  const scale = (sheetRect && sheetRect.width > 0) ? (sheetRect.width / 794) : 1;
  const elRect = el.getBoundingClientRect();
  return elRect.height / (scale || 1);
}

// 調整預覽畫布縮放比例（使用 translateZ(0) 3D 硬件加速層鎖定 1:1 線性字距，避免縮放時字距重排）
function adjustZoom(delta) {
  currentZoom = Math.min(1.5, Math.max(0.4, Math.round((currentZoom + delta) * 100) / 100));
  const wrapper = document.getElementById('a4-scale-wrapper');
  const label = document.getElementById('zoom-label');
  if (wrapper) {
    wrapper.style.transform = `scale(${currentZoom}) translateZ(0)`;
    wrapper.style.marginBottom = `${Math.round((currentZoom - 1) * 1123)}px`;
  }
  if (label) {
    label.textContent = `${Math.round(currentZoom * 100)}%`;
  }
  requestAnimationFrame(() => renderAllColumnsContinuousTracks());
}

// 自動適應視窗高度縮放
function fitZoom() {
  const viewport = document.getElementById('preview-viewport');
  if (!viewport) return;
  const availH = viewport.clientHeight - 48;
  const availW = viewport.clientWidth - 48;
  const scaleH = availH / 1123;
  const scaleW = availW / 794;
  currentZoom = Math.min(1.15, Math.max(0.45, Math.round(Math.min(scaleH, scaleW) * 100) / 100));
  adjustZoom(0);
}

// 全欄一體化連續班次線條 + 隧道與走廊標誌動態跟隨班次顏色 + 站點圓圈同軸渲染引擎
function renderAllColumnsContinuousTracks() {
  const sheet = document.getElementById('a4-sheet');
  if (!sheet) return;

  const C = ensureColorsConfigSynced();
  const metrics = getTrackMetrics();
  const enrichedStops = computeStopsWithFareZones(appConfig.stops);
  const columns = splitStopsIntoColumns(enrichedStops);
  const variants = appConfig.variants || [];
  const contMetrics = getContinuationTrackMetrics(metrics);
  const arrowDims = contMetrics.arrowDims;
  const w = contMetrics.w;

  const mainDashOn = Math.round(Math.max(4.2, w * 1.05) * 10) / 10;
  const mainDashGap = Math.round(Math.max(2.6, w * 0.65) * 10) / 10;

  columns.forEach((colStops, colIdx) => {
    const colEl = sheet.querySelector(`[data-map-col="${colIdx}"]`);
    const svgEl = sheet.querySelector(`[data-col-svg="${colIdx}"]`);
    if (!colEl || !svgEl) return;

    const colH = Math.max(10, Math.round((colEl.offsetHeight || getRelativeHeightInCol(colEl, colEl) || 1000) * 100) / 100);
    svgEl.style.width = `${metrics.trackWidth}px`;
    svgEl.style.height = `${colH}px`;
    svgEl.setAttribute('width', String(metrics.trackWidth));
    svgEl.setAttribute('height', String(colH));
    svgEl.setAttribute('viewBox', `0 0 ${metrics.trackWidth} ${colH}`);
    svgEl.setAttribute('preserveAspectRatio', 'none');

    const stopGeom = colStops.map((stop) => {
      const stopEl = colEl.querySelector(`[data-stop-item="${stop.id}"]`);
      const mainRowEl = colEl.querySelector(`[data-stop-main-row="${stop.id}"]`);
      const markerCellEl = colEl.querySelector(`[data-stop-marker-cell="${stop.id}"]`) || mainRowEl;
      const contTopEl = colEl.querySelector(`[data-cont-top="${stop.id}"]`);
      const contBotEl = colEl.querySelector(`[data-cont-bot="${stop.id}"]`);

      const stopTopY = stopEl ? getRelativeOffsetTopInCol(stopEl, colEl) : 0;
      const stopBottomY = stopEl ? (stopTopY + getRelativeHeightInCol(stopEl, colEl)) : stopTopY;

      const markerTopY = markerCellEl ? getRelativeOffsetTopInCol(markerCellEl, colEl) : stopTopY;
      const markerH = markerCellEl ? getRelativeHeightInCol(markerCellEl, colEl) : 18;
      const nodeCenterY = Math.round((markerTopY + markerH / 2) * 100) / 100;

      const hasTopCont = Boolean(contTopEl);
      const contTopStartY = contTopEl ? Math.round(getRelativeOffsetTopInCol(contTopEl, colEl) * 100) / 100 : stopTopY;
      const contTopBottomY = contTopEl
        ? Math.round((contTopStartY + getRelativeHeightInCol(contTopEl, colEl)) * 100) / 100
        : stopTopY;

      const hasBotCont = Boolean(contBotEl);
      const contBotTopY = contBotEl
        ? Math.round(getRelativeOffsetTopInCol(contBotEl, colEl) * 100) / 100
        : stopBottomY;
      const contBotBottomY = contBotEl
        ? Math.round((contBotTopY + getRelativeHeightInCol(contBotEl, colEl)) * 100) / 100
        : stopBottomY;

      return {
        stop,
        stopTopY,
        stopBottomY,
        nodeCenterY,
        hasTopCont,
        contTopStartY,
        contTopBottomY,
        hasBotCont,
        contBotTopY,
        contBotBottomY
      };
    });

    let linesAndArrowsContent = '';
    let nodesOverlayContent = '';

    // 第一層：繪製各班次的完整連續主線、終點箭嘴，以及續欄/接欄處的 4 格短方塊 + 箭嘴
    metrics.tracks.forEach((t) => {
      const isDashedTrack = metrics.isParallel
        ? (t.lineStyle === 'dashed')
        : (variants.length === 1 && variants[0]?.lineStyle === 'dashed');
      const dashAttr = isDashedTrack ? `stroke-dasharray="${mainDashOn} ${mainDashGap}"` : '';

      const atomicParts = [];

      stopGeom.forEach((g, i) => {
        const stop = g.stop;
        const forceTop = Boolean(stop.contFromLeft) || (colIdx > 0 && i === 0);
        const forceBot = Boolean(stop.contToRight) || Boolean(stop.manualBreakAfter) || (colIdx < columns.length - 1 && i === colStops.length - 1);

        let showTop = false;
        let showBottom = false;
        let isDest = false;
        let isTerm = false;
        let isActiveTrack = true;

        if (metrics.isParallel) {
          const vState = stop.variantLineState?.[t.variant.id];
          if (vState) {
            showTop = Boolean(vState.showTopLine);
            showBottom = Boolean(vState.showBottomLine);
            isDest = Boolean(vState.isVariantDest);
            isTerm = Boolean(vState.isTerminalNode);
            isActiveTrack = vState.status !== 'none';
          }
        } else {
          const vStates = variants.map(v => stop.variantLineState?.[v.id]).filter(Boolean);
          showTop = vStates.length > 0 ? vStates.some(s => s.showTopLine) : !stop.isOrigin;
          showBottom = vStates.length > 0 ? vStates.some(s => s.showBottomLine) : !stop.isDest;
          isDest = (vStates.length > 0 ? vStates.some(s => s.isVariantDest) : false) || Boolean(stop.isDest);
          isTerm = (vStates.length > 0 ? vStates.some(s => s.isTerminalNode) : false) || Boolean(stop.isOrigin || stop.isDest);
        }

        const nodeSize = isTerm ? t.terminalSize : t.normSize;
        const nodeRadius = nodeSize / 2;

        const hasTopContForTrack = g.hasTopCont && (showTop || (forceTop && isActiveTrack));
        const hasBotContForTrack = g.hasBotCont && (showBottom || (forceBot && isActiveTrack));

        if (hasTopContForTrack) {
          linesAndArrowsContent += buildContinuationTrackSvgElements({
            x: t.x,
            zoneTopY: g.contTopStartY,
            zoneBottomY: g.contTopBottomY,
            color: t.color,
            dir: 'up',
            contMetrics,
            drawDetachedStem: isDashedTrack
          });
        }

        if (showTop || hasTopContForTrack) {
          const startY = hasTopContForTrack
            ? (isDashedTrack ? g.contTopBottomY : Math.round((g.contTopBottomY - contMetrics.stemInCont) * 100) / 100)
            : g.stopTopY;

          if (isDest && !hasTopContForTrack) {
            const tipY = Math.round((g.nodeCenterY - nodeRadius - 0.7) * 100) / 100;
            const arrowInfo = buildRouteArrowPolygonPoints(
              t.x,
              tipY,
              arrowDims.arrowH,
              arrowDims.arrowHalfW,
              'down',
              arrowDims.arrowStyle
            );
            atomicParts.push({
              stopIdx: i,
              half: 'upper',
              startY,
              endY: arrowInfo.shaftJoinY,
              canMergeFromPrevLower: !hasTopContForTrack,
              canMergeToOwnLower: false,
              destArrowPoints: arrowInfo.points
            });
          } else {
            atomicParts.push({
              stopIdx: i,
              half: 'upper',
              startY,
              endY: g.nodeCenterY,
              canMergeFromPrevLower: !hasTopContForTrack,
              canMergeToOwnLower: true,
              destArrowPoints: null
            });
          }
        }

        const allowLower = (showBottom && (!isDest || hasBotContForTrack)) || hasBotContForTrack;
        if (allowLower) {
          const endY = hasBotContForTrack
            ? (isDashedTrack ? g.contBotTopY : Math.round((g.contBotTopY + contMetrics.stemInCont) * 100) / 100)
            : g.stopBottomY;

          atomicParts.push({
            stopIdx: i,
            half: 'lower',
            startY: g.nodeCenterY,
            endY,
            canMergeFromOwnUpper: (showTop || hasTopContForTrack) && !isDest,
            canMergeToNextUpper: !hasBotContForTrack,
            destArrowPoints: null
          });
        }

        if (hasBotContForTrack) {
          linesAndArrowsContent += buildContinuationTrackSvgElements({
            x: t.x,
            zoneTopY: g.contBotTopY,
            zoneBottomY: g.contBotBottomY,
            color: t.color,
            dir: 'down',
            contMetrics,
            drawDetachedStem: isDashedTrack
          });
        }
      });

      const mergedSegments = [];
      atomicParts.forEach((part) => {
        const prev = mergedSegments[mergedSegments.length - 1];
        if (!prev) {
          mergedSegments.push({ ...part });
          return;
        }

        const isSameStopMerge =
          prev.stopIdx === part.stopIdx &&
          prev.half === 'upper' &&
          part.half === 'lower' &&
          prev.canMergeToOwnLower &&
          part.canMergeFromOwnUpper;

        const isNextStopMerge =
          part.stopIdx === prev.stopIdx + 1 &&
          prev.half === 'lower' &&
          part.half === 'upper' &&
          prev.canMergeToNextUpper &&
          part.canMergeFromPrevLower;

        if (isSameStopMerge || isNextStopMerge) {
          prev.endY = part.endY;
          prev.stopIdx = part.stopIdx;
          prev.half = part.half;
          prev.canMergeToOwnLower = part.canMergeToOwnLower;
          prev.canMergeToNextUpper = part.canMergeToNextUpper;
          prev.destArrowPoints = part.destArrowPoints;
        } else {
          mergedSegments.push({ ...part });
        }
      });

      mergedSegments.forEach((seg) => {
        if (seg.endY > seg.startY + 0.5) {
          linesAndArrowsContent += `
            <line
              x1="${t.x}"
              y1="${Math.round(seg.startY * 100) / 100}"
              x2="${t.x}"
              y2="${Math.round(seg.endY * 100) / 100}"
              stroke="${t.color}"
              stroke-width="${w}"
              stroke-linecap="butt"
              ${dashAttr}
            />
          `;
        }
        if (seg.destArrowPoints) {
          linesAndArrowsContent += `
            <polygon points="${seg.destArrowPoints}" fill="${t.color}" />
          `;
        }
      });
    });

    // 第二層：在同一個 SVG 座標系頂層繪製所有分站圓圈、走廊 353 與隧道標誌（支援根據目前班次顏色而改變）
    stopGeom.forEach((g) => {
      const stop = g.stop;
      const cy = g.nodeCenterY;
      const isTunnelStop = Boolean(stop.isTunnelStop || stop.hasTunnel || stop.type === 'tunnel');
      const isCorridorStop = !isTunnelStop && Boolean(stop.isCorridorStop || stop.hasCorridor || stop.type === 'corridor');

      if (isCorridorStop || isTunnelStop) {
        const signSize = Math.max(15.5, Number(appConfig.layout.normalNodeSizePx || 9.5) + 6.0);
        if (metrics.isParallel) {
          metrics.tracks.forEach((t) => {
            const v = t.variant || {};
            const vState = stop.variantLineState?.[v.id];
            if (!vState || !vState.showNode || !(vState.isVariantCorridor || vState.isVariantTunnel)) return;

            const parallelSignSize = Math.min(signSize, (appConfig.layout.parallelLineSpacingPx || 14) + 2.5);
            const signColors = isTunnelStop
              ? resolveTunnelSignColors(v, C)
              : resolveCorridorSignColors(v, C);

            nodesOverlayContent += createSvgSpecialSignAtCenter({
              kind: isTunnelStop ? 'tunnel' : 'corridor',
              cx: t.x,
              cy,
              size: parallelSignSize,
              bgColor: signColors.bg,
              fgColor: signColors.fg
            });
          });
        } else {
          const activeVariantObj = getStopEffectiveVariant(stop) || variants[0] || {};
          const signColors = isTunnelStop
            ? resolveTunnelSignColors(activeVariantObj, C)
            : resolveCorridorSignColors(activeVariantObj, C);

          nodesOverlayContent += createSvgSpecialSignAtCenter({
            kind: isTunnelStop ? 'tunnel' : 'corridor',
            cx: metrics.centerX,
            cy,
            size: signSize,
            bgColor: signColors.bg,
            fgColor: signColors.fg
          });
        }
        return;
      }

      if (metrics.isParallel) {
        metrics.tracks.forEach((t) => {
          const v = t.variant || {};
          const vState = stop.variantLineState?.[v.id];
          if (!vState || !vState.showNode) return;

          const isTerm = Boolean(vState.isTerminalNode);
          const nodeSize = isTerm ? t.terminalSize : t.normSize;
          const nodeStrokeColor = v.nodeColor || C.nodeColor || t.color;
          const nodeInnerFill = v.nodeFillColor || C.nodeFillColor || '#ffffff';

          nodesOverlayContent += createSvgStopNodeAtCenter({
            kind: isTerm ? 'terminal' : 'normal',
            cx: t.x,
            cy,
            size: nodeSize,
            primaryColor: nodeStrokeColor,
            fillColor: nodeInnerFill
          });
        });
      } else {
        const vStates = variants.map(v => ({
          variant: v,
          state: stop.variantLineState?.[v.id] || {
            status: 'stop',
            showNode: true,
            isTerminalNode: stop.isOrigin || stop.isDest
          }
        }));

        const activeVariants = vStates.filter(v => v.state.hasActiveStops !== false);
        const allStop = activeVariants.length > 0 && activeVariants.every(v => v.state.showNode);
        const noneStop = vStates.every(v => !v.state.showNode);
        if (noneStop) return;

        const primaryStops = vStates[0] ? vStates[0].state.showNode : true;
        const isTerminal = vStates.some(v => v.state.isTerminalNode);
        const nodeSize = isTerminal ? metrics.terminalSize : metrics.normSize;

        const effVar = getStopEffectiveVariant(stop) || variants[0] || {};
        const primaryNodeColor = effVar.nodeColor || C.nodeColor || effVar.color || C.routeLineColor;
        const primaryNodeFill = effVar.nodeFillColor || C.nodeFillColor || '#ffffff';

        if (isTerminal) {
          nodesOverlayContent += createSvgStopNodeAtCenter({
            kind: 'terminal',
            cx: metrics.centerX,
            cy,
            size: nodeSize,
            primaryColor: primaryNodeColor,
            fillColor: primaryNodeFill
          });
        } else if (allStop) {
          nodesOverlayContent += createSvgStopNodeAtCenter({
            kind: 'normal',
            cx: metrics.centerX,
            cy,
            size: nodeSize,
            primaryColor: primaryNodeColor,
            fillColor: primaryNodeFill
          });
        } else {
          const specialColor = variants[1] ? (variants[1].nodeColor || variants[1].color) : C.routeLineColor;
          nodesOverlayContent += createSvgStopNodeAtCenter({
            kind: 'partial',
            cx: metrics.centerX,
            cy,
            size: nodeSize + 0.8,
            primaryColor: primaryNodeColor,
            fillColor: primaryStops ? primaryNodeFill : specialColor,
            secondaryColor: primaryNodeColor
          });
        }
      }
    });

    svgEl.innerHTML = linesAndArrowsContent + nodesOverlayContent;
  });
}

// 1. 渲染上方續欄箭嘴容器 ("▲ 續左欄 Cont." 或 無前站無字續欄箭嘴)：
// 向量箭嘴與 4 格短方塊 (3px 空隙) 統一由全欄 SVG (renderAllColumnsContinuousTracks) 同軸繪製，此處負責精確高度、圓圈班次編號與文字排版
function renderColumnContinuationTopHTML(colIndex, targetStop, metrics) {
  const C = appConfig.colors;
  const L = appConfig.layout;
  const nodeNameGapPx = Math.max(0, Number(L.nodeToNameGapPx) ?? 6);
  const forceShow = Boolean(targetStop?.contFromLeft);
  const hideText = forceShow;
  const showContNumbers = Boolean(L.contFromLeftShowNumbers);

  const contMetrics = getContinuationTrackMetrics(metrics);
  const svgH = contMetrics.svgH;
  const bSize = metrics.badgeSize || 13.5;
  const fontSize = Math.max(6.8, bSize - 4.0);
  const arrowOffsetTop = showContNumbers ? (Math.ceil(bSize) + 2) : 0;
  const totalHeight = arrowOffsetTop + svgH;

  if (metrics.isParallel) {
    let anyActive = false;
    let badgesHTML = '';

    metrics.tracks.forEach(t => {
      const vState = targetStop?.variantLineState?.[t.variant.id];
      const shouldDraw = vState ? (vState.showTopLine || (forceShow && vState.status !== 'none')) : forceShow;
      if (!shouldDraw) return;
      anyActive = true;

      if (showContNumbers) {
        const badgeLeftPx = Math.round((t.x - bSize / 2) * 100) / 100;
        badgesHTML += `
          <div style="
            position:absolute;
            left:${badgeLeftPx}px;
            top:0.5px;
            width:${bSize}px;
            height:${bSize}px;
            border-radius:9999px;
            background-color:${t.color};
            color:${t.badgeText};
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:${fontSize}px;
            font-weight:900;
            line-height:1;
            box-shadow:0 0 0 1.2px #ffffff;
            z-index:4;
          ">
            <span class="sheet-text-fix" style="line-height:1;">${esc(t.label)}</span>
          </div>
        `;
      }
    });

    if (!anyActive && !forceShow) return '';

    return `
      <div style="display:flex; flex-direction:column; width:100%; flex-shrink:0; position:relative; z-index:3;">
        ${showContNumbers ? `
          <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:${arrowOffsetTop}px; flex-shrink:0;">
            ${badgesHTML}
          </div>
        ` : ''}
        <div data-cont-top="${esc(targetStop?.id || '')}" style="display:flex; align-items:center; height:${svgH}px; min-height:${svgH}px; width:100%; flex-shrink:0; position:relative;">
          <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:${svgH}px; flex-shrink:0;"></div>
          ${!hideText ? `
            <div style="height:${svgH}px; font-size:7.8px; font-weight:800; letter-spacing:0.01em; color:${C.routeLineColor}; padding-left:${nodeNameGapPx}px; white-space:nowrap; line-height:1.1; display:flex; align-items:center; gap:2.5px;">
              <span class="sheet-text-fix" style="font-size:7px; line-height:1;">▲</span>
              <span class="sheet-text-fix">續左欄 Cont.</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  const anyShowTop = forceShow || (appConfig.variants || []).some(v => targetStop?.variantLineState?.[v.id]?.showTopLine);
  if (!anyShowTop) return '';

  const singleColor = C.routeLineColor || '#0d8556';
  const singleText = (appConfig.variants?.[0]?.badgeText === 'black') ? '#111827' : '#ffffff';
  const badgeLeftPx = Math.round((metrics.centerX - bSize / 2) * 100) / 100;

  return `
    <div style="display:flex; flex-direction:column; width:100%; flex-shrink:0; position:relative; z-index:3;">
      ${showContNumbers ? `
        <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:${arrowOffsetTop}px; flex-shrink:0;">
          <div style="
            position:absolute;
            left:${badgeLeftPx}px;
            top:0.5px;
            width:${bSize}px;
            height:${bSize}px;
            border-radius:9999px;
            background-color:${singleColor};
            color:${singleText};
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:${fontSize}px;
            font-weight:900;
            line-height:1;
            box-shadow:0 0 0 1.2px #ffffff;
            z-index:4;
          ">
            <span class="sheet-text-fix" style="line-height:1;">1</span>
          </div>
        </div>
      ` : ''}
      <div data-cont-top="${esc(targetStop?.id || '')}" style="display:flex; align-items:center; height:${svgH}px; min-height:${svgH}px; width:100%; flex-shrink:0; position:relative;">
        <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:${svgH}px; flex-shrink:0;"></div>
        ${!hideText ? `
          <div style="height:${svgH}px; font-size:7.8px; font-weight:800; letter-spacing:0.01em; color:${singleColor}; padding-left:${nodeNameGapPx}px; white-space:nowrap; line-height:1.1; display:flex; align-items:center; gap:2.5px;">
            <span class="sheet-text-fix" style="font-size:7px; line-height:1;">▲</span>
            <span class="sheet-text-fix">續左欄 Cont.</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// 2. 渲染下方接欄箭嘴容器 ("接右欄 Cont. ➔" 或 無後站無字接欄箭嘴)：
// 向量箭嘴與 4 格短方塊 (3px 空隙) 統一由全欄 SVG (renderAllColumnsContinuousTracks) 同軸繪製
function renderColumnContinuationBottomHTML(colIndex, targetStop, metrics) {
  const C = appConfig.colors;
  const L = appConfig.layout;
  const nodeNameGapPx = Math.max(0, Number(L.nodeToNameGapPx) ?? 6);
  const forceShow = Boolean(targetStop?.contToRight) || Boolean(targetStop?.manualBreakAfter);
  const hideText = Boolean(targetStop?.contToRight);

  const contMetrics = getContinuationTrackMetrics(metrics);
  const svgH = contMetrics.svgH;

  if (metrics.isParallel) {
    const anyActive = metrics.tracks.some(t => {
      const vState = targetStop?.variantLineState?.[t.variant.id];
      return vState ? (vState.showBottomLine || (forceShow && vState.status !== 'none')) : forceShow;
    });
    if (!anyActive && !forceShow) return '';

    return `
      <div data-cont-bot="${esc(targetStop?.id || '')}" style="display:flex; align-items:center; height:${svgH}px; min-height:${svgH}px; width:100%; margin-top:0px; flex-shrink:0; position:relative; z-index:3;">
        <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:${svgH}px; flex-shrink:0;"></div>
        ${!hideText ? `
          <div style="font-size:7.8px; font-weight:800; letter-spacing:0.01em; color:${C.routeLineColor}; padding-left:${nodeNameGapPx}px; white-space:nowrap; line-height:1.1; display:flex; align-items:center; gap:2.5px;">
            <span class="sheet-text-fix">接右欄 Cont.</span>
            <span class="sheet-text-fix" style="font-size:8px; line-height:1;">➔</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  const anyShowBottom = forceShow || (appConfig.variants || []).some(v => targetStop?.variantLineState?.[v.id]?.showBottomLine);
  if (!anyShowBottom) return '';

  const singleColor = C.routeLineColor || '#0d8556';

  return `
    <div data-cont-bot="${esc(targetStop?.id || '')}" style="display:flex; align-items:center; height:${svgH}px; min-height:${svgH}px; width:100%; margin-top:0px; flex-shrink:0; position:relative; z-index:3;">
      <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:${svgH}px; flex-shrink:0;"></div>
      ${!hideText ? `
        <div style="font-size:7.8px; font-weight:800; letter-spacing:0.01em; color:${singleColor}; padding-left:${nodeNameGapPx}px; white-space:nowrap; line-height:1.1; display:flex; align-items:center; gap:2.5px;">
          <span class="sheet-text-fix">接右欄 Cont.</span>
          <span class="sheet-text-fix" style="font-size:8px; line-height:1;">➔</span>
        </div>
      ` : ''}
    </div>
  `;
}

// 3. 渲染主站名行的軌道標記定位欄（實體圓圈與標誌已整合至全欄 SVG 頂層，確保與班次線條 100% 同軸置中）
function renderTrackMarkerCenteredHTML(stop, metrics) {
  return `
    <div data-stop-marker-cell="${esc(stop.id)}" style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0; pointer-events:none;"></div>
  `;
}

// Update per-column top pull-down space
function updateColSpace(kind, colIdx, val) {
  const L = appConfig.layout;
  const numVal = Math.max(0, Number(val) || 0);
  if (kind === 'top') {
    if (!Array.isArray(L.colTopSpaces)) L.colTopSpaces = [0, 0, 0];
    L.colTopSpaces[colIdx] = numVal;
  }
  const labelEl = document.getElementById(`col-space-label-${kind}-${colIdx}`);
  if (labelEl) labelEl.textContent = `${numVal} px`;
  renderA4Sheet();
}

// Format custom CSS width helper (automatically appends 'px' if pure number is entered)
function formatCssSize(val, fallback = '') {
  if (val === null || val === undefined) return fallback;
  const s = String(val).trim();
  if (!s) return fallback;
  if (/^\d+(\.\d+)?$/.test(s)) return `${s}px`;
  return s;
}

// Get custom top pull-down padding (px) for a specific route map column
function getColTopSpacePx(colIdx) {
  const L = appConfig.layout;
  if (Array.isArray(L.colTopSpaces) && L.colTopSpaces[colIdx] !== undefined) {
    return Math.max(0, Number(L.colTopSpaces[colIdx]) || 0);
  }
  return 0;
}

// Get stop type for a specific variant ('origin' | 'normal' | 'colored' | 'destination')
function getStopVariantType(stop, variantId, stopIdx = 0, totalStops = 1) {
  if (stop.variantType && stop.variantType[variantId]) {
    return stop.variantType[variantId];
  }
  if (stop.type) return stop.type;
  if (stopIdx === 0) return 'origin';
  if (stopIdx === totalStops - 1) return 'destination';
  return 'normal';
}

// Application State
let appConfig = getDefaultConfig();
let currentTab = 'theme';
let currentZoom = 0.82;
let expandedStopId = 's30';
let stopSearchQuery = '';
let cachedFontEmbedCSS = null; // Cache webfont CSS so exports are near-instant

// HTML Escape helper
function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600 border-emerald-400' :
             type === 'info' ? 'bg-sky-600 border-sky-400' : 'bg-rose-600 border-rose-400';
  el.className = `px-4 py-2.5 rounded-lg border text-white text-xs font-medium shadow-xl flex items-center gap-2 transition-all duration-300 ${bg}`;
  el.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i><span>${esc(message)}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

// ==========================================================================
// 2. TRACK METRICS & SVG STOP NODE RENDERERS (PERFECT CIRCLES, ZERO SQUASH)
// ==========================================================================

// 香港港鐵 MTR 1:1 真實幾何比例 SVG 圖標（上下半圓弧中間留有清晰空間，且頂底端點水平平齊）
function createMtrLogoSvg(heightPx = 13, customBg = null, customFg = null) {
  const C = appConfig?.colors || {};
  const L = appConfig?.layout || {};
  const scaleRatio = Math.max(0.6, Math.min(1.8, (Number(L.mtrIconScale) || 100) / 100));

  const bgColor = customBg || C.mtrSvgBg || '#A81428';
  const fgColor = customFg || C.mtrSvgFg || '#ffffff';
  const h = Math.round(Number(heightPx) * scaleRatio * 10) / 10;
  const w = Math.round(h * 1.48 * 10) / 10;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 148 100" style="width:${w}px; height:${h}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <!-- 外層港鐵紅橢圓膠囊底框 -->
      <rect x="2" y="2" width="144" height="96" rx="48" ry="48" fill="${bgColor}" stroke="#ffffff" stroke-width="3.2" />
      <!-- 中央垂直主幹線 (y=16 至 y=84) -->
      <rect x="68.7" y="16" width="10.6" height="68" fill="${fgColor}" />
      <!-- 上方半圓弧 (底緣位於 y=43.8，與下方半圓弧保持清晰空間) -->
      <path d="M 38.5 19 A 35.5 27.8 0 0 0 109.5 19 L 98.7 19 A 24.7 17.2 0 0 1 49.3 19 Z" fill="${fgColor}" />
      <!-- 下方半圓弧 (頂緣位於 y=56.2，與上方半圓弧間隔 12.4 單位空間) -->
      <path d="M 38.5 83 A 35.5 27.8 0 0 1 109.5 83 L 98.7 83 A 24.7 17.2 0 0 0 49.3 83 Z" fill="${fgColor}" />
    </svg>
  `;
}

// 途徑走廊標誌 (HK_traffic_sign_353.svg)：1:1 正方形背景，支援班次專屬底色與圖案色
function createHkTrafficSign353Svg(sizePx = 15.5, bgColor = null, fgColor = null) {
  const C = appConfig?.colors || {};
  const bg = bgColor || C.corridorSvgBg || C.routeLineColor || '#0d8556';
  const fg = fgColor || C.corridorSvgFg || '#ffffff';
  const s = Math.round(sizePx * 10) / 10;
  return `
    <svg width="${s}" height="${s}" viewBox="0 0 100 100" style="width:${s}px; height:${s}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <rect x="2" y="2" width="96" height="96" rx="14" ry="14" fill="${bg}" stroke="#ffffff" stroke-width="4" />
      <polygon points="37,15 46.5,15 46.5,44 26,44" fill="${fg}" />
      <polygon points="53.5,15 63,15 74,44 53.5,44" fill="${fg}" />
      <rect x="13" y="46.5" width="74" height="4.2" fill="${fg}" />
      <polygon points="24,54 46.5,54 46.5,85 14,85" fill="${fg}" />
      <polygon points="53.5,54 76,54 86,85 53.5,85" fill="${fg}" />
    </svg>
  `;
}

// 途徑隧道標誌 (HK_Tunnel.svg)：1:1 正方形背景，支援班次專屬底色與圖案色
function createHkTunnelSvg(sizePx = 15.5, bgColor = null, fgColor = null) {
  const C = appConfig?.colors || {};
  const bg = bgColor || C.tunnelSvgBg || C.routeLineColor || '#0d8556';
  const fg = fgColor || C.tunnelSvgFg || '#ffffff';
  const s = Math.round(sizePx * 10) / 10;
  return `
    <svg width="${s}" height="${s}" viewBox="0 0 100 100" style="width:${s}px; height:${s}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <rect x="2" y="2" width="96" height="96" rx="14" ry="14" fill="${bg}" stroke="#ffffff" stroke-width="4" />
      <path d="M 15 56 L 15 24 C 15 19.5, 18.5 16, 23 16 L 77 16 C 81.5 16, 85 19.5, 85 24 L 85 56 L 69 56 L 69 41 A 19 17.5 0 0 0 31 41 L 31 56 Z" fill="${fg}" />
      <polygon points="33.5,52 46.8,52 46.8,85 16,85" fill="${fg}" />
      <polygon points="53.2,52 66.5,52 84,85 53.2,85" fill="${fg}" />
    </svg>
  `;
}

// 動態速度線秒錶 SVG 圖標（支援自定義大小與顏色）
function createFastClockSvg(heightPx = 20, color = null) {
  const C = appConfig?.colors || {};
  const strokeColor = color || C.fastClockSvgColor || '#ffffff';
  const h = Math.round(heightPx * 10) / 10;
  const w = Math.round(h * 1.22 * 10) / 10;
  return `
    <svg width="${w}" height="${h}" viewBox="0 0 39 32" fill="none" style="width:${w}px; height:${h}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <line x1="3.5" y1="10" x2="11" y2="10" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="0.8" y1="16" x2="2.4" y2="16" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="5.2" y1="16" x2="9.8" y2="16" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="2.5" y1="22" x2="11" y2="22" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="20.5" y1="2.2" x2="26.5" y2="2.2" stroke="${strokeColor}" stroke-width="2.7" stroke-linecap="round" />
      <line x1="23.5" y1="2.2" x2="23.5" y2="5.2" stroke="${strokeColor}" stroke-width="2.7" stroke-linecap="round" />
      <line x1="32" y1="6.5" x2="34.5" y2="4" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="23.5" cy="17.2" r="11.5" stroke="${strokeColor}" stroke-width="2.8" />
      <polyline points="23.5,10.5 23.5,17.2 28.4,19.8" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

// 當選擇「在分段收費標籤右側同行平排 (beside_fare)」時，生成與分段收費平排的圓圈班次編號
function renderOriginInlineBadgesHTML(stop, metrics, forceAllTracks = false) {
  const bSize = Math.max(12.5, metrics.badgeSize || 13.5);
  const fontSize = Math.max(7.2, bSize - 3.8);

  const badges = metrics.tracks
    .filter(t => {
      const vState = stop.variantLineState?.[t.variant.id];
      if (forceAllTracks && stop.index === 0) return vState ? vState.hasActiveStops !== false : true;
      return Boolean(vState?.isVariantOrigin);
    })
    .map(t => `
      <span style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:${bSize}px;
        height:${bSize}px;
        border-radius:9999px;
        background-color:${t.color};
        color:${t.badgeText};
        font-size:${fontSize}px;
        font-weight:900;
        line-height:1;
        box-shadow:0 0 0 1.2px #ffffff;
        flex-shrink:0;
      ">
        <span class="sheet-text-fix" style="line-height:1;">${esc(t.label)}</span>
      </span>
    `).join('');

  if (!badges) return '';
  return `<div style="display:inline-flex; align-items:center; gap:3px; margin-left:4px; vertical-align:middle;">${badges}</div>`;
}

// Standalone row for Origin Variant Numbers when the stop does NOT have a Section Fare badge
function renderOriginParallelNumbersRowHTML(stop, metrics) {
  if (!metrics.isParallel) return '';
  const hasAnyOriginHere = metrics.tracks.some(t => stop.variantLineState?.[t.variant.id]?.isVariantOrigin);
  if (!hasAnyOriginHere) return '';
  const bSize = metrics.badgeSize || 14;

  return `
    <div style="display:flex; align-items:stretch; width:100%; height:${Math.ceil(bSize) + 3}px; flex-shrink:0;">
      ${renderOriginParallelNumbersTrackCellHTML(stop, metrics)}
      <div style="flex:1;"></div>
    </div>
  `;
}

// 生成頁尾「網站 (地球經緯線)」SVG 向量圖標
function createFooterWebsiteSvg(sizePx = 9.5, color = '#0d8556') {
  const s = Math.max(6, Math.round(Number(sizePx) * 10) / 10);
  return `
    <svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:${s}px; height:${s}px; display:inline-block; vertical-align:middle; flex-shrink:0;">
      <circle cx="12" cy="12" r="9.5"></circle>
      <line x1="2.5" y1="12" x2="21.5" y2="12"></line>
      <path d="M12 2.5a14.5 14.5 0 0 1 4 9.5 14.5 14.5 0 0 1-4 9.5 14.5 14.5 0 0 1-4-9.5 14.5 14.5 0 0 1 4-9.5z"></path>
    </svg>
  `;
}

// 生成頁尾「熱線電話 (話筒)」SVG 向量圖標
function createFooterPhoneSvg(sizePx = 9.5, color = '#0d8556') {
  const s = Math.max(6, Math.round(Number(sizePx) * 10) / 10);
  return `
    <svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${color}" style="width:${s}px; height:${s}px; display:inline-block; vertical-align:middle; flex-shrink:0;">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
    </svg>
  `;
}

// 渲染中英文生效日期（支援自定義生效日期高亮字色 effectiveDateHighlightColor 與條款文字色 footerClauseTextColor）
function renderEffectiveDateRichHTML(F) {
  const C = ensureColorsConfigSynced();
  const highlightColor = C.effectiveDateHighlightColor || '#dc2626';
  const clauseColor = C.footerClauseTextColor || '#475569';

  const rawZh = String(F.dateZh || '').trim();
  const rawEn = String(F.dateEn || '').trim();

  let zhPartHTML = '';
  if (rawZh) {
    const cleanDateZh = rawZh
      .replace(/起生效.*$/, '')
      .replace(/生效.*$/, '')
      .trim();
    zhPartHTML = `<span style="color:${highlightColor}; font-weight:700;">${esc(cleanDateZh)}</span><span style="color:${clauseColor};">起生效,直至另行通告</span>`;
  }

  let enPartHTML = '';
  if (rawEn) {
    const cleanDateEn = rawEn
      .replace(/^Effective\s*(from\s*)?/i, '')
      .replace(/\s*until further notice\.?$/i, '')
      .replace(/\.$/, '')
      .trim();
    enPartHTML = `<span style="color:${clauseColor};">Effective from </span><span style="color:${highlightColor}; font-weight:700;">${esc(cleanDateEn)}</span><span style="color:${clauseColor};"> until further notice.</span>`;
  }

  if (zhPartHTML && enPartHTML) {
    return `${zhPartHTML}<span style="color:${clauseColor};"> | </span>${enPartHTML}`;
  }
  return zhPartHTML || enPartHTML;
}

// 渲染右側資訊欄「7. 生效日期與營運商資訊 (effective_footer)」A4 畫布模組
function renderEffectiveFooterModuleHTML(F, C, themePrimaryColor, pushToBottomStyle = '') {
  ensureEffectiveFooterConfigSynced();
  ensureColorsConfigSynced();
  if (!F.enabled) return '';

  const effectiveRichHTML = renderEffectiveDateRichHTML(F);
  const defaultNoGovText = '「政府長者及合資格殘障人士公共運輸票價優惠計劃」並不適用於本路線 | The Government Public Transport Fare Concession Scheme for the Elderly and Eligible Persons with Disabilities is not applicable to this route';
  const noGovText = String(F.noGovConcessionText !== undefined ? F.noGovConcessionText : defaultNoGovText).trim();

  const dateFontSize = Math.max(5.5, Number(F.dateFontSizePx) || 7.2);
  const concessionFontSize = Math.max(5.5, Number(F.concessionFontSizePx) || 7.2);
  const clauseColor = C.footerClauseTextColor || '#475569';
  const highlightColor = C.effectiveDateHighlightColor || '#dc2626';

  const contactFontSize = Math.max(6, Number(F.contactFontSizePx) || 8.4);
  const contactSvgSize = Math.max(6, Number(F.contactSvgSizePx) || 9.5);
  const contactGap = Math.max(3, Number(F.contactGapPx) ?? 10);
  const svgIconColor = C.footerContactIconColor || themePrimaryColor || '#0d8556';
  const contactTextColor = C.footerContactTextColor || '#111827';

  const hasWebsite = Boolean(F.website && String(F.website).trim() !== '');
  const hasHotline = Boolean(F.hotline && String(F.hotline).trim() !== '');

  const websiteItemHTML = hasWebsite ? `
    <div style="display:inline-flex; align-items:center; gap:3px; font-size:${contactFontSize}px; font-weight:800; color:${contactTextColor}; white-space:nowrap;">
      ${F.showWebsiteSvg !== false ? createFooterWebsiteSvg(contactSvgSize, svgIconColor) : ''}
      <span class="sheet-text-fix" style="line-height:1.1;">${esc(F.website.trim())}</span>
    </div>
  ` : '';

  const hotlineItemHTML = hasHotline ? `
    <div style="display:inline-flex; align-items:center; gap:3px; font-size:${contactFontSize}px; font-weight:800; color:${contactTextColor}; white-space:nowrap;">
      ${F.showHotlineSvg !== false ? createFooterPhoneSvg(contactSvgSize, svgIconColor) : ''}
      <span class="sheet-text-fix" style="line-height:1.1;">${esc(F.hotline.trim())}</span>
    </div>
  ` : '';

  const contactItemsOrdered = F.contactOrder === 'hotline_first'
    ? [hotlineItemHTML, websiteItemHTML].filter(Boolean).join('')
    : [websiteItemHTML, hotlineItemHTML].filter(Boolean).join('');

  const leftContactRowHTML = contactItemsOrdered ? `
    <div style="
      display:flex;
      align-items:center;
      justify-content:flex-start;
      flex-wrap:nowrap;
      gap:${contactGap}px;
      min-width:0;
      overflow:hidden;
    ">
      ${contactItemsOrdered}
    </div>
  ` : '';

  const versionText = String(F.versionCode || '').trim();
  const operatorFullText = [F.operatorZh, F.operatorEn].map(s => String(s || '').trim()).filter(Boolean).join(' ');
  const hasVersion = Boolean(versionText);
  const hasOperator = Boolean(operatorFullText);

  const operatorFontSize = Math.max(5.5, Number(F.operatorFontSizePx) || 7.0);
  const rawVersionFontSize = Math.max(6.0, Number(F.versionFontSizePx) || 8.2);
  const versionFontSize = rawVersionFontSize <= operatorFontSize
    ? Math.round((operatorFontSize + 1.0) * 10) / 10
    : rawVersionFontSize;

  const sharedMetaColor = F.operatorVersionColor || '#64748b';
  const sharedMetaWeight = F.operatorVersionWeight || '700';
  const lineGapPx = Math.max(0, Number(F.operatorVersionLineGapPx) ?? 1.5);
  const sharedMetaFontStyle = `color:${sharedMetaColor}; font-weight:${sharedMetaWeight}; letter-spacing:0.01em; line-height:1.1; white-space:nowrap;`;

  const layoutMode = F.footerBottomLayout || 'stacked';
  const isOperatorFirst = F.rightMetaOrder === 'operator_first';

  let rightMetaBlockHTML = '';
  if (hasVersion || hasOperator) {
    if (layoutMode === 'stacked_inline_right') {
      const inlineFirstHTML = isOperatorFirst
        ? (hasOperator ? `<span class="sheet-text-fix" style="font-size:${operatorFontSize}px; ${sharedMetaFontStyle}">${esc(operatorFullText)}</span>` : '')
        : (hasVersion ? `<span class="sheet-text-fix" style="font-size:${versionFontSize}px; ${sharedMetaFontStyle}">${esc(versionText)}</span>` : '');
      const inlineSecondHTML = isOperatorFirst
        ? (hasVersion ? `<span class="sheet-text-fix" style="font-size:${versionFontSize}px; ${sharedMetaFontStyle}">${esc(versionText)}</span>` : '')
        : (hasOperator ? `<span class="sheet-text-fix" style="font-size:${operatorFontSize}px; ${sharedMetaFontStyle}">${esc(operatorFullText)}</span>` : '');

      rightMetaBlockHTML = `
        <div style="
          display:flex;
          flex-direction:row;
          align-items:baseline;
          justify-content:flex-end;
          gap:6px;
          text-align:right;
          margin-left:auto;
          flex-shrink:0;
        ">
          ${inlineFirstHTML}
          ${inlineSecondHTML}
        </div>
      `;
    } else {
      const verLineHTML = hasVersion ? `
        <div class="sheet-text-fix" style="font-size:${versionFontSize}px; ${sharedMetaFontStyle} display:block;">
          ${esc(versionText)}
        </div>
      ` : '';
      const opLineHTML = hasOperator ? `
        <div class="sheet-text-fix" style="font-size:${operatorFontSize}px; ${sharedMetaFontStyle} display:block;">
          ${esc(operatorFullText)}
        </div>
      ` : '';

      rightMetaBlockHTML = `
        <div style="
          display:flex;
          flex-direction:column;
          align-items:flex-end;
          justify-content:center;
          gap:${lineGapPx}px;
          text-align:right;
          margin-left:auto;
          flex-shrink:0;
        ">
          ${isOperatorFirst ? opLineHTML + verLineHTML : verLineHTML + opLineHTML}
        </div>
      `;
    }
  }

  const isSideBySide = layoutMode === 'side_by_side';
  const topDividerStyle = F.showTopDivider ? 'border-top:0.5px solid #cbd5e1; padding-top:3.5px;' : 'padding-top:2px;';

  const bottomMetaContainerHTML = (leftContactRowHTML || rightMetaBlockHTML) ? `
    <div style="
      display:flex;
      flex-direction:${isSideBySide ? 'row' : 'column'};
      align-items:${isSideBySide ? 'flex-end' : 'stretch'};
      justify-content:space-between;
      gap:${isSideBySide ? '6px' : '2px'};
      ${topDividerStyle}
      width:100%;
    ">
      ${leftContactRowHTML}
      ${rightMetaBlockHTML}
    </div>
  ` : '';

  return `
    <div onclick="switchEditorTab('info', 'sec-footer')" class="preview-clickable" style="
      display:flex;
      flex-direction:column;
      gap:3.2px;
      ${pushToBottomStyle}
    ">
      ${effectiveRichHTML ? `
        <div style="font-size:${dateFontSize}px; color:${clauseColor}; line-height:1.18;">
          <div class="sheet-text-fix" style="display:block;">${effectiveRichHTML}</div>
        </div>
      ` : ''}

      ${(F.concessionZh || F.concessionEn) ? `
        <div style="font-size:${concessionFontSize}px; color:${clauseColor}; line-height:1.15;">
          ${F.concessionZh ? `<div class="sheet-text-fix" style="display:block;">${esc(F.concessionZh)}</div>` : ''}
          ${F.concessionEn ? `<div class="sheet-text-fix" style="display:block;">${esc(F.concessionEn)}</div>` : ''}
        </div>
      ` : ''}

      ${(F.showNoGovConcession && noGovText) ? `
        <div style="font-size:${concessionFontSize}px; color:${highlightColor}; font-weight:700; line-height:1.15;">
          <div class="sheet-text-fix" style="display:block; color:${highlightColor};">${esc(noGovText)}</div>
        </div>
      ` : ''}

      ${bottomMetaContainerHTML}
    </div>
  `;
}

// 渲染控制面板頂部的「生效日期、優惠條款與底部聯絡/營運商版本」即時白底預覽卡
function renderEffectiveFooterPreviewCardInnerHTML(F, themePrimaryColor = '#0d8556') {
  ensureEffectiveFooterConfigSynced();
  const effectiveRichHTML = renderEffectiveDateRichHTML(F);
  const defaultNoGovText = '「政府長者及合資格殘障人士公共運輸票價優惠計劃」並不適用於本路線 | The Government Public Transport Fare Concession Scheme for the Elderly and Eligible Persons with Disabilities is not applicable to this route';
  const noGovText = String(F.noGovConcessionText !== undefined ? F.noGovConcessionText : defaultNoGovText).trim();

  const dateFontSize = Math.max(5.5, Number(F.dateFontSizePx) || 7.2);
  const concessionFontSize = Math.max(5.5, Number(F.concessionFontSizePx) || 7.2);
  const contactFontSize = Math.max(6, Number(F.contactFontSizePx) || 8.4);
  const contactSvgSize = Math.max(6, Number(F.contactSvgSizePx) || 9.5);
  const contactGap = Math.max(3, Number(F.contactGapPx) ?? 10);

  const websiteHTML = F.website ? `
    <span style="display:inline-flex; align-items:center; gap:3px; font-size:${contactFontSize + 1.2}px; font-weight:800; color:#111827; white-space:nowrap;">
      ${F.showWebsiteSvg !== false ? createFooterWebsiteSvg(contactSvgSize + 1.2, themePrimaryColor) : ''}
      <span>${esc(F.website)}</span>
    </span>
  ` : '';

  const hotlineHTML = F.hotline ? `
    <span style="display:inline-flex; align-items:center; gap:3px; font-size:${contactFontSize + 1.2}px; font-weight:800; color:#111827; white-space:nowrap;">
      ${F.showHotlineSvg !== false ? createFooterPhoneSvg(contactSvgSize + 1.2, themePrimaryColor) : ''}
      <span>${esc(F.hotline)}</span>
    </span>
  ` : '';

  const orderedContact = F.contactOrder === 'hotline_first'
    ? [hotlineHTML, websiteHTML].filter(Boolean).join('')
    : [websiteHTML, hotlineHTML].filter(Boolean).join('');

  const versionText = String(F.versionCode || '').trim();
  const operatorFullText = [F.operatorZh, F.operatorEn].map(s => String(s || '').trim()).filter(Boolean).join(' ');
  const opSize = Math.max(5.5, Number(F.operatorFontSizePx) || 7.0);
  const rawVerSize = Math.max(6.0, Number(F.versionFontSizePx) || 8.2);
  const verSize = rawVerSize <= opSize ? Math.round((opSize + 1.0) * 10) / 10 : rawVerSize;
  const metaColor = F.operatorVersionColor || '#64748b';
  const metaWeight = F.operatorVersionWeight || '700';
  const lineGap = Math.max(0, Number(F.operatorVersionLineGapPx) ?? 1.5);
  const layoutMode = F.footerBottomLayout || 'stacked';
  const isSideBySide = layoutMode === 'side_by_side';
  const isOperatorFirst = F.rightMetaOrder === 'operator_first';

  let rightPreviewHTML = '';
  if (layoutMode === 'stacked_inline_right') {
    const firstPart = isOperatorFirst
      ? (operatorFullText ? `<span style="font-size:${opSize + 1.2}px; color:${metaColor}; font-weight:${metaWeight}; line-height:1.1;">${esc(operatorFullText)}</span>` : '')
      : (versionText ? `<span style="font-size:${verSize + 1.2}px; color:${metaColor}; font-weight:${metaWeight}; line-height:1.1;">${esc(versionText)}</span>` : '');
    const secondPart = isOperatorFirst
      ? (versionText ? `<span style="font-size:${verSize + 1.2}px; color:${metaColor}; font-weight:${metaWeight}; line-height:1.1;">${esc(versionText)}</span>` : '')
      : (operatorFullText ? `<span style="font-size:${opSize + 1.2}px; color:${metaColor}; font-weight:${metaWeight}; line-height:1.1;">${esc(operatorFullText)}</span>` : '');

    rightPreviewHTML = `
      <div style="display:flex; flex-direction:row; align-items:baseline; justify-content:flex-end; gap:6px; text-align:right; margin-left:auto;">
        ${firstPart}
        ${secondPart}
      </div>
    `;
  } else {
    const verNode = versionText ? `<div style="font-size:${verSize + 1.2}px; color:${metaColor}; font-weight:${metaWeight}; line-height:1.1;">${esc(versionText)}</div>` : '';
    const opNode = operatorFullText ? `<div style="font-size:${opSize + 1.2}px; color:${metaColor}; font-weight:${metaWeight}; line-height:1.1;">${esc(operatorFullText)}</div>` : '';
    rightPreviewHTML = `
      <div style="display:flex; flex-direction:column; align-items:flex-end; justify-content:center; gap:${lineGap}px; text-align:right; margin-left:auto;">
        ${isOperatorFirst ? opNode + verNode : verNode + opNode}
      </div>
    `;
  }

  return `
    <div style="
      display:flex;
      flex-direction:column;
      gap:4px;
      width:100%;
      background:#ffffff;
      padding:8px 10px;
      border-radius:6px;
      border:1px solid #cbd5e1;
      box-sizing:border-box;
    ">
      ${effectiveRichHTML ? `
        <div style="font-size:${dateFontSize + 1.1}px; color:#475569; line-height:1.2;">${effectiveRichHTML}</div>
      ` : ''}

      ${(F.concessionZh || F.concessionEn) ? `
        <div style="font-size:${concessionFontSize + 1.0}px; color:#475569; line-height:1.18;">
          ${F.concessionZh ? `<div>${esc(F.concessionZh)}</div>` : ''}
          ${F.concessionEn ? `<div>${esc(F.concessionEn)}</div>` : ''}
        </div>
      ` : ''}

      ${(F.showNoGovConcession && noGovText) ? `
        <div style="font-size:${concessionFontSize + 0.8}px; color:#dc2626; font-weight:700; line-height:1.18;">
          ${esc(noGovText)}
        </div>
      ` : ''}

      <div style="
        display:flex;
        flex-direction:${isSideBySide ? 'row' : 'column'};
        align-items:${isSideBySide ? 'flex-end' : 'stretch'};
        justify-content:space-between;
        gap:${isSideBySide ? '8px' : '3px'};
        padding-top:3px;
        border-top:${F.showTopDivider ? '1px solid #cbd5e1' : '1px dashed #e2e8f0'};
        width:100%;
      ">
        <div style="display:flex; align-items:center; justify-content:flex-start; gap:${contactGap}px; flex-wrap:nowrap; overflow:hidden;">
          ${orderedContact || '<span style="font-size:10px; color:#94a3b8;">（尚未輸入網站或電話）</span>'}
        </div>
        ${rightPreviewHTML}
      </div>
    </div>
  `;
}

// 取得該站點所屬或指定套用的班次物件（讓不同班次可擁有不同站點、SVG、宣傳框及轉乘框顏色）
function getStopEffectiveVariant(stop) {
  const variants = appConfig.variants || [];
  if (!variants.length) return null;
  if (stop && stop.colorVariantId) {
    const explicitVar = variants.find(v => v.id === stop.colorVariantId);
    if (explicitVar) return explicitVar;
  }
  if (stop && stop.variantLineState) {
    for (const v of variants) {
      const st = stop.variantLineState[v.id];
      if (st && st.showNode) return v;
    }
    for (const v of variants) {
      const st = stop.variantLineState[v.id];
      if (st && st.status !== 'none') return v;
    }
  }
  return variants[0];
}

function renderRightModuleTitleLabelHTML(titleZh, titleEn, C, mode = 'inline', customBg = null, customText = null) {
  const bg = customBg || C.timetableHeaderBg || C.themePrimary || C.infoAccentColor || '#0d8556';
  const fg = customText || C.timetableHeaderText || '#ffffff';

  if (mode === 'pipe_break') {
    return `
      <div style="margin-bottom:3px; width:100%; line-height:1;">
        <div style="
          background-color:${bg};
          color:${fg};
          padding:3.5px 8px;
          border-radius:3.5px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          box-sizing:border-box;
          width:100%;
        ">
          <div class="sheet-text-fix" style="font-size:9.8px; font-weight:900; color:${fg}; display:block; line-height:1.16;">
            ${esc(titleZh)}${titleEn ? ' |' : ''}
          </div>
          ${titleEn ? `
            <div class="sheet-text-fix" style="font-size:8.2px; font-weight:700; color:${fg}; opacity:0.96; display:block; line-height:1.14; margin-top:1px;">
              ${esc(titleEn)}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  return `
    <div style="margin-bottom:3px; width:100%; line-height:1;">
      <div style="
        background-color:${bg};
        color:${fg};
        padding:3.5px 8px;
        border-radius:3.5px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        box-sizing:border-box;
        width:100%;
      ">
        <div class="sheet-text-fix" style="font-size:9.8px; font-weight:900; color:${fg}; display:block; line-height:1.16;">
          ${esc(titleZh)}${titleEn ? ` | ${esc(titleEn)}` : ''}
        </div>
      </div>
    </div>
  `;
}

// 將途徑 (Via) 中英文文字格式化為支援多行隔行顯示（支援輸入 | 或 \n 隔行）
function formatViaMultilineTextHTML(rawViaStr, prefixText, prefixSizePx, fontWeight, fontStyle, badgeOpts, alignMode = 'hanging') {
  const cleaned = String(rawViaStr || '')
    .replace(/\\n/g, '\n')
    .replace(/\s*\|\s*/g, '\n')
    .trim();
  if (!cleaned) return '';

  const lines = cleaned.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  if (lines.length === 0) return '';

  const prefixHTML = `<span style="font-size:${prefixSizePx}px; font-weight:${fontWeight}; font-style:${fontStyle}; opacity:0.95; flex-shrink:0; line-height:1.15;">${esc(prefixText)}</span>`;

  // 若只有單行且非「前綴獨立一行」模式
  if (lines.length === 1 && alignMode !== 'prefix_top') {
    const isCenter = alignMode === 'center';
    return `
      <span style="display:${isCenter ? 'inline-flex' : 'flex'}; align-items:baseline; justify-content:${isCenter ? 'center' : 'flex-start'}; gap:2.5px; width:100%;">
        ${prefixHTML}
        <span style="display:inline-block;">${formatTextWithRouteBadges(lines[0], badgeOpts)}</span>
      </span>
    `;
  }

  // 模式 A：「經 / VIA」獨立一行置頂，下方各行依次隔行排列
  if (alignMode === 'prefix_top') {
    return `
      <span style="display:flex; flex-direction:column; align-items:flex-start; width:100%; gap:1px;">
        ${prefixHTML}
        ${lines.map(line => `<span style="display:block; width:100%; line-height:1.18;">${formatTextWithRouteBadges(line, badgeOpts)}</span>`).join('')}
      </span>
    `;
  }

  // 模式 B：多行置中對齊（適合「目的地+途徑同一個 Container」左右分欄置中模式）
  if (alignMode === 'center') {
    return `
      <span style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; width:100%; gap:1px;">
        ${lines.map((line, lIdx) => `
          <span style="display:block; width:100%; text-align:center; line-height:1.16;">
            ${lIdx === 0 ? `<span style="font-size:${prefixSizePx}px; font-weight:${fontWeight}; font-style:${fontStyle}; margin-right:2px; opacity:0.95;">${esc(prefixText)}</span>` : ''}${formatTextWithRouteBadges(line, badgeOpts)}
          </span>
        `).join('')}
      </span>
    `;
  }

  // 模式 C（預設 hanging）：左側固定「經 / VIA」前綴欄，右側多行途徑文字垂直對齊隔行顯示
  return `
    <span style="display:inline-flex; align-items:baseline; gap:3px; width:100%; text-align:left;">
      ${prefixHTML}
      <span style="display:flex; flex-direction:column; flex:1; min-width:0; gap:1px;">
        ${lines.map(line => `<span style="display:block; line-height:1.18;">${formatTextWithRouteBadges(line, badgeOpts)}</span>`).join('')}
      </span>
    </span>
  `;
}

// 一鍵在指定路線框 (#bIdx) 的途徑中文 (viaZh) 或途徑英文 (viaEn) 欄位插入隔行符號 " | "
function insertViaLineBreak(bIdx, field = 'viaZh') {
  const boxes = ensureHeaderRouteBoxesSynced();
  const box = boxes[bIdx];
  if (!box) return;

  const inputEl = document.getElementById(`input-header-${field}-${bIdx}`);
  const curVal = String(box[field] || '');

  if (inputEl && typeof inputEl.selectionStart === 'number') {
    const start = inputEl.selectionStart;
    const end = inputEl.selectionEnd;
    const nextVal = curVal.slice(0, start) + ' | ' + curVal.slice(end);
    updateHeaderRouteBox(bIdx, field, nextVal, false);
    inputEl.value = box[field];
    inputEl.focus();
    const newCursor = start + 3;
    inputEl.setSelectionRange(newCursor, newCursor);
  } else {
    const nextVal = curVal.trim() ? `${curVal.trim()} | ` : '| ';
    updateHeaderRouteBox(bIdx, field, nextVal, true);
  }
  showToast('已插入途徑隔行符號「|」，預覽已即時換行！', 'info');
}

// 自動增強「3. 右側資訊欄」內的途徑 (Via) 編輯區，加入「+ 插入隔行」按鈕與隔行對齊方式切換
function enhanceViaInputsWithLineBreakControls(containerEl) {
  const root = containerEl || document.getElementById('editor-content');
  if (!root || currentTab !== 'info') return;

  const R = appConfig.rightData;
  if (!R.viaLineBreakAlign) R.viaLineBreakAlign = 'hanging';

  // 尋找所有綁定 updateHeaderRouteBox(..., 'viaZh' / 'viaEn', ...) 的輸入框
  const viaInputs = root.querySelectorAll('input[oninput*="viaZh"], input[oninput*="viaEn"], textarea[oninput*="viaZh"], textarea[oninput*="viaEn"]');
  viaInputs.forEach((inp) => {
    if (inp.dataset.viaLineBreakEnhanced === '1') return;
    inp.dataset.viaLineBreakEnhanced = '1';

    const oninputAttr = inp.getAttribute('oninput') || '';
    const match = oninputAttr.match(/updateHeaderRouteBox\(\s*(\d+)\s*,\s*['"](viaZh|viaEn)['"]/);
    if (!match) return;

    const bIdx = Number(match[1]);
    const field = match[2];
    inp.id = `input-header-${field}-${bIdx}`;
    inp.placeholder = field === 'viaZh'
      ? '輸入「|」可隔行，例如：西區海底隧道 | 大欖隧道'
      : 'Use "|" for new line, e.g. WHC | Tai Lam Tunnel';

    const labelEl = inp.previousElementSibling;
    if (labelEl && labelEl.tagName === 'LABEL') {
      labelEl.className = 'flex items-center justify-between text-[10px] text-slate-300 mb-1';
      const origText = labelEl.textContent.trim();
      labelEl.innerHTML = `
        <span>${esc(origText)} <span class="text-[8.5px] text-emerald-400 font-normal">(輸入 | 可隔行)</span></span>
        <button
          type="button"
          onclick="insertViaLineBreak(${bIdx}, '${field}')"
          class="px-1.5 py-0.2 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white border border-emerald-500/40 text-[9px] font-bold transition flex items-center gap-1"
          title="在此途徑欄插入隔行符號 (|)"
        >
          <i class="fa-solid fa-level-down-alt rotate-90 text-[8px]"></i>
          <span>+ 插入隔行</span>
        </button>
      `;
    }
  });

  // 在第一個途徑輸入框群組下方注入「途徑隔行對齊模式」選擇列
  const firstViaZhInput = root.querySelector('#input-header-viaZh-0');
  if (firstViaZhInput && !root.querySelector('#via-linebreak-align-bar')) {
    const parentGrid = firstViaZhInput.closest('.grid') || firstViaZhInput.parentElement;
    if (parentGrid) {
      const bar = document.createElement('div');
      bar.id = 'via-linebreak-align-bar';
      bar.className = 'col-span-full bg-slate-950/80 border border-emerald-500/30 rounded-lg p-2 mt-1 flex items-center justify-between flex-wrap gap-2 text-[9.5px]';
      bar.innerHTML = `
        <span class="text-emerald-300 font-bold flex items-center gap-1">
          <i class="fa-solid fa-align-left"></i>
          <span>途徑 (Via) 多行隔行對齊方式：</span>
        </span>
        <div class="flex items-center gap-1">
          <button
            type="button"
            onclick="appConfig.rightData.viaLineBreakAlign = 'hanging'; renderA4Sheet(); renderEditorSidebar();"
            class="px-2 py-0.5 rounded border transition ${R.viaLineBreakAlign === 'hanging' ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'}"
          >懸掛縮排 (預設)</button>
          <button
            type="button"
            onclick="appConfig.rightData.viaLineBreakAlign = 'center'; renderA4Sheet(); renderEditorSidebar();"
            class="px-2 py-0.5 rounded border transition ${R.viaLineBreakAlign === 'center' ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'}"
          >多行置中</button>
          <button
            type="button"
            onclick="appConfig.rightData.viaLineBreakAlign = 'prefix_top'; renderA4Sheet(); renderEditorSidebar();"
            class="px-2 py-0.5 rounded border transition ${R.viaLineBreakAlign === 'prefix_top' ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'}"
          >「經/VIA」獨立一行</button>
        </div>
      `;
      parentGrid.after(bar);
    }
  }
}

// 渲染右側資訊欄單一模組（已為 route_header 的「途徑 Via」加入完整隔行功能）
function renderRightSideModuleHTML(moduleKey, isLastVisibleModule = false) {
  const C = ensureColorsConfigSynced();
  const R = appConfig.rightData;
  const L = appConfig.layout;
  const T = R.timetable || {};
  const themePrimaryColor = C.themePrimary || C.routeLineColor || C.infoAccentColor || '#0d8556';
  const pushToBottomStyle = (isLastVisibleModule && L.stickLastModuleToBottom) ? 'margin-top:auto;' : '';
  const routeFontFamily = "'Roboto', 'Inter', 'Noto Sans TC', sans-serif";
  const fareFontFamily = "'Arial Black', 'Arial', sans-serif";

  const globalExtraRoutes = [
    T.mentionedRouteNumbers || '',
    R.headerMentionedRoutes || ''
  ].filter(Boolean).join(',');

  switch (moduleKey) {
    // 1. 路線號碼及目的地（含途徑 Label 隔行功能）
    case 'route_header': {
      const routeBoxes = ensureHeaderRouteBoxesSynced();
      const isSingleBox = routeBoxes.length === 1;
      const defaultHeaderPadY = isSingleBox ? 20 : 6;
      const mainRouteFontSize = Math.max(16, Number(R.routeNumberFontSizePx) || 100);
      const headerMentionedSize = Math.max(6, Number(R.headerMentionedRouteFontSizePx) || 13);

      const routeLayoutMode = R.routeLayoutMode || 'single_row';
      const destLayoutMode = R.destLayoutMode || 'shared_below';
      const destViaStyle = R.destViaStyle || 'separate';
      const viaAlignMode = R.viaLineBreakAlign || 'hanging'; // 'hanging' (懸掛縮排) | 'prefix_top' (經/VIA置頂) | 'center' (多行置中)

      const headerBadgeOpts = {
        fontSizePx: headerMentionedSize,
        bgColor: C.routeBoxBg || '#0d8556',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        contrastBorder: true,
        innerWhiteLine: false
      };

      const getBoxDestVia = (box, idx) => {
        const srcBox = destLayoutMode === 'shared_below' ? (routeBoxes[0] || box || {}) : (box || {});
        return {
          destZh: srcBox.destZh !== undefined ? srcBox.destZh : (R.destZh || routeBoxes[0]?.destZh || ''),
          destEn: srcBox.destEn !== undefined ? srcBox.destEn : (R.destEn || routeBoxes[0]?.destEn || ''),
          viaZh: srcBox.viaZh !== undefined ? srcBox.viaZh : (idx === 0 ? (R.viaZh || '') : ''),
          viaEn: srcBox.viaEn !== undefined ? srcBox.viaEn : (idx === 0 ? (R.viaEn || '') : ''),
          viaZhFontSizePx: Math.max(6, Number(srcBox.viaZhFontSizePx) || Number(R.viaZhFontSizePx) || 12.5),
          viaEnFontSizePx: Math.max(5.5, Number(srcBox.viaEnFontSizePx) || Number(R.viaEnFontSizePx) || 10.5),
          viaZhBold: srcBox.viaZhBold !== undefined ? Boolean(srcBox.viaZhBold) : (R.viaZhBold !== false),
          viaZhItalic: srcBox.viaZhItalic !== undefined ? Boolean(srcBox.viaZhItalic) : Boolean(R.viaZhItalic),
          viaEnBold: srcBox.viaEnBold !== undefined ? Boolean(srcBox.viaEnBold) : (R.viaEnBold !== false),
          viaEnItalic: srcBox.viaEnItalic !== undefined ? Boolean(srcBox.viaEnItalic) : Boolean(R.viaEnItalic)
        };
      };

      const renderDestAndViaBlockHTML = (destZh, destEn, viaZh, viaEn, sizeMode = 'normal', viaStyleOpts = {}) => {
        const cleanDestZh = String(destZh || '').trim();
        const cleanDestEn = String(destEn || '').trim();
        const cleanViaZh = String(viaZh || '').trim().replace(/^經\s*/, '');
        const cleanViaEn = String(viaEn || '').trim().replace(/^via\s+/i, '');
        const hasDest = Boolean(cleanDestZh || cleanDestEn);
        const hasVia = Boolean(cleanViaZh || cleanViaEn);
        if (!hasDest && !hasVia) return '';

        const isCompact = sizeMode === 'compact' || sizeMode === 'grid';

        const customViaZhSize = Math.max(6, Number(viaStyleOpts.viaZhFontSizePx) || 12.5);
        const customViaEnSize = Math.max(5.5, Number(viaStyleOpts.viaEnFontSizePx) || 10.5);
        const viaZhWeight = viaStyleOpts.viaZhBold !== false ? '800' : '400';
        const viaZhStyle = viaStyleOpts.viaZhItalic ? 'italic' : 'normal';
        const viaEnWeight = viaStyleOpts.viaEnBold !== false ? '700' : '400';
        const viaEnStyle = viaStyleOpts.viaEnItalic ? 'italic' : 'normal';
        const viaZhPrefixSize = Math.max(6.5, Math.round(customViaZhSize * 0.74 * 10) / 10);
        const viaEnPrefixSize = Math.max(6, Math.round(customViaEnSize * 0.74 * 10) / 10);

        if (destViaStyle === 'combined_lr') {
          const zhDestFontSize = sizeMode === 'grid' ? '14px' : (isCompact ? '15.5px' : '19px');
          const enDestFontSize = sizeMode === 'grid' ? '9.8px' : (isCompact ? '10.5px' : '12.5px');
          const combinedBg = C.combinedDestViaBg || C.dateHeaderBg || '#dcedc8';
          const combinedText = C.combinedDestViaText || C.dateHeaderText || '#111827';
          const dividerColor = C.timetableThickLineColor || C.themePrimary || 'rgba(17,24,39,0.35)';
          const combinedAlign = viaAlignMode === 'prefix_top' ? 'prefix_top' : 'center';

          return `
            <div style="
              flex:1;
              min-width:0;
              background-color:${combinedBg};
              color:${combinedText};
              padding:${sizeMode === 'grid' ? '4.5px 6px' : '5px 8px'};
              border-radius:4px;
              box-sizing:border-box;
              display:flex;
              flex-direction:row;
              align-items:stretch;
              justify-content:space-between;
              gap:${sizeMode === 'grid' ? '5px' : '7px'};
            ">
              <div style="flex:1; min-width:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
                ${cleanDestZh ? `
                  <div class="sheet-text-fix" style="font-size:${zhDestFontSize}; font-weight:900; line-height:1.15; display:block; text-align:center; width:100%;">
                    ${formatBbiMultilineTextHTML(cleanDestZh, headerBadgeOpts)}
                  </div>
                ` : ''}
                ${cleanViaZh ? `
                  <div class="sheet-text-fix" style="font-size:${customViaZhSize}px; font-weight:${viaZhWeight}; font-style:${viaZhStyle}; line-height:1.18; display:block; margin-top:2px; text-align:center; width:100%;">
                    ${formatViaMultilineTextHTML(cleanViaZh, '經', viaZhPrefixSize, viaZhWeight, viaZhStyle, headerBadgeOpts, combinedAlign)}
                  </div>
                ` : ''}
              </div>

              <div style="width:1.5px; align-self:stretch; background-color:${dividerColor}; border-radius:1px; flex-shrink:0; margin:1px 0;"></div>

              <div style="flex:1; min-width:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
                ${cleanDestEn ? `
                  <div class="sheet-text-fix" style="font-size:${enDestFontSize}; font-weight:700; line-height:1.14; display:block; text-align:center; width:100%;">
                    ${formatBbiMultilineTextHTML(cleanDestEn, headerBadgeOpts)}
                  </div>
                ` : ''}
                ${cleanViaEn ? `
                  <div class="sheet-text-fix" style="font-size:${customViaEnSize}px; font-weight:${viaEnWeight}; font-style:${viaEnStyle}; line-height:1.14; display:block; margin-top:2px; text-align:center; width:100%;">
                    ${formatViaMultilineTextHTML(cleanViaEn, 'VIA', viaEnPrefixSize, viaEnWeight, viaEnStyle, headerBadgeOpts, combinedAlign)}
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }

        const destZhSize = sizeMode === 'grid' ? '16.5px' : (isCompact ? '18px' : '25px');
        const destEnSize = sizeMode === 'grid' ? '10.8px' : (isCompact ? '11.5px' : '15px');

        const destContainerHTML = hasDest ? `
          <div style="
            flex:1;
            background-color:${C.destBoxBg};
            color:${C.destBoxText};
            padding:${isCompact ? '5px 8px' : '6px 10px'};
            border-radius:4px;
            box-sizing:border-box;
            display:flex;
            flex-direction:column;
            justify-content:center;
          ">
            ${cleanDestZh ? `
              <div class="sheet-text-fix" style="font-size:${destZhSize}; font-weight:900; line-height:1.15; display:block;">
                ${formatBbiMultilineTextHTML(cleanDestZh, headerBadgeOpts)}
              </div>
            ` : ''}
            ${cleanDestEn ? `
              <div class="sheet-text-fix" style="font-size:${destEnSize}; font-weight:700; line-height:1.15; display:block; margin-top:1px;">
                ${formatBbiMultilineTextHTML(cleanDestEn, headerBadgeOpts)}
              </div>
            ` : ''}
          </div>
        ` : '';

        const viaContainerHTML = hasVia ? `
          <div style="
            background-color:${C.viaBoxBg};
            color:${C.viaBoxText};
            padding:${sizeMode === 'grid' ? '4px 8px' : '4.5px 10px'};
            border-radius:4px;
            box-sizing:border-box;
            display:flex;
            flex-direction:column;
            justify-content:center;
            gap:1.5px;
          ">
            ${cleanViaZh ? `
              <div class="sheet-text-fix" style="font-size:${customViaZhSize}px; font-weight:${viaZhWeight}; font-style:${viaZhStyle}; display:block; line-height:1.2; width:100%;">
                ${formatViaMultilineTextHTML(cleanViaZh, '經', viaZhPrefixSize, viaZhWeight, viaZhStyle, headerBadgeOpts, viaAlignMode)}
              </div>
            ` : ''}
            ${cleanViaEn ? `
              <div class="sheet-text-fix" style="font-size:${customViaEnSize}px; font-weight:${viaEnWeight}; font-style:${viaEnStyle}; display:block; line-height:1.15; width:100%;">
                ${formatViaMultilineTextHTML(cleanViaEn, 'VIA', viaEnPrefixSize, viaEnWeight, viaEnStyle, headerBadgeOpts, viaAlignMode)}
              </div>
            ` : ''}
          </div>
        ` : '';

        return `
          <div style="flex:1; min-width:0; display:flex; flex-direction:column; gap:3px; justify-content:stretch;">
            ${destContainerHTML}
            ${viaContainerHTML}
          </div>
        `;
      };

      const renderSingleRouteBoxElementHTML = (box, widthStyle = 'width:100%;', scaleContext = 'full') => {
        const boxBg = box.bgColor || C.routeBoxBg || '#0d8556';
        const boxText = box.textColor || C.routeBoxText || '#ffffff';
        const showInnerLine = box.innerWhiteLine !== undefined ? Boolean(box.innerWhiteLine) : Boolean(R.routeBoxInnerWhiteLine);
        const showOwl = Boolean(box.showOwlUnderN);
        const owlPosition = box.owlPosition || 'auto';
        const rawStr = String(box.routeNumber || '').trim();
        const routeParts = rawStr.match(/^(\S+)(\s+.*)$/);

        const padX = (box.padX !== undefined && !isNaN(Number(box.padX))) ? Math.max(0, Number(box.padX)) : 8;
        const padY = (box.padY !== undefined && !isNaN(Number(box.padY))) ? Math.max(0, Number(box.padY)) : defaultHeaderPadY;
        const outerPad = (box.outerPad !== undefined && !isNaN(Number(box.outerPad)))
          ? Math.max(0, Number(box.outerPad))
          : (showInnerLine ? 5 : 6);
        const letterSpacingEm = (box.letterSpacingEm !== undefined && !isNaN(Number(box.letterSpacingEm))) ? Number(box.letterSpacingEm) : -0.025;
        const fontScaleX = (box.fontScaleX !== undefined && !isNaN(Number(box.fontScaleX))) ? Number(box.fontScaleX) : 100;
        const tokenGapPx = (box.tokenGapPx !== undefined && !isNaN(Number(box.tokenGapPx))) ? Number(box.tokenGapPx) : 2.5;
        const nOffsetX = (box.nOffsetX !== undefined && !isNaN(Number(box.nOffsetX))) ? Number(box.nOffsetX) : 0;
        const nOffsetY = (box.nOffsetY !== undefined && !isNaN(Number(box.nOffsetY))) ? Number(box.nOffsetY) : 0;

        const rawFontSize = Math.max(16, Number(box.fontSizePx) || mainRouteFontSize);
        let effectiveFontSize = rawFontSize;
        if (scaleContext === 'multi_3plus' && rawFontSize > 48) {
          effectiveFontSize = 40;
        } else if (scaleContext === 'compact' && rawFontSize > 64) {
          effectiveFontSize = 52;
        }

        const boxBadgeOpts = {
          ...headerBadgeOpts,
          bgColor: boxBg,
          textColor: boxText,
          innerWhiteLine: false
        };

        const mainTokenHTML = renderRouteTokenWithOwlHTML(
          routeParts ? routeParts[1] : rawStr,
          effectiveFontSize,
          boxText,
          boxBg,
          showOwl,
          { letterSpacingEm, fontScaleX, tokenGapPx, owlPosition, nOffsetX, nOffsetY }
        );

        const renderedRouteHTML = routeParts
          ? `${mainTokenHTML}<span style="font-family:${routeFontFamily}; font-size:${headerMentionedSize}px; font-weight:600; margin-left:4px; vertical-align:middle;">${formatTextWithRouteBadges(routeParts[2].trim(), boxBadgeOpts)}</span>`
          : mainTokenHTML;

        return `
          <div style="
            background-color:${boxBg};
            color:${boxText};
            padding:${outerPad}px;
            border-radius:4px;
            box-sizing:border-box;
            display:flex;
            flex-direction:column;
            justify-content:center;
            ${widthStyle}
          ">
            <div style="
              ${showInnerLine ? 'border:1.5px solid rgba(255,255,255,0.88);' : 'border:none;'}
              border-radius:2.5px;
              padding:${padY}px ${padX}px;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              position:relative;
              height:100%;
              box-sizing:border-box;
            ">
              <div class="sheet-text-fix" style="
                font-family:${routeFontFamily};
                font-size:${effectiveFontSize}px;
                font-weight:600;
                line-height:1;
                letter-spacing:${letterSpacingEm}em;
                text-decoration:none;
                border-bottom:none;
                display:flex;
                align-items:center;
                justify-content:center;
                flex-wrap:wrap;
                white-space:nowrap;
              ">${renderedRouteHTML}</div>
            </div>
          </div>
        `;
      };

      const headerClickAction = isTempScratchMode
        ? "showToast('臨時製作路線紙模式禁止使用「路線號碼及目的地」！請先還原至正式模式', 'rose')"
        : "switchEditorTab('info', 'sec-route')";

      if (routeLayoutMode === 'inline_left') {
        if (destLayoutMode === 'shared_below') {
          const sharedDv = getBoxDestVia(routeBoxes[0], 0);
          const leftRoutesStackHTML = `
            <div style="flex:0 0 auto; min-width:38%; display:flex; flex-direction:column; gap:3px; justify-content:stretch;">
              ${routeBoxes.map(b => renderSingleRouteBoxElementHTML(b, 'width:100%; flex:1;', 'compact')).join('')}
            </div>
          `;
          const rightSharedDestHTML = renderDestAndViaBlockHTML(sharedDv.destZh, sharedDv.destEn, sharedDv.viaZh, sharedDv.viaEn, 'compact', sharedDv);
          return `
            <div onclick="${headerClickAction}" class="preview-clickable" style="display:flex; flex-direction:row; align-items:stretch; gap:3px; width:100%; min-width:0; ${pushToBottomStyle}">
              ${leftRoutesStackHTML}
              ${rightSharedDestHTML}
            </div>
          `;
        }

        if (destLayoutMode === 'per_route_grid' && routeBoxes.length > 1) {
          const gridItemsHTML = routeBoxes.map((b, idx) => {
            const dv = getBoxDestVia(b, idx);
            return `
              <div style="display:flex; flex-direction:row; align-items:stretch; gap:2.5px; min-width:0;">
                ${renderSingleRouteBoxElementHTML(b, 'flex:0 0 auto; min-width:36%;', 'multi_3plus')}
                ${renderDestAndViaBlockHTML(dv.destZh, dv.destEn, dv.viaZh, dv.viaEn, 'grid', dv)}
              </div>
            `;
          }).join('');
          return `
            <div onclick="${headerClickAction}" class="preview-clickable" style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:3px; width:100%; ${pushToBottomStyle}">
              ${gridItemsHTML}
            </div>
          `;
        }

        const rowsHTML = routeBoxes.map((b, idx) => {
          const dv = getBoxDestVia(b, idx);
          return `
            <div style="display:flex; flex-direction:row; align-items:stretch; gap:3px; width:100%; min-width:0;">
              ${renderSingleRouteBoxElementHTML(b, 'flex:0 0 auto; min-width:38%;', 'compact')}
              ${renderDestAndViaBlockHTML(dv.destZh, dv.destEn, dv.viaZh, dv.viaEn, 'compact', dv)}
            </div>
          `;
        }).join('');

        return `
          <div onclick="${headerClickAction}" class="preview-clickable" style="display:flex; flex-direction:column; gap:3px; ${pushToBottomStyle}">
            ${rowsHTML}
          </div>
        `;
      }

      if (routeLayoutMode === 'single_row' && destLayoutMode === 'per_route_stack') {
        const stackedPairsHTML = routeBoxes.map((b, idx) => {
          const dv = getBoxDestVia(b, idx);
          return `
            <div style="display:flex; flex-direction:column; gap:3px; width:100%; min-width:0;">
              ${renderSingleRouteBoxElementHTML(b, 'width:100%;', 'full')}
              ${renderDestAndViaBlockHTML(dv.destZh, dv.destEn, dv.viaZh, dv.viaEn, 'normal', dv)}
            </div>
          `;
        }).join('');

        return `
          <div onclick="${headerClickAction}" class="preview-clickable" style="display:flex; flex-direction:column; gap:3px; ${pushToBottomStyle}">
            ${stackedPairsHTML}
          </div>
        `;
      }

      if ((routeLayoutMode === 'two_per_row' || routeLayoutMode === 'all_in_row') && destLayoutMode === 'per_route_grid' && routeBoxes.length > 1) {
        const colCount = routeLayoutMode === 'two_per_row' ? 2 : routeBoxes.length;
        const scaleCtx = colCount >= 3 ? 'multi_3plus' : 'compact';

        const alignedColsHTML = routeBoxes.map((b, idx) => {
          const dv = getBoxDestVia(b, idx);
          return `
            <div style="display:flex; flex-direction:column; gap:3px; min-width:0; height:100%;">
              ${renderSingleRouteBoxElementHTML(b, 'width:100%;', scaleCtx)}
              ${renderDestAndViaBlockHTML(dv.destZh, dv.destEn, dv.viaZh, dv.viaEn, 'grid', dv)}
            </div>
          `;
        }).join('');

        return `
          <div onclick="${headerClickAction}" class="preview-clickable" style="display:grid; grid-template-columns:repeat(${colCount}, minmax(0, 1fr)); gap:3px; width:100%; align-items:stretch; ${pushToBottomStyle}">
            ${alignedColsHTML}
          </div>
        `;
      }

      let topRoutesBlockHTML = '';
      if (routeLayoutMode === 'single_row') {
        topRoutesBlockHTML = `
          <div style="display:flex; flex-direction:column; gap:3px; width:100%;">
            ${routeBoxes.map(b => renderSingleRouteBoxElementHTML(b, 'width:100%;', 'full')).join('')}
          </div>
        `;
      } else if (routeLayoutMode === 'two_per_row') {
        const cols = routeBoxes.length > 1 ? 2 : 1;
        const scaleCtx = cols > 1 ? 'compact' : 'full';
        topRoutesBlockHTML = `
          <div style="display:grid; grid-template-columns:repeat(${cols}, minmax(0, 1fr)); gap:3px; width:100%;">
            ${routeBoxes.map(b => renderSingleRouteBoxElementHTML(b, 'width:100%; height:100%;', scaleCtx)).join('')}
          </div>
        `;
      } else {
        const cols = Math.max(1, routeBoxes.length);
        const scaleCtx = cols >= 3 ? 'multi_3plus' : (cols === 2 ? 'compact' : 'full');
        topRoutesBlockHTML = `
          <div style="display:grid; grid-template-columns:repeat(${cols}, minmax(0, 1fr)); gap:3px; width:100%;">
            ${routeBoxes.map(b => renderSingleRouteBoxElementHTML(b, 'width:100%; height:100%;', scaleCtx)).join('')}
          </div>
        `;
      }

      let bottomDestBlockHTML = '';
      if (destLayoutMode === 'shared_below') {
        const sharedDv = getBoxDestVia(routeBoxes[0], 0);
        bottomDestBlockHTML = renderDestAndViaBlockHTML(sharedDv.destZh, sharedDv.destEn, sharedDv.viaZh, sharedDv.viaEn, 'normal', sharedDv);
      } else if (destLayoutMode === 'per_route_grid') {
        const destCols = routeBoxes.length > 1 ? 2 : 1;
        const destCellsHTML = routeBoxes.map((b, idx) => {
          const dv = getBoxDestVia(b, idx);
          return renderDestAndViaBlockHTML(dv.destZh, dv.destEn, dv.viaZh, dv.viaEn, destCols > 1 ? 'grid' : 'normal', dv);
        }).filter(Boolean).join('');
        bottomDestBlockHTML = destCellsHTML ? `
          <div style="display:grid; grid-template-columns:repeat(${destCols}, minmax(0, 1fr)); gap:3px; width:100%; align-items:stretch;">
            ${destCellsHTML}
          </div>
        ` : '';
      } else {
        const destRowsHTML = routeBoxes.map((b, idx) => {
          const dv = getBoxDestVia(b, idx);
          return renderDestAndViaBlockHTML(dv.destZh, dv.destEn, dv.viaZh, dv.viaEn, 'normal', dv);
        }).filter(Boolean).join('');
        bottomDestBlockHTML = destRowsHTML ? `
          <div style="display:flex; flex-direction:column; gap:3px; width:100%;">
            ${destRowsHTML}
          </div>
        ` : '';
      }

      return `
        <div onclick="${headerClickAction}" class="preview-clickable" style="display:flex; flex-direction:column; gap:3px; ${pushToBottomStyle}">
          ${topRoutesBlockHTML}
          ${bottomDestBlockHTML}
        </div>
      `;
    }

    // 2. 路線中英文簡介橫幅
    case 'intro_banner': {
      const iconType = R.introIconType || 'none';
      if (!R.introZh && !R.introEn && iconType === 'none') return '';

      const headerMentionedSize = Math.max(6, Number(R.headerMentionedRouteFontSizePx) || 13);
      const introBadgeOpts = {
        fontSizePx: headerMentionedSize,
        bgColor: C.routeBoxBg || '#0d8556',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        contrastBorder: true,
        innerWhiteLine: false
      };

      const zhFontSize = Math.max(7, Number(R.introZhFontSizePx) || 13);
      const enFontSize = Math.max(6, Number(R.introEnFontSizePx) || 9.8);
      const zhWeight = R.introZhBold !== false ? '900' : '400';
      const enWeight = R.introEnBold !== false ? '700' : '400';
      const zhStyle = R.introZhItalic ? 'italic' : 'normal';
      const enStyle = R.introEnItalic ? 'italic' : 'normal';

      const iconSize = Math.max(12, Number(R.introIconSizePx) || 22);
      const v0 = appConfig.variants?.[0] || {};
      const corridorBg = v0.corridorSvgBg || C.corridorSvgBg || v0.color || themePrimaryColor;
      const corridorFg = v0.corridorSvgFg || C.corridorSvgFg || '#ffffff';
      const tunnelBg = v0.tunnelSvgBg || C.tunnelSvgBg || v0.color || themePrimaryColor;
      const tunnelFg = v0.tunnelSvgFg || C.tunnelSvgFg || '#ffffff';

      let introIconsHTML = '';
      if (iconType === 'corridor') {
        introIconsHTML = `<div style="display:flex; align-items:center; flex-shrink:0;">${createHkTrafficSign353Svg(iconSize, corridorBg, corridorFg)}</div>`;
      } else if (iconType === 'tunnel') {
        introIconsHTML = `<div style="display:flex; align-items:center; flex-shrink:0;">${createHkTunnelSvg(iconSize, tunnelBg, tunnelFg)}</div>`;
      } else if (iconType === 'both') {
        introIconsHTML = `<div style="display:flex; align-items:center; gap:3.5px; flex-shrink:0;">${createHkTrafficSign353Svg(iconSize, corridorBg, corridorFg)}${createHkTunnelSvg(iconSize, tunnelBg, tunnelFg)}</div>`;
      }

      const bannerBg = C.introBannerBg || C.timetableHeaderBg || themePrimaryColor;
      const bannerText = C.introBannerText || C.timetableHeaderText || '#ffffff';

      return `
        <div onclick="switchEditorTab('info', 'sec-intro')" class="preview-clickable" style="
          background-color:${bannerBg};
          color:${bannerText};
          padding:5px 10px;
          border-radius:4px;
          text-align:center;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:6px;
          box-sizing:border-box;
          ${pushToBottomStyle}
        ">
          ${introIconsHTML}
          <div style="display:flex; flex-direction:column; justify-content:center; min-width:0;">
            ${R.introZh ? `<div class="sheet-text-fix" style="font-size:${zhFontSize}px; font-weight:${zhWeight}; font-style:${zhStyle}; display:block; line-height:1.22;">${formatTextWithRouteBadges(R.introZh, introBadgeOpts)}</div>` : ''}
            ${R.introEn ? `<div class="sheet-text-fix" style="font-size:${enFontSize}px; font-weight:${enWeight}; font-style:${enStyle}; display:block; line-height:1.18; margin-top:1px;">${formatTextWithRouteBadges(R.introEn, introBadgeOpts)}</div>` : ''}
          </div>
        </div>
      `;
    }

    // 3. 時間表模組
    case 'timetable': {
      const variants = appConfig.variants || [];
      const variantTables = ensureVariantTimetablesSynced();
      const hasMultipleVariants = variants.length > 1;

      const globalDateHeaderBg = C.dateHeaderBg || '#dcedc8';
      const globalDateHeaderText = C.dateHeaderText || '#111827';
      const globalClockContainerBg = C.clockContainerBg || globalDateHeaderBg;
      const globalClockSvgColor = C.clockSvgColor || themePrimaryColor;
      const globalSlotEvenBg = C.timetableSlotEvenBg || '#f8fafc';
      const globalSlotOddBg = C.timetableSlotOddBg || '#f1f5f9';
      const timetableContainerBg = C.timetableBg || 'transparent';
      const timetableHeaderBg = C.timetableHeaderBg || C.introBannerBg || themePrimaryColor;
      const timetableHeaderText = C.timetableHeaderText || C.introBannerText || '#ffffff';

      const mentionedFontSize = Math.max(5, Number(T.mentionedRouteFontSizePx) || 9.2);
      const mentionedScaleRatio = mentionedFontSize / 9.2;
      const mentionedStyleMode = T.mentionedRouteStyle || 'badge';
      const dateHeaderFontSizePx = Math.max(5.5, Number(T.dateHeaderFontSizePx) || 8.6);

      const defaultLockedDateBarH = 20;
      const dateBarFixedHeightPx = (T.dateHeaderHeightPx !== undefined && !isNaN(Number(T.dateHeaderHeightPx)) && Number(T.dateHeaderHeightPx) >= 14)
        ? Number(T.dateHeaderHeightPx)
        : defaultLockedDateBarH;
      const twoLineDateFontSizePx = Math.min(
        dateHeaderFontSizePx,
        Math.max(6.2, Math.floor(((dateBarFixedHeightPx - 2.4) / 2.08) * 10) / 10)
      );
      const clockSvgSizePx = Math.max(10.5, Math.min(dateBarFixedHeightPx - 5, Math.round(dateBarFixedHeightPx * 0.75 * 10) / 10));

      const activeTables = hasMultipleVariants
        ? variantTables.map((vt, idx) => ({ vt, variant: variants[idx], idx })).filter(item => item.vt.enabled !== false)
        : [{ vt: variantTables[0], variant: variants[0], idx: 0 }];

      const variantTablesHTML = activeTables.map(({ vt, variant, idx }) => {
        const vColor = variant?.color || themePrimaryColor;
        const vBadgeText = variant?.badgeText === 'black' ? '#111827' : '#ffffff';
        const showHeadway = vt.showHeadwayCol !== false;
        const showDateBar = vt.showDateHeader !== false;

        const thickLineColor = variant?.timetableThickLineColor || C.timetableThickLineColor || vColor || themePrimaryColor;
        const dateBarBgColor = variant?.dateHeaderBg || globalDateHeaderBg;
        const dateBarTextColor = variant?.dateHeaderText || globalDateHeaderText;
        const clockContainerBgColor = variant?.clockContainerBg || C.clockContainerBg || dateBarBgColor;
        const clockSvgStrokeColor = variant?.clockSvgColor || globalClockSvgColor || vColor;

        const slotEvenBg = variant?.timetableSlotEvenBg || globalSlotEvenBg;
        const slotOddBg = variant?.timetableSlotOddBg || globalSlotOddBg;

        const originHeaderBgColor = variant?.originHeaderBg || C.originHeaderBg || dateBarBgColor;
        const originTextMode = variant?.originHeaderText || C.originHeaderText || 'black';
        const originHeaderTextColor = originTextMode === 'black' ? '#111827' : '#ffffff';
        const originSubTextColor = originTextMode === 'black' ? '#334155' : 'rgba(255,255,255,0.92)';

        const headwayHeaderBgColor = variant?.headwayHeaderBg || C.headwayHeaderBg || dateBarBgColor;
        const headwayTextMode = variant?.headwayHeaderText || C.headwayHeaderText || 'black';
        const headwayHeaderTextColor = headwayTextMode === 'black' ? '#111827' : '#ffffff';
        const headwaySubTextColor = headwayTextMode === 'black' ? '#334155' : 'rgba(255,255,255,0.92)';

        const resolvedOrigin = resolveVariantOriginHeaderNames(vt, variant);

        const isRouteBoxShown = Boolean(vt.showRouteBox);
        const rawRouteNo = String(vt.routeNumber ?? variant?.routeNumber ?? '').trim();
        const vRouteNo = rawRouteNo || String(R.routeNumber || 'B13').trim() || 'B13';
        const vRouteInnerLine = vt.routeBoxInnerWhiteLine !== undefined
          ? Boolean(vt.routeBoxInnerWhiteLine)
          : (variant?.routeBoxInnerWhiteLine !== false);
        const vRouteBoxPos = vt.routeBoxPosition || variant?.routeBoxPosition || 'left';
        const hasLeftRouteBox = isRouteBoxShown && vRouteBoxPos === 'left';
        const hasTopRouteBox = isRouteBoxShown && vRouteBoxPos === 'top';

        const vRouteBoxBg = vt.routeBoxColor || variant?.routeBoxColor || C.routeBoxBg || '#0d8556';
        const vRouteBoxText = vt.routeBoxTextColor || variant?.routeBoxTextColor || C.routeBoxText || '#ffffff';

        const vtPadX = (vt.routeBoxPadX !== undefined && !isNaN(Number(vt.routeBoxPadX))) ? Math.max(0, Number(vt.routeBoxPadX)) : 5.5;
        const vtPadY = (vt.routeBoxPadY !== undefined && !isNaN(Number(vt.routeBoxPadY))) ? Math.max(0, Number(vt.routeBoxPadY)) : 2;
        const vtOuterPad = (vt.routeBoxOuterPad !== undefined && !isNaN(Number(vt.routeBoxOuterPad)))
          ? Math.max(0, Number(vt.routeBoxOuterPad))
          : (vRouteInnerLine ? 2 : 0);
        const vtTightnessEm = (vt.routeBoxTightnessEm !== undefined && !isNaN(Number(vt.routeBoxTightnessEm)))
          ? Number(vt.routeBoxTightnessEm)
          : -0.025;
        const vtFontScaleX = (vt.routeBoxFontScaleX !== undefined && !isNaN(Number(vt.routeBoxFontScaleX)))
          ? Number(vt.routeBoxFontScaleX)
          : 100;
        const vtTokenGapPx = (vt.routeBoxTokenGapPx !== undefined && !isNaN(Number(vt.routeBoxTokenGapPx)))
          ? Number(vt.routeBoxTokenGapPx)
          : 2;

        const nonRouteBoxExtraRoutes = [
          globalExtraRoutes,
          vt.mentionedRouteNumbers || ''
        ].filter(Boolean).join(',');

        const routeFormatTextOpts = {
          fontSizePx: mentionedFontSize,
          bgColor: C.routeBoxBg || '#0d8556',
          textColor: C.routeBoxText || '#ffffff',
          styleMode: mentionedStyleMode,
          extraRoutes: nonRouteBoxExtraRoutes,
          allowPureNumbers: false,
          innerWhiteLine: false
        };
        const routeFormatDateOpts = {
          ...routeFormatTextOpts,
          fontSizePx: Math.max(5.5, dateHeaderFontSizePx - 0.2)
        };
        const routeFormatTwoLineDateOpts = {
          ...routeFormatTextOpts,
          fontSizePx: Math.max(5.5, twoLineDateFontSizePx - 0.2)
        };
        const routeFormatRowOpts = {
          ...routeFormatTextOpts
        };

        const charCount = Array.from(vRouteNo).length;
        const baseLeftSize = charCount >= 5 ? 9.5 : (charCount === 4 ? 11.2 : 14.2);
        const baseTopSize = charCount >= 5 ? 12.5 : (charCount === 4 ? 14.5 : 18.0);
        const customBoxFontSize = Number(vt.routeBoxFontSizePx || variant?.routeBoxFontSizePx) || 0;
        const leftFontSizePx = customBoxFontSize > 0 ? customBoxFontSize : Math.round(baseLeftSize * mentionedScaleRatio * 10) / 10;
        const topFontSizePx = customBoxFontSize > 0 ? customBoxFontSize : Math.round(baseTopSize * mentionedScaleRatio * 10) / 10;

        const bodyGridCols = showHeadway ? '2.5fr 1fr' : '1fr';

        const leftRouteBoxHTML = hasLeftRouteBox ? `
          <div style="
            background-color:${vRouteBoxBg};
            color:${vRouteBoxText};
            padding:${vtOuterPad}px;
            border-radius:3px 3px 0 0;
            box-sizing:border-box;
            display:flex;
            align-items:stretch;
            justify-content:center;
            flex-shrink:0;
          ">
            <div style="
              ${vRouteInnerLine ? 'border:1.25px solid rgba(255,255,255,0.92);' : 'border:none;'}
              border-radius:2px;
              padding:${vtPadY}px ${vtPadX}px;
              min-width:26px;
              display:flex;
              align-items:center;
              justify-content:center;
              box-sizing:border-box;
              width:100%;
            ">
              <div class="sheet-text-fix" style="
                font-family:${routeFontFamily};
                font-size:${leftFontSizePx}px;
                font-weight:600;
                letter-spacing:${vtTightnessEm}em;
                line-height:1;
                color:${vRouteBoxText};
                white-space:nowrap;
                display:flex;
                align-items:center;
                justify-content:center;
              ">${renderRouteTokenWithOwlHTML(vRouteNo, leftFontSizePx, vRouteBoxText, vRouteBoxBg, false, { letterSpacingEm: vtTightnessEm, fontScaleX: vtFontScaleX, tokenGapPx: vtTokenGapPx })}</div>
            </div>
          </div>
        ` : '';

        const topRouteBoxHTML = hasTopRouteBox ? `
          <div style="
            background-color:${vRouteBoxBg};
            color:${vRouteBoxText};
            padding:${vtOuterPad}px;
            border-radius:3px;
            box-sizing:border-box;
          ">
            <div style="
              ${vRouteInnerLine ? 'border:1.25px solid rgba(255,255,255,0.92);' : 'border:none;'}
              border-radius:2px;
              padding:${vtPadY}px ${vtPadX}px;
              display:flex;
              align-items:center;
              justify-content:center;
              box-sizing:border-box;
              width:100%;
            ">
              <div class="sheet-text-fix" style="
                font-family:${routeFontFamily};
                font-size:${topFontSizePx}px;
                font-weight:600;
                letter-spacing:${vtTightnessEm}em;
                line-height:1.05;
                color:${vRouteBoxText};
                white-space:nowrap;
                display:flex;
                align-items:center;
                justify-content:center;
              ">${renderRouteTokenWithOwlHTML(vRouteNo, topFontSizePx, vRouteBoxText, vRouteBoxBg, false, { letterSpacingEm: vtTightnessEm, fontScaleX: vtFontScaleX, tokenGapPx: vtTokenGapPx })}</div>
            </div>
          </div>
        ` : '';

        const showBadge = hasMultipleVariants && (vt.showVariantBadge !== false);
        const variantBadgeHTML = showBadge ? `
          <span style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            width:13.5px;
            height:13.5px;
            border-radius:9999px;
            background-color:${vColor};
            color:${vBadgeText};
            font-size:8.8px;
            font-weight:900;
            line-height:1;
            box-shadow:0 0 0 1px #ffffff;
            flex-shrink:0;
          ">
            <span class="sheet-text-fix" style="line-height:1;">${idx + 1}</span>
          </span>
        ` : '';

        const topNoteHTML = (vt.topNoteZh || vt.topNoteEn) ? `
          <div style="font-size:7.2px; color:#475569; line-height:1.15; padding:1px 1px;">
            ${vt.topNoteZh ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.topNoteZh, routeFormatTextOpts)}</div>` : ''}
            ${vt.topNoteEn ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.topNoteEn, routeFormatTextOpts)}</div>` : ''}
          </div>
        ` : '';

        const dateGroupsHTML = (vt.dateGroups || []).map((dg, dgIdx) => {
          const isFirstDateGroup = dgIdx === 0;

          const isSatSunPhBreak =
            getDateGroupPresetKey(dg) === 'sat_sun_ph' ||
            /Sat,\s*Sun\s*&\s*Public\s*Holidays/i.test(String(dg.dateTitleEn || '').trim());
          const effectiveDateFontSizePx = isSatSunPhBreak ? twoLineDateFontSizePx : dateHeaderFontSizePx;

          const dateLabelContentHTML = dg.dateTitleEn
            ? (isSatSunPhBreak
                ? `<span style="display:block; line-height:1.02;">${formatTextWithRouteBadges(dg.dateTitleZh, routeFormatTwoLineDateOpts)} | </span><span style="display:block; line-height:1.02; margin-top:0.3px;">${formatTextWithRouteBadges(dg.dateTitleEn, routeFormatTwoLineDateOpts)}</span>`
                : `${formatTextWithRouteBadges(dg.dateTitleZh, routeFormatDateOpts)} | ${formatTextWithRouteBadges(dg.dateTitleEn, routeFormatDateOpts)}`)
            : `${formatTextWithRouteBadges(dg.dateTitleZh, routeFormatDateOpts)}`;

          const rowsHTML = (dg.rows || []).map((r, rIdx) => {
            const formattedTimeStr = formatTimetableRowTimeDisplay(r);
            const rowBg = rIdx % 2 === 0 ? slotEvenBg : slotOddBg;

            const rowBadgeHTML = r.showVariantBadge ? `
              <span style="
                display:inline-flex;
                align-items:center;
                justify-content:center;
                width:12.5px;
                height:12.5px;
                border-radius:9999px;
                background-color:${vColor};
                color:${vBadgeText};
                font-size:8.2px;
                font-weight:900;
                line-height:1;
                box-shadow:0 0 0 1px #ffffff;
                flex-shrink:0;
              ">
                <span class="sheet-text-fix" style="line-height:1;">${idx + 1}</span>
              </span>
            ` : '';

            return `
              <div style="
                display:grid;
                grid-template-columns: ${bodyGridCols};
                gap:3px;
                font-size:10.5px;
                font-weight:700;
                color:#111827;
              ">
                <div style="
                  background:${rowBg};
                  padding:2.2px 6px;
                  border-radius:2.5px;
                  display:flex;
                  align-items:center;
                  gap:4px;
                ">
                  ${rowBadgeHTML}
                  <span class="sheet-text-fix">${formatTextWithRouteBadges(formattedTimeStr, routeFormatRowOpts)}</span>
                </div>
                ${showHeadway ? `
                  <div style="
                    background:${rowBg};
                    padding:2.2px 6px;
                    border-radius:2.5px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-weight:800;
                  ">
                    <span class="sheet-text-fix">${formatTextWithRouteBadges(r.headway, routeFormatRowOpts)}</span>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('');

          return `
            <div style="display:flex; flex-direction:column; gap:2px; ${isFirstDateGroup ? 'margin-top:2.5px;' : 'margin-top:1px;'}">
              <div style="display:flex; flex-direction:column; width:100%;">
                ${showDateBar ? `
                  <div style="
                    display:grid;
                    grid-template-columns: ${bodyGridCols};
                    gap:3px;
                    align-items:stretch;
                    ${isFirstDateGroup ? `border-top:2.5px solid ${thickLineColor};` : ''}
                    box-sizing:border-box;
                  ">
                    <div style="
                      background-color:${dateBarBgColor};
                      color:${dateBarTextColor};
                      height:${dateBarFixedHeightPx}px;
                      min-height:${dateBarFixedHeightPx}px;
                      max-height:${dateBarFixedHeightPx}px;
                      padding:0.5px 6px;
                      border-radius:${isFirstDateGroup ? '0 0 3px 3px' : '2.5px'};
                      display:flex;
                      align-items:center;
                      box-sizing:border-box;
                      overflow:hidden;
                    ">
                      <span class="sheet-text-fix" style="font-size:${effectiveDateFontSizePx}px; font-weight:800; color:${dateBarTextColor}; line-height:${isSatSunPhBreak ? '1.02' : '1.1'}; display:block; width:100%;">
                        ${dateLabelContentHTML}
                      </span>
                    </div>
                    ${showHeadway ? `
                      <div style="
                        background-color:${clockContainerBgColor};
                        color:${clockSvgStrokeColor};
                        height:${dateBarFixedHeightPx}px;
                        min-height:${dateBarFixedHeightPx}px;
                        max-height:${dateBarFixedHeightPx}px;
                        padding:0.5px 5px;
                        border-radius:${isFirstDateGroup ? '0 0 3px 3px' : '2.5px'};
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        box-sizing:border-box;
                        overflow:hidden;
                      ">
                        <svg width="${clockSvgSizePx}" height="${clockSvgSizePx}" viewBox="0 0 24 24" fill="none" stroke="${clockSvgStrokeColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block; flex-shrink:0;">
                          <circle cx="12" cy="12" r="9.5"></circle>
                          <polyline points="12 6.5 12 12 15.8 12"></polyline>
                        </svg>
                      </div>
                    ` : ''}
                  </div>
                ` : (isFirstDateGroup ? `
                  <div style="width:100%; border-top:1.5px solid ${thickLineColor}; box-sizing:border-box;"></div>
                ` : '')}
              </div>
              ${rowsHTML}
            </div>
          `;
        }).join('');

        const bottomNoteHTML = (vt.bottomNoteZh || vt.bottomNoteEn) ? `
          <div style="font-size:7.2px; color:#475569; line-height:1.15; padding:1px 1px;">
            ${vt.bottomNoteZh ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.bottomNoteZh, routeFormatTextOpts)}</div>` : ''}
            ${vt.bottomNoteEn ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.bottomNoteEn, routeFormatTextOpts)}</div>` : ''}
          </div>
        ` : '';

        return `
          <div onclick="event.stopPropagation(); switchEditorTab('info', 'sec-timetable-variant-${idx}')" class="preview-clickable" style="display:flex; flex-direction:column; gap:0px; ${idx > 0 ? 'margin-top:5px;' : ''}">
            ${topNoteHTML}
            ${topRouteBoxHTML}
            <div style="display:grid; grid-template-columns: ${bodyGridCols}; gap:3px; align-items:stretch;">
              <div style="display:flex; align-items:stretch; gap:2.5px; min-width:0;">
                ${leftRouteBoxHTML}
                <div style="
                  flex:1;
                  min-width:0;
                  background-color:${originHeaderBgColor};
                  color:${originHeaderTextColor};
                  padding:3px 6px;
                  border-radius:3px 3px 0 0;
                  display:flex;
                  align-items:center;
                  gap:4.5px;
                  box-sizing:border-box;
                ">
                  ${variantBadgeHTML}
                  <div style="display:flex; flex-direction:column; justify-content:center; min-width:0;">
                    <div class="sheet-text-fix" style="font-size:9.2px; font-weight:900; color:${originHeaderTextColor}; line-height:1.14; display:block;">
                      ${formatTextWithRouteBadges(resolvedOrigin.fullZh, routeFormatTextOpts)}
                    </div>
                    <div class="sheet-text-fix" style="font-size:7.2px; font-weight:700; color:${originSubTextColor}; line-height:1.1; display:block;">
                      ${formatTextWithRouteBadges(resolvedOrigin.fullEn, routeFormatTextOpts)}
                    </div>
                  </div>
                </div>
              </div>
              ${showHeadway ? `
                <div style="
                  background-color:${headwayHeaderBgColor};
                  color:${headwayHeaderTextColor};
                  padding:3px 5px;
                  border-radius:3px 3px 0 0;
                  display:flex;
                  flex-direction:column;
                  align-items:center;
                  justify-content:center;
                  text-align:center;
                  box-sizing:border-box;
                ">
                  <div class="sheet-text-fix" style="font-size:8.6px; font-weight:900; color:${headwayHeaderTextColor}; line-height:1.12; display:block;">
                    ${esc(vt.headwayLabelZh || T.headwayLabelZh || '班次(分鐘)')}
                  </div>
                  <div class="sheet-text-fix" style="font-size:6.8px; font-weight:700; color:${headwaySubTextColor}; line-height:1.08; display:block;">
                    ${esc(vt.headwayLabelEn || T.headwayLabelEn || 'Headway (min)')}
                  </div>
                </div>
              ` : ''}
            </div>
            ${dateGroupsHTML}
            ${bottomNoteHTML}
          </div>
        `;
      }).join('');

      return `
        <div onclick="switchEditorTab('info', 'sec-timetable')" class="preview-clickable" style="
          display:flex;
          flex-direction:column;
          background:${timetableContainerBg};
          ${pushToBottomStyle}
        ">
          ${renderRightModuleTitleLabelHTML(T.titleZh, T.titleEn, C, 'inline', timetableHeaderBg, timetableHeaderText)}
          <div style="display:flex; flex-direction:column; gap:3px;">
            ${variantTablesHTML}
          </div>
        </div>
      `;
    }

    // 4. 備註與免責聲明模組
    case 'additional_info': {
      const A = R.additionalInfo || {};
      if (!A.enabled) return '';
      const hasNotes = Array.isArray(A.notes) && A.notes.some(n => (n.zh && n.zh.trim()) || (n.en && n.en.trim()));
      const hasDisclaimer = Boolean((A.disclaimerZh && A.disclaimerZh.trim()) || (A.disclaimerEn && A.disclaimerEn.trim()));
      if (!hasNotes && !hasDisclaimer) return '';

      const noteRouteOpts = {
        fontSizePx: Math.max(6, Number(T?.mentionedRouteFontSizePx) || 9.2),
        bgColor: C.routeBoxBg || '#0d8556',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        innerWhiteLine: false
      };

      return `
        <div onclick="switchEditorTab('info', 'sec-additional')" class="preview-clickable" style="
          display:flex;
          flex-direction:column;
          gap:3px;
          padding-top:2px;
          ${pushToBottomStyle}
        ">
          ${(A.notes || []).map(n => {
            if (!n.zh && !n.en) return '';
            const hasSym = Boolean(n.symbol && String(n.symbol).trim() !== '');
            return `
              <div style="display:flex; align-items:flex-start; gap:3.5px; font-size:7.6px; color:#1f2937; line-height:1.18;">
                ${hasSym ? `<span class="sheet-text-fix" style="font-weight:900; color:#111827; min-width:7px; flex-shrink:0;">${esc(n.symbol)}</span>` : ''}
                <div style="flex:1; min-width:0;">
                  ${n.zh ? `<div class="sheet-text-fix" style="font-weight:700; display:block;">${formatBbiMultilineTextHTML(n.zh, noteRouteOpts)}</div>` : ''}
                  ${n.en ? `<div class="sheet-text-fix" style="font-weight:500; color:#475569; display:block; margin-top:0.5px;">${formatBbiMultilineTextHTML(n.en, noteRouteOpts)}</div>` : ''}
                </div>
              </div>
            `;
          }).join('')}
          ${hasDisclaimer ? `
            <div style="font-size:7.2px; color:#64748b; line-height:1.15; margin-top:1px;">
              ${A.disclaimerZh ? `<div class="sheet-text-fix" style="display:block;">${esc(A.disclaimerZh)}${A.disclaimerEn ? ` | ${esc(A.disclaimerEn)}` : ''}</div>` : (A.disclaimerEn ? `<div class="sheet-text-fix" style="display:block;">${esc(A.disclaimerEn)}</div>` : '')}
            </div>
          ` : ''}
        </div>
      `;
    }

    // 5. 八達通及電子支付分段收費模組
    case 'octopus_fare': {
      const O = R.octopusFare || {};
      if (!O.enabled) return '';
      const octHeaderBg = C.octopusHeaderBg || C.timetableHeaderBg || themePrimaryColor;
      const octHeaderText = C.octopusHeaderText || C.timetableHeaderText || '#ffffff';

      const octRouteOpts = {
        fontSizePx: Math.max(6, Number(T?.mentionedRouteFontSizePx) || 9.2),
        bgColor: C.routeBoxBg || '#0d8556',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        innerWhiteLine: false
      };

      return `
        <div onclick="switchEditorTab('info', 'sec-octopus')" class="preview-clickable" style="
          display:flex;
          flex-direction:column;
          gap:2.5px;
          ${pushToBottomStyle}
        ">
          ${renderRightModuleTitleLabelHTML(O.titleZh, O.titleEn, C, 'pipe_break', octHeaderBg, octHeaderText)}
          <div style="display:flex; flex-direction:column; gap:2.5px;">
            ${(O.items || []).map(item => `
              <div style="
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:6px;
                background:#f8fafc;
                padding:3px 6px;
                border-radius:3px;
                border-left:2.5px solid ${octHeaderBg};
              ">
                <div style="flex:1; min-width:0;">
                  ${item.sectionZh ? `<div class="sheet-text-fix" style="font-size:8.6px; font-weight:800; color:#111827; display:block; line-height:1.15;">${formatBbiMultilineTextHTML(item.sectionZh, octRouteOpts)}</div>` : ''}
                  ${item.sectionEn ? `<div class="sheet-text-fix" style="font-size:7.4px; font-weight:600; color:#475569; display:block; line-height:1.12;">${formatBbiMultilineTextHTML(item.sectionEn, octRouteOpts)}</div>` : ''}
                </div>
                <div class="sheet-text-fix" style="font-family:${fareFontFamily} !important; font-size:13.5px; font-weight:900; color:${octHeaderBg}; flex-shrink:0;">
                  ${esc(item.price)}
                </div>
              </div>
            `).join('')}
            ${(O.noteZh || O.noteEn) ? `
              <div style="font-size:7.0px; color:#475569; line-height:1.15; padding:1px 2px;">
                ${O.noteZh ? `<div class="sheet-text-fix" style="display:block;">${esc(O.noteZh)}</div>` : ''}
                ${O.noteEn ? `<div class="sheet-text-fix" style="display:block; margin-top:1px;">${esc(O.noteEn)}</div>` : ''}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    // 6. 巴士轉乘計劃模組
    case 'bbi_info': {
      return renderBbiInfoModuleHTML(R.bbiInfo || {}, C, R, T, themePrimaryColor, globalExtraRoutes, pushToBottomStyle);
    }

    // 7. 生效日期與營運商頁尾模組
    case 'effective_footer': {
      return renderEffectiveFooterModuleHTML(R.effectiveFooter || {}, C, themePrimaryColor, pushToBottomStyle);
    }

    default:
      return '';
  }
}

// 更新「6. 巴士轉乘計劃」欄位並即時同步預覽卡與 A4 畫布（輸入文字與拉動滑桿不失焦）
function updateBbiInfoField(field, val, refreshSidebar = false) {
  const B = ensureBbiInfoConfigSynced();

  if (['enabled', 'showBorderFrame', 'showTopLine', 'showQrBox'].includes(field)) {
    B[field] = Boolean(val);
    refreshSidebar = true;
  } else if ([
    'qrSizePx',
    'qrRightMarginPx',
    'footerZhFontSizePx',
    'footerEnFontSizePx',
    'itemZhFontSizePx',
    'itemEnFontSizePx',
    'contentPadY'
  ].includes(field)) {
    const numVal = Number(val);
    if (!isNaN(numVal)) {
      B[field] = numVal;
      const curInput = document.getElementById(`input-bbi-${field}`);
      const curRange = document.getElementById(`range-bbi-${field}`);
      if (curInput && document.activeElement !== curInput) curInput.value = B[field];
      if (curRange && document.activeElement !== curRange) curRange.value = B[field];
    }
  } else {
    B[field] = val;
  }

  renderA4Sheet();

  const livePreviewEl = document.getElementById('bbi-live-preview-container');
  if (livePreviewEl && !refreshSidebar) {
    const C = ensureColorsConfigSynced();
    const R = appConfig.rightData;
    const T = R.timetable || {};
    const themePrimaryColor = C.themePrimary || C.routeLineColor || '#0d8556';
    const globalExtraRoutes = [T.mentionedRouteNumbers || '', R.headerMentionedRoutes || ''].filter(Boolean).join(',');
    livePreviewEl.innerHTML = renderBbiLivePreviewCardInnerHTML(B, C, themePrimaryColor, globalExtraRoutes);
  }

  if (refreshSidebar || ['textAlign', 'qrPosition', 'qrScaleMode'].includes(field)) {
    renderEditorSidebar();
  }
}

// 一鍵套用香港五大巴士營運商的轉乘計劃宣傳字句
function applyBbiOperatorPreset(presetKey) {
  const preset = HK_BBI_OPERATOR_PRESETS.find(p => p.key === presetKey);
  if (!preset) return;
  const B = ensureBbiInfoConfigSynced();
  B.footerZh = preset.footerZh;
  B.footerEn = preset.footerEn;
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已套用「${preset.label}」巴士轉乘計劃宣傳字句`);
}

// 上傳自訂二維碼圖片 (PNG / JPG / SVG)
function uploadBbiCustomQrImage(event) {
  const file = event?.target?.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const B = ensureBbiInfoConfigSynced();
    B.customQrDataUrl = e.target.result;
    B.showQrBox = true;
    renderA4Sheet();
    renderEditorSidebar();
    showToast('已成功載入自訂二維碼圖片 (190px × 190px)！');
  };
  reader.readAsDataURL(file);
}

// 清除自訂二維碼圖片，恢復內建城巴風格圓角向量二維碼
function clearBbiCustomQrImage() {
  const B = ensureBbiInfoConfigSynced();
  B.customQrDataUrl = '';
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已恢復內建 190px × 190px 擬真圓角向量二維碼');
}

// 新增自訂巴士轉乘優惠條目
function addBbiCustomItem() {
  const B = ensureBbiInfoConfigSynced();
  B.items.push({
    zh: '乘客於西區海底隧道轉乘站轉乘其他城巴路線可享轉乘優惠',
    en: 'Interchange discount available at Western Harbour Crossing BBI'
  });
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已新增巴士轉乘優惠條目');
}

// 更新指定巴士轉乘優惠條目
function updateBbiCustomItem(idx, field, val) {
  const B = ensureBbiInfoConfigSynced();
  if (!B.items[idx]) return;
  B.items[idx][field] = val;
  renderA4Sheet();

  const livePreviewEl = document.getElementById('bbi-live-preview-container');
  if (livePreviewEl) {
    const C = ensureColorsConfigSynced();
    const R = appConfig.rightData;
    const T = R.timetable || {};
    const themePrimaryColor = C.themePrimary || C.routeLineColor || '#0d8556';
    const globalExtraRoutes = [T.mentionedRouteNumbers || '', R.headerMentionedRoutes || ''].filter(Boolean).join(',');
    livePreviewEl.innerHTML = renderBbiLivePreviewCardInnerHTML(B, C, themePrimaryColor, globalExtraRoutes);
  }
}

// 刪除指定巴士轉乘優惠條目
function removeBbiCustomItem(idx) {
  const B = ensureBbiInfoConfigSynced();
  B.items.splice(idx, 1);
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已刪除轉乘優惠條目');
}

// 一鍵重設巴士轉乘計劃為參考圖標準排版（無外框、文字置中、190px*190px 二維碼）
function resetBbiTypographyAndLayout() {
  const B = ensureBbiInfoConfigSynced();
  B.titleZh = '巴士轉乘計劃';
  B.titleEn = 'Bus-Bus Interchange';
  B.footerZh = '詳情請參閱城巴網頁';
  B.footerEn = 'Please refer to Citybus Website\nfor details';
  B.textAlign = 'center';
  B.showBorderFrame = false;
  B.showTopLine = false;
  B.showQrBox = true;
  B.qrPosition = 'right';
  B.qrSizePx = 190;
  B.qrScaleMode = 'proportional';
  B.qrRightMarginPx = 10;
  B.qrColor = '#000000';
  B.footerZhFontSizePx = 9.8;
  B.footerEnFontSizePx = 8.4;
  B.footerTextColor = '#6b7280';
  B.contentPadY = 8;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已恢復參考圖標準排版（無外框・文字置中・190×190 二維碼）！');
}

// 渲染「3. 右側資訊欄」內的「6. 巴士轉乘計劃 (#sec-bbi)」完整控制面板（已取消頂部裝飾線開關）
function renderBbiEditorSectionHTML() {
  const B = ensureBbiInfoConfigSynced();
  const C = ensureColorsConfigSynced();
  const R = appConfig.rightData;
  const T = R.timetable || {};
  const themePrimaryColor = C.themePrimary || C.routeLineColor || '#0d8556';
  const globalExtraRoutes = [T.mentionedRouteNumbers || '', R.headerMentionedRoutes || ''].filter(Boolean).join(',');

  const operatorPresetsHTML = HK_BBI_OPERATOR_PRESETS.map(p => {
    const isMatched = B.footerZh === p.footerZh;
    return `
      <button
        type="button"
        onclick="applyBbiOperatorPreset('${p.key}')"
        class="px-2 py-1.5 rounded-lg border text-[10px] font-bold transition flex items-center justify-center gap-1 ${
          isMatched
            ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-sm ring-1 ring-emerald-400/40'
            : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 text-slate-300 hover:text-white'
        }"
      >
        ${isMatched ? '<i class="fa-solid fa-circle-check text-emerald-400 text-[9px]"></i>' : ''}
        <span class="truncate">${esc(p.label)}</span>
      </button>
    `;
  }).join('');

  const itemsEditorHTML = (B.items || []).map((item, idx) => `
    <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-bold text-amber-300">轉乘條目 #${idx + 1}</span>
        <button
          type="button"
          onclick="removeBbiCustomItem(${idx})"
          class="px-1.5 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[9.5px] transition"
        >
          <i class="fa-solid fa-trash-can mr-0.5"></i>刪除
        </button>
      </div>
      <input
        type="text"
        value="${esc(item.zh || '')}"
        oninput="updateBbiCustomItem(${idx}, 'zh', this.value)"
        placeholder="中文轉乘說明（可輸入路線號碼自動轉徽章）"
        class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100"
      />
      <input
        type="text"
        value="${esc(item.en || '')}"
        oninput="updateBbiCustomItem(${idx}, 'en', this.value)"
        placeholder="English interchange description"
        class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[10.5px] text-slate-200"
      />
    </div>
  `).join('');

  const curAlign = B.textAlign || 'center';
  const curQrPos = B.qrPosition || 'right';
  const curQrScaleMode = B.qrScaleMode || 'proportional';

  return `
    <div id="sec-bbi" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <!-- 頂部標題與啟用開關 -->
      <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <i class="fa-solid fa-qrcode text-xs"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-100 text-xs">6. 巴士轉乘計劃 (Bus-Bus Interchange)</h3>
            <p class="text-[9.5px] text-slate-400">無外框設計・文字置中對齊・190px×190px 擬真圓角二維碼</p>
          </div>
        </div>
        <label class="flex items-center gap-1.5 cursor-pointer text-[11px] font-bold text-emerald-300 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition">
          <input
            type="checkbox"
            ${B.enabled ? 'checked' : ''}
            onchange="updateBbiInfoField('enabled', this.checked, true)"
            class="rounded accent-emerald-500"
          />
          <span>顯示此區塊</span>
        </label>
      </div>

      ${B.enabled ? `
        <!-- 頂部：所見即所得白底即時預覽卡 + 外框切換開關（已取消頂部裝飾線開關） -->
        <div class="bg-slate-950/90 border border-emerald-500/35 rounded-xl p-2.5 space-y-2 shadow-inner">
          <div class="flex items-center justify-between flex-wrap gap-1.5 text-[10px]">
            <span class="font-bold text-emerald-300 flex items-center gap-1.5">
              <i class="fa-solid fa-eye"></i>
              <span>即時排版預覽（無外框・置中文字・190×190 QR）</span>
            </span>
            <div class="flex items-center gap-2 text-[9.5px] text-slate-300">
              <label class="flex items-center gap-1 cursor-pointer hover:text-white" title="取消勾選即為無外框設計（如參考圖所示）">
                <input
                  type="checkbox"
                  ${B.showBorderFrame ? 'checked' : ''}
                  onchange="updateBbiInfoField('showBorderFrame', this.checked, true)"
                  class="rounded accent-emerald-500"
                />
                <span>顯示外框</span>
              </label>
            </div>
          </div>

          <div id="bbi-live-preview-container">
            ${renderBbiLivePreviewCardInnerHTML(B, C, themePrimaryColor, globalExtraRoutes)}
          </div>

          <!-- 文字對齊與二維碼位置直覺切換列 -->
          <div class="grid grid-cols-2 gap-2 pt-0.5">
            <div class="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800 flex items-center justify-between gap-1">
              <span class="text-[9.5px] text-slate-300 font-semibold pl-1">文字對齊：</span>
              <div class="flex items-center gap-1 bg-slate-950 p-0.5 rounded border border-slate-800 text-[9.5px]">
                <button
                  type="button"
                  onclick="updateBbiInfoField('textAlign', 'center', true)"
                  class="px-2 py-0.5 rounded transition ${curAlign === 'center' ? 'bg-emerald-600 text-white font-bold shadow' : 'text-slate-400 hover:text-slate-200'}"
                ><i class="fa-solid fa-align-center mr-1"></i>置中 (預設)</button>
                <button
                  type="button"
                  onclick="updateBbiInfoField('textAlign', 'left', true)"
                  class="px-2 py-0.5 rounded transition ${curAlign === 'left' ? 'bg-emerald-600 text-white font-bold shadow' : 'text-slate-400 hover:text-slate-200'}"
                ><i class="fa-solid fa-align-left mr-1"></i>靠左</button>
              </div>
            </div>

            <div class="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800 flex items-center justify-between gap-1">
              <span class="text-[9.5px] text-slate-300 font-semibold pl-1">QR 位置：</span>
              <div class="flex items-center gap-1 bg-slate-950 p-0.5 rounded border border-slate-800 text-[9.5px]">
                <button
                  type="button"
                  onclick="updateBbiInfoField('qrPosition', 'right', true)"
                  class="px-2 py-0.5 rounded transition ${curQrPos === 'right' ? 'bg-sky-600 text-white font-bold shadow' : 'text-slate-400 hover:text-slate-200'}"
                >右側</button>
                <button
                  type="button"
                  onclick="updateBbiInfoField('qrPosition', 'left', true)"
                  class="px-2 py-0.5 rounded transition ${curQrPos === 'left' ? 'bg-sky-600 text-white font-bold shadow' : 'text-slate-400 hover:text-slate-200'}"
                >左側</button>
                <button
                  type="button"
                  onclick="updateBbiInfoField('qrPosition', 'bottom', true)"
                  class="px-2 py-0.5 rounded transition ${curQrPos === 'bottom' ? 'bg-sky-600 text-white font-bold shadow' : 'text-slate-400 hover:text-slate-200'}"
                >下方</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 步驟 ①：標題與五大巴士營運商宣傳字句一鍵範本 -->
        <div class="bg-slate-950/85 border border-amber-500/35 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-1 border-b border-slate-800 pb-1.5">
            <span class="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
              <i class="fa-solid fa-heading"></i>
              <span>① 標題橫幅與置中提示文字（支援一鍵營運商範本）</span>
            </span>
          </div>

          <div class="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
            ${operatorPresetsHTML}
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[9.5px] text-slate-400 mb-0.5">橫幅中文標題</label>
              <input
                type="text"
                value="${esc(B.titleZh)}"
                oninput="updateBbiInfoField('titleZh', this.value)"
                placeholder="巴士轉乘計劃"
                class="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-lg px-2 py-1 text-[11px] font-bold text-slate-100"
              />
            </div>
            <div>
              <label class="block text-[9.5px] text-slate-400 mb-0.5">橫幅英文標題</label>
              <input
                type="text"
                value="${esc(B.titleEn)}"
                oninput="updateBbiInfoField('titleEn', this.value)"
                placeholder="Bus-Bus Interchange"
                class="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-lg px-2 py-1 text-[11px] font-bold text-slate-100"
              />
            </div>
          </div>

          <div class="space-y-2 pt-1 border-t border-slate-800/80">
            <div>
              <label class="block text-[9.5px] text-emerald-300 font-semibold mb-0.5">置中中文提示字句 <span class="text-slate-400 font-normal">(可使用 | 或換行分列)</span></label>
              <input
                type="text"
                value="${esc(B.footerZh)}"
                oninput="updateBbiInfoField('footerZh', this.value)"
                placeholder="例如：詳情請參閱城巴網頁"
                class="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-100 text-center"
              />
            </div>
            <div>
              <label class="block text-[9.5px] text-emerald-300 font-semibold mb-0.5">置中英文提示字句 <span class="text-slate-400 font-normal">(支援多行置中，如 Please refer to Citybus Website 換行 for details)</span></label>
              <textarea
                rows="2"
                oninput="updateBbiInfoField('footerEn', this.value)"
                placeholder="Please refer to Citybus Website&#10;for details"
                class="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg px-2.5 py-1 text-[11px] text-slate-100 text-center leading-snug"
              >${esc(B.footerEn)}</textarea>
            </div>
          </div>
        </div>

        <!-- 步驟 ②：190px * 190px 二維碼設定與自訂圖片上傳 -->
        <div class="bg-slate-950/85 border border-sky-500/35 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-1.5 border-b border-slate-800 pb-1.5">
            <span class="text-[11px] font-bold text-sky-300 flex items-center gap-1.5">
              <i class="fa-solid fa-qrcode"></i>
              <span>② 二維碼設定（預設 190px × 190px 擬真圓角定位框）</span>
            </span>
            <label class="flex items-center gap-1.5 text-[10px] text-sky-200 font-bold cursor-pointer">
              <input
                type="checkbox"
                ${B.showQrBox ? 'checked' : ''}
                onchange="updateBbiInfoField('showQrBox', this.checked, true)"
                class="rounded accent-sky-500"
              />
              <span>顯示二維碼</span>
            </label>
          </div>

          ${B.showQrBox ? `
            <!-- 比例模式切換：原圖 800px 比例折算 vs A4 1:1 原始像素 -->
            <div class="grid grid-cols-2 gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                type="button"
                onclick="updateBbiInfoField('qrScaleMode', 'proportional', true)"
                class="py-1.5 px-2 rounded-md text-[10px] text-left transition ${
                  curQrScaleMode === 'proportional'
                    ? 'bg-sky-600/30 border border-sky-400 text-sky-200 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }"
              >
                <div class="flex items-center justify-between">
                  <span>原圖比例模式 (190×190)</span>
                  ${curQrScaleMode === 'proportional' ? '<i class="fa-solid fa-circle-check text-sky-400"></i>' : ''}
                </div>
                <div class="text-[8.5px] opacity-80 mt-0.5">按原圖寬度自動折算適配 A4 右欄</div>
              </button>

              <button
                type="button"
                onclick="updateBbiInfoField('qrScaleMode', 'raw_px', true)"
                class="py-1.5 px-2 rounded-md text-[10px] text-left transition ${
                  curQrScaleMode === 'raw_px'
                    ? 'bg-sky-600/30 border border-sky-400 text-sky-200 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }"
              >
                <div class="flex items-center justify-between">
                  <span>A4 絕對像素 (1:1 直出)</span>
                  ${curQrScaleMode === 'raw_px' ? '<i class="fa-solid fa-circle-check text-sky-400"></i>' : ''}
                </div>
                <div class="text-[8.5px] opacity-80 mt-0.5">於 A4 畫布直接輸出設定之 px 尺寸</div>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
              <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-sky-300 font-bold">二維碼尺寸 (px × px)</span>
                  <div class="flex items-center gap-1">
                    <button
                      type="button"
                      onclick="updateBbiInfoField('qrSizePx', 190)"
                      class="px-1.5 py-0.5 rounded bg-sky-600/30 hover:bg-sky-600 text-sky-200 text-[9px] font-bold transition"
                      title="一鍵設為 190px * 190px"
                    >190×190</button>
                    <input
                      id="input-bbi-qrSizePx"
                      type="number" min="30" max="240" step="1"
                      value="${B.qrSizePx}"
                      oninput="updateBbiInfoField('qrSizePx', this.value)"
                      class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]"
                    />
                  </div>
                </div>
                <input
                  id="range-bbi-qrSizePx"
                  type="range" min="30" max="240" step="1"
                  value="${B.qrSizePx}"
                  oninput="updateBbiInfoField('qrSizePx', this.value)"
                  class="w-full accent-sky-500"
                />
              </div>

              <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-slate-300 font-semibold">二維碼側邊留白 (px)</span>
                  <input
                    id="input-bbi-qrRightMarginPx"
                    type="number" min="0" max="40" step="1"
                    value="${B.qrRightMarginPx}"
                    oninput="updateBbiInfoField('qrRightMarginPx', this.value)"
                    class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-200 font-mono text-[10px]"
                  />
                </div>
                <input
                  id="range-bbi-qrRightMarginPx"
                  type="range" min="0" max="40" step="1"
                  value="${B.qrRightMarginPx}"
                  oninput="updateBbiInfoField('qrRightMarginPx', this.value)"
                  class="w-full accent-sky-500"
                />
              </div>
            </div>

            <!-- 上傳自訂 QR Code 圖片或使用內建向量圖 -->
            <div class="flex items-center justify-between flex-wrap gap-2 bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-[10px]">
              <div class="flex items-center gap-2">
                <label class="px-2.5 py-1 rounded-lg bg-sky-600/30 hover:bg-sky-600 text-sky-200 hover:text-white border border-sky-500/40 font-bold cursor-pointer transition flex items-center gap-1.5">
                  <i class="fa-solid fa-upload"></i>
                  <span>上傳自訂二維碼圖片</span>
                  <input type="file" accept="image/*" class="hidden" onchange="uploadBbiCustomQrImage(event)" />
                </label>
                ${B.customQrDataUrl ? `
                  <button
                    type="button"
                    onclick="clearBbiCustomQrImage()"
                    class="px-2 py-1 rounded-lg bg-rose-600/25 hover:bg-rose-600 text-rose-200 hover:text-white text-[10px] font-bold transition"
                  >恢復內建圓角 QR</button>
                ` : '<span class="text-slate-400 text-[9.5px]">目前使用內建 190×190 城巴圓角向量 QR</span>'}
              </div>

              <div class="flex items-center gap-1.5">
                <span class="text-[9.5px] text-slate-400">QR 顏色：</span>
                <input
                  type="color"
                  value="${esc(B.qrColor || '#000000')}"
                  oninput="updateBbiInfoField('qrColor', this.value)"
                  class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer"
                />
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 步驟 ③：字體大小、文字顏色與選填轉乘條目 -->
        <div class="bg-slate-950/90 border border-purple-500/35 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-1 border-b border-slate-800 pb-1.5">
            <span class="text-[11px] font-bold text-purple-300 flex items-center gap-1.5">
              <i class="fa-solid fa-sliders"></i>
              <span>③ 字體大小、顏色與補充轉乘路線條目</span>
            </span>
            <button
              type="button"
              onclick="resetBbiTypographyAndLayout()"
              class="px-2 py-0.5 rounded bg-purple-600/25 hover:bg-purple-600 text-purple-200 hover:text-white text-[9.5px] font-bold border border-purple-500/40 transition"
            >恢復參考圖預設</button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-slate-300 font-semibold">中文提示字號 (px)</span>
                <input
                  id="input-bbi-footerZhFontSizePx"
                  type="number" min="6" max="15" step="0.2"
                  value="${B.footerZhFontSizePx}"
                  oninput="updateBbiInfoField('footerZhFontSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-purple-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-bbi-footerZhFontSizePx"
                type="range" min="6" max="15" step="0.2"
                value="${B.footerZhFontSizePx}"
                oninput="updateBbiInfoField('footerZhFontSizePx', this.value)"
                class="w-full accent-purple-500"
              />
            </div>

            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-slate-300 font-semibold">英文提示字號 (px)</span>
                <input
                  id="input-bbi-footerEnFontSizePx"
                  type="number" min="5.5" max="14" step="0.2"
                  value="${B.footerEnFontSizePx}"
                  oninput="updateBbiInfoField('footerEnFontSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-purple-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-bbi-footerEnFontSizePx"
                type="range" min="5.5" max="14" step="0.2"
                value="${B.footerEnFontSizePx}"
                oninput="updateBbiInfoField('footerEnFontSizePx', this.value)"
                class="w-full accent-purple-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 items-center text-[10px]">
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-300 font-semibold">提示文字顏色：</span>
              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  onclick="updateBbiInfoField('footerTextColor', '#6b7280', true)"
                  class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[9px] border border-slate-700"
                >原圖灰</button>
                <input
                  type="color"
                  value="${esc(B.footerTextColor || '#6b7280')}"
                  oninput="updateBbiInfoField('footerTextColor', this.value)"
                  class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer"
                />
              </div>
            </div>

            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-300 font-semibold">上下內距 (px)：</span>
              <input
                id="input-bbi-contentPadY"
                type="number" min="2" max="24" step="1"
                value="${B.contentPadY}"
                oninput="updateBbiInfoField('contentPadY', this.value)"
                class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-purple-300 font-mono text-[10px]"
              />
            </div>
          </div>

          <!-- 選填：補充轉乘優惠條目清單 -->
          <div class="pt-1 border-t border-slate-800 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] text-slate-400">選填：具體轉乘路線優惠條目 (${(B.items || []).length} 項)</span>
              <button
                type="button"
                onclick="addBbiCustomItem()"
                class="px-2 py-0.5 rounded bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-[10px] border border-amber-500/40 transition"
              >+ 新增轉乘條目</button>
            </div>
            ${itemsEditorHTML}
          </div>
        </div>
      ` : `
        <div class="text-[11px] text-slate-400 bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-center">
          目前已隱藏「6. 巴士轉乘計劃」區塊，勾選右上角「顯示此區塊」即可展開設定。
        </div>
      `}
    </div>
  `;
}

// 更新「生效日期與營運商資訊」單一欄位並即時同步預覽與畫布
function updateEffectiveFooterField(field, val, refreshSidebar = false) {
  const F = ensureEffectiveFooterConfigSynced();

  if (['enabled', 'showNoGovConcession', 'showWebsiteSvg', 'showHotlineSvg', 'autoSyncVersionDate', 'showTopDivider'].includes(field)) {
    F[field] = Boolean(val);
    refreshSidebar = true;
  } else if ([
    'dateFontSizePx',
    'concessionFontSizePx',
    'contactFontSizePx',
    'contactSvgSizePx',
    'contactGapPx',
    'operatorFontSizePx',
    'versionFontSizePx',
    'operatorVersionLineGapPx'
  ].includes(field)) {
    const numVal = Number(val);
    if (!isNaN(numVal)) {
      F[field] = numVal;
      if (field === 'versionFontSizePx') {
        F._customVersionSize = true;
      }
      // 當調整營運商字體大小時，自動維持版本編號較營運商大一點
      if (field === 'operatorFontSizePx' && Number(F.versionFontSizePx) <= numVal) {
        F.versionFontSizePx = Math.round((numVal + 1.0) * 10) / 10;
        const verInput = document.getElementById('input-footer-versionFontSizePx');
        const verRange = document.getElementById('range-footer-versionFontSizePx');
        if (verInput && document.activeElement !== verInput) verInput.value = F.versionFontSizePx;
        if (verRange && document.activeElement !== verRange) verRange.value = F.versionFontSizePx;
      }
      // 當調整版本編號字體大小時，若小於或等於營運商字體，自動微調營運商字體使其較小一點
      if (field === 'versionFontSizePx' && Number(F.operatorFontSizePx) >= numVal) {
        F.operatorFontSizePx = Math.max(5.0, Math.round((numVal - 1.0) * 10) / 10);
        const opInput = document.getElementById('input-footer-operatorFontSizePx');
        const opRange = document.getElementById('range-footer-operatorFontSizePx');
        if (opInput && document.activeElement !== opInput) opInput.value = F.operatorFontSizePx;
        if (opRange && document.activeElement !== opRange) opRange.value = F.operatorFontSizePx;
      }

      // 同步當前欄位的滑桿與數字輸入框
      const curInput = document.getElementById(`input-footer-${field}`);
      const curRange = document.getElementById(`range-footer-${field}`);
      if (curInput && document.activeElement !== curInput) curInput.value = F[field];
      if (curRange && document.activeElement !== curRange) curRange.value = F[field];
    }
  } else {
    F[field] = val;
  }

  // 當修改中文生效日期且開啟自動同步版本號時，即時更新版本號內的 YYMMDD
  if (field === 'dateZh' && F.autoSyncVersionDate !== false) {
    autoGenerateFooterVersionCode(true);
    const verCodeInput = document.getElementById('input-footer-versionCode');
    if (verCodeInput && document.activeElement !== verCodeInput) {
      verCodeInput.value = F.versionCode;
    }
  }

  renderA4Sheet();

  // 同步更新控制面板內的即時預覽框（避免重繪整個側邊欄造成輸入框失焦）
  const livePreviewEl = document.getElementById('footer-contact-meta-live-preview');
  if (livePreviewEl && !refreshSidebar) {
    const C = ensureColorsConfigSynced();
    const themePrimaryColor = C.themePrimary || C.routeLineColor || '#0d8556';
    livePreviewEl.innerHTML = renderEffectiveFooterPreviewCardInnerHTML(F, themePrimaryColor);
  }

  if (refreshSidebar || ['contactOrder', 'operatorVersionWeight', 'footerBottomLayout', 'rightMetaOrder'].includes(field)) {
    renderEditorSidebar();
  }
}

// 一鍵重設頁尾所有字體大小、SVG 尺寸與間距為黃金比例預設值
function resetEffectiveFooterTypography() {
  const F = ensureEffectiveFooterConfigSynced();
  F.dateFontSizePx = 7.2;
  F.concessionFontSizePx = 7.2;
  F.contactFontSizePx = 8.4;
  F.contactSvgSizePx = 9.5;
  F.contactGapPx = 10;
  F.operatorFontSizePx = 7.0;
  F.versionFontSizePx = 8.2;
  F.operatorVersionColor = '#64748b';
  F.operatorVersionWeight = '700';
  F.operatorVersionLineGapPx = 1.5;
  F._customVersionSize = false;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已重設生效日期與營運商資訊的字體大小及間距！');
}

// 一鍵重設標準「小童及長者半價車費優惠」中英文文字
function resetConcessionDefaultText() {
  const F = ensureEffectiveFooterConfigSynced();
  F.concessionZh = '十二歲以下小童及六十五歲或以上長者可享半價優惠';
  F.concessionEn = 'Half fare for children under the age of 12 and seniors aged 65 or above';
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已恢復標準「小童及長者半價優惠」中英文條款');
}

// 重設「政府 $2 票價優惠計劃不適用」為標準官方中英文聲明文字
function resetNoGovConcessionDefaultText() {
  const F = ensureEffectiveFooterConfigSynced();
  F.noGovConcessionText = '「政府長者及合資格殘障人士公共運輸票價優惠計劃」並不適用於本路線 | The Government Public Transport Fare Concession Scheme for the Elderly and Eligible Persons with Disabilities is not applicable to this route';
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已恢復標準「政府 $2 優惠計劃不適用」聲明文字');
}

// 一鍵套用香港巴士營運商預設資料（自動填入熱線、網站與中英文名稱）
function applyEffectiveOperatorPreset(presetKey) {
  const preset = HK_BUS_OPERATOR_PRESETS.find(p => p.key === presetKey);
  if (!preset) return;
  const F = ensureEffectiveFooterConfigSynced();
  F.operatorZh = preset.zh;
  F.operatorEn = preset.en;
  F.hotline = preset.hotline;
  F.website = preset.website;
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已套用「${preset.label}」聯絡熱線、網址與營運商名稱`);
}

// 透過日曆選擇器 (YYYY-MM-DD) 自動格式化中英文生效日期，並可自動同步更新版本編號內的日期碼
function applyEffectiveDateFromPicker(isoDateStr) {
  if (!isoDateStr) return;
  const parts = String(isoDateStr).split('-').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return;
  const [year, month, day] = parts;

  const monthNamesEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const F = ensureEffectiveFooterConfigSynced();
  F.dateZh = `${year}年${month}月${day}日`;
  F.dateEn = `${day} ${monthNamesEn[month - 1] || 'January'} ${year}`;

  if (F.autoSyncVersionDate !== false) {
    autoGenerateFooterVersionCode(true);
  }

  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已自動填入生效日期：${F.dateZh} | ${F.dateEn}`);
}

// 快捷填入常用生效日期（今天 / 明天 / 下週一 / 下月1號）
function applyQuickEffectiveDatePreset(mode = 'today') {
  const d = new Date();
  if (mode === 'tomorrow') {
    d.setDate(d.getDate() + 1);
  } else if (mode === 'next_monday') {
    const day = d.getDay();
    const diff = day === 0 ? 1 : (8 - day);
    d.setDate(d.getDate() + diff);
  } else if (mode === 'next_month_first') {
    d.setMonth(d.getMonth() + 1, 1);
  }
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  applyEffectiveDateFromPicker(`${yyyy}-${mm}-${dd}`);
}

// 根據目前主路線號碼與生效日期，一鍵智能生成版本編號 (例如 B13_261012_V1)
function autoGenerateFooterVersionCode(silent = false) {
  const F = ensureEffectiveFooterConfigSynced();
  const R = appConfig.rightData;
  const routeNo = String(R.routeNumber || R.routeBoxes?.[0]?.routeNumber || 'ROUTE').trim().toUpperCase();

  let yymmdd = '';
  const zhMatch = String(F.dateZh || '').match(/(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
  if (zhMatch) {
    const yy = zhMatch[1].slice(-2);
    const mm = String(zhMatch[2]).padStart(2, '0');
    const dd = String(zhMatch[3]).padStart(2, '0');
    yymmdd = `${yy}${mm}${dd}`;
  } else {
    const now = new Date();
    const yy = String(now.getFullYear()).slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    yymmdd = `${yy}${mm}${dd}`;
  }

  const verMatch = String(F.versionCode || '').match(/_V(\d+)$/i);
  const verSuffix = verMatch ? `V${verMatch[1]}` : 'V1';
  F.versionCode = `${routeNo}_${yymmdd}_${verSuffix}`;

  if (!silent) {
    renderA4Sheet();
    renderEditorSidebar();
    showToast(`已智能生成版本編號：${F.versionCode}`);
  }
}

// 一鍵遞增或遞減版本編號尾碼 (例如 _V1 ➔ _V2)
function bumpFooterVersionNumber(delta = 1) {
  const F = ensureEffectiveFooterConfigSynced();
  const cur = String(F.versionCode || '').trim();
  if (!cur) {
    autoGenerateFooterVersionCode(false);
    return;
  }
  const match = cur.match(/^(.*_V)(\d+)$/i);
  if (match) {
    const nextNum = Math.max(1, Number(match[2]) + delta);
    F.versionCode = `${match[1]}${nextNum}`;
  } else {
    F.versionCode = `${cur}_V1`;
  }
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`版本編號已更新為：${F.versionCode}`);
}

// 渲染「3. 右側資訊欄」內的「7. 生效日期與營運商資訊 (#sec-footer)」完整控制面板
function renderEffectiveFooterEditorSectionHTML() {
  const F = ensureEffectiveFooterConfigSynced();
  const C = ensureColorsConfigSynced();
  const themePrimaryColor = C.themePrimary || C.routeLineColor || '#0d8556';

  // 從中文生效日期解析出 YYYY-MM-DD 供日曆選擇器顯示
  let isoDateVal = '';
  const zhMatch = String(F.dateZh || '').match(/(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
  if (zhMatch) {
    isoDateVal = `${zhMatch[1]}-${String(zhMatch[2]).padStart(2, '0')}-${String(zhMatch[3]).padStart(2, '0')}`;
  }

  const operatorPresetsBtnsHTML = HK_BUS_OPERATOR_PRESETS.map(p => {
    const isMatched = F.operatorZh === p.zh && F.hotline === p.hotline;
    return `
      <button
        type="button"
        onclick="applyEffectiveOperatorPreset('${p.key}')"
        class="px-2 py-1.5 rounded-lg border text-[10px] font-bold transition flex items-center justify-center gap-1 ${
          isMatched
            ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-sm ring-1 ring-emerald-400/40'
            : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 text-slate-300 hover:text-white'
        }"
      >
        ${isMatched ? '<i class="fa-solid fa-circle-check text-emerald-400 text-[9px]"></i>' : ''}
        <span class="truncate">${esc(p.label)}</span>
      </button>
    `;
  }).join('');

  const curBottomLayout = F.footerBottomLayout || 'stacked';
  const curRightOrder = F.rightMetaOrder || 'version_first';
  const curContactOrder = F.contactOrder || 'website_first';
  const curWeight = String(F.operatorVersionWeight || '700');

  return `
    <div id="sec-footer" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <!-- 頂部標題與顯示開關 -->
      <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <i class="fa-solid fa-calendar-check text-xs"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-100 text-xs">7. 生效日期與營運商資訊</h3>
            <p class="text-[9.5px] text-slate-400">整合生效日期、車費優惠、網站熱線 SVG 及營運商版本號排版</p>
          </div>
        </div>
        <label class="flex items-center gap-1.5 cursor-pointer text-[11px] font-bold text-emerald-300 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition">
          <input
            type="checkbox"
            ${F.enabled ? 'checked' : ''}
            onchange="updateEffectiveFooterField('enabled', this.checked, true)"
            class="rounded accent-emerald-500"
          />
          <span>顯示此區塊</span>
        </label>
      </div>

      ${F.enabled ? `
        <!-- 頂部：所見即所得即時白底預覽卡 + 3 種底部排版模式切換 -->
        <div class="bg-slate-950/90 border border-emerald-500/35 rounded-xl p-2.5 space-y-2 shadow-inner">
          <div class="flex items-center justify-between flex-wrap gap-1 text-[10px]">
            <span class="font-bold text-emerald-300 flex items-center gap-1.5">
              <i class="fa-solid fa-eye"></i>
              <span>即時排版預覽（修改下方欄位即時同步）</span>
            </span>
            <label class="flex items-center gap-1 text-[9.5px] text-slate-300 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                ${F.showTopDivider ? 'checked' : ''}
                onchange="updateEffectiveFooterField('showTopDivider', this.checked, true)"
                class="rounded accent-emerald-500"
              />
              <span>顯示聯絡欄上方分隔線</span>
            </label>
          </div>

          <div id="footer-contact-meta-live-preview">
            ${renderEffectiveFooterPreviewCardInnerHTML(F, themePrimaryColor)}
          </div>

          <!-- 3 種底部聯絡與營運商排版模式直覺切換卡 -->
          <div class="grid grid-cols-3 gap-1.5 pt-0.5">
            <button
              type="button"
              onclick="updateEffectiveFooterField('footerBottomLayout', 'stacked', true)"
              class="p-1.5 rounded-lg border text-left transition ${
                curBottomLayout === 'stacked'
                  ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 font-bold shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
              }"
            >
              <div class="text-[10px] flex items-center justify-between">
                <span>左一行・右兩行</span>
                ${curBottomLayout === 'stacked' ? '<i class="fa-solid fa-check text-[9px] text-emerald-400"></i>' : ''}
              </div>
              <div class="text-[8.5px] opacity-75 mt-0.5">上下分層經典排版</div>
            </button>

            <button
              type="button"
              onclick="updateEffectiveFooterField('footerBottomLayout', 'side_by_side', true)"
              class="p-1.5 rounded-lg border text-left transition ${
                curBottomLayout === 'side_by_side'
                  ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 font-bold shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
              }"
            >
              <div class="text-[10px] flex items-center justify-between">
                <span>左右並排對齊</span>
                ${curBottomLayout === 'side_by_side' ? '<i class="fa-solid fa-check text-[9px] text-emerald-400"></i>' : ''}
              </div>
              <div class="text-[8.5px] opacity-75 mt-0.5">最節省垂直空間</div>
            </button>

            <button
              type="button"
              onclick="updateEffectiveFooterField('footerBottomLayout', 'stacked_inline_right', true)"
              class="p-1.5 rounded-lg border text-left transition ${
                curBottomLayout === 'stacked_inline_right'
                  ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 font-bold shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
              }"
            >
              <div class="text-[10px] flex items-center justify-between">
                <span>左一行・右下同行</span>
                ${curBottomLayout === 'stacked_inline_right' ? '<i class="fa-solid fa-check text-[9px] text-emerald-400"></i>' : ''}
              </div>
              <div class="text-[8.5px] opacity-75 mt-0.5">營運商與版本號同行</div>
            </button>
          </div>
        </div>

        <!-- 步驟 ①：營運商預設範本、網站、熱線電話與營運商名稱 -->
        <div class="bg-slate-950/85 border border-amber-500/35 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-1 border-b border-slate-800 pb-1.5">
            <span class="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
              <i class="fa-solid fa-bus"></i>
              <span>① 營運商與聯絡方式（一鍵套用範本）</span>
            </span>
            <span class="text-[9px] text-slate-400">點擊即填入中英文名稱、熱線及官方網站</span>
          </div>

          <!-- 五大香港巴士營運商一鍵按鈕 -->
          <div class="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
            ${operatorPresetsBtnsHTML}
          </div>

          <!-- 左邊一行：官方網站與客戶服務熱線 -->
          <div class="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 space-y-2">
            <div class="flex items-center justify-between flex-wrap gap-1.5">
              <span class="text-[10px] font-bold text-slate-200 flex items-center gap-1">
                <i class="fa-solid fa-globe text-emerald-400"></i>
                <span>左邊聯絡欄（網站與顧客服務熱線）</span>
              </span>
              <div class="flex items-center gap-1 bg-slate-950 p-0.5 rounded-md border border-slate-800 text-[9px]">
                <button
                  type="button"
                  onclick="updateEffectiveFooterField('contactOrder', 'website_first', true)"
                  class="px-2 py-0.5 rounded transition ${curContactOrder === 'website_first' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}"
                >先網站・後電話</button>
                <button
                  type="button"
                  onclick="updateEffectiveFooterField('contactOrder', 'hotline_first', true)"
                  class="px-2 py-0.5 rounded transition ${curContactOrder === 'hotline_first' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}"
                >先電話・後網站</button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div class="space-y-1">
                <div class="flex items-center justify-between text-[9.5px]">
                  <span class="text-slate-300 font-semibold">官方網站 Website</span>
                  <label class="flex items-center gap-1 text-emerald-300 cursor-pointer">
                    <input
                      type="checkbox"
                      ${F.showWebsiteSvg !== false ? 'checked' : ''}
                      onchange="updateEffectiveFooterField('showWebsiteSvg', this.checked, true)"
                      class="rounded accent-emerald-500"
                    />
                    <span>地球 SVG</span>
                  </label>
                </div>
                <input
                  type="text"
                  value="${esc(F.website)}"
                  oninput="updateEffectiveFooterField('website', this.value)"
                  placeholder="例如：www.citybus.com.hk"
                  class="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-lg px-2 py-1 text-[11px] text-slate-100 font-mono"
                />
              </div>

              <div class="space-y-1">
                <div class="flex items-center justify-between text-[9.5px]">
                  <span class="text-slate-300 font-semibold">服務熱線 Hotline</span>
                  <label class="flex items-center gap-1 text-emerald-300 cursor-pointer">
                    <input
                      type="checkbox"
                      ${F.showHotlineSvg !== false ? 'checked' : ''}
                      onchange="updateEffectiveFooterField('showHotlineSvg', this.checked, true)"
                      class="rounded accent-emerald-500"
                    />
                    <span>話筒 SVG</span>
                  </label>
                </div>
                <input
                  type="text"
                  value="${esc(F.hotline)}"
                  oninput="updateEffectiveFooterField('hotline', this.value)"
                  placeholder="例如：2136 8888"
                  class="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-lg px-2 py-1 text-[11px] text-slate-100 font-mono"
                />
              </div>
            </div>
          </div>

          <!-- 右邊營運商中英文名稱與上下排序 -->
          <div class="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 space-y-2">
            <div class="flex items-center justify-between flex-wrap gap-1.5">
              <span class="text-[10px] font-bold text-slate-200 flex items-center gap-1">
                <i class="fa-solid fa-building text-amber-400"></i>
                <span>右邊營運商中英文名稱</span>
              </span>
              <div class="flex items-center gap-1 bg-slate-950 p-0.5 rounded-md border border-slate-800 text-[9px]">
                <button
                  type="button"
                  onclick="updateEffectiveFooterField('rightMetaOrder', 'version_first', true)"
                  class="px-2 py-0.5 rounded transition ${curRightOrder !== 'operator_first' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-slate-200'}"
                >上版本號・下營運商</button>
                <button
                  type="button"
                  onclick="updateEffectiveFooterField('rightMetaOrder', 'operator_first', true)"
                  class="px-2 py-0.5 rounded transition ${curRightOrder === 'operator_first' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-slate-200'}"
                >上營運商・下版本號</button>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-[9.5px] text-slate-400 mb-0.5">營運商中文名稱</label>
                <input
                  type="text"
                  value="${esc(F.operatorZh)}"
                  oninput="updateEffectiveFooterField('operatorZh', this.value)"
                  placeholder="例如：城巴"
                  class="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-lg px-2 py-1 text-[11px] font-bold text-slate-100"
                />
              </div>
              <div>
                <label class="block text-[9.5px] text-slate-400 mb-0.5">營運商英文名稱</label>
                <input
                  type="text"
                  value="${esc(F.operatorEn)}"
                  oninput="updateEffectiveFooterField('operatorEn', this.value)"
                  placeholder="例如：Citybus"
                  class="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-lg px-2 py-1 text-[11px] font-bold text-slate-100"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 步驟 ②：生效日期與智能版本編號聯動設定 -->
        <div class="bg-slate-950/85 border border-sky-500/35 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-1.5 border-b border-slate-800 pb-1.5">
            <span class="text-[11px] font-bold text-sky-300 flex items-center gap-1.5">
              <i class="fa-regular fa-calendar-days"></i>
              <span>② 生效日期與版本編號（日期自動紅字粗體）</span>
            </span>
            <label class="flex items-center gap-1 text-[9.5px] text-sky-200 cursor-pointer bg-sky-950/50 px-2 py-0.5 rounded border border-sky-500/30" title="修改生效日期時，自動同步更新版本編號內的 YYMMDD 日期碼">
              <input
                type="checkbox"
                ${F.autoSyncVersionDate !== false ? 'checked' : ''}
                onchange="updateEffectiveFooterField('autoSyncVersionDate', this.checked, true)"
                class="rounded accent-sky-500"
              />
              <span>改日期自動同步版本號</span>
            </label>
          </div>

          <!-- 日曆選擇器 + 常用生效日快捷鍵 -->
          <div class="flex items-center justify-between flex-wrap gap-1.5 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
            <div class="flex items-center gap-1.5">
              <span class="text-[9.5px] text-slate-300 font-semibold"><i class="fa-solid fa-calendar-day text-sky-400 mr-1"></i>日曆快選：</span>
              <input
                type="date"
                value="${esc(isoDateVal)}"
                onchange="applyEffectiveDateFromPicker(this.value)"
                class="bg-slate-800 border border-slate-700 focus:border-sky-500 rounded px-2 py-0.5 text-[10px] text-sky-200 font-mono cursor-pointer"
              />
            </div>
            <div class="flex items-center gap-1 flex-wrap">
              <button type="button" onclick="applyQuickEffectiveDatePreset('today')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-sky-600/40 text-slate-200 hover:text-white border border-slate-700 text-[9.5px] transition">今天</button>
              <button type="button" onclick="applyQuickEffectiveDatePreset('tomorrow')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-sky-600/40 text-slate-200 hover:text-white border border-slate-700 text-[9.5px] transition">明天</button>
              <button type="button" onclick="applyQuickEffectiveDatePreset('next_monday')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-sky-600/40 text-slate-200 hover:text-white border border-slate-700 text-[9.5px] transition">下週一</button>
              <button type="button" onclick="applyQuickEffectiveDatePreset('next_month_first')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-sky-600/40 text-slate-200 hover:text-white border border-slate-700 text-[9.5px] transition">下月1號</button>
            </div>
          </div>

          <!-- 中英文生效日期輸入框 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label class="block text-[9.5px] text-slate-300 mb-0.5">中文生效日期 <span class="text-rose-400 font-semibold">(自動接「起生效,直至另行通告」)</span></label>
              <input
                type="text"
                value="${esc(F.dateZh)}"
                oninput="updateEffectiveFooterField('dateZh', this.value)"
                placeholder="例如：2026年10月12日"
                class="w-full bg-slate-900 border border-slate-700 focus:border-sky-500 rounded-lg px-2.5 py-1 text-[11px] font-bold text-rose-300"
              />
            </div>
            <div>
              <label class="block text-[9.5px] text-slate-300 mb-0.5">英文生效日期 <span class="text-rose-400 font-semibold">(自動包覆 Effective from ... until...)</span></label>
              <input
                type="text"
                value="${esc(F.dateEn)}"
                oninput="updateEffectiveFooterField('dateEn', this.value)"
                placeholder="例如：12 October 2026"
                class="w-full bg-slate-900 border border-slate-700 focus:border-sky-500 rounded-lg px-2.5 py-1 text-[11px] font-bold text-rose-300"
              />
            </div>
          </div>

          <!-- 版本編號編輯與智能升降級器 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2 flex-1 min-w-[180px]">
              <span class="text-[10px] font-bold text-sky-300 shrink-0"><i class="fa-solid fa-code-commit mr-1"></i>版本編號：</span>
              <input
                id="input-footer-versionCode"
                type="text"
                value="${esc(F.versionCode)}"
                oninput="updateEffectiveFooterField('versionCode', this.value)"
                placeholder="例如：B13_261012_V1"
                class="flex-1 min-w-0 bg-slate-800 border border-slate-700 focus:border-sky-500 rounded-lg px-2 py-1 text-[11px] font-mono font-bold text-slate-100"
              />
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onclick="bumpFooterVersionNumber(-1)"
                title="遞減版本號 (例如 V2 ➔ V1)"
                class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[10px] font-mono font-bold transition"
              >V-</button>
              <button
                type="button"
                onclick="bumpFooterVersionNumber(1)"
                title="遞增版本號 (例如 V1 ➔ V2)"
                class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 text-[10px] font-mono font-bold transition"
              >V+</button>
              <button
                type="button"
                onclick="autoGenerateFooterVersionCode(false)"
                title="根據目前路線號碼與生效日期重新生成版本號"
                class="px-2.5 py-1 rounded bg-sky-600/30 hover:bg-sky-600 text-sky-200 hover:text-white border border-sky-500/40 text-[10px] font-bold transition"
              ><i class="fa-solid fa-wand-magic-sparkles mr-1"></i>智能生成</button>
            </div>
          </div>
        </div>

        <!-- 步驟 ③：小童及長者半價優惠與政府 $2 優惠計劃聲明 -->
        <div class="bg-slate-950/85 border border-slate-800 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span class="text-[11px] font-bold text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-Tags text-emerald-400"></i>
              <span>③ 車費優惠條款與政府 $2 計劃聲明</span>
            </span>
            <button
              type="button"
              onclick="resetConcessionDefaultText()"
              class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[9.5px] border border-slate-700 transition"
            >恢復預設半價條款</button>
          </div>

          <div class="space-y-1.5">
            <div>
              <label class="block text-[9.5px] text-slate-400 mb-0.5">車費優惠條款（中文）</label>
              <input
                type="text"
                value="${esc(F.concessionZh)}"
                oninput="updateEffectiveFooterField('concessionZh', this.value)"
                placeholder="十二歲以下小童及六十五歲或以上長者可享半價優惠"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-[11px] text-slate-100"
              />
            </div>
            <div>
              <label class="block text-[9.5px] text-slate-400 mb-0.5">車費優惠條款（英文）</label>
              <input
                type="text"
                value="${esc(F.concessionEn)}"
                oninput="updateEffectiveFooterField('concessionEn', this.value)"
                placeholder="Half fare for children under the age of 12 and seniors aged 65 or above"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-[11px] text-slate-100"
              />
            </div>
          </div>

          <!-- 政府 $2 優惠計劃不適用（摺疊式紅字警告開關） -->
          <div class="bg-rose-950/25 border ${F.showNoGovConcession ? 'border-rose-500/60' : 'border-slate-800'} rounded-lg p-2.5 space-y-2 transition">
            <div class="flex items-center justify-between gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  ${F.showNoGovConcession ? 'checked' : ''}
                  onchange="updateEffectiveFooterField('showNoGovConcession', this.checked, true)"
                  class="rounded accent-rose-500"
                />
                <span class="text-[10.5px] font-bold ${F.showNoGovConcession ? 'text-rose-300' : 'text-slate-300'}">
                  顯示「政府 $2 長者及合資格殘障人士票價優惠計劃不適用」紅字聲明
                </span>
              </label>
              ${F.showNoGovConcession ? `
                <button
                  type="button"
                  onclick="resetNoGovConcessionDefaultText()"
                  class="px-2 py-0.5 rounded bg-rose-900/50 hover:bg-rose-800 text-rose-200 text-[9px] border border-rose-500/40 shrink-0 transition"
                >恢復官方原文</button>
              ` : ''}
            </div>

            ${F.showNoGovConcession ? `
              <textarea
                rows="2"
                oninput="updateEffectiveFooterField('noGovConcessionText', this.value)"
                class="w-full bg-slate-900 border border-rose-500/40 rounded-lg px-2.5 py-1.5 text-[10px] text-rose-200 leading-relaxed"
              >${esc(F.noGovConcessionText)}</textarea>
            ` : ''}
          </div>
        </div>

        <!-- 步驟 ④：字體大小、SVG 尺寸、顏色與間距微調面板 -->
        <div class="bg-slate-950/90 border border-purple-500/35 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span class="text-[11px] font-bold text-purple-300 flex items-center gap-1.5">
              <i class="fa-solid fa-text-height"></i>
              <span>④ 字體大小、SVG 圖標與行距微調</span>
            </span>
            <button
              type="button"
              onclick="resetEffectiveFooterTypography()"
              class="px-2 py-0.5 rounded bg-purple-600/25 hover:bg-purple-600 text-purple-200 hover:text-white text-[9.5px] font-bold border border-purple-500/40 transition"
            >重設黃金比例</button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
            <!-- 1. 生效日期字體大小 -->
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-slate-300 font-semibold">生效日期字號 (px)</span>
                <input
                  id="input-footer-dateFontSizePx"
                  type="number" min="5.5" max="12" step="0.1"
                  value="${F.dateFontSizePx}"
                  oninput="updateEffectiveFooterField('dateFontSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-footer-dateFontSizePx"
                type="range" min="5.5" max="12" step="0.1"
                value="${F.dateFontSizePx}"
                oninput="updateEffectiveFooterField('dateFontSizePx', this.value)"
                class="w-full accent-sky-500"
              />
            </div>

            <!-- 2. 車費優惠條款字體大小 -->
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-slate-300 font-semibold">優惠條款字號 (px)</span>
                <input
                  id="input-footer-concessionFontSizePx"
                  type="number" min="5.5" max="12" step="0.1"
                  value="${F.concessionFontSizePx}"
                  oninput="updateEffectiveFooterField('concessionFontSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-footer-concessionFontSizePx"
                type="range" min="5.5" max="12" step="0.1"
                value="${F.concessionFontSizePx}"
                oninput="updateEffectiveFooterField('concessionFontSizePx', this.value)"
                class="w-full accent-sky-500"
              />
            </div>

            <!-- 3. 網站與電話字體大小 -->
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-emerald-300 font-semibold">網站與電話字號 (px)</span>
                <input
                  id="input-footer-contactFontSizePx"
                  type="number" min="6" max="14" step="0.1"
                  value="${F.contactFontSizePx}"
                  oninput="updateEffectiveFooterField('contactFontSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-footer-contactFontSizePx"
                type="range" min="6" max="14" step="0.1"
                value="${F.contactFontSizePx}"
                oninput="updateEffectiveFooterField('contactFontSizePx', this.value)"
                class="w-full accent-emerald-500"
              />
            </div>

            <!-- 4. 網站與電話 SVG 圖標大小 -->
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-emerald-300 font-semibold">聯絡 SVG 圖標 (px)</span>
                <input
                  id="input-footer-contactSvgSizePx"
                  type="number" min="6" max="16" step="0.5"
                  value="${F.contactSvgSizePx}"
                  oninput="updateEffectiveFooterField('contactSvgSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-footer-contactSvgSizePx"
                type="range" min="6" max="16" step="0.5"
                value="${F.contactSvgSizePx}"
                oninput="updateEffectiveFooterField('contactSvgSizePx', this.value)"
                class="w-full accent-emerald-500"
              />
            </div>

            <!-- 5. 版本編號字體大小 (自動較營運商大一點) -->
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-amber-300 font-semibold">版本編號字號 (px)</span>
                <input
                  id="input-footer-versionFontSizePx"
                  type="number" min="6" max="14" step="0.1"
                  value="${F.versionFontSizePx}"
                  oninput="updateEffectiveFooterField('versionFontSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-footer-versionFontSizePx"
                type="range" min="6" max="14" step="0.1"
                value="${F.versionFontSizePx}"
                oninput="updateEffectiveFooterField('versionFontSizePx', this.value)"
                class="w-full accent-amber-500"
              />
            </div>

            <!-- 6. 營運商名稱字體大小 -->
            <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-amber-300 font-semibold">營運商名稱字號 (px)</span>
                <input
                  id="input-footer-operatorFontSizePx"
                  type="number" min="5.5" max="13" step="0.1"
                  value="${F.operatorFontSizePx}"
                  oninput="updateEffectiveFooterField('operatorFontSizePx', this.value)"
                  class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="range-footer-operatorFontSizePx"
                type="range" min="5.5" max="13" step="0.1"
                value="${F.operatorFontSizePx}"
                oninput="updateEffectiveFooterField('operatorFontSizePx', this.value)"
                class="w-full accent-amber-500"
              />
            </div>
          </div>

          <!-- 底部間距、字重與文字顏色列 -->
          <div class="grid grid-cols-12 gap-2 pt-1 items-center text-[10px]">
            <div class="col-span-4 bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <label class="block text-[9px] text-slate-400 mb-0.5">網站與電話間距(px)</label>
              <input
                id="input-footer-contactGapPx"
                type="number" min="3" max="30" step="1"
                value="${F.contactGapPx}"
                oninput="updateEffectiveFooterField('contactGapPx', this.value)"
                class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono"
              />
            </div>

            <div class="col-span-4 bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <label class="block text-[9px] text-slate-400 mb-0.5">版本與營運商行距(px)</label>
              <input
                id="input-footer-operatorVersionLineGapPx"
                type="number" min="0" max="10" step="0.5"
                value="${F.operatorVersionLineGapPx}"
                oninput="updateEffectiveFooterField('operatorVersionLineGapPx', this.value)"
                class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-amber-300 font-mono"
              />
            </div>

            <div class="col-span-4 bg-slate-900/90 p-1.5 rounded-lg border border-slate-800 flex items-center justify-between gap-1">
              <div class="flex-1 min-w-0">
                <label class="block text-[9px] text-slate-400 mb-0.5">右側字重 / 顏色</label>
                <select
                  onchange="updateEffectiveFooterField('operatorVersionWeight', this.value, true)"
                  class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[9.5px] text-slate-200"
                >
                  <option value="500" ${curWeight === '500' ? 'selected' : ''}>中等 (500)</option>
                  <option value="600" ${curWeight === '600' ? 'selected' : ''}>半粗 (600)</option>
                  <option value="700" ${curWeight === '700' ? 'selected' : ''}>粗體 (700)</option>
                  <option value="800" ${curWeight === '800' ? 'selected' : ''}>特粗 (800)</option>
                </select>
              </div>
              <input
                type="color"
                value="${esc(F.operatorVersionColor || '#64748b')}"
                oninput="updateEffectiveFooterField('operatorVersionColor', this.value)"
                title="版本編號與營運商文字顏色"
                class="w-6 h-6 rounded bg-transparent border-0 cursor-pointer shrink-0 mt-3"
              />
            </div>
          </div>
        </div>
      ` : `
        <div class="text-[11px] text-slate-400 bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-center">
          目前已隱藏「7. 生效日期與營運商資訊」區塊，勾選右上角「顯示此區塊」即可展開設定。
        </div>
      `}
    </div>
  `;
}

function formatTextWithRouteBadges(text, opts = {}) {
  if (text === null || text === undefined || text === '') return '';
  const raw = String(text);
  const fontSizePx = Number(opts.fontSizePx) || 9.2;
  const bgColor = opts.bgColor || '#0d8556';
  const textColor = opts.textColor || '#ffffff';
  const styleMode = opts.styleMode || 'badge'; // 'badge' | 'text'
  const extraRoutesRaw = opts.extraRoutes || '';
  const allowPureNumbers = Boolean(opts.allowPureNumbers);
  const contrastBorder = Boolean(opts.contrastBorder);
  const innerWhiteLine = opts.innerWhiteLine !== undefined ? Boolean(opts.innerWhiteLine) : false;
  const routeFontFamily = "'Roboto', 'Inter', 'Noto Sans TC', sans-serif";

  const customList = String(extraRoutesRaw)
    .split(/[,，、\s/]+/)
    .map(s => s.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  const escapedCustom = customList.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const customPattern = escapedCustom.length > 0
    ? `|(?:(?<![A-Za-z0-9$.])|(?<=(?<![0-9])\\d{4}))(?:${escapedCustom.join('|')})(?![A-Za-z0-9.])`
    : '';

  const pureNumberPattern = allowPureNumbers
    ? `|(?<![A-Za-z0-9$.])(\\d{1,3})(?![A-Za-z0-9.%歲分時日年])`
    : '';

  const regex = new RegExp(
    `\\[([^\\]]+)\\]${customPattern}|(?:(?<![A-Za-z0-9])|(?<=(?<![0-9])\\d{4}))([A-Za-z]{1,2}\\d{1,3}[A-Za-z]?|\\d{1,3}[A-HJ-Za-hj-z])(?![A-Za-z0-9])${pureNumberPattern}`,
    'g'
  );
  const ignoreWords = new Set(['AM', 'PM', 'MIN', 'HR', 'PX', 'MM', 'V1', 'V2', 'V3', 'V4', 'A4', 'QR', 'ID', 'TO', 'OR', 'IN', 'ON', 'AT', 'BY']);

  let result = '';
  let lastIdx = 0;
  let match;

  while ((match = regex.exec(raw)) !== null) {
    const fullMatch = match[0];
    const bracketRoute = match[1];
    const token = bracketRoute !== undefined ? bracketRoute.trim() : fullMatch.trim();

    if (!bracketRoute && ignoreWords.has(token.toUpperCase()) && !customList.includes(token)) {
      continue;
    }

    result += esc(raw.slice(lastIdx, match.index));

    if (styleMode === 'text') {
      result += `<span style="
        font-family:${routeFontFamily};
        color:${bgColor};
        font-size:${fontSizePx}px !important;
        font-weight:600;
        line-height:1;
        display:inline-block;
        vertical-align:baseline;
      ">${esc(token)}</span>`;
    } else if (innerWhiteLine) {
      result += `<span style="
        font-family:${routeFontFamily};
        background-color:${bgColor};
        color:${textColor};
        padding:1.2px;
        border-radius:2.5px;
        ${contrastBorder ? 'border:0.8px solid rgba(255,255,255,0.65);' : ''}
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:baseline;
        margin:0 1px;
        box-sizing:border-box;
      "><span style="
        font-family:${routeFontFamily};
        border:0.9px solid rgba(255,255,255,0.88);
        border-radius:1.8px;
        font-size:${fontSizePx}px !important;
        font-weight:600;
        padding:0.5px 3.2px;
        line-height:1.05;
        display:inline-flex;
        align-items:center;
        justify-content:center;
      ">${esc(token)}</span></span>`;
    } else {
      result += `<span style="
        font-family:${routeFontFamily};
        background-color:${bgColor};
        color:${textColor};
        font-size:${fontSizePx}px !important;
        font-weight:600;
        padding:0.8px 3.8px;
        border-radius:2.5px;
        ${contrastBorder ? 'border:1px solid rgba(255,255,255,0.85);' : ''}
        line-height:1.05;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:baseline;
        margin:0 1px;
        box-sizing:border-box;
      ">${esc(token)}</span>`;
    }

    lastIdx = regex.lastIndex;
  }

  result += esc(raw.slice(lastIdx));
  return result;
}

// 根據箭嘴樣式 (pointer | sharp_long | chevron | dot_line) 與指向方向 (left | right | top | bottom) 繪製向量指示箭嘴
function renderInterchangePointerSvgHTML(style, dir, color, scaleVal = 1, align = 'center') {
  if (!style || style === 'flat' || style === 'none') return '';
  const r = (v) => Math.round(v * scaleVal * 10) / 10;

  const isHorizontal = dir === 'left' || dir === 'right';
  const alignSelfCss = align === 'start' ? 'flex-start' : (align === 'end' ? 'flex-end' : 'center');
  const edgeOffsetCss = isHorizontal
    ? (align === 'start' ? `margin-top:${r(4)}px;` : (align === 'end' ? `margin-bottom:${r(4)}px;` : ''))
    : (align === 'start' ? `margin-left:${r(8)}px;` : (align === 'end' ? `margin-right:${r(8)}px;` : ''));

  const overlapMarginCss =
    dir === 'left' ? 'margin-right:-0.8px;' :
    dir === 'right' ? 'margin-left:-0.8px;' :
    dir === 'top' ? 'margin-bottom:-0.8px;' :
    'margin-top:-0.8px;';

  // 1. 圓點連桿指示線 (●—)
  if (style === 'dot_line') {
    if (isHorizontal) {
      const w = r(10);
      const h = r(8);
      const cx = dir === 'left' ? 2.4 : 7.6;
      const x1 = dir === 'left' ? 2.4 : 0;
      const x2 = dir === 'left' ? 10 : 7.6;
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 10 8" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0; overflow:visible;">
          <line x1="${x1}" y1="4" x2="${x2}" y2="4" stroke="${color}" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="${cx}" cy="4" r="2.2" fill="${color}" />
        </svg>
      `;
    } else {
      const w = r(8);
      const h = r(10);
      const cy = dir === 'top' ? 2.4 : 7.6;
      const y1 = dir === 'top' ? 2.4 : 0;
      const y2 = dir === 'top' ? 10 : 7.6;
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 8 10" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0; overflow:visible;">
          <line x1="4" y1="${y1}" x2="4" y2="${y2}" stroke="${color}" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="4" cy="${cy}" r="2.2" fill="${color}" />
        </svg>
      `;
    }
  }

  // 2. 加長銳角箭嘴 (sharp_long)
  if (style === 'sharp_long') {
    if (isHorizontal) {
      const w = r(9.5);
      const h = r(10);
      const pts = dir === 'left' ? '0,5 9.5,0.6 9.5,9.4' : '9.5,5 0,0.6 0,9.4';
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 9.5 10" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0;">
          <polygon points="${pts}" fill="${color}" />
        </svg>
      `;
    } else {
      const w = r(10);
      const h = r(9.5);
      const pts = dir === 'top' ? '5,0 0.6,9.5 9.4,9.5' : '5,9.5 0.6,0 9.4,0';
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 10 9.5" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0;">
          <polygon points="${pts}" fill="${color}" />
        </svg>
      `;
    }
  }

  // 3. 燕尾折角箭嘴 (chevron)
  if (style === 'chevron') {
    if (isHorizontal) {
      const w = r(7.5);
      const h = r(10);
      const pts = dir === 'left'
        ? '0,5 7.5,0.5 5.2,5 7.5,9.5'
        : '7.5,5 0,0.5 2.3,5 0,9.5';
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 7.5 10" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0;">
          <polygon points="${pts}" fill="${color}" />
        </svg>
      `;
    } else {
      const w = r(10);
      const h = r(7.5);
      const pts = dir === 'top'
        ? '5,0 0.5,7.5 5,5.2 9.5,7.5'
        : '5,7.5 0.5,0 5,2.3 9.5,0';
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 10 7.5" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0;">
          <polygon points="${pts}" fill="${color}" />
        </svg>
      `;
    }
  }

  // 4. 預設經典實心三角箭嘴 (pointer)
  if (isHorizontal) {
    const w = r(6);
    const h = r(10);
    const pts = dir === 'left' ? '0,5 6,0.6 6,9.4' : '6,5 0,0.6 0,9.4';
    return `
      <svg width="${w}" height="${h}" viewBox="0 0 6 10" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0;">
        <polygon points="${pts}" fill="${color}" />
      </svg>
    `;
  } else {
    const w = r(10);
    const h = r(6);
    const pts = dir === 'top' ? '5,0 0.6,6 9.4,6' : '5,6 0.6,0 9.4,0';
    return `
      <svg width="${w}" height="${h}" viewBox="0 0 10 6" style="${overlapMarginCss} ${edgeOffsetCss} align-self:${alignSelfCss}; display:block; flex-shrink:0;">
        <polygon points="${pts}" fill="${color}" />
      </svg>
    `;
  }
}

// 渲染轉乘框內的站點圖標（完整支援無圖標、空心圓、粗圈、實心圓點、雙環虛線、走廊 353、隧道、港鐵 MTR）
function renderInterchangeStopNodeIconHTML(item, defaultColor = '#0d8556', scaleVal = 1) {
  const style = item?.nodeStyle || (item?.showDot ? 'solid_dot' : 'none');
  if (style === 'none') return '';
  const color = item.nodeColor || defaultColor || '#0d8556';
  const s = Math.max(5.5, Math.round(8.8 * scaleVal * 10) / 10);

  if (style === 'mtr') {
    return createMtrLogoSvg(Math.round(9.8 * scaleVal * 10) / 10);
  }
  if (style === 'corridor') {
    return createHkTrafficSign353Svg(Math.round(11.5 * scaleVal * 10) / 10, color, '#ffffff');
  }
  if (style === 'tunnel') {
    return createHkTunnelSvg(Math.round(11.5 * scaleVal * 10) / 10, color, '#ffffff');
  }
  if (style === 'terminal') {
    return createSvgStopNode({ kind: 'terminal', size: s + 1.2, primaryColor: color, fillColor: '#ffffff' });
  }
  if (style === 'partial') {
    return createSvgStopNode({ kind: 'partial', size: s + 0.8, primaryColor: color, fillColor: '#ffffff', secondaryColor: color });
  }
  if (style === 'solid' || style === 'solid_dot') {
    return createSvgStopNode({ kind: 'solid_dot', size: s, primaryColor: color });
  }
  return createSvgStopNode({ kind: 'normal', size: s, primaryColor: color, fillColor: '#ffffff' });
}

// 確保單一轉乘條目內的路線號碼陣列 (item.routes) 具備與「時間表此班次路線號碼框」同款的完整欄位（預設保留框內細白線 innerWhiteLine: true）
function ensureInterchangeItemRoutesList(item, defaultBgColor = '#0d8556') {
  if (!item) return [];
  const C = appConfig?.colors || {};
  const fallbackBg = item.bgColor || defaultBgColor || C.routeBoxBg || '#0d8556';
  const fallbackText = item.textColor || C.routeBoxText || '#ffffff';

  if (!Array.isArray(item.routes) || item.routes.length === 0) {
    const legacyRoute = item.route !== undefined ? String(item.route) : 'B13';
    item.routes = [
      {
        route: legacyRoute,
        bgColor: fallbackBg,
        textColor: fallbackText,
        innerWhiteLine: item.innerWhiteLine !== undefined ? Boolean(item.innerWhiteLine) : true,
        showOwlUnderN: Boolean(item.showOwlUnderN),
        owlPosition: item.owlPosition || 'auto',
        routeBoxTemplate: item.routeBoxTemplate || '',
        fontSizePx: (item.fontSizePx !== undefined && !isNaN(Number(item.fontSizePx))) ? Number(item.fontSizePx) : 0,
        fontScaleX: (item.fontScaleX !== undefined && !isNaN(Number(item.fontScaleX))) ? Math.max(40, Math.min(140, Number(item.fontScaleX))) : 100,
        tightnessEm: (item.tightnessEm !== undefined && !isNaN(Number(item.tightnessEm))) ? Number(item.tightnessEm) : -0.025,
        tokenGapPx: (item.tokenGapPx !== undefined && !isNaN(Number(item.tokenGapPx))) ? Number(item.tokenGapPx) : 2,
        padX: (item.padX !== undefined && !isNaN(Number(item.padX))) ? Number(item.padX) : 5.5,
        padY: (item.padY !== undefined && !isNaN(Number(item.padY))) ? Number(item.padY) : 2,
        outerPad: (item.outerPad !== undefined && !isNaN(Number(item.outerPad))) ? Number(item.outerPad) : 2
      }
    ];
  } else {
    item.routes = item.routes.map(sr => ({
      route: sr.route !== undefined ? String(sr.route) : '',
      bgColor: sr.bgColor || fallbackBg,
      textColor: sr.textColor || fallbackText,
      innerWhiteLine: sr.innerWhiteLine !== undefined ? Boolean(sr.innerWhiteLine) : true,
      showOwlUnderN: Boolean(sr.showOwlUnderN),
      owlPosition: sr.owlPosition || 'auto',
      routeBoxTemplate: sr.routeBoxTemplate || '',
      fontSizePx: (sr.fontSizePx !== undefined && !isNaN(Number(sr.fontSizePx))) ? Number(sr.fontSizePx) : 0,
      fontScaleX: (sr.fontScaleX !== undefined && !isNaN(Number(sr.fontScaleX))) ? Math.max(40, Math.min(140, Number(sr.fontScaleX))) : 100,
      tightnessEm: (sr.tightnessEm !== undefined && !isNaN(Number(sr.tightnessEm))) ? Number(sr.tightnessEm) : -0.025,
      tokenGapPx: (sr.tokenGapPx !== undefined && !isNaN(Number(sr.tokenGapPx))) ? Number(sr.tokenGapPx) : 2,
      padX: (sr.padX !== undefined && !isNaN(Number(sr.padX))) ? Number(sr.padX) : 5.5,
      padY: (sr.padY !== undefined && !isNaN(Number(sr.padY))) ? Number(sr.padY) : 2,
      outerPad: (sr.outerPad !== undefined && !isNaN(Number(sr.outerPad))) ? Number(sr.outerPad) : 2
    }));
  }
  return item.routes;
}

// 確保分站「轉乘」圓角矩形框預設屬性完整初始化
function ensureStopInterchangeDefaults(stop) {
  if (!stop) return;
  const C = appConfig.colors || {};
  const effVar = getStopEffectiveVariant(stop) || {};
  const activePreset = MAIN_THEME_PRESETS.find(t => t.key === currentActivePresetKey) || MAIN_THEME_PRESETS[0];

  const defaultMainColor = effVar.interchangeBg || C.interchangeDefaultBg || activePreset.bgColor || C.themePrimary || '#0d8556';
  const defaultMainText = C.interchangeDefaultText || activePreset.textColor || '#ffffff';
  const defaultRouteColor = effVar.routeBoxColor || C.routeBoxBg || activePreset.bgColor || '#0d8556';

  if (stop.hasInterchangeBox === undefined) stop.hasInterchangeBox = false;
  if (stop.interchangeTitleZh === undefined) stop.interchangeTitleZh = '轉乘';
  if (stop.interchangeTitleEn === undefined) stop.interchangeTitleEn = 'Interchange';
  if (!stop.interchangeLayout) stop.interchangeLayout = 'side_by_side';
  if (!stop.interchangeHeaderPos) stop.interchangeHeaderPos = 'top';
  if (!stop.interchangePointerStyle) stop.interchangePointerStyle = 'pointer';
  if (!stop.interchangePointerDir) stop.interchangePointerDir = 'auto';
  if (!stop.interchangePointerAlign) stop.interchangePointerAlign = 'center';
  if (stop.interchangeScale === undefined || isNaN(Number(stop.interchangeScale))) stop.interchangeScale = 100;
  if (stop.interchangeBoxWidth === undefined) stop.interchangeBoxWidth = '';
  if (stop.interchangeBorderRadius === undefined || isNaN(Number(stop.interchangeBorderRadius))) stop.interchangeBorderRadius = 4.2;
  if (stop.interchangeBorderWidth === undefined || isNaN(Number(stop.interchangeBorderWidth))) stop.interchangeBorderWidth = 1.5;
  if (!stop.interchangeBoxColor) stop.interchangeBoxColor = defaultMainColor;
  if (!stop.interchangeBoxTextColor) stop.interchangeBoxTextColor = defaultMainText;
  if (!stop.interchangeBodyBgColor) stop.interchangeBodyBgColor = '#ffffff';

  if (!Array.isArray(stop.interchangeRoutes)) {
    stop.interchangeRoutes = [];
  }
  stop.interchangeRoutes.forEach(item => {
    ensureInterchangeItemRoutesList(item, defaultRouteColor);
    if (item.nodeStyle === undefined) item.nodeStyle = item.showDot ? 'solid_dot' : 'none';
    if (item.nodeColor === undefined) item.nodeColor = '';
    if (item.stationZh === undefined) item.stationZh = '';
    if (item.stationEn === undefined) item.stationEn = '';
    if (item.destZh === undefined) item.destZh = '';
    if (item.destEn === undefined) item.destEn = '';
    if (item.discountText === undefined) item.discountText = '';
  });
}

// 渲染分站「轉乘」圓角矩形框（內部轉乘路線號碼框與時間表「此班次路線號碼框」100% 同款）
function renderStopInterchangeBoxHTML(stop, layoutMode = 'side_by_side') {
  if (!stop || !stop.hasInterchangeBox) return '';
  ensureStopInterchangeDefaults(stop);

  const C = appConfig.colors || {};
  const effVar = getStopEffectiveVariant(stop) || {};
  const defaultRouteColor = effVar.routeBoxColor || C.routeBoxBg || C.themePrimary || '#0d8556';
  const routeFontFamily = "'Roboto', 'Inter', 'Noto Sans TC', sans-serif";

  const routes = Array.isArray(stop.interchangeRoutes)
    ? stop.interchangeRoutes.filter(r => {
        const subRoutes = ensureInterchangeItemRoutesList(r, defaultRouteColor);
        const hasValidSubRoute = subRoutes.some(sr => sr.route && String(sr.route).trim() !== '');
        return (
          hasValidSubRoute ||
          (r.stationZh && r.stationZh.trim()) ||
          (r.stationEn && r.stationEn.trim()) ||
          (r.destZh && r.destZh.trim()) ||
          (r.destEn && r.destEn.trim()) ||
          (r.discountText && r.discountText.trim()) ||
          (r.nodeStyle && r.nodeStyle !== 'none')
        );
      })
    : [];

  const rawTitleZh = stop.interchangeTitleZh !== undefined ? stop.interchangeTitleZh : '轉乘';
  const rawTitleEn = stop.interchangeTitleEn !== undefined ? stop.interchangeTitleEn : 'Interchange';
  const headerPos = stop.interchangeHeaderPos || 'top';

  if (routes.length === 0 && (headerPos === 'none' || (!rawTitleZh && !rawTitleEn))) return '';

  const boxBg = stop.interchangeBoxColor || effVar.interchangeBg || C.interchangeDefaultBg || C.introBannerBg || '#0d8556';
  const boxText = stop.interchangeBoxTextColor || C.interchangeDefaultText || '#ffffff';
  const bodyBg = stop.interchangeBodyBgColor || '#ffffff';
  const pointerStyle = stop.interchangePointerStyle || 'pointer';
  const pointerAlign = stop.interchangePointerAlign || 'center';
  const customBoxWidth = formatCssSize(stop.interchangeBoxWidth, '');

  const rawPointerDir = stop.interchangePointerDir || 'auto';
  let resolvedPointerDir = rawPointerDir;
  if (rawPointerDir === 'auto') {
    if (layoutMode === 'stacked') resolvedPointerDir = 'top';
    else if (layoutMode === 'above_name') resolvedPointerDir = 'bottom';
    else resolvedPointerDir = 'left';
  }

  const scaleVal = Math.min(2.2, Math.max(0.5, (Number(stop.interchangeScale) || 100) / 100));
  const r = (v) => Math.round(v * scaleVal * 10) / 10;

  const baseBorderRadius = stop.interchangeBorderRadius !== undefined ? Number(stop.interchangeBorderRadius) : 4.2;
  const baseBorderWidth = stop.interchangeBorderWidth !== undefined ? Number(stop.interchangeBorderWidth) : 1.5;

  const titleZhLines = String(rawTitleZh || '').replace(/\\n/g, '\n').split(/\r?\n|\|/).map(s => s.trim()).filter(Boolean);
  const titleEnLines = String(rawTitleEn || '').replace(/\\n/g, '\n').split(/\r?\n|\|/).map(s => s.trim()).filter(Boolean);
  const hasHeader = headerPos !== 'none' && (titleZhLines.length > 0 || titleEnLines.length > 0);

  const routesListHTML = routes.map((item, rIdx) => {
    const nodeDefaultColor = item.nodeColor || effVar.nodeColor || effVar.color || C.routeLineColor || '#0d8556';
    const nodeIconHTML = renderInterchangeStopNodeIconHTML(item, nodeDefaultColor, scaleVal);

    const subRoutes = ensureInterchangeItemRoutesList(item, defaultRouteColor).filter(
      sr => sr.route && String(sr.route).trim() !== ''
    );

    // 與時間表「此班次路線號碼框設定」100% 同款渲染結構（支援框內細白線、內外邊距、窄體壓縮、字距與 N 下貓頭鷹）
    const routeBadgesHTML = subRoutes.map(sr => {
      const tokenStr = String(sr.route || '').trim();
      const badgeBg = sr.bgColor || item.bgColor || defaultRouteColor;
      const badgeText = sr.textColor || item.textColor || '#ffffff';
      const hasInnerLine = sr.innerWhiteLine !== undefined ? Boolean(sr.innerWhiteLine) : true;
      const showOwl = Boolean(sr.showOwlUnderN);
      const owlPos = sr.owlPosition || 'auto';

      const charCount = Array.from(tokenStr).length;
      const autoBaseFontSize = charCount >= 5 ? 9.5 : (charCount === 4 ? 11.2 : 13.0);
      const customFontSize = Number(sr.fontSizePx) || 0;
      const finalFontSizePx = r(customFontSize > 0 ? customFontSize : autoBaseFontSize);

      const srPadX = r(sr.padX !== undefined && !isNaN(Number(sr.padX)) ? Math.max(0, Number(sr.padX)) : 5.5);
      const srPadY = r(sr.padY !== undefined && !isNaN(Number(sr.padY)) ? Math.max(0, Number(sr.padY)) : 2);
      const srOuterPad = r(sr.outerPad !== undefined && !isNaN(Number(sr.outerPad)) ? Math.max(0, Number(sr.outerPad)) : (hasInnerLine ? 2 : 0));
      const srTightnessEm = (sr.tightnessEm !== undefined && !isNaN(Number(sr.tightnessEm))) ? Number(sr.tightnessEm) : -0.025;
      const srFontScaleX = (sr.fontScaleX !== undefined && !isNaN(Number(sr.fontScaleX))) ? Number(sr.fontScaleX) : 100;
      const srTokenGapPx = (sr.tokenGapPx !== undefined && !isNaN(Number(sr.tokenGapPx))) ? Number(sr.tokenGapPx) : 2;

      return `
        <div style="
          background-color:${badgeBg};
          color:${badgeText};
          padding:${srOuterPad}px;
          border-radius:${r(3)}px;
          box-sizing:border-box;
          display:inline-flex;
          align-items:stretch;
          justify-content:center;
          flex-shrink:0;
        ">
          <div style="
            ${hasInnerLine ? `border:${Math.max(0.9, r(1.25))}px solid rgba(255,255,255,0.92);` : 'border:none;'}
            border-radius:${r(2)}px;
            padding:${srPadY}px ${srPadX}px;
            min-width:${r(24)}px;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
          ">
            <div class="sheet-text-fix" style="
              font-family:${routeFontFamily};
              font-size:${finalFontSizePx}px;
              font-weight:600;
              letter-spacing:${srTightnessEm}em;
              line-height:1;
              color:${badgeText};
              white-space:nowrap;
              display:flex;
              align-items:center;
              justify-content:center;
            ">${renderRouteTokenWithOwlHTML(tokenStr, finalFontSizePx, badgeText, badgeBg, showOwl, {
              letterSpacingEm: srTightnessEm,
              fontScaleX: srFontScaleX,
              tokenGapPx: srTokenGapPx,
              owlPosition: owlPos
            })}</div>
          </div>
        </div>
      `;
    }).join('');

    const hasStationName = Boolean((item.stationZh && item.stationZh.trim()) || (item.stationEn && item.stationEn.trim()));
    const hasDestName = Boolean((item.destZh && item.destZh.trim()) || (item.destEn && item.destEn.trim()));
    const hasDiscount = Boolean(item.discountText && item.discountText.trim());

    const stationBlockHTML = hasStationName ? `
      <div style="display:flex; flex-direction:column; justify-content:center; line-height:1.06; min-width:0;">
        ${item.stationZh ? `<span class="sheet-text-fix" style="font-size:${r(8.4)}px; font-weight:800; color:#111827; display:block; white-space:nowrap;">${esc(item.stationZh)}</span>` : ''}
        ${item.stationEn ? `<span class="sheet-text-fix" style="font-size:${r(6.6)}px; font-weight:600; color:#334155; display:block; white-space:nowrap;">${esc(item.stationEn)}</span>` : ''}
      </div>
    ` : '';

    const destBlockHTML = hasDestName ? `
      <div style="display:flex; flex-direction:column; justify-content:center; line-height:1.06; min-width:0;">
        ${item.destZh ? `<span class="sheet-text-fix" style="font-size:${r(8.2)}px; font-weight:800; color:#111827; display:block; white-space:nowrap;">${esc(item.destZh)}</span>` : ''}
        ${item.destEn ? `<span class="sheet-text-fix" style="font-size:${r(6.5)}px; font-weight:600; color:#334155; display:block; white-space:nowrap;">${esc(item.destEn)}</span>` : ''}
      </div>
    ` : '';

    const discountBadgeHTML = hasDiscount ? `
      <span style="
        background-color:${boxBg};
        color:${boxText};
        font-size:${r(7.2)}px;
        font-weight:800;
        padding:${r(0.8)}px ${r(3.5)}px;
        border-radius:${r(2)}px;
        line-height:1.05;
        white-space:nowrap;
        margin-left:auto;
        flex-shrink:0;
      "><span class="sheet-text-fix" style="line-height:1;">${esc(item.discountText.trim())}</span></span>
    ` : '';

    return `
      <div style="
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        gap:${r(3.5)}px;
        ${rIdx > 0 ? `padding-top:${r(2)}px; border-top:0.6px dashed rgba(0,0,0,0.15);` : ''}
      ">
        ${nodeIconHTML}
        ${stationBlockHTML}
        ${routeBadgesHTML ? `<div style="display:inline-flex; align-items:center; flex-wrap:wrap; gap:${r(2)}px; flex-shrink:0;">${routeBadgesHTML}</div>` : ''}
        ${destBlockHTML}
        ${discountBadgeHTML}
      </div>
    `;
  }).join('');

  const horizontalHeaderInnerHTML = (titleZhLines.length <= 1 && titleEnLines.length <= 1)
    ? `<div style="display:flex; align-items:baseline; justify-content:center; gap:${r(3)}px; flex-wrap:wrap;">
         ${titleZhLines[0] ? `<span class="sheet-text-fix" style="font-size:${r(8.6)}px; font-weight:900; color:${boxText}; line-height:1.08; white-space:nowrap;">${esc(titleZhLines[0])}</span>` : ''}
         ${titleEnLines[0] ? `<span class="sheet-text-fix" style="font-size:${r(6.8)}px; font-weight:700; color:${boxText}; line-height:1.08; white-space:nowrap;">${esc(titleEnLines[0])}</span>` : ''}
       </div>`
    : `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1px;">
         ${titleZhLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(8.4)}px; font-weight:900; color:${boxText}; display:block; line-height:1.08; white-space:nowrap;">${esc(line)}</span>`).join('')}
         ${titleEnLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(6.5)}px; font-weight:700; color:${boxText}; display:block; line-height:1.06; white-space:nowrap;">${esc(line)}</span>`).join('')}
       </div>`;

  const sideHeaderInnerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1px;">
      ${titleZhLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(8.6)}px; font-weight:900; color:${boxText}; display:block; line-height:1.06; white-space:nowrap;">${esc(line)}</span>`).join('')}
      ${titleEnLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(6.0)}px; font-weight:700; color:${boxText}; display:block; line-height:1.04; white-space:nowrap;">${esc(line)}</span>`).join('')}
    </div>
  `;

  const isHorizontalHeader = headerPos === 'top' || headerPos === 'bottom';
  const flexDirectionMap = {
    top: 'column',
    bottom: 'column-reverse',
    left: 'row',
    right: 'row-reverse',
    none: 'column'
  };
  const containerFlexDir = flexDirectionMap[headerPos] || 'column';

  const mainContainerHTML = `
    <div style="
      display:inline-flex;
      flex-direction:${containerFlexDir};
      align-items:stretch;
      border:${r(baseBorderWidth)}px solid ${boxBg};
      border-radius:${r(baseBorderRadius)}px;
      background-color:${bodyBg};
      overflow:hidden;
      box-sizing:border-box;
      ${customBoxWidth ? `width:${customBoxWidth};` : ''}
      max-width:100%;
    ">
      ${hasHeader ? `
        <div style="
          background-color:${boxBg};
          color:${boxText};
          padding:${isHorizontalHeader ? `${r(1.8)}px ${r(6)}px` : `${r(2.5)}px ${r(5)}px`};
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          line-height:1.05;
          flex-shrink:0;
        ">
          ${isHorizontalHeader ? horizontalHeaderInnerHTML : sideHeaderInnerHTML}
        </div>
      ` : ''}
      ${routes.length > 0 ? `
        <div style="
          padding:${r(2.5)}px ${r(5.5)}px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:${r(2)}px;
          background-color:${bodyBg};
          flex:1;
          min-width:0;
        ">
          ${routesListHTML}
        </div>
      ` : ''}
    </div>
  `;

  const pointerSvgHTML = renderInterchangePointerSvgHTML(pointerStyle, resolvedPointerDir, boxBg, scaleVal, pointerAlign);
  const wrapperFlexDir =
    resolvedPointerDir === 'top' ? 'column' :
    resolvedPointerDir === 'bottom' ? 'column-reverse' :
    resolvedPointerDir === 'right' ? 'row-reverse' :
    'row';

  const wrapperMarginCss =
    layoutMode === 'stacked' ? `margin-top:${r(2)}px;` :
    layoutMode === 'above_name' ? `margin-bottom:${r(2)}px;` :
    '';

  return `
    <div style="
      display:inline-flex;
      flex-direction:${wrapperFlexDir};
      align-items:center;
      ${wrapperMarginCss}
      flex-shrink:0;
      ${customBoxWidth ? `width:${customBoxWidth};` : ''}
      max-width:100%;
    ">
      ${pointerSvgHTML}
      ${mainContainerHTML}
    </div>
  `;
}

function copyMainDestToRouteBox(bIdx) {
  const R = appConfig.rightData;
  const boxes = ensureHeaderRouteBoxesSynced();
  if (!boxes[bIdx]) return;
  const src = boxes[0] || R;
  boxes[bIdx].destZh = src.destZh || '';
  boxes[bIdx].destEn = src.destEn || '';
  boxes[bIdx].viaZh = src.viaZh || '';
  boxes[bIdx].viaEn = src.viaEn || '';
  boxes[bIdx].viaZhFontSizePx = Number(src.viaZhFontSizePx) || 12.5;
  boxes[bIdx].viaEnFontSizePx = Number(src.viaEnFontSizePx) || 10.5;
  boxes[bIdx].viaZhBold = src.viaZhBold !== false;
  boxes[bIdx].viaZhItalic = Boolean(src.viaZhItalic);
  boxes[bIdx].viaEnBold = src.viaEnBold !== false;
  boxes[bIdx].viaEnItalic = Boolean(src.viaEnItalic);
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已將 #1 目的地及途徑（含字型設定）複製至路線號碼框 #${bIdx + 1}`);
}

function updateRightField(field, val) {
  const R = appConfig.rightData;
  if (field === 'viaZh') {
    val = String(val || '').replace(/^經\s*/, '');
  } else if (field === 'viaEn') {
    val = String(val || '').replace(/^via\s+/i, '');
  }

  R[field] = val;

  if (field === 'routeLayoutMode') {
    R.headerTwoPerRow = (val === 'inline_left');
    if (val === 'inline_left') R.headerLayoutMode = 'one_row';
    else if (val === 'all_in_row') R.headerLayoutMode = 'all_routes_first';
    else R.headerLayoutMode = 'two_rows';
  } else if (field === 'headerLayoutMode') {
    R.headerTwoPerRow = (val === 'one_row');
    if (val === 'one_row') R.routeLayoutMode = 'inline_left';
    else if (val === 'all_routes_first') {
      R.routeLayoutMode = 'all_in_row';
      R.destLayoutMode = 'shared_below';
    } else {
      R.routeLayoutMode = 'single_row';
    }
  } else if (field === 'headerTwoPerRow') {
    R.headerLayoutMode = val ? 'one_row' : 'two_rows';
    R.routeLayoutMode = val ? 'inline_left' : 'single_row';
  }

  if (Array.isArray(R.routeBoxes) && R.routeBoxes[0]) {
    if (field === 'routeNumber') R.routeBoxes[0].routeNumber = val;
    if (field === 'routeBoxInnerWhiteLine') R.routeBoxes[0].innerWhiteLine = Boolean(val);
    if (field === 'destZh') R.routeBoxes[0].destZh = val;
    if (field === 'destEn') R.routeBoxes[0].destEn = val;
    if (field === 'viaZh') R.routeBoxes[0].viaZh = val;
    if (field === 'viaEn') R.routeBoxes[0].viaEn = val;
    if (['viaZhFontSizePx', 'viaEnFontSizePx', 'viaZhBold', 'viaZhItalic', 'viaEnBold', 'viaEnItalic'].includes(field)) {
      R.routeBoxes[0][field] = val;
    }
  }

  renderA4Sheet();
  if ([
    'introEnabled',
    'routeBoxInnerWhiteLine',
    'headerTwoPerRow',
    'headerLayoutMode',
    'routeLayoutMode',
    'destLayoutMode',
    'destViaStyle',
    'headerMentionedInnerWhiteLine',
    'introIconType',
    'introZhBold',
    'introZhItalic',
    'introEnBold',
    'introEnItalic',
    'viaZhBold',
    'viaZhItalic',
    'viaEnBold',
    'viaEnItalic'
  ].includes(field)) {
    renderEditorSidebar();
  }
}

// 在頂部「路線號碼框 #N」直接捆綁指定的班次時間表
function bindHeaderRouteBoxToVariant(bIdx, variantId) {
  const boxes = ensureHeaderRouteBoxesSynced();
  const box = boxes[bIdx];
  if (!box) return;
  box.boundVariantId = variantId || '';

  if (variantId) {
    const vIdx = (appConfig.variants || []).findIndex(v => v.id === variantId);
    if (vIdx !== -1) {
      const v = appConfig.variants[vIdx];
      v.boundToId = box.id;
      if (box.routeNumber && !v.routeNumber) {
        v.routeNumber = box.routeNumber;
      }
      if (!box.bgColor && v.color) {
        box.bgColor = v.color;
      }
    }
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  if (variantId) {
    showToast('已將此路線號碼框捆綁至班次時間表並同步設定');
  }
}

// 2. 取得分站目前的節點類別：'stop' (一般站點) | 'corridor' (走廊 353) | 'tunnel' (隧道)
function getStopNodeKind(stop) {
  if (!stop) return 'stop';
  if (stop.isTunnelStop || stop.hasTunnel || stop.isTunnel || stop.type === 'tunnel') {
    return 'tunnel';
  }
  if (stop.isCorridorStop || stop.hasCorridor || stop.isCorridor || stop.type === 'corridor') {
    return 'corridor';
  }
  return 'stop';
}

// 3. 隨意切換分站為「站點 (stop) / 走廊 (corridor) / 隧道 (tunnel)」，並無損記憶及還原原本的站點類型
function setStopNodeKind(sIdx, targetKind, event = null) {
  if (event) event.stopPropagation();
  const stop = appConfig.stops[sIdx];
  if (!stop) return;

  ensureStopLandmarkAndIgnoreProps(stop);
  const variants = appConfig.variants || [];
  const currentKind = getStopNodeKind(stop);
  if (currentKind === targetKind) return;

  // 若目前是一般站點，先備份原本的站點屬性，以便日後切回「站點」時無損還原
  if (currentKind === 'stop') {
    if (stop.type && !['corridor', 'tunnel'].includes(stop.type)) {
      stop._savedStopType = stop.type;
    }
    if (stop.variantType && typeof stop.variantType === 'object') {
      stop._savedVariantType = { ...stop.variantType };
    }
  }

  if (!stop.variantType || typeof stop.variantType !== 'object') {
    stop.variantType = {};
  }

  if (targetKind === 'corridor') {
    stop.hasCorridor = true;
    stop.isCorridor = true;
    stop.hasTunnel = false;
    stop.isTunnel = false;
    stop.type = 'corridor';
    variants.forEach(v => {
      stop.variantType[v.id] = 'corridor';
    });
    if (!stop.corridorPipeHeightPx) stop.corridorPipeHeightPx = 24;
    showToast(`已將 #${sIdx + 1}「${stop.zh || '分站'}」切換為【快速公路/走廊】標誌`);
  } else if (targetKind === 'tunnel') {
    stop.hasTunnel = true;
    stop.isTunnel = true;
    stop.hasCorridor = false;
    stop.isCorridor = false;
    stop.type = 'tunnel';
    variants.forEach(v => {
      stop.variantType[v.id] = 'tunnel';
    });
    if (!stop.corridorPipeHeightPx) stop.corridorPipeHeightPx = 24;
    showToast(`已將 #${sIdx + 1}「${stop.zh || '分站'}」切換為【隧道】標誌`);
  } else {
    // 切回一般「站點」
    stop.hasCorridor = false;
    stop.isCorridor = false;
    stop.hasTunnel = false;
    stop.isTunnel = false;

    const total = appConfig.stops.length;
    const fallbackType = sIdx === 0 ? 'origin' : (sIdx === total - 1 ? 'destination' : 'normal');
    const restoredType = (stop._savedStopType && !['corridor', 'tunnel'].includes(stop._savedStopType))
      ? stop._savedStopType
      : fallbackType;

    stop.type = restoredType;
    variants.forEach(v => {
      const savedVt = stop._savedVariantType?.[v.id];
      stop.variantType[v.id] = (savedVt && !['corridor', 'tunnel'].includes(savedVt)) ? savedVt : restoredType;
    });
    showToast(`已將 #${sIdx + 1}「${stop.zh || '分站'}」切換回【巴士站點】`);
  }

  renderA4Sheet();
  renderEditorSidebar();
}

// 4. 一鍵套用香港常用走廊 / 隧道中英文名稱快捷項目
function applyQuickSpecialPassPreset(sIdx, zhName, enName) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  stop.zh = zhName;
  stop.en = enName;
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已套用名稱：${zhName}`);
}

// 將同欄內連續相同分段收費區間的分站歸組，並保留獨立的雙數分段淺色底寬度
function groupColumnStopsByFareZone(colStops) {
  const groups = [];
  colStops.forEach(stop => {
    const prevGroup = groups[groups.length - 1];
    if (
      prevGroup &&
      prevGroup.isEvenZone === stop.isEvenZoneStop &&
      (!stop.isEvenZoneStop || prevGroup.fareZoneNumber === stop.fareZoneNumber)
    ) {
      prevGroup.stops.push(stop);
    } else {
      groups.push({
        isEvenZone: stop.isEvenZoneStop,
        fareZoneNumber: stop.fareZoneNumber,
        zoneWidth: stop.fareZoneWidth || '100%',
        stops: [stop]
      });
    }
  });
  return groups;
}

// 處理「周邊地標灰底標籤」內部中英文文字隔行（支援 Enter 換行、\n 或 | 分行，並保持對齊與緊湊行高）
function formatLandmarkTextWithLineBreaks(text, textAlign = 'center') {
  if (text === null || text === undefined || text === '') return '';
  const lines = String(text)
    .replace(/\\n/g, '\n')
    .split(/\r?\n|\|/)
    .map(s => s.trim())
    .filter((s, idx, arr) => s !== '' || arr.length === 1);

  return lines
    .map((line, lIdx) => `<span style="display:block; text-align:${textAlign}; line-height:1.12; ${lIdx > 0 ? 'margin-top:0.5px;' : ''} word-break:keep-all; overflow-wrap:break-word;">${esc(line)}</span>`)
    .join('');
}

// 渲染分站周邊地標灰底 Label 組（地標 Label 內距、圓角與中英文字體大小嚴格根據 L.landmarkZhFontSizePx / L.landmarkPadX / L.landmarkPadY 動態改變）
function renderStopLandmarksGroupHTML(landmarks, opts = {}) {
  const valid = (landmarks || []).filter(lm => (lm.zh && lm.zh.trim()) || (lm.en && lm.en.trim()));
  if (valid.length === 0) return '';

  const L = ensureStopAndLineStyleConfigSynced();
  const C = ensureColorsConfigSynced();
  const justify = opts.justify || 'flex-end';
  const alignItems = opts.alignItems || 'center';
  const rowGapPx = opts.rowGapPx !== undefined ? Math.max(0, Number(opts.rowGapPx)) : 2;

  const zhFontPx = Math.max(7.5, Number(L.stopNameFontSizePx) || 10.4);
  const scale = zhFontPx / 10.0;
  const lmZhPx = Math.max(6.8, Number(L.landmarkZhFontSizePx) || Math.round(7.35 * Math.pow(scale, 0.86) * 10) / 10);
  const lmEnPx = Math.max(5.8, Number(L.landmarkEnFontSizePx) || Math.round(lmZhPx * 0.865 * 10) / 10);
  const padX = Math.max(3.8, Number(L.landmarkPadX) || Math.round(4.4 * Math.pow(scale, 1.55) * 10) / 10);
  const padY = Math.max(1.0, Number(L.landmarkPadY) || Math.round(1.35 * Math.pow(scale, 2.0) * 10) / 10);
  const radiusPx = zhFontPx >= 13.0 ? 3.8 : (zhFontPx >= 11.2 ? 3.0 : 2.4);

  const badgesHTML = valid.map(lm => {
    const extraW = Math.max(0, Number(lm.extraWidthPx) || 0);
    const padRight = padX + extraW;
    return `
      <span class="sheet-badge" style="
        background-color:${C.landmarkBg || '#e5e7eb'};
        color:${C.landmarkText || '#111827'};
        padding:${padY}px ${padRight}px ${padY}px ${padX}px;
        border-radius:${radiusPx}px;
        display:inline-flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        box-sizing:border-box;
        max-width:100%;
      ">
        ${lm.zh ? `<span class="sheet-text-fix" style="font-size:${lmZhPx}px; font-weight:700; line-height:1.1; display:block; text-align:center;">${formatStopNameWithLineBreaks(lm.zh, '')}</span>` : ''}
        ${lm.en ? `<span class="sheet-text-fix" style="font-size:${lmEnPx}px; font-weight:600; line-height:1.04; display:block; text-align:center;">${formatStopNameWithLineBreaks(lm.en, '')}</span>` : ''}
      </span>
    `;
  }).join('');

  return `
    <div style="display:flex; flex-wrap:wrap; gap:${rowGapPx}px; justify-content:${justify}; align-items:${alignItems}; width:100%;">
      ${badgesHTML}
    </div>
  `;
}

// 渲染單一分站（收費 Label、區域 Label、地標 Label、起訖站色塊 Label、站點圓圈與終點引線長度嚴格根據目前站點數量與字號比例動態改變）
function renderStopItemHTML(stop, metrics) {
  ensureStopLandmarkAndIgnoreProps(stop);
  const L = ensureStopAndLineStyleConfigSynced();
  const C = ensureColorsConfigSynced();
  const effVar = getStopEffectiveVariant(stop) || {};
  const isTunnelStop = Boolean(stop.isTunnelStop || stop.hasTunnel || stop.type === 'tunnel');
  const isCorridorStop = !isTunnelStop && Boolean(stop.isCorridorStop || stop.hasCorridor || stop.type === 'corridor');
  const isSpecialPassStop = isCorridorStop || isTunnelStop;
  const isColoredStop = stop.isColoredBgStop && !isSpecialPassStop;

  const hasDistrict = Boolean((stop.districtZh && stop.districtZh.trim()) || (stop.districtEn && stop.districtEn.trim()));
  const hasFare = stop.hasNewFare;
  const fareFontFamily = "'Arial Black', 'Arial', sans-serif";

  const zhFontPx = Math.max(7.5, Number(L.stopNameFontSizePx) || 10.4);
  const enFontPx = Math.max(6.0, Number(L.stopEnFontSizePx) || 8.4);
  const typographyScale = zhFontPx / 10.0;

  const stopZhWeight = L.stopZhWeight || '700';
  const stopEnWeight = L.stopEnWeight || '600';
  const coloredZhWeight = L.coloredStopZhWeight || '900';
  const coloredEnWeight = L.coloredStopEnWeight || '700';

  const stopNameZhColor = C.stopNameZhColor || '#111827';
  const stopNameEnColor = C.stopNameEnColor || '#1f2937';
  const stopRemarkColor = C.stopRemarkColor || '#475569';

  const hasFirstStopFareAlignedBadgesHere = !isSpecialPassStop && metrics.isParallel && stop.index === 0 && metrics.tracks.some(t => {
    const vState = stop.variantLineState?.[t.variant.id];
    const vMode = getVariantOriginBadgeMode(t.variant);
    if (vMode === 'all_first_stop_fare') {
      return vState ? vState.hasActiveStops !== false : true;
    }
    return Boolean(vState?.isVariantOrigin);
  });

  const hasAboveNodeBadgesHere = !isSpecialPassStop && metrics.isParallel && metrics.tracks.some(t => {
    const vState = stop.variantLineState?.[t.variant.id];
    const vMode = getVariantOriginBadgeMode(t.variant);
    if (vMode !== 'above_node' || !vState?.isVariantOrigin) return false;
    return stop.index > 0 || !hasFare;
  });

  const placeBadgesInFareCell = hasFare && hasFirstStopFareAlignedBadgesHere;
  const placeDefaultBadgesInStandaloneRow = !hasFare && stop.index === 0 && !isSpecialPassStop && metrics.isParallel && metrics.tracks.some(t => {
    const vState = stop.variantLineState?.[t.variant.id];
    return getVariantOriginBadgeMode(t.variant) === 'all_first_stop_fare' && (vState ? vState.hasActiveStops !== false : true);
  });

  const districtTextColor = (effVar.districtText || C.districtText) === 'black' ? '#111827' : '#ffffff';
  const fareTextColor = (effVar.fareText || C.fareText) === 'black' ? '#111827' : '#ffffff';
  const coloredStopBgColor = effVar.originDestBg || C.originDestBg || '#0d8556';
  const coloredStopTextColor = (effVar.originDestText || C.originDestText) === 'black' ? '#111827' : '#ffffff';

  // 1. 區域 Label 尺寸与字號（當開啟自動適配時優先跟隨全局按站數計算的 L.districtFontSizePx / L.districtPadX / L.districtPadY）
  const rawDistrictWidth = String(stop.districtWidth !== undefined ? stop.districtWidth : '100%').trim();
  const isDistrictAutoFit = rawDistrictWidth === '' || rawDistrictWidth === 'auto' || rawDistrictWidth === 'fit-content';
  const customDistrictWidth = isDistrictAutoFit ? '' : formatCssSize(rawDistrictWidth, '100%');
  const districtExtraPx = Math.max(0, Number(stop.districtExtraPx) || 0);

  const globalDistrictFontPx = Math.round(Math.max(8.6, Math.min(15.0, (Number(L.districtFontSizePx) || (9.3 * Math.pow(typographyScale, 0.85))))) * 10) / 10;
  const districtFontSizePx = (!L.autoScaleByStopCount && stop.districtFontSizePx !== undefined && !isNaN(Number(stop.districtFontSizePx)))
    ? Math.max(6, Number(stop.districtFontSizePx))
    : globalDistrictFontPx;

  const districtPadY = (!L.autoScaleByStopCount && stop.districtPadY !== undefined && !isNaN(Number(stop.districtPadY)))
    ? Math.max(0, Number(stop.districtPadY))
    : Math.max(1.0, Number(L.districtPadY) || Math.round(1.25 * Math.pow(typographyScale, 1.85) * 10) / 10);

  const districtPadX = (!L.autoScaleByStopCount && stop.districtPadX !== undefined && !isNaN(Number(stop.districtPadX)))
    ? Math.max(0, Number(stop.districtPadX))
    : Math.max(4.4, Number(L.districtPadX) || Math.round(4.9 * Math.pow(typographyScale, 1.55) * 10) / 10);

  const districtRadiusPx = zhFontPx >= 13.0 ? 3.8 : (zhFontPx >= 11.2 ? 3.0 : 2.4);

  let districtBadgeWidthStyle = 'width:fit-content;';
  let districtPadRightPx = districtPadX + districtExtraPx;
  if (customDistrictWidth) {
    districtPadRightPx = districtPadX;
    if (districtExtraPx > 0 && customDistrictWidth !== '100%') {
      districtBadgeWidthStyle = `width:calc(${customDistrictWidth} + ${districtExtraPx}px);`;
    } else {
      districtBadgeWidthStyle = `width:${customDistrictWidth};`;
    }
  }

  // 2. 收費 Label 尺寸、字號與收費底線長度／粗度
  const rawFareLineWidth = String(stop.fareLineWidth !== undefined ? stop.fareLineWidth : '100%').trim();
  const isLineMatchBox = rawFareLineWidth === 'match_box';
  const customFareLineWidth = isLineMatchBox ? '100%' : formatCssSize(rawFareLineWidth, '100%');
  const fareLineThicknessPx = (!L.autoScaleByStopCount && stop.fareLineThicknessPx !== undefined && !isNaN(Number(stop.fareLineThicknessPx)))
    ? Math.max(0.5, Number(stop.fareLineThicknessPx))
    : Math.max(1.8, Number(L.fareLineThicknessPx) || Math.round(1.95 * Math.pow(typographyScale, 0.65) * 10) / 10);

  const customFareBoxWidth = formatCssSize(stop.fareBoxWidth || stop.fareWidth, '');
  const fareExtraPx = Math.max(0, Number(stop.fareLabelExtraPx) || 0);
  const fareBoxPadX = (!L.autoScaleByStopCount && stop.fareBoxPadX !== undefined && !isNaN(Number(stop.fareBoxPadX)))
    ? Math.max(0, Number(stop.fareBoxPadX))
    : Math.max(5.2, Number(L.fareBoxPadX) || Math.round(5.9 * Math.pow(typographyScale, 1.05) * 10) / 10);
  const fareBoxPadY = (!L.autoScaleByStopCount && stop.fareBoxPadY !== undefined && !isNaN(Number(stop.fareBoxPadY)))
    ? Math.max(0, Number(stop.fareBoxPadY))
    : Math.max(1.1, Number(L.fareBoxPadY) || Math.round(1.35 * Math.pow(typographyScale, 1.65) * 10) / 10);
  const fareRadiusPx = zhFontPx >= 13.0 ? 4.2 : (zhFontPx >= 11.2 ? 3.4 : 2.8);

  const globalFareFontPx = Math.round(Math.max(15.0, Math.min(24.5, (Number(L.fareFontSizePx) || (16.8 * Math.pow(typographyScale, 0.70))))) * 10) / 10;
  const fareFontSizePx = (!L.autoScaleByStopCount && stop.fareFontSizePx !== undefined && !isNaN(Number(stop.fareFontSizePx)))
    ? Math.max(8, Number(stop.fareFontSizePx))
    : globalFareFontPx;

  const customColoredBoxWidth = formatCssSize(stop.coloredBoxWidth, '');
  const coloredBoxExtraPx = Math.max(0, Number(stop.coloredBoxExtraPx) || 0);
  const nodeNameGapPx = Math.max(0, Number(L.nodeToNameGapPx) ?? 5.2);

  const ignoreAll = Boolean(stop.ignoreLandmarkLimit);
  const ignoreZh = ignoreAll || Boolean(stop.ignoreLandmarkZh);
  const ignoreEn = ignoreAll || Boolean(stop.ignoreLandmarkEn);
  const anyIgnoreLandmark = ignoreZh || ignoreEn;
  const bothIgnoreLandmark = ignoreZh && ignoreEn;

  const mtrBadgeHTML = stop.hasMtr
    ? createMtrLogoSvg(Math.max(10.0, zhFontPx + 1.4), effVar.mtrSvgBg || C.mtrSvgBg, effVar.mtrSvgFg || C.mtrSvgFg)
    : '';
  const trailingBadgesHTML = mtrBadgeHTML;

  // 區域 Label 子行
  const districtSubRowHTML = hasDistrict ? `
    <div style="display:flex; align-items:stretch; width:100%; flex-shrink:0;">
      ${renderTrackPassThroughHTML(stop, metrics)}
      <div style="flex:1; min-width:0; padding:0px 6px ${hasFare ? '2.0px' : '1.5px'} ${nodeNameGapPx}px; display:flex; flex-direction:column; justify-content:flex-end;">
        <div style="line-height:0; width:100%; display:flex; align-items:center;">
          <span class="sheet-badge" style="
            background-color:${effVar.districtBg || C.districtBg};
            color:${districtTextColor};
            padding:${districtPadY}px ${districtPadRightPx}px ${districtPadY}px ${districtPadX}px;
            border-radius:${districtRadiusPx}px;
            font-size:${districtFontSizePx}px;
            font-weight:700;
            letter-spacing:0.01em;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
            ${districtBadgeWidthStyle}
            max-width:100%;
          ">
            <span class="sheet-text-fix" style="display:block; line-height:1.06; text-align:center; transform:translateY(var(--export-text-offset, 0px));">${esc(stop.districtZh)}${stop.districtEn ? ' ' + esc(stop.districtEn) : ''}</span>
          </span>
        </div>
      </div>
    </div>
  ` : '';

  // 分段收費 Label 子行
  const fareBgColor = effVar.fareBg || C.fareBg;
  const hasFareLine = customFareLineWidth !== '0px' && customFareLineWidth !== '0%';
  const fareLabelBottomOffsetPx = hasFareLine ? Math.round((3.8 + fareLineThicknessPx) * 10) / 10 : 2;

  let fareBadgeWidthStyle = 'width:fit-content;';
  let fareBadgePadRightPx = fareBoxPadX + fareExtraPx;
  if (customFareBoxWidth) {
    fareBadgePadRightPx = fareBoxPadX;
    if (fareExtraPx > 0 && customFareBoxWidth !== '100%') {
      fareBadgeWidthStyle = `width:calc(${customFareBoxWidth} + ${fareExtraPx}px);`;
    } else {
      fareBadgeWidthStyle = `width:${customFareBoxWidth};`;
    }
  }

  const fareBadgeElementHTML = `
    <span class="sheet-badge" style="
      background-color:${fareBgColor};
      color:${fareTextColor};
      padding:${fareBoxPadY}px ${fareBadgePadRightPx}px ${Math.max(0, fareBoxPadY - 0.2)}px ${fareBoxPadX}px;
      ${fareBadgeWidthStyle}
      max-width:100%;
      border-radius:${fareRadiusPx}px;
      font-family:${fareFontFamily} !important;
      font-size:${fareFontSizePx}px;
      font-weight:900;
      letter-spacing:0.01em;
      display:inline-flex;
      align-items:center;
      justify-content:flex-start;
      box-sizing:border-box;
    ">
      <span class="sheet-text-fix" style="font-family:${fareFontFamily} !important; font-weight:900; display:block; line-height:1.05; text-align:left; transform:translateY(var(--export-text-offset, 0px));">${esc(stop.fare)}</span>
    </span>
  `;

  const fareSubRowHTML = hasFare ? `
    <div style="display:flex; align-items:stretch; width:100%; flex-shrink:0;">
      ${placeBadgesInFareCell
        ? renderOriginParallelNumbersTrackCellHTML(stop, metrics, 'first_stop_fare_row', fareLabelBottomOffsetPx)
        : renderTrackPassThroughHTML(stop, metrics)}
      <div style="flex:1; min-width:0; padding:0px 6px 0px ${nodeNameGapPx}px; display:flex; flex-direction:column; justify-content:flex-end;">
        <div style="line-height:1; width:100%; display:flex; flex-direction:column; align-items:flex-start;">
          ${isLineMatchBox ? `
            <div style="display:inline-flex; flex-direction:column; align-items:stretch; max-width:100%;">
              ${fareBadgeElementHTML}
              ${hasFareLine ? `
                <div style="
                  width:100%;
                  height:${fareLineThicknessPx}px;
                  background-color:${fareBgColor};
                  margin-top:2.2px;
                  margin-bottom:2px;
                  border-radius:1px;
                "></div>
              ` : `<div style="height:2px;"></div>`}
            </div>
          ` : `
            <div style="display:flex; align-items:center; flex-wrap:wrap; width:100%; max-width:100%;">
              ${fareBadgeElementHTML}
            </div>
            ${hasFareLine ? `
              <div style="
                width:${customFareLineWidth};
                max-width:100%;
                height:${fareLineThicknessPx}px;
                background-color:${fareBgColor};
                margin-top:2.2px;
                margin-bottom:2px;
                border-radius:1px;
              "></div>
            ` : `<div style="height:2px;"></div>`}
          `}
        </div>
      </div>
    </div>
  ` : '';

  const defaultStandaloneOriginRowHTML = placeDefaultBadgesInStandaloneRow ? `
    <div style="display:flex; align-items:stretch; width:100%; height:${Math.ceil(metrics.badgeSize || 14) + 3}px; flex-shrink:0;">
      ${renderOriginParallelNumbersTrackCellHTML(stop, metrics, 'first_stop_fare_row', 1.5)}
      <div style="flex:1;"></div>
    </div>
  ` : '';

  const aboveNodeOriginRowHTML = hasAboveNodeBadgesHere ? `
    <div style="display:flex; align-items:stretch; width:100%; height:${Math.ceil(metrics.badgeSize || 14) + 2}px; flex-shrink:0;">
      ${renderOriginParallelNumbersTrackCellHTML(stop, metrics, 'above_node', 1)}
      <div style="flex:1;"></div>
    </div>
  ` : '';

  // 周邊地標灰底 Label
  const defaultLmPos = stop.landmarkPosition || 'middle';
  const lmRowGapPx = stop.landmarkRowGapPx !== undefined ? Math.max(0, Number(stop.landmarkRowGapPx)) : 2;
  const rawLandmarks = Array.isArray(stop.landmarks) ? stop.landmarks.filter(lm => (lm.zh && lm.zh.trim()) || (lm.en && lm.en.trim())) : [];

  const rightMiddleLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'middle');
  const rightBottomLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'bottom_right');
  const belowNameLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'below_name');
  const afterCalloutsLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'after_callouts');
  const hasRightLandmarks = rightMiddleLandmarks.length > 0 || rightBottomLandmarks.length > 0;
  const isOnlyBottomRightLm = rightBottomLandmarks.length > 0 && rightMiddleLandmarks.length === 0;

  const rightLandmarkContainerPosStyle = bothIgnoreLandmark
    ? `position:absolute; right:6px; ${isOnlyBottomRightLm ? 'bottom:1.5px;' : 'top:50%; transform:translateY(-50%);'} z-index:4;`
    : `margin-left:auto; padding-left:4px; align-self:${isOnlyBottomRightLm ? 'flex-end' : 'stretch'}; position:relative; z-index:1;`;

  const rightLandmarksHTML = hasRightLandmarks ? `
    <div style="
      ${rightLandmarkContainerPosStyle}
      max-width:60%;
      display:flex;
      flex-direction:column;
      gap:${lmRowGapPx}px;
      justify-content:${isOnlyBottomRightLm ? 'flex-end' : 'center'};
      align-items:flex-end;
      flex-shrink:0;
    ">
      ${rightMiddleLandmarks.length > 0 ? `
        <div style="margin:auto 0; width:100%; display:flex; justify-content:flex-end;">
          ${renderStopLandmarksGroupHTML(rightMiddleLandmarks, { justify: 'flex-end', alignItems: 'center', rowGapPx: lmRowGapPx })}
        </div>
      ` : ''}
      ${rightBottomLandmarks.length > 0 ? `
        <div style="margin-top:auto; width:100%; display:flex; justify-content:flex-end;">
          ${renderStopLandmarksGroupHTML(rightBottomLandmarks, { justify: 'flex-end', alignItems: 'flex-end', rowGapPx: lmRowGapPx })}
        </div>
      ` : ''}
    </div>
  ` : '';

  const belowNameLandmarksHTML = belowNameLandmarks.length > 0 ? `
    <div style="margin-top:2px; width:100%;">
      ${renderStopLandmarksGroupHTML(belowNameLandmarks, { justify: 'flex-start', alignItems: 'center', rowGapPx: lmRowGapPx })}
    </div>
  ` : '';

  const afterCalloutsBadgesRawHTML = afterCalloutsLandmarks.length > 0 ? `
    <div style="display:inline-flex; flex-direction:column; align-items:flex-start; vertical-align:middle; flex-shrink:0; max-width:100%;">
      ${renderStopLandmarksGroupHTML(afterCalloutsLandmarks, { justify: 'flex-start', alignItems: 'center', rowGapPx: lmRowGapPx })}
    </div>
  ` : '';

  // 站名下方中英文注解
  const hasStopRemark = Boolean((stop.remarkZh && stop.remarkZh.trim()) || (stop.remarkEn && stop.remarkEn.trim()));
  const hasRemarkSymbol = Boolean(stop.remarkSymbol && String(stop.remarkSymbol).trim() !== '');
  const remarkSymbolGutterPx = hasRemarkSymbol ? 5.5 : 0;
  const remarkFontPx = Math.max(7.2, Math.round(enFontPx * 0.88 * 10) / 10);
  const remarkTopLeftSymbolHTML = hasRemarkSymbol ? `
    <span class="sheet-text-fix" style="
      position:absolute;
      left:0px;
      top:-0.5px;
      font-size:${remarkFontPx}px;
      font-weight:900;
      color:${stopRemarkColor};
      line-height:1;
      z-index:6;
      pointer-events:none;
    ">${esc(stop.remarkSymbol)}</span>
  ` : '';

  const stopRemarkHTML = hasStopRemark ? `
    <div style="font-size:${remarkFontPx}px; color:${stopRemarkColor}; line-height:1.15; margin-top:1.5px; position:relative; padding-left:${remarkSymbolGutterPx}px;">
      ${remarkTopLeftSymbolHTML}
      ${stop.remarkZh ? `<div class="sheet-text-fix" style="display:block;">${formatStopNameWithLineBreaks(stop.remarkZh, '')}</div>` : ''}
      ${stop.remarkEn ? `<div class="sheet-text-fix" style="display:block;">${formatStopNameWithLineBreaks(stop.remarkEn, '')}</div>` : ''}
    </div>
  ` : '';

  // 站名旁註符號
  const hasSymbol = Boolean(stop.symbol && String(stop.symbol).trim() !== '');
  const symbolPrefixGutterPx = hasSymbol ? 6.5 : 0;
  const topLeftSymbolHTML = hasSymbol ? `
    <span class="sheet-text-fix" style="
      position:absolute;
      left:0px;
      top:-0.5px;
      font-size:${Math.max(7.8, zhFontPx - 1.2)}px;
      font-weight:900;
      color:${stopNameZhColor};
      line-height:1;
      z-index:6;
      pointer-events:none;
    ">${esc(stop.symbol)}</span>
  ` : '';

  // 大字宣傳橫幅 & 「轉乘」圓角矩形框
  const promoLayout = stop.timePromoLayout || 'side_by_side';
  const effectivePromoLayout = (promoLayout === 'side_by_side' && hasRightLandmarks) ? 'stacked' : promoLayout;
  const sideBySidePromoHTML = (stop.hasTimePromo && effectivePromoLayout === 'side_by_side')
    ? renderTimePromoBadgeHTML(stop, 'side_by_side')
    : '';
  const stackedPromoHTML = (stop.hasTimePromo && effectivePromoLayout === 'stacked')
    ? renderTimePromoBadgeHTML(stop, 'stacked')
    : '';

  const interchangeLayout = stop.interchangeLayout || 'side_by_side';
  const sideBySideInterchangeHTML = (stop.hasInterchangeBox && interchangeLayout === 'side_by_side')
    ? renderStopInterchangeBoxHTML(stop, 'side_by_side')
    : '';
  const rightAlignedInterchangeHTML = (stop.hasInterchangeBox && interchangeLayout === 'right_aligned')
    ? `<div style="margin-left:auto; display:inline-flex; align-items:center; flex-shrink:0;">${renderStopInterchangeBoxHTML(stop, 'right_aligned')}</div>`
    : '';
  const stackedInterchangeHTML = (stop.hasInterchangeBox && interchangeLayout === 'stacked')
    ? renderStopInterchangeBoxHTML(stop, 'stacked')
    : '';
  const aboveNameInterchangeHTML = (stop.hasInterchangeBox && interchangeLayout === 'above_name')
    ? renderStopInterchangeBoxHTML(stop, 'above_name')
    : '';

  const aboveStopSubRowHTML = aboveNameInterchangeHTML ? `
    <div style="display:flex; align-items:stretch; width:100%; flex-shrink:0;">
      ${renderTrackPassThroughHTML(stop, metrics)}
      <div style="
        flex:1;
        min-width:0;
        padding:1px 6px 1.5px ${nodeNameGapPx + symbolPrefixGutterPx}px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
      ">
        ${aboveNameInterchangeHTML}
      </div>
    </div>
  ` : '';

  const placeAfterCalloutsInStacked = Boolean((stackedPromoHTML || stackedInterchangeHTML) && !sideBySidePromoHTML && !sideBySideInterchangeHTML && !rightAlignedInterchangeHTML);
  const inlineAfterCalloutsLandmarksHTML = !placeAfterCalloutsInStacked ? afterCalloutsBadgesRawHTML : '';
  const stackedAfterCalloutsLandmarksHTML = placeAfterCalloutsInStacked ? `
    <div style="display:inline-flex; flex-wrap:wrap; gap:2px; align-items:center; margin-top:2px;">
      ${afterCalloutsBadgesRawHTML}
    </div>
  ` : '';

  const hasAnySideCallout = Boolean(sideBySidePromoHTML || sideBySideInterchangeHTML || rightAlignedInterchangeHTML || inlineAfterCalloutsLandmarksHTML);

  // 主站名行與起訖總站色塊 Label
  const formattedZhHTML = formatStopNameWithLineBreaks(stop.zh, trailingBadgesHTML);
  const formattedEnHTML = stop.en ? formatStopNameWithLineBreaks(stop.en, '') : '';

  const coloredPadX = Math.max(5.6, Number(L.coloredStopPadX) || Math.round(6.2 * Math.pow(typographyScale, 1.35) * 10) / 10);
  const coloredPadY = Math.max(1.4, Number(L.coloredStopPadY) || Math.round(1.65 * Math.pow(typographyScale, 2.0) * 10) / 10);
  const coloredRadiusPx = zhFontPx >= 13.0 ? 4.5 : (zhFontPx >= 11.2 ? 3.8 : 3.2);

  let coloredBoxWidthStyle = 'width:fit-content;';
  let coloredBoxPadRightPx = coloredPadX + coloredBoxExtraPx;
  if (customColoredBoxWidth) {
    coloredBoxPadRightPx = coloredPadX;
    if (coloredBoxExtraPx > 0 && customColoredBoxWidth !== '100%') {
      coloredBoxWidthStyle = `width:calc(${customColoredBoxWidth} + ${coloredBoxExtraPx}px);`;
    } else {
      coloredBoxWidthStyle = `width:${customColoredBoxWidth};`;
    }
  }

  const coloredInnerTextWidthStyle = customColoredBoxWidth
    ? 'width:100%;'
    : 'width:max-content; max-width:100%;';

  const zhConstraintStyle = ignoreZh
    ? 'white-space:nowrap; width:max-content; max-width:none; position:relative; z-index:3;'
    : 'white-space:normal; word-break:break-word; width:100%;';

  const enConstraintStyle = ignoreEn
    ? 'white-space:nowrap; width:max-content; max-width:none; position:relative; z-index:3;'
    : 'white-space:normal; word-break:break-word; width:100%;';

  const stopNameMainRowHTML = isColoredStop ? `
    <div style="flex:1 1 0%; min-width:0; width:100%; overflow:visible; display:flex; flex-direction:column; align-items:stretch; justify-content:center; position:relative; padding-left:${symbolPrefixGutterPx}px; z-index:2;">
      ${topLeftSymbolHTML}
      <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4px; width:100%; max-width:100%;">
        <div style="
          background-color:${coloredStopBgColor};
          color:${coloredStopTextColor};
          padding:${coloredPadY}px ${coloredBoxPadRightPx}px ${coloredPadY}px ${coloredPadX}px;
          border-radius:${coloredRadiusPx}px;
          display:inline-flex;
          flex-direction:column;
          justify-content:center;
          box-sizing:border-box;
          flex:0 0 auto;
          min-width:0;
          ${coloredBoxWidthStyle}
          ${anyIgnoreLandmark ? 'max-width:none;' : 'max-width:100%;'}
        ">
          <div class="sheet-text-fix" style="
            font-size:${zhFontPx + 0.7}px;
            font-weight:${coloredZhWeight};
            display:block;
            line-height:1.13;
            ${ignoreZh ? 'white-space:nowrap; width:max-content;' : `white-space:normal; word-break:break-word; ${coloredInnerTextWidthStyle}`}
          ">
            ${formattedZhHTML}
          </div>
          ${formattedEnHTML ? `
            <div class="sheet-text-fix" style="
              font-size:${enFontPx + 0.3}px;
              font-weight:${coloredEnWeight};
              display:block;
              line-height:1.07;
              opacity:0.96;
              ${ignoreEn ? 'white-space:nowrap; width:max-content;' : `white-space:normal; word-break:break-word; ${coloredInnerTextWidthStyle}`}
            ">
              ${formattedEnHTML}
            </div>
          ` : ''}
        </div>
        ${sideBySidePromoHTML}
        ${sideBySideInterchangeHTML}
        ${rightAlignedInterchangeHTML}
        ${inlineAfterCalloutsLandmarksHTML}
      </div>
    </div>
  ` : `
    <div style="flex:1 1 0%; min-width:0; width:100%; overflow:visible; display:flex; flex-direction:column; justify-content:center; position:relative; padding-left:${symbolPrefixGutterPx}px; z-index:2;">
      ${topLeftSymbolHTML}
      <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4.5px; width:100%; overflow:visible;">
        <div style="${hasAnySideCallout ? 'flex:0 1 auto; min-width:0;' : 'flex:1 1 0%; min-width:0;'} overflow:visible; display:flex; flex-direction:column; justify-content:center;">
          <div class="sheet-text-fix" style="
            font-size:${zhFontPx}px;
            font-weight:${stopZhWeight};
            color:${stopNameZhColor};
            display:block;
            line-height:1.12;
            ${zhConstraintStyle}
          ">
            ${formattedZhHTML}
          </div>
          ${formattedEnHTML ? `
            <div class="sheet-text-fix" style="
              font-size:${enFontPx}px;
              font-weight:${stopEnWeight};
              color:${stopNameEnColor};
              display:block;
              line-height:1.06;
              ${enConstraintStyle}
            ">
              ${formattedEnHTML}
            </div>
          ` : ''}
        </div>
        ${sideBySidePromoHTML}
        ${sideBySideInterchangeHTML}
        ${rightAlignedInterchangeHTML}
        ${inlineAfterCalloutsLandmarksHTML}
      </div>
    </div>
  `;

  // 站名下方附屬子行
  const hasStackedCalloutsOrAfter = Boolean(stackedPromoHTML || stackedInterchangeHTML || stackedAfterCalloutsLandmarksHTML);
  const stackedCalloutsRowHTML = hasStackedCalloutsOrAfter ? `
    <div style="display:flex; flex-wrap:wrap; align-items:center; gap:4px; max-width:100%;">
      ${stackedPromoHTML}
      ${stackedInterchangeHTML}
      ${stackedAfterCalloutsLandmarksHTML}
    </div>
  ` : '';

  const hasBelowSubRow = Boolean(stackedCalloutsRowHTML || stopRemarkHTML || belowNameLandmarksHTML);
  const belowStopSubRowHTML = hasBelowSubRow ? `
    <div style="display:flex; align-items:stretch; width:100%; flex-shrink:0;">
      ${renderTrackPassThroughBottomHTML(stop, metrics)}
      <div style="
        flex:1;
        min-width:0;
        padding:0px 6px 1.2px ${nodeNameGapPx + symbolPrefixGutterPx}px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
      ">
        ${stackedCalloutsRowHTML}
        ${stopRemarkHTML}
        ${belowNameLandmarksHTML}
      </div>
    </div>
  ` : '';

  // 終點站箭嘴上方垂直引線長度保護
  const arrowDims = getRouteArrowDimensions(metrics);
  const hasAnyDestArrowHere = Boolean(
    stop.isDest ||
    (appConfig.variants || []).some(v => stop.variantLineState?.[v.id]?.isVariantDest)
  );
  const destLeadExtraPx = Math.max(4.5, Number(L.destArrowLeadPx) || 6.5);
  const destArrowSafeMinHeight = hasAnyDestArrowHere
    ? Math.ceil(metrics.terminalSize + arrowDims.arrowH * 2 + destLeadExtraPx)
    : 0;

  const customSpecialHeight = isSpecialPassStop ? Math.max(16, Number(stop.corridorPipeHeightPx) || 22) : 0;
  const dynamicBaseMinH = Math.max(11.5, Math.round((zhFontPx + enFontPx * 0.72) * 10) / 10);
  const minRowHeight = Math.max(
    customSpecialHeight,
    destArrowSafeMinHeight,
    (stop.isOrigin || stop.isDest ? metrics.terminalSize : metrics.normSize) + 2.0,
    dynamicBaseMinH
  );

  const rowPadY = isSpecialPassStop ? '1.8px' : (zhFontPx <= 9.8 ? '0.9px' : '1.4px');

  return `
    <div data-stop-item="${esc(stop.id)}" onclick="jumpToStopEditor('${stop.id}')" class="preview-clickable" style="
      flex:0 0 auto;
      display:flex;
      flex-direction:column;
      width:100%;
      position:relative;
    ">
      ${districtSubRowHTML}
      ${fareSubRowHTML}
      ${defaultStandaloneOriginRowHTML}
      ${aboveStopSubRowHTML}
      ${aboveNodeOriginRowHTML}
      <div data-stop-main-row="${esc(stop.id)}" style="
        flex:0 0 auto;
        display:flex;
        align-items:stretch;
        width:100%;
        min-height:${minRowHeight}px;
        position:relative;
      ">
        ${renderTrackMarkerCenteredHTML(stop, metrics)}
        <div style="
          flex:1;
          min-width:0;
          position:relative;
          padding:${rowPadY} 6px ${hasBelowSubRow ? '0.4px' : rowPadY} ${nodeNameGapPx}px;
          display:flex;
          flex-wrap:nowrap;
          align-items:center;
          justify-content:space-between;
          gap:4px;
        ">
          ${stopNameMainRowHTML}
          ${rightLandmarksHTML}
        </div>
      </div>
      ${belowStopSubRowHTML}
    </div>
  `;
}

// 處理站名自定義隔行（支援按 Enter 換行、輸入 \n 或 | 分行），並在最後一行尾端附上港鐵標誌
function formatStopNameWithLineBreaks(text, trailingBadgesHTML = '') {
  if (text === null || text === undefined || text === '') {
    return trailingBadgesHTML || '';
  }
  const lines = String(text)
    .replace(/\\n/g, '\n')
    .split(/\r?\n|\|/);

  return lines.map((line, idx) => {
    const isLast = idx === lines.length - 1;
    return `<span style="display:block;">${esc(line)}${isLast && trailingBadgesHTML ? `<span style="display:inline-flex; align-items:center; gap:2.5px; vertical-align:middle; margin-left:3.5px;">${trailingBadgesHTML}</span>` : ''}</span>`;
  }).join('');
}

// 保留空函數以兼容舊有呼叫
function renderStopCorridorRowHTML() {
  return '';
}

// 渲染「時間 SVG + 約 X 分鐘直達」大字宣傳橫幅（支援 timePromoScale 自定義大小比例及班次專屬配色）
function renderTimePromoBadgeHTML(stop, layoutMode = 'side_by_side') {
  if (!stop.hasTimePromo) return '';
  const minsStr = stop.timePromoMins !== undefined ? String(stop.timePromoMins).trim() : '8';
  if (minsStr === '') return '';

  const C = appConfig.colors;
  const effVar = getStopEffectiveVariant(stop) || {};
  const promoBg = stop.timePromoBg || effVar.promoBg || C.promoBannerBg || C.introBannerBg || '#65b741';
  const styleMode = stop.timePromoStyle || 'pointer'; // 'pointer' | 'flat' | 'text_only'
  const isTextOnly = styleMode === 'text_only';
  const hasPointer = styleMode === 'pointer';

  const baseTextColor = effVar.promoTextColor || C.promoBannerText || '#ffffff';
  const fgColor = isTextOnly ? promoBg : baseTextColor;
  const svgColor = isTextOnly ? promoBg : (effVar.fastClockSvgColor || C.fastClockSvgColor || fgColor);

  // 宣傳橫幅自定義大小 (支援百分比 50 ~ 200，預設 100)
  let rawScale = Number(stop.timePromoScale);
  if (!rawScale || isNaN(rawScale)) {
    const legacyNum = parseFloat(stop.timePromoWidth);
    rawScale = (!isNaN(legacyNum) && legacyNum >= 40 && legacyNum <= 250) ? legacyNum : 100;
  }
  const s = Math.min(2.2, Math.max(0.5, rawScale / 100));
  const r = (val) => Math.round(val * s * 10) / 10;

  const prefixZh = stop.timePromoPrefixZh !== undefined ? stop.timePromoPrefixZh : '約';
  const prefixEn = stop.timePromoPrefixEn !== undefined ? stop.timePromoPrefixEn : 'approx';
  const suffixZh = stop.timePromoSuffixZh !== undefined ? stop.timePromoSuffixZh : '分鐘直達';
  const suffixEn = stop.timePromoSuffixEn !== undefined ? stop.timePromoSuffixEn : 'mins direct to';

  const boxInnerHTML = `
    <div style="
      ${isTextOnly
        ? `background-color:transparent; padding:${r(1)}px ${r(2)}px;`
        : `background-color:${promoBg}; padding:${r(3)}px ${r(7.5)}px ${r(3)}px ${r(5.5)}px; border-radius:${r(4)}px;`}
      color:${fgColor};
      max-width:100%;
      display:inline-flex;
      align-items:center;
      gap:${r(4)}px;
      box-sizing:border-box;
    ">
      ${createFastClockSvg(r(19.5), svgColor)}
      ${(prefixZh || prefixEn) ? `
        <div style="display:flex; flex-direction:column; align-items:flex-end; justify-content:center; line-height:1.02;">
          ${prefixZh ? `<span class="sheet-text-fix" style="font-size:${r(8.6)}px; font-weight:800; color:${fgColor}; display:block; white-space:nowrap;">${esc(prefixZh)}</span>` : ''}
          ${prefixEn ? `<span class="sheet-text-fix" style="font-size:${r(6.8)}px; font-weight:700; color:${fgColor}; display:block; white-space:nowrap;">${esc(prefixEn)}</span>` : ''}
        </div>
      ` : ''}
      <div class="sheet-text-fix" style="
        font-size:${r(24.5)}px;
        font-weight:900;
        color:${fgColor};
        line-height:0.88;
        letter-spacing:-0.03em;
        padding:0 ${r(1.5)}px;
        display:flex;
        align-items:center;
      ">${esc(minsStr)}</div>
      ${(suffixZh || suffixEn) ? `
        <div style="display:flex; flex-direction:column; align-items:flex-start; justify-content:center; line-height:1.04;">
          ${suffixZh ? `<span class="sheet-text-fix" style="font-size:${r(9.6)}px; font-weight:900; color:${fgColor}; display:block; white-space:nowrap;">${esc(suffixZh)}</span>` : ''}
          ${suffixEn ? `<span class="sheet-text-fix" style="font-size:${r(7.2)}px; font-weight:700; color:${fgColor}; display:block; white-space:nowrap;">${esc(suffixEn)}</span>` : ''}
        </div>
      ` : ''}
    </div>
  `;

  if (layoutMode === 'stacked') {
    return `
      <div style="display:inline-flex; flex-direction:column; align-items:flex-start; margin-top:${r(2.5)}px; flex-shrink:0; max-width:100%;">
        ${hasPointer ? `
          <svg width="${r(10)}" height="${r(6)}" viewBox="0 0 10 6" style="margin-left:${r(16)}px; margin-bottom:-0.6px; display:block; flex-shrink:0;">
            <polygon points="5,0 0.5,6 9.5,6" fill="${promoBg}" />
          </svg>
        ` : ''}
        ${boxInnerHTML}
      </div>
    `;
  }

  return `
    <div style="display:inline-flex; align-items:center; flex-shrink:0; max-width:100%;">
      ${hasPointer ? `
        <svg width="${r(6)}" height="${r(10.5)}" viewBox="0 0 6 10.5" style="margin-right:-0.6px; display:block; flex-shrink:0;">
          <polygon points="0,5.25 6,0.5 6,10" fill="${promoBg}" />
        </svg>
      ` : ''}
      ${boxInnerHTML}
    </div>
  `;
}

// 更新分站的轉乘框頂層屬性
function updateStopInterchangeField(sIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopInterchangeDefaults(stop);
  stop[field] = val;

  if (field === 'interchangeScale') {
    const scaleLabel = document.getElementById(`interchange-scale-label-${sIdx}`);
    if (scaleLabel) scaleLabel.textContent = `${val}%`;
  }
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

// 新增一條轉乘路線列（預設與時間表路線號碼框同款：保留框內細白線 innerWhiteLine: true）
function addStopInterchangeRoute(sIdx) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopInterchangeDefaults(stop);
  const C = appConfig.colors || {};
  const vt0 = appConfig.rightData?.timetable?.variantTables?.[0] || {};
  const defaultRouteColor = vt0.routeBoxColor || C.routeBoxBg || C.themePrimary || '#0d8556';
  const defaultRouteText = vt0.routeBoxTextColor || C.routeBoxText || '#ffffff';

  stop.interchangeRoutes.push({
    nodeStyle: 'none',
    nodeColor: defaultRouteColor,
    stationZh: '',
    stationEn: '',
    routes: [
      {
        route: 'A29',
        bgColor: defaultRouteColor,
        textColor: defaultRouteText,
        innerWhiteLine: vt0.routeBoxInnerWhiteLine !== false,
        showOwlUnderN: false,
        owlPosition: 'auto',
        routeBoxTemplate: vt0.routeBoxTemplate || '',
        fontSizePx: 0,
        fontScaleX: Number(vt0.routeBoxFontScaleX) || 100,
        tightnessEm: vt0.routeBoxTightnessEm !== undefined ? Number(vt0.routeBoxTightnessEm) : -0.025,
        tokenGapPx: vt0.routeBoxTokenGapPx !== undefined ? Number(vt0.routeBoxTokenGapPx) : 2,
        padX: vt0.routeBoxPadX !== undefined ? Number(vt0.routeBoxPadX) : 5.5,
        padY: vt0.routeBoxPadY !== undefined ? Number(vt0.routeBoxPadY) : 2,
        outerPad: vt0.routeBoxOuterPad !== undefined ? Number(vt0.routeBoxOuterPad) : 2
      }
    ],
    destZh: '往機場',
    destEn: 'to Airport',
    discountText: ''
  });
  renderA4Sheet();
  renderEditorSidebar();
}

// 在單一轉乘路線列中新增一個並排路線號碼框（預設保留框內細白線與上一路線框設定）
function addInterchangeSubRouteBadge(sIdx, rIdx) {
  const stop = appConfig.stops[sIdx];
  if (!stop || !stop.interchangeRoutes || !stop.interchangeRoutes[rIdx]) return;
  const item = stop.interchangeRoutes[rIdx];
  const C = appConfig.colors || {};
  const vt0 = appConfig.rightData?.timetable?.variantTables?.[0] || {};
  const defaultRouteColor = vt0.routeBoxColor || C.routeBoxBg || C.themePrimary || '#0d8556';
  const defaultRouteText = vt0.routeBoxTextColor || C.routeBoxText || '#ffffff';
  const list = ensureInterchangeItemRoutesList(item, defaultRouteColor);
  const lastBadge = list[list.length - 1] || {};

  list.push({
    route: 'B13',
    bgColor: lastBadge.bgColor || defaultRouteColor,
    textColor: lastBadge.textColor || defaultRouteText,
    innerWhiteLine: lastBadge.innerWhiteLine !== undefined ? Boolean(lastBadge.innerWhiteLine) : true,
    showOwlUnderN: Boolean(lastBadge.showOwlUnderN),
    owlPosition: lastBadge.owlPosition || 'auto',
    routeBoxTemplate: lastBadge.routeBoxTemplate || '',
    fontSizePx: Number(lastBadge.fontSizePx) || 0,
    fontScaleX: Number(lastBadge.fontScaleX) || 100,
    tightnessEm: lastBadge.tightnessEm !== undefined ? Number(lastBadge.tightnessEm) : -0.025,
    tokenGapPx: lastBadge.tokenGapPx !== undefined ? Number(lastBadge.tokenGapPx) : 2,
    padX: lastBadge.padX !== undefined ? Number(lastBadge.padX) : 5.5,
    padY: lastBadge.padY !== undefined ? Number(lastBadge.padY) : 2,
    outerPad: lastBadge.outerPad !== undefined ? Number(lastBadge.outerPad) : 2
  });
  renderA4Sheet();
  renderEditorSidebar();
}

// 兼容別名呼叫
function addInterchangeSubRoute(sIdx, rIdx) {
  addInterchangeSubRouteBadge(sIdx, rIdx);
}

// 刪除單一轉乘路線列中的某個路線號碼框
function removeInterchangeSubRouteBadge(sIdx, rIdx, srIdx) {
  const stop = appConfig.stops[sIdx];
  if (!stop || !stop.interchangeRoutes || !stop.interchangeRoutes[rIdx]) return;
  const list = ensureInterchangeItemRoutesList(stop.interchangeRoutes[rIdx]);
  if (list.length <= 1) {
    showToast('每行至少需保留 1 個轉乘路線號碼框', 'info');
    return;
  }
  list.splice(srIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// 兼容別名呼叫
function removeInterchangeSubRoute(sIdx, rIdx, srIdx) {
  removeInterchangeSubRouteBadge(sIdx, rIdx, srIdx);
}

// 一鍵套用「此班次時間表路線框樣式模板 (ROUTE_BOX_TEMPLATES)」至指定的轉乘路線號碼框（保留框內細白線）
function applyInterchangeSubRouteTemplate(sIdx, rIdx, srIdx, templateKey) {
  if (isTempScratchMode) {
    showToast('臨時製作路線紙模式禁止使用「範本主題」！請先還原至正式模式', 'rose');
    return;
  }
  const tpl = ROUTE_BOX_TEMPLATES.find(t => t.key === templateKey);
  if (!tpl) return;

  const stop = appConfig.stops[sIdx];
  if (!stop || !stop.interchangeRoutes || !stop.interchangeRoutes[rIdx]) return;
  const list = ensureInterchangeItemRoutesList(stop.interchangeRoutes[rIdx]);
  const sr = list[srIdx];
  if (!sr) return;

  sr.routeBoxTemplate = tpl.key;
  sr.bgColor = tpl.bgColor;
  sr.textColor = tpl.textColor;
  // 保留框內細白線（若原本開啟或預設則維持開啟）
  sr.innerWhiteLine = sr.innerWhiteLine !== undefined ? Boolean(sr.innerWhiteLine) : true;
  sr.showOwlUnderN = Boolean(tpl.showOwlUnderN);
  if (!sr.owlPosition) sr.owlPosition = 'auto';

  const curNo = String(sr.route || '').trim();
  if (tpl.showOwlUnderN && curNo && !/[Nn]/.test(curNo)) {
    sr.route = sr.owlPosition === 'suffix' ? `${curNo}N` : `N${curNo}`;
  }

  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已套用「${tpl.label}」至轉乘路線框 #${srIdx + 1}（保留框內細白線）`);
}

// 更新單一轉乘路線號碼框（支援全部時間表同款參數，以及從指定班次時間表一鍵同步）
function updateInterchangeSubRouteBadge(sIdx, rIdx, srIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop || !stop.interchangeRoutes || !stop.interchangeRoutes[rIdx]) return;
  const list = ensureInterchangeItemRoutesList(stop.interchangeRoutes[rIdx]);
  const sr = list[srIdx];
  if (!sr) return;

  if (field === '__apply_template__') {
    applyInterchangeSubRouteTemplate(sIdx, rIdx, srIdx, val);
    return;
  }

  if (field === '__sync_from_variant__') {
    if (val === '') return;
    ensureVariantTimetablesSynced();
    const vtIdx = Number(val);
    const vt = appConfig.rightData?.timetable?.variantTables?.[vtIdx];
    const v = appConfig.variants?.[vtIdx];
    if (vt || v) {
      sr.route = String(vt?.routeNumber || v?.routeNumber || sr.route || 'B13').trim();
      sr.bgColor = vt?.routeBoxColor || v?.routeBoxColor || v?.color || sr.bgColor;
      sr.textColor = vt?.routeBoxTextColor || v?.routeBoxTextColor || '#ffffff';
      sr.innerWhiteLine = vt?.routeBoxInnerWhiteLine !== undefined ? Boolean(vt.routeBoxInnerWhiteLine) : true;
      sr.routeBoxTemplate = vt?.routeBoxTemplate || v?.routeBoxTemplate || '';
      sr.fontScaleX = Number(vt?.routeBoxFontScaleX) || 100;
      sr.tightnessEm = vt?.routeBoxTightnessEm !== undefined ? Number(vt.routeBoxTightnessEm) : -0.025;
      sr.tokenGapPx = vt?.routeBoxTokenGapPx !== undefined ? Number(vt.routeBoxTokenGapPx) : 2;
      sr.padX = vt?.routeBoxPadX !== undefined ? Number(vt.routeBoxPadX) : 5.5;
      sr.padY = vt?.routeBoxPadY !== undefined ? Number(vt.routeBoxPadY) : 2;
      sr.outerPad = vt?.routeBoxOuterPad !== undefined ? Number(vt.routeBoxOuterPad) : 2;
      showToast(`已從班次 #${vtIdx + 1} 時間表路線框同步樣式設定`);
    }
    renderA4Sheet();
    renderEditorSidebar();
    return;
  }

  if (field === 'owlPosition') {
    const curNo = String(sr.route || '').trim();
    const core = curNo.replace(/^[Nn]/, '').replace(/[Nn]$/, '').trim();
    if (core) {
      if (val === 'suffix') sr.route = `${core}N`;
      else if (val === 'prefix') sr.route = `N${core}`;
    }
    refreshSidebar = true;
  }

  if (['innerWhiteLine', 'showOwlUnderN'].includes(field)) {
    val = Boolean(val);
    refreshSidebar = true;
  } else if (['fontSizePx', 'fontScaleX', 'tightnessEm', 'tokenGapPx', 'padX', 'padY', 'outerPad'].includes(field)) {
    val = Number(val);
  }

  sr[field] = val;
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

// 兼容別名呼叫
function updateInterchangeSubRoute(sIdx, rIdx, srIdx, field, val, refreshSidebar = false) {
  updateInterchangeSubRouteBadge(sIdx, rIdx, srIdx, field, val, refreshSidebar);
}

// 刪除一條轉乘路線列
function removeStopInterchangeRoute(sIdx, rIdx) {
  const stop = appConfig.stops[sIdx];
  if (!stop || !Array.isArray(stop.interchangeRoutes)) return;
  stop.interchangeRoutes.splice(rIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// 更新單一轉乘路線列的屬性 (站點圖標、轉乘站名、目的地、優惠文字等)
function updateStopInterchangeRouteItem(sIdx, rIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop || !stop.interchangeRoutes || !stop.interchangeRoutes[rIdx]) return;
  stop.interchangeRoutes[rIdx][field] = val;
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

// 1. 更新分站「時間 SVG + 約 X 分鐘直達」大字宣傳橫幅欄位
function updateStopTimePromoField(sIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);

  if (field === 'hasTimePromo') {
    stop.hasTimePromo = Boolean(val);
    refreshSidebar = true;
  } else if (field === 'timePromoScale') {
    stop.timePromoScale = Math.max(40, Math.min(220, Number(val) || 100));
    const lbl = document.getElementById(`promo-scale-label-${sIdx}`);
    if (lbl) lbl.textContent = `${stop.timePromoScale}%`;
  } else {
    stop[field] = val;
  }

  renderA4Sheet();
  if (refreshSidebar) {
    renderEditorSidebar();
  }
}

// 2. 渲染「顯示『時間 SVG + 約 X 分鐘直達』大字宣傳橫幅」完整設定面板 HTML
function renderStopTimePromoEditorHTML(stop, sIdx) {
  ensureStopLandmarkAndIgnoreProps(stop);
  const C = appConfig.colors || {};
  const enabled = Boolean(stop.hasTimePromo);
  const scaleVal = Number(stop.timePromoScale) || 100;
  const layoutMode = stop.timePromoLayout || 'side_by_side';
  const styleMode = stop.timePromoStyle || 'pointer';
  const promoBg = stop.timePromoBg || C.promoBannerBg || C.introBannerBg || '#65b741';

  const quickPromoSwatches = [
    { label: '城巴綠', bg: '#65b741' },
    { label: '深綠', bg: '#0d8556' },
    { label: '市區藍', bg: '#1e2188' },
    { label: '天藍', bg: '#0284c7' },
    { label: '紅隧紅', bg: '#e02525' },
    { label: '機場桃紅', bg: '#c2193f' },
    { label: '新巴橙', bg: '#fe9b1a' },
    { label: '新巴紫', bg: '#7228af' }
  ];

  return `
    <div class="bg-slate-900/90 border ${enabled ? 'border-lime-500/50' : 'border-slate-700/80'} rounded-xl p-3 space-y-2.5">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            ${enabled ? 'checked' : ''}
            onchange="updateStopTimePromoField(${sIdx}, 'hasTimePromo', this.checked, true)"
            class="rounded accent-lime-500 w-3.5 h-3.5"
          />
          <span class="text-[11px] font-bold ${enabled ? 'text-lime-300' : 'text-slate-200'} flex items-center gap-1.5">
            <i class="fa-solid fa-stopwatch text-lime-400"></i>
            <span>顯示「時間 SVG + 約 X 分鐘直達」大字宣傳橫幅</span>
          </span>
        </label>
        ${enabled ? `<span class="text-[9px] text-lime-300/80 font-mono">已啟用</span>` : ''}
      </div>

      ${enabled ? `
        <div class="space-y-2.5 pt-2 border-t border-slate-800 text-[10px]">
          <div class="grid grid-cols-12 gap-2 items-end">
            <div class="col-span-3">
              <label class="block text-[9px] text-lime-300 font-bold mb-0.5">直達分鐘數</label>
              <input
                type="text"
                value="${esc(stop.timePromoMins ?? '8')}"
                placeholder="8"
                oninput="updateStopTimePromoField(${sIdx}, 'timePromoMins', this.value)"
                class="w-full bg-slate-950 border border-lime-500/50 rounded px-2 py-1 text-center font-black text-lime-300 text-xs"
              />
            </div>
            <div class="col-span-4">
              <label class="block text-[9px] text-slate-400 mb-0.5">前綴 (中 / 英)</label>
              <div class="flex gap-1">
                <input type="text" value="${esc(stop.timePromoPrefixZh ?? '約')}" placeholder="約" oninput="updateStopTimePromoField(${sIdx}, 'timePromoPrefixZh', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-center text-slate-100" />
                <input type="text" value="${esc(stop.timePromoPrefixEn ?? 'approx')}" placeholder="approx" oninput="updateStopTimePromoField(${sIdx}, 'timePromoPrefixEn', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-center text-slate-100" />
              </div>
            </div>
            <div class="col-span-5">
              <label class="block text-[9px] text-slate-400 mb-0.5">後綴 (中 / 英)</label>
              <div class="flex gap-1">
                <input type="text" value="${esc(stop.timePromoSuffixZh ?? '分鐘直達')}" placeholder="分鐘直達" oninput="updateStopTimePromoField(${sIdx}, 'timePromoSuffixZh', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-slate-100" />
                <input type="text" value="${esc(stop.timePromoSuffixEn ?? 'mins direct to')}" placeholder="mins direct to" oninput="updateStopTimePromoField(${sIdx}, 'timePromoSuffixEn', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-slate-100" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">擺放位置</label>
              <select onchange="updateStopTimePromoField(${sIdx}, 'timePromoLayout', this.value, true)" class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[10px] text-slate-200">
                <option value="side_by_side" ${layoutMode === 'side_by_side' ? 'selected' : ''}>站名右側同行並排</option>
                <option value="stacked" ${layoutMode === 'stacked' ? 'selected' : ''}>站名正下方獨立一行</option>
              </select>
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">宣傳框外觀樣式</label>
              <select onchange="updateStopTimePromoField(${sIdx}, 'timePromoStyle', this.value, true)" class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[10px] text-slate-200">
                <option value="pointer" ${styleMode === 'pointer' ? 'selected' : ''}>◀ 帶指示尖角橫幅 (預設)</option>
                <option value="flat" ${styleMode === 'flat' ? 'selected' : ''}>■ 純圓角矩形橫幅</option>
                <option value="text_only" ${styleMode === 'text_only' ? 'selected' : ''}>T 純彩色文字與秒錶 (無底色)</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-2 items-center bg-slate-950/80 p-2 rounded-lg border border-slate-800">
            <div class="col-span-7 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[9px] text-slate-300 font-bold">橫幅整體大小比例 (<span id="promo-scale-label-${sIdx}" class="text-lime-300 font-mono">${scaleVal}%</span>)</span>
              </div>
              <input
                type="range"
                min="55"
                max="165"
                step="5"
                value="${scaleVal}"
                oninput="updateStopTimePromoField(${sIdx}, 'timePromoScale', this.value)"
                class="w-full accent-lime-500"
              />
            </div>
            <div class="col-span-5 flex flex-col gap-1">
              <div class="flex items-center justify-between gap-1">
                <span class="text-[9px] text-slate-400">橫幅主色</span>
                <input type="color" value="${esc(promoBg)}" oninput="updateStopTimePromoField(${sIdx}, 'timePromoBg', this.value, true)" class="w-6 h-5 rounded bg-transparent border-0 cursor-pointer" />
              </div>
              <div class="flex flex-wrap gap-1">
                ${quickPromoSwatches.map(sw => `
                  <button
                    type="button"
                    onclick="updateStopTimePromoField(${sIdx}, 'timePromoBg', '${sw.bg}', true)"
                    title="${esc(sw.label)}"
                    class="w-4 h-4 rounded-full border ${promoBg.toLowerCase() === sw.bg.toLowerCase() ? 'ring-2 ring-white border-white' : 'border-slate-600'}"
                    style="background:${sw.bg};"
                  ></button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// 3. 渲染分站「『轉乘』圓角矩形框」完整設定面板 HTML（補齊完整無截斷代碼）
function renderStopInterchangeEditorHTML(stop, sIdx) {
  ensureStopInterchangeDefaults(stop);
  const C = appConfig.colors || {};
  const variants = appConfig.variants || [];
  const enabled = Boolean(stop.hasInterchangeBox);
  const scaleVal = Number(stop.interchangeScale) || 100;
  const layoutMode = stop.interchangeLayout || 'side_by_side';
  const headerPos = stop.interchangeHeaderPos || 'top';
  const pointerStyle = stop.interchangePointerStyle || 'pointer';
  const pointerDir = stop.interchangePointerDir || 'auto';
  const pointerAlign = stop.interchangePointerAlign || 'center';
  const boxBg = stop.interchangeBoxColor || C.interchangeDefaultBg || '#0d8556';
  const boxText = stop.interchangeBoxTextColor || '#ffffff';
  const bodyBg = stop.interchangeBodyBgColor || '#ffffff';

  const quickColorSwatches = [
    { label: '主題色', bg: C.themePrimary || '#0d8556', fg: '#ffffff' },
    { label: '城巴綠', bg: '#65b741', fg: '#ffffff' },
    { label: '深綠', bg: '#0d8556', fg: '#ffffff' },
    { label: '市區藍', bg: '#1e2188', fg: '#ffffff' },
    { label: '天藍', bg: '#0284c7', fg: '#ffffff' },
    { label: '紅隧紅', bg: '#e02525', fg: '#ffffff' },
    { label: '機場桃紅', bg: '#c2193f', fg: '#ffffff' },
    { label: '新巴橙', bg: '#fe9b1a', fg: '#ffffff' },
    { label: '新巴紫', bg: '#7228af', fg: '#ffffff' },
    { label: '黃底黑字', bg: '#f1d840', fg: '#111827' }
  ];

  const swatchesHTML = quickColorSwatches.map(sw => `
    <button
      type="button"
      onclick="updateStopInterchangeField(${sIdx}, 'interchangeBoxColor', '${sw.bg}'); updateStopInterchangeField(${sIdx}, 'interchangeBoxTextColor', '${sw.fg}', true);"
      class="px-2 py-0.5 rounded border text-[9px] font-bold transition ${boxBg.toLowerCase() === sw.bg.toLowerCase() ? 'ring-2 ring-emerald-400 border-white' : 'border-slate-700 hover:border-slate-500'}"
      style="background-color:${sw.bg}; color:${sw.fg};"
    >${esc(sw.label)}</button>
  `).join('');

  const routesEditorHTML = (stop.interchangeRoutes || []).map((item, rIdx) => {
    const subRoutes = ensureInterchangeItemRoutesList(item, C.routeBoxBg || '#0d8556');
    const curNodeStyle = item.nodeStyle || 'none';
    const curNodeColor = item.nodeColor || C.routeLineColor || '#0d8556';

    const subRoutesHTML = subRoutes.map((sr, srIdx) => {
      const srBg = sr.bgColor || '#0d8556';
      const srText = sr.textColor || '#ffffff';
      const srInnerLine = sr.innerWhiteLine !== undefined ? Boolean(sr.innerWhiteLine) : true;
      const srShowOwl = Boolean(sr.showOwlUnderN);
      const srOwlPos = sr.owlPosition || 'auto';
      const srFontSize = Number(sr.fontSizePx) || 0;
      const srFontScaleX = Number(sr.fontScaleX) || 100;
      const srTightness = sr.tightnessEm !== undefined ? Number(sr.tightnessEm) : -0.025;
      const srPadX = sr.padX !== undefined ? Number(sr.padX) : 5.5;
      const srPadY = sr.padY !== undefined ? Number(sr.padY) : 2;
      const srOuterPad = sr.outerPad !== undefined ? Number(sr.outerPad) : 2;

      const templateGalleryButtonsHTML = ROUTE_BOX_TEMPLATES.map(tpl => {
        const isSelected = sr.routeBoxTemplate === tpl.key;
        const previewRoute = String(sr.route || tpl.sampleRoute || 'B13').trim() || tpl.sampleRoute;
        const previewFontSize = previewRoute.length >= 4 ? 11.5 : 13;

        return `
          <button
            type="button"
            onclick="applyInterchangeSubRouteTemplate(${sIdx}, ${rIdx}, ${srIdx}, '${tpl.key}')"
            title="${esc(tpl.label)}（${esc(tpl.desc)}・保留框內細白線）"
            class="p-1 rounded-lg border text-left transition flex items-center gap-1.5 ${
              isSelected
                ? 'bg-emerald-950/70 border-emerald-400 ring-1 ring-emerald-400/60 shadow'
                : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 hover:border-slate-500'
            }"
          >
            <div style="
              background-color:${tpl.bgColor};
              color:${tpl.textColor};
              padding:1.8px;
              border-radius:3px;
              min-width:42px;
              height:24px;
              display:flex;
              align-items:center;
              justify-content:center;
              flex-shrink:0;
            ">
              <div style="
                ${srInnerLine ? 'border:1px solid rgba(255,255,255,0.9);' : 'border:none;'}
                border-radius:1.8px;
                width:100%;
                height:100%;
                padding:1px 3px;
                display:flex;
                align-items:center;
                justify-content:center;
                box-sizing:border-box;
              ">
                ${renderRouteTokenWithOwlHTML(previewRoute, previewFontSize, tpl.textColor, tpl.bgColor, Boolean(tpl.showOwlUnderN))}
              </div>
            </div>
            <div class="min-w-0 flex-1">
              <div class="font-bold text-[9px] text-slate-100 truncate">${esc(tpl.label)}</div>
              <div class="text-[8px] text-slate-400 truncate">${esc(tpl.desc)}</div>
            </div>
          </button>
        `;
      }).join('');

      return `
        <div class="bg-slate-950/95 border border-emerald-500/35 rounded-lg p-2.5 space-y-2">
          <div class="flex items-center justify-between gap-1.5 flex-wrap border-b border-slate-800/90 pb-1.5">
            <div class="flex items-center gap-1.5">
              <span class="px-1.5 py-0.5 rounded bg-emerald-600/30 text-emerald-200 font-bold text-[9.5px]">路線框 #${srIdx + 1}</span>
              <input
                type="text"
                value="${esc(sr.route || '')}"
                placeholder="如 A29"
                oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'route', this.value)"
                class="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-xs font-black text-white text-center"
              />
            </div>

            <div class="flex items-center gap-1">
              <select
                onchange="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, '__sync_from_variant__', this.value, true)"
                class="bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-[9px] text-sky-300"
                title="一鍵從時間表班次路線框同步樣式"
              >
                <option value="">⇄ 同步班次路線框...</option>
                ${variants.map((v, vIdx) => `<option value="${vIdx}">同步班次 #${vIdx + 1} (${esc(v.name)})</option>`).join('')}
              </select>
              ${subRoutes.length > 1 ? `
                <button type="button" onclick="removeInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx})" class="w-5 h-5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center justify-center text-[9px] transition" title="刪除此並排路線框">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              ` : ''}
            </div>
          </div>

          <!-- 10 款路線號碼框專用樣式模板 -->
          <div class="space-y-1">
            <div class="text-[8.5px] text-slate-400">一鍵套用路線框樣式模板（預設保留框內細白線）：</div>
            <div class="grid grid-cols-2 gap-1 max-h-32 overflow-y-auto pr-0.5">
              ${templateGalleryButtonsHTML}
            </div>
          </div>

          <!-- 顏色、細白線與貓頭鷹開關 -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/80 text-[9.5px]">
            <div class="flex items-center gap-2">
              <label class="flex items-center gap-1 text-slate-300">
                <span>底色</span>
                <input type="color" value="${esc(srBg)}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'bgColor', this.value)" class="w-5 h-4 rounded bg-transparent border-0 cursor-pointer" />
              </label>
              <label class="flex items-center gap-1 text-slate-300">
                <span>字色</span>
                <input type="color" value="${esc(srText)}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'textColor', this.value)" class="w-5 h-4 rounded bg-transparent border-0 cursor-pointer" />
              </label>
            </div>

            <div class="flex items-center gap-2.5">
              <label class="flex items-center gap-1 cursor-pointer text-slate-200">
                <input type="checkbox" ${srInnerLine ? 'checked' : ''} onchange="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'innerWhiteLine', this.checked, true)" class="rounded accent-emerald-500" />
                <span>框內細白線</span>
              </label>
              <label class="flex items-center gap-1 cursor-pointer text-amber-300">
                <input type="checkbox" ${srShowOwl ? 'checked' : ''} onchange="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'showOwlUnderN', this.checked, true)" class="rounded accent-amber-500" />
                <span>N下貓頭鷹</span>
              </label>
              ${srShowOwl ? `
                <select onchange="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'owlPosition', this.value, true)" class="bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-[9px] text-amber-200">
                  <option value="auto" ${srOwlPos === 'auto' ? 'selected' : ''}>自動位置</option>
                  <option value="prefix" ${srOwlPos === 'prefix' ? 'selected' : ''}>前置 (N...)</option>
                  <option value="suffix" ${srOwlPos === 'suffix' ? 'selected' : ''}>後置 (...N)</option>
                </select>
              ` : ''}
            </div>
          </div>

          <!-- 路線框尺寸微調 -->
          <div class="grid grid-cols-6 gap-1 pt-1 text-[8.5px]">
            <div>
              <label class="block text-slate-400">字號(0自動)</label>
              <input type="number" min="0" max="30" step="0.5" value="${srFontSize}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'fontSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono" />
            </div>
            <div>
              <label class="block text-slate-400">窄體(%)</label>
              <input type="number" min="50" max="130" step="1" value="${srFontScaleX}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'fontScaleX', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono" />
            </div>
            <div>
              <label class="block text-slate-400">字距(em)</label>
              <input type="number" min="-0.15" max="0.2" step="0.005" value="${srTightness}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'tightnessEm', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono" />
            </div>
            <div>
              <label class="block text-slate-400">左右內距</label>
              <input type="number" min="0" max="20" step="0.5" value="${srPadX}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'padX', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono" />
            </div>
            <div>
              <label class="block text-slate-400">上下內距</label>
              <input type="number" min="0" max="16" step="0.5" value="${srPadY}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'padY', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono" />
            </div>
            <div>
              <label class="block text-slate-400">外框邊距</label>
              <input type="number" min="0" max="10" step="0.5" value="${srOuterPad}" oninput="updateInterchangeSubRouteBadge(${sIdx}, ${rIdx}, ${srIdx}, 'outerPad', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-100 font-mono" />
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="bg-slate-900/95 border border-slate-700 rounded-xl p-2.5 space-y-2">
        <div class="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
          <span class="text-[10px] font-bold text-emerald-300">轉乘項目列 #${rIdx + 1}</span>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="addInterchangeSubRouteBadge(${sIdx}, ${rIdx})" class="px-2 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[9px] font-bold transition">
              + 並排路線框
            </button>
            <button type="button" onclick="removeStopInterchangeRoute(${sIdx}, ${rIdx})" class="px-1.5 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[9px] transition" title="刪除此轉乘列">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        <!-- 前置圖標與轉乘站名 / 目的地 / 優惠文字 -->
        <div class="grid grid-cols-12 gap-1.5 items-end text-[9.5px]">
          <div class="col-span-5">
            <label class="block text-[8.5px] text-slate-400 mb-0.5">前置站點/標誌圖標</label>
            <div class="flex items-center gap-1">
              <select onchange="updateStopInterchangeRouteItem(${sIdx}, ${rIdx}, 'nodeStyle', this.value, true)" class="flex-1 bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[9px] text-slate-200">
                <option value="none" ${curNodeStyle === 'none' ? 'selected' : ''}>無圖標</option>
                <option value="normal" ${curNodeStyle === 'normal' ? 'selected' : ''}>○ 空心站圈</option>
                <option value="terminal" ${curNodeStyle === 'terminal' ? 'selected' : ''}>◎ 粗邊總站圈</option>
                <option value="solid_dot" ${curNodeStyle === 'solid_dot' || curNodeStyle === 'solid' ? 'selected' : ''}>● 實心圓點</option>
                <option value="partial" ${curNodeStyle === 'partial' ? 'selected' : ''}>◌ 雙環虛線圈</option>
                <option value="corridor" ${curNodeStyle === 'corridor' ? 'selected' : ''}>🛣️ 走廊標誌</option>
                <option value="tunnel" ${curNodeStyle === 'tunnel' ? 'selected' : ''}>🚇 隧道標誌</option>
                <option value="mtr" ${curNodeStyle === 'mtr' ? 'selected' : ''}>Ж 港鐵 MTR</option>
              </select>
              ${curNodeStyle !== 'none' && curNodeStyle !== 'mtr' ? `
                <input type="color" value="${esc(curNodeColor)}" oninput="updateStopInterchangeRouteItem(${sIdx}, ${rIdx}, 'nodeColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer shrink-0" title="圖標顏色" />
              ` : ''}
            </div>
          </div>

          <div class="col-span-7">
            <label class="block text-[8.5px] text-slate-400 mb-0.5">右側優惠標籤文字 (可留空)</label>
            <input type="text" value="${esc(item.discountText || '')}" placeholder="如：免費 Free / 次程減 $5.0" oninput="updateStopInterchangeRouteItem(${sIdx}, ${rIdx}, 'discountText', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[9.5px] text-amber-200" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-1.5 text-[9.5px]">
          <div>
            <label class="block text-[8.5px] text-slate-400 mb-0.5">前置文字 (中 / 英，可留空)</label>
            <div class="flex gap-1">
              <input type="text" value="${esc(item.stationZh || '')}" placeholder="中文" oninput="updateStopInterchangeRouteItem(${sIdx}, ${rIdx}, 'stationZh', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-slate-100" />
              <input type="text" value="${esc(item.stationEn || '')}" placeholder="EN" oninput="updateStopInterchangeRouteItem(${sIdx}, ${rIdx}, 'stationEn', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-slate-100" />
            </div>
          </div>
          <div>
            <label class="block text-[8.5px] text-slate-400 mb-0.5">路線後目的地 (中 / 英)</label>
            <div class="flex gap-1">
              <input type="text" value="${esc(item.destZh || '')}" placeholder="如：往機場" oninput="updateStopInterchangeRouteItem(${sIdx}, ${rIdx}, 'destZh', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-slate-100" />
              <input type="text" value="${esc(item.destEn || '')}" placeholder="to Airport" oninput="updateStopInterchangeRouteItem(${sIdx}, ${rIdx}, 'destEn', this.value)" class="w-1/2 bg-slate-950 border border-slate-700 rounded px-1.5 py-0.5 text-slate-100" />
            </div>
          </div>
        </div>

        <div class="space-y-1.5">
          ${subRoutesHTML}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="bg-slate-900/90 border ${enabled ? 'border-teal-500/50' : 'border-slate-700/80'} rounded-xl p-3 space-y-2.5">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            ${enabled ? 'checked' : ''}
            onchange="updateStopInterchangeField(${sIdx}, 'hasInterchangeBox', this.checked, true)"
            class="rounded accent-teal-500 w-3.5 h-3.5"
          />
          <span class="text-[11px] font-bold ${enabled ? 'text-teal-300' : 'text-slate-200'} flex items-center gap-1.5">
            <i class="fa-solid fa-right-left text-teal-400"></i>
            <span>「轉乘」圓角矩形框 (${(stop.interchangeRoutes || []).length} 列)</span>
          </span>
        </label>
        ${enabled ? `
          <button type="button" onclick="addStopInterchangeRoute(${sIdx})" class="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-[10px] transition shadow-sm">
            + 新增轉乘路線列
          </button>
        ` : ''}
      </div>

      ${enabled ? `
        <div class="space-y-2.5 pt-2 border-t border-slate-800 text-[10px]">
          <!-- 標題與位置設定 -->
          <div class="grid grid-cols-12 gap-2 items-end">
            <div class="col-span-4">
              <label class="block text-[9px] text-slate-400 mb-0.5">標題中文 (可用 | 換行)</label>
              <input type="text" value="${esc(stop.interchangeTitleZh ?? '轉乘')}" oninput="updateStopInterchangeField(${sIdx}, 'interchangeTitleZh', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-slate-100 font-bold" />
            </div>
            <div class="col-span-4">
              <label class="block text-[9px] text-slate-400 mb-0.5">標題英文 (可用 | 換行)</label>
              <input type="text" value="${esc(stop.interchangeTitleEn ?? 'Interchange')}" oninput="updateStopInterchangeField(${sIdx}, 'interchangeTitleEn', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-slate-100" />
            </div>
            <div class="col-span-4">
              <label class="block text-[9px] text-slate-400 mb-0.5">標題欄位置</label>
              <select onchange="updateStopInterchangeField(${sIdx}, 'interchangeHeaderPos', this.value, true)" class="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-slate-200">
                <option value="top" ${headerPos === 'top' ? 'selected' : ''}>頂部橫欄 (Top)</option>
                <option value="left" ${headerPos === 'left' ? 'selected' : ''}>左側直欄 (Left)</option>
                <option value="right" ${headerPos === 'right' ? 'selected' : ''}>右側直欄 (Right)</option>
                <option value="bottom" ${headerPos === 'bottom' ? 'selected' : ''}>底部橫欄 (Bottom)</option>
                <option value="none" ${headerPos === 'none' ? 'selected' : ''}>隱藏標題欄</option>
              </select>
            </div>
          </div>

          <!-- 擺放位置與指示箭嘴設定 -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">轉乘框位置</label>
              <select onchange="updateStopInterchangeField(${sIdx}, 'interchangeLayout', this.value, true)" class="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[9.5px] text-slate-200">
                <option value="side_by_side" ${layoutMode === 'side_by_side' ? 'selected' : ''}>站名右側緊貼</option>
                <option value="right_aligned" ${layoutMode === 'right_aligned' ? 'selected' : ''}>站名右側靠右對齊</option>
                <option value="stacked" ${layoutMode === 'stacked' ? 'selected' : ''}>站名正下方</option>
                <option value="above_name" ${layoutMode === 'above_name' ? 'selected' : ''}>站名正上方</option>
              </select>
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">指示箭嘴樣式</label>
              <select onchange="updateStopInterchangeField(${sIdx}, 'interchangePointerStyle', this.value, true)" class="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[9.5px] text-slate-200">
                <option value="pointer" ${pointerStyle === 'pointer' ? 'selected' : ''}>◀ 實心三角箭嘴</option>
                <option value="sharp_long" ${pointerStyle === 'sharp_long' ? 'selected' : ''}>◄ 加長銳角箭嘴</option>
                <option value="chevron" ${pointerStyle === 'chevron' ? 'selected' : ''}>《 燕尾折角箭嘴</option>
                <option value="dot_line" ${pointerStyle === 'dot_line' ? 'selected' : ''}>●— 圓點連桿線</option>
                <option value="flat" ${pointerStyle === 'flat' || pointerStyle === 'none' ? 'selected' : ''}>■ 無箭嘴</option>
              </select>
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">箭嘴方向</label>
              <select onchange="updateStopInterchangeField(${sIdx}, 'interchangePointerDir', this.value, true)" class="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[9.5px] text-slate-200">
                <option value="auto" ${pointerDir === 'auto' ? 'selected' : ''}>自動隨位置適配</option>
                <option value="left" ${pointerDir === 'left' ? 'selected' : ''}>◀ 指向左方</option>
                <option value="top" ${pointerDir === 'top' ? 'selected' : ''}>▲ 指向上方</option>
                <option value="bottom" ${pointerDir === 'bottom' ? 'selected' : ''}>▼ 指向下方</option>
                <option value="right" ${pointerDir === 'right' ? 'selected' : ''}>▶ 指向右方</option>
              </select>
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">箭嘴對齊位置</label>
              <select onchange="updateStopInterchangeField(${sIdx}, 'interchangePointerAlign', this.value, true)" class="w-full bg-slate-950 border border-slate-700 rounded px-1.5 py-1 text-[9.5px] text-slate-200">
                <option value="center" ${pointerAlign === 'center' ? 'selected' : ''}>置中對齊</option>
                <option value="start" ${pointerAlign === 'start' ? 'selected' : ''}>靠左 / 靠上</option>
                <option value="end" ${pointerAlign === 'end' ? 'selected' : ''}>靠右 / 靠下</option>
              </select>
            </div>
          </div>

          <!-- 比例、寬度與邊框微調 -->
          <div class="grid grid-cols-12 gap-2 items-center bg-slate-950/80 p-2 rounded-lg border border-slate-800">
            <div class="col-span-6 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[9px] text-slate-300 font-bold">整體縮放 (<span id="interchange-scale-label-${sIdx}" class="text-teal-300 font-mono">${scaleVal}%</span>)</span>
              </div>
              <input type="range" min="55" max="165" step="5" value="${scaleVal}" oninput="updateStopInterchangeField(${sIdx}, 'interchangeScale', this.value)" class="w-full accent-teal-500" />
            </div>
            <div class="col-span-3">
              <label class="block text-[8.5px] text-slate-400 mb-0.5">指定框寬(px/%)</label>
              <input type="text" value="${esc(stop.interchangeBoxWidth || '')}" placeholder="自動" oninput="updateStopInterchangeField(${sIdx}, 'interchangeBoxWidth', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-center text-slate-100 font-mono text-[9px]" />
            </div>
            <div class="col-span-3">
              <label class="block text-[8.5px] text-slate-400 mb-0.5">外框粗度(px)</label>
              <input type="number" min="0.5" max="5" step="0.5" value="${Number(stop.interchangeBorderWidth) || 1.5}" oninput="updateStopInterchangeField(${sIdx}, 'interchangeBorderWidth', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-center text-slate-100 font-mono text-[9px]" />
            </div>
          </div>

          <!-- 轉乘框主題配色 -->
          <div class="space-y-1.5 bg-slate-950/80 p-2 rounded-lg border border-slate-800">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <span class="text-[9px] text-slate-300 font-bold">轉乘框外框與標題配色：</span>
              <div class="flex items-center gap-2 text-[9px]">
                <label class="flex items-center gap-1"><span>框/標題底</span><input type="color" value="${esc(boxBg)}" oninput="updateStopInterchangeField(${sIdx}, 'interchangeBoxColor', this.value)" class="w-5 h-4 rounded bg-transparent border-0 cursor-pointer" /></label>
                <label class="flex items-center gap-1"><span>標題字</span><input type="color" value="${esc(boxText)}" oninput="updateStopInterchangeField(${sIdx}, 'interchangeBoxTextColor', this.value)" class="w-5 h-4 rounded bg-transparent border-0 cursor-pointer" /></label>
                <label class="flex items-center gap-1"><span>內容底</span><input type="color" value="${esc(bodyBg)}" oninput="updateStopInterchangeField(${sIdx}, 'interchangeBodyBgColor', this.value)" class="w-5 h-4 rounded bg-transparent border-0 cursor-pointer" /></label>
              </div>
            </div>
            <div class="flex flex-wrap gap-1">
              ${swatchesHTML}
            </div>
          </div>

          <!-- 轉乘路線列表 -->
          <div class="space-y-2">
            ${routesEditorHTML || `<div class="text-center text-slate-500 py-2 bg-slate-950/40 rounded border border-dashed border-slate-800">點擊右上角「+ 新增轉乘路線列」以加入轉乘路線</div>`}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// 刪除同一轉乘項目內的指定單獨路線號碼
function removeInterchangeSubRoute(stopIdx, rIdx, subIdx) {
  const ir = appConfig.stops[stopIdx]?.interchangeRoutes?.[rIdx];
  if (!ir) return;
  const list = ensureInterchangeItemRoutesList(ir);
  list.splice(subIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateStopInterchangeRoute(stopIdx, rIdx, field, val, refreshSidebar = false) {
  const routeItem = appConfig.stops[stopIdx]?.interchangeRoutes?.[rIdx];
  if (!routeItem) return;
  routeItem[field] = val;
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

function isRightModuleEnabled(key) {
  const R = appConfig.rightData;
  if (key === 'intro_banner') return R.introEnabled !== false && Boolean(R.introZh || R.introEn);
  if (key === 'additional_info') return Boolean(R.additionalInfo?.enabled);
  if (key === 'octopus_fare') return Boolean(R.octopusFare?.enabled);
  if (key === 'bbi_info') return Boolean(R.bbiInfo?.enabled);
  if (key === 'effective_footer') return Boolean(R.effectiveFooter?.enabled);
  return true;
}

function updateVariantTimetableRow(vtIdx, dgIdx, rIdx, field, val) {
  ensureVariantTimetablesSynced();
  const row = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx]?.rows?.[rIdx];
  if (!row) return;
  ensureTimetableRowSplit(row);
  row[field] = val;
  if (field === 'startTime' || field === 'endTime') {
    const s = String(row.startTime || '').trim();
    const e = String(row.endTime || '').trim();
    row.time = (s && e) ? `${s} - ${e}` : (s || e);
  }
  renderA4Sheet();
  if (field === 'showVariantBadge') {
    renderEditorSidebar();
  }
}

// 新增時段行：自動識別上一個時段的「結束時間 (endTime)」作為新時段的「開始時間 (startTime)」，並自動沿用左側班次編號設定
function addVariantTimetableRow(vtIdx, dgIdx) {
  ensureVariantTimetablesSynced();
  const dg = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx];
  if (!dg) return;
  if (!Array.isArray(dg.rows)) dg.rows = [];

  let nextStartTime = '0900';
  let inheritedBadge = '';
  if (dg.rows.length > 0) {
    const lastRow = ensureTimetableRowSplit(dg.rows[dg.rows.length - 1]);
    if (lastRow.endTime && String(lastRow.endTime).trim() !== '') {
      nextStartTime = String(lastRow.endTime).trim();
    }
    inheritedBadge = lastRow.showVariantBadge || '';
  }

  const nextEndTime = '2300';
  dg.rows.push({
    startTime: nextStartTime,
    endTime: nextEndTime,
    time: `${nextStartTime} - ${nextEndTime}`,
    headway: '30',
    showVariantBadge: inheritedBadge
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function addVariantTimetableDateGroup(vtIdx) {
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vtIdx];
  if (!vt) return;
  vt.dateGroups.push({
    id: 'dg_' + Date.now(),
    datePreset: 'mon_fri',
    dateTitleZh: '星期一至五',
    dateTitleEn: 'Mon - Fri',
    rows: [
      { startTime: '0700', endTime: '0900', time: '0700 - 0900', headway: '15 - 20' }
    ]
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateVariantTimetableDatePreset(vtIdx, dgIdx, presetKey) {
  ensureVariantTimetablesSynced();
  const dg = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx];
  if (!dg) return;
  dg.datePreset = presetKey;
  if (presetKey !== 'custom') {
    const found = TIMETABLE_DATE_PRESETS.find(p => p.key === presetKey);
    if (found) {
      dg.dateTitleZh = found.zh;
      dg.dateTitleEn = found.en;
    }
  }
  renderA4Sheet();
  renderEditorSidebar();
}

function updateVariantTimetableDateGroup(vtIdx, dgIdx, field, val) {
  ensureVariantTimetablesSynced();
  const dg = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx];
  if (!dg) return;
  dg[field] = val;
  dg.datePreset = 'custom';
  renderA4Sheet();
}

function insertStopLineBreak(idx, field) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  const textareaId = field === 'zh' ? `stop-zh-input-${idx}` : `stop-en-input-${idx}`;
  const el = document.getElementById(textareaId);
  const currentVal = String(stop[field] || '');

  if (el && typeof el.selectionStart === 'number') {
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const nextVal = currentVal.slice(0, start) + '\n' + currentVal.slice(end);
    stop[field] = nextVal;
    el.value = nextVal;
    el.focus();
    el.setSelectionRange(start + 1, start + 1);
  } else {
    stop[field] = currentVal + '\n';
  }

  renderA4Sheet();
}

// 更新全局顏色欄位
function updateColor(key, val, refreshSidebar = false) {
  const C = ensureColorsConfigSynced();
  const prevTimetableBg = C.timetableHeaderBg;
  const prevTimetableText = C.timetableHeaderText;

  C[key] = val;

  if (key === 'themePrimary') {
    C.routeLineColor = val;
    C.originDestBg = val;
    C.districtBg = val;
    C.fareBg = val;
    C.destBoxBg = val;
    C.timetableHeaderBg = val;
    C.introBannerBg = val;
    C.octopusHeaderBg = val;
    C.bbiHeaderBg = val;
    C.timetableThickLineColor = val;
    C.clockSvgColor = val;
    C.corridorSvgBg = val;
    C.tunnelSvgBg = val;
    C.infoAccentColor = val;
  } else if (key === 'dateHeaderBg') {
    C.originHeaderBg = val;
    C.headwayHeaderBg = val;
    C.clockContainerBg = val;
    C.combinedDestViaBg = val;
    refreshSidebar = true;
  } else if (key === 'timetableHeaderBg') {
    C.introBannerBg = val;
    if (!C._customOctopusBg || C.octopusHeaderBg === prevTimetableBg) C.octopusHeaderBg = val;
    if (!C._customBbiBg || C.bbiHeaderBg === prevTimetableBg) C.bbiHeaderBg = val;
    refreshSidebar = true;
  } else if (key === 'introBannerBg') {
    C.timetableHeaderBg = val;
    if (!C._customOctopusBg || C.octopusHeaderBg === prevTimetableBg) C.octopusHeaderBg = val;
    if (!C._customBbiBg || C.bbiHeaderBg === prevTimetableBg) C.bbiHeaderBg = val;
    refreshSidebar = true;
  } else if (key === 'timetableHeaderText') {
    C.introBannerText = val;
    if (!C._customOctopusText || C.octopusHeaderText === prevTimetableText) C.octopusHeaderText = val;
    if (!C._customBbiText || C.bbiHeaderText === prevTimetableText) C.bbiHeaderText = val;
    refreshSidebar = true;
  } else if (key === 'octopusHeaderBg') {
    C._customOctopusBg = true;
  } else if (key === 'octopusHeaderText') {
    C._customOctopusText = true;
  } else if (key === 'bbiHeaderBg') {
    C._customBbiBg = true;
  } else if (key === 'bbiHeaderText') {
    C._customBbiText = true;
  }

  syncBoundVariants();
  renderA4Sheet();
  if (refreshSidebar || ['evenZoneBgEnabled', 'originDestText', 'districtText', 'fareText', 'originHeaderText', 'headwayHeaderText'].includes(key)) {
    renderEditorSidebar();
  }
}

// 自動在左側導航欄注入第 5 個「5. 顏色與SVG」分頁按鈕
function ensureColorTabButtonInjected() {
  const exportBtn = document.getElementById('tab-btn-export');
  if (!exportBtn || !exportBtn.parentElement) return;
  const navGrid = exportBtn.parentElement;

  if (!document.getElementById('tab-btn-colors')) {
    navGrid.classList.remove('grid-cols-4');
    navGrid.classList.add('grid-cols-5');

    const colorBtn = document.createElement('button');
    colorBtn.id = 'tab-btn-colors';
    colorBtn.type = 'button';
    colorBtn.setAttribute('onclick', "switchEditorTab('colors')");
    colorBtn.className = 'py-2 px-1 rounded-lg flex flex-col items-center gap-1 transition text-slate-400 hover:text-slate-200 hover:bg-slate-800/60';
    colorBtn.innerHTML = `
      <i class="fa-solid fa-droplet text-sm"></i>
      <span>5. 顏色與SVG</span>
    `;
    navGrid.appendChild(colorBtn);
  }
}

// 切換「5. 顏色與SVG」內部的子分類篩選器
function selectColorTabSection(secKey) {
  activeColorTabSection = secKey || 'all';
  renderEditorSidebar();
}

// 渲染「隧道與走廊標誌根據目前班次顏色改變」的即時白底 SVG 預覽列
function renderSpecialSignsLivePreviewBarHTML() {
  const C = ensureColorsConfigSynced();
  const variants = ensureVariantsConfigSynced();

  const itemsHTML = variants.map((v, idx) => {
    const badgeFg = v.badgeText === 'black' ? '#111827' : '#ffffff';
    const corr = resolveCorridorSignColors(v, C);
    const tunn = resolveTunnelSignColors(v, C);

    return `
      <div style="
        display:inline-flex;
        align-items:center;
        gap:6px;
        padding:4px 8px;
        border-radius:6px;
        border:1px solid #cbd5e1;
        background:#f8fafc;
        flex-shrink:0;
      ">
        <span style="
          width:15px;
          height:15px;
          border-radius:9999px;
          background:${v.color};
          color:${badgeFg};
          font-size:9px;
          font-weight:900;
          display:inline-flex;
          align-items:center;
          justify-content:center;
        ">${idx + 1}</span>
        <span style="font-size:9.5px; font-weight:800; color:#1e293b; white-space:nowrap;">${esc(v.name || ('班次 #' + (idx + 1)))}</span>
        <span style="display:inline-flex; align-items:center; gap:3px;" title="此班次的走廊標誌 (${corr.bg}) 與隧道標誌 (${tunn.bg})">
          ${createHkTrafficSign353Svg(17, corr.bg, corr.fg)}
          ${createHkTunnelSvg(17, tunn.bg, tunn.fg)}
        </span>
      </div>
    `;
  }).join('');

  return `
    <div style="
      background:#ffffff;
      border:1px solid #cbd5e1;
      border-radius:8px;
      padding:6px 8px;
      display:flex;
      flex-direction:column;
      gap:4px;
    ">
      <div style="display:flex; align-items:center; justify-content:space-between; font-size:9px; color:#475569; font-weight:700;">
        <span>即時預覽：各班次軌道上的「走廊 353」與「隧道」標誌實際顯示顏色</span>
        <span style="color:#0d8556;">
          走廊：${C.corridorFollowVariantColor !== false ? '跟隨班次色' : '固定色'} ｜ 隧道：${C.tunnelFollowVariantColor !== false ? '跟隨班次色' : '固定色'}
        </span>
      </div>
      <div style="display:flex; align-items:center; gap:6px; overflow-x:auto; padding-bottom:1px;">
        ${itemsHTML}
      </div>
    </div>
  `;
}

// 重新設計的「5. 顏色與SVG」分頁（支援「同步主色」、隧道與走廊跟隨班次顏色，並涵蓋整張路線紙 100% 顏色自定義）
function renderColorsTabHTML() {
  const C = ensureColorsConfigSynced();
  const L = ensureStopAndLineStyleConfigSynced();
  const R = appConfig.rightData;
  const B = ensureBbiInfoConfigSynced();
  const F = ensureEffectiveFooterConfigSynced();
  const variants = ensureVariantsConfigSynced();
  const routeBoxes = ensureHeaderRouteBoxesSynced();

  const sec = activeColorTabSection || 'all';
  const showMapSec = sec === 'all' || sec === 'map';
  const showSvgSec = sec === 'all' || sec === 'svg';
  const showHeaderSec = sec === 'all' || sec === 'header';
  const showTimetableSec = sec === 'all' || sec === 'timetable';
  const showVariantsSec = sec === 'all' || sec === 'variants';

  // 分區快速切換導航膠囊
  const sectionNavPills = [
    { key: 'all', label: '全部展開', icon: 'fa-layer-group' },
    { key: 'svg', label: '隧道/走廊/SVG', icon: 'fa-road-bridge' },
    { key: 'map', label: '路線圖與站點', icon: 'fa-route' },
    { key: 'header', label: '路線框與目的地', icon: 'fa-signs-post' },
    { key: 'timetable', label: '時間表與頁尾', icon: 'fa-table-list' },
    { key: 'variants', label: `班次專屬 (${variants.length})`, icon: 'fa-code-branch' }
  ].map(item => {
    const isAct = sec === item.key;
    return `
      <button
        type="button"
        onclick="selectColorTabSection('${item.key}')"
        class="px-2.5 py-1 rounded-lg border text-[9.5px] font-bold transition flex items-center gap-1 shrink-0 ${
          isAct
            ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border-slate-700/80'
        }"
      >
        <i class="fa-solid ${item.icon} text-[9px]"></i>
        <span>${item.label}</span>
      </button>
    `;
  }).join('');

  // 各班次獨立配色卡片
  const variantColorCardsHTML = variants.map((v, vIdx) => {
    const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
    const corrInfo = resolveCorridorSignColors(v, C);
    const tunnInfo = resolveTunnelSignColors(v, C);

    return `
      <div id="sec-color-variant-${vIdx}" class="bg-slate-900/95 border border-purple-500/35 rounded-xl p-3 space-y-2.5 shadow-md transition">
        <!-- 班次卡頂部標題與「同步此班次主色」按鈕群 -->
        <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2">
          <div class="flex items-center gap-2">
            <span
              class="w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-black shrink-0 shadow"
              style="background:${v.color}; color:${vBadgeTextColor}; box-shadow:0 0 0 1.2px #ffffff;"
            >${vIdx + 1}</span>
            <div>
              <div class="text-[11px] font-bold text-purple-200">${esc(v.name || ('班次 #' + (vIdx + 1)))}${v.code ? ` (${esc(v.code)})` : ''}</div>
              <div class="text-[8.5px] text-slate-400">可獨立設定此班次的路線、站圈、標籤、隧道/走廊及時間表顏色</div>
            </div>
          </div>

          <div class="flex items-center gap-1 flex-wrap">
            <button
              type="button"
              onclick="syncVariantSubColorsToMain(${vIdx})"
              class="px-2 py-0.5 rounded bg-emerald-600/25 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-[9px] font-bold transition flex items-center gap-1"
              title="將此班次的站圈、總站色塊、地區、分段、走廊、隧道、時間表粗線與時鐘統一同步為此班次的路線主色"
            >
              <i class="fa-solid fa-wand-magic-sparkles text-[8px]"></i>
              <span>同步班次主色</span>
            </button>
            <button
              type="button"
              onclick="resetVariantColorPalette(${vIdx})"
              class="px-2 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-[9px] font-bold transition"
              title="重設此班次的所有自訂配色"
            >重設</button>
          </div>
        </div>

        <!-- 配色捆綁、班次主色與圓圈文字色 -->
        <div class="grid grid-cols-12 gap-2 items-end text-[9.5px]">
          <div class="col-span-5">
            <label class="block text-[8.5px] text-purple-300 font-bold mb-0.5">配色捆綁模式</label>
            <select
              onchange="bindServiceVariant(${vIdx}, this.value)"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-[9.5px] text-sky-200 font-semibold"
            >
              <option value="" ${!v.boundToId ? 'selected' : ''}>獨立配色 (自由調色)</option>
              <option value="__theme__" ${v.boundToId === '__theme__' ? 'selected' : ''}>跟隨全頁路線主色</option>
              ${routeBoxes.map((rb, bIdx) => `<option value="${rb.id}" ${v.boundToId === rb.id ? 'selected' : ''}>捆綁路線框 #${bIdx + 1} (${esc(rb.routeNumber || '')})</option>`).join('')}
            </select>
          </div>

          <div class="col-span-4">
            <label class="block text-[8.5px] text-slate-300 font-bold mb-0.5">班次路線與圓圈主色</label>
            <div class="flex items-center justify-between bg-slate-950/90 px-2 py-1 rounded-lg border border-slate-700">
              <span class="text-[9.5px] font-mono text-slate-200">${esc(v.color || '#0d8556')}</span>
              <input
                type="color"
                value="${esc(v.color || '#0d8556')}"
                oninput="updateVariantColorPalette(${vIdx}, 'color', this.value)"
                class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer shrink-0"
              />
            </div>
          </div>

          <div class="col-span-3">
            <label class="block text-[8.5px] text-slate-400 mb-0.5">圓圈編號字色</label>
            <select
              onchange="updateVariantColorPalette(${vIdx}, 'badgeText', this.value, true)"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-1.5 py-1 text-[9.5px] text-slate-100 font-semibold"
            >
              <option value="white" ${v.badgeText !== 'black' ? 'selected' : ''}>⚪ 白字</option>
              <option value="black" ${v.badgeText === 'black' ? 'selected' : ''}>⚫ 黑字</option>
            </select>
          </div>
        </div>

        <!-- 班次細部配色網格（12 項） -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1 text-[9px]">
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">站圈外環色</span>
            <input type="color" value="${esc(v.nodeColor || v.color || C.routeLineColor || '#0d8556')}" oninput="updateVariantColorPalette(${vIdx}, 'nodeColor', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">站圈內心色</span>
            <input type="color" value="${esc(v.nodeFillColor || C.nodeFillColor || '#ffffff')}" oninput="updateVariantColorPalette(${vIdx}, 'nodeFillColor', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">總站色塊底</span>
            <input type="color" value="${esc(v.originDestBg || v.color || C.originDestBg || '#0d8556')}" oninput="updateVariantColorPalette(${vIdx}, 'originDestBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">地區標籤底色</span>
            <input type="color" value="${esc(v.districtBg || C.districtBg || v.color || '#0d8556')}" oninput="updateVariantColorPalette(${vIdx}, 'districtBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">分段收費底色</span>
            <input type="color" value="${esc(v.fareBg || C.fareBg || v.color || '#0d8556')}" oninput="updateVariantColorPalette(${vIdx}, 'fareBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">港鐵 MTR 底色</span>
            <input type="color" value="${esc(v.mtrSvgBg || C.mtrSvgBg || '#A81428')}" oninput="updateVariantColorPalette(${vIdx}, 'mtrSvgBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between" title="手動修改將覆蓋此班次的走廊標誌顏色">
            <span class="text-slate-300 flex items-center gap-1">
              <span>走廊標誌底</span>
              ${!v._customCorridorSvgBg && C.corridorFollowVariantColor !== false ? '<span class="text-[8px] text-emerald-400">(隨班次)</span>' : ''}
            </span>
            <input type="color" value="${esc(corrInfo.bg)}" oninput="updateVariantColorPalette(${vIdx}, 'corridorSvgBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between" title="手動修改將覆蓋此班次的隧道標誌顏色">
            <span class="text-slate-300 flex items-center gap-1">
              <span>隧道標誌底</span>
              ${!v._customTunnelSvgBg && C.tunnelFollowVariantColor !== false ? '<span class="text-[8px] text-emerald-400">(隨班次)</span>' : ''}
            </span>
            <input type="color" value="${esc(tunnInfo.bg)}" oninput="updateVariantColorPalette(${vIdx}, 'tunnelSvgBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時間表日期底</span>
            <input type="color" value="${esc(v.dateHeaderBg || C.dateHeaderBg || '#dcedc8')}" oninput="updateVariantColorPalette(${vIdx}, 'dateHeaderBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時間表頂粗線</span>
            <input type="color" value="${esc(v.timetableThickLineColor || v.color || C.timetableThickLineColor || '#0d8556')}" oninput="updateVariantColorPalette(${vIdx}, 'timetableThickLineColor', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時鐘 SVG 色</span>
            <input type="color" value="${esc(v.clockSvgColor || v.color || C.clockSvgColor || '#0d8556')}" oninput="updateVariantColorPalette(${vIdx}, 'clockSvgColor', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-950/85 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時間表路線框</span>
            <input type="color" value="${esc(v.routeBoxColor || C.routeBoxBg || v.color || '#0d8556')}" oninput="updateVariantColorPalette(${vIdx}, 'routeBoxColor', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- 頂部核心：全頁主題主色與「同步主色」控制中樞 -->
    <div class="bg-slate-950/95 border border-emerald-500/45 rounded-xl p-3.5 space-y-3 shadow-lg">
      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <i class="fa-solid fa-wand-magic-sparkles text-xs"></i>
          </div>
          <div>
            <h3 class="font-bold text-emerald-300 text-xs flex items-center gap-1.5">
              <span>全頁主色與「同步主色」智能調色中樞</span>
            </h3>
            <p class="text-[9.5px] text-slate-400">可一鍵將主色同步至全頁所有標題、標籤、路線與 SVG，亦可在下方逐項微調</p>
          </div>
        </div>
      </div>

      <!-- 主色選擇器 + 3 個「同步主色」快捷動作按鈕 -->
      <div class="grid grid-cols-12 gap-2 items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
        <div class="col-span-5 flex items-center gap-2.5">
          <input
            type="color"
            value="${esc(C.themePrimary || '#0d8556')}"
            oninput="updateGlobalColorField('themePrimary', this.value)"
            class="w-9 h-9 rounded-lg bg-transparent border-0 cursor-pointer shrink-0 shadow"
          />
          <div class="min-w-0">
            <div class="text-[10.5px] font-bold text-slate-100">全頁主題主色</div>
            <div id="label-master-themePrimary" class="text-[10px] font-mono text-emerald-400 font-bold">${esc(C.themePrimary || '#0d8556')}</div>
          </div>
        </div>

        <div class="col-span-7 flex flex-wrap items-center justify-end gap-1.5">
          <button
            type="button"
            onclick="syncAllColorsToPrimary('primary_only')"
            class="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition shadow-sm flex items-center gap-1"
            title="將路線、總站、地區、分段收費、目的地、簡介橫幅、時間表/分段/轉乘標題、粗線及時鐘統一同步為主色"
          >
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>同步主色</span>
          </button>
          <button
            type="button"
            onclick="syncAllColorsToPrimary('full_smart')"
            class="px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] transition shadow-sm flex items-center gap-1"
            title="同步主色，並自動根據主色計算柔和淺色底 (雙數分段底、時間表日期底) 與深色途徑底"
          >
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            <span>智能全套同步 (含淺色底)</span>
          </button>
          ${variants.length > 1 ? `
            <button
              type="button"
              onclick="syncAllColorsToPrimary('all_variants')"
              class="px-2 py-1 rounded-lg bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 font-bold text-[9.5px] transition"
              title="將全部班次 (#1 ~ #${variants.length}) 亦統一同步為全頁主色"
            >同步全部班次</button>
          ` : ''}
        </div>
      </div>

      <!-- 自動同步開關列 -->
      <div class="flex flex-wrap items-center justify-between gap-2 text-[9.5px] text-slate-300 px-1">
        <label class="flex items-center gap-1.5 cursor-pointer hover:text-white">
          <input
            type="checkbox"
            ${C.autoSyncPrimary !== false ? 'checked' : ''}
            onchange="appConfig.colors.autoSyncPrimary = this.checked; renderEditorSidebar();"
            class="rounded accent-emerald-500"
          />
          <span class="font-semibold text-emerald-200">選取「全頁主題主色」時即時自動同步全頁關聯色塊</span>
        </label>
        <label class="flex items-center gap-1.5 cursor-pointer hover:text-white">
          <input
            type="checkbox"
            ${C.autoSyncIncludeTints !== false ? 'checked' : ''}
            onchange="appConfig.colors.autoSyncIncludeTints = this.checked;"
            class="rounded accent-sky-500"
          />
          <span>自動同步時一併計算淺色底 (雙數分段／時間表日期底)</span>
        </label>
      </div>

      <!-- 分區篩選導航列 -->
      <div class="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-800/90 pb-0.5">
        ${sectionNavPills}
      </div>
    </div>

    ${showSvgSec ? `
      <!-- 分區 ①：隧道、快速公路／走廊與港鐵 MTR SVG 標誌設定（支援根據目前班次顏色而改變） -->
      <div class="bg-slate-800/70 border border-emerald-500/35 rounded-xl p-3.5 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <h3 class="font-bold text-emerald-300 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-road-bridge"></i>
            <span>① 隧道與走廊標誌（支援根據目前班次顏色改變）及港鐵 SVG</span>
          </h3>
        </div>

        <!-- 白底即時多班次 SVG 預覽列 -->
        <div id="special-signs-live-preview-bar">
          ${renderSpecialSignsLivePreviewBarHTML()}
        </div>

        <!-- 走廊標誌與隧道標誌：跟隨班次顏色 vs 固定顏色 雙卡片 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[10px]">
          <!-- 快速公路 / 走廊標誌 (353) -->
          <div class="bg-slate-900/90 p-2.5 rounded-xl border ${C.corridorFollowVariantColor !== false ? 'border-emerald-500/50' : 'border-slate-800'} space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-slate-100 flex items-center gap-1.5">
                ${createHkTrafficSign353Svg(16, C.corridorFollowVariantColor !== false ? (variants[0]?.color || C.themePrimary) : C.corridorSvgBg, C.corridorSvgFg)}
                <span>快速公路／走廊標誌</span>
              </span>
              <span class="px-1.5 py-0.5 rounded text-[8.5px] font-bold ${C.corridorFollowVariantColor !== false ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'}">
                ${C.corridorFollowVariantColor !== false ? '跟隨班次色' : '固定顏色'}
              </span>
            </div>

            <label class="flex items-center gap-1.5 cursor-pointer bg-slate-950/80 p-2 rounded-lg border border-slate-800 hover:border-emerald-500/40 transition text-[9.5px] text-emerald-200 font-semibold">
              <input
                type="checkbox"
                ${C.corridorFollowVariantColor !== false ? 'checked' : ''}
                onchange="toggleSpecialSignFollowVariantColor('corridor', this.checked)"
                class="rounded accent-emerald-500"
              />
              <span>根據目前班次顏色而改變</span>
            </label>

            <div class="grid grid-cols-2 gap-1.5 pt-0.5 text-[9px]">
              <div class="bg-slate-950/75 p-1.5 rounded border border-slate-800 flex items-center justify-between ${C.corridorFollowVariantColor !== false ? 'opacity-50' : ''}">
                <span class="text-slate-300">固定底色</span>
                <input
                  type="color"
                  value="${esc(C.corridorSvgBg || '#0d8556')}"
                  oninput="appConfig.colors.corridorFollowVariantColor = false; updateGlobalColorField('corridorSvgBg', this.value, true);"
                  class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer"
                />
              </div>
              <div class="bg-slate-950/75 p-1.5 rounded border border-slate-800 flex items-center justify-between">
                <span class="text-slate-300">圖案線條色</span>
                <input
                  type="color"
                  value="${esc(C.corridorSvgFg || '#ffffff')}"
                  oninput="updateGlobalColorField('corridorSvgFg', this.value)"
                  class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <!-- 隧道標誌 (Tunnel) -->
          <div class="bg-slate-900/90 p-2.5 rounded-xl border ${C.tunnelFollowVariantColor !== false ? 'border-emerald-500/50' : 'border-slate-800'} space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-slate-100 flex items-center gap-1.5">
                ${createHkTunnelSvg(16, C.tunnelFollowVariantColor !== false ? (variants[0]?.color || C.themePrimary) : C.tunnelSvgBg, C.tunnelSvgFg)}
                <span>隧道標誌 (Tunnel)</span>
              </span>
              <span class="px-1.5 py-0.5 rounded text-[8.5px] font-bold ${C.tunnelFollowVariantColor !== false ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'}">
                ${C.tunnelFollowVariantColor !== false ? '跟隨班次色' : '固定顏色'}
              </span>
            </div>

            <label class="flex items-center gap-1.5 cursor-pointer bg-slate-950/80 p-2 rounded-lg border border-slate-800 hover:border-emerald-500/40 transition text-[9.5px] text-emerald-200 font-semibold">
              <input
                type="checkbox"
                ${C.tunnelFollowVariantColor !== false ? 'checked' : ''}
                onchange="toggleSpecialSignFollowVariantColor('tunnel', this.checked)"
                class="rounded accent-emerald-500"
              />
              <span>根據目前班次顏色而改變</span>
            </label>

            <div class="grid grid-cols-2 gap-1.5 pt-0.5 text-[9px]">
              <div class="bg-slate-950/75 p-1.5 rounded border border-slate-800 flex items-center justify-between ${C.tunnelFollowVariantColor !== false ? 'opacity-50' : ''}">
                <span class="text-slate-300">固定底色</span>
                <input
                  type="color"
                  value="${esc(C.tunnelSvgBg || '#0d8556')}"
                  oninput="appConfig.colors.tunnelFollowVariantColor = false; updateGlobalColorField('tunnelSvgBg', this.value, true);"
                  class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer"
                />
              </div>
              <div class="bg-slate-950/75 p-1.5 rounded border border-slate-800 flex items-center justify-between">
                <span class="text-slate-300">圖案線條色</span>
                <input
                  type="color"
                  value="${esc(C.tunnelSvgFg || '#ffffff')}"
                  oninput="updateGlobalColorField('tunnelSvgFg', this.value)"
                  class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 港鐵 MTR 標誌顏色與大小 -->
        <div class="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 grid grid-cols-12 gap-2 items-center text-[9.5px]">
          <div class="col-span-3 flex items-center justify-between bg-slate-950/80 p-1.5 rounded border border-slate-800">
            <span class="text-slate-300">MTR 底色</span>
            <input type="color" value="${esc(C.mtrSvgBg || '#A81428')}" oninput="updateGlobalColorField('mtrSvgBg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="col-span-3 flex items-center justify-between bg-slate-950/80 p-1.5 rounded border border-slate-800">
            <span class="text-slate-300">MTR 線條</span>
            <input type="color" value="${esc(C.mtrSvgFg || '#ffffff')}" oninput="updateGlobalColorField('mtrSvgFg', this.value)" class="w-4 h-4 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="col-span-6 flex items-center justify-between gap-2 bg-slate-950/80 px-2 py-1.5 rounded border border-slate-800">
            <span class="text-slate-300 shrink-0">MTR 縮放 (<span id="label-mtrIconScale" class="text-emerald-400 font-mono">${L.mtrIconScale || 100}%</span>)</span>
            <input id="range-mtrIconScale" type="range" min="70" max="150" step="5" value="${L.mtrIconScale || 100}" oninput="updateLayout('mtrIconScale', this.value)" class="w-full accent-emerald-500" />
          </div>
        </div>
      </div>
    ` : ''}

    ${showMapSec ? `
      <!-- 分區 ②：路線圖、站點圓圈、標籤、站名文字、地標與宣傳/轉乘框配色 -->
      <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-route text-sky-400"></i>
            <span>② 路線圖軌道、站圈、標籤、站名文字與地標配色</span>
          </h3>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[9.5px]">
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">主線預設色</span>
            <input type="color" value="${esc(C.routeLineColor || '#0d8556')}" oninput="updateGlobalColorField('routeLineColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">站圈外環預設</span>
            <input type="color" value="${esc(C.nodeColor || C.routeLineColor || '#0d8556')}" oninput="updateGlobalColorField('nodeColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">站圈內心填充</span>
            <input type="color" value="${esc(C.nodeFillColor || '#ffffff')}" oninput="updateGlobalColorField('nodeFillColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <!-- 起訖總站色塊底與字色 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between gap-1">
            <span class="text-slate-200 font-semibold">總站色塊底</span>
            <div class="flex items-center gap-1">
              <select onchange="updateGlobalColorField('originDestText', this.value, true)" class="bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[8.5px] text-slate-200">
                <option value="white" ${C.originDestText !== 'black' ? 'selected' : ''}>白字</option>
                <option value="black" ${C.originDestText === 'black' ? 'selected' : ''}>黑字</option>
              </select>
              <input type="color" value="${esc(C.originDestBg || '#0d8556')}" oninput="updateGlobalColorField('originDestBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
            </div>
          </div>

          <!-- 地區標籤底與字色 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between gap-1">
            <span class="text-slate-200 font-semibold">地區標籤底</span>
            <div class="flex items-center gap-1">
              <select onchange="updateGlobalColorField('districtText', this.value, true)" class="bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[8.5px] text-slate-200">
                <option value="white" ${C.districtText !== 'black' ? 'selected' : ''}>白字</option>
                <option value="black" ${C.districtText === 'black' ? 'selected' : ''}>黑字</option>
              </select>
              <input type="color" value="${esc(C.districtBg || '#0d8556')}" oninput="updateGlobalColorField('districtBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
            </div>
          </div>

          <!-- 分段收費標籤底與字色 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between gap-1">
            <span class="text-slate-200 font-semibold">分段收費底</span>
            <div class="flex items-center gap-1">
              <select onchange="updateGlobalColorField('fareText', this.value, true)" class="bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[8.5px] text-slate-200">
                <option value="white" ${C.fareText !== 'black' ? 'selected' : ''}>白字</option>
                <option value="black" ${C.fareText === 'black' ? 'selected' : ''}>黑字</option>
              </select>
              <input type="color" value="${esc(C.fareBg || '#0d8556')}" oninput="updateGlobalColorField('fareBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
            </div>
          </div>

          <!-- 雙數分段底色、周邊地標底色與文字色 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <label class="flex items-center gap-1 cursor-pointer text-slate-200 font-semibold">
              <input type="checkbox" ${C.evenZoneBgEnabled !== false ? 'checked' : ''} onchange="updateGlobalColorField('evenZoneBgEnabled', this.checked)" class="rounded accent-emerald-500" />
              <span>雙數分段底</span>
            </label>
            <input type="color" value="${esc(C.evenZoneBg || '#dcedc8')}" oninput="updateGlobalColorField('evenZoneBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">周邊地標底色</span>
            <input type="color" value="${esc(C.landmarkBg || '#e5e7eb')}" oninput="updateGlobalColorField('landmarkBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">周邊地標字色</span>
            <input type="color" value="${esc(C.landmarkText || '#111827')}" oninput="updateGlobalColorField('landmarkText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <!-- 一般站名中文字色、英文字色與下方注解字色 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">中文站名字色</span>
            <input type="color" value="${esc(C.stopNameZhColor || '#111827')}" oninput="updateGlobalColorField('stopNameZhColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">英文站名字色</span>
            <input type="color" value="${esc(C.stopNameEnColor || '#1f2937')}" oninput="updateGlobalColorField('stopNameEnColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">站點注解字色</span>
            <input type="color" value="${esc(C.stopRemarkColor || '#475569')}" oninput="updateGlobalColorField('stopRemarkColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <!-- 站點宣傳橫幅與轉乘圓角框預設配色 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">站點宣傳框底</span>
            <input type="color" value="${esc(C.promoBannerBg || C.themePrimary || '#0d8556')}" oninput="updateGlobalColorField('promoBannerBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">宣傳框快鐘色</span>
            <input type="color" value="${esc(C.fastClockSvgColor || '#ffffff')}" oninput="updateGlobalColorField('fastClockSvgColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">站點轉乘框底</span>
            <input type="color" value="${esc(C.interchangeDefaultBg || C.themePrimary || '#0d8556')}" oninput="updateGlobalColorField('interchangeDefaultBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
        </div>
      </div>
    ` : ''}

    ${showHeaderSec ? `
      <!-- 分區 ③：右側資訊欄頂部（路線號碼框、目的地、途徑、合併容器與簡介橫幅） -->
      <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-signs-post text-amber-400"></i>
            <span>③ 右側頂部：路線框、目的地、途徑與簡介橫幅配色</span>
          </h3>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[9.5px]">
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">預設路線框底</span>
            <input type="color" value="${esc(C.routeBoxBg || '#0d8556')}" oninput="updateGlobalColorField('routeBoxBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">預設路線框字</span>
            <input type="color" value="${esc(C.routeBoxText || '#ffffff')}" oninput="updateGlobalColorField('routeBoxText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">目的地框底色</span>
            <input type="color" value="${esc(C.destBoxBg || '#0d8556')}" oninput="updateGlobalColorField('destBoxBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">目的地框字色</span>
            <input type="color" value="${esc(C.destBoxText || '#ffffff')}" oninput="updateGlobalColorField('destBoxText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">途徑 (經) 底色</span>
            <input type="color" value="${esc(C.viaBoxBg || '#006829')}" oninput="updateGlobalColorField('viaBoxBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">途徑 (經) 字色</span>
            <input type="color" value="${esc(C.viaBoxText || '#ffffff')}" oninput="updateGlobalColorField('viaBoxText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">合併目的地底</span>
            <input type="color" value="${esc(C.combinedDestViaBg || '#dcedc8')}" oninput="updateGlobalColorField('combinedDestViaBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">合併目的地字</span>
            <input type="color" value="${esc(C.combinedDestViaText || '#111827')}" oninput="updateGlobalColorField('combinedDestViaText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">簡介橫幅底色</span>
            <input type="color" value="${esc(C.introBannerBg || '#0d8556')}" oninput="updateGlobalColorField('introBannerBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">簡介橫幅字色</span>
            <input type="color" value="${esc(C.introBannerText || '#ffffff')}" oninput="updateGlobalColorField('introBannerText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
        </div>
      </div>
    ` : ''}

    ${showTimetableSec ? `
      <!-- 分區 ④：時間表、分段收費、轉乘計劃與頁尾全套配色 -->
      <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-table-list text-purple-400"></i>
            <span>④ 時間表、分段收費、轉乘計劃與頁尾配色</span>
          </h3>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[9.5px]">
          <!-- 時間表標題、頂粗線與日期底 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">時間表標題底</span>
            <input type="color" value="${esc(C.timetableHeaderBg || '#0d8556')}" oninput="updateGlobalColorField('timetableHeaderBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時間表標題字</span>
            <input type="color" value="${esc(C.timetableHeaderText || '#ffffff')}" oninput="updateGlobalColorField('timetableHeaderText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">時間表頂粗線</span>
            <input type="color" value="${esc(C.timetableThickLineColor || '#0d8556')}" oninput="updateGlobalColorField('timetableThickLineColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">日期/開出淺底</span>
            <input type="color" value="${esc(C.dateHeaderBg || '#dcedc8')}" oninput="updateGlobalColorField('dateHeaderBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">日期欄文字色</span>
            <input type="color" value="${esc(C.dateHeaderText || '#111827')}" oninput="updateGlobalColorField('dateHeaderText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">時鐘 SVG 色</span>
            <input type="color" value="${esc(C.clockSvgColor || '#0d8556')}" oninput="updateGlobalColorField('clockSvgColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時段單數行底</span>
            <input type="color" value="${esc(C.timetableSlotEvenBg || '#f8fafc')}" oninput="updateGlobalColorField('timetableSlotEvenBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時段雙數行底</span>
            <input type="color" value="${esc(C.timetableSlotOddBg || '#f1f5f9')}" oninput="updateGlobalColorField('timetableSlotOddBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">時間表總底色</span>
            <input type="color" value="${esc(C.timetableBg || '#ffffff')}" oninput="updateGlobalColorField('timetableBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <!-- 八達通分段收費與巴士轉乘計劃 -->
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">分段收費標題底</span>
            <input type="color" value="${esc(C.octopusHeaderBg || '#0d8556')}" oninput="updateGlobalColorField('octopusHeaderBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">分段收費標題字</span>
            <input type="color" value="${esc(C.octopusHeaderText || '#ffffff')}" oninput="updateGlobalColorField('octopusHeaderText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-200 font-semibold">轉乘計劃標題底</span>
            <input type="color" value="${esc(C.bbiHeaderBg || '#0d8556')}" oninput="updateGlobalColorField('bbiHeaderBg', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">轉乘計劃標題字</span>
            <input type="color" value="${esc(C.bbiHeaderText || '#ffffff')}" oninput="updateGlobalColorField('bbiHeaderText', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">轉乘二維碼色</span>
            <input type="color" value="${esc(B.qrColor || '#000000')}" oninput="appConfig.rightData.bbiInfo.qrColor = this.value; renderA4Sheet();" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">生效日期紅字</span>
            <input type="color" value="${esc(C.effectiveDateHighlightColor || '#dc2626')}" oninput="updateGlobalColorField('effectiveDateHighlightColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>

          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">頁尾圖標 SVG 色</span>
            <input type="color" value="${esc(C.footerContactIconColor || C.themePrimary || '#0d8556')}" oninput="updateGlobalColorField('footerContactIconColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">頁尾條款文字色</span>
            <input type="color" value="${esc(C.footerClauseTextColor || '#475569')}" oninput="updateGlobalColorField('footerClauseTextColor', this.value)" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
          <div class="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
            <span class="text-slate-300">版本與營運商色</span>
            <input type="color" value="${esc(F.operatorVersionColor || '#64748b')}" oninput="appConfig.rightData.effectiveFooter.operatorVersionColor = this.value; renderA4Sheet();" class="w-5 h-5 rounded bg-transparent border-0 cursor-pointer" />
          </div>
        </div>
      </div>
    ` : ''}

    ${showVariantsSec ? `
      <!-- 分區 ⑤：各班次分支獨立配色與「同步班次主色」設定 -->
      <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-code-branch text-purple-400"></i>
            <span>⑤ 各班次分支獨立配色與捆綁設定（共 ${variants.length} 班次）</span>
          </h3>
        </div>
        <div class="space-y-3">
          ${variantColorCardsHTML}
        </div>
      </div>
    ` : ''}
  `;
}

function syncVariantPaletteToMain(vIdx) {
  const v = appConfig.variants[vIdx];
  if (!v) return;
  const mainColor = v.color || appConfig.colors.routeLineColor || '#0d8556';
  v.nodeColor = mainColor;
  v.originDestBg = mainColor;
  v.corridorSvgBg = mainColor;
  v.tunnelSvgBg = mainColor;
  v.promoBg = mainColor;
  v.interchangeBg = mainColor;
  v.routeBoxColor = mainColor;
  v.originHeaderBg = mainColor;
  v.headwayHeaderBg = mainColor;
  v.timetableThickLineColor = mainColor;
  v.clockSvgColor = mainColor;

  ensureVariantTimetablesSynced();
  if (appConfig.rightData.timetable.variantTables?.[vIdx]) {
    appConfig.rightData.timetable.variantTables[vIdx].routeBoxColor = mainColor;
  }

  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已將「${v.name}」的路線圖、SVG 及時間表標題/粗線/時鐘同步至 ${mainColor}`);
}

function removeVariantTimetableRow(vtIdx, dgIdx, rIdx) {
  ensureVariantTimetablesSynced();
  const rows = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx]?.rows;
  if (!rows || rows.length <= 1) return;
  rows.splice(rIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function renderRightInfoColumnHTML() {
  const L = appConfig.layout;
  const C = appConfig.colors;
  const themeAccentColor = C.themePrimary || C.routeLineColor || C.infoAccentColor || '#0d8556';
  const rightWidth = 100 - Number(L.mapWidthPercent);
  const order = appConfig.rightModulesOrder || [];
  const enabledKeys = order.filter(k => isRightModuleEnabled(k));
  const octopusOrderIdx = order.indexOf('octopus_fare');
  const isMapLeft = L.mapPosition !== 'right';

  const modulesHTML = enabledKeys
    .map((key, idx) => {
      const isLastVisible = idx === enabledKeys.length - 1;
      const hasTopDividerLine = (octopusOrderIdx !== -1 && order.indexOf(key) >= octopusOrderIdx) || key === 'effective_footer';

      if (hasTopDividerLine) {
        const innerHTML = renderRightSideModuleHTML(key, false);
        if (!innerHTML) return '';
        const pushToBottomStyle = (isLastVisible && L.stickLastModuleToBottom) ? 'margin-top:auto;' : '';
        return `
          <div style="
            padding-top:6px;
            border-top:1.5px solid ${themeAccentColor};
            display:flex;
            flex-direction:column;
            ${pushToBottomStyle}
          ">
            ${innerHTML}
          </div>
        `;
      }

      return renderRightSideModuleHTML(key, isLastVisible);
    })
    .join('');

  return `
    <div style="
      width:${rightWidth}%;
      height:100%;
      display:flex;
      flex-direction:column;
      gap:6px;
      box-sizing:border-box;
      ${isMapLeft ? 'padding-left:8px; border-left:1.5px solid #e2e8f0;' : 'padding-right:8px; border-right:1.5px solid #e2e8f0;'}
    ">
      ${modulesHTML}
    </div>
  `;
}

function ensureColorsTabButton() {
  const themeBtn = document.getElementById('tab-btn-theme');
  if (themeBtn && themeBtn.parentElement && !document.getElementById('tab-btn-colors')) {
    const tabBar = themeBtn.parentElement;
    tabBar.classList.remove('grid-cols-4');
    tabBar.classList.add('grid-cols-5');
    const btn = document.createElement('button');
    btn.id = 'tab-btn-colors';
    btn.setAttribute('onclick', "switchEditorTab('colors')");
    btn.className = 'py-2 px-1 rounded-lg flex flex-col items-center gap-1 transition text-slate-400 hover:text-slate-200 hover:bg-slate-800/60';
    btn.innerHTML = `
      <i class="fa-solid fa-eye-dropper text-sm"></i>
      <span>5. 顏色與SVG</span>
    `;
    tabBar.appendChild(btn);
  }

  // 在頂部導航欄注入「↩ 還原先前狀態」、「⚡ 快速前往」與「📖 製作教程」按鈕
  const topNav = document.getElementById('top-navbar');
  if (topNav && !document.getElementById('btn-open-tutorial')) {
    const rightGroup = topNav.querySelector('.flex.items-center.gap-2:last-child');
    if (rightGroup) {
      const helperWrap = document.createElement('div');
      helperWrap.className = 'flex items-center gap-1.5';
      helperWrap.innerHTML = `
        <button id="btn-restore-temp-top" onclick="exitTempScratchMode()" title="結束臨時製作路線紙，立即還原至開始前的狀態" class="hidden px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white border border-rose-400 text-xs font-bold items-center gap-1.5 shadow animate-pulse transition">
          <i class="fa-solid fa-rotate-left"></i>
          <span>已嘗試製作路線紙并返回</span>
        </button>
        <button id="btn-quick-jump-top" onclick="toggleQuickJumpPanel(true)" title="打開快速前往製作索引列表" class="px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1.5 transition">
          <i class="fa-solid fa-compass"></i>
          <span class="hidden sm:inline">快速前往</span>
        </button>
        <button id="btn-open-tutorial" onclick="openTutorialModal()" title="查看分步製作教程或嘗試製作路線紙" class="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 transition">
          <i class="fa-solid fa-graduation-cap"></i>
          <span class="hidden sm:inline">製作教程</span>
        </button>
      `;
      rightGroup.insertBefore(helperWrap, rightGroup.firstChild);
    }
  }
  syncTopNavbarForTempMode();
}

function renderQuickJumpAndTutorialBarHTML() {
  const stops = appConfig.stops || [];
  const variants = appConfig.variants || [];
  const routeBoxes = ensureHeaderRouteBoxesSynced();

  const stopOptionsHTML = stops.map((s, idx) => {
    const cleanName = String(s.zh || '').replace(/\r?\n|\|/g, ' ');
    const tag = (s.hasTunnel || s.type === 'tunnel')
      ? '[隧道] '
      : ((s.hasCorridor || s.type === 'corridor') ? '[走廊] ' : (s.fare ? `[${s.fare}] ` : ''));
    return `<option value="${s.id}" ${expandedStopId === s.id ? 'selected' : ''}>第 ${idx + 1} 項：${tag}${esc(cleanName)}</option>`;
  }).join('');

  const tempModeBannerHTML = isTempScratchMode ? `
    <div class="bg-rose-950/75 border-2 border-rose-500/80 rounded-xl p-2.5 shadow-lg space-y-2">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 font-black">
            <i class="fa-solid fa-flask text-xs"></i>
          </span>
          <div class="min-w-0">
            <div class="text-[11px] font-black text-rose-200">目前處於「嘗試製作路線紙」模式</div>
            <div class="text-[9px] text-rose-300/90">已禁用範本、顏色與SVG、存儲 JSON、導出 PDF 及原生列印・隨時可還原</div>
          </div>
        </div>
        <button type="button" onclick="exitTempScratchMode()" class="px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-black text-[10px] shrink-0 shadow transition flex items-center gap-1">
          <i class="fa-solid fa-rotate-left"></i>
          <span>還原先前狀態</span>
        </button>
      </div>
    </div>
  ` : '';

  return `
    ${tempModeBannerHTML}
    <div class="bg-gradient-to-r from-slate-900 via-slate-800/95 to-slate-900 border border-emerald-500/40 rounded-xl p-2.5 shadow-md space-y-2">
      <div class="flex items-center justify-between gap-2">
        <button type="button" onclick="toggleQuickJumpPanel()" class="flex items-center gap-2 text-left flex-1 min-w-0 group">
          <span class="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
            <i class="fa-solid fa-compass text-xs"></i>
          </span>
          <div class="min-w-0 flex-1">
            <div class="text-[11px] font-bold text-slate-100 group-hover:text-amber-300 transition flex items-center gap-1.5">
              <span>快速前往需要製作的地方 (目錄索引)</span>
              <i class="fa-solid ${isQuickJumpOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px] text-amber-300"></i>
            </div>
            <div class="text-[9px] text-slate-400 truncate">一鍵跳轉至路線框、時間表或指定分站</div>
          </div>
        </button>
        <div class="flex items-center gap-1 shrink-0">
          ${!isTempScratchMode ? `
            <button type="button" onclick="startTempScratchMode()" title="保存當前進度，臨時由0開始嘗試製作路線紙" class="px-2 py-1.5 rounded-lg bg-amber-600/80 hover:bg-amber-500 text-white font-bold text-[10px] flex items-center gap-1 shadow transition">
              <i class="fa-solid fa-file-circle-plus"></i>
              <span>嘗試製作路線紙</span>
            </button>
          ` : ''}
          <button type="button" onclick="openTutorialModal()" class="px-2 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] flex items-center gap-1 shadow transition">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>教程</span>
          </button>
        </div>
      </div>

      ${isQuickJumpOpen ? `
        <div class="pt-2 border-t border-slate-700/80 space-y-2.5 text-[10px]">
          <div class="bg-slate-950/75 p-2 rounded-lg border border-slate-800 space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="font-bold text-emerald-300"><i class="fa-solid fa-location-crosshairs mr-1"></i>快速定位並展開指定站點 (共 ${stops.length} 項)：</span>
              <div class="flex items-center gap-1">
                ${stops[0] ? `<button type="button" onclick="quickJumpTo('stops', 'stop-card-${stops[0].id}', '${stops[0].id}')" class="px-1.5 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white font-bold">首站(起點)</button>` : ''}
                ${stops.length > 1 ? `<button type="button" onclick="quickJumpTo('stops', 'stop-card-${stops[stops.length - 1].id}', '${stops[stops.length - 1].id}')" class="px-1.5 py-0.5 rounded bg-sky-600/30 hover:bg-sky-600 text-sky-200 hover:text-white font-bold">尾站(終點)</button>` : ''}
              </div>
            </div>
            <select onchange="if(this.value) quickJumpTo('stops', 'stop-card-' + this.value, this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100 font-medium">
              <option value="">— 請選擇要立即前往編輯的巴士站 —</option>
              ${stopOptionsHTML}
            </select>
          </div>

          <div class="space-y-1">
            <div class="font-bold text-sky-300"><i class="fa-solid fa-table-columns mr-1"></i>快速前往各製作區塊：</div>
            <div class="grid grid-cols-2 gap-1">
              <button type="button" onclick="quickJumpTo('info', 'sec-route')" class="px-2 py-1 rounded bg-slate-900 hover:bg-emerald-600/30 border border-slate-700 text-slate-200 text-left truncate transition">
                <i class="fa-solid fa-bus text-emerald-400 mr-1"></i>1. 路線號碼及目的地
              </button>
              <button type="button" onclick="quickJumpTo('info', 'sec-intro')" class="px-2 py-1 rounded bg-slate-900 hover:bg-emerald-600/30 border border-slate-700 text-slate-200 text-left truncate transition">
                <i class="fa-solid fa-bullhorn text-amber-400 mr-1"></i>2. 路線簡介橫幅
              </button>
              <button type="button" onclick="quickJumpTo('info', 'sec-timetable')" class="px-2 py-1 rounded bg-slate-900 hover:bg-emerald-600/30 border border-slate-700 text-slate-200 text-left truncate transition">
                <i class="fa-regular fa-clock text-sky-400 mr-1"></i>3. 時間表設定
              </button>
              <button type="button" onclick="quickJumpTo('stops')" class="px-2 py-1 rounded bg-slate-900 hover:bg-emerald-600/30 border border-slate-700 text-slate-200 text-left truncate transition">
                <i class="fa-solid fa-route text-emerald-400 mr-1"></i>4. 站點列表管理
              </button>
              <button type="button" onclick="quickJumpTo('theme')" class="px-2 py-1 rounded bg-slate-900 hover:bg-emerald-600/30 border border-slate-700 text-slate-200 text-left truncate transition">
                <i class="fa-solid fa-arrows-left-right text-amber-400 mr-1"></i>5. 版面佈局與換欄
              </button>
              ${!isTempScratchMode ? `
                <button type="button" onclick="quickJumpTo('colors', 'sec-colors-header-boxes')" class="px-2 py-1 rounded bg-slate-900 hover:bg-emerald-600/30 border border-slate-700 text-slate-200 text-left truncate transition">
                  <i class="fa-solid fa-palette text-sky-400 mr-1"></i>6. 主題顏色設定
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function openTutorialModal() {
  let modal = document.getElementById('tutorial-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'tutorial-modal-overlay';
    modal.className = 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-slate-900 border border-emerald-500/50 rounded-2xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden text-xs">
      <!-- Modal Header -->
      <div class="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm font-black shadow">
            <i class="fa-solid fa-graduation-cap"></i>
          </span>
          <div>
            <h2 class="text-sm font-bold text-white">香港巴士路線紙模擬器・快速製作教程</h2>
            <p class="text-[11px] text-slate-400">支援點擊各步驟直接前往編輯，或點擊右下角「開始製作路線紙」由 0 開始臨時體驗</p>
          </div>
        </div>
        <button onclick="closeTutorialModal()" class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 overflow-y-auto space-y-3.5 text-slate-200">
        <div class="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 flex items-start gap-2.5">
          <i class="fa-solid fa-hand-pointer text-emerald-400 text-base mt-0.5"></i>
          <div class="space-y-1 text-[11px]">
            <div class="font-bold text-emerald-300">超直覺互動秘訣：直接點擊右側 A4 預覽紙！</div>
            <p class="text-slate-300 leading-relaxed">
              你可以隨時在右方 A4 預覽紙上<strong>直接點擊任何巴士站、路線號碼框或時間表</strong>，左側編輯器會自動切換分頁並捲動展開該項目！
            </p>
          </div>
        </div>

        <div class="bg-amber-950/40 border border-amber-500/40 rounded-xl p-3 flex items-start gap-2.5">
          <i class="fa-solid fa-flask text-amber-400 text-base mt-0.5"></i>
          <div class="space-y-1 text-[11px]">
            <div class="font-bold text-amber-300">什麼是「開始製作路線紙（臨時由 0 開始）」？</div>
            <p class="text-slate-300 leading-relaxed">
              點擊下方「<strong>開始嘗試製作路線紙</strong>」後，系統會先自動暫存你目前的路線紙狀態，並開啟一份只保留<strong>基礎功能</strong>的空白路線紙讓你由 0 開始練習製作。臨時路線紙<strong>不可存儲 JSON</strong>，且你可隨時點擊頂部「<strong>還原先前狀態</strong>」一鍵回到原本的路線紙！
            </p>
          </div>
        </div>

        <!-- Step 1 -->
        <div class="bg-slate-800/75 border border-slate-700 rounded-xl p-3.5 flex items-start justify-between gap-3">
          <div class="space-y-1">
            <div class="font-bold text-emerald-300 text-xs">步驟 1：設定路線號碼、目的地及主題配色</div>
            <p class="text-[11px] text-slate-300 leading-relaxed">
              在「3. 右側資訊欄」輸入路線號碼、中英文目的地及途徑方向；並在「5. 顏色與SVG」一鍵同步全張路線紙的主題底色。
            </p>
          </div>
          <button onclick="quickJumpTo('info', 'sec-route')" class="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] whitespace-nowrap shrink-0 transition">
            前往路線與目的地 ➔
          </button>
        </div>

        <!-- Step 2 -->
        <div class="bg-slate-800/75 border border-slate-700 rounded-xl p-3.5 flex items-start justify-between gap-3">
          <div class="space-y-1">
            <div class="font-bold text-sky-300 text-xs">步驟 2：新增巴士站點與分段收費</div>
            <p class="text-[11px] text-slate-300 leading-relaxed">
              在「2. 路線圖站點」新增各個分站、輸入區域標籤與分段收費（雙數分段會自動套用一體化淺色背景）。
            </p>
          </div>
          <button onclick="quickJumpTo('stops')" class="px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] whitespace-nowrap shrink-0 transition">
            前往路線圖站點 ➔
          </button>
        </div>

        <!-- Step 3 -->
        <div class="bg-slate-800/75 border border-slate-700 rounded-xl p-3.5 flex items-start justify-between gap-3">
          <div class="space-y-1">
            <div class="font-bold text-purple-300 text-xs">步驟 3：編輯時間表（支援顯示/隱藏路線號碼框及框內細白線）</div>
            <p class="text-[11px] text-slate-300 leading-relaxed">
              在「3. 右側資訊欄」的時間表區塊中，可自由開關「顯示路線號碼框」與「保留框內細白線」，並設定服務時段及班次(分鐘)。
            </p>
          </div>
          <button onclick="quickJumpTo('info', 'sec-timetable')" class="px-2.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-[10px] whitespace-nowrap shrink-0 transition">
            前往時間表設定 ➔
          </button>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="px-5 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
        <button onclick="closeTutorialModal()" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition">
          關閉視窗（繼續當前編輯）
        </button>
        <div class="flex items-center gap-2">
          ${isTempScratchMode ? `
            <button onclick="exitTempScratchMode(); closeTutorialModal();" class="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition">
              <i class="fa-solid fa-rotate-left"></i>
              <span>已嘗試製作路線紙并返回</span>
            </button>
          ` : `
            <button onclick="startTempScratchMode()" class="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <span>開始嘗試製作路線紙</span>
            </button>
          `}
        </div>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

let isQuickJumpOpen = false;

function toggleQuickJumpPanel(forceOpen = null) {
  isQuickJumpOpen = forceOpen !== null ? Boolean(forceOpen) : !isQuickJumpOpen;
  renderEditorSidebar();
  if (isQuickJumpOpen) {
    const contentEl = document.getElementById('editor-content');
    if (contentEl) contentEl.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function quickJumpTo(tabName, targetId = null, stopIdToExpand = null) {
  if (!tabName) return;
  if (stopIdToExpand) {
    expandedStopId = stopIdToExpand;
    stopSearchQuery = '';
  }
  closeTutorialModal();
  switchEditorTab(tabName, targetId);
}

function closeTutorialModal() {
  const modal = document.getElementById('tutorial-modal-overlay');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function renderColorsAndSvgTabHTML() {
  const L = appConfig.layout;
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  const routeBoxes = ensureHeaderRouteBoxesSynced();

  const curCorridorBg = C.corridorSvgBg || C.routeLineColor || '#0d8556';
  const curCorridorFg = C.corridorSvgFg || '#ffffff';
  const curTunnelBg = C.tunnelSvgBg || C.routeLineColor || '#0d8556';
  const curTunnelFg = C.tunnelSvgFg || '#ffffff';
  const curMtrBg = C.mtrSvgBg || '#A81428';
  const curMtrFg = C.mtrSvgFg || '#ffffff';
  const curPromoBg = C.promoBannerBg || C.introBannerBg || '#65b741';
  const curClockFg = C.fastClockSvgColor || '#ffffff';
  const curInterchangeBg = C.interchangeDefaultBg || C.introBannerBg || '#65b741';
  const curNodeFill = C.nodeFillColor || '#ffffff';

  // 1B. 頂部「路線號碼框 #X」獨立配色列表 (已補上刪除按鈕)
  const headerRouteBoxesColorsHTML = routeBoxes.map((box, bIdx) => {
    const boxBg = box.bgColor || C.routeBoxBg || '#0d8556';
    const boxText = box.textColor || C.routeBoxText || '#ffffff';
    return `
      <div class="bg-slate-900/85 p-2.5 rounded-lg border border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            <span class="px-2 py-0.5 rounded text-[10px] font-black shadow shrink-0" style="background:${boxBg}; color:${boxText};">${esc(box.routeNumber || `#${bIdx + 1}`)}</span>
            <span class="text-[11px] font-bold text-emerald-300 truncate">路線號碼框 #${bIdx + 1} (${esc(box.routeNumber || '主路線')})</span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <label class="flex items-center gap-1 text-[10px] text-slate-300 cursor-pointer">
              <input type="checkbox" ${box.innerWhiteLine !== false ? 'checked' : ''} onchange="updateHeaderRouteBox(${bIdx}, 'innerWhiteLine', this.checked)" class="rounded accent-emerald-500" />
              <span>保留框內細白線</span>
            </label>
            ${routeBoxes.length > 1 ? `
              <button type="button" onclick="removeHeaderRouteBox(${bIdx})" class="px-1.5 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] transition" title="刪除此路線號碼框">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[9px] text-slate-400 mb-0.5">此路線號碼框底色</label>
            <div class="flex items-center gap-1">
              <input type="color" value="${boxBg}" oninput="updateHeaderRouteBox(${bIdx}, 'bgColor', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
              <input type="text" placeholder="預設跟隨主框色" value="${esc(box.bgColor || '')}" onchange="updateHeaderRouteBox(${bIdx}, 'bgColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
            </div>
          </div>
          <div>
            <label class="block text-[9px] text-slate-400 mb-0.5">此路線號碼框字色</label>
            <div class="flex items-center gap-1">
              <input type="color" value="${boxText}" oninput="updateHeaderRouteBox(${bIdx}, 'textColor', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
              <input type="text" placeholder="預設白字 (#ffffff)" value="${esc(box.textColor || '')}" onchange="updateHeaderRouteBox(${bIdx}, 'textColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 4. 各「班次路線 #X」完整獨立配色列表
  const variantPalettesHTML = variants.map((v, vIdx) => {
    const vMain = v.color || C.routeLineColor || '#0d8556';
    const vNode = v.nodeColor || vMain;
    const vNodeFill = v.nodeFillColor || curNodeFill;
    const vCorridorBg = v.corridorSvgBg || vMain;
    const vCorridorFg = v.corridorSvgFg || curCorridorFg;
    const vTunnelBg = v.tunnelSvgBg || vMain;
    const vTunnelFg = v.tunnelSvgFg || curTunnelFg;
    const vPromoBg = v.promoBg || curPromoBg;
    const vInterchangeBg = v.interchangeBg || curInterchangeBg;
    const vRouteBoxBg = v.routeBoxColor || C.routeBoxBg || vMain;
    const vRouteBoxText = v.routeBoxTextColor || C.routeBoxText || '#ffffff';
    const vOriginDestBg = v.originDestBg || C.originDestBg || vMain;
    const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';

    const vOriginHeaderBg = v.originHeaderBg || C.originHeaderBg || vMain;
    const vOriginHeaderText = v.originHeaderText || C.originHeaderText || 'white';
    const vHeadwayHeaderBg = v.headwayHeaderBg || C.headwayHeaderBg || vMain;
    const vHeadwayHeaderText = v.headwayHeaderText || C.headwayHeaderText || 'white';
    const vThickLineColor = v.timetableThickLineColor || vMain;
    const vClockContainerBg = v.clockContainerBg || v.dateHeaderBg || C.evenZoneBg || '#dcedc8';
    const vDateHeaderBg = v.dateHeaderBg || vClockContainerBg;
    const vClockSvgColor = v.clockSvgColor || vMain;

    return `
      <div id="sec-colors-variant-${vIdx}" class="bg-slate-900/90 border border-slate-700 rounded-xl p-3 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2 gap-2">
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 shadow" style="background:${vMain}; color:${vBadgeTextColor};">${vIdx + 1}</span>
            <span class="font-bold text-emerald-300 text-xs truncate">班次路線 #${vIdx + 1}：${esc(v.name)}</span>
            <span class="inline-flex items-center gap-1 shrink-0">
              ${createHkTrafficSign353Svg(14, vCorridorBg, vCorridorFg)}
              ${createHkTunnelSvg(14, vTunnelBg, vTunnelFg)}
            </span>
          </div>
          <button onclick="syncVariantPaletteToMain(${vIdx})" class="px-2 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[10px] font-bold shrink-0 transition">
            一鍵同步至此班次主色
          </button>
        </div>

        <!-- 子區塊 A：此班次路線圖、圓圈編號、站點與 SVG 圖標顏色 -->
        <div class="space-y-2">
          <div class="text-[10px] font-bold text-emerald-400">A. 班次路線 #${vIdx + 1}：路線圖線條、圓圈編號、站點與 SVG 圖標顏色</div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div>
              <label class="block text-[9px] text-amber-300 font-bold mb-0.5">1. 班次線條及圓圈底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vMain}" oninput="updateVariantColorPalette(${vIdx}, 'color', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vMain}" onchange="updateVariantColorPalette(${vIdx}, 'color', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-amber-300 font-bold mb-0.5">2. 圓圈班次號碼字色</label>
              <select onchange="updateVariantColorPalette(${vIdx}, 'badgeText', this.value, true)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-slate-100">
                <option value="white" ${v.badgeText !== 'black' ? 'selected' : ''}>白色字 (#ffffff)</option>
                <option value="black" ${v.badgeText === 'black' ? 'selected' : ''}>黑色字 (#111827)</option>
              </select>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">3. 站點圓圈邊框色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vNode}" oninput="updateVariantColorPalette(${vIdx}, 'nodeColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vNode}" onchange="updateVariantColorPalette(${vIdx}, 'nodeColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">4. 站點圓心填充色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vNodeFill}" oninput="updateVariantColorPalette(${vIdx}, 'nodeFillColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vNodeFill}" onchange="updateVariantColorPalette(${vIdx}, 'nodeFillColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">5. 純色底站點背景</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vOriginDestBg}" oninput="updateVariantColorPalette(${vIdx}, 'originDestBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vOriginDestBg}" onchange="updateVariantColorPalette(${vIdx}, 'originDestBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-emerald-300 mb-0.5">6. 走廊 353 SVG 底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vCorridorBg}" oninput="updateVariantColorPalette(${vIdx}, 'corridorSvgBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vCorridorBg}" onchange="updateVariantColorPalette(${vIdx}, 'corridorSvgBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-cyan-300 mb-0.5">7. 隧道 SVG 底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vTunnelBg}" oninput="updateVariantColorPalette(${vIdx}, 'tunnelSvgBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vTunnelBg}" onchange="updateVariantColorPalette(${vIdx}, 'tunnelSvgBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-lime-300 mb-0.5">8. 時間宣傳框底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vPromoBg}" oninput="updateVariantColorPalette(${vIdx}, 'promoBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vPromoBg}" onchange="updateVariantColorPalette(${vIdx}, 'promoBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-sky-300 mb-0.5">9. 轉乘圓角框主色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vInterchangeBg}" oninput="updateVariantColorPalette(${vIdx}, 'interchangeBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vInterchangeBg}" onchange="updateVariantColorPalette(${vIdx}, 'interchangeBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>
          </div>
        </div>

        <!-- 子區塊 B：此班次時間表路線框、標題、粗線與時鐘 SVG 配色 -->
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <div class="text-[10px] font-bold text-sky-400">B. 班次路線 #${vIdx + 1}：時間表路線號碼框、標題、粗線與時鐘 SVG 配色</div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-amber-300">時間表此班次路線號碼及提及路線底色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vRouteBoxBg}" oninput="updateVariantColorPalette(${vIdx}, 'routeBoxColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vRouteBoxBg}" onchange="updateVariantColorPalette(${vIdx}, 'routeBoxColor', this.value, true)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-amber-300">時間表此班次路線號碼及提及路線字色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vRouteBoxText}" oninput="updateVariantColorPalette(${vIdx}, 'routeBoxTextColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vRouteBoxText}" onchange="updateVariantColorPalette(${vIdx}, 'routeBoxTextColor', this.value, true)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-emerald-300">「XX開出」顏色底與字色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vOriginHeaderBg}" oninput="updateVariantColorPalette(${vIdx}, 'originHeaderBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vOriginHeaderBg}" onchange="updateVariantColorPalette(${vIdx}, 'originHeaderBg', this.value, true)" class="w-16 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
                <select onchange="updateVariantColorPalette(${vIdx}, 'originHeaderText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[10px]">
                  <option value="white" ${vOriginHeaderText !== 'black' ? 'selected' : ''}>白色字</option>
                  <option value="black" ${vOriginHeaderText === 'black' ? 'selected' : ''}>黑色字</option>
                </select>
              </div>
            </div>

            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-emerald-300">「班次(分鐘)」標題背景與字色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vHeadwayHeaderBg}" oninput="updateVariantColorPalette(${vIdx}, 'headwayHeaderBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vHeadwayHeaderBg}" onchange="updateVariantColorPalette(${vIdx}, 'headwayHeaderBg', this.value, true)" class="w-16 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
                <select onchange="updateVariantColorPalette(${vIdx}, 'headwayHeaderText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[10px]">
                  <option value="white" ${vHeadwayHeaderText !== 'black' ? 'selected' : ''}>白色字</option>
                  <option value="black" ${vHeadwayHeaderText === 'black' ? 'selected' : ''}>黑色字</option>
                </select>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              <label class="block text-[9px] text-amber-300 font-bold mb-0.5">日期/時鐘上方粗線</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vThickLineColor}" oninput="updateVariantColorPalette(${vIdx}, 'timetableThickLineColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vThickLineColor}" onchange="updateVariantColorPalette(${vIdx}, 'timetableThickLineColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-sky-300 font-bold mb-0.5">時鐘 SVG 背景顏色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vClockContainerBg}" oninput="updateVariantColorPalette(${vIdx}, 'clockContainerBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vClockContainerBg}" onchange="updateVariantColorPalette(${vIdx}, 'clockContainerBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-sky-300 mb-0.5">時鐘 SVG 圖標顏色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vClockSvgColor}" oninput="updateVariantColorPalette(${vIdx}, 'clockSvgColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vClockSvgColor}" onchange="updateVariantColorPalette(${vIdx}, 'clockSvgColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">日期列背景顏色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vDateHeaderBg}" oninput="updateVariantColorPalette(${vIdx}, 'dateHeaderBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vDateHeaderBg}" onchange="updateVariantColorPalette(${vIdx}, 'dateHeaderBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- 第一區：路線主色調、右側標題／外框／橫線 及「路線號碼框 #X」配色 -->
    <div id="sec-colors-header-boxes" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-fill-drip text-sky-400"></i>
          <span>1. 路線主色調、右側標題／外框 及「路線號碼框 #X」配色</span>
        </h3>
        <button onclick="syncAllColorsToPrimary()" class="px-2 py-1 rounded bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold transition">
          一鍵全部同步至主題底色
        </button>
      </div>
      <div class="text-[10px] text-slate-400">
        「主題底色」同時控制主路線、右側模塊標題、右側分隔橫線、八達通分段收費外框及巴士轉乘計劃外框。
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <div>
          <label class="block text-[10px] text-emerald-300 font-bold mb-1">主題底色 (含橫線及外框)</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.routeLineColor}" oninput="updateColor('routeLineColor', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.routeLineColor}" onchange="updateColor('routeLineColor', this.value); renderEditorSidebar();" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線號碼大框預設底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.routeBoxBg}" oninput="updateColor('routeBoxBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.routeBoxBg}" onchange="updateColor('routeBoxBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">目的地獨立框底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.destBoxBg}" oninput="updateColor('destBoxBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.destBoxBg}" onchange="updateColor('destBoxBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">途徑方向框底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.viaBoxBg}" oninput="updateColor('viaBoxBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.viaBoxBg}" onchange="updateColor('viaBoxBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線簡介橫幅底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.introBannerBg}" oninput="updateColor('introBannerBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.introBannerBg}" onchange="updateColor('introBannerBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
      </div>

      <!-- 1B: 頂部各「路線號碼框 #X」獨立顏色設定 -->
      <div class="pt-2.5 border-t border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-emerald-300"><i class="fa-solid fa-bus mr-1"></i>頂部各「路線號碼框 #X」獨立配色</span>
          <button onclick="addHeaderRouteBox()" class="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition">+ 新增路線號碼框</button>
        </div>
        <div class="space-y-2">
          ${headerRouteBoxesColorsHTML}
        </div>
      </div>
    </div>

    <!-- 第二區：純色底站點、雙數分段底色與路線圖標籤顏色 -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-layer-group text-amber-400"></i>
          <span>2. 純色底站點、雙數分段底色與站點標籤顏色</span>
        </h3>
        <label class="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" ${C.evenZoneBgEnabled ? 'checked' : ''} onchange="updateColor('evenZoneBgEnabled', this.checked)" class="rounded accent-emerald-500" />
          <span class="text-[11px] text-emerald-300 font-medium">啟用雙數分段底色</span>
        </label>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70">
          <label class="block text-[11px] text-slate-300 font-medium mb-1.5">雙數分段收費淺色背景</label>
          <div class="flex items-center gap-2">
            <input type="color" value="${C.evenZoneBg}" oninput="updateColor('evenZoneBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent border-0" />
            <input type="text" value="${C.evenZoneBg}" onchange="updateColor('evenZoneBg', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs font-mono" />
          </div>
          <label class="flex items-center gap-1.5 mt-2 text-[10px] text-slate-300 cursor-pointer">
            <input type="checkbox" ${L.evenZoneCoverAllStops ? 'checked' : ''} onchange="updateLayout('evenZoneCoverAllStops', this.checked)" class="rounded accent-emerald-500" />
            <span>一整個 Container 包覆該分段所有站</span>
          </label>
        </div>

        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70">
          <label class="block text-[11px] text-slate-300 font-medium mb-1.5">地標標籤 (淺灰底黑字)</label>
          <div class="flex items-center gap-2">
            <input type="color" value="${C.landmarkBg}" oninput="updateColor('landmarkBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent border-0" title="地標背景色" />
            <input type="color" value="${C.landmarkText}" oninput="updateColor('landmarkText', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent border-0" title="地標文字色" />
            <span class="text-[10px] text-slate-400">背景 / 文字</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 space-y-2">
          <div class="text-[11px] font-bold text-slate-200">純色底站點樣式</div>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.originDestBg}" oninput="updateColor('originDestBg', this.value)" class="w-7 h-6 rounded cursor-pointer bg-transparent" />
            <select onchange="updateColor('originDestText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px]">
              <option value="white" ${C.originDestText === 'white' ? 'selected' : ''}>白色字</option>
              <option value="black" ${C.originDestText === 'black' ? 'selected' : ''}>黑色字</option>
            </select>
          </div>
        </div>

        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 space-y-2">
          <div class="text-[11px] font-bold text-slate-200">區域名字標籤</div>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.districtBg}" oninput="updateColor('districtBg', this.value)" class="w-7 h-6 rounded cursor-pointer bg-transparent" />
            <select onchange="updateColor('districtText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px]">
              <option value="white" ${C.districtText === 'white' ? 'selected' : ''}>白色字</option>
              <option value="black" ${C.districtText === 'black' ? 'selected' : ''}>黑色字</option>
            </select>
          </div>
        </div>

        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 space-y-2">
          <div class="text-[11px] font-bold text-slate-200">分段收費 (粗體)</div>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.fareBg}" oninput="updateColor('fareBg', this.value)" class="w-7 h-6 rounded cursor-pointer bg-transparent" />
            <select onchange="updateColor('fareText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px]">
              <option value="white" ${C.fareText === 'white' ? 'selected' : ''}>白色粗體</option>
              <option value="black" ${C.fareText === 'black' ? 'selected' : ''}>黑色粗體</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- 第三區：全局所有 SVG 圖標與宣傳框預設顏色 -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-icons text-emerald-400"></i>
          <span>3. 全局 SVG 圖標與宣傳／轉乘框預設配色</span>
        </h3>
        <div class="flex items-center gap-1.5">
          ${createHkTrafficSign353Svg(15, curCorridorBg, curCorridorFg)}
          ${createHkTunnelSvg(15, curTunnelBg, curTunnelFg)}
          ${createMtrLogoSvg(13, curMtrBg, curMtrFg)}
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-emerald-300 font-bold mb-1">走廊 353 SVG 底色 / 圖案色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curCorridorBg}" oninput="updateColor('corridorSvgBg', this.value)" title="走廊 SVG 背景色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curCorridorFg}" oninput="updateColor('corridorSvgFg', this.value)" title="走廊 SVG 圖案色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" placeholder="自動跟隨主色" value="${esc(C.corridorSvgBg || '')}" onchange="updateColor('corridorSvgBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-cyan-300 font-bold mb-1">隧道 Tunnel SVG 底色 / 圖案色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curTunnelBg}" oninput="updateColor('tunnelSvgBg', this.value)" title="隧道 SVG 背景色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curTunnelFg}" oninput="updateColor('tunnelSvgFg', this.value)" title="隧道 SVG 圖案色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" placeholder="自動跟隨主色" value="${esc(C.tunnelSvgBg || '')}" onchange="updateColor('tunnelSvgBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-rose-300 font-bold mb-1">港鐵 MTR SVG 底色 / 符號色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curMtrBg}" oninput="updateColor('mtrSvgBg', this.value)" title="港鐵 SVG 底色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curMtrFg}" oninput="updateColor('mtrSvgFg', this.value)" title="港鐵 SVG 線條色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curMtrBg}" onchange="updateColor('mtrSvgBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-lime-300 font-bold mb-1">時間宣傳框底色 / 秒錶 SVG 色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curPromoBg}" oninput="updateColor('promoBannerBg', this.value)" title="宣傳框預設底色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curClockFg}" oninput="updateColor('fastClockSvgColor', this.value)" title="秒錶 SVG 顏色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curPromoBg}" onchange="updateColor('promoBannerBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-sky-300 font-bold mb-1">轉乘圓角框預設主色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curInterchangeBg}" oninput="updateColor('interchangeDefaultBg', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curInterchangeBg}" onchange="updateColor('interchangeDefaultBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-slate-300 font-bold mb-1">站點圓圈 SVG 圓心填充色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curNodeFill}" oninput="updateColor('nodeFillColor', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curNodeFill}" onchange="updateColor('nodeFillColor', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>
      </div>
    </div>

    <!-- 第四區：各「班次路線 #X」獨立顏色與 SVG 配色設定 -->
    <div class="bg-slate-800/70 border border-emerald-500/50 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-code-branch text-emerald-400"></i>
          <span>4. 各「班次路線 #X」獨立顏色、SVG 與時間表配色設定</span>
        </h3>
        <button onclick="addServiceVariant()" class="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition">
          + 新增班次
        </button>
      </div>
      <div class="text-[10px] text-slate-400">
        可為每個班次獨立設定路線圖線條及圓圈色、圓圈號碼字色、SVG 圖標色、時間表路線號碼框底色與字色、「XX開出」、「班次(分鐘)」、上方粗線與時鐘 SVG 顏色。
      </div>
      <div class="space-y-2.5">
        ${variantPalettesHTML}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// TAB 5: 集中管理所有全局顏色、所有 SVG 圖標顏色 及 各班次獨立專屬配色
// --------------------------------------------------------------------------
// 香港常用走廊與隧道快捷預設清單（切換至走廊或隧道時可一鍵填入）
const HK_CORRIDOR_PRESETS = [
  { zh: '東區走廊', en: 'Island Eastern Corridor' },
  { zh: '西九龍走廊', en: 'West Kowloon Corridor' },
  { zh: '西九龍公路', en: 'West Kowloon Highway' },
  { zh: '荃灣路', en: 'Tsuen Wan Rd' },
  { zh: '屯門公路', en: 'Tuen Mun Rd' },
  { zh: '吐露港公路', en: 'Tolo Highway' },
  { zh: '粉嶺公路', en: 'Fanling Highway' },
  { zh: '元朗公路', en: 'Yuen Long Highway' },
  { zh: '北大嶼山公路', en: 'North Lantau Highway' },
  { zh: '青葵公路', en: 'Tsing Kwai Highway' }
];

const HK_TUNNEL_PRESETS = [
  { zh: '西區海底隧道', en: 'Western Harbour Crossing' },
  { zh: '海底隧道', en: 'Cross Harbour Tunnel' },
  { zh: '東區海底隧道', en: 'Eastern Harbour Tunnel' },
  { zh: '大欖隧道', en: 'Tai Lam Tunnel' },
  { zh: '獅子山隧道', en: 'Lion Rock Tunnel' },
  { zh: '大老山隧道', en: "Tate's Cairn Tunnel" },
  { zh: '尖山隧道及沙田嶺隧道', en: 'Eagle\'s Nest & Sha Tin Heights Tunnels' },
  { zh: '城門隧道', en: 'Shing Mun Tunnels' },
  { zh: '香港仔隧道', en: 'Aberdeen Tunnel' },
  { zh: '將軍澳隧道', en: 'Tseung Kwan O Tunnel' },
  { zh: '將軍澳－藍田隧道', en: 'Tseung Kwan O - Lam Tin Tunnel' },
  { zh: '長青隧道', en: 'Cheung Tsing Tunnel' }
];

// 展開或收合指定的 stop-card-XX
function toggleStopExpand(stopId, event = null) {
  if (event) event.stopPropagation();
  expandedStopId = (expandedStopId === stopId) ? null : stopId;
  renderEditorSidebar();
}

// 從右側 A4 預覽畫布點擊分站時，自動跳轉並展開對應的 stop-card-XX
function jumpToStopEditor(stopId) {
  expandedStopId = stopId;
  currentTab = 'stops';
  switchEditorTab('stops');
  requestAnimationFrame(() => {
    const cardEl = document.getElementById(`stop-card-${stopId}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardEl.classList.add('ring-2', 'ring-emerald-400');
      setTimeout(() => cardEl.classList.remove('ring-2', 'ring-emerald-400'), 1400);
    }
  });
}

// 更新分站一般欄位（保持輸入焦點流暢）
function updateStopField(sIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);

  if (['hasMtr', 'manualBreakAfter', 'contFromLeft', 'contToRight', 'ignoreLandmarkZh', 'ignoreLandmarkEn', 'ignoreLandmarkLimit', 'hasTimePromo'].includes(field)) {
    stop[field] = Boolean(val);
    if (field === 'ignoreLandmarkLimit') {
      stop.ignoreLandmarkZh = Boolean(val);
      stop.ignoreLandmarkEn = Boolean(val);
    }
  } else if (['coloredBoxExtraPx', 'corridorPipeHeightPx', 'timePromoScale'].includes(field)) {
    stop[field] = Number(val) || 0;
  } else {
    stop[field] = val;
  }

  // 即時更新卡片頂部標題摘要文字（不重繪整個側邊欄，確保打字不中斷）
  if (field === 'zh' || field === 'en') {
    const titleEl = document.getElementById(`stop-card-title-${stop.id}`);
    if (titleEl) {
      titleEl.textContent = String(stop.zh || stop.en || '未命名分站').replace(/\\n/g, ' ').replace(/\r?\n|\|/g, ' ');
    }
  }

  renderA4Sheet();
  if (refreshSidebar) {
    renderEditorSidebar();
  }
}

// 更新分站於各班次的停靠狀態 ('stop' 停靠 | 'bypass' 飛站直過 | 'none' 不經此段)
function updateStopVariantStatus(sIdx, variantId, statusVal) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  if (!stop.variantStatus || typeof stop.variantStatus !== 'object') {
    stop.variantStatus = {};
  }
  stop.variantStatus[variantId] = statusVal;
  renderA4Sheet();
  renderEditorSidebar();
}

// 更新分站於特定班次 (或全部班次) 的站點角色類型 ('origin' | 'normal' | 'colored' | 'destination' | 'origin_number_only')
function updateStopVariantType(sIdx, variantIdOrAll, typeVal) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  if (!stop.variantType || typeof stop.variantType !== 'object') {
    stop.variantType = {};
  }

  // 若當前為走廊或隧道模式而用戶選擇了站點角色，自動切換回「站點」模式
  if (!['corridor', 'tunnel'].includes(typeVal)) {
    stop.hasCorridor = false;
    stop.isCorridor = false;
    stop.hasTunnel = false;
    stop.isTunnel = false;
    stop._savedStopType = typeVal;
  }

  if (variantIdOrAll === '__all__') {
    stop.type = typeVal;
    (appConfig.variants || []).forEach(v => {
      stop.variantType[v.id] = typeVal;
    });
  } else {
    stop.variantType[variantIdOrAll] = typeVal;
    if (variantIdOrAll === appConfig.variants?.[0]?.id) {
      stop.type = typeVal;
    }
  }

  renderA4Sheet();
  renderEditorSidebar();
}

// 複製指定分站
function duplicateStopItem(sIdx, event = null) {
  if (event) event.stopPropagation();
  const src = appConfig.stops[sIdx];
  if (!src) return;
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = 's_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  appConfig.stops.splice(sIdx + 1, 0, copy);
  expandedStopId = copy.id;
  if (appConfig.layout.autoScaleByStopCount) {
    applyAutoStopTypographyAndGap(false);
  }
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已複製 #${sIdx + 1}「${src.zh || ''}」`);
}

// 刪除指定分站
function removeStopItem(sIdx, event = null) {
  if (event) event.stopPropagation();
  if (appConfig.stops.length <= 2) {
    showToast('路線至少需保留 2 個站點', 'rose');
    return;
  }
  const removed = appConfig.stops.splice(sIdx, 1)[0];
  if (expandedStopId === removed?.id) {
    expandedStopId = appConfig.stops[Math.min(sIdx, appConfig.stops.length - 1)]?.id || null;
  }
  if (appConfig.layout.autoScaleByStopCount) {
    applyAutoStopTypographyAndGap(false);
  }
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已刪除「${removed?.zh || '分站'}」`);
}

// 上下移動分站順序
function moveStopItem(sIdx, dir, event = null) {
  if (event) event.stopPropagation();
  const targetIdx = sIdx + dir;
  if (targetIdx < 0 || targetIdx >= appConfig.stops.length) return;
  const temp = appConfig.stops[sIdx];
  appConfig.stops[sIdx] = appConfig.stops[targetIdx];
  appConfig.stops[targetIdx] = temp;
  renderA4Sheet();
  renderEditorSidebar();
}

// 渲染單張 `stop-card-XX` 站點卡片（完整整合：站點/走廊/隧道切換、地區 Label 大小控制、無字續欄箭嘴、分段底色與底線獨立控制、宣傳橫幅及轉乘框）
function renderStopCardItemHTML(stop, sIdx, totalStops) {
  ensureStopLandmarkAndIgnoreProps(stop);
  const C = appConfig.colors || {};
  const variants = appConfig.variants || [];
  const isExpanded = expandedStopId === stop.id;
  const nodeKind = getStopNodeKind(stop); // 'stop' | 'corridor' | 'tunnel'
  const isColoredActive = nodeKind === 'stop' && isStopColoredBgActive(stop, sIdx, totalStops);
  const hasDistrict = Boolean((stop.districtZh && stop.districtZh.trim()) || (stop.districtEn && stop.districtEn.trim()));

  const cleanTitle = String(stop.zh || stop.en || '未命名分站')
    .replace(/\\n/g, ' ')
    .replace(/\r?\n|\|/g, ' ');

  let miniIconHTML = '';
  if (nodeKind === 'corridor') {
    miniIconHTML = createHkTrafficSign353Svg(15, C.corridorSvgBg || C.routeLineColor, '#ffffff');
  } else if (nodeKind === 'tunnel') {
    miniIconHTML = createHkTunnelSvg(15, C.tunnelSvgBg || C.routeLineColor, '#ffffff');
  } else {
    const isTerm = stop.type === 'origin' || stop.type === 'destination';
    miniIconHTML = createSvgStopNode({
      kind: isTerm ? 'terminal' : 'normal',
      size: 11,
      primaryColor: C.routeLineColor || '#0d8556',
      fillColor: '#ffffff'
    });
  }

  const headerKindSwitcherHTML = `
    <div onclick="event.stopPropagation()" class="inline-flex items-center bg-slate-950/90 p-0.5 rounded-lg border border-slate-700/80 shrink-0" title="隨意切換此項目為：站點 / 走廊 / 隧道">
      <button
        type="button"
        onclick="setStopNodeKind(${sIdx}, 'stop', event)"
        class="px-1.5 py-0.5 rounded-md text-[9.5px] font-bold transition ${
          nodeKind === 'stop'
            ? 'bg-emerald-600 text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }"
      >站點</button>
      <button
        type="button"
        onclick="setStopNodeKind(${sIdx}, 'corridor', event)"
        class="px-1.5 py-0.5 rounded-md text-[9.5px] font-bold transition ${
          nodeKind === 'corridor'
            ? 'bg-amber-500 text-slate-950 shadow-sm'
            : 'text-slate-400 hover:text-amber-300'
        }"
      >走廊</button>
      <button
        type="button"
        onclick="setStopNodeKind(${sIdx}, 'tunnel', event)"
        class="px-1.5 py-0.5 rounded-md text-[9.5px] font-bold transition ${
          nodeKind === 'tunnel'
            ? 'bg-sky-500 text-slate-950 shadow-sm'
            : 'text-slate-400 hover:text-sky-300'
        }"
      >隧道</button>
    </div>
  `;

  if (!isExpanded) {
    return `
      <div
        id="stop-card-${stop.id}"
        onclick="toggleStopExpand('${stop.id}', event)"
        class="group bg-slate-800/80 hover:bg-slate-800 border ${
          nodeKind === 'corridor'
            ? 'border-amber-500/40'
            : nodeKind === 'tunnel'
              ? 'border-sky-500/40'
              : stop.manualBreakAfter
                ? 'border-purple-500/50'
                : 'border-slate-700/80'
        } rounded-xl px-2.5 py-2 cursor-pointer transition flex items-center justify-between gap-2"
      >
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="w-5 text-[10px] font-mono text-slate-400 text-right shrink-0">${sIdx + 1}.</span>
          <div class="flex items-center justify-center shrink-0">${miniIconHTML}</div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span id="stop-card-title-${stop.id}" class="font-bold text-xs text-slate-100 truncate">${esc(cleanTitle)}</span>
              ${stop.districtZh ? `<span class="px-1.5 py-0.2 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[9px] font-bold">${esc(stop.districtZh)}</span>` : ''}
              ${stop.fare ? `<span class="px-1.5 py-0.2 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9px] font-black font-mono">${esc(stop.fare)}</span>` : ''}
              ${stop.hasMtr ? `<span class="px-1 py-0.2 rounded bg-rose-600/30 text-rose-200 text-[8.5px] font-bold">MTR</span>` : ''}
              ${stop.hasTimePromo ? `<span class="px-1.5 py-0.2 rounded bg-lime-500/25 text-lime-300 text-[8.5px] font-bold">⏱️${esc(stop.timePromoMins || '8')}分</span>` : ''}
              ${stop.hasInterchangeBox ? `<span class="px-1.5 py-0.2 rounded bg-teal-500/25 text-teal-300 text-[8.5px] font-bold">轉乘框</span>` : ''}
              ${stop.contFromLeft ? `<span class="px-1.5 py-0.2 rounded bg-sky-500/25 text-sky-300 text-[8.5px] font-bold">▲上續欄</span>` : ''}
              ${stop.contToRight ? `<span class="px-1.5 py-0.2 rounded bg-sky-500/25 text-sky-300 text-[8.5px] font-bold">▼下接欄</span>` : ''}
              ${stop.manualBreakAfter ? `<span class="px-1.5 py-0.2 rounded bg-purple-500/25 text-purple-300 text-[8.5px] font-bold">此站後換欄</span>` : ''}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 shrink-0">
          ${headerKindSwitcherHTML}
          <div class="hidden sm:flex items-center gap-0.5" onclick="event.stopPropagation()">
            <button type="button" onclick="moveStopItem(${sIdx}, -1, event)" ${sIdx === 0 ? 'disabled' : ''} class="w-5 h-5 rounded bg-slate-900/80 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center text-[9px]" title="上移">
              <i class="fa-solid fa-chevron-up"></i>
            </button>
            <button type="button" onclick="moveStopItem(${sIdx}, 1, event)" ${sIdx === totalStops - 1 ? 'disabled' : ''} class="w-5 h-5 rounded bg-slate-900/80 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center text-[9px]" title="下移">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <button type="button" onclick="removeStopItem(${sIdx}, event)" class="w-5 h-5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center justify-center text-[9px] transition" title="刪除">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <i class="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
        </div>
      </div>
    `;
  }

  const quickPresetsList = nodeKind === 'corridor'
    ? HK_CORRIDOR_PRESETS
    : (nodeKind === 'tunnel' ? HK_TUNNEL_PRESETS : []);

  const specialQuickPresetsHTML = quickPresetsList.length > 0 ? `
    <div class="bg-slate-950/90 border ${nodeKind === 'corridor' ? 'border-amber-500/40' : 'border-sky-500/40'} rounded-xl p-2.5 space-y-2">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <span class="text-[10px] font-bold ${nodeKind === 'corridor' ? 'text-amber-300' : 'text-sky-300'} flex items-center gap-1.5">
          <i class="fa-solid fa-bolt"></i>
          <span>一鍵填入香港常用${nodeKind === 'corridor' ? '快速公路 / 走廊' : '隧道'}名稱</span>
        </span>
        <div class="flex items-center gap-1.5 text-[9.5px]">
          <span class="text-slate-400">標誌垂直高度(px)：</span>
          <input
            type="range"
            min="18"
            max="56"
            step="1"
            value="${Number(stop.corridorPipeHeightPx) || 24}"
            oninput="updateStopField(${sIdx}, 'corridorPipeHeightPx', this.value); this.nextElementSibling.value = this.value;"
            class="w-20 accent-amber-500"
          />
          <input
            type="number"
            min="16"
            max="80"
            step="1"
            value="${Number(stop.corridorPipeHeightPx) || 24}"
            oninput="updateStopField(${sIdx}, 'corridorPipeHeightPx', this.value); this.previousElementSibling.value = this.value;"
            class="w-12 bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-300 font-mono text-[10px]"
          />
        </div>
      </div>
      <div class="flex flex-wrap gap-1">
        ${quickPresetsList.map(p => `
          <button
            type="button"
            onclick="applyQuickSpecialPassPreset(${sIdx}, '${esc(p.zh)}', '${esc(p.en)}')"
            class="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-[9.5px] text-slate-200 transition"
          >${esc(p.zh)}</button>
        `).join('')}
      </div>
    </div>
  ` : '';

  const curStopType = stop.type || (sIdx === 0 ? 'origin' : (sIdx === totalStops - 1 ? 'destination' : 'normal'));
  const stopRoleSelectorHTML = nodeKind === 'stop' ? `
    <div class="bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 space-y-2">
      <div class="flex items-center justify-between flex-wrap gap-1.5">
        <span class="text-[10px] font-bold text-slate-200"><i class="fa-solid fa-circle-dot text-emerald-400 mr-1"></i>此巴士站點角色樣式</span>
        <div class="grid grid-cols-4 gap-1 w-full sm:w-auto">
          <button type="button" onclick="updateStopVariantType(${sIdx}, '__all__', 'origin')" class="px-2 py-1 rounded border text-[9.5px] font-bold transition ${curStopType === 'origin' ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'}">起點純色底</button>
          <button type="button" onclick="updateStopVariantType(${sIdx}, '__all__', 'normal')" class="px-2 py-1 rounded border text-[9.5px] font-bold transition ${curStopType === 'normal' ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'}">普通分站</button>
          <button type="button" onclick="updateStopVariantType(${sIdx}, '__all__', 'colored')" class="px-2 py-1 rounded border text-[9.5px] font-bold transition ${curStopType === 'colored' ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'}">中途純色底</button>
          <button type="button" onclick="updateStopVariantType(${sIdx}, '__all__', 'destination')" class="px-2 py-1 rounded border text-[9.5px] font-bold transition ${curStopType === 'destination' ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'}">終點純色底</button>
        </div>
      </div>

      ${isColoredActive ? `
        <div class="grid grid-cols-12 gap-2 items-center pt-1.5 border-t border-slate-800 text-[10px]">
          <div class="col-span-5">
            <label class="block text-[9px] text-emerald-300 mb-0.5">純色底站名框指定寬度(px/%)</label>
            <input
              type="text"
              value="${esc(stop.coloredBoxWidth || '')}"
              placeholder="自動貼字 或 100%"
              oninput="updateStopField(${sIdx}, 'coloredBoxWidth', this.value)"
              class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-slate-100 font-mono text-[10px]"
            />
          </div>
          <div class="col-span-4">
            <label class="block text-[9px] text-emerald-300 mb-0.5">純色底右側加長(px)</label>
            <input
              type="number"
              min="0"
              max="200"
              step="1"
              value="${Number(stop.coloredBoxExtraPx) || 0}"
              oninput="updateStopField(${sIdx}, 'coloredBoxExtraPx', this.value)"
              class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-emerald-300 font-mono text-[10px]"
            />
          </div>
          <div class="col-span-3 flex flex-col gap-1 pt-3">
            <button type="button" onclick="updateStopField(${sIdx}, 'coloredBoxWidth', '100%', true)" class="py-1 rounded bg-slate-800 hover:bg-slate-700 text-[9px] text-emerald-300 font-bold">設為 100%</button>
          </div>
        </div>
      ` : ''}
    </div>
  ` : '';

  // 地區 Label 大小控制面板（當填寫了地區中英文時展開詳細大小控制）
  const rawDistW = String(stop.districtWidth !== undefined ? stop.districtWidth : '100%').trim();
  const districtSizeControlHTML = hasDistrict ? `
    <div class="bg-slate-950/85 p-2.5 rounded-lg border border-emerald-500/35 space-y-2 text-[10px]">
      <div class="flex items-center justify-between flex-wrap gap-1">
        <span class="font-bold text-emerald-300 text-[10px]"><i class="fa-solid fa-tag mr-1"></i>地區 Label 大小控制</span>
        <div class="flex items-center gap-1">
          <button type="button" onclick="updateStopDistrictField(${sIdx}, 'districtWidth', '100%'); updateStopDistrictField(${sIdx}, 'districtExtraPx', 0, true);" class="px-1.5 py-0.5 rounded text-[9px] ${rawDistW === '100%' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">100% 滿欄</button>
          <button type="button" onclick="updateStopDistrictField(${sIdx}, 'districtWidth', ''); updateStopDistrictField(${sIdx}, 'districtExtraPx', 0, true);" class="px-1.5 py-0.5 rounded text-[9px] ${rawDistW === '' || rawDistW === 'auto' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">自動貼字</button>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <span class="text-[9px] text-slate-300">地區 Label 右側額外加長 (px)</span>
          <input
            id="stop-district-input-districtExtraPx-${sIdx}"
            type="number"
            min="0"
            max="220"
            step="1"
            value="${Number(stop.districtExtraPx) || 0}"
            oninput="updateStopDistrictField(${sIdx}, 'districtExtraPx', this.value)"
            class="w-14 bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]"
          />
        </div>
        <input
          id="stop-district-range-districtExtraPx-${sIdx}"
          type="range"
          min="0"
          max="160"
          step="1"
          value="${Number(stop.districtExtraPx) || 0}"
          oninput="updateStopDistrictField(${sIdx}, 'districtExtraPx', this.value)"
          class="w-full accent-emerald-500"
        />
      </div>

      <div class="grid grid-cols-4 gap-1.5 pt-0.5">
        <div>
          <label class="block text-[9px] text-slate-400 mb-0.5">指定寬度(px/%)</label>
          <input
            id="stop-district-input-districtWidth-${sIdx}"
            type="text"
            value="${esc(stop.districtWidth ?? '100%')}"
            placeholder="100% 或 自動"
            oninput="updateStopDistrictField(${sIdx}, 'districtWidth', this.value)"
            class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center text-slate-100 font-mono text-[9.5px]"
          />
        </div>
        <div>
          <label class="block text-[9px] text-slate-400 mb-0.5">字體大小(px)</label>
          <input
            id="stop-district-input-districtFontSizePx-${sIdx}"
            type="number"
            min="6"
            max="20"
            step="0.5"
            value="${Number(stop.districtFontSizePx) || 10}"
            oninput="updateStopDistrictField(${sIdx}, 'districtFontSizePx', this.value)"
            class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono text-[9.5px]"
          />
        </div>
        <div>
          <label class="block text-[9px] text-slate-400 mb-0.5">上下高度內距</label>
          <input
            id="stop-district-input-districtPadY-${sIdx}"
            type="number"
            min="0"
            max="10"
            step="0.2"
            value="${stop.districtPadY !== undefined ? Number(stop.districtPadY) : 1.2}"
            oninput="updateStopDistrictField(${sIdx}, 'districtPadY', this.value)"
            class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono text-[9.5px]"
          />
        </div>
        <div>
          <label class="block text-[9px] text-slate-400 mb-0.5">左右內距(px)</label>
          <input
            id="stop-district-input-districtPadX-${sIdx}"
            type="number"
            min="0"
            max="24"
            step="0.5"
            value="${stop.districtPadX !== undefined ? Number(stop.districtPadX) : 4.5}"
            oninput="updateStopDistrictField(${sIdx}, 'districtPadX', this.value)"
            class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono text-[9.5px]"
          />
        </div>
      </div>
    </div>
  ` : '';

  const variantsMatrixHTML = variants.length > 1 ? `
    <div class="bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 space-y-1.5">
      <div class="text-[10px] font-bold text-sky-300 flex items-center gap-1.5">
        <i class="fa-solid fa-code-branch"></i>
        <span>各班次在此項目的停靠 / 途徑狀態</span>
      </div>
      <div class="space-y-1">
        ${variants.map((v, vIdx) => {
          const st = (stop.variantStatus && stop.variantStatus[v.id]) || 'stop';
          const vt = getStopVariantType(stop, v.id, sIdx, totalStops);
          return `
            <div class="grid grid-cols-12 gap-1.5 items-center bg-slate-950/80 px-2 py-1 rounded border border-slate-800 text-[10px]">
              <div class="col-span-4 flex items-center gap-1.5 truncate">
                <span class="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black shrink-0" style="background:${v.color}; color:${v.badgeText === 'black' ? '#111827' : '#ffffff'};">${vIdx + 1}</span>
                <span class="truncate text-slate-200 font-bold">${esc(v.name)}</span>
              </div>
              <div class="col-span-4">
                <select onchange="updateStopVariantStatus(${sIdx}, '${v.id}', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-[9.5px] text-slate-100">
                  <option value="stop" ${st === 'stop' ? 'selected' : ''}>● 停靠 / 顯示標誌</option>
                  <option value="bypass" ${st === 'bypass' ? 'selected' : ''}>│ 飛站直過 (只畫線)</option>
                  <option value="none" ${st === 'none' ? 'selected' : ''}>✕ 不經此處 (無路線)</option>
                </select>
              </div>
              <div class="col-span-4">
                ${nodeKind === 'stop' ? `
                  <select onchange="updateStopVariantType(${sIdx}, '${v.id}', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-[9.5px] text-emerald-200">
                    <option value="origin" ${vt === 'origin' ? 'selected' : ''}>起點 (純色底)</option>
                    <option value="origin_number_only" ${vt === 'origin_number_only' ? 'selected' : ''}>起點 (僅編號無底色)</option>
                    <option value="normal" ${vt === 'normal' ? 'selected' : ''}>普通中途站</option>
                    <option value="colored" ${vt === 'colored' ? 'selected' : ''}>純色底中途站</option>
                    <option value="destination" ${vt === 'destination' ? 'selected' : ''}>終點 (純色底)</option>
                  </select>
                ` : `
                  <span class="text-[9px] text-slate-400 block text-center">${nodeKind === 'corridor' ? '🛣️ 走廊標誌' : '🚇 隧道標誌'}</span>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  ` : '';

  return `
    <div id="stop-card-${stop.id}" class="bg-slate-800/95 border-2 ${
      nodeKind === 'corridor'
        ? 'border-amber-500/70'
        : nodeKind === 'tunnel'
          ? 'border-sky-500/70'
          : 'border-emerald-500/70'
    } rounded-xl shadow-xl overflow-hidden transition">
      <!-- 卡片頂部列 -->
      <div
        onclick="toggleStopExpand('${stop.id}', event)"
        class="bg-slate-900/95 px-3 py-2 border-b border-slate-700/80 flex items-center justify-between gap-2 cursor-pointer"
      >
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="px-1.5 py-0.5 rounded bg-emerald-600 text-white font-mono font-black text-[10px]">#${sIdx + 1}</span>
          <span id="stop-card-title-${stop.id}" class="font-bold text-xs text-white truncate">${esc(cleanTitle)}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          ${headerKindSwitcherHTML}
          <button type="button" onclick="duplicateStopItem(${sIdx}, event)" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px]" title="複製此項目">
            <i class="fa-regular fa-copy"></i>
          </button>
          <button type="button" onclick="removeStopItem(${sIdx}, event)" class="px-2 py-0.5 rounded bg-rose-600/25 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] transition" title="刪除此項目">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <i class="fa-solid fa-chevron-up text-xs text-emerald-400 ml-1"></i>
        </div>
      </div>

      <!-- 展開設定主體 -->
      <div class="p-3 space-y-3 text-xs">
        <!-- 1. 視覺化三合一切換器：隨意切換「站點 / 走廊 / 隧道」 -->
        <div class="bg-slate-950/90 p-1.5 rounded-xl border border-slate-700/80 grid grid-cols-3 gap-1.5">
          <button
            type="button"
            onclick="setStopNodeKind(${sIdx}, 'stop', event)"
            class="py-2 px-2 rounded-lg border flex items-center justify-center gap-2 transition ${
              nodeKind === 'stop'
                ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 font-black shadow'
                : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
            }"
          >
            ${createSvgStopNode({ kind: 'normal', size: 12, primaryColor: '#10b981', fillColor: '#ffffff' })}
            <span>巴士站點</span>
          </button>

          <button
            type="button"
            onclick="setStopNodeKind(${sIdx}, 'corridor', event)"
            class="py-2 px-2 rounded-lg border flex items-center justify-center gap-2 transition ${
              nodeKind === 'corridor'
                ? 'bg-amber-500/25 border-amber-400 text-amber-200 font-black shadow'
                : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-amber-200'
            }"
          >
            ${createHkTrafficSign353Svg(15, '#f59e0b', '#ffffff')}
            <span>途徑走廊</span>
          </button>

          <button
            type="button"
            onclick="setStopNodeKind(${sIdx}, 'tunnel', event)"
            class="py-2 px-2 rounded-lg border flex items-center justify-center gap-2 transition ${
              nodeKind === 'tunnel'
                ? 'bg-sky-500/25 border-sky-400 text-sky-200 font-black shadow'
                : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-sky-200'
            }"
          >
            ${createHkTunnelSvg(15, '#0ea5e9', '#ffffff')}
            <span>途徑隧道</span>
          </button>
        </div>

        ${specialQuickPresetsHTML}
        ${stopRoleSelectorHTML}

        <!-- 2. 站點 / 走廊 / 隧道 中英文名稱、地區 Label 大小控制、續欄箭嘴與換欄控制 -->
        <div class="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 space-y-2.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label class="block text-[10px] font-bold text-slate-300 mb-1">
                ${nodeKind === 'corridor' ? '走廊中文名稱' : (nodeKind === 'tunnel' ? '隧道中文名稱' : '中文站名, 街道名稱')}
                <span class="text-[9px] text-slate-400 font-normal">(可用 | 換行)</span>
              </label>
              <input
                type="text"
                value="${esc(stop.zh || '')}"
                oninput="updateStopField(${sIdx}, 'zh', this.value)"
                class="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs font-bold text-white"
              />
            </div>
            <div>
              <label class="block text-[10px] font-bold text-slate-300 mb-1">
                ${nodeKind === 'corridor' ? '走廊英文名稱' : (nodeKind === 'tunnel' ? '隧道英文名稱' : '英文站名, 街道名稱')}
                <span class="text-[9px] text-slate-400 font-normal">(可用 | 換行)</span>
              </label>
              <input
                type="text"
                value="${esc(stop.en || '')}"
                oninput="updateStopField(${sIdx}, 'en', this.value)"
                class="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-100"
              />
            </div>
          </div>

          <!-- 地區標籤輸入與左上符號 -->
          <div class="grid grid-cols-12 gap-2 pt-1.5 border-t border-slate-800 items-end text-[10px]">
            <div class="col-span-4">
              <label class="block text-[9px] text-emerald-300 font-bold mb-0.5">地區標籤 (中文)</label>
              <input
                type="text"
                value="${esc(stop.districtZh || '')}"
                placeholder="如：西九龍"
                oninput="updateStopField(${sIdx}, 'districtZh', this.value)"
                onchange="renderEditorSidebar();"
                class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-slate-100"
              />
            </div>
            <div class="col-span-5">
              <label class="block text-[9px] text-emerald-300 font-bold mb-0.5">地區標籤 (英文)</label>
              <input
                type="text"
                value="${esc(stop.districtEn || '')}"
                placeholder="e.g. West Kowloon"
                oninput="updateStopField(${sIdx}, 'districtEn', this.value)"
                onchange="renderEditorSidebar();"
                class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-slate-100"
              />
            </div>
            <div class="col-span-3">
              <label class="block text-[9px] text-slate-400 mb-0.5">站名左上符號</label>
              <input type="text" value="${esc(stop.symbol || '')}" placeholder="如 * 或 #" oninput="updateStopField(${sIdx}, 'symbol', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center font-black text-amber-300" />
            </div>
          </div>

          <!-- 地區 Label 大小控制面板 -->
          ${districtSizeControlHTML}

          <!-- 港鐵標誌、換欄與「無前後站無字續欄箭嘴」控制區 -->
          <div class="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 space-y-2 text-[10px]">
            <div class="flex flex-wrap items-center gap-3 text-slate-300">
              <label class="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" ${stop.hasMtr ? 'checked' : ''} onchange="updateStopField(${sIdx}, 'hasMtr', this.checked, true)" class="rounded accent-rose-500" />
                <span>顯示港鐵 MTR 標誌</span>
              </label>
              <label class="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" ${stop.manualBreakAfter ? 'checked' : ''} onchange="updateStopField(${sIdx}, 'manualBreakAfter', this.checked, true)" class="rounded accent-purple-500" />
                <span class="text-purple-300 font-bold">在此站後強制換去右欄 (顯示「接右欄 Cont. ➔」)</span>
              </label>
              <label class="flex items-center gap-1.5 cursor-pointer" title="勾選後站名不會被右側灰底地標擠壓換行">
                <input type="checkbox" ${stop.ignoreLandmarkLimit ? 'checked' : ''} onchange="updateStopField(${sIdx}, 'ignoreLandmarkLimit', this.checked, true)" class="rounded accent-sky-500" />
                <span>忽略地標寬度限制 (站名強制不換行)</span>
              </label>
            </div>

            <!-- 新增：上方續欄箭嘴 (無前站亦可用・不顯示文字) & 下方接欄箭嘴 (無後站亦可用・不顯示文字) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-800/90">
              <label class="flex items-center gap-1.5 p-1.5 rounded border cursor-pointer transition ${
                stop.contFromLeft
                  ? 'bg-sky-500/20 border-sky-400 text-sky-200 font-bold'
                  : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
              }">
                <input
                  type="checkbox"
                  ${stop.contFromLeft ? 'checked' : ''}
                  onchange="updateStopField(${sIdx}, 'contFromLeft', this.checked, true)"
                  class="rounded accent-sky-500"
                />
                <span>▲ 上方續欄箭嘴 <span class="text-[9px] opacity-80">(無前站亦可用・不顯示文字)</span></span>
              </label>

              <label class="flex items-center gap-1.5 p-1.5 rounded border cursor-pointer transition ${
                stop.contToRight
                  ? 'bg-sky-500/20 border-sky-400 text-sky-200 font-bold'
                  : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
              }">
                <input
                  type="checkbox"
                  ${stop.contToRight ? 'checked' : ''}
                  onchange="updateStopField(${sIdx}, 'contToRight', this.checked, true)"
                  class="rounded accent-sky-500"
                />
                <span>▼ 下方接欄箭嘴 <span class="text-[9px] opacity-80">(無後站亦可用・不顯示文字)</span></span>
              </label>
            </div>
          </div>
        </div>

        ${variantsMatrixHTML}

        <!-- 3. 分段收費（底色大小 vs 底線長度獨立控制）與周邊地標灰底標籤面板 -->
        ${renderStopFareAndLandmarkEditorHTML(stop, sIdx)}

        <!-- 4. 「顯示『時間 SVG + 約 X 分鐘直達』大字宣傳橫幅」控制面板 -->
        ${renderStopTimePromoEditorHTML(stop, sIdx)}

        <!-- 5. 「『轉乘』圓角矩形框」控制面板 -->
        ${renderStopInterchangeEditorHTML(stop, sIdx)}

        <!-- 底部快捷插入按鈕列 -->
        <div class="flex items-center justify-between gap-1.5 pt-1 border-t border-slate-700/80 text-[10px]">
          <span class="text-slate-400">在此項目下方緊接插入：</span>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="addNewStopItem(${sIdx}, 'stop')" class="px-2 py-1 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white font-bold transition">+ 插入站點</button>
            <button type="button" onclick="addNewStopItem(${sIdx}, 'corridor')" class="px-2 py-1 rounded bg-amber-500/25 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold transition">+ 插入走廊</button>
            <button type="button" onclick="addNewStopItem(${sIdx}, 'tunnel')" class="px-2 py-1 rounded bg-sky-500/25 hover:bg-sky-500 text-sky-300 hover:text-slate-950 font-bold transition">+ 插入隧道</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 渲染「2. 路線圖站點」完整分頁（頂部支援搜尋與一鍵新增站點 / 走廊 / 隧道）
function renderStopsTabHTML() {
  const stops = appConfig.stops || [];
  const query = String(stopSearchQuery || '').trim().toLowerCase();

  const filteredStops = stops
    .map((stop, sIdx) => ({ stop, sIdx }))
    .filter(({ stop, sIdx }) => {
      if (!query) return true;
      return (
        String(sIdx + 1).includes(query) ||
        String(stop.zh || '').toLowerCase().includes(query) ||
        String(stop.en || '').toLowerCase().includes(query) ||
        String(stop.districtZh || '').toLowerCase().includes(query) ||
        String(stop.fare || '').toLowerCase().includes(query)
      );
    });

  return `
    <div class="space-y-3">
      <!-- 頂部搜尋與新增站點 / 走廊 / 隧道工具列 -->
      <div class="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 space-y-2.5 sticky top-0 z-10 backdrop-blur">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <h3 class="font-bold text-slate-100 text-xs flex items-center gap-1.5">
            <i class="fa-solid fa-route text-emerald-400"></i>
            <span>路線圖項目管理 (共 ${stops.length} 項)</span>
          </h3>
          <div class="flex items-center gap-1">
            <button type="button" onclick="addNewStopItem(null, 'stop')" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition shadow-sm">
              + 新增站點
            </button>
            <button type="button" onclick="addNewStopItem(null, 'corridor')" class="px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] transition shadow-sm">
              + 走廊
            </button>
            <button type="button" onclick="addNewStopItem(null, 'tunnel')" class="px-2 py-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-[10px] transition shadow-sm">
              + 隧道
            </button>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div class="relative flex-1">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]"></i>
            <input
              type="text"
              value="${esc(stopSearchQuery)}"
              placeholder="搜尋站名、走廊、隧道、地區或收費..."
              oninput="stopSearchQuery = this.value; renderEditorSidebar();"
              class="w-full bg-slate-900 border border-slate-700 rounded-lg pl-7 pr-6 py-1.5 text-xs text-slate-100"
            />
            ${stopSearchQuery ? `
              <button type="button" onclick="stopSearchQuery = ''; renderEditorSidebar();" class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                <i class="fa-solid fa-xmark"></i>
              </button>
            ` : ''}
          </div>
        </div>
        <div class="text-[10px] text-slate-400">
          💡 提示：每張分站卡片右側均可直接點擊 <strong class="text-emerald-300">站點</strong> / <strong class="text-amber-300">走廊</strong> / <strong class="text-sky-300">隧道</strong> 隨意切換類型。
        </div>
      </div>

      <!-- 站點卡片列表 -->
      <div class="space-y-2">
        ${filteredStops.map(({ stop, sIdx }) => renderStopCardItemHTML(stop, sIdx, stops.length)).join('')}
      </div>
    </div>
  `;
}

// ==========================================================================
// 6. STATE MUTATION HELPERS
// ==========================================================================
// Stops mutations
function toggleExpandStop(stopId) {
  expandedStopId = expandedStopId === stopId ? null : stopId;
  renderEditorSidebar();
}

function filterStopsSearch(val) {
  stopSearchQuery = val;
  renderEditorSidebar();
  const inputs = document.querySelectorAll('#editor-content input[placeholder*="搜尋站名"]');
  if (inputs[0]) {
    inputs[0].focus();
    inputs[0].setSelectionRange(val.length, val.length);
  }
}

// 切換分站「忽略地標限制」模式（'all' 全站中英 | 'zh' 僅中文 | 'en' 僅英文）
function toggleStopIgnoreLandmark(sIdx, mode, checked) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);

  const isChecked = Boolean(checked);
  if (mode === 'all') {
    stop.ignoreLandmarkLimit = isChecked;
    stop.ignoreLandmarkZh = isChecked;
    stop.ignoreLandmarkEn = isChecked;
  } else if (mode === 'zh') {
    stop.ignoreLandmarkZh = isChecked;
    stop.ignoreLandmarkLimit = Boolean(stop.ignoreLandmarkZh && stop.ignoreLandmarkEn);
  } else if (mode === 'en') {
    stop.ignoreLandmarkEn = isChecked;
    stop.ignoreLandmarkLimit = Boolean(stop.ignoreLandmarkZh && stop.ignoreLandmarkEn);
  }

  renderA4Sheet();
  renderEditorSidebar();
}

// 在分站中文或英文名稱一鍵插入隔行符號 "|"
function insertStopNameLineBreak(sIdx, field = 'zh') {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  const curVal = String(stop[field] || '');
  stop[field] = curVal ? `${curVal}|` : '|';
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已於${field === 'zh' ? '中文' : '英文'}站名插入隔行符號「|」`);
}

// 複製指定分站並插入至其正下方（優化 stop-card-XX 編輯體驗）
function duplicateStopAt(idx) {
  const src = appConfig.stops[idx];
  if (!src) return;
  const cloned = JSON.parse(JSON.stringify(src));
  cloned.id = 's_' + Date.now();
  // 若複製的是起點或終點，將新站預設轉為純色底分站以免重複起終點箭嘴
  if (cloned.type === 'origin' || cloned.type === 'destination') {
    cloned.type = 'colored';
  }
  if (cloned.variantType) {
    Object.keys(cloned.variantType).forEach(vId => {
      if (cloned.variantType[vId] === 'origin' || cloned.variantType[vId] === 'destination') {
        cloned.variantType[vId] = 'colored';
      }
    });
  }
  appConfig.stops.splice(idx + 1, 0, cloned);
  expandedStopId = cloned.id;
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已複製第 ${idx + 1} 站至下方`);
}

// 在增刪站點後自動觸發智能字號與站距計算，再重新渲染畫布與側欄
function refreshAfterStopCountChange() {
  if (appConfig.layout?.autoScaleByStopCount !== false) {
    applyAutoStopTypographyAndGap(false);
  }
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
}

function addStopAt(insertIdx) {
  const newId = 'stop_' + Date.now();
  const vStatus = {};
  const vType = {};
  (appConfig.variants || []).forEach(v => {
    vStatus[v.id] = 'stop';
    vType[v.id] = 'normal';
  });
  const newStop = {
    id: newId,
    type: 'normal',
    variantType: vType,
    zh: '新巴士站, 道路名稱',
    en: 'New Bus Stop, Road Name',
    remarkSymbol: '',
    remarkZh: '',
    remarkEn: '',
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    fare: '',
    fareLabelExtraPx: 0,
    fareLineWidth: '100%',
    coloredBoxWidth: '',
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    hasCorridor: false,
    hasTunnel: false,
    corridorPipeHeightPx: 24,
    hasTimePromo: false,
    timePromoStyle: 'pointer',
    timePromoLayout: 'side_by_side',
    timePromoScale: 100,
    timePromoMins: '8',
    timePromoPrefixZh: '約',
    timePromoPrefixEn: 'approx',
    timePromoSuffixZh: '分鐘直達',
    timePromoSuffixEn: 'mins direct to',
    timePromoBg: '',
    hasInterchangeBox: false,
    interchangePointerStyle: 'pointer',
    interchangeLayout: 'side_by_side',
    interchangeScale: 100,
    interchangeTitleZh: '轉乘',
    interchangeTitleEn: 'Interchange',
    interchangeBoxColor: '',
    interchangeBoxTextColor: '#ffffff',
    interchangeRoutes: [],
    symbol: '',
    contFromLeft: false,
    contToRight: false,
    manualBreakAfter: false,
    landmarkPosition: 'middle',
    landmarks: [],
    variantStatus: vStatus
  };
  appConfig.stops.splice(insertIdx, 0, newStop);
  expandedStopId = newId;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已新增巴士站點');
}

function addCorridorStopAt(insertIdx) {
  const newId = 'corridor_' + Date.now();
  const vStatus = {};
  const vType = {};
  (appConfig.variants || []).forEach(v => {
    vStatus[v.id] = 'stop';
    vType[v.id] = 'corridor';
  });
  const newCorridorStop = {
    id: newId,
    type: 'corridor',
    variantType: vType,
    zh: '吐露港公路',
    en: 'Tolo Highway',
    remarkSymbol: '',
    remarkZh: '',
    remarkEn: '',
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    fare: '',
    fareLabelExtraPx: 0,
    fareLineWidth: '100%',
    coloredBoxWidth: '',
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    hasCorridor: true,
    hasTunnel: false,
    corridorPipeHeightPx: 24,
    hasTimePromo: true,
    timePromoStyle: 'pointer',
    timePromoLayout: 'side_by_side',
    timePromoScale: 100,
    timePromoMins: '10',
    timePromoPrefixZh: '約',
    timePromoPrefixEn: 'approx',
    timePromoSuffixZh: '分鐘直達',
    timePromoSuffixEn: 'mins direct to',
    timePromoBg: '',
    hasInterchangeBox: false,
    interchangePointerStyle: 'pointer',
    interchangeLayout: 'side_by_side',
    interchangeScale: 100,
    interchangeTitleZh: '轉乘',
    interchangeTitleEn: 'Interchange',
    interchangeBoxColor: '',
    interchangeBoxTextColor: '#ffffff',
    interchangeRoutes: [],
    symbol: '',
    contFromLeft: false,
    contToRight: false,
    manualBreakAfter: false,
    landmarkPosition: 'middle',
    landmarks: [],
    variantStatus: vStatus
  };
  appConfig.stops.splice(insertIdx, 0, newCorridorStop);
  expandedStopId = newId;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已在路線圖站點新增「途徑走廊 + 約X分鐘直達」項目');
}

function addTunnelStopAt(insertIdx) {
  const newId = 'tunnel_' + Date.now();
  const vStatus = {};
  const vType = {};
  (appConfig.variants || []).forEach(v => {
    vStatus[v.id] = 'stop';
    vType[v.id] = 'tunnel';
  });
  const newTunnelStop = {
    id: newId,
    type: 'tunnel',
    variantType: vType,
    zh: '龍山隧道',
    en: 'Lung Shan Tunnel',
    remarkSymbol: '',
    remarkZh: '',
    remarkEn: '',
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    fare: '',
    fareLabelExtraPx: 0,
    fareLineWidth: '100%',
    coloredBoxWidth: '',
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    hasCorridor: false,
    hasTunnel: true,
    corridorPipeHeightPx: 24,
    hasTimePromo: false,
    timePromoStyle: 'pointer',
    timePromoLayout: 'side_by_side',
    timePromoScale: 100,
    timePromoMins: '5',
    timePromoPrefixZh: '約',
    timePromoPrefixEn: 'approx',
    timePromoSuffixZh: '分鐘直達',
    timePromoSuffixEn: 'mins direct to',
    timePromoBg: '',
    hasInterchangeBox: false,
    interchangePointerStyle: 'pointer',
    interchangeLayout: 'side_by_side',
    interchangeScale: 100,
    interchangeTitleZh: '轉乘',
    interchangeTitleEn: 'Interchange',
    interchangeBoxColor: '',
    interchangeBoxTextColor: '#ffffff',
    interchangeRoutes: [],
    symbol: '',
    contFromLeft: false,
    contToRight: false,
    manualBreakAfter: false,
    landmarkPosition: 'middle',
    landmarks: [],
    variantStatus: vStatus
  };
  appConfig.stops.splice(insertIdx, 0, newTunnelStop);
  expandedStopId = newId;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已在路線圖站點新增「途徑隧道 (HK_Tunnel)」項目');
}

// --------------------------------------------------------------------------
// TAB 2: STOPS & ROUTE MAP EDITOR (INCLUDES IGNORE LANDMARK TOGGLES FOR ZH & EN)
// --------------------------------------------------------------------------
// 渲染「4. 班次與微調」分頁（使用重新設計的新「自定義班次數量與圓形編號設定」，確保顏色統一聚集在「5. 顏色與SVG」）
function renderVariantsAndExportTabHTML() {
  const L = ensureStopAndLineStyleConfigSynced();

  return `
    <!-- 1. 重新設計的新自定義班次數量與圓形編號設定 -->
    ${renderUnifiedVariantsAndBadgesSectionHTML('export')}

    <!-- 2. 右側資訊欄與版面微調 -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-arrows-up-down-left-right text-emerald-400"></i>
          <span>2. 右側資訊欄與版面微調</span>
        </h3>
      </div>

      <div class="space-y-2 text-[11px]">
        <label class="flex items-center justify-between gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700 transition">
          <div>
            <div class="font-bold text-slate-200">將右側最後一個資訊模組自動推至 A4 底部對齊</div>
            <div class="text-[9.5px] text-slate-400">開啟後，生效日期與營運商頁尾將自動貼齊畫布底邊</div>
          </div>
          <input
            type="checkbox"
            ${L.stickLastModuleToBottom ? 'checked' : ''}
            onchange="updateLayout('stickLastModuleToBottom', this.checked)"
            class="rounded accent-emerald-500 w-4 h-4"
          />
        </label>

        <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[10.5px] font-bold text-slate-200">兩欄路線圖水平間距 (Column Gap)</span>
            <span id="label-columnGapPx" class="text-[10.5px] font-mono text-emerald-400">${L.columnGapPx} px</span>
          </div>
          <input
            id="range-columnGapPx"
            type="range" min="4" max="32" step="1"
            value="${L.columnGapPx}"
            oninput="updateLayout('columnGapPx', this.value)"
            class="w-full accent-emerald-500"
          />
        </div>
      </div>
    </div>

    <!-- 3. 導出高清 PNG / A4 PDF 渲染引擎設定 -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-file-export text-sky-400"></i>
          <span>3. 導出 PNG / A4 PDF 引擎與解析度設定</span>
        </h3>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <button
          type="button"
          onclick="updateLayout('exportEngine', 'svg'); renderEditorSidebar();"
          class="p-2.5 rounded-lg border text-left transition ${
            L.exportEngine !== 'canvas'
              ? 'bg-sky-600/25 border-sky-400 text-sky-200 font-bold shadow-sm'
              : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
          }"
        >
          <div class="text-[11px]">SVG ForeignObject 引擎 (推薦)</div>
          <div class="text-[9px] opacity-80 mt-0.5">零文字基線偏移，100% 忠實還原預覽排版</div>
        </button>

        <button
          type="button"
          onclick="updateLayout('exportEngine', 'canvas'); renderEditorSidebar();"
          class="p-2.5 rounded-lg border text-left transition ${
            L.exportEngine === 'canvas'
              ? 'bg-sky-600/25 border-sky-400 text-sky-200 font-bold shadow-sm'
              : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
          }"
        >
          <div class="text-[11px]">html2canvas 備用引擎</div>
          <div class="text-[9px] opacity-80 mt-0.5">適合舊版瀏覽器或特殊跨網域圖片環境</div>
        </button>
      </div>

      <div class="grid grid-cols-2 gap-2.5 pt-1 text-[10px]">
        <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
          <label class="block text-slate-300 font-semibold mb-1">導出超採樣倍率 (Scale)</label>
          <select
            onchange="updateLayout('exportScale', Number(this.value))"
            class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100"
          >
            <option value="1" ${Number(L.exportScale) === 1 ? 'selected' : ''}>1x (標準 794×1123)</option>
            <option value="2" ${Number(L.exportScale || 2) === 2 ? 'selected' : ''}>2x (高清印刷 1588×2246)</option>
            <option value="3" ${Number(L.exportScale) === 3 ? 'selected' : ''}>3x (超高清 2382×3369)</option>
            <option value="4" ${Number(L.exportScale) === 4 ? 'selected' : ''}>4x (極致印刷級)</option>
          </select>
        </div>

        <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
          <label class="block text-slate-300 font-semibold mb-1">導出文字垂直微調 (px)</label>
          <input
            type="number" step="0.2" min="-5" max="5"
            value="${L.exportTextOffsetY || 0}"
            oninput="updateLayout('exportTextOffsetY', this.value)"
            class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-center text-sky-300 font-mono"
          />
        </div>
      </div>
    </div>
  `;
}

// 相容別名：確保呼叫 renderExportTabHTML() 與 renderVariantsAndExportTabHTML() 同步
function renderExportTabHTML() {
  return renderVariantsAndExportTabHTML();
}

// 渲染左側編輯器面板內容（自動注入「5. 顏色與SVG」按鈕，並在「3. 右側資訊欄」自動啟用途徑隔行控制項）
function renderEditorSidebar() {
  ensureColorTabButtonInjected();
  const container = document.getElementById('editor-content');
  if (!container) return;

  const prevScrollTop = container.scrollTop;

  if (currentTab === 'theme') {
    container.innerHTML = renderThemeTabHTML();
  } else if (currentTab === 'stops') {
    container.innerHTML = renderStopsTabHTML();
  } else if (currentTab === 'info') {
    container.innerHTML = renderInfoTabHTML();
    enhanceViaInputsWithLineBreakControls(container);
  } else if (currentTab === 'export') {
    container.innerHTML = renderVariantsAndExportTabHTML();
  } else if (currentTab === 'colors') {
    container.innerHTML = renderColorsTabHTML();
  }

  container.scrollTop = prevScrollTop;
}

// 切換左側編輯器分頁並支援平滑滾動與高亮定位（例如跳轉至 #sec-color-variant-0）
function switchEditorTab(tab, scrollToId = null) {
  ensureColorTabButtonInjected();
  if (isTempScratchMode && (tab === 'export' || tab === 'colors')) {
    showToast('臨時製作路線紙模式禁止使用此進階分頁！請先還原至正式模式', 'rose');
    return;
  }

  currentTab = tab;
  const tabs = ['theme', 'stops', 'info', 'export', 'colors'];
  tabs.forEach((t) => {
    const btn = document.getElementById(`tab-btn-${t}`);
    if (!btn) return;
    if (t === tab) {
      btn.className = 'py-2 px-1 rounded-lg flex flex-col items-center gap-1 transition bg-emerald-600 text-white shadow';
    } else {
      btn.className = 'py-2 px-1 rounded-lg flex flex-col items-center gap-1 transition text-slate-400 hover:text-slate-200 hover:bg-slate-800/60';
    }
  });

  renderEditorSidebar();

  if (scrollToId) {
    requestAnimationFrame(() => {
      const targetEl = document.getElementById(scrollToId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEl.classList.add('ring-2', 'ring-purple-400');
        setTimeout(() => targetEl.classList.remove('ring-2', 'ring-purple-400'), 1400);
      }
    });
  }
}

// 在指定周邊地標灰底標籤的中/英文欄位一鍵插入隔行符號 "|"
function insertLandmarkLineBreak(sIdx, lmIdx, field = 'zh') {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);
  const lm = stop.landmarks[lmIdx];
  if (!lm) return;

  const cur = String(lm[field] || '');
  lm[field] = cur ? `${cur}|` : '|';
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已於地標 #${lmIdx + 1} ${field === 'zh' ? '中文' : '英文'}插入隔行符號「|」`);
}

// 新增周邊地標灰底標籤
function addStopLandmark(sIdx) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);
  stop.landmarks.push({
    zh: '新地標',
    en: 'New Landmark',
    width: '',
    extraWidthPx: 0,
    position: '',
    breakRow: false,
    align: 'center'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

// 刪除周邊地標灰底標籤
function removeStopLandmark(sIdx, lmIdx) {
  const stop = appConfig.stops[sIdx];
  if (!stop || !Array.isArray(stop.landmarks)) return;
  stop.landmarks.splice(lmIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// 上下移動調整周邊地標灰底標籤順序
function moveStopLandmark(sIdx, lmIdx, dir) {
  const stop = appConfig.stops[sIdx];
  if (!stop || !Array.isArray(stop.landmarks)) return;
  const targetIdx = lmIdx + dir;
  if (targetIdx < 0 || targetIdx >= stop.landmarks.length) return;
  const temp = stop.landmarks[lmIdx];
  stop.landmarks[lmIdx] = stop.landmarks[targetIdx];
  stop.landmarks[targetIdx] = temp;
  renderA4Sheet();
  renderEditorSidebar();
}

// 更新單一周邊地標灰底標籤欄位（支援標籤內文字隔行、多個地標換列 breakRow、寬度、對齊與擺放位置）
function updateStopLandmark(sIdx, lmIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);
  const lm = stop.landmarks[lmIdx];
  if (!lm) return;

  if (field === 'extraWidthPx') {
    lm.extraWidthPx = Math.max(0, Number(val) || 0);
  } else if (field === 'breakRow') {
    lm.breakRow = Boolean(val);
    refreshSidebar = true;
  } else {
    lm[field] = val;
  }

  renderA4Sheet();
  if (refreshSidebar || field === 'align' || field === 'position') {
    renderEditorSidebar();
  }
}

// 一鍵在指定周邊地標中英文欄位插入隔行符號（支援游標位置直接插入換行，大幅提升用戶體驗）
function insertStopLandmarkLineBreak(sIdx, lmIdx, field) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);
  const lm = stop.landmarks[lmIdx];
  if (!lm) return;

  const inputEl = document.getElementById(`lm-input-${field}-${sIdx}-${lmIdx}`);
  const currentVal = String(lm[field] || '');

  if (inputEl && typeof inputEl.selectionStart === 'number') {
    const start = inputEl.selectionStart;
    const end = inputEl.selectionEnd;
    const nextVal = currentVal.slice(0, start) + '\n' + currentVal.slice(end);
    lm[field] = nextVal;
    inputEl.value = nextVal;
    renderA4Sheet();
    requestAnimationFrame(() => {
      inputEl.focus();
      inputEl.setSelectionRange(start + 1, start + 1);
    });
  } else {
    lm[field] = currentVal ? `${currentVal}\n` : '';
    renderA4Sheet();
    renderEditorSidebar();
  }
  showToast('已插入地標隔行！亦可直接按 Enter 或輸入 | 隔行', 'info');
}

// 獨立更新分站「分段純色底大小 / 分段底線長度 / 雙數分段淺色底」欄位，支援滑桿與輸入框雙向同步而不失焦
function updateStopFareField(sIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);

  if (['fareLabelExtraPx', 'fareBoxPadX', 'fareBoxPadY', 'fareFontSizePx', 'fareLineThicknessPx'].includes(field)) {
    stop[field] = Math.max(0, Number(val) || 0);
  } else {
    stop[field] = val;
  }

  // 即時同步滑桿與數字框 DOM（避免拖曳滑桿時重繪整個側邊欄導致失焦）
  const numInput = document.getElementById(`stop-fare-input-${field}-${sIdx}`);
  if (numInput && document.activeElement !== numInput) {
    numInput.value = stop[field];
  }
  const rangeInput = document.getElementById(`stop-fare-range-${field}-${sIdx}`);
  if (rangeInput && document.activeElement !== rangeInput) {
    if (field === 'fareLineWidth') {
      const parsedPct = parseFloat(String(val));
      if (!isNaN(parsedPct)) rangeInput.value = Math.min(100, Math.max(0, parsedPct));
    } else {
      rangeInput.value = stop[field];
    }
  }

  renderA4Sheet();
  if (refreshSidebar) {
    renderEditorSidebar();
  }
}

// 1. 確保分站屬性初始化：底線粗度 (fareLineThicknessPx) 默認設為 2
function ensureStopLandmarkAndIgnoreProps(stop) {
  if (!stop) return;

  if (stop.ignoreLandmarkLimit === undefined) {
    stop.ignoreLandmarkLimit = Boolean(stop.ignoreLandmarkZh && stop.ignoreLandmarkEn);
  }
  if (stop.ignoreLandmarkZh === undefined) stop.ignoreLandmarkZh = false;
  if (stop.ignoreLandmarkEn === undefined) stop.ignoreLandmarkEn = false;

  if (stop.contFromLeft === undefined) stop.contFromLeft = false;
  if (stop.contToRight === undefined) stop.contToRight = false;

  if (stop.districtWidth === undefined) stop.districtWidth = '100%';
  if (stop.districtExtraPx === undefined || isNaN(Number(stop.districtExtraPx))) {
    stop.districtExtraPx = 0;
  } else {
    stop.districtExtraPx = Math.max(0, Number(stop.districtExtraPx));
  }
  if (stop.districtFontSizePx === undefined || isNaN(Number(stop.districtFontSizePx))) {
    stop.districtFontSizePx = 10;
  } else {
    stop.districtFontSizePx = Math.max(6, Number(stop.districtFontSizePx));
  }
  if (stop.districtPadY === undefined || isNaN(Number(stop.districtPadY))) {
    stop.districtPadY = 1.2;
  } else {
    stop.districtPadY = Math.max(0, Number(stop.districtPadY));
  }
  if (stop.districtPadX === undefined || isNaN(Number(stop.districtPadX))) {
    stop.districtPadX = 4.5;
  } else {
    stop.districtPadX = Math.max(0, Number(stop.districtPadX));
  }

  // ① 分段收費純色底大小
  if (stop.fareBoxWidth === undefined) stop.fareBoxWidth = stop.fareWidth || '';
  if (stop.fareLabelExtraPx === undefined || isNaN(Number(stop.fareLabelExtraPx))) {
    stop.fareLabelExtraPx = 0;
  } else {
    stop.fareLabelExtraPx = Math.max(0, Number(stop.fareLabelExtraPx));
  }
  if (stop.fareBoxPadX === undefined || isNaN(Number(stop.fareBoxPadX))) {
    stop.fareBoxPadX = 6.5;
  } else {
    stop.fareBoxPadX = Math.max(0, Number(stop.fareBoxPadX));
  }
  if (stop.fareBoxPadY === undefined || isNaN(Number(stop.fareBoxPadY))) {
    stop.fareBoxPadY = 1.6;
  } else {
    stop.fareBoxPadY = Math.max(0, Number(stop.fareBoxPadY));
  }
  if (stop.fareFontSizePx === undefined || isNaN(Number(stop.fareFontSizePx))) {
    stop.fareFontSizePx = 18;
  } else {
    stop.fareFontSizePx = Math.max(8, Number(stop.fareFontSizePx));
  }

  // ② 分段底線長度與粗度（底線粗度默認設為 2px；若為舊版未自定義的 1.5 亦自動升級為 2）
  if (stop.fareLineWidth === undefined || stop.fareLineWidth === '') {
    stop.fareLineWidth = '100%';
  }
  if (
    stop.fareLineThicknessPx === undefined ||
    isNaN(Number(stop.fareLineThicknessPx)) ||
    (Number(stop.fareLineThicknessPx) === 1.5 && !stop._customFareLineThickness)
  ) {
    stop.fareLineThicknessPx = 2;
  } else {
    stop.fareLineThicknessPx = Math.max(0.5, Number(stop.fareLineThicknessPx));
  }

  // ③ 雙數分段淺色底色寬度
  if (stop.evenZoneWidth === undefined || stop.evenZoneWidth === '') {
    stop.evenZoneWidth = '100%';
  }

  if (stop.coloredBoxWidth === undefined) stop.coloredBoxWidth = '';
  if (stop.coloredBoxExtraPx === undefined || isNaN(Number(stop.coloredBoxExtraPx))) {
    stop.coloredBoxExtraPx = 0;
  } else {
    stop.coloredBoxExtraPx = Math.max(0, Number(stop.coloredBoxExtraPx));
  }

  if (stop.corridorPipeHeightPx === undefined || isNaN(Number(stop.corridorPipeHeightPx))) {
    stop.corridorPipeHeightPx = 24;
  }

  if (stop.hasTimePromo === undefined) stop.hasTimePromo = false;
  if (stop.timePromoMins === undefined) stop.timePromoMins = '8';
  if (stop.timePromoPrefixZh === undefined) stop.timePromoPrefixZh = '約';
  if (stop.timePromoPrefixEn === undefined) stop.timePromoPrefixEn = 'approx';
  if (stop.timePromoSuffixZh === undefined) stop.timePromoSuffixZh = '分鐘直達';
  if (stop.timePromoSuffixEn === undefined) stop.timePromoSuffixEn = 'mins direct to';
  if (!stop.timePromoLayout) stop.timePromoLayout = 'side_by_side';
  if (!stop.timePromoStyle) stop.timePromoStyle = 'pointer';
  if (stop.timePromoScale === undefined || isNaN(Number(stop.timePromoScale))) stop.timePromoScale = 100;
  if (stop.timePromoBg === undefined) stop.timePromoBg = '';

  if (!stop.landmarkPosition) stop.landmarkPosition = 'middle';
  if (stop.landmarkRowGapPx === undefined || isNaN(Number(stop.landmarkRowGapPx))) {
    stop.landmarkRowGapPx = 2;
  }

  if (!Array.isArray(stop.landmarks)) {
    stop.landmarks = [];
  } else {
    stop.landmarks = stop.landmarks.map(lm => ({
      zh: lm.zh !== undefined ? String(lm.zh) : '',
      en: lm.en !== undefined ? String(lm.en) : '',
      width: lm.width !== undefined ? String(lm.width).trim() : '',
      extraWidthPx: (lm.extraWidthPx !== undefined && !isNaN(Number(lm.extraWidthPx))) ? Math.max(0, Number(lm.extraWidthPx)) : 0,
      position: lm.position || '',
      breakRow: Boolean(lm.breakRow),
      align: lm.align || 'center'
    }));
  }
}

// 2. 更新分站分段收費欄位（記錄手動調整過的底線粗度標記）
function updateStopFareField(sIdx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[sIdx];
  if (!stop) return;
  ensureStopLandmarkAndIgnoreProps(stop);

  if (field === 'fareLineThicknessPx') {
    stop._customFareLineThickness = true;
  }

  if (['fareLabelExtraPx', 'fareBoxPadX', 'fareBoxPadY', 'fareFontSizePx', 'fareLineThicknessPx'].includes(field)) {
    stop[field] = Math.max(0, Number(val) || 0);
  } else {
    stop[field] = val;
  }

  const numInput = document.getElementById(`stop-fare-input-${field}-${sIdx}`);
  if (numInput && document.activeElement !== numInput) {
    numInput.value = stop[field];
  }
  const rangeInput = document.getElementById(`stop-fare-range-${field}-${sIdx}`);
  if (rangeInput && document.activeElement !== rangeInput) {
    if (field === 'fareLineWidth') {
      const parsedPct = parseFloat(String(val));
      if (!isNaN(parsedPct)) rangeInput.value = Math.min(100, Math.max(0, parsedPct));
    } else {
      rangeInput.value = stop[field];
    }
  }

  renderA4Sheet();
  if (refreshSidebar) {
    renderEditorSidebar();
  }
}

// 3. 新增分站（預設底線粗度 fareLineThicknessPx: 2）
function addNewStopItem(insertAfterIdx = null, initKind = 'stop') {
  const variants = appConfig.variants || [];
  const variantStatus = {};
  const variantType = {};
  const baseType = initKind === 'corridor' ? 'corridor' : (initKind === 'tunnel' ? 'tunnel' : 'normal');

  variants.forEach(v => {
    variantStatus[v.id] = 'stop';
    variantType[v.id] = baseType;
  });

  const newStop = {
    id: 's_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    type: baseType,
    hasCorridor: initKind === 'corridor',
    isCorridor: initKind === 'corridor',
    hasTunnel: initKind === 'tunnel',
    isTunnel: initKind === 'tunnel',
    corridorPipeHeightPx: 24,
    variantType,
    variantStatus,
    zh: initKind === 'corridor' ? '東區走廊' : (initKind === 'tunnel' ? '西區海底隧道' : '新巴士站, 道路名稱'),
    en: initKind === 'corridor' ? 'Island Eastern Corridor' : (initKind === 'tunnel' ? 'Western Harbour Crossing' : 'New Bus Stop, Road Name'),
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    districtExtraPx: 0,
    districtFontSizePx: 10,
    districtPadY: 1.2,
    districtPadX: 4.5,
    fare: '',
    fareBoxWidth: '',
    fareLabelExtraPx: 0,
    fareBoxPadX: 6.5,
    fareBoxPadY: 1.6,
    fareFontSizePx: 18,
    fareLineWidth: '100%',
    fareLineThicknessPx: 2,
    evenZoneWidth: '100%',
    coloredBoxWidth: '',
    coloredBoxExtraPx: 0,
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    symbol: '',
    manualBreakAfter: false,
    landmarks: []
  };

  if (insertAfterIdx !== null && insertAfterIdx >= 0 && insertAfterIdx < appConfig.stops.length) {
    appConfig.stops.splice(insertAfterIdx + 1, 0, newStop);
  } else {
    appConfig.stops.push(newStop);
  }

  expandedStopId = newStop.id;
  if (appConfig.layout.autoScaleByStopCount) {
    applyAutoStopTypographyAndGap(false);
  }
  renderA4Sheet();
  renderEditorSidebar();
  showToast(initKind === 'corridor' ? '已新增途徑走廊項目' : (initKind === 'tunnel' ? '已新增途徑隧道項目' : '已新增巴士站點'));
}

// 4. 渲染分站「分段收費（底線粗度默認為 2px）」與「周邊地標」編輯面板 HTML
function renderStopFareAndLandmarkEditorHTML(stop, sIdx) {
  ensureStopLandmarkAndIgnoreProps(stop);
  const hasFare = Boolean(stop.fare && String(stop.fare).trim() !== '');
  const defaultLmPos = stop.landmarkPosition || 'middle';
  const lmRowGapPx = stop.landmarkRowGapPx !== undefined ? Number(stop.landmarkRowGapPx) : 2;

  const rawLineW = String(stop.fareLineWidth !== undefined ? stop.fareLineWidth : '100%').trim();
  const linePercentMatch = rawLineW.match(/^(\d+(\.\d+)?)%$/);
  const lineSliderVal = linePercentMatch ? Math.min(100, Math.max(0, Number(linePercentMatch[1]))) : (rawLineW === '0px' ? 0 : 100);

  const landmarksListHTML = (stop.landmarks || []).map((lm, lmIdx) => {
    const curPos = lm.position || '';
    const curAlign = lm.align || 'center';
    const isBreakRow = Boolean(lm.breakRow);

    return `
      <div class="bg-slate-950/90 border ${isBreakRow && lmIdx > 0 ? 'border-amber-500/50' : 'border-slate-700/80'} rounded-lg p-2.5 space-y-2">
        <div class="flex items-center justify-between gap-1.5 flex-wrap border-b border-slate-800/80 pb-1.5">
          <div class="flex items-center gap-1.5">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 font-bold text-[10px]">地標 #${lmIdx + 1}</span>
            ${lmIdx > 0 ? `
              <label class="flex items-center gap-1 px-2 py-0.5 rounded border cursor-pointer text-[9px] font-bold transition ${
                isBreakRow
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
              }" title="勾選後此灰底標籤會強制換到下一行顯示">
                <input type="checkbox" ${isBreakRow ? 'checked' : ''} onchange="updateStopLandmark(${sIdx}, ${lmIdx}, 'breakRow', this.checked, true)" class="rounded accent-amber-500 w-3 h-3" />
                <span><i class="fa-solid fa-turn-down mr-0.5"></i>另起新行 (標籤隔行)</span>
              </label>
            ` : `
              <span class="text-[9px] text-slate-400">支援按 Enter、點擊「↵ 隔行」或輸入 | 分行</span>
            `}
          </div>

          <div class="flex items-center gap-1">
            <button type="button" onclick="moveStopLandmark(${sIdx}, ${lmIdx}, -1)" ${lmIdx === 0 ? 'disabled' : ''} class="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center text-[9px]" title="上移">
              <i class="fa-solid fa-arrow-up"></i>
            </button>
            <button type="button" onclick="moveStopLandmark(${sIdx}, ${lmIdx}, 1)" ${lmIdx === stop.landmarks.length - 1 ? 'disabled' : ''} class="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center text-[9px]" title="下移">
              <i class="fa-solid fa-arrow-down"></i>
            </button>
            <button type="button" onclick="removeStopLandmark(${sIdx}, ${lmIdx})" class="w-5 h-5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center justify-center text-[9px] transition" title="刪除此地標">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[9px] text-slate-300 font-bold">中文地標名稱 (可換行)</label>
              <button type="button" onclick="insertStopLandmarkLineBreak(${sIdx}, ${lmIdx}, 'zh')" class="px-1.5 py-0.5 rounded bg-emerald-600/25 hover:bg-emerald-600 text-emerald-300 hover:text-white text-[9px] font-bold transition" title="在中文地標內插入隔行">
                ↵ 隔行
              </button>
            </div>
            <textarea
              id="lm-input-zh-${sIdx}-${lmIdx}"
              rows="2"
              placeholder="例如：圓方&#10;西九文化區 (或用 | 隔行)"
              oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'zh', this.value)"
              class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-[10px] text-slate-100 leading-tight resize-y"
            >${esc(lm.zh || '')}</textarea>
          </div>

          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[9px] text-slate-300 font-bold">英文地標名稱 (可換行)</label>
              <button type="button" onclick="insertStopLandmarkLineBreak(${sIdx}, ${lmIdx}, 'en')" class="px-1.5 py-0.5 rounded bg-sky-600/25 hover:bg-sky-600 text-sky-300 hover:text-white text-[9px] font-bold transition" title="在英文地標內插入隔行">
                ↵ 隔行
              </button>
            </div>
            <textarea
              id="lm-input-en-${sIdx}-${lmIdx}"
              rows="2"
              placeholder="e.g. Elements&#10;West Kowloon (或用 | 隔行)"
              oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'en', this.value)"
              class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-[10px] text-slate-100 leading-tight resize-y"
            >${esc(lm.en || '')}</textarea>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-1.5 items-end pt-1 text-[9px]">
          <div class="col-span-4">
            <label class="block text-slate-400 mb-0.5">單獨位置</label>
            <select onchange="updateStopLandmark(${sIdx}, ${lmIdx}, 'position', this.value, true)" class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-[9px] text-slate-200">
              <option value="" ${curPos === '' ? 'selected' : ''}>跟隨分站預設</option>
              <option value="middle" ${curPos === 'middle' ? 'selected' : ''}>右側置中</option>
              <option value="bottom_right" ${curPos === 'bottom_right' ? 'selected' : ''}>右下貼底</option>
              <option value="below_name" ${curPos === 'below_name' ? 'selected' : ''}>站名正下方</option>
              <option value="after_callouts" ${curPos === 'after_callouts' ? 'selected' : ''}>緊貼宣傳/轉乘框後</option>
            </select>
          </div>

          <div class="col-span-3">
            <label class="block text-slate-400 mb-0.5">文字對齊</label>
            <div class="grid grid-cols-3 gap-0.5 bg-slate-900 p-0.5 rounded border border-slate-700">
              <button type="button" onclick="updateStopLandmark(${sIdx}, ${lmIdx}, 'align', 'left', true)" class="py-0.5 rounded text-[9px] ${curAlign === 'left' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400'}">左</button>
              <button type="button" onclick="updateStopLandmark(${sIdx}, ${lmIdx}, 'align', 'center', true)" class="py-0.5 rounded text-[9px] ${curAlign === 'center' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400'}">中</button>
              <button type="button" onclick="updateStopLandmark(${sIdx}, ${lmIdx}, 'align', 'right', true)" class="py-0.5 rounded text-[9px] ${curAlign === 'right' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400'}">右</button>
            </div>
          </div>

          <div class="col-span-3">
            <label class="block text-slate-400 mb-0.5">指定寬度(px/%)</label>
            <input type="text" value="${esc(lm.width || '')}" placeholder="自動" oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'width', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center text-slate-100 font-mono text-[9px]" />
          </div>

          <div class="col-span-2">
            <label class="block text-slate-400 mb-0.5">加寬(px)</label>
            <input type="number" min="0" max="160" step="1" value="${Number(lm.extraWidthPx) || 0}" oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'extraWidthPx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-emerald-300 font-mono text-[9px]" />
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 space-y-2.5">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <span class="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
          <i class="fa-solid fa-coins"></i>
          <span>分段收費金額（底色大小與底線長度分開控制）</span>
        </span>
        <div class="flex items-center gap-1.5">
          <input
            type="text"
            value="${esc(stop.fare || '')}"
            placeholder="如：$19.50 (留空則無)"
            oninput="updateStopFareField(${sIdx}, 'fare', this.value)"
            onchange="renderEditorSidebar();"
            class="w-36 bg-slate-800 border border-emerald-500/50 rounded px-2 py-1 text-xs font-black text-emerald-300 text-center"
          />
          ${hasFare ? `
            <button type="button" onclick="updateStopFareField(${sIdx}, 'fare', '', true)" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] transition" title="清除此站分段收費">
              清除
            </button>
          ` : ''}
        </div>
      </div>

      ${hasFare ? `
        <div class="space-y-2 pt-1.5 border-t border-slate-800 text-[10px]">
          <!-- ① 分段底色大小控制 -->
          <div class="bg-slate-950/85 p-2.5 rounded-lg border border-emerald-500/40 space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-emerald-300 text-[10px]"><i class="fa-solid fa-vector-square mr-1"></i>① 分段底色大小控制 (純色底標籤)</span>
              <div class="flex items-center gap-1">
                <button type="button" onclick="updateStopFareField(${sIdx}, 'fareBoxWidth', ''); updateStopFareField(${sIdx}, 'fareLabelExtraPx', 0, true);" class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[9px] text-slate-300">自動貼字</button>
                <button type="button" onclick="updateStopFareField(${sIdx}, 'fareBoxWidth', '100%', true);" class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[9px] text-emerald-300">100% 滿欄</button>
              </div>
            </div>

            <div class="space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[9px] text-slate-300">底色右側額外加長 (px)</span>
                <input
                  id="stop-fare-input-fareLabelExtraPx-${sIdx}"
                  type="number"
                  min="0"
                  max="220"
                  step="1"
                  value="${Number(stop.fareLabelExtraPx) || 0}"
                  oninput="updateStopFareField(${sIdx}, 'fareLabelExtraPx', this.value)"
                  class="w-14 bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]"
                />
              </div>
              <input
                id="stop-fare-range-fareLabelExtraPx-${sIdx}"
                type="range"
                min="0"
                max="160"
                step="1"
                value="${Number(stop.fareLabelExtraPx) || 0}"
                oninput="updateStopFareField(${sIdx}, 'fareLabelExtraPx', this.value)"
                class="w-full accent-emerald-500"
              />
            </div>

            <div class="grid grid-cols-4 gap-1.5 pt-0.5">
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">指定底寬(px/%)</label>
                <input
                  id="stop-fare-input-fareBoxWidth-${sIdx}"
                  type="text"
                  value="${esc(stop.fareBoxWidth || '')}"
                  placeholder="自動"
                  oninput="updateStopFareField(${sIdx}, 'fareBoxWidth', this.value)"
                  class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center text-slate-100 font-mono text-[9.5px]"
                />
              </div>
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">字體大小(px)</label>
                <input
                  id="stop-fare-input-fareFontSizePx-${sIdx}"
                  type="number"
                  min="10"
                  max="28"
                  step="0.5"
                  value="${Number(stop.fareFontSizePx) || 18}"
                  oninput="updateStopFareField(${sIdx}, 'fareFontSizePx', this.value)"
                  class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono text-[9.5px]"
                />
              </div>
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">上下高度內距</label>
                <input
                  id="stop-fare-input-fareBoxPadY-${sIdx}"
                  type="number"
                  min="0"
                  max="10"
                  step="0.2"
                  value="${stop.fareBoxPadY !== undefined ? Number(stop.fareBoxPadY) : 1.6}"
                  oninput="updateStopFareField(${sIdx}, 'fareBoxPadY', this.value)"
                  class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono text-[9.5px]"
                />
              </div>
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">左右內距(px)</label>
                <input
                  id="stop-fare-input-fareBoxPadX-${sIdx}"
                  type="number"
                  min="0"
                  max="24"
                  step="0.5"
                  value="${stop.fareBoxPadX !== undefined ? Number(stop.fareBoxPadX) : 6.5}"
                  oninput="updateStopFareField(${sIdx}, 'fareBoxPadX', this.value)"
                  class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-slate-100 font-mono text-[9.5px]"
                />
              </div>
            </div>
          </div>

          <!-- ② 分段底線長度與粗度控制 (底線粗度默認 2px) -->
          <div class="bg-slate-950/85 p-2.5 rounded-lg border border-sky-500/40 space-y-2">
            <div class="flex items-center justify-between flex-wrap gap-1">
              <span class="font-bold text-sky-300 text-[10px]"><i class="fa-solid fa-minus mr-1"></i>② 分段底線長度與粗度控制 (獨立控制)</span>
              <div class="flex items-center gap-1">
                <button type="button" onclick="updateStopFareField(${sIdx}, 'fareLineWidth', '100%', true)" class="px-1.5 py-0.5 rounded text-[9px] ${rawLineW === '100%' ? 'bg-sky-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">100%</button>
                <button type="button" onclick="updateStopFareField(${sIdx}, 'fareLineWidth', '70%', true)" class="px-1.5 py-0.5 rounded text-[9px] ${rawLineW === '70%' ? 'bg-sky-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">70%</button>
                <button type="button" onclick="updateStopFareField(${sIdx}, 'fareLineWidth', 'match_box', true)" class="px-1.5 py-0.5 rounded text-[9px] ${rawLineW === 'match_box' ? 'bg-sky-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-sky-200'}" title="底線長度自動等於上方分段純色底寬度">與底色同寬</button>
                <button type="button" onclick="updateStopFareField(${sIdx}, 'fareLineWidth', '0px', true)" class="px-1.5 py-0.5 rounded text-[9px] ${rawLineW === '0px' || rawLineW === '0%' ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-rose-300'}">隱藏底線</button>
              </div>
            </div>

            <div class="grid grid-cols-12 gap-2 items-center">
              <div class="col-span-5">
                <label class="block text-[9px] text-slate-400 mb-0.5">百分比快速拉桿</label>
                <input
                  id="stop-fare-range-fareLineWidth-${sIdx}"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value="${lineSliderVal}"
                  oninput="updateStopFareField(${sIdx}, 'fareLineWidth', this.value + '%')"
                  class="w-full accent-sky-500"
                />
              </div>
              <div class="col-span-4">
                <label class="block text-[9px] text-slate-400 mb-0.5">底線長度(%/px)</label>
                <input
                  id="stop-fare-input-fareLineWidth-${sIdx}"
                  type="text"
                  value="${esc(stop.fareLineWidth || '100%')}"
                  placeholder="100% 或 90px"
                  oninput="updateStopFareField(${sIdx}, 'fareLineWidth', this.value)"
                  class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center text-sky-200 font-mono text-[9.5px]"
                />
              </div>
              <div class="col-span-3">
                <label class="block text-[9px] text-slate-400 mb-0.5">底線粗度(px)</label>
                <input
                  id="stop-fare-input-fareLineThicknessPx-${sIdx}"
                  type="number"
                  min="0.5"
                  max="6"
                  step="0.5"
                  value="${stop.fareLineThicknessPx !== undefined ? Number(stop.fareLineThicknessPx) : 2}"
                  oninput="updateStopFareField(${sIdx}, 'fareLineThicknessPx', this.value)"
                  class="w-full bg-slate-900 border border-slate-700 rounded px-1 py-1 text-center text-sky-200 font-mono text-[9.5px]"
                />
              </div>
            </div>
          </div>

          <!-- ③ 雙數分段淺色底寬度控制 -->
          <div class="bg-slate-950/85 p-2 rounded-lg border border-amber-500/35 flex items-center justify-between gap-2">
            <div>
              <div class="font-bold text-amber-300 text-[10px]">③ 雙數分段一體化淺色底寬度</div>
              <div class="text-[8.5px] text-slate-400">僅影響雙數分段（第 2、4... 段）淺色背景容器寬度</div>
            </div>
            <input
              id="stop-fare-input-evenZoneWidth-${sIdx}"
              type="text"
              value="${esc(stop.evenZoneWidth || '100%')}"
              placeholder="100% 或 160px"
              oninput="updateStopFareField(${sIdx}, 'evenZoneWidth', this.value)"
              class="w-28 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-center text-amber-200 font-mono text-[10px] shrink-0"
            />
          </div>
        </div>
      ` : ''}
    </div>

    <div class="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 space-y-2.5">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span class="text-[11px] font-bold text-slate-100 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot text-amber-400"></i>
            <span>周邊地標灰底標籤 (${(stop.landmarks || []).length})</span>
          </span>
          <span class="text-[9px] text-slate-400 block">支援標籤內多行隔行（按 Enter 或 |）及多個標籤之間隔行換列</span>
        </div>
        <button type="button" onclick="addStopLandmark(${sIdx})" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition shadow-sm">
          + 新增周邊地標
        </button>
      </div>

      ${(stop.landmarks && stop.landmarks.length > 0) ? `
        <div class="grid grid-cols-12 gap-2 bg-slate-950/70 p-2 rounded-lg border border-slate-800 items-center text-[10px]">
          <div class="col-span-7">
            <label class="block text-[9px] text-slate-400 mb-0.5">此站地標預設擺放位置</label>
            <select onchange="appConfig.stops[${sIdx}].landmarkPosition = this.value; renderA4Sheet();" class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-slate-200">
              <option value="middle" ${defaultLmPos === 'middle' ? 'selected' : ''}>站名右側垂直置中 (預設)</option>
              <option value="bottom_right" ${defaultLmPos === 'bottom_right' ? 'selected' : ''}>站名右下角貼底</option>
              <option value="below_name" ${defaultLmPos === 'below_name' ? 'selected' : ''}>站名正下方橫排</option>
              <option value="after_callouts" ${defaultLmPos === 'after_callouts' ? 'selected' : ''}>緊貼宣傳框/轉乘框右側</option>
            </select>
          </div>
          <div class="col-span-5">
            <label class="block text-[9px] text-slate-400 mb-0.5">多行地標垂直行距(px)</label>
            <input
              type="number"
              min="0"
              max="12"
              step="0.5"
              value="${lmRowGapPx}"
              oninput="appConfig.stops[${sIdx}].landmarkRowGapPx = Math.max(0, Number(this.value) || 0); renderA4Sheet();"
              class="w-full bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center text-amber-300 font-mono text-[10px]"
            />
          </div>
        </div>

        <div class="space-y-2">
          ${landmarksListHTML}
        </div>
      ` : `
        <div class="text-[10px] text-slate-500 text-center py-2 bg-slate-950/40 rounded-lg border border-dashed border-slate-800">
          尚未新增周邊地標，點擊右上角「+ 新增周邊地標」即可加入灰底標籤
        </div>
      `}
    </div>
  `;
}

// 渲染「編輯站名（含忽略地標限制）」與「周邊地標灰底標籤（含文字隔行與標籤換行）」專屬區塊 HTML
function renderStopNameAndLandmarksEditorSectionHTML(stop, sIdx) {
  ensureStopLandmarkAndIgnoreProps(stop);
  const ignoreAll = Boolean(stop.ignoreLandmarkLimit || (stop.ignoreLandmarkZh && stop.ignoreLandmarkEn));
  const ignoreZh = Boolean(stop.ignoreLandmarkLimit || stop.ignoreLandmarkZh);
  const ignoreEn = Boolean(stop.ignoreLandmarkLimit || stop.ignoreLandmarkEn);
  const defaultLmPos = stop.landmarkPosition || 'middle';

  const landmarksListHTML = (stop.landmarks || []).map((lm, lmIdx) => {
    const lmPos = lm.position || defaultLmPos;
    return `
      <div class="bg-slate-900/95 border border-slate-700/80 rounded-lg p-2.5 space-y-2 shadow-sm">
        <div class="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-600 text-[10px] font-bold text-slate-200">
              地標 #${lmIdx + 1}
            </span>
            ${lmIdx > 0 ? `
              <label class="flex items-center gap-1 px-1.5 py-0.5 rounded border text-[9px] font-bold cursor-pointer transition ${
                lm.breakRow
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
              }" title="勾選後，此灰底地標標籤會強制換到下一行顯示">
                <input
                  type="checkbox"
                  ${lm.breakRow ? 'checked' : ''}
                  onchange="updateStopLandmark(${sIdx}, ${lmIdx}, 'breakRow', this.checked, true)"
                  class="rounded accent-amber-500 w-3 h-3"
                />
                <span>標籤隔行(換行)</span>
              </label>
            ` : ''}
          </div>

          <div class="flex items-center gap-1.5">
            <select
              onchange="updateStopLandmark(${sIdx}, ${lmIdx}, 'position', this.value)"
              class="bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[9px] text-slate-200"
              title="此地標標籤顯示位置"
            >
              <option value="middle" ${lmPos === 'middle' ? 'selected' : ''}>右側置中</option>
              <option value="bottom_right" ${lmPos === 'bottom_right' ? 'selected' : ''}>右側貼底</option>
              <option value="below_name" ${lmPos === 'below_name' ? 'selected' : ''}>站名正下方</option>
              <option value="after_callouts" ${lmPos === 'after_callouts' ? 'selected' : ''}>宣傳/轉乘框右側</option>
            </select>
            <button
              type="button"
              onclick="removeStopLandmark(${sIdx}, ${lmIdx})"
              class="px-1.5 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] transition"
              title="刪除此地標"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        <!-- 地標中英文輸入（支援 | 或 Enter 隔行） -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <div class="flex items-center justify-between mb-0.5">
              <label class="text-[9px] text-slate-400">地標中文 (支援 <code class="text-amber-300">|</code> 隔行)</label>
              <button
                type="button"
                onclick="insertLandmarkLineBreak(${sIdx}, ${lmIdx}, 'zh')"
                class="px-1.5 py-0.2 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-amber-300 text-[9px] font-bold transition"
                title="在地標中文末端插入隔行符號 |"
              >＋隔行</button>
            </div>
            <textarea
              rows="2"
              placeholder="例如：圓方|西九文化區"
              oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'zh', this.value)"
              class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] font-bold text-slate-100 resize-y leading-tight"
            >${esc(lm.zh)}</textarea>
          </div>

          <div>
            <div class="flex items-center justify-between mb-0.5">
              <label class="text-[9px] text-slate-400">地標英文 (支援 <code class="text-amber-300">|</code> 隔行)</label>
              <button
                type="button"
                onclick="insertLandmarkLineBreak(${sIdx}, ${lmIdx}, 'en')"
                class="px-1.5 py-0.2 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-amber-300 text-[9px] font-bold transition"
                title="在地標英文末端插入隔行符號 |"
              >＋隔行</button>
            </div>
            <textarea
              rows="2"
              placeholder="例如：Elements|West Kowloon"
              oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'en', this.value)"
              class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[10px] text-slate-200 resize-y leading-tight"
            >${esc(lm.en)}</textarea>
          </div>
        </div>

        <div class="flex items-center justify-between gap-2 pt-0.5 text-[9px]">
          <span class="text-slate-400">灰底左右額外加寬 (px)：</span>
          <div class="flex items-center gap-1.5 w-36">
            <input
              type="range"
              min="0"
              max="40"
              step="1"
              value="${Number(lm.extraWidthPx) || 0}"
              oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'extraWidthPx', this.value); this.nextElementSibling.value = this.value;"
              class="flex-1 accent-emerald-500"
            />
            <input
              type="number"
              min="0"
              max="80"
              step="1"
              value="${Number(lm.extraWidthPx) || 0}"
              oninput="updateStopLandmark(${sIdx}, ${lmIdx}, 'extraWidthPx', this.value); this.previousElementSibling.value = this.value;"
              class="w-11 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono"
            />
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- 編輯站名與「忽略地標限制」區塊 -->
    <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 space-y-2.5">
      <div class="flex items-center justify-between flex-wrap gap-1.5 border-b border-slate-800/90 pb-1.5">
        <span class="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
          <i class="fa-solid fa-pen-to-square"></i>
          <span>編輯站名與忽略地標限制</span>
        </span>

        <!-- 忽略地標限制快捷開關組 -->
        <div class="flex items-center gap-1 flex-wrap">
          <label class="flex items-center gap-1 px-2 py-0.5 rounded-md border text-[9px] font-bold cursor-pointer transition ${
            ignoreAll
              ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-sm'
              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
          }" title="開啟後，中英文站名均不受右側地標寬度限制，保持單行展開">
            <input
              type="checkbox"
              ${ignoreAll ? 'checked' : ''}
              onchange="toggleStopIgnoreLandmark(${sIdx}, 'all', this.checked)"
              class="rounded accent-emerald-500 w-3 h-3"
            />
            <span>忽略地標限制(全站)</span>
          </label>

          <label class="flex items-center gap-1 px-1.5 py-0.5 rounded-md border text-[9px] font-semibold cursor-pointer transition ${
            ignoreZh && !ignoreAll
              ? 'bg-sky-600/30 border-sky-400 text-sky-200'
              : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
          }" title="僅中文站名忽略右側地標限制（適合地標在右下角時使用）">
            <input
              type="checkbox"
              ${ignoreZh ? 'checked' : ''}
              onchange="toggleStopIgnoreLandmark(${sIdx}, 'zh', this.checked)"
              class="rounded accent-sky-500 w-3 h-3"
            />
            <span>忽略中文</span>
          </label>

          <label class="flex items-center gap-1 px-1.5 py-0.5 rounded-md border text-[9px] font-semibold cursor-pointer transition ${
            ignoreEn && !ignoreAll
              ? 'bg-sky-600/30 border-sky-400 text-sky-200'
              : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
          }" title="僅英文站名忽略右側地標限制">
            <input
              type="checkbox"
              ${ignoreEn ? 'checked' : ''}
              onchange="toggleStopIgnoreLandmark(${sIdx}, 'en', this.checked)"
              class="rounded accent-sky-500 w-3 h-3"
            />
            <span>忽略英文</span>
          </label>
        </div>
      </div>

      <!-- 中英文站名輸入框（附帶一鍵隔行按鈕） -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <div class="flex items-center justify-between mb-0.5">
            <label class="text-[10px] text-slate-300 font-bold">中文站名 <span class="text-[9px] text-slate-500 font-normal">(可用 | 隔行)</span></label>
            <button
              type="button"
              onclick="insertStopNameLineBreak(${sIdx}, 'zh')"
              class="px-1.5 py-0.2 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-emerald-300 text-[9px] font-bold transition"
            >＋隔行</button>
          </div>
          <input
            type="text"
            value="${esc(stop.zh)}"
            oninput="updateStopField(${sIdx}, 'zh', this.value)"
            placeholder="輸入中文站名..."
            class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-xs font-bold text-white"
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-0.5">
            <label class="text-[10px] text-slate-300 font-bold">英文站名 <span class="text-[9px] text-slate-500 font-normal">(可用 | 隔行)</span></label>
            <button
              type="button"
              onclick="insertStopNameLineBreak(${sIdx}, 'en')"
              class="px-1.5 py-0.2 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-emerald-300 text-[9px] font-bold transition"
            >＋隔行</button>
          </div>
          <input
            type="text"
            value="${esc(stop.en)}"
            oninput="updateStopField(${sIdx}, 'en', this.value)"
            placeholder="輸入英文站名..."
            class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-xs text-slate-200"
          />
        </div>
      </div>
    </div>

    <!-- 周邊地標灰底標籤編輯區塊（支援文字內隔行與多標籤換行） -->
    <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 space-y-2">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span class="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot"></i>
            <span>周邊地標灰底標籤 (${(stop.landmarks || []).length})</span>
          </span>
          <p class="text-[9px] text-slate-400">支援按 Enter 或輸入 <code class="text-amber-300">|</code> 在灰底標籤內隔行，或勾選「標籤隔行」換列</p>
        </div>
        <button
          type="button"
          onclick="addStopLandmark(${sIdx})"
          class="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500 border border-amber-500/40 text-amber-300 hover:text-slate-950 font-bold text-[10px] transition shadow-sm"
        >
          + 新增灰底地標
        </button>
      </div>

      ${(stop.landmarks || []).length > 0 ? `
        <div class="space-y-2 pt-1">
          ${landmarksListHTML}
        </div>
      ` : `
        <div class="text-[10px] text-slate-500 italic py-1.5 text-center bg-slate-900/40 rounded-lg border border-dashed border-slate-800">
          尚未新增周邊地標，點擊右上角「+ 新增灰底地標」即可加入
        </div>
      `}
    </div>
  `;
}

function updateStopAllLandmarksPosition(idx, pos) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  stop.landmarkPosition = pos;
  if (Array.isArray(stop.landmarks)) {
    stop.landmarks.forEach(lm => {
      lm.position = pos;
    });
  }
  renderA4Sheet();
  renderEditorSidebar();
}

// 切換站點為一般站點 / 途徑走廊 / 途徑隧道（確保走廊與隧道互斥且同步各班次類型）
function setStopRoadPassType(idx, mode, checked) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  if (mode === 'corridor') {
    stop.hasCorridor = Boolean(checked);
    if (checked) stop.hasTunnel = false;
  } else if (mode === 'tunnel') {
    stop.hasTunnel = Boolean(checked);
    if (checked) stop.hasCorridor = false;
  }

  const nextType = stop.hasTunnel ? 'tunnel' : (stop.hasCorridor ? 'corridor' : 'normal');
  stop.type = nextType;
  if (!stop.variantType) stop.variantType = {};
  (appConfig.variants || []).forEach(v => {
    stop.variantType[v.id] = nextType;
  });

  renderA4Sheet();
  renderEditorSidebar();
}

// --------------------------------------------------------------------------
// TAB 4: SERVICE VARIANTS & ZERO-SHIFT EXPORT SETTINGS (INCLUDES ROUTE NUMBER BOX CONFIG)
// --------------------------------------------------------------------------


function updateVariantField(vIdx, field, val) {
  const v = appConfig.variants[vIdx];
  if (!v) return;
  v[field] = val;

  // 若改變了線條及圓圈底色，預設同步至該班次的時間表路線框底色
  if (field === 'color') {
    v.routeBoxColor = val;
  }

  // 若此班次已捆綁至某目標，反向同步更新目標，讓所有互相捆綁的班次保持一致
  if (v.boundToId) {
    if (v.boundToId === '__theme__' && (field === 'color' || field === 'routeBoxColor')) {
      appConfig.colors.routeLineColor = val;
      appConfig.colors.themePrimary = val;
      appConfig.colors.routeBoxBg = val;
    } else if (v.boundToId.startsWith('rb_')) {
      const boxes = ensureHeaderRouteBoxesSynced();
      const targetBox = boxes.find(b => b.id === v.boundToId);
      if (targetBox) {
        if (field === 'color' || field === 'routeBoxColor') targetBox.bgColor = val;
        if (field === 'routeBoxTextColor') targetBox.textColor = val;
        if (field === 'routeBoxInnerWhiteLine') targetBox.innerWhiteLine = Boolean(val);
      }
    } else {
      const targetV = appConfig.variants.find(item => item.id === v.boundToId);
      if (targetV && ['color', 'badgeText', 'routeBoxColor', 'routeBoxTextColor', 'routeBoxInnerWhiteLine'].includes(field)) {
        targetV[field] = val;
        if (field === 'color') targetV.routeBoxColor = val;
      }
    }
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vIdx];
  if (vt && ['routeNumber', 'routeBoxInnerWhiteLine', 'routeBoxPosition', 'routeBoxColor', 'routeBoxTextColor'].includes(field)) {
    vt[field] = v[field];
  }
  renderA4Sheet();
  if (['color', 'badgeText', 'routeBoxColor', 'routeBoxTextColor'].includes(field)) {
    renderEditorSidebar();
  }
}

// Allows removing dateGroups down to 0!
function removeVariantTimetableDateGroup(vtIdx, dgIdx) {
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vtIdx];
  if (!vt || vt.dateGroups.length === 0) return;
  vt.dateGroups.splice(dgIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function removeTimetableDateGroup(dgIdx) {
  if (!appConfig.rightData.timetable.dateGroups || appConfig.rightData.timetable.dateGroups.length === 0) return;
  appConfig.rightData.timetable.dateGroups.splice(dgIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// ==========================================================================
// 8. 100% WYSIWYG IN-PLACE A4 CAPTURE ENGINE (ZERO FONT OR LAYOUT SHIFT)
// ==========================================================================

function moveStop(idx, dir) {
  const target = idx + dir;
  if (target < 0 || target >= appConfig.stops.length) return;
  const temp = appConfig.stops[idx];
  appConfig.stops[idx] = appConfig.stops[target];
  appConfig.stops[target] = temp;
  renderA4Sheet();
  renderEditorSidebar();
}

function deleteStop(idx) {
  if (appConfig.stops.length <= 2) {
    showToast('路線最少需要保留 2 個站點', 'error');
    return;
  }
  appConfig.stops.splice(idx, 1);
  expandedStopId = null;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已刪除站點', 'info');
}

// Right side data mutations
function moveRightModule(idx, dir) {
  const arr = appConfig.rightModulesOrder;
  const target = idx + dir;
  if (target < 0 || target >= arr.length) return;
  const tmp = arr[idx];
  arr[idx] = arr[target];
  arr[target] = tmp;
  renderA4Sheet();
  renderEditorSidebar();
}

function addTimetableDateGroup() {
  appConfig.rightData.timetable.dateGroups.push({
    id: 'dg_' + Date.now(),
    dateTitleZh: '星期一至五',
    dateTitleEn: 'Mon - Fri',
    rows: [
      { time: '0700 - 0900', headway: '15 - 20' }
    ]
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateTimetableDateGroup(dgIdx, field, val) {
  appConfig.rightData.timetable.dateGroups[dgIdx][field] = val;
  renderA4Sheet();
}

function removeTimetableRow(dgIdx, rIdx) {
  const rows = appConfig.rightData.timetable.dateGroups[dgIdx].rows;
  if (rows.length <= 1) return;
  rows.splice(rIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateAdditionalMeta(field, val) {
  appConfig.rightData.additionalInfo[field] = val;
  renderA4Sheet();
  if (field === 'enabled') renderEditorSidebar();
}

function addAdditionalNote() {
  appConfig.rightData.additionalInfo.notes.push({
    symbol: '#',
    zh: '新特別班次或服務備註說明。',
    en: 'Additional service remark.'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateAdditionalNote(nIdx, field, val) {
  appConfig.rightData.additionalInfo.notes[nIdx][field] = val;
  renderA4Sheet();
}

function removeAdditionalNote(nIdx) {
  appConfig.rightData.additionalInfo.notes.splice(nIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateOctopusMeta(field, val) {
  appConfig.rightData.octopusFare[field] = val;
  renderA4Sheet();
  if (field === 'enabled') renderEditorSidebar();
}

function addOctopusItem() {
  appConfig.rightData.octopusFare.items.push({
    sectionZh: '分段起點 往 分段終點',
    sectionEn: 'Section Origin to Destination',
    price: '$5.5'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateOctopusItem(iIdx, field, val) {
  appConfig.rightData.octopusFare.items[iIdx][field] = val;
  renderA4Sheet();
}

function removeOctopusItem(iIdx) {
  appConfig.rightData.octopusFare.items.splice(iIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateBbiMeta(field, val) {
  appConfig.rightData.bbiInfo[field] = val;
  renderA4Sheet();
  if (field === 'enabled') renderEditorSidebar();
}

function addBbiItem() {
  appConfig.rightData.bbiInfo.items.push({
    zh: '於指定轉乘站轉乘指定路線可享車資優惠',
    en: 'Fare discount available when interchanging with designated routes'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateBbiItem(bIdx, field, val) {
  appConfig.rightData.bbiInfo.items[bIdx][field] = val;
  renderA4Sheet();
}

function removeBbiItem(bIdx) {
  appConfig.rightData.bbiInfo.items.splice(bIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// 更新生效日期、營運商與右下角版本編號 (versionCode)
function updateFooterMeta(field, val, refreshSidebar = false) {
  if (!appConfig.rightData.effectiveFooter) {
    appConfig.rightData.effectiveFooter = {};
  }
  appConfig.rightData.effectiveFooter[field] = val;
  renderA4Sheet();
  if (refreshSidebar || field === 'enabled' || field === 'showNoGovConcession') {
    renderEditorSidebar();
  }
}

// 渲染「3. 右側資訊欄」分頁（已於 #sec-footer 補齊 versionCode 版本編號自定義輸入框）
function renderInfoTabHTML() {
  const R = appConfig.rightData;
  const L = appConfig.layout;
  const C = appConfig.colors;
  const T = R.timetable;
  const O = R.octopusFare;
  const B = R.bbiInfo;
  const A = R.additionalInfo;
  const F = R.effectiveFooter;
  const variants = appConfig.variants || [];
  const routeBoxes = ensureHeaderRouteBoxesSynced();
  const isSingleRouteBox = routeBoxes.length === 1;
  const defaultHeaderPadY = isSingleRouteBox ? 20 : 6;
  ensureOwlSvgConfigSynced();
  syncBoundVariants();
  const variantTables = ensureVariantTimetablesSynced();

  const defaultNoGovText = '「政府長者及合資格殘障人士公共運輸票價優惠計劃」並不適用於本路線 | The Government Public Transport Fare Concession Scheme for the Elderly and Eligible Persons with Disabilities is not applicable to this route';
  if (F.noGovConcessionText === undefined) {
    F.noGovConcessionText = defaultNoGovText;
  }
  if (F.versionCode === undefined) {
    F.versionCode = 'B13_261012_V1';
  }

  const curRouteLayoutMode = R.routeLayoutMode || 'single_row';
  const curDestLayoutMode = R.destLayoutMode || 'shared_below';
  const curDestViaStyle = R.destViaStyle || 'separate';

  const curIntroIconType = R.introIconType || 'none';
  const curIntroIconSize = Math.max(12, Number(R.introIconSizePx) || 22);
  const curIntroZhSize = Math.max(7, Number(R.introZhFontSizePx) || 13);
  const curIntroEnSize = Math.max(6, Number(R.introEnFontSizePx) || 9.8);
  const isIntroZhBold = R.introZhBold !== false;
  const isIntroZhItalic = Boolean(R.introZhItalic);
  const isIntroEnBold = R.introEnBold !== false;
  const isIntroEnItalic = Boolean(R.introEnItalic);

  const v0 = variants[0] || {};
  const previewCorridorBg = v0.corridorSvgBg || C.corridorSvgBg || v0.color || C.routeLineColor || '#0d8556';
  const previewCorridorFg = v0.corridorSvgFg || C.corridorSvgFg || '#ffffff';
  const previewTunnelBg = v0.tunnelSvgBg || C.tunnelSvgBg || v0.color || C.routeLineColor || '#0d8556';
  const previewTunnelFg = v0.tunnelSvgFg || C.tunnelSvgFg || '#ffffff';

  const activeOwlBox = routeBoxes.find(b => b.showOwlUnderN) || routeBoxes[0] || {};
  const owlPreviewBg = activeOwlBox.showOwlUnderN ? (activeOwlBox.bgColor || C.routeBoxBg || '#000000') : '#000000';
  const owlPreviewFg = activeOwlBox.showOwlUnderN ? (activeOwlBox.textColor || C.routeBoxText || '#ffdd00') : '#ffdd00';

  const moduleMeta = {
    route_header: { label: '路線號碼及目的地 (獨立容器)', sectionId: 'sec-route', toggleable: false },
    intro_banner: { label: '路線中英文簡介橫幅', sectionId: 'sec-intro', toggleable: true, enabled: R.introEnabled !== false, toggleFn: "updateRightField('introEnabled', this.checked)" },
    timetable: { label: '時間表 (支援多班次獨立表與附註)', sectionId: 'sec-timetable', toggleable: false },
    additional_info: { label: '額外資訊與備註', sectionId: 'sec-additional', toggleable: true, enabled: A.enabled, toggleFn: "updateAdditionalMeta('enabled', this.checked)" },
    octopus_fare: { label: '八達通及電子支付分段收費', sectionId: 'sec-octopus', toggleable: true, enabled: O.enabled, toggleFn: "updateOctopusMeta('enabled', this.checked)" },
    bbi_info: { label: '巴士轉乘計劃資訊', sectionId: 'sec-bbi', toggleable: true, enabled: B.enabled, toggleFn: "updateBbiMeta('enabled', this.checked)" },
    effective_footer: { label: '生效日期與營運商資訊', sectionId: 'sec-footer', toggleable: true, enabled: F.enabled, toggleFn: "updateFooterMeta('enabled', this.checked)" }
  };

  const orderListHTML = (appConfig.rightModulesOrder || []).map((key, idx) => {
    const meta = moduleMeta[key] || { label: key, sectionId: '' };
    return `
      <div class="flex items-center justify-between bg-slate-900/85 px-2.5 py-1.5 rounded-lg border border-slate-700/80 text-[11px] gap-2">
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="w-5 h-5 rounded bg-slate-800 text-emerald-400 font-mono font-bold flex items-center justify-center text-[10px] shrink-0">${idx + 1}</span>
          ${meta.toggleable ? `
            <input type="checkbox" ${meta.enabled ? 'checked' : ''} onchange="${meta.toggleFn}" class="rounded accent-emerald-500 shrink-0" title="顯示/隱藏此模塊" />
          ` : ''}
          <span onclick="switchEditorTab('info', '${meta.sectionId}')" class="font-medium text-slate-200 truncate cursor-pointer hover:text-emerald-300">${meta.label}</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <button onclick="moveRightModule(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-800 hover:bg-emerald-600 disabled:opacity-30 text-slate-300 hover:text-white transition" title="上移此模塊"><i class="fa-solid fa-arrow-up text-[10px]"></i></button>
          <button onclick="moveRightModule(${idx}, 1)" ${idx === appConfig.rightModulesOrder.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-800 hover:bg-emerald-600 disabled:opacity-30 text-slate-300 hover:text-white transition" title="下移此模塊"><i class="fa-solid fa-arrow-down text-[10px]"></i></button>
        </div>
      </div>
    `;
  }).join('');

  const headerRouteBoxesEditorHTML = routeBoxes.map((box, bIdx) => {
    const boxBg = box.bgColor || C.routeBoxBg || '#0d8556';
    const boxText = box.textColor || C.routeBoxText || '#ffffff';
    const boxFontSize = Math.max(16, Number(box.fontSizePx) || 100);
    const boundVarId = box.boundVariantId || '';
    const showOwl = Boolean(box.showOwlUnderN);
    const boxOwlPos = box.owlPosition || 'auto';

    const boxPadX = (box.padX !== undefined && !isNaN(Number(box.padX))) ? Number(box.padX) : 8;
    const boxPadY = (box.padY !== undefined && !isNaN(Number(box.padY))) ? Number(box.padY) : defaultHeaderPadY;
    const boxOuterPad = (box.outerPad !== undefined && !isNaN(Number(box.outerPad))) ? Number(box.outerPad) : 5;
    const boxTightnessEm = (box.letterSpacingEm !== undefined && !isNaN(Number(box.letterSpacingEm))) ? Number(box.letterSpacingEm) : -0.025;
    const boxFontScaleX = (box.fontScaleX !== undefined && !isNaN(Number(box.fontScaleX))) ? Number(box.fontScaleX) : 100;
    const boxTokenGapPx = (box.tokenGapPx !== undefined && !isNaN(Number(box.tokenGapPx))) ? Number(box.tokenGapPx) : 2.5;
    const boxNOffsetX = (box.nOffsetX !== undefined && !isNaN(Number(box.nOffsetX))) ? Number(box.nOffsetX) : 0;
    const boxNOffsetY = (box.nOffsetY !== undefined && !isNaN(Number(box.nOffsetY))) ? Number(box.nOffsetY) : 0;

    const viaZhSize = Math.max(6, Number(box.viaZhFontSizePx) || 12.5);
    const viaEnSize = Math.max(5.5, Number(box.viaEnFontSizePx) || 10.5);
    const viaZhBold = box.viaZhBold !== false;
    const viaZhItalic = Boolean(box.viaZhItalic);
    const viaEnBold = box.viaEnBold !== false;
    const viaEnItalic = Boolean(box.viaEnItalic);

    const variantBindOptionsHTML = variants.map((v, vIdx) => `
      <option value="${v.id}" ${boundVarId === v.id ? 'selected' : ''}>捆綁班次時間表 #${vIdx + 1}：${esc(v.name)}</option>
    `).join('');

    const routeBoxTemplatesBtnsHTML = ROUTE_BOX_TEMPLATES.map(tpl => {
      const isSelected = box.routeBoxTemplate === tpl.key || (boxBg.toLowerCase() === tpl.bgColor.toLowerCase() && boxText.toLowerCase() === tpl.textColor.toLowerCase() && showOwl === Boolean(tpl.showOwlUnderN));
      const tplSampleNo = tpl.sampleRoute || (tpl.showOwlUnderN ? 'N962' : 'B13');
      return `
        <button type="button" onclick="applyHeaderRouteBoxTemplate(${bIdx}, '${tpl.key}')" title="${esc(tpl.label)}（${esc(tpl.desc)}）" class="p-1.5 rounded-lg border text-left flex items-center justify-between gap-1.5 transition ${isSelected ? 'ring-2 ring-emerald-400 border-white' : 'border-slate-700 hover:border-slate-500'}" style="background-color:${tpl.bgColor}; color:${tpl.textColor};">
          <span class="text-[10px] font-bold truncate">${esc(tpl.label)}</span>
          <span class="px-1.5 py-0.5 rounded border border-white/75 inline-flex items-center justify-center shrink-0">
            ${renderRouteTokenWithOwlHTML(tplSampleNo, 14, tpl.textColor, tpl.bgColor, tpl.showOwlUnderN)}
          </span>
        </button>
      `;
    }).join('');

    return `
      <div id="sec-route-box-${bIdx}" class="bg-slate-900/85 border ${boundVarId ? 'border-emerald-500/80' : 'border-slate-700/80'} rounded-lg p-2.5 space-y-2">
        <div class="flex items-center justify-between flex-wrap gap-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded text-sm font-black shadow inline-flex items-center justify-center min-w-[48px]" style="background:${boxBg}; color:${boxText}; border:1.2px solid rgba(255,255,255,0.85);">
              ${renderRouteTokenWithOwlHTML(box.routeNumber || `#${bIdx + 1}`, 17, boxText, boxBg, showOwl, { letterSpacingEm: boxTightnessEm, fontScaleX: boxFontScaleX, tokenGapPx: boxTokenGapPx, owlPosition: boxOwlPos, nOffsetX: boxNOffsetX, nOffsetY: boxNOffsetY })}
            </span>
            <span class="text-[11px] font-bold text-emerald-300">路線號碼框 #${bIdx + 1}</span>
            ${boundVarId ? `<span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold">已捆綁時間表</span>` : ''}
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <label class="flex items-center gap-1 text-[10px] text-amber-300 font-bold cursor-pointer">
              <input type="checkbox" ${showOwl ? 'checked' : ''} onchange="updateHeaderRouteBox(${bIdx}, 'showOwlUnderN', this.checked, true)" class="rounded accent-amber-500" />
              <span>N下貓頭鷹SVG</span>
            </label>
            ${showOwl ? `
              <select onchange="updateHeaderRouteBox(${bIdx}, 'owlPosition', this.value, true)" class="bg-slate-800 border border-amber-500/60 rounded px-1.5 py-0.5 text-[10px] text-amber-200 font-bold">
                <option value="auto" ${boxOwlPos === 'auto' ? 'selected' : ''}>自動(按N位置)</option>
                <option value="prefix" ${boxOwlPos === 'prefix' ? 'selected' : ''}>數字前面 (N...)</option>
                <option value="suffix" ${boxOwlPos === 'suffix' ? 'selected' : ''}>數字後面 (...N)</option>
              </select>
            ` : ''}
            <label class="flex items-center gap-1 text-[10px] text-slate-200 cursor-pointer">
              <input type="checkbox" ${box.innerWhiteLine !== false ? 'checked' : ''} onchange="updateHeaderRouteBox(${bIdx}, 'innerWhiteLine', this.checked)" class="rounded accent-emerald-500" />
              <span>保留框內細白線</span>
            </label>
            <button onclick="switchEditorTab('colors', 'sec-colors-header-boxes')" class="px-1.5 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[9px] font-bold transition">
              <i class="fa-solid fa-palette mr-0.5"></i>配色
            </button>
            ${routeBoxes.length > 1 ? `
              <button onclick="removeHeaderRouteBox(${bIdx})" class="px-1.5 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px]" title="刪除此路線號碼框"><i class="fa-solid fa-trash"></i></button>
            ` : ''}
          </div>
        </div>

        <div class="bg-slate-950/75 p-2 rounded-lg border border-slate-800 space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[9px] font-bold text-amber-300"><i class="fa-solid fa-swatchbook mr-1"></i>路綫號碼框樣式模板：</span>
          </div>
          <div class="grid grid-cols-2 gap-1.5">
            ${routeBoxTemplatesBtnsHTML}
          </div>
        </div>

        <div class="bg-slate-950/75 px-2.5 py-1.5 rounded border border-slate-800 flex items-center justify-between gap-2">
          <label class="text-[10px] text-amber-300 font-bold shrink-0"><i class="fa-solid fa-link mr-1"></i>捆綁班次時間表</label>
          <select onchange="bindHeaderRouteBoxToVariant(${bIdx}, this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[10px] text-slate-100">
            <option value="" ${!boundVarId ? 'selected' : ''}>不捆綁 (獨立路線框)</option>
            ${variantBindOptionsHTML}
          </select>
        </div>

        <div class="grid grid-cols-12 gap-2 items-center">
          <div class="col-span-5">
            <label class="block text-[9px] text-slate-400 mb-0.5">路線號碼 (如 N962 或 969N)</label>
            <input type="text" value="${esc(box.routeNumber)}" oninput="updateHeaderRouteBox(${bIdx}, 'routeNumber', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-sm font-black text-emerald-400" />
          </div>
          <div class="col-span-7">
            <label class="block text-[9px] text-emerald-300 font-bold mb-0.5"><i class="fa-solid fa-text-height mr-1"></i>此路線框字體大小 (px)</label>
            <div class="flex items-center gap-1.5">
              <input type="range" min="20" max="130" step="1" value="${boxFontSize}" oninput="updateHeaderRouteBox(${bIdx}, 'fontSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-emerald-500" />
              <input type="number" min="16" max="150" step="1" value="${boxFontSize}" oninput="updateHeaderRouteBox(${bIdx}, 'fontSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono text-[11px]" />
            </div>
          </div>
        </div>

        <div class="bg-slate-950/80 p-2 rounded-lg border border-slate-800 space-y-2">
          <div class="grid grid-cols-3 gap-1.5 text-[9px]">
            <div>
              <label class="block text-emerald-300 font-bold mb-0.5">水平內距 Pad X (px)</label>
              <input type="number" min="0" max="40" step="0.5" value="${boxPadX}" oninput="updateHeaderRouteBox(${bIdx}, 'padX', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
            </div>
            <div>
              <label class="block text-emerald-300 font-bold mb-0.5">垂直內距 Pad Y (px)</label>
              <input type="number" min="0" max="40" step="0.5" value="${boxPadY}" oninput="updateHeaderRouteBox(${bIdx}, 'padY', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
            </div>
            <div>
              <label class="block text-slate-300 font-bold mb-0.5">外框邊距 Pad (px)</label>
              <input type="number" min="0" max="20" step="0.5" value="${boxOuterPad}" oninput="updateHeaderRouteBox(${bIdx}, 'outerPad', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-slate-200 font-mono text-[10px]" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800/80 text-[9px]">
            <div>
              <div class="flex items-center justify-between mb-0.5">
                <span class="text-amber-300 font-bold">號碼字距緊密程度 (em)</span>
                <input type="number" min="-0.2" max="0.2" step="0.005" value="${boxTightnessEm}" oninput="updateHeaderRouteBox(${bIdx}, 'letterSpacingEm', Number(this.value)); this.parentElement.nextElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-amber-300 font-mono text-[10px]" />
              </div>
              <input type="range" min="-0.15" max="0.15" step="0.005" value="${boxTightnessEm}" oninput="updateHeaderRouteBox(${bIdx}, 'letterSpacingEm', Number(this.value)); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-amber-500" />
            </div>

            <div>
              <div class="flex items-center justify-between mb-0.5">
                <span class="text-purple-300 font-bold">路線框號碼字距壓縮/字體變窄 (%)</span>
                <input type="number" min="50" max="125" step="1" value="${boxFontScaleX}" oninput="updateHeaderRouteBox(${bIdx}, 'fontScaleX', Number(this.value)); this.parentElement.nextElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-purple-300 font-mono text-[10px]" />
              </div>
              <input type="range" min="50" max="125" step="1" value="${boxFontScaleX}" oninput="updateHeaderRouteBox(${bIdx}, 'fontScaleX', Number(this.value)); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-purple-500" />
            </div>

            <div>
              <div class="flex items-center justify-between mb-0.5">
                <span class="text-sky-300 font-bold">N+貓頭鷹與號碼間距 (px)</span>
                <input type="number" min="-15" max="25" step="0.5" value="${boxTokenGapPx}" oninput="updateHeaderRouteBox(${bIdx}, 'tokenGapPx', Number(this.value)); this.parentElement.nextElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]" />
              </div>
              <input type="range" min="-10" max="20" step="0.5" value="${boxTokenGapPx}" oninput="updateHeaderRouteBox(${bIdx}, 'tokenGapPx', Number(this.value)); this.previousElementSibling.lastElementChild.value = this.value;" class="w-full accent-sky-500" />
            </div>

            <div>
              <label class="block text-sky-300 font-bold mb-0.5">N字位移 (X / Y)</label>
              <div class="flex items-center gap-1.5">
                <input type="number" min="-30" max="30" step="0.5" value="${boxNOffsetX}" oninput="updateHeaderRouteBox(${bIdx}, 'nOffsetX', Number(this.value))" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-center text-sky-200 font-mono text-[10px]" />
                <input type="number" min="-30" max="30" step="0.5" value="${boxNOffsetY}" oninput="updateHeaderRouteBox(${bIdx}, 'nOffsetY', Number(this.value))" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-center text-sky-200 font-mono text-[10px]" />
              </div>
            </div>
          </div>
        </div>

        <div class="pt-1.5 border-t border-slate-800 space-y-2">
          <div class="flex items-center justify-between flex-wrap gap-1">
            <span class="text-[9px] font-bold text-sky-300">
              <i class="fa-solid fa-location-arrow mr-1"></i>路線框 #${bIdx + 1} 目的地及途徑方向
            </span>
            ${bIdx > 0 ? `
              <button type="button" onclick="copyMainDestToRouteBox(${bIdx})" class="px-1.5 py-0.5 rounded bg-sky-600/25 hover:bg-sky-600 text-sky-200 hover:text-white text-[9px] font-bold transition">
                <i class="fa-regular fa-copy mr-0.5"></i>複製 #1 目的地
              </button>
            ` : ''}
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">中文目的地</label>
              <input id="box-${bIdx}-dest-zh" type="text" placeholder="如：皇崗口岸" value="${esc(box.destZh ?? '')}" oninput="updateHeaderRouteBox(${bIdx}, 'destZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] font-bold text-slate-100" />
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">英文目的地</label>
              <input id="box-${bIdx}-dest-en" type="text" placeholder="e.g. Huanggang Port" value="${esc(box.destEn ?? '')}" oninput="updateHeaderRouteBox(${bIdx}, 'destEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200" />
            </div>
          </div>

          <div class="bg-slate-950/75 p-2 rounded-lg border border-slate-800 space-y-2">
            <div class="grid grid-cols-1 gap-2">
              <div class="space-y-1">
                <div class="flex items-center justify-between gap-1">
                  <label class="text-[9px] text-emerald-300 font-bold">中文途徑 (選填・強制「經」)</label>
                  <div class="flex items-center gap-1">
                    <button type="button" onclick="updateHeaderRouteBox(${bIdx}, 'viaZhBold', ${!viaZhBold}, true)" class="px-1.5 py-0.5 rounded border text-[9px] font-black transition ${viaZhBold ? 'bg-emerald-600/35 border-emerald-400 text-emerald-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">B 粗體</button>
                    <button type="button" onclick="updateHeaderRouteBox(${bIdx}, 'viaZhItalic', ${!viaZhItalic}, true)" class="px-1.5 py-0.5 rounded border text-[9px] italic font-serif transition ${viaZhItalic ? 'bg-amber-500/30 border-amber-400 text-amber-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">I 斜體</button>
                  </div>
                </div>
                <div class="flex items-center bg-slate-800 border border-slate-700 rounded overflow-hidden">
                  <span class="px-1.5 py-1 bg-slate-900 text-emerald-300 font-bold text-[9px] border-r border-slate-700 shrink-0">經</span>
                  <input id="box-${bIdx}-via-zh" type="text" placeholder="如：西隧、大欖隧道" value="${esc(String(box.viaZh || '').replace(/^經\s*/, ''))}" oninput="updateHeaderRouteBox(${bIdx}, 'viaZh', this.value)" class="w-full bg-transparent px-2 py-1 text-[11px] text-slate-100 focus:outline-none" />
                </div>
                <div class="flex items-center gap-1.5 pt-0.5">
                  <span class="text-[9px] text-slate-400 shrink-0">中文字體大小 (px):</span>
                  <input type="range" min="7" max="24" step="0.5" value="${viaZhSize}" oninput="updateHeaderRouteBox(${bIdx}, 'viaZhFontSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-emerald-500" />
                  <input type="number" min="6" max="30" step="0.5" value="${viaZhSize}" oninput="updateHeaderRouteBox(${bIdx}, 'viaZhFontSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
                </div>
              </div>

              <div class="space-y-1 pt-1.5 border-t border-slate-800/80">
                <div class="flex items-center justify-between gap-1">
                  <label class="text-[9px] text-sky-300 font-bold">英文途徑 (選填・強制「VIA」)</label>
                  <div class="flex items-center gap-1">
                    <button type="button" onclick="updateHeaderRouteBox(${bIdx}, 'viaEnBold', ${!viaEnBold}, true)" class="px-1.5 py-0.5 rounded border text-[9px] font-black transition ${viaEnBold ? 'bg-sky-600/35 border-sky-400 text-sky-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">B 粗體</button>
                    <button type="button" onclick="updateHeaderRouteBox(${bIdx}, 'viaEnItalic', ${!viaEnItalic}, true)" class="px-1.5 py-0.5 rounded border text-[9px] italic font-serif transition ${viaEnItalic ? 'bg-amber-500/30 border-amber-400 text-amber-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">I 斜體</button>
                  </div>
                </div>
                <div class="flex items-center bg-slate-800 border border-slate-700 rounded overflow-hidden">
                  <span class="px-1.5 py-1 bg-slate-900 text-emerald-300 font-bold text-[9px] border-r border-slate-700 shrink-0">VIA</span>
                  <input id="box-${bIdx}-via-en" type="text" placeholder="e.g. WHC, Tai Lam Tunnel" value="${esc(String(box.viaEn || '').replace(/^via\s+/i, ''))}" oninput="updateHeaderRouteBox(${bIdx}, 'viaEn', this.value)" class="w-full bg-transparent px-2 py-1 text-[11px] text-slate-200 focus:outline-none" />
                </div>
                <div class="flex items-center gap-1.5 pt-0.5">
                  <span class="text-[9px] text-slate-400 shrink-0">英文字體大小 (px):</span>
                  <input type="range" min="6" max="20" step="0.5" value="${viaEnSize}" oninput="updateHeaderRouteBox(${bIdx}, 'viaEnFontSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-sky-500" />
                  <input type="number" min="5.5" max="26" step="0.5" value="${viaEnSize}" oninput="updateHeaderRouteBox(${bIdx}, 'viaEnFontSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const variantTimetablesEditorHTML = variantTables.map((vt, vtIdx) => {
    const v = variants[vtIdx] || { id: vt.variantId, name: `班次 #${vtIdx + 1}`, color: C.themePrimary, badgeText: 'white' };
    const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
    const boundToId = v.boundToId || '';
    const resolvedOrigin = resolveVariantOriginHeaderNames(vt, v);
    const isAutoOrigin = resolvedOrigin.mode === 'auto';
    const isRouteBoxShown = Boolean(vt.showRouteBox);
    const isInnerWhiteLineShown = vt.routeBoxInnerWhiteLine !== false;
    const vtBoxBg = vt.routeBoxColor || v.routeBoxColor || C.routeBoxBg || '#0d8556';
    const vtBoxText = vt.routeBoxTextColor || v.routeBoxTextColor || C.routeBoxText || '#ffffff';

    const vtPadX = (vt.routeBoxPadX !== undefined && !isNaN(Number(vt.routeBoxPadX))) ? Number(vt.routeBoxPadX) : 5.5;
    const vtPadY = (vt.routeBoxPadY !== undefined && !isNaN(Number(vt.routeBoxPadY))) ? Number(vt.routeBoxPadY) : 2;
    const vtOuterPad = (vt.routeBoxOuterPad !== undefined && !isNaN(Number(vt.routeBoxOuterPad))) ? Number(vt.routeBoxOuterPad) : 2;
    const vtTightnessEm = (vt.routeBoxTightnessEm !== undefined && !isNaN(Number(vt.routeBoxTightnessEm))) ? Number(vt.routeBoxTightnessEm) : -0.025;
    const vtFontScaleX = (vt.routeBoxFontScaleX !== undefined && !isNaN(Number(vt.routeBoxFontScaleX))) ? Number(vt.routeBoxFontScaleX) : 100;

    const vtTemplatesBtnsHTML = ROUTE_BOX_TEMPLATES.map(tpl => {
      const isSelected = vt.routeBoxTemplate === tpl.key || (vtBoxBg.toLowerCase() === tpl.bgColor.toLowerCase() && vtBoxText.toLowerCase() === tpl.textColor.toLowerCase());
      const tplSampleNo = tpl.sampleRoute || (tpl.showOwlUnderN ? 'N962' : 'B13');
      return `
        <button type="button" onclick="applyVariantTimetableRouteBoxTemplate(${vtIdx}, '${tpl.key}')" class="p-1.5 rounded-lg border text-left flex items-center justify-between gap-1 transition ${isSelected ? 'ring-2 ring-emerald-400 border-white' : 'border-slate-700 hover:border-slate-500'}" style="background-color:${tpl.bgColor}; color:${tpl.textColor};">
          <span class="text-[9px] font-bold truncate">${esc(tpl.label)}</span>
          <span class="px-1.5 py-0.5 rounded border border-white/75 inline-flex items-center justify-center shrink-0">
            ${renderRouteTokenWithOwlHTML(tplSampleNo, 13, tpl.textColor, tpl.bgColor, false)}
          </span>
        </button>
      `;
    }).join('');

    const otherVariantOptionsHTML = variants
      .map((ov, oIdx) => {
        if (oIdx === vtIdx) return '';
        return `<option value="${ov.id}" ${boundToId === ov.id ? 'selected' : ''}>捆綁已有班次時間表 #${oIdx + 1}：${esc(ov.name)}</option>`;
      })
      .join('');

    const headerBoxOptionsHTML = routeBoxes
      .map((hb, hIdx) => `<option value="${hb.id}" ${boundToId === hb.id ? 'selected' : ''}>捆綁頂部路線號碼框 #${hIdx + 1} (${esc(hb.routeNumber || '路線')})</option>`)
      .join('');

    const dateGroupsEditorHTML = (vt.dateGroups || []).map((dg, dgIdx) => {
      const curPresetKey = getDateGroupPresetKey(dg);
      const isCustomDate = curPresetKey === 'custom';

      const datePresetOptionsHTML = TIMETABLE_DATE_PRESETS.map(p => `
        <option value="${p.key}" ${curPresetKey === p.key ? 'selected' : ''}>
          ${p.key === 'custom' ? '自定義文字 (Custom Text)' : `${p.zh} (${p.en})`}
        </option>
      `).join('');

      const rowsEditorHTML = (dg.rows || []).map((row, rIdx) => {
        ensureTimetableRowSplit(row);
        const isRowBadgeChecked = Boolean(row.showVariantBadge);

        return `
          <div class="flex items-center gap-1">
            ${!isTempScratchMode ? `
              <label class="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 border ${isRowBadgeChecked ? 'border-amber-400/80 text-amber-300' : 'border-slate-700 text-slate-400'} rounded px-1.5 py-1 text-[10px] font-bold cursor-pointer shrink-0 select-none transition">
                <input type="checkbox" ${isRowBadgeChecked ? 'checked' : ''} onchange="updateVariantTimetableRow(${vtIdx}, ${dgIdx},${rIdx}, 'showVariantBadge', this.checked)" class="rounded accent-amber-500 w-3 h-3" />
                <span class="w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] font-black shadow-sm" style="background:${v.color}; color:${vBadgeTextColor};">${vtIdx + 1}</span>
              </label>
            ` : ''}
            <div class="flex-1 flex items-center bg-slate-800 border border-slate-700 rounded overflow-hidden">
              <input type="text" placeholder="開始 (0600)" value="${esc(row.startTime || '')}" oninput="updateVariantTimetableRow(${vtIdx}, ${dgIdx}, ${rIdx}, 'startTime', this.value)" class="w-1/2 bg-transparent px-1.5 py-1 text-slate-100 text-center font-mono text-[11px] focus:outline-none" />
              <span class="px-1 text-emerald-400 font-black select-none">-</span>
              <input type="text" placeholder="結束 (0030)" value="${esc(row.endTime || '')}" oninput="updateVariantTimetableRow(${vtIdx}, ${dgIdx}, ${rIdx}, 'endTime', this.value)" class="w-1/2 bg-transparent px-1.5 py-1 text-slate-100 text-center font-mono text-[11px] focus:outline-none" />
            </div>
            ${vt.showHeadwayCol !== false ? `
              <input type="text" placeholder="班次 (30)" value="${esc(row.headway)}" oninput="updateVariantTimetableRow(${vtIdx}, ${dgIdx},${rIdx}, 'headway', this.value)" class="w-16 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-emerald-300 font-bold text-center text-[11px]" />
            ` : ''}
            <button onclick="removeVariantTimetableRow(${vtIdx}, ${dgIdx}, ${rIdx})" class="px-1.5 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white shrink-0"><i class="fa-solid fa-xmark"></i></button>
          </div>
        `;
      }).join('');

      return `
        <div class="bg-slate-950/80 border border-slate-700/80 rounded-lg p-2 space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <div class="flex-1 min-w-0">
              <label class="block text-[9px] text-emerald-300 font-bold mb-0.5">時間表日期選擇</label>
              <select onchange="updateVariantTimetableDatePreset(${vtIdx}, ${dgIdx}, this.value)" class="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1 text-[11px] font-bold text-slate-100">
                ${datePresetOptionsHTML}
              </select>
            </div>
            <button onclick="removeVariantTimetableDateGroup(${vtIdx}, ${dgIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] self-end"><i class="fa-solid fa-trash"></i></button>
          </div>

          ${isCustomDate ? `
            <div class="grid grid-cols-2 gap-1.5 pt-1">
              <div>
                <label class="block text-[9px] text-amber-300 mb-0.5">自定義日期中文</label>
                <input type="text" value="${esc(dg.dateTitleZh)}" oninput="updateVariantTimetableDateGroup(${vtIdx},${dgIdx}, 'dateTitleZh', this.value)" class="w-full bg-slate-800 border border-amber-500/50 rounded px-2 py-1 font-bold text-slate-100 text-[11px]" />
              </div>
              <div>
                <label class="block text-[9px] text-amber-300 mb-0.5">自定義日期英文</label>
                <input type="text" value="${esc(dg.dateTitleEn)}" oninput="updateVariantTimetableDateGroup(${vtIdx},${dgIdx}, 'dateTitleEn', this.value)" class="w-full bg-slate-800 border border-amber-500/50 rounded px-2 py-1 text-slate-200 text-[11px]" />
              </div>
            </div>
          ` : ''}

          <div class="space-y-1.5 pl-2 border-l-2 border-emerald-500/50 pt-1">
            <div class="flex items-center justify-between text-[10px] text-slate-400">
              <span>時段 (開始 - 結束)${vt.showHeadwayCol !== false ? ' & 班次(分鐘)' : ''}</span>
              <button onclick="addVariantTimetableRow(${vtIdx}, ${dgIdx})" class="text-emerald-400 hover:text-emerald-300 font-bold">+ 新增時段行</button>
            </div>
            ${rowsEditorHTML}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div id="sec-timetable-variant-${vtIdx}" class="bg-slate-900/90 border ${boundToId ? 'border-emerald-500/80' : 'border-slate-700'} rounded-xl p-3 space-y-2.5">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shadow" style="background:${v.color}; color:${vBadgeTextColor};">${vtIdx + 1}</span>
            <span class="font-bold text-emerald-300 text-xs">${esc(v.name)} 獨立時間表</span>
          </div>
          <div class="flex items-center gap-1.5">
            ${!isTempScratchMode ? `
              <button onclick="switchEditorTab('colors', 'sec-colors-variant-${vtIdx}')" class="px-2 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[10px] font-bold transition">
                <i class="fa-solid fa-palette mr-1"></i>此班次配色
              </button>
            ` : ''}
            <button onclick="addVariantTimetableDateGroup(${vtIdx})" class="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold">+ 新增日期組</button>
            ${variants.length > 1 ? `
              <label class="flex items-center gap-1 text-[10px] text-slate-300 cursor-pointer">
                <input type="checkbox" ${vt.enabled !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'enabled', this.checked, true)" class="rounded accent-emerald-500" />
                <span>顯示此表</span>
              </label>
            ` : ''}
          </div>
        </div>

        <div class="bg-slate-950/75 p-2.5 rounded-lg border border-slate-800 space-y-2">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="text-[10px] font-bold text-emerald-300"><i class="fa-solid fa-bus mr-1"></i>此班次路線號碼框設定</span>
            <div class="flex items-center gap-2 flex-wrap">
              <label class="flex items-center gap-1.5 px-2 py-0.5 rounded ${isRouteBoxShown ? 'bg-emerald-600/25 border border-emerald-500/60 text-emerald-200' : 'bg-slate-800 border border-slate-700 text-slate-300'} text-[10px] font-bold cursor-pointer transition">
                <input type="checkbox" ${isRouteBoxShown ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'showRouteBox', this.checked, true)" class="rounded accent-emerald-500" />
                <span>顯示路線號碼框</span>
              </label>
              ${isRouteBoxShown ? `
                <label class="flex items-center gap-1.5 px-2 py-0.5 rounded ${isInnerWhiteLineShown ? 'bg-sky-600/25 border border-sky-500/60 text-sky-200' : 'bg-slate-800 border border-slate-700 text-slate-300'} text-[10px] font-bold cursor-pointer transition">
                  <input type="checkbox" ${isInnerWhiteLineShown ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'routeBoxInnerWhiteLine', this.checked, true)" class="rounded accent-sky-500" />
                  <span>保留框內細白線</span>
                </label>
              ` : ''}
            </div>
          </div>

          ${isRouteBoxShown && !isTempScratchMode ? `
            <div class="bg-slate-900/90 p-1.5 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-amber-300"><i class="fa-solid fa-swatchbook mr-1"></i>此班次時間表路線框樣式模板：</div>
              <div class="grid grid-cols-2 gap-1.5">
                ${vtTemplatesBtnsHTML}
              </div>
            </div>
          ` : ''}

          ${!isTempScratchMode ? `
            <div class="flex items-center justify-between gap-2 bg-slate-900/90 px-2 py-1 rounded border border-slate-700/80">
              <label class="text-[9px] font-bold text-amber-300 shrink-0"><i class="fa-solid fa-link mr-1"></i>捆綁同步設定</label>
              <select onchange="bindServiceVariant(${vtIdx}, this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-100">
                <option value="" ${!boundToId ? 'selected' : ''}>不捆綁 (獨立路線框設定)</option>
                <option value="__theme__" ${boundToId === '__theme__' ? 'selected' : ''}>捆綁主路線主題色 (同步全局主題色)</option>
                ${headerBoxOptionsHTML}${otherVariantOptionsHTML}
              </select>
            </div>
          ` : ''}

          ${isRouteBoxShown && !isTempScratchMode ? `
            <div class="grid grid-cols-3 gap-1.5">
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">路線號碼</label>
                <input type="text" value="${esc(vt.routeNumber || R.routeNumber || 'B13')}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeNumber', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-emerald-300 font-black text-xs" />
              </div>
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">路線框字體大小(px)</label>
                <input type="number" min="0" max="60" step="0.5" value="${Number(vt.routeBoxFontSizePx) || 0}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeBoxFontSizePx', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-emerald-300 font-mono text-xs text-center" />
              </div>
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">路線框位置</label>
                <select onchange="updateVariantTimetableMeta(${vtIdx}, 'routeBoxPosition', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px] text-slate-200">
                  <option value="left" ${(vt.routeBoxPosition || 'left') === 'left' ? 'selected' : ''}>並排於左方</option>
                  <option value="top" ${vt.routeBoxPosition === 'top' ? 'selected' : ''}>置於頂部全寬</option>
                </select>
              </div>
            </div>

            <div class="bg-slate-900/90 p-2 rounded border border-slate-800 space-y-1.5 text-[9px]">
              <div class="grid grid-cols-3 gap-1.5">
                <div>
                  <label class="block text-emerald-300 font-bold mb-0.5">水平 Pad X (px)</label>
                  <input type="number" min="0" max="30" step="0.5" value="${vtPadX}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeBoxPadX', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
                </div>
                <div>
                  <label class="block text-emerald-300 font-bold mb-0.5">垂直 Pad Y (px)</label>
                  <input type="number" min="0" max="30" step="0.5" value="${vtPadY}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeBoxPadY', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
                </div>
                <div>
                  <label class="block text-slate-300 font-bold mb-0.5">外框 Pad (px)</label>
                  <input type="number" min="0" max="15" step="0.5" value="${vtOuterPad}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeBoxOuterPad', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-slate-200 font-mono text-[10px]" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-800">
                <div>
                  <label class="block text-amber-300 font-bold mb-0.5">號碼字距緊密程度 (em)</label>
                  <input type="number" min="-0.2" max="0.2" step="0.005" value="${vtTightnessEm}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeBoxTightnessEm', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-amber-300 font-mono text-[10px]" />
                </div>
                <div>
                  <label class="block text-purple-300 font-bold mb-0.5">號碼字距壓縮/字體變窄 (%)</label>
                  <input type="number" min="50" max="125" step="1" value="${vtFontScaleX}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeBoxFontScaleX', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-purple-300 font-mono text-[10px]" />
                </div>
              </div>
            </div>
          ` : ''}
        </div>

        <div class="flex flex-wrap items-center gap-3 bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
          <label class="flex items-center gap-1.5 text-[11px] text-emerald-300 cursor-pointer">
            <input type="checkbox" ${vt.showHeadwayCol !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'showHeadwayCol', this.checked, true)" class="rounded accent-emerald-500" />
            <span>顯示「班次(分鐘)」欄</span>
          </label>
          <label class="flex items-center gap-1.5 text-[11px] text-sky-300 cursor-pointer">
            <input type="checkbox" ${vt.showDateHeader !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'showDateHeader', this.checked, true)" class="rounded accent-sky-500" />
            <span>顯示「日期及時鐘標籤」</span>
          </label>
          ${variants.length > 1 ? `
            <label class="flex items-center gap-1.5 text-[11px] text-amber-300 cursor-pointer">
              <input type="checkbox" ${vt.showVariantBadge !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'showVariantBadge', this.checked)" class="rounded accent-amber-500" />
              <span>標題顯示圓圈班次號碼</span>
            </label>
          ` : ''}
        </div>

        <div class="bg-slate-950/75 p-2 rounded-lg border border-slate-800 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] font-bold text-emerald-300">
              <i class="fa-solid fa-location-dot mr-1"></i>起點開出標題
            </span>
            <select onchange="updateVariantTimetableMeta(${vtIdx}, 'originHeaderMode', this.value, true)" class="bg-slate-800 border border-slate-700 rounded px-2 py-0.5 text-[10px] text-amber-300 font-bold">
              <option value="auto" ${isAutoOrigin ? 'selected' : ''}>自動識別此班次首站名稱</option>
              <option value="manual" ${!isAutoOrigin ? 'selected' : ''}>手動輸入起點名稱</option>
            </select>
          </div>

          ${isAutoOrigin ? `
            <div class="grid grid-cols-2 gap-1.5 text-[11px]">
              <div class="flex items-center justify-between bg-slate-900/90 border border-slate-700/80 rounded px-2 py-1">
                <span class="text-slate-200 font-bold truncate">${esc(resolvedOrigin.autoZh)}</span>
                <span class="px-1.5 py-0.5 bg-emerald-600/30 text-emerald-300 rounded text-[10px] font-black shrink-0 ml-1">開出</span>
              </div>
              <div class="flex items-center bg-slate-900/90 border border-slate-700/80 rounded px-2 py-1">
                <span class="px-1.5 py-0.5 bg-emerald-600/30 text-emerald-300 rounded text-[10px] font-black shrink-0 mr-1.5">From</span>
                <span class="text-slate-200 truncate">${esc(resolvedOrigin.autoEn)}</span>
              </div>
            </div>
          ` : `
            <div class="grid grid-cols-2 gap-1.5">
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">手動中文起點</label>
                <div class="flex items-center bg-slate-800 border border-slate-700 rounded overflow-hidden">
                  <input type="text" value="${esc(cleanOriginStopZh(vt.originHeaderZh))}" oninput="updateVariantTimetableMeta(${vtIdx}, 'originHeaderZh', this.value)" class="w-full bg-transparent px-2 py-1 text-slate-100 font-bold text-[11px] focus:outline-none" />
                  <span class="px-2 py-1 bg-slate-900 text-emerald-300 font-bold text-[10px] border-l border-slate-700 shrink-0">開出</span>
                </div>
              </div>
              <div>
                <label class="block text-[9px] text-slate-400 mb-0.5">手動英文起點</label>
                <div class="flex items-center bg-slate-800 border border-slate-700 rounded overflow-hidden">
                  <span class="px-2 py-1 bg-slate-900 text-emerald-300 font-bold text-[10px] border-r border-slate-700 shrink-0">From</span>
                  <input type="text" value="${esc(cleanOriginStopEn(vt.originHeaderEn))}" oninput="updateVariantTimetableMeta(${vtIdx}, 'originHeaderEn', this.value)" class="w-full bg-transparent px-2 py-1 text-slate-100 text-[11px] focus:outline-none" />
                </div>
              </div>
            </div>
          `}
        </div>

        <div class="space-y-1.5">
          ${dateGroupsEditorHTML}
        </div>

        ${!isTempScratchMode ? `
          <div class="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-800">
            <div>
              <label class="block text-[10px] text-amber-300 mb-0.5">時間表結尾附註 (中文)</label>
              <input type="text" value="${esc(vt.bottomNoteZh)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'bottomNoteZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100 text-[11px]" />
            </div>
            <div>
              <label class="block text-[10px] text-amber-300 mb-0.5">時間表結尾附註 (英文)</label>
              <input type="text" value="${esc(vt.bottomNoteEn)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'bottomNoteEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-[11px]" />
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  return `
    ${!isTempScratchMode ? `
      <div id="sec-module-order" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-sort text-emerald-400"></i>
            <span>右側靈活模塊順序調配與顯示開關</span>
          </h3>
          <label class="flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer">
            <input type="checkbox" ${L.stickLastModuleToBottom ? 'checked' : ''} onchange="updateLayout('stickLastModuleToBottom', this.checked)" class="rounded accent-emerald-500" />
            <span>最後一項貼齊頁底</span>
          </label>
        </div>
        <div class="space-y-1">
          ${orderListHTML}
        </div>
      </div>
    ` : ''}

    ${isTempScratchMode ? `
      <div id="sec-route" onclick="showToast('臨時製作路線紙模式禁止使用「路線號碼及目的地」！請先還原至正式模式', 'rose')" class="bg-slate-800/40 border border-rose-500/40 rounded-xl p-3.5 space-y-2 opacity-60 cursor-not-allowed select-none">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-slate-300 text-xs flex items-center gap-2">
            <i class="fa-solid fa-lock text-rose-400"></i>
            <span>1. 路線號碼及目的地</span>
          </h3>
          <span class="px-2 py-0.5 rounded bg-rose-600/30 border border-rose-500/50 text-rose-200 text-[10px] font-bold">臨時模式禁止使用</span>
        </div>
      </div>
    ` : `
      <div id="sec-route" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
            <i class="fa-solid fa-bus text-emerald-400"></i>
            <span>1. 路線號碼及目的地</span>
          </h3>
          <button onclick="addHeaderRouteBox()" class="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition">+ 新增路線號碼框</button>
        </div>

        <div class="bg-slate-900/85 p-2.5 rounded-lg border border-slate-700/80 space-y-2.5">
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <label class="block text-[10px] font-bold text-emerald-300">
                <i class="fa-solid fa-grip text-emerald-400 mr-1"></i>路線號碼排列方式
              </label>
              <span class="text-[9px] text-slate-400">目前共 ${routeBoxes.length} 個路線框</span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" onclick="updateRightField('routeLayoutMode', 'single_row')" class="p-2 rounded-lg border text-left transition ${curRouteLayoutMode === 'single_row' ? 'bg-emerald-600/25 border-emerald-500 text-emerald-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                <div class="text-[11px]">每行 1 個路線框</div>
              </button>
              <button type="button" onclick="updateRightField('routeLayoutMode', 'inline_left')" class="p-2 rounded-lg border text-left transition ${curRouteLayoutMode === 'inline_left' ? 'bg-emerald-600/25 border-emerald-500 text-emerald-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                <div class="text-[11px]">與目的地同行並排</div>
              </button>
              <button type="button" onclick="updateRightField('routeLayoutMode', 'two_per_row')" class="p-2 rounded-lg border text-left transition ${curRouteLayoutMode === 'two_per_row' ? 'bg-emerald-600/25 border-emerald-500 text-emerald-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                <div class="text-[11px]">每行 2 個路線框</div>
              </button>
              <button type="button" onclick="updateRightField('routeLayoutMode', 'all_in_row')" class="p-2 rounded-lg border text-left transition ${curRouteLayoutMode === 'all_in_row' ? 'bg-emerald-600/25 border-emerald-500 text-emerald-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                <div class="text-[11px]">所有路線同行並排</div>
              </button>
            </div>
          </div>

          <div class="space-y-1.5 pt-2 border-t border-slate-800">
            <label class="block text-[10px] font-bold text-sky-300">
              <i class="fa-solid fa-signs-post text-sky-400 mr-1"></i>目的地排列方式
            </label>
            <div class="grid grid-cols-1 gap-1.5">
              <button type="button" onclick="updateRightField('destLayoutMode', 'shared_below')" class="p-2 rounded-lg border text-left transition ${curDestLayoutMode === 'shared_below' ? 'bg-sky-600/25 border-sky-400 text-sky-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                <div class="text-[11px]">1. 統一共用主目的地 (單一目的地框)</div>
              </button>
              <div class="grid grid-cols-2 gap-1.5">
                <button type="button" onclick="updateRightField('destLayoutMode', 'per_route_stack')" class="p-2 rounded-lg border text-left transition ${curDestLayoutMode === 'per_route_stack' ? 'bg-sky-600/25 border-sky-400 text-sky-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                  <div class="text-[11px]">2. 逐條路線獨立 (每行1個)</div>
                </button>
                <button type="button" onclick="updateRightField('destLayoutMode', 'per_route_grid')" class="p-2 rounded-lg border text-left transition ${curDestLayoutMode === 'per_route_grid' ? 'bg-sky-600/25 border-sky-400 text-sky-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                  <div class="text-[11px]">3. 逐條路線並排 (左右對齊)</div>
                </button>
              </div>
            </div>
          </div>

          <div class="space-y-1.5 pt-2 border-t border-slate-800">
            <label class="block text-[10px] font-bold text-amber-300">
              <i class="fa-solid fa-columns mr-1"></i>目的地 + 途徑 Container 顯示樣式
            </label>
            <div class="grid grid-cols-2 gap-2">
              <button type="button" onclick="updateRightField('destViaStyle', 'separate')" class="p-2 rounded-lg border text-left transition ${curDestViaStyle === 'separate' ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                <div class="text-[11px]">1. 目的地與途徑分開 Containers</div>
              </button>
              <button type="button" onclick="updateRightField('destViaStyle', 'combined_lr')" class="p-2 rounded-lg border text-left transition ${curDestViaStyle === 'combined_lr' ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold shadow-sm' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
                <div class="text-[11px]">2. 目的地+途徑同一個 Container</div>
              </button>
            </div>
          </div>
        </div>

        ${renderOwlSvgFixPanelHTML(owlPreviewBg, owlPreviewFg)}

        <div class="space-y-2">
          ${headerRouteBoxesEditorHTML}
        </div>
      </div>
    `}

    <div id="sec-intro" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-solid fa-bullhorn text-amber-400"></i>
          <span>2. 路線中英文簡介橫幅</span>
        </h3>
        <label class="flex items-center gap-1.5 text-[11px] text-emerald-300 cursor-pointer">
          <input type="checkbox" ${R.introEnabled !== false ? 'checked' : ''} onchange="updateRightField('introEnabled', this.checked)" class="rounded accent-emerald-500" />
          <span>顯示簡介橫幅</span>
        </label>
      </div>

      <div class="bg-slate-900/85 p-2.5 rounded-lg border border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <span class="text-[10px] font-bold text-emerald-300">
            <i class="fa-solid fa-road mr-1"></i>橫幅左邊道路標誌 SVG 圖標
          </span>
          <div class="flex items-center gap-1.5">
            ${curIntroIconType === 'corridor' || curIntroIconType === 'both' ? createHkTrafficSign353Svg(16, previewCorridorBg, previewCorridorFg) : ''}
            ${curIntroIconType === 'tunnel' || curIntroIconType === 'both' ? createHkTunnelSvg(16, previewTunnelBg, previewTunnelFg) : ''}
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          <button type="button" onclick="updateRightField('introIconType', 'none')" class="p-1.5 rounded border text-center text-[10px] transition ${curIntroIconType === 'none' ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 font-bold' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
            無圖標
          </button>
          <button type="button" onclick="updateRightField('introIconType', 'corridor')" class="p-1.5 rounded border text-center text-[10px] flex items-center justify-center gap-1 transition ${curIntroIconType === 'corridor' ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 font-bold' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
            ${createHkTrafficSign353Svg(13, previewCorridorBg, previewCorridorFg)}
            <span>走廊 SVG</span>
          </button>
          <button type="button" onclick="updateRightField('introIconType', 'tunnel')" class="p-1.5 rounded border text-center text-[10px] flex items-center justify-center gap-1 transition ${curIntroIconType === 'tunnel' ? 'bg-cyan-600/25 border-cyan-400 text-cyan-200 font-bold' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
            ${createHkTunnelSvg(13, previewTunnelBg, previewTunnelFg)}
            <span>隧道 SVG</span>
          </button>
          <button type="button" onclick="updateRightField('introIconType', 'both')" class="p-1.5 rounded border text-center text-[10px] flex items-center justify-center gap-1 transition ${curIntroIconType === 'both' ? 'bg-amber-500/25 border-amber-400 text-amber-200 font-bold' : 'bg-slate-950/60 border-slate-700 text-slate-400 hover:text-slate-200'}">
            <span>走廊+隧道</span>
          </button>
        </div>

        ${curIntroIconType !== 'none' ? `
          <div class="flex items-center gap-2 pt-1 border-t border-slate-800">
            <span class="text-[10px] text-amber-300 font-bold shrink-0">左邊 SVG 圖標大小 (px):</span>
            <input type="range" min="12" max="48" step="1" value="${curIntroIconSize}" oninput="updateRightField('introIconSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-emerald-500" />
            <input type="number" min="12" max="60" step="1" value="${curIntroIconSize}" oninput="updateRightField('introIconSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono text-[11px]" />
          </div>
        ` : ''}
      </div>

      <div class="bg-slate-900/85 p-2.5 rounded-lg border border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <label class="text-[10px] text-emerald-300 font-bold">路線中文簡介</label>
          <div class="flex items-center gap-1">
            <button type="button" onclick="updateRightField('introZhBold', ${!isIntroZhBold})" class="px-2 py-0.5 rounded border text-[10px] font-black transition ${isIntroZhBold ? 'bg-emerald-600/35 border-emerald-400 text-emerald-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">B 粗體</button>
            <button type="button" onclick="updateRightField('introZhItalic', ${!isIntroZhItalic})" class="px-2 py-0.5 rounded border text-[10px] italic font-serif transition ${isIntroZhItalic ? 'bg-amber-500/30 border-amber-400 text-amber-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">I 斜體</button>
          </div>
        </div>
        <input type="text" value="${esc(R.introZh)}" oninput="updateRightField('introZh', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-slate-100 font-bold" />
        <div class="flex items-center gap-2">
          <span class="text-[10px] text-slate-400 shrink-0">中文簡介文字大小 (px):</span>
          <input type="range" min="8" max="26" step="0.5" value="${curIntroZhSize}" oninput="updateRightField('introZhFontSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-emerald-500" />
          <input type="number" min="7" max="32" step="0.5" value="${curIntroZhSize}" oninput="updateRightField('introZhFontSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono text-[11px]" />
        </div>
      </div>

      <div class="bg-slate-900/85 p-2.5 rounded-lg border border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <label class="text-[10px] text-sky-300 font-bold">路線英文簡介</label>
          <div class="flex items-center gap-1">
            <button type="button" onclick="updateRightField('introEnBold', ${!isIntroEnBold})" class="px-2 py-0.5 rounded border text-[10px] font-black transition ${isIntroEnBold ? 'bg-sky-600/35 border-sky-400 text-sky-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">B 粗體</button>
            <button type="button" onclick="updateRightField('introEnItalic', ${!isIntroEnItalic})" class="px-2 py-0.5 rounded border text-[10px] italic font-serif transition ${isIntroEnItalic ? 'bg-amber-500/30 border-amber-400 text-amber-200' : 'bg-slate-800 border-slate-700 text-slate-400'}">I 斜體</button>
          </div>
        </div>
        <input type="text" value="${esc(R.introEn)}" oninput="updateRightField('introEn', this.value)" class="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-slate-100" />
        <div class="flex items-center gap-2">
          <span class="text-[10px] text-slate-400 shrink-0">英文簡介文字大小 (px):</span>
          <input type="range" min="6" max="22" step="0.2" value="${curIntroEnSize}" oninput="updateRightField('introEnFontSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-sky-500" />
          <input type="number" min="6" max="28" step="0.2" value="${curIntroEnSize}" oninput="updateRightField('introEnFontSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-sky-300 font-mono text-[11px]" />
        </div>
      </div>
    </div>

    <div id="sec-timetable" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-regular fa-clock text-sky-400"></i>
          <span>3. 時間表設定</span>
        </h3>
      </div>

      <div class="space-y-3">
        ${variantTimetablesEditorHTML}
      </div>
    </div>

    ${!isTempScratchMode ? `
      <div id="sec-additional" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
            <i class="fa-solid fa-circle-info text-purple-400"></i>
            <span>4. 額外資訊 / 班次備註</span>
          </h3>
          <div class="flex items-center gap-2">
            <button onclick="addAdditionalNote()" class="px-2 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-slate-200 text-[10px]">+ 新增備註</button>
            <input type="checkbox" ${A.enabled ? 'checked' : ''} onchange="updateAdditionalMeta('enabled', this.checked)" class="rounded accent-emerald-500" />
          </div>
        </div>
        <div class="space-y-2">
          ${(A.notes || []).map((n, nIdx) => `
            <div class="bg-slate-900/80 p-2 rounded border border-slate-700 space-y-1.5">
              <div class="flex items-center gap-1.5">
                <input type="text" placeholder="符號 (#)" value="${esc(n.symbol)}" oninput="updateAdditionalNote(${nIdx}, 'symbol', this.value)" class="w-12 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-center font-bold text-amber-300" />
                <input type="text" placeholder="中文備註內容" value="${esc(n.zh)}" oninput="updateAdditionalNote(${nIdx}, 'zh', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
                <button onclick="removeAdditionalNote(${nIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white"><i class="fa-solid fa-trash"></i></button>
              </div>
              <input type="text" placeholder="英文備註內容 (選填)" value="${esc(n.en)}" oninput="updateAdditionalNote(${nIdx}, 'en', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-300 text-[11px]" />
            </div>
          `).join('')}
        </div>
      </div>

      <div id="sec-octopus" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
            <i class="fa-solid fa-credit-card text-amber-400"></i>
            <span>5. 八達通及電子支付分段收費資訊</span>
          </h3>
          <div class="flex items-center gap-2">
            <button onclick="addOctopusItem()" class="px-2 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-slate-200 text-[10px]">+ 新增分段項目</button>
            <input type="checkbox" ${O.enabled ? 'checked' : ''} onchange="updateOctopusMeta('enabled', this.checked)" class="rounded accent-emerald-500" />
          </div>
        </div>
        <div class="space-y-2">
          ${(O.items || []).map((item, iIdx) => `
            <div class="bg-slate-900/80 p-2 rounded border border-slate-700 space-y-1.5">
              <div class="flex items-center gap-1.5">
                <input type="text" placeholder="中文路段" value="${esc(item.sectionZh)}" oninput="updateOctopusItem(${iIdx}, 'sectionZh', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 font-bold text-slate-100" />
                <input type="text" placeholder="價錢 ($6.6)" value="${esc(item.price)}" oninput="updateOctopusItem(${iIdx}, 'price', this.value)" class="w-20 bg-slate-800 border border-slate-700 rounded px-2 py-1 font-black text-emerald-300 text-right" />
                <button onclick="removeOctopusItem(${iIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white"><i class="fa-solid fa-trash"></i></button>
              </div>
              <input type="text" placeholder="英文路段" value="${esc(item.sectionEn)}" oninput="updateOctopusItem(${iIdx}, 'sectionEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-300" />
            </div>
          `).join('')}
        </div>
      </div>

    ${renderBbiEditorSectionHTML()}
    ` : ''}

    ${renderEffectiveFooterEditorSectionHTML()}
  `;
}

function applyZoom() {
  const wrapper = document.getElementById('a4-scale-wrapper');
  const label = document.getElementById('zoom-label');
  if (wrapper) {
    wrapper.style.transform = `scale(${currentZoom})`;
    const extraBottom = (1123 * currentZoom) - 1123;
    wrapper.style.marginBottom = `${extraBottom + 24}px`;
  }
  if (label) {
    label.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

function exportConfigJSON() {
  const dataStr = JSON.stringify(appConfig, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bus_route_${appConfig.rightData.routeNumber || 'sheet'}_config.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('已匯出 JSON 設定檔');
}

function importConfigJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && parsed.stops && parsed.rightData) {
        appConfig = {
          ...getDefaultConfig(),
          ...parsed,
          layout: { ...getDefaultConfig().layout, ...(parsed.layout || {}) },
          colors: { ...getDefaultConfig().colors, ...(parsed.colors || {}) }
        };
        renderA4Sheet();
        renderEditorSidebar();
        showToast('成功載入自定義 JSON 設定檔！');
      } else {
        showToast('JSON 格式不正確', 'error');
      }
    } catch (err) {
      showToast('讀取 JSON 失敗：' + err.message, 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ==========================================================================
// 8. 智慧型平行字型切片嵌入與 100% 零移位極速導出引擎
// ==========================================================================
let rawGoogleFontCSSTextCache = null;
const fontSliceDataUrlCache = new Map();

// 檢查某個 @font-face 的 unicode-range 是否包含當前路線紙實際使用到的字元
function doesUnicodeRangeMatchCodePoints(rangeStr, codePointsSet) {
  if (!rangeStr) return true;
  const parts = rangeStr.split(',');
  for (let i = 0; i < parts.length; i++) {
    const token = parts[i].trim().replace(/^[Uu]\+/, '');
    if (!token) continue;
    let start, end;
    if (token.includes('?')) {
      start = parseInt(token.replace(/\?/g, '0'), 16);
      end = parseInt(token.replace(/\?/g, 'F'), 16);
    } else if (token.includes('-')) {
      const [s, e] = token.split('-');
      start = parseInt(s, 16);
      end = parseInt(e, 16);
    } else {
      start = end = parseInt(token, 16);
    }
    if (isNaN(start) || isNaN(end)) continue;
    for (const cp of codePointsSet) {
      if (cp >= start && cp <= end) return true;
    }
  }
  return false;
}

// 將 ArrayBuffer 轉為 Base64 Data URL
function arrayBufferToBase64DataUrl(buffer, mimeType = 'font/woff2') {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return `data:${mimeType};base64,${btoa(binary)}`;
}

// 僅針對 #a4-sheet 實際使用到的字元，平行下載並快取所需的 Inter 與 Noto Sans TC 字型切片（完全跳過龐大的 FontAwesome）
async function buildA4FontEmbedCSS(sourceSheet) {
  const baseResetCSS = `
    #a4-sheet, #a4-sheet * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
    }
    #a4-sheet {
      --sheet-font: 'Inter', 'Noto Sans TC', 'PingFang HK', 'Microsoft JhengHei', sans-serif;
      font-family: 'Inter', 'Noto Sans TC', 'PingFang HK', 'Microsoft JhengHei', sans-serif !important;
      line-height: 1.5;
    }
    #a4-sheet svg {
      display: block;
    }
  `;

  try {
    if (!rawGoogleFontCSSTextCache) {
      const fontLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map(l => l.href)
        .filter(href => href && href.includes('fonts.googleapis.com'));

      if (fontLinks.length > 0) {
        const cssTexts = await Promise.all(
          fontLinks.map(url => fetch(url).then(r => (r.ok ? r.text() : '')).catch(() => ''))
        );
        rawGoogleFontCSSTextCache = cssTexts.join('\n');
      } else {
        rawGoogleFontCSSTextCache = '';
      }
    }

    if (!rawGoogleFontCSSTextCache) return baseResetCSS;

    const textContent = (sourceSheet ? sourceSheet.textContent : '') || '';
    const codePointsSet = new Set();
    for (const ch of textContent) {
      const cp = ch.codePointAt(0);
      if (cp !== undefined) codePointsSet.add(cp);
    }

    const blocks = rawGoogleFontCSSTextCache.match(/@font-face\s*\{[^}]+\}/g) || [];
    const matchedBlocks = blocks.filter(block => {
      const rangeMatch = block.match(/unicode-range\s*:\s*([^;]+);/i);
      if (!rangeMatch) return true;
      return doesUnicodeRangeMatchCodePoints(rangeMatch[1], codePointsSet);
    });

    const embeddedBlocks = await Promise.all(
      matchedBlocks.map(async block => {
        const urlMatch = block.match(/url\((['"]?)(https:\/\/[^)'"]+)\1\)/i);
        if (!urlMatch) return block;
        const fontUrl = urlMatch[2];

        let dataUrl = fontSliceDataUrlCache.get(fontUrl);
        if (!dataUrl) {
          try {
            const resp = await fetch(fontUrl, { mode: 'cors', cache: 'force-cache' });
            if (resp.ok) {
              const buf = await resp.arrayBuffer();
              dataUrl = arrayBufferToBase64DataUrl(buf, 'font/woff2');
              fontSliceDataUrlCache.set(fontUrl, dataUrl);
            }
          } catch (_) {}
        }

        if (dataUrl) {
          return block.replace(urlMatch[0], `url("${dataUrl}")`);
        }
        return block;
      })
    );

    return baseResetCSS + '\n' + embeddedBlocks.join('\n');
  } catch (e) {
    return baseResetCSS;
  }
}

// 頁面載入後於背景預熱字型切片快取，導出時即可 0 秒等待
async function warmUpFontCache() {
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
    const sheet = document.getElementById('a4-sheet');
    if (sheet) {
      cachedFontEmbedCSS = await buildA4FontEmbedCSS(sheet);
    }
  } catch (_) {}
}

// ==========================================================================
// 9. INITIALIZATION ON WINDOW LOAD
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  renderA4Sheet();
  renderEditorSidebar();
  setTimeout(fitZoom, 80);
  setTimeout(warmUpFontCache, 600);
  window.addEventListener('resize', () => {
    fitZoom();
  });
});