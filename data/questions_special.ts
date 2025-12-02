import { Question } from '../types';

export const QUESTIONS_JUDGE_SPECIAL: Question[] = [
  { id: 1001, type: 'judge', category: '一、判断题', content: '开关量输入可以连接到STM32的任何一个IO引脚，无需配置。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '必须配置GPIO模式（如输入模式），且可能需要开启时钟。' },
  { id: 1002, type: 'judge', category: '一、判断题', content: '定时器中断服务函数中，必须清除中断标志位，否则会连续进入中断。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '中断标志位不清除会导致CPU认为中断请求未被处理，从而反复重入中断。' },
  { id: 1003, type: 'judge', category: '一、判断题', content: '外部中断线(EXTI)可以配置为上升沿、下降沿或双边沿触发。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'STM32的EXTI支持三种触发方式配置。' },
  { id: 1004, type: 'judge', category: '一、判断题', content: 'ADC转换完成后，如果开启了ADC转换完成中断，则会产生中断请求。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'EOC（End Of Conversion）标志位置位，若中断使能则触发中断。' },
  { id: 1005, type: 'judge', category: '一、判断题', content: '在STM32中，一个GPIO引脚可以同时配置为外部中断和ADC输入。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '通常模拟输入模式下，数字功能被禁用，包括外部中断触发逻辑。' },
  { id: 1006, type: 'judge', category: '一、判断题', content: '使用HAL库开发时，所有的中断服务函数都在库中定义好，用户不需要自己编写。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: 'HAL库提供了弱定义(Weak)的回调函数，但真正的业务逻辑（或重写回调）需要用户编写。底层IRQHandler通常在stm32f1xx_it.c中。' },
  { id: 1007, type: 'judge', category: '一、判断题', content: '外部中断是独立于GPIO引脚存在的，因此不需要配置GPIO引脚即可使用外部中断。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '外部中断必须映射到具体的GPIO引脚（通过AFIO/SYSCFG配置）。' },
  { id: 1008, type: 'judge', category: '一、判断题', content: 'STM32F1包含20个外部中断EXTI。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '通常是16个GPIO线(EXTI0-15)加上PVD、RTC、USB等，共约19-20个。' },
  { id: 1009, type: 'judge', category: '一、判断题', content: 'PWM为脉冲宽度调制。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'Pulse Width Modulation。' },
  { id: 1010, type: 'judge', category: '一、判断题', content: 'SYSCLK系统时钟为72MHz。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '对于STM32F103系列，标准最高主频为72MHz。' },
  { id: 1011, type: 'judge', category: '一、判断题', content: '定时器的预分频器可以将定时器的时钟频率分频，从而改变定时器的计数速度。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'PSC寄存器用于分频。' },
  { id: 1012, type: 'judge', category: '一、判断题', content: '使用PWM输出时，通过改变自动重装载寄存器ARR的值可以改变PWM的占空比。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: 'ARR决定周期（频率），CCR（捕获比较寄存器）决定占空比。' },
  { id: 1013, type: 'judge', category: '一、判断题', content: 'SystemClock_Config()函数功能是系统时钟初始化。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'CubeMX生成的标准时钟配置函数。' },
  { id: 1014, type: 'judge', category: '一、判断题', content: '在STM32中，模拟信号必须经过ADC转换才能被单片机处理。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'CPU只能处理数字信号。' },
  { id: 1015, type: 'judge', category: '一、判断题', content: 'STM32F103VET6芯片的定时器中断中，基本定时器TIM6和TIM7只能向上计数。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '基本定时器通常只支持向上计数模式。' },
  { id: 1016, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，通用定时器TIM2-TIM5支持输入捕获和输出比较功能。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '这是通用定时器的标准功能。' },
  { id: 1017, type: 'judge', category: '一、判断题', content: '高级定时器TIM1和TIM8不支持PWM输出。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '高级定时器支持PWM，且支持互补输出和死区控制。' },
  { id: 1018, type: 'judge', category: '一、判断题', content: '外部中断线共有16条，每个GPIO引脚都可以映射到一条外部中断线上。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '虽然有16条GPIO中断线，但同一时刻PA0、PB0不能同时映射到EXTI0。' },
  { id: 1019, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，配置外部中断时，必须将GPIO配置为输入模式。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '作为中断输入源，引脚应配置为输入（浮空/上拉/下拉）。' },
  { id: 1020, type: 'judge', category: '一、判断题', content: 'USART中断中，RXNE中断表示发送寄存器为空。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: 'RXNE = Read Data Register Not Empty (接收非空)。TXE才是发送寄存器空。' },
  { id: 1021, type: 'judge', category: '一、判断题', content: 'ADC中断可以在每次转换完成后产生中断。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'EOC中断。' },
  { id: 1022, type: 'judge', category: '一、判断题', content: 'GPIO推挽输出模式可以同时输出高电平和低电平，驱动能力强。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '任何引脚同一时刻只能输出一种电平。推挽是指其内部结构既有PMOS上拉又有NMOS下拉，驱动能力确实强，但“同时输出”描述错误。' },
  { id: 1023, type: 'judge', category: '一、判断题', content: 'GPIO开漏输出模式只能输出低电平，高电平需要外部上拉电阻。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '开漏只能拉低，输出高电平时呈高阻态。' },
  { id: 1024, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，ADC转换结果可以通过DMA传输，而不需要CPU干预。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'ADC支持DMA请求。' },
  { id: 1025, type: 'judge', category: '一、判断题', content: '定时器的预分频器PSC和自动重装载寄存器ARR都是16位的，因此定时器最大计数值为65535。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'STM32F1的定时器计数器通常是16位的。' },
  { id: 1026, type: 'judge', category: '一、判断题', content: 'STM32F103VETx的NVIC支持中断优先级分组，其中抢占优先级和响应优先级可以设置为0-15。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '优先级寄存器只有4位有效（高4位），所以范围是0-15。但分组决定了这4位怎么分。单独看某个优先级可以是0-15，但抢占和响应不能同时达到0-15（因为总共只有4bit）。例如全给抢占，抢占0-15，响应0；全给响应，抢占0，响应0-15。' },
  { id: 1027, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，使用HAL库配置中断时，必须调用HAL_NVIC_SetPriority()设置优先级，然后调用HAL_NVIC_EnableIRQ()使能中断。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '标准流程。' },
  { id: 1028, type: 'judge', category: '一、判断题', content: '使用STM32CubeMX配置GPIO时，可以选择上下拉电阻，这会影响引脚的默认电平。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'Pull-up/Pull-down配置。' },
  { id: 1029, type: 'judge', category: '一、判断题', content: '外部中断可以配置为上升沿触发、下降沿触发或双边沿触发。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '同Q1003。' },
  { id: 1030, type: 'judge', category: '一、判断题', content: 'USART的TC（发送完成）中断在数据从移位寄存器发送完成时产生，而TXE（发送数据寄存器空）中断在数据从发送数据寄存器转移到移位寄存器时产生。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '准确描述。' },
  { id: 1031, type: 'judge', category: '一、判断题', content: 'ADC的扫描模式用于连续转换多个通道，而单次模式只转换一次。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '扫描模式针对一组通道。' },
  { id: 1032, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，ADC的转换结果是一个12位的数字量。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '12-bit ADC。' },
  { id: 1033, type: 'judge', category: '一、判断题', content: 'GPIO的复用功能输出模式是由外设控制引脚输出，而不是由CPU直接控制。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'AF模式下，引脚控制权交给片上外设（如USART, TIM）。' },
  { id: 1034, type: 'judge', category: '一、判断题', content: '定时器的更新中断在计数器溢出时产生，即当计数值达到自动重装载值时产生。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'Update Event (UEV)。' },
  { id: 1035, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，所有定时器都有编码器接口功能。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '基本定时器（TIM6/7）没有。' },
  { id: 1036, type: 'judge', category: '一、判断题', content: '使用HAL库编程时，每个中断服务函数的名字是固定的，例如TIM2_IRQHandler。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '启动文件startup_stm32xxx.s中定义了中断向量表和函数名。' },
  { id: 1037, type: 'judge', category: '一、判断题', content: '外部中断和事件都可以唤醒处于低功耗模式的CPU。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'WFI/WFE指令。' },
  { id: 1038, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，ADC的转换时间可以通过配置ADC的时钟分频和采样时间来控制。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'Tconv = Sampling time + 12.5 cycles。' },
  { id: 1039, type: 'judge', category: '一、判断题', content: 'GPIO的模拟输入模式用于ADC采样，此时引脚的数字输入功能被禁用。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '为了减少干扰和功耗，施密特触发器被关闭。' },
  { id: 1040, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，USART的波特率可以通过配置BRR寄存器设置，且支持小数分数。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'BRR寄存器包含Mantissa和Fraction部分。' },
  { id: 1041, type: 'judge', category: '一、判断题', content: '定时器的输入捕获功能可以测量脉冲的宽度和频率。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: '常见应用。' },
  { id: 1042, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，每个定时器只有一个中断源，因此所有定时器中断都共享同一个中断服务函数。', options: ['A. 对', 'B. 错'], answer: 'B', explanation: '每个定时器可能有多个中断标志（Update, CC1-4, Trigger等），且不同定时器通常有独立的IRQ通道（如TIM2_IRQn, TIM3_IRQn）。' },
  { id: 1043, type: 'judge', category: '一、判断题', content: '使用STM32CubeMX配置工程时，可以自动生成初始化代码，包括中断优先级配置和使能。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'MX的主要功能。' },
  { id: 1044, type: 'judge', category: '一、判断题', content: '在STM32F103VETx中，ADC转换可以通过软件触发、外部触发或定时器触发。', options: ['A. 对', 'B. 错'], answer: 'A', explanation: 'ADC支持多种触发源。' },
];

export const QUESTIONS_SHORT_SPECIAL: Question[] = [
  {
    id: 2001,
    type: 'text',
    category: '简答题',
    content: '简述基本定时器时基单元包含了哪三个寄存器，作用分别是什么？',
    answer: 'CNT, PSC, ARR',
    explanation: '1. 计数器寄存器 (CNT): 实时记录当前的计数值。\n2. 预分频器寄存器 (PSC): 对输入的时钟频率进行分频。\n3. 自动重装载寄存器 (ARR): 设置定时器的计数周期（溢出值）。'
  },
  {
    id: 2002,
    type: 'text',
    category: '简答题',
    content: '简述GPIO输入模式有哪些？',
    answer: '浮空、上拉、下拉、模拟',
    explanation: '1. 浮空输入 (Floating)\n2. 上拉输入 (Pull-up)\n3. 下拉输入 (Pull-down)\n4. 模拟输入 (Analog)'
  },
  {
    id: 2003,
    type: 'text',
    category: '简答题',
    content: '简述STM32F1的USART支持的中断事件标志位有哪些？',
    answer: 'TXE, TC, RXNE',
    explanation: '1. TXE (Transmit Data Register Empty): 发送数据寄存器为空，可以写入新数据。\n2. TC (Transmission Complete): 发送完成，数据已从移位寄存器发出。\n3. RXNE (Read Data Register Not Empty): 接收数据寄存器非空，可以读取数据。'
  },
  {
    id: 2004,
    type: 'text',
    category: '简答题',
    content: 'NVIC在中断系统中的作用是什么？',
    answer: '管理、优先级、嵌套',
    explanation: '1. 中断管理：控制各个外设中断源的开启和关闭。\n2. 优先级控制：配置抢占优先级和响应优先级。\n3. 中断嵌套：允许高优先级中断打断低优先级中断的执行。'
  },
  {
    id: 2005,
    type: 'text',
    category: '简答题',
    content: 'GPIO推挽输出和开漏输出的核心区别是？',
    answer: '高电平驱动方式',
    explanation: '推挽输出(Push-Pull)可以主动输出高电平和低电平；\n开漏输出(Open-Drain)只能主动拉低，输出高电平需要外接上拉电阻（呈高阻态）。'
  },
  {
    id: 2006,
    type: 'text',
    category: '简答题',
    content: '什么是抢占优先级和响应优先级？',
    answer: '嵌套能力 vs 响应顺序',
    explanation: '抢占优先级：决定了中断是否可以打断正在执行的低抢占优先级中断（中断嵌套能力）。\n响应优先级：当两个抢占优先级相同的中断同时到来时，响应优先级高的先执行（不涉及嵌套）。'
  },
  {
    id: 2007,
    type: 'text',
    category: '简答题',
    content: '简述GPIO输出模式有哪些？',
    answer: '推挽/开漏 + 通用/复用',
    explanation: '1. 通用推挽输出 (Output Push-Pull)\n2. 通用开漏输出 (Output Open-Drain)\n3. 复用推挽输出 (AF Push-Pull)\n4. 复用开漏输出 (AF Open-Drain)'
  },
  {
    id: 2008,
    type: 'text',
    category: '简答题',
    content: '简述STM32F1的定时器分类？',
    answer: '基本、通用、高级',
    explanation: '1. 基本定时器 (Basic Timers): TIM6, TIM7 (无输入输出通道)\n2. 通用定时器 (General Purpose Timers): TIM2-TIM5\n3. 高级定时器 (Advanced Control Timers): TIM1, TIM8 (支持死区、互补输出)'
  },
];
