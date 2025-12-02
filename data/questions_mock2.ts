import { Question } from '../types';

export const QUESTIONS_MOCK_2: Question[] = [
  // --- Single Choice ---
  {
    id: 4001,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种技术方法可以降低数据丢包率？',
    options: ['A. 减少传输次数', 'B. 前向纠错(FEC)', 'C. 提高数据速率', 'D. 关闭数据校验'],
    answer: 'B',
    explanation: '前向纠错 (FEC) 通过在发送端对数据进行编码（增加冗余信息），使接收端能够纠正传输过程中产生的错误，从而无需重传即可降低丢包率。'
  },
  {
    id: 4002,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种网络架构适合大规模传感网？',
    options: ['A. 单层网络', 'B. 分层网络', 'C. 点对点网络', 'D. 全连接网络'],
    answer: 'B',
    explanation: '分层网络（Clustering/Hierarchical）通过将网络划分为簇（Cluster），由簇头负责汇聚数据，能有效降低通信开销，适合大规模网络扩展。'
  },
  {
    id: 4003,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种技术可以提供数据安全性？',
    options: ['A. 明文传输', 'B. TLS/SSL', 'C. 降低加密强度', 'D. 减少认证步骤'],
    answer: 'B',
    explanation: 'TLS/SSL (Transport Layer Security) 提供了端到端的加密通信和身份认证，是保障数据传输安全的标准技术。'
  },
  {
    id: 4004,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种传感器可以检测可燃气体？',
    options: ['A. DHT11', 'B. BMP180', 'C. MQ-2', 'D. HC-SR04'],
    answer: 'C',
    explanation: 'MQ-2 是常用的烟雾和可燃气体（如液化气、丁烷、丙烷、甲烷、酒精、氢气等）传感器。'
  },
  {
    id: 4005,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种协议适合资源受限设备？',
    options: ['A. HTTP', 'B. CoAP', 'C. FTP', 'D. SMTP'],
    answer: 'B',
    explanation: 'CoAP (Constrained Application Protocol) 是专为资源受限的物联网设备设计的应用层协议，基于UDP，开销极小。'
  },
  {
    id: 4006,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种技术可以提高传感网的覆盖范围？',
    options: ['A. 降低发射功率', 'B. 中继节点', 'C. 减少数据包大小', 'D. 关闭跳频功能'],
    answer: 'B',
    explanation: '在网络中加入中继节点（Relay Node）或使用多跳路由（Multi-hop Routing）可以显著扩展网络的物理覆盖范围。'
  },
  {
    id: 4007,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种数据存储方式适合边缘计算？',
    options: ['A. 云端存储', 'B. 本地存储', 'C. 分布式存储', 'D. 集中式存储'],
    answer: 'B',
    explanation: '边缘计算强调在数据产生源头附近处理和存储数据，因此本地存储（或边缘节点存储）是其核心特征，能减少上传云端的带宽压力和延迟。'
  },
  {
    id: 4008,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种通信方式抗干扰能力最强？',
    options: ['A. 蓝牙', 'B. ZigBee', 'C. Wi-Fi', 'D. 红外'],
    answer: 'B',
    explanation: 'ZigBee采用直接序列扩频 (DSSS) 技术，在工业环境等高噪声场景下通常比蓝牙和Wi-Fi具有更强的抗干扰能力。红外线需要视距传输，抗光干扰能力差。'
  },
  {
    id: 4009,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种方法可以优化能耗？',
    options: ['A. 持续高功率传输', 'B. 动态调整采样率', 'C. 关闭休眠模式', 'D. 增加数据包大小'],
    answer: 'B',
    explanation: '根据环境变化动态调整采样率（例如变化快时快采，变化慢时慢采）可以有效减少不必要的数据采集和传输，从而节省能量。'
  },
  {
    id: 4010,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种协议适合传感网的实时数据传输？',
    options: ['A. HTTP', 'B. WebSocket', 'C. FTP', 'D. SMTP'],
    answer: 'B',
    explanation: 'WebSocket 提供了全双工的通信通道，允许服务器主动向客户端推送数据，非常适合实时性要求高的数据传输场景。'
  },
  {
    id: 4011,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种技术可以防止数据篡改？',
    options: ['A. 数据压缩', 'B. 数字签名', 'C. 降低加密等级', 'D. 减少数据校验'],
    answer: 'B',
    explanation: '数字签名（Digital Signature）利用非对称加密技术，可以验证数据的完整性和发送者的身份，有效防止数据在传输过程中被篡改。'
  },
  {
    id: 4012,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种传感器可以检测光照强度？',
    options: ['A. 超声波传感器', 'B. 光敏电阻', 'C. 温湿度传感器', 'D. 气压传感器'],
    answer: 'B',
    explanation: '光敏电阻的阻值随光照强度的变化而改变，是检测光照强度的最常用元件。'
  },
  {
    id: 4013,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种方法可以提高网络可靠性？',
    options: ['A. 单一路由', 'B. 多路径路由', 'C. 降低信噪冗余', 'D. 减少节点数量'],
    answer: 'B',
    explanation: '多路径路由（Multipath Routing）允许数据通过多条路径传输，当某条路径失效时可自动切换，显著提高了网络的容错性和可靠性。'
  },
  {
    id: 4014,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种协议适合低功耗广域网？',
    options: ['A. ZigBee', 'B. LoRaWAN', 'C. Bluetooth', 'D. Wi-Fi'],
    answer: 'B',
    explanation: 'LoRaWAN 是专为低功耗广域网 (LPWAN) 设计的MAC层协议。ZigBee和Bluetooth是局域网/个域网技术，Wi-Fi功耗较高。'
  },
  {
    id: 4015,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种方法可以优化数据存储？',
    options: ['A. 存储所有原始数据', 'B. 数据融合', 'C. 增加数据冗余', 'D. 关闭数据压缩'],
    answer: 'B',
    explanation: '数据融合（Data Fusion）通过在节点或汇聚点对数据进行处理、过滤和聚合，只存储和传输有效信息，从而优化存储空间和带宽。'
  },
  {
    id: 4016,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种技术可以提高传感网的实时性？',
    options: ['A. 增加数据包大小', 'B. 降低传输延迟', 'C. 减少数据校验', 'D. 关闭数据加密'],
    answer: 'B',
    explanation: '实时性的核心指标是延迟。通过优化MAC层协议（如使用TDMA时隙）、提高硬件处理速度或优化路由来降低传输延迟，是提高实时性的关键。'
  },
  {
    id: 4017,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种方法可以降低部署成本？',
    options: ['A. 使用高功耗设备', 'B. 自组织网络', 'C. 增加有线连接', 'D. 减少节点数量'],
    answer: 'B',
    explanation: '自组织网络（Ad-hoc/Self-organizing）无需预设基础设施，节点自动组网，大大降低了人工配置和布线的成本。'
  },
  {
    id: 4018,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种传感器可以检测振动？',
    options: ['A. 温湿度传感器', 'B. 加速度传感器', 'C. 气体传感器', 'D. 光敏传感器'],
    answer: 'B',
    explanation: '加速度传感器（如MPU6050, ADXL345）可以检测物体在三个轴向上的加速度变化，从而感知振动、倾斜和运动。'
  },
  {
    id: 4019,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种协议适合设备管理？',
    options: ['A. HTTP', 'B. LwM2M', 'C. FTP', 'D. SMTP'],
    answer: 'B',
    explanation: 'LwM2M (Lightweight M2M) 是OMA定义的轻量级物联网设备管理协议，专门用于资源受限设备的远程管理、固件升级和状态监测。'
  },
  {
    id: 4020,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种技术可以提高传感网的移动性？',
    options: ['A. 固定节点部署', 'B. 动态路由协议', 'C. 降低传输功率', 'D. 减少数据包大小'],
    answer: 'B',
    explanation: '动态路由协议（如AODV, DSR）能够适应网络拓扑的快速变化，当节点移动导致链路断开时，能迅速发现新路径，从而支持移动性。'
  },

  // --- Judge ---
  { id: 4021, type: 'judge', category: '二、判断题', content: 'ZigBee协议基于IEEE 802.15.4标准。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '对。ZigBee的物理层(PHY)和媒体访问控制层(MAC)直接采用IEEE 802.15.4标准。' },
  { id: 4022, type: 'judge', category: '二、判断题', content: 'LoRa技术适合传输高清视频流。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '错。LoRa的带宽极低（通常几百bps到几kbps），只适合传输少量传感器数据，无法传输视频。' },
  { id: 4023, type: 'judge', category: '二、判断题', content: 'DHT11传感器可以同时测量温度和湿度。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '对。DHT11是一款温湿度复合传感器。' },
  { id: 4024, type: 'judge', category: '二、判断题', content: '6LoWPAN协议可以直接在IPv6网络上运行。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '对。6LoWPAN的作用就是将IPv6数据包适配到底层802.15.4网络中，使得传感器节点看起来像是一个IPv6设备，能直接融入IPv6网络。' },
  { id: 4025, type: 'judge', category: '二、判断题', content: 'MQTT协议采用请求/响应通信模式。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '错。MQTT采用发布/订阅（Publish/Subscribe）模式。HTTP和CoAP才常用于请求/响应模式。' },

  // --- Short Answer ---
  {
    id: 4026,
    type: 'text',
    category: '三、简答题',
    content: '列举三种传感网时间同步协议并比较精度。',
    answer: 'RBS, TPSN, FTSP',
    explanation: '1. RBS (Reference Broadcast Synchronization): 接收者-接收者同步，精度较高。\n2. TPSN (Timing-sync Protocol for Sensor Networks): 发送者-接收者同步，基于树状结构，精度优于RBS。\n3. FTSP (Flooding Time Synchronization Protocol): 泛洪时间同步，利用MAC层打时戳，精度最高，误差可达微秒级。'
  },
  {
    id: 4027,
    type: 'text',
    category: '三、简答题',
    content: '为什么传感网通信通常采用差分信号传输机制？',
    answer: '抗干扰能力强，传输距离远',
    explanation: '差分信号（如RS485, CAN）通过两根线上电压的差值来表示逻辑状态。当外部存在共模干扰（如电磁噪声）时，两根线同时受到影响，但差值保持不变，因此具有极强的抗共模干扰能力，适合工业现场长距离传输。'
  },
  {
    id: 4028,
    type: 'text',
    category: '三、简答题',
    content: '说明RPL路由协议中DODAG构建过程。',
    answer: 'DIO广播 -> 父节点选择 -> DAO确认',
    explanation: '1. DODAG根节点广播DIO (DODAG Information Object) 消息，包含路由度量等信息。\n2. 周围节点收到DIO后，根据目标函数（Objective Function）计算Rank值，选择最优父节点加入网络。\n3. 节点向父节点发送DAO (Destination Advertisement Object) 消息，建立向下路由，最终形成有向无环图 (DODAG)。'
  },
  {
    id: 4029,
    type: 'text',
    category: '三、简答题',
    content: '连线搭建一个基于CAN总线的生产线环境监测系统。(见解析图示描述)',
    answer: 'PC -> USB-CAN -> 总线节点',
    explanation: '物理连接描述：\n1. 上位机(PC)通过USB接口连接到USB-CAN分析仪/转换器。\n2. USB-CAN转换器的CAN_H和CAN_L引脚分别连接到双绞线的H和L线。\n3. 各个传感器节点（监测终端）的CAN控制器接口也并联挂载到这组双绞线上（H接H，L接L）。\n4. 在总线的最远两端，必须各跨接一个120Ω的终端匹配电阻，以消除信号反射。'
  },
  {
    id: 4030,
    type: 'text',
    category: '三、简答题',
    content: '将PC机、路由器、网关、主机和从机连线，搭建一个智能家居安防系统。(见解析图示描述)',
    answer: 'PC/手机 -> 路由器 -> 网关 -> 终端节点',
    explanation: '网络拓扑连接描述：\n1. PC机或智能手机通过Wi-Fi或网线连接到家用无线路由器。\n2. 智能网关（作为ZigBee/LoRa协调器）通过网线(WAN/LAN口)或Wi-Fi连接到同一个路由器，接入局域网。\n3. 安防主机（如报警主机）和从机（门磁、红外等传感器）通过ZigBee/射频无线信号与智能网关通信，不直接连网线。\n4. 数据流：传感器 -> 网关 -> 路由器 -> PC/手机端App。'
  }
];
