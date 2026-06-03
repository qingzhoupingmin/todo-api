export const navItems = [
  { name: '首页', path: '/' },
  { 
    name: '机构职能', 
    path: '/organization',
    children: [
      { name: '单位简介', path: '/organization/intro' },
      { name: '领导分工', path: '/organization/leaders' },
      { name: '机构设置', path: '/organization/structure' },
      { name: '联系方式', path: '/organization/contact' }
    ]
  },
  { 
    name: '政务公开', 
    path: '/policy',
    children: [
      { name: '政策法规', path: '/policy/laws' },
      { name: '规划计划', path: '/policy/plans' },
      { name: '统计数据', path: '/policy/statistics' },
      { name: '人事信息', path: '/policy/personnel' },
      { name: '财政预决算', path: '/policy/finance' },
      { name: '政府信息公开指南', path: '/policy/guide' },
      { name: '政府信息公开年报', path: '/policy/annual' },
      { name: '依申请公开', path: '/policy/apply' },
      { name: '重大行政决策', path: '/policy/decisions' },
      { name: '执法公示', path: '/policy/enforcement' }
    ]
  },
  { 
    name: '业务工作', 
    path: '/service',
    children: [
      { name: '公路管理', path: '/service/highway' },
      { name: '市政设施', path: '/service/municipal' },
      { name: '养护作业', path: '/service/maintenance' },
      { name: '工程招标', path: '/service/bidding' },
      { name: '行政许可', path: '/service/license' },
      { name: '服务事项', path: '/service/items' }
    ]
  },
  { 
    name: '路况信息', 
    path: '/news/traffic',
    children: [
      { name: '实时路况', path: '/news/traffic/realtime' },
      { name: '路网监测', path: '/news/traffic/monitor' },
      { name: '施工信息', path: '/news/traffic/construction' },
      { name: '绕行方案', path: '/news/traffic/detour' }
    ]
  },
  { 
    name: '政务服务', 
    path: '/service/gov',
    children: [
      { name: '高效办成一件事', path: '/service/gov/one-stop' },
      { name: '办件进度查询', path: '/service/gov/progress' },
      { name: '资格资质查询', path: '/service/gov/qualification' },
      { name: '政务服务地图', path: '/service/gov/map' }
    ]
  },
  { 
    name: '政民互动', 
    path: '/interactive',
    children: [
      { name: '意见征集', path: '/interactive/suggestions' },
      { name: '在线访谈', path: '/interactive/interview' },
      { name: '常见问题', path: '/interactive/faq' },
      { name: '咨询投诉', path: '/interactive/complaint' },
      { name: '问卷调查', path: '/interactive/survey' },
      { name: '好差评', path: '/interactive/rating' },
      { name: '办不成事反映', path: '/interactive/feedback' }
    ]
  },
  { 
    name: '专题专栏', 
    path: '/news/special',
    children: [
      { name: '党建工作', path: '/news/special/p党建' },
      { name: '安全生产', path: '/news/special/safety' },
      { name: '节能减排', path: '/news/special/environment' },
      { name: '信用评价', path: '/news/special/credit' },
      { name: '创建文明城市', path: '/news/special/civilization' }
    ]
  }
]

export const quickServices = [
  { icon: 'FileText', name: '办事指南', path: '/service/guide', desc: '各类业务办理流程说明' },
  { icon: 'EditPen', name: '行政许可', path: '/service/license', desc: '许可申请入口' },
  { icon: 'Search', name: '进度查询', path: '/service/gov/progress', desc: '输入编号查询办理状态' },
  { icon: 'Map', name: '路况信息', path: '/news/traffic/realtime', desc: '公路路况实时信息' },
  { icon: 'Calendar', name: '规划公示', path: '/policy/plans', desc: '在建/待建工程公示' },
  { icon: 'HelpCircle', name: '常见问题', path: '/interactive/faq', desc: '热点问题解答' },
  { icon: 'Download', name: '表格下载', path: '/service/download', desc: '业务表格集中下载' },
  { icon: 'Phone', name: '咨询投诉', path: '/interactive/complaint', desc: '咨询、投诉入口' }
]

export const bannerItems = [
  {
    id: 1,
    title: '天津市市政公路管理局',
    subtitle: '服务人民，建设美丽天津',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20city%20road%20infrastructure%20with%20blue%20sky%20professional%20government%20building&image_size=landscape_16_9'
  },
  {
    id: 2,
    title: '重点工程建设',
    subtitle: '推动市政基础设施升级改造',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=construction%20site%20heavy%20machinery%20building%20road%20infrastructure&image_size=landscape_16_9'
  },
  {
    id: 3,
    title: '政策解读',
    subtitle: '最新政策文件图文解读',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=policy%20document%20government%20office%20professional&image_size=landscape_16_9'
  },
  {
    id: 4,
    title: '便民服务',
    subtitle: '业务办理指引与服务公告',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=civil%20service%20center%20help%20desk%20modern%20office&image_size=landscape_16_9'
  }
]

export const newsItems = [
  { id: 1, title: '天津市市政公路管理局召开2024年工作会议', date: '2024-03-15', type: '动态', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=meeting%20room%20conference%20professional%20government&image_size=landscape_4_3' },
  { id: 2, title: '我市开展春季公路养护专项行动', date: '2024-03-12', type: '动态', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=road%20maintenance%20workers%20spring%20cleaning&image_size=landscape_4_3' },
  { id: 3, title: '新改建道路工程进展顺利', date: '2024-03-10', type: '动态', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=road%20construction%20progress%20new%20infrastructure&image_size=landscape_4_3' },
  { id: 4, title: '安全生产检查全面展开', date: '2024-03-08', type: '动态', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=safety%20inspection%20construction%20site%20professional&image_size=landscape_4_3' },
  { id: 5, title: '智慧交通系统建设取得新突破', date: '2024-03-05', type: '动态', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20traffic%20system%20technology%20monitoring&image_size=landscape_4_3' }
]

export const noticeItems = [
  { id: 1, title: '关于2026年普通国省道养护工程施工招标公告', date: '2026-05-28', type: '招标' },
  { id: 2, title: '天津市市政公路管理局关于规范道路占用挖掘许可的通知', date: '2026-05-25', type: '政策' },
  { id: 3, title: '2026年市政设施养护计划公示', date: '2026-05-20', type: '公告' },
  { id: 4, title: '五一期间道路安全保障工作安排', date: '2026-04-28', type: '动态' },
  { id: 5, title: '关于开展安全生产月活动的通知', date: '2026-06-01', type: '公告' }
]

export const policyItems = [
  { id: 1, num: '津交发〔2026〕35号', title: '关于2026年S307梅丰线等养护工程施工图设计的批复', org: '天津市交通运输委员会', date: '2026-03-20' },
  { id: 2, num: '津交发〔2026〕28号', title: '关于印发《天津市公路养护管理办法》的通知', org: '天津市交通运输委员会', date: '2026-02-15' },
  { id: 3, num: '津交发〔2026〕18号', title: '关于2026年公路安全生命防护工程实施方案的批复', org: '天津市交通运输委员会', date: '2026-01-20' },
  { id: 4, num: '津交发〔2025〕126号', title: '关于做好2025年冬季公路养护工作的通知', org: '天津市交通运输委员会', date: '2025-12-10' },
  { id: 5, num: '津交发〔2025〕98号', title: '关于印发《天津市市政设施管理规定》的通知', org: '天津市交通运输委员会', date: '2025-10-08' }
]

export const industryNews = [
  { id: 1, title: '全国公路养护技术交流会在津召开', date: '2026-05-28' },
  { id: 2, title: '新型环保材料在市政工程中广泛应用', date: '2026-05-25' },
  { id: 3, title: '智慧交通技术助力城市道路管理升级', date: '2026-05-20' },
  { id: 4, title: '我市公路建设质量再获国家表彰', date: '2026-05-18' },
  { id: 5, title: '绿色养护理念推动行业可持续发展', date: '2026-05-15' },
  { id: 6, title: '京津冀交通一体化建设取得新进展', date: '2026-05-10' },
  { id: 7, title: '人工智能技术在路况监测中的应用', date: '2026-05-08' },
  { id: 8, title: '我市出台市政设施数字化管理方案', date: '2026-05-05' },
  { id: 9, title: '公路养护机械化水平显著提升', date: '2026-05-01' },
  { id: 10, title: '安全生产标准化建设全面推进', date: '2026-04-28' }
]

export const leaders = [
  { id: 1, name: '徐毅', position: '党委常委、党委书记' },
  { id: 2, name: '孟庆旺', position: '党委常委、党委副书记、局长' },
  { id: 3, name: '吕大镛', position: '党委常委、党委副书记、副局长' },
  { id: 4, name: '孙光', position: '党委常委、党委副书记' },
  { id: 5, name: '李惠杰', position: '党委常委、常务副局长' },
  { id: 6, name: '齐洪恩', position: '党委常委、纪委书记、工会主席' },
  { id: 7, name: '王树行', position: '副局长' },
  { id: 8, name: '李子英', position: '党委常委、组织部长' },
  { id: 9, name: '王占英', position: '副总会计师' },
  { id: 10, name: '王江', position: '副总工程师' },
  { id: 11, name: '李树根', position: '副总工程师' },
  { id: 12, name: '田哲', position: '副总工程师' },
  { id: 13, name: '吴秉军', position: '副总工程师' }
]

export const departments = [
  '办公室', '计划处', '设施管理处', '设施养护处', '建设管理处', '规划处', '财务处', '规费管理处',
  '审计处', '资产管理处', '劳动人事处', '科技处', '安全保卫处(武装部)', '法规处（政策研究室）',
  '党委办公室', '纪检委（监察室）', '宣传部', '组织部(统战部)', '老干部处'
]

export const affiliatedUnits = [
  { id: 1, name: '公路处', desc: '主要负责公路养护管理工作' },
  { id: 2, name: '道路桥梁管理处', desc: '负责道路桥梁设施的维护与管理' },
  { id: 3, name: '排水管理处', desc: '负责城市排水系统的运行管理' },
  { id: 4, name: '高速公路管理处', desc: '负责高速公路的运营管理' },
  { id: 5, name: '公路养路费征稽处', desc: '负责养路费的征收管理' },
  { id: 6, name: '公路养护工程处', desc: '负责公路养护工程实施' },
  { id: 7, name: '市政工程设计研究院', desc: '负责市政工程设计研究' },
  { id: 8, name: '市政工程研究院', desc: '负责市政工程技术研究' }
]

export const specialTopics = [
  { id: 1, name: '党建工作', color: '#C62828', icon: 'Heart' },
  { id: 2, name: '安全生产', color: '#EF6C00', icon: 'Shield' },
  { id: 3, name: '节能减排', color: '#2E7D32', icon: 'Leaf' },
  { id: 4, name: '信用评价', color: '#1565C0', icon: 'Star' }
]

export const interactionItems = [
  { id: 1, icon: 'EditPen', name: '意见征集', desc: '当前正在征集的意见建议', path: '/interactive/suggestions' },
  { id: 2, icon: 'MessageCircle', name: '在线访谈', desc: '领导/专家访谈预告与回顾', path: '/interactive/interview' },
  { id: 3, icon: 'HelpCircle', name: '常见问题', desc: '热点问题快速解答', path: '/interactive/faq' },
  { id: 4, icon: 'Phone', name: '咨询投诉', desc: '咨询、投诉、建议提交', path: '/interactive/complaint' }
]

export const footerLinks = [
  { name: '天津政务网', url: 'http://www.tj.gov.cn' },
  { name: '天津市交通运输委员会', url: 'http://jtys.tj.gov.cn' },
  { name: '天津市政府信息公开专栏', url: 'http://www.tj.gov.cn/xxgk/' },
  { name: '中国天津', url: 'http://www.tj.gov.cn' }
]

export const orgInfo = {
  name: '天津市市政公路管理局',
  address: '天津市和平区重庆道118号',
  zipcode: '300050',
  phone: '022-23316965',
  fax: '022-23136714'
}

export const responsibilities = [
  '贯彻执行有关市政道桥、公路管理的法律、法规、规章和方针政策',
  '拟订市政道桥、公路专项规划和建设计划',
  '组织实施市政道桥、公路的养护及大中维修项目',
  '承担道路、公路运行设施执法监督的相关工作',
  '负责市政道桥、公路养护维修工程的质量和安全监督',
  '拟订市政道桥、公路设施有关收费标准',
  '组织推动市政道桥、公路养护维修技术发展',
  '负责市政道桥、公路基础设施管理',
  '负责市政道桥、公路养护管理',
  '承办市委、市政府交办的其它事项'
]