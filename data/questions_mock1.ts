import { Question } from '../types';

export const QUESTIONS_MOCK_1: Question[] = [
  // --- Single Choice ---
  {
    id: 3001,
    type: 'single',
    category: '一、单选题',
    content: '下列哪种传感器通常用于测量环境温湿度？',
    options: ['A. 光敏电阻', 'B. 热电偶', 'C. DHT11', 'D. 超声波传感器'],
    answer: 'C',
    explanation: 'DHT11 是一款常用的数字温湿度传感器。光敏电阻测光，热电偶主要测高温，超声波测距。'
  },
  {
    id: 3002,
    type: 'single',
    category: '一、单选题',
    content: 'ZigBee的工作频段不包括以下哪个？',
    options: ['A. 2.4GHz', 'B. 5GHz', 'C. 868MHz', 'D. 915MHz'],
    answer: 'B',
    explanation: 'ZigBee主要工作在2.4GHz (全球通用), 868MHz (欧洲), 915MHz (美国) 频段。5GHz是Wi-Fi的常用频段。'
  },
  {
    id: 3003,
    type: 'single',
    category: '一、单选题',
    content: '在无线传感网中，以下哪种协议最适合低功耗设备？',
    options: ['A. HTTP', 'B. TCP', 'C. MQTT', 'D. FTP'],
    answer: 'C',
    explanation: 'MQTT (Message Queuing Telemetry Transport) 是基于发布/订阅模式的轻量级协议，专为低带宽和不可靠网络设计，非常适合低功耗IoT设备。'
  },
  {
    id: 3004,
    type: 'single',
    category: '一、单选题',
    content: 'LoRa的主要优势是？',
    options: ['A. 高带宽', 'B. 远距离通信', 'C. 低延迟', 'D. 高功耗'],
    answer: 'B',
    explanation: 'LoRa (Long Range) 的核心优势是长距离通信和低功耗，牺牲了带宽和速率。'
  },
  {
    id: 3005,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种数据格式常用于物联网设备间的数据交换？',
    options: ['A. CSV', 'B. JSON', 'C. TXT', 'D. XLS'],
    answer: 'B',
    explanation: 'JSON (JavaScript Object Notation) 格式轻量、易读，是目前IoT设备与云端或设备间交换数据的主流格式。'
  },
  {
    id: 3006,
    type: 'single',
    category: '一、单选题',
    content: '下列哪种技术不属于短距离无线通信？',
    options: ['A. Bluetooth', 'B. Wi-Fi', 'C. NB-IoT', 'D. ZigBee'],
    answer: 'C',
    explanation: 'NB-IoT (Narrowband IoT) 是广域网（LPWAN）技术，覆盖距离远。蓝牙、Wi-Fi、ZigBee均为短距离通信技术。'
  },
  {
    id: 3007,
    type: 'single',
    category: '一、单选题',
    content: '在传感网中，网关的主要作用是？',
    options: ['A. 数据存储', 'B. 协议转换', 'C. 数据加密', 'D. 数据可视化'],
    answer: 'B',
    explanation: '网关的核心功能是连接不同的网络（如传感网与互联网），并进行协议转换（如将ZigBee/LoRa协议转换为TCP/IP）。'
  },
  {
    id: 3008,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种传感器可以检测人体红外信号？',
    options: ['A. 湿度传感器', 'B. 气体传感器', 'C. PIR传感器', 'D. 压力传感器'],
    answer: 'C',
    explanation: 'PIR (Passive Infrared) 被动红外传感器用于检测人体或动物发射的红外线，常用于安防和自动照明。'
  },
  {
    id: 3009,
    type: 'single',
    category: '一、单选题',
    content: '下列哪种技术可以提高传感网的抗干扰能力？',
    options: ['A. 增加传输功率', 'B. 跳频技术', 'C. 减少节点数量', 'D. 降低数据速率'],
    answer: 'B',
    explanation: '跳频技术 (FHSS) 通过快速切换频率来躲避特定频段的干扰，显著提高无线通信的抗干扰能力。'
  },
  {
    id: 3010,
    type: 'single',
    category: '一、单选题',
    content: '传感网中常用的应用层协议是？',
    options: ['A. HTTP', 'B. 6LoWPAN', 'C. FTP', 'D. SMTP'],
    answer: 'A',
    explanation: 'HTTP/CoAP/MQTT 是常见的应用层协议。6LoWPAN是网络层适配层技术。'
  },
  {
    id: 3011,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种数据库适合存储传感器的时间序列数据？',
    options: ['A. MySQL', 'B. InfluxDB', 'C. MongoDB', 'D. Redis'],
    answer: 'B',
    explanation: 'InfluxDB 是一款高性能的时间序列数据库 (TSDB)，专门优化用于存储带有时间戳的传感器数据、监控数据等。'
  },
  {
    id: 3012,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，RSSI通常用于衡量什么？',
    options: ['A. 数据包大小', 'B. 信号强度', 'C. 网络延迟', 'D. 数据吞吐量'],
    answer: 'B',
    explanation: 'RSSI (Received Signal Strength Indication) 接收信号强度指示，用于衡量无线信号的强度。'
  },
  {
    id: 3013,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种加密方式适合资源受限的传感网设备？',
    options: ['A. RSA', 'B. AES-128', 'C. SHA-256', 'D. 3DES'],
    answer: 'B',
    explanation: 'AES-128 是对称加密算法，相比非对称加密（如RSA），其运算速度快、资源消耗少，更适合资源受限的嵌入式设备。'
  },
  {
    id: 3014,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，MAC层的主要功能是？',
    options: ['A. 数据加密', 'B. 介质访问控制', 'C. 数据压缩', 'D. 路由选择'],
    answer: 'B',
    explanation: 'MAC (Medium Access Control) 层的核心任务是控制多个节点如何公平、有序地访问共享的无线介质，避免冲突。'
  },
  {
    id: 3015,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种拓扑结构在传感网中最为常见？',
    options: ['A. 总线型', 'B. 环型', 'C. 星型', 'D. 网状型'],
    answer: 'D',
    explanation: '虽然星型也很常见，但Mesh（网状）网络因其自组网、自愈合和多跳传输特性，在WSN（无线传感器网络）中极具代表性。'
  },
  {
    id: 3016,
    type: 'single',
    category: '一、单选题',
    content: '下列哪种通信方式适合水下传感网？',
    options: ['A. Wi-Fi', 'B. ZigBee', 'C. 水声通信', 'D. LoRa'],
    answer: 'C',
    explanation: '无线电波（Wi-Fi, ZigBee, LoRa）在水中衰减极快，水下通信通常采用声波（水声通信）。'
  },
  {
    id: 3017,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，数据融合的主要目的是？',
    options: ['A. 增加数据量', 'B. 减少冗余数据', 'C. 提高传输速率', 'D. 增强信号强度'],
    answer: 'B',
    explanation: '数据融合（Data Fusion）旨在通过处理多源数据来减少冗余传输，节省能量，并可能提高信息的准确性。'
  },
  {
    id: 3018,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种协议用于局域网中的设备发现？',
    options: ['A. HTTP', 'B. TCP', 'C. mDNS', 'D. FTP'],
    answer: 'C',
    explanation: 'mDNS (Multicast DNS) 允许在没有DNS服务器的局域网中实现主机名解析和设备发现。'
  },
  {
    id: 3019,
    type: 'single',
    category: '一、单选题',
    content: '传感网中，以下哪种方法可以延长节点寿命？',
    options: ['A. 增加采样频率', 'B. 休眠调度', 'C. 提高发射功率', 'D. 减少数据压缩'],
    answer: 'B',
    explanation: '休眠调度（Sleep Scheduling）让节点在不工作时进入低功耗睡眠模式，是延长电池寿命最有效的手段之一。'
  },
  {
    id: 3020,
    type: 'single',
    category: '一、单选题',
    content: '下列哪种传感器可以测量大气压？',
    options: ['A. DHT11', 'B. BMP180', 'C. HC-SR04', 'D. MQ-2'],
    answer: 'B',
    explanation: 'BMP180 是一款专用的数字气压传感器。'
  },

  // --- Multi Choice ---
  {
    id: 3021,
    type: 'multi',
    category: '二、多选题',
    content: '下列哪些是传感网MAC层协议？(多选)',
    options: ['A. CSMA/CA', 'B. TDMA', 'C. HTTP', 'D. 6LoWPAN', 'E. FTP'],
    answer: 'A, B',
    explanation: 'CSMA/CA (载波监听多路访问/冲突避免) 和 TDMA (时分多址) 是MAC层协议。HTTP/FTP是应用层，6LoWPAN是适配层。'
  },
  {
    id: 3022,
    type: 'multi',
    category: '二、多选题',
    content: '传感网络路由协议设计通常考虑哪些特性？(多选)',
    options: ['A. 能量均衡', 'B. 低计算复杂度', 'C. 支持拓扑动态变化', 'D. 鲁棒性', 'E. 节点颜色协调'],
    answer: 'A, B, C, D',
    explanation: '路由协议需考虑资源限制（能量、计算）和网络特性（动态拓扑、鲁棒性）。'
  },
  {
    id: 3023,
    type: 'multi',
    category: '二、多选题',
    content: '以下哪些技术不属于LPWAN？(多选)',
    options: ['A. LoRaWAN', 'B. NB-IoT', 'C. ZigBee', 'D. Sigfox', 'E. Bluetooth'],
    answer: 'C, E',
    explanation: 'ZigBee 和 Bluetooth 是短距离通信技术。LoRaWAN, NB-IoT, Sigfox 属于低功耗广域网(LPWAN)。'
  },
  {
    id: 3024,
    type: 'multi',
    category: '二、多选题',
    content: '传感网数据融合可实现的优化包括？(多选)',
    options: ['A. 减少冗余数据', 'B. 提高数据精度', 'C. 降低传输能耗', 'D. 增加数据数量', 'E. 延长网络生命周期'],
    answer: 'A, B, C, E',
    explanation: '数据融合通过减少冗余来降低能耗和延长寿命，同时多源数据融合可提高精度。'
  },
  {
    id: 3025,
    type: 'multi',
    category: '二、多选题',
    content: '以下哪些传感器通常需要定期校准？(多选)',
    options: ['A. 温湿度传感器', 'B. 气体传感器', 'C. 加速度计', 'D. 光敏电阻', 'E. 超声波传感器'],
    answer: 'A, B, C',
    explanation: '气体传感器（漂移大）、加速度计（零偏）、温湿度传感器（老化）通常需要校准。光敏电阻通常用于定性测量，超声波一般无需频繁校准。'
  },

  // --- Judge ---
  { id: 3026, type: 'judge', category: '三、判断题', content: '数据融合会增加传感网的总能耗。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '错。数据融合通过减少无线传输的数据量，从而降低总能耗（通信能耗通常远大于计算能耗）。' },
  { id: 3027, type: 'judge', category: '三、判断题', content: 'CoAP协议基于UDP传输。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '对。CoAP (Constrained Application Protocol) 专为受限设备设计，底层使用UDP。' },
  { id: 3028, type: 'judge', category: '三、判断题', content: 'PIR传感器通过检测声音来感知人体活动。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '错。PIR检测的是红外辐射的变化。' },
  { id: 3029, type: 'judge', category: '三、判断题', content: '星型拓扑结构中所有节点可以直接通信。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '错。星型网络中，终端节点之间不能直接通信，必须通过中心节点（网关/协调器）转发。' },
  { id: 3030, type: 'judge', category: '三、判断题', content: 'InfluxDB是关系型数据库。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '错。InfluxDB 是时序数据库，非关系型 (NoSQL)。' },

  // --- Short Answer ---
  {
    id: 3031,
    type: 'text',
    category: '四、简答题',
    content: '简述RS-485的两种通信方式。',
    answer: '半双工 (2线), 全双工 (4线)',
    explanation: '1. 半双工 (Half-Duplex): 使用两根线 (A, B)，同一时刻只能发送或接收，最常用。\n2. 全双工 (Full-Duplex): 使用四根线 (TX+, TX-, RX+, RX-)，可以同时发送和接收。'
  },
  {
    id: 3032,
    type: 'text',
    category: '四、简答题',
    content: '简述LoRa无线技术。',
    answer: '远距离、低功耗、CSS扩频',
    explanation: 'LoRa (Long Range) 是一种基于线性调频扩频 (CSS) 技术的低功耗广域网 (LPWAN) 通信技术。它在保持低功耗的同时，实现了极长的通信距离和抗干扰能力，适合大规模物联网部署。'
  },
  {
    id: 3033,
    type: 'text',
    category: '四、简答题',
    content: 'CAN总线的数据通信基于五种类型的帧结构，包括哪些？',
    answer: '数据帧, 远程帧, 错误帧, 过载帧, 帧间隔',
    explanation: '1. 数据帧 (Data Frame): 传输数据。\n2. 远程帧 (Remote Frame): 请求数据。\n3. 错误帧 (Error Frame): 报告错误。\n4. 过载帧 (Overload Frame): 延时传送。\n5. 帧间隔 (Interframe Space): 帧间分隔。'
  },
  {
    id: 3034,
    type: 'text',
    category: '四、简答题',
    content: '简述LoRa的特点。',
    answer: '广覆盖、低功耗、大连接、低成本',
    explanation: '1. 广覆盖：通信距离可达数公里至数十公里。\n2. 低功耗：电池寿命可达数年。\n3. 大连接：单网关可接入成千上万个节点。\n4. 低成本：非授权频段，无需频段使用费，终端模组成本低。'
  }
];
