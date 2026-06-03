// 生成随机日期
function randomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return date.toISOString().split('T')[0]
}

// 生成随机浏览数
function randomViews(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 政策文件标题库
const policyTitles = [
  '关于加强市政设施养护管理工作的通知',
  '关于印发《天津市市政公路管理局工作规则》的通知',
  '关于开展2026年春季公路养护专项行动的通知',
  '关于规范道路占用挖掘许可审批流程的实施方案',
  '关于推进智慧交通系统建设的指导意见',
  '关于做好汛期道路安全保障工作的通知',
  '关于加强安全生产工作的紧急通知',
  '关于印发《市政设施突发事件应急预案》的通知',
  '关于开展交通秩序专项整治行动的实施方案',
  '关于规范工程招投标管理工作的规定',
  '关于加强市政工程质量监督管理的通知',
  '关于推进节能减排工作的实施方案',
  '关于做好冬季清雪除冰准备工作的通知',
  '关于加强道路交通安全隐患排查的通知',
  '关于印发《市政设施养护技术规范》的通知',
  '关于开展路灯节能改造工程的实施方案',
  '关于加强排水设施维护管理工作的通知',
  '关于规范行政许可审批流程的规定',
  '关于推进政务服务便民化的实施方案',
  '关于加强网络安全与信息化建设的通知',
  '关于开展文明单位创建活动的实施方案',
  '关于做好重大节假日道路保通工作的通知',
  '关于加强财务管理与审计监督的规定',
  '关于印发《干部选拔任用工作条例》的通知',
  '关于开展党史学习教育的实施方案',
  '关于加强党风廉政建设工作的意见',
  '关于规范公文处理与档案管理工作的规定',
  '关于推进学习型机关建设的实施方案',
  '关于加强保密工作的管理制度',
  '关于做好信息公开工作的指导意见',
  '关于开展志愿服务活动的实施方案',
  '关于加强机关作风建设的若干规定',
  '关于推进依法行政工作的实施方案',
  '关于加强执法规范化建设的通知',
  '关于开展"我为群众办实事"活动的实施方案',
  '关于加强工会组织建设的指导意见',
  '关于做好老干部服务管理工作的通知',
  '关于推进机关文化建设的实施方案',
  '关于加强干部教育培训工作的规定',
  '关于开展青年文明号创建活动的通知',
  '关于加强党建带群建工作的实施意见',
  '关于推进全面从严治党向纵深发展的通知',
  '关于开展"不忘初心、牢记使命"主题教育的实施方案',
  '关于加强党内监督工作的规定',
  '关于做好巡视整改工作的实施方案',
  '关于加强基层组织建设的指导意见',
  '关于开展"学习强国"学习平台推广使用的通知',
  '关于推进精神文明创建工作的实施方案',
  '关于加强和改进思想政治工作的意见',
  '关于开展庆祝建党周年活动的通知'
]

// 新闻标题库
const newsTitles = [
  '天津市市政公路管理局召开2026年度工作会议',
  '我市重点公路工程建设项目进展顺利',
  '春季公路养护工作全面启动',
  '智慧交通系统建设取得显著成效',
  '安全生产工作专项检查圆满完成',
  '市政设施精细化管理水平持续提升',
  '交通拥堵治理工作成效明显',
  '节能减排工作取得新进展',
  '数字化管理平台建设稳步推进',
  '应急保障能力显著增强',
  '干部队伍建设不断加强',
  '党建工作质量稳步提升',
  '文明单位创建成果丰硕',
  '便民服务举措持续优化',
  '政务公开工作规范推进',
  '执法规范化水平不断提高',
  '科技创新能力持续增强',
  '基础设施维护工作扎实开展',
  '道路交通安全形势持续向好',
  '群众满意度显著提升',
  '标准化建设成果广泛应用',
  '人才队伍建设成效显著',
  '制度体系建设不断完善',
  '内部管理工作规范有序',
  '对外服务水平持续提升',
  '重点项目推进成效明显',
  '跨区域合作交流不断深化',
  '行业影响力持续扩大',
  '社会认可度显著提高',
  '综合实力迈上新台阶'
]

// 通知公告标题库
const noticeTitles = [
  '关于2026年市政设施养护工程施工招标公告',
  '关于规范道路占用挖掘许可办理的通知',
  '2026年度市政工程设计招标公告',
  '关于开展安全生产隐患排查的通知',
  '关于做好防汛工作的通知',
  '关于规范行政许可审批流程的通知',
  '关于开展路灯节能改造的公告',
  '关于加强排水设施维护的通知',
  '关于做好冬季清雪准备工作的通知',
  '关于开展交通秩序整治的公告',
  '关于规范工程招投标的通知',
  '关于加强质量监督管理的通知',
  '关于推进智慧交通建设的公告',
  '关于做好重大活动保障的通知',
  '关于加强网络安全建设的通知'
]

// 生成50条政策文件
export const policyItems = Array.from({ length: 50 }, (_, i) => {
  const year = 2024 + Math.floor(i / 15)
  const month = ((i % 12) + 1).toString().padStart(2, '0')
  const num = (50 - i).toString().padStart(3, '0')
  return {
    id: i + 1,
    num: `津政发〔${year}〕${num}号`,
    title: policyTitles[i % policyTitles.length],
    org: '天津市市政公路管理局',
    date: randomDate(new Date(year, 0, 1), new Date(year, 11, 31)),
    views: randomViews(50, 5000)
  }
})

// 生成30条新闻动态
export const newsItems = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: newsTitles[i % newsTitles.length],
  date: randomDate(new Date(2026, 0, 1), new Date(2026, 5, 3)),
  type: i % 3 === 0 ? '动态' : i % 3 === 1 ? '要闻' : '快讯',
  image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E5%A4%A9%E6%B5%B7%E5%B8%82%E6%94%BF%E5%BA%8A%E4%BA%A4%E6%94%BF%E6%96%B0%E9%97%BB%E5%8A%A8%E6%80%81%E5%A4%96%E6%99%AF%E4%B8%AD%E5%9B%BD%E8%88%AA%E7%BA%BF&image_size=landscape_4_3`,
  summary: `天津市市政公路管理局认真贯彻落实市委市政府决策部署，持续推进各项工作落实落地，取得了良好成效。`
}))

// 生成20条通知公告
export const noticeItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: noticeTitles[i % noticeTitles.length],
  date: randomDate(new Date(2026, 0, 1), new Date(2026, 5, 3)),
  type: i % 4 === 0 ? '招标' : i % 4 === 1 ? '公告' : i % 4 === 2 ? '通知' : '政策'
}))

// 生成30条行业资讯
export const industryNews = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: [
    '全国市政公路养护技术交流大会在津成功举办',
    '新型沥青材料在我市道路维修中广泛应用',
    '智慧路灯系统在多个区投入使用',
    '我市公路工程质量再获交通运输部表彰',
    '海绵城市理念在市政工程中深入应用',
    '京津冀交通一体化建设取得重大突破',
    '人工智能技术助力道路病害智能检测',
    '绿色养护技术推广取得显著成效',
    '桥梁健康监测系统实现全覆盖',
    '我市建成首个市政设施数字孪生平台',
    '新型环保融雪剂研发成功并投入使用',
    '道路施工快速养护技术取得新突破',
    '我市建成城市道路综合管理信息平台',
    '预制装配式桥梁技术应用取得新进展',
    '道路塌陷预警系统成功研发并应用',
    '我市荣获全国文明单位称号',
    '公路养护机械化水平位居全国前列',
    '市政设施管养分离改革试点成功',
    '我市成为全国交通强国试点城市',
    '智慧交通信号系统全面升级改造',
    '道路积水预警系统实现主城区全覆盖',
    '我市首个"无废工地"示范项目建成',
    '市政工程BIM技术应用走在全国前列',
    '道路照明节能改造惠及千家万户',
    '我市建成城市交通仿真平台',
    '桥梁防碰撞预警系统成功研发',
    '地下管廊智能化运维水平显著提升',
    '我市成为国家新型基础设施建设试点',
    '道路养护无人化作业试点取得成功'
  ][i % 30],
  date: randomDate(new Date(2026, 0, 1), new Date(2026, 5, 3))
}))

// 导航菜单
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
      { name: '党建工作', path: '/news/special/party' },
      { name: '安全生产', path: '/news/special/safety' },
      { name: '节能减排', path: '/news/special/environment' },
      { name: '信用评价', path: '/news/special/credit' },
      { name: '创建文明城市', path: '/news/special/civilization' }
    ]
  }
]

// 快捷服务
export const quickServices = [
  { icon: 'Document', name: '办事指南', path: '/service/guide', desc: '各类业务办理流程说明' },
  { icon: 'EditPen', name: '行政许可', path: '/service/license', desc: '许可申请入口' },
  { icon: 'Search', name: '进度查询', path: '/service/gov/progress', desc: '输入编号查询办理状态' },
  { icon: 'MapLocation', name: '路况信息', path: '/news/traffic/realtime', desc: '公路路况实时信息' },
  { icon: 'Calendar', name: '规划公示', path: '/policy/plans', desc: '在建/待建工程公示' },
  { icon: 'Help', name: '常见问题', path: '/interactive/faq', desc: '热点问题解答' },
  { icon: 'Download', name: '表格下载', path: '/service/download', desc: '业务表格集中下载' },
  { icon: 'Phone', name: '咨询投诉', path: '/interactive/complaint', desc: '咨询、投诉入口' }
]

// 轮播图
export const bannerItems = [
  {
    id: 1,
    title: '天津市市政公路管理局',
    subtitle: '服务人民，建设美丽天津',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E5%A4%A9%E6%B5%B7%E5%B8%82%E5%B8%82%E6%94%BF%E5%85%AC%E8%B7%AF%E7%AE%A1%E7%90%86%E5%B1%80%E5%A4%96%E6%99%AF%E4%B8%AD%E5%9B%BD%E8%88%AA%E7%BA%BF%E5%A4%96%E6%8E%A5%E5%A4%96%E6%99%AF&image_size=landscape_16_9'
  },
  {
    id: 2,
    title: '重点工程建设',
    subtitle: '推动市政基础设施升级改造',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E5%A4%A9%E6%B5%B7%E5%B8%82%E9%93%81%E8%B7%AF%E5%85%AC%E8%B7%AF%E6%96%BD%E5%B7%A5%E7%8E%B0%E5%9C%BA%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%BA%BA%E5%9C%B0%E5%8C%BA&image_size=landscape_16_9'
  },
  {
    id: 3,
    title: '政策解读',
    subtitle: '最新政策文件图文解读',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E5%A4%A9%E6%B5%B7%E5%B8%82%E6%94%BF%E5%BA%8A%E5%8D%8F%E8%AE%AE%E5%8E%85%E4%B8%AD%E5%9B%BD%E6%94%BF%E5%BA%8A%E4%BA%A4%E6%94%BF&image_size=landscape_16_9'
  },
  {
    id: 4,
    title: '便民服务',
    subtitle: '业务办理指引与服务公告',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E5%A4%A9%E6%B5%B7%E5%B8%82%E6%94%BF%E5%8A%9E%E6%9C%8D%E5%8A%A1%E5%A4%A7%E5%8E%B3%E5%A4%96%E6%99%AF%E4%B8%AD%E5%9B%BD%E6%94%BF%E5%8A%9E%E5%A4%A7%E5%8E%B3&image_size=landscape_16_9'
  }
]

// 领导信息
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

// 内设机构
export const departments = [
  '办公室', '计划处', '设施管理处', '设施养护处', '建设管理处', '规划处', '财务处', '规费管理处',
  '审计处', '资产管理处', '劳动人事处', '科技处', '安全保卫处(武装部)', '法规处（政策研究室）',
  '党委办公室', '纪检委（监察室）', '宣传部', '组织部(统战部)', '老干部处'
]

// 直属单位
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

// 专题专栏
export const specialTopics = [
  { id: 1, name: '党建工作', color: '#C62828', icon: 'Heart' },
  { id: 2, name: '安全生产', color: '#EF6C00', icon: 'Shield' },
  { id: 3, name: '节能减排', color: '#2E7D32', icon: 'Leaf' },
  { id: 4, name: '信用评价', color: '#1565C0', icon: 'Star' }
]

// 政民互动项目
export const interactionItems = [
  { id: 1, icon: 'EditPen', name: '意见征集', desc: '当前正在征集的意见建议', path: '/interactive/suggestions' },
  { id: 2, icon: 'Message', name: '在线访谈', desc: '领导/专家访谈预告与回顾', path: '/interactive/interview' },
  { id: 3, icon: 'Help', name: '常见问题', desc: '热点问题快速解答', path: '/interactive/faq' },
  { id: 4, icon: 'Phone', name: '咨询投诉', desc: '咨询、投诉、建议提交', path: '/interactive/complaint' }
]

// 底部链接
export const footerLinks = [
  { name: '天津政务网', url: 'http://www.tj.gov.cn' },
  { name: '天津市交通运输委员会', url: 'http://jtys.tj.gov.cn' },
  { name: '天津市政府信息公开专栏', url: 'http://www.tj.gov.cn/xxgk/' },
  { name: '中国天津', url: 'http://www.tj.gov.cn' }
]

// 单位信息
export const orgInfo = {
  name: '天津市市政公路管理局',
  address: '天津市和平区重庆道118号',
  zipcode: '300050',
  phone: '022-23316965',
  fax: '022-23136714'
}

// 主要职责
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

// 常见问题数据
export const faqItems = [
  {
    id: 1,
    question: '如何办理道路占用挖掘许可？',
    answer: '申请人可通过天津政务网或到我局办事窗口提交申请材料，包括申请表、设计方案、施工方案等。我局将在10个工作日内完成审批。'
  },
  {
    id: 2,
    question: '超限运输车辆如何办理通行证？',
    answer: '超限运输车辆需提前向我局提交超限运输申请，包括车辆信息、货物信息、运输路线等。我局将在5个工作日内完成路线勘验并作出决定。'
  },
  {
    id: 3,
    question: '如何查询行政许可办理进度？',
    answer: '申请人可通过我局官网的"进度查询"栏目，输入办件编号查询办理进度。也可拨打022-23316965进行人工查询。'
  },
  {
    id: 4,
    question: '发现道路病害如何举报？',
    answer: '市民可通过拨打12345市长热线、12328交通服务热线或通过我局官网"咨询投诉"栏目进行举报，我局将及时安排处置。'
  },
  {
    id: 5,
    question: '路灯不亮或损坏如何报修？',
    answer: '可通过拨打022-23316965服务热线进行报修，也可通过"天津市政"微信公众号在线报修，我局将在24小时内完成处置。'
  }
]

// 意见征集数据
export const suggestionsItems = [
  {
    id: 1,
    title: '关于《天津市市政设施养护管理办法（征求意见稿）》公开征求意见',
    deadline: '2026-06-30',
    status: '进行中'
  },
  {
    id: 2,
    title: '关于《天津市道路占用挖掘许可管理规定（征求意见稿）》公开征求意见',
    deadline: '2026-07-15',
    status: '进行中'
  },
  {
    id: 3,
    title: '关于《天津市智慧交通系统建设方案（征求意见稿）》公开征求意见',
    deadline: '2026-06-20',
    status: '已结束'
  }
]

// 在线访谈数据
export const interviewItems = [
  {
    id: 1,
    title: '孟庆旺局长就"推进市政公路管理现代化"进行在线访谈',
    time: '2026-05-28 14:00',
    status: '回顾'
  },
  {
    id: 2,
    title: '李惠杰副局长就"2026年重点工程建设"进行在线访谈',
    time: '2026-04-15 14:00',
    status: '回顾'
  }
]

// 统计数据
export const statisticsData = {
  roadLength: '12568', // 公路总里程（公里）
  bridgeCount: '1865', // 桥梁数量（座）
  drainagePipes: '4521', // 排水管道（公里）
  streetLights: '125680', // 路灯数量（盏）
  annualMaintenance: '856', // 年度养护工程（项）
  staffCount: '2586' // 在编人员（人）
}
