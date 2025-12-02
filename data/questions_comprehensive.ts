import { Question } from '../types';

export const QUESTIONS_COMPREHENSIVE: Question[] = [
  // --- Single Choice (Part 1) ---
  {
    id: 1,
    type: 'single',
    category: '一、单选题',
    content: '在STM32CubeMX中，配置时钟树时，HSE通常指？',
    options: ['A. 内部高速时钟', 'B. 外部高速晶振', 'C. 内部低速时钟', 'D. 外部低速晶振'],
    answer: 'B',
    explanation: 'HSE (High Speed External) 指的是外部高速时钟源，通常由外部晶振提供。HSI 是内部高速，LSE 是外部低速，LSI 是内部低速。'
  },
  {
    id: 2,
    type: 'single',
    category: '一、单选题',
    content: 'STM32的GPIO端口最高支持多少MHz的翻转速度？',
    options: ['A. 2MHz', 'B. 10MHz', 'C. 50MHz', 'D. 100MHz'],
    answer: 'C',
    explanation: '在STM32F103等常见系列中，GPIO在高速模式下通常最高支持50MHz的翻转速度。'
  },
  {
    id: 3,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种传感器最适合STM32的ADC直接测量？',
    options: ['A. 数字温度传感器(DS18B20)', 'B. 模拟光照传感器(光敏电阻)', 'C. 超声波测距模块(HC-SR04)', 'D. 数字气压计(BMP280)'],
    answer: 'B',
    explanation: '光敏电阻输出的是模拟电压信号，可以直接通过STM32的ADC（模数转换器）读取。DS18B20、HC-SR04、BMP280均为数字接口或脉冲接口。'
  },
  {
    id: 4,
    type: 'single',
    category: '一、单选题',
    content: '配置STM32的NVIC时，优先级数值越小表示？',
    options: ['A. 优先级越低', 'B. 优先级越高', 'C. 无影响', 'D. 取决于分组类型'],
    answer: 'B',
    explanation: 'ARM Cortex-M内核的中断优先级数值越小，代表优先级越高（0为最高优先级）。'
  },
  {
    id: 5,
    type: 'single',
    category: '一、单选题',
    content: '在STM32中，DMA的作用是？',
    options: ['A. 直接内存访问，减少CPU负担', 'B. 提供高精度时钟', 'C. 增强GPIO驱动能力', 'D. 加密数据传输'],
    answer: 'A',
    explanation: 'DMA (Direct Memory Access) 允许外设与存储器之间直接传输数据，无需CPU干预，从而大大降低CPU负担。'
  },
  {
    id: 6,
    type: 'single',
    category: '一、单选题',
    content: 'STM32的定时器(TIM)在输入捕获模式下，通常用于测量？',
    options: ['A. 电压值', 'B. 脉冲宽度或频率', 'C. 电阻值', 'D. 温度值'],
    answer: 'B',
    explanation: '输入捕获模式（Input Capture）主要用于测量输入信号的脉冲宽度（PWM波宽）或频率。'
  },
  {
    id: 7,
    type: 'single',
    category: '一、单选题',
    content: '在STM32 HAL库中，延时函数HAL_Delay()的底层依赖是？',
    options: ['A. 定时器(TIM)', 'B. 系统滴答定时器(SysTick)', 'C. 看门狗(IWDG)', 'D. 实时时钟(RTC)'],
    answer: 'B',
    explanation: 'HAL_Delay() 默认基于 SysTick 定时器来实现毫秒级延时。'
  },
  {
    id: 8,
    type: 'single',
    category: '一、单选题',
    content: 'STM32的外部中断(EXTI)可以映射到多少个GPIO引脚？',
    options: ['A. 16个', 'B. 32个', 'C. 64个', 'D. 128个'],
    answer: 'A',
    explanation: 'STM32的EXTI控制器通常有16个外部中断线（EXTI0-EXTI15），对应GPIO的Pin0-Pin15，虽然GPIO总数很多，但同序号的引脚共享一根中断线。'
  },
  {
    id: 9,
    type: 'single',
    category: '一、单选题',
    content: '使用STM32的PWM功能时，关键配置寄存器是？',
    options: ['A. USART_DR', 'B. TIM_CCR', 'C. GPIO_ODR', 'D. ADC_SR'],
    answer: 'B',
    explanation: 'TIM_CCR (Capture/Compare Register) 捕获/比较寄存器决定了PWM的占空比。'
  },
  {
    id: 10,
    type: 'single',
    category: '一、单选题',
    content: 'STM32的ADC转换结果默认是？',
    options: ['A. 8位无符号整数', 'B. 12位无符号整数', 'C. 16位有符号整数', 'D. 32位浮点数'],
    answer: 'B',
    explanation: 'STM32F1/F4等常用系列的ADC分辨率通常为12位（0-4095）。'
  },
  {
    id: 11,
    type: 'single',
    category: '一、单选题',
    content: 'STM32的GPIO工作模式中，以下哪种模式适合读取按键输入？',
    options: ['A. 推挽输出(GPIO_MODE_OUTPUT_PP)', 'B. 开漏输出(GPIO_MODE_OUTPUT_OD)', 'C. 浮空输入(GPIO_MODE_INPUT_FLOATING)', 'D. 复用功能(GPIO_MODE_AF_PP)'],
    answer: 'C',
    explanation: '读取按键通常使用输入模式。浮空输入或上拉/下拉输入均可，但选项中只有C是输入模式。通常配合外部电阻或内部上拉使用。'
  },
  {
    id: 12,
    type: 'single',
    category: '一、单选题',
    content: 'RS485支持哪种通信方式？',
    options: ['A. 仅单工', 'B. 仅半双工', 'C. 仅全双工', 'D. 半双工或全双工'],
    answer: 'D',
    explanation: 'RS485标准本身支持半双工（2线制）和全双工（4线制），虽然工业上最常见的是2线半双工。'
  },
  {
    id: 13,
    type: 'single',
    category: '一、单选题',
    content: 'Modbus通信中，CRC校验的作用是？',
    options: ['A. 加密数据', 'B. 验证数据完整性', 'C. 压缩数据', 'D. 提高传输速率'],
    answer: 'B',
    explanation: 'CRC (Cyclic Redundancy Check) 循环冗余校验用于检测数据在传输过程中是否发生错误，保证数据完整性。'
  },
  {
    id: 14,
    type: 'single',
    category: '一、单选题',
    content: 'RS485总线通信全部失败，首先应检查？',
    options: ['A. 终端电阻连接', 'B. 摄像头分辨率', 'C. 传感器灵敏度', 'D. 主控芯片型号'],
    answer: 'A',
    explanation: 'RS485总线常见故障原因之一是终端电阻缺失或配置错误导致信号反射，或者A/B线接反。'
  },
  {
    id: 15,
    type: 'single',
    category: '一、单选题',
    content: '智能安防系统接入云平台，RS485应转换为？',
    options: ['A. Wi-Fi', 'B. 4G', 'C. 光纤', 'D. 以上均可'],
    answer: 'D',
    explanation: 'RS485是有线现场总线，接入云平台可以通过DTU转换为Wi-Fi、4G或通过光纤收发器传输，故以上均可。'
  },
  {
    id: 16,
    type: 'single',
    category: '一、单选题',
    content: 'CAN总线的典型传输介质是？',
    options: ['A. 双绞线', 'B. 同轴电缆', 'C. 光纤', 'D. 无线射频'],
    answer: 'A',
    explanation: 'CAN总线使用差分信号传输，标准物理层介质是屏蔽或非屏蔽双绞线。'
  },
  {
    id: 17,
    type: 'single',
    category: '一、单选题',
    content: 'STM32CubeMX的主要功能是？',
    options: ['A. 仅用于下载STM32芯片手册', 'B. 可视化配置引脚、时钟和中间件，生成初始化代码', 'C. 仅用于进行代码调试', 'D. 制作PCB电路板'],
    answer: 'B',
    explanation: 'STM32CubeMX 是ST提供的图形化配置工具，用于生成初始化C代码。'
  },
  {
    id: 18,
    type: 'single',
    category: '一、单选题',
    content: '安装Keil MDK时，必须安装的组件是？',
    options: ['A. 游戏引擎插件', 'B. 对应STM32系列的Device Family Pack(DFP)', 'C. 视频播放器', 'D. Python解释器'],
    answer: 'B',
    explanation: 'Keil MDK 需要安装对应的器件支持包 (DFP) 才能支持具体的芯片型号编译和调试。'
  },
  {
    id: 19,
    type: 'single',
    category: '一、单选题',
    content: 'ST-LINK驱动安装失败的常见原因是？',
    options: ['A. 未关闭Windows驱动程序签名强制', 'B. 显示器刷新率过低', 'C. 鼠标DPI设置错误', 'D. 未安装Office软件'],
    answer: 'A',
    explanation: '在某些Windows版本下，未签名的驱动程序需要禁用驱动签名强制才能安装，或者USB端口供电不足/驱动版本不兼容。'
  },
  {
    id: 20,
    type: 'single',
    category: '一、单选题',
    content: '在IAP升级该工程时，提示 "No license" 错误的原因是？',
    options: ['A. 未安装STM32CubeProgrammer', 'B. 未激活或注册IDE许可证', 'C. 电脑分辨率设置错误', 'D. ST-LINK固件未安装'],
    answer: 'B',
    explanation: 'Keil MDK 如果未激活（使用试用版或未破解），在编译超过限制大小的代码时会报错 No license。'
  },
  {
    id: 21,
    type: 'single',
    category: '一、单选题',
    content: '以下哪种信号属于数字信号？',
    options: ['A. 正弦波', 'B. PWM波(脉宽调制)', 'C. 模拟电压(0-5V)', 'D. 电流信号(4-20mA)'],
    answer: 'B',
    explanation: 'PWM波只有高低两个电平状态，属于数字信号，尽管它常用于等效模拟输出。'
  },
  {
    id: 22,
    type: 'single',
    category: '一、单选题',
    content: '若要实现LED调光，CC2530的哪个功能最合适？',
    options: ['A. ADC', 'B. PWM', 'C. UART', 'D. SPI'],
    answer: 'B',
    explanation: 'LED调光通常通过改变PWM（脉冲宽度调制）的占空比来实现亮度的调节。'
  },
  {
    id: 23,
    type: 'single',
    category: '一、单选题',
    content: 'CC2530的工作电压范围是？',
    options: ['A. 1.8V-3.6V', 'B. 5V-12V', 'C. 0.9V-1.2V', 'D. 仅支持3.3V'],
    answer: 'A',
    explanation: 'CC2530是低功耗ZigBee芯片，典型工作电压范围是2.0V-3.6V (宽泛说法1.8-3.6V)。'
  },
  {
    id: 24,
    type: 'single',
    category: '一、单选题',
    content: '在仓储监测系统中，以下哪种传感器最适合检测温湿度？',
    options: ['A. DHT11', 'B. HC-SR04', 'C. MQ-2', 'D. LDR'],
    answer: 'A',
    explanation: 'DHT11是温湿度传感器；HC-SR04是超声波；MQ-2是烟雾/气体；LDR是光敏电阻。'
  },
  {
    id: 25,
    type: 'single',
    category: '一、单选题',
    content: '监测光照强度时，应选择哪种传感器？',
    options: ['A. 光敏电阻(LDR)', 'B. 红外对射管', 'C. 超声波传感器', 'D. 气压传感器'],
    answer: 'A',
    explanation: '光敏电阻的阻值随光照强度变化，适合检测光照。'
  },
  {
    id: 26,
    type: 'single',
    category: '一、单选题',
    content: 'LoRa工作在以下哪个频段？',
    options: ['A. 2.4GHz', 'B. 5GHz', 'C. 433MHz/868MHz/915MHz', 'D. 60GHz'],
    answer: 'C',
    explanation: 'LoRa通常工作在Sub-GHz频段，如433MHz(CN/EU), 868MHz(EU), 915MHz(US)。'
  },
  {
    id: 27,
    type: 'single',
    category: '一、单选题',
    content: '开关量信号通常指什么类型的信号？',
    options: ['A. 连续变化的电压值', 'B. 只有“开”和“关”两种状态', 'C. 正弦波信号', 'D. 随机噪声信号'],
    answer: 'B',
    explanation: '开关量即数字量，只有0和1（开和关）两种逻辑状态。'
  },
  {
    id: 28,
    type: 'single',
    category: '一、单选题',
    content: '下图(指题意)哪一项不是单片机中的定时/计数器具有的功能？',
    options: ['A. 定时功能', 'B. 计数功能', 'C. 中断功能', 'D. AES加密功能'],
    answer: 'D',
    explanation: '普通定时器具有定时、计数、输入捕获、输出比较、中断等功能。AES加密通常由专门的硬件加密单元或软件库实现，不是定时器的功能。'
  },
  {
    id: 29,
    type: 'single',
    category: '一、单选题',
    content: 'STM32F103最高主频是 (MHz)？',
    options: ['A. 72', 'B. 36', 'C. 18', 'D. 9'],
    answer: 'A',
    explanation: 'STM32F103系列基于Cortex-M3内核，标准最高主频为72MHz。'
  },
  {
    id: 30,
    type: 'single',
    category: '一、单选题',
    content: '以下哪个是STM32F103VET6的基本定时器？',
    options: ['A. TIM1', 'B. TIM4', 'C. TIM6', 'D. TIM8'],
    answer: 'C',
    explanation: 'STM32F103的高级定时器是TIM1/TIM8，通用是TIM2-5，基本定时器是TIM6/TIM7。'
  },

  // --- True/False (Part 2) ---
  {
    id: 31,
    type: 'judge',
    category: '二、判断题',
    content: '霍尔元件传感器属于声学传感器。',
    options: ['A. 对', 'B. 错'],
    answer: 'B',
    explanation: '错。霍尔元件是磁敏传感器，用于检测磁场，而非声学。'
  },
  {
    id: 32,
    type: 'judge',
    category: '二、判断题',
    content: '蓝牙5.0的通信距离比ZigBee更远。',
    options: ['A. 对', 'B. 错'],
    answer: 'B',
    explanation: '错。通常ZigBee的组网能力和传输距离（特别是在Mesh网络下）优于点对点的经典蓝牙，虽蓝牙5.0增加了长距离模式，但ZigBee在工业场景覆盖通常更广。'
  },
  {
    id: 33,
    type: 'judge',
    category: '二、判断题',
    content: '3G/4G模块适合所有低功耗传感节点。',
    options: ['A. 对', 'B. 错'],
    answer: 'B',
    explanation: '错。3G/4G模块功耗较高，不适合电池供电的低功耗传感节点（如LoRa/NB-IoT更适合）。'
  },
  {
    id: 34,
    type: 'judge',
    category: '二、判断题',
    content: '提高数据加密强度会提升系统性能。',
    options: ['A. 对', 'B. 错'],
    answer: 'B',
    explanation: '错。高强度加密需要更多的计算资源，通常会降低系统处理速度和吞吐量，即降低性能。'
  },
  {
    id: 35,
    type: 'judge',
    category: '二、判断题',
    content: '自组织网络需要预先部署基础设施。',
    options: ['A. 对', 'B. 错'],
    answer: 'B',
    explanation: '错。Ad-hoc（自组织）网络的特点就是无中心、无基础设施，节点间自动组网。'
  },

  // --- Multiple Choice (Part 3) ---
  {
    id: 36,
    type: 'multi',
    category: '三、多选题',
    content: '以下哪些传感器可以用于环境监测？(多选)',
    options: ['A. DHT11', 'B. BMP180', 'C. HC-SR04', 'D. MQ-2', 'E. MPU6050'],
    answer: 'A, B, D',
    explanation: 'DHT11(温湿度)、BMP180(气压/温度)、MQ-2(烟雾气体)用于环境。HC-SR04是测距，MPU6050是姿态(加速度/陀螺仪)。'
  },
  {
    id: 37,
    type: 'multi',
    category: '三、多选题',
    content: '传感网组网时需要考虑哪些因素？(多选)',
    options: ['A. 节点能耗', 'B. 通信距离', 'C. 数据安全', 'D. 协议兼容性', 'E. 屏幕分辨率'],
    answer: 'A, B, C, D',
    explanation: '传感网主要关注通信、功耗、安全和协议。屏幕分辨率通常是终端显示设备的属性，非组网核心因素。'
  },
  {
    id: 38,
    type: 'multi',
    category: '三、多选题',
    content: '下列哪些技术可以提升传感网安全性？(多选)',
    options: ['A. AES加密', 'B. TLS/SSL', 'C. 数据签名', 'D. 路径采样率', 'E. 关机认证'],
    answer: 'A, B, C',
    explanation: 'AES(内容加密)、TLS/SSL(传输通道安全)、数据签名(身份验证/防篡改)均为安全技术。'
  },
  {
    id: 39,
    type: 'multi',
    category: '三、多选题',
    content: '传感网中常用的定位技术包括？(多选)',
    options: ['A. RSS定位', 'B. TOA定位', 'C. 图像识别', 'D. 数据融合', 'E. 加权算法'],
    answer: 'A, B',
    explanation: 'RSS(接收信号强度)和TOA(到达时间)是经典的无线定位技术。'
  },
  {
    id: 40,
    type: 'multi',
    category: '三、多选题',
    content: '选择传感器网络协议时需要考虑？(多选)',
    options: ['A. 节点功耗', 'B. 通信距离', 'C. 数据速率', 'D. 协议开销', 'E. 传感器颜色'],
    answer: 'A, B, C, D',
    explanation: '除了颜色，其他都是技术选型关键参数。'
  },

  // --- Short Answer (Part 4) ---
  {
    id: 41,
    type: 'text',
    category: '四、简答题',
    content: '简答题：说明ZigBee协议中的三大设备类型及其功能。(10分)',
    answer: '参考答案',
    explanation: '1. 协调器 (Coordinator): 网络的发起者，负责建立网络、选择信道和网络ID，存储网络信息，一个网络只能有一个。\n2. 路由器 (Router): 负责路由转发，扩展网络覆盖范围，允许其他节点加入，可以休眠也可以常供电。\n3. 终端设备 (End Device): 网络的末梢，低功耗，通常电池供电，不能转发数据，只能与父节点通信。'
  },
  {
    id: 42,
    type: 'text',
    category: '四、简答题',
    content: '简答题：说明无线传感器网络拓扑中的三种典型应用。(10分)',
    answer: '参考答案',
    explanation: '1. 星型拓扑 (Star): 结构简单，所有节点直接与中心节点通信，功耗低但中心节点负担重，适合小范围智能家居。\n2. 树状拓扑 (Tree): 层次化结构，易于扩展，适合大面积数据采集。\n3. 网状拓扑 (Mesh): 可靠性高，具有自愈能力，多路径传输，适合复杂的工业环境或城市照明控制。'
  },
  {
    id: 43,
    type: 'text',
    category: '四、简答题',
    content: '编程题：编写程序，控制主控板上一盏LED灯实现闪烁的效果。(STM32CubeMX软件内配置参数需要截图) (10.0分)',
    answer: '参考代码思路',
    explanation: 'HAL库代码示例：\n\nwhile (1)\n{\n  HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);\n  HAL_Delay(500); // 延时500ms\n}\n\n配置要点：\n1. 在CubeMX中将对应引脚(如PA5)配置为GPIO_Output。\n2. 设置GPIO mode为Push Pull，Pull-up/down根据电路决定，Speed可设为Low/Medium。'
  },
  {
    id: 44,
    type: 'text',
    category: '四、简答题',
    content: '编程题：编写程序，实现主控板上4盏灯LED1-LED4实现流水灯效果。(10.0分)',
    answer: '参考代码思路',
    explanation: '思路：依次点亮和熄灭LED。\n\nwhile(1) {\n  // LED1 ON, others OFF\n  HAL_GPIO_WritePin(GPIOB, GPIO_PIN_0, GPIO_PIN_RESET);\n  HAL_Delay(200);\n  HAL_GPIO_WritePin(GPIOB, GPIO_PIN_0, GPIO_PIN_SET);\n\n  // LED2 ON...\n  HAL_GPIO_WritePin(GPIOB, GPIO_PIN_1, GPIO_PIN_RESET);\n  HAL_Delay(200);\n  HAL_GPIO_WritePin(GPIOB, GPIO_PIN_1, GPIO_PIN_SET);\n\n  // ... LED3, LED4 同理\n}'
  }
];
