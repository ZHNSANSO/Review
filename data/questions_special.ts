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
    explanation: `基本定时器（如TIM6和TIM7）的时基单元主要包含以下三个16位寄存器，它们协同工作来实现定时功能：

[寄存器]             [作用]
预分频器 (PSC)       对定时器的时钟源进行分频。计算公式为：计数器时钟(CK_CNT) = 定时器时钟(TIMxCLK) / (PSC+1)。通过调整分频系数，可以改变计数器的计数频率。

计数器 (CNT)         在计数器时钟(CK_CNT)的驱动下进行递增计数。这是定时器的核心，其数值会随时间增加。

自动重装载寄存器 (ARR) 存放定时器的周期值。当计数器(CNT)的值达到自动重装载寄存器(ARR)的值时，如果使能了中断，定时器就会产生溢出中断，然后计数器清零并重新开始计数。

这三个寄存器共同决定了定时器的定时周期，计算公式为：定时时间 = (ARR+1) * (PSC+1) / TIMxCLK。`
  },
  {
    id: 2002,
    type: 'text',
    category: '简答题',
    content: '简述GPIO输入模式有哪些？',
    answer: '浮空、上拉、下拉、模拟',
    explanation: `STM32F103VETx的GPIO输入模式主要包含以下几种：

[输入模式]    [特点与用途]
浮空输入      引脚处于高阻态，电平完全由外部电路决定。适用于通信接口（如I2C、USART）等需要外部上拉/下拉电阻的场景。

上拉输入      内部通过约40kΩ电阻连接到VDD，默认高电平。适合连接按键、开关等，避免引脚悬空时的电平不确定。

下拉输入      内部通过约40kΩ电阻连接到GND，默认低电平。同样用于按键等场景，确保无输入时为稳定低电平。

模拟输入      关闭所有数字功能（包括施密特触发器），引脚直接连接到模拟外设（ADC、DAC）。用于模拟信号采集。`
  },
  {
    id: 2003,
    type: 'text',
    category: '简答题',
    content: '简述STM32F1的USART支持的中断事件标志位有哪些？',
    answer: 'TXE, TC, RXNE, IDLE...',
    explanation: `STM32F1系列的USART（通用同步异步收发器）支持多种中断事件标志位，当特定事件发生时，相应的标志位会被硬件置位。下面这个表格汇总了这些关键的中断事件标志位及其含义：

[中断事件标志位]  [描述]
RXNE (接收寄存器非空)  当接收到数据并由移位寄存器转移到RDR（接收数据寄存器）时置位，表示数据可读。

TXE (发送寄存器空)     当TDR（发送数据寄存器）中的数据被转移到移位寄存器时置位，表示可以写入新数据。

TC (发送完成)          当一帧数据发送完成且TXE=1时置位。

IDLE (总线空闲)        当检测到总线空闲位置位。

ORE (过载错误)         当RXNE为1时新的数据已接收，导致数据丢失时置位。

FE (帧错误)            当检测到同步错位、过多的噪声或断开符时置位。

PE (奇偶校验错误)      在接收模式下，当发生奇偶校验错误时置位。

NE (噪声错误)          当在接收到的帧中检测到噪声时置位。

LBD (LIN断开检测)      当检测到LIN总线断开时置位。

CTS (CTS标志)          当出现CTS事件时置位。`
  },
  {
    id: 2004,
    type: 'text',
    category: '简答题',
    content: 'NVIC在中断系统中的作用是什么？',
    answer: '中断控制器核心',
    explanation: `NVIC (嵌套向量中断控制器) 是STM32芯片内部的一个专用硬件单元，它在中断系统中扮演着核心管理和调度角色。以下是NVIC的主要作用：

[作用类别]      [具体功能描述]
中断管理        统一接收来自内核、外部引脚和各类外设（如定时器、USART等）的中断请求。

优先级处理      为每个中断分配可编程的优先级（包括抢占优先级和响应优先级），并根据优先级决定处理顺序。

中断使能控制    通过寄存器可以全局开关所有中断，也可以单独开关某一个特定中断。

中断响应        当条件满足时，自动识别最高优先级的中断请求，并引导CPU执行对应的中断服务程序。

中断状态维护    记录和标示各个中断的触发和挂起状态。

支持中断嵌套    允许高抢占优先级的中断打断正在执行的低抢占优先级的中断，实现实时响应。`
  },
  {
    id: 2005,
    type: 'text',
    category: '简答题',
    content: 'GPIO推挽输出和开漏输出的核心区别是？',
    answer: '结构与驱动能力',
    explanation: `推挽输出和开漏输出是GPIO的两种基本输出模式，它们的核心区别在于输出级的电路结构和驱动能力。

[特性]         [推挽输出]                                [开漏输出]
电路结构       使用两个MOS管 (P-MOS和N-MOS) 组成推挽结构    只使用一个N-MOS管，漏极开路

驱动能力       强：能直接输出高电平和低电平                弱：只能可靠输出低电平，高电平需靠外部上拉电阻

输出高电平     P-MOS导通，直接输出VDD高电平                N-MOS截止，输出高阻态，电平由上拉电阻决定

输出低电平     N-MOS导通，直接输出GND低电平                N-MOS导通，输出强低电平

线与功能       不支持 (短路风险)                           支持：多个开漏输出可并联，实现“线与”逻辑

关键差异总结：
推挽输出：像一个“双刀开关”，要么接通电源（输出高），要么接通地（输出低）。优点：驱动能力强，高低电平切换速度快。
开漏输出：像一个“单刀开关”，只能接通地或者断开。优点：支持电平转换（上拉电阻可接到不同电压的电源）、支持总线结构（如I2C的“线与”功能）。`
  },
  {
    id: 2006,
    type: 'text',
    category: '简答题',
    content: '什么是抢占优先级和响应优先级？若中断A和B中，A的抢占优先级为1，A和B的响应优先级均为0代表什么？',
    answer: '优先级概念',
    explanation: `STM32的中断优先级分为抢占优先级和响应优先级（也称为子优先级）。

抢占优先级：高抢占优先级的中断可以打断正在执行的低抢占优先级的中断，形成中断嵌套。
响应优先级：仅在多个中断同时发生且抢占优先级相同时进行比较。响应优先级高的中断会被先处理。注意：高响应优先级的中断不能打断正在执行的、相同抢占优先级的中断。

中断A和B的优先级关系意味著：中断B的抢占优先级更高（数值0小于1）。
因此，中断B可以打断正在执行的中断A。由于两者的响应优先级相同，如果它们同时发生，会因为中断B的抢占优先级更高而先执行B。响应优先级在此场景下不发挥作用。`
  },
  {
    id: 2007,
    type: 'text',
    category: '简答题',
    content: '简述GPIO输出模式有哪些？',
    answer: '四种输出模式',
    explanation: `STM32F103... 的GPIO输出模式主要有以下几种，每种模式都有特定的应用场景：

[输出模式]      [特点与用途]
推挽输出        能同时输出高、低电平，驱动能力强。高电平P-MOS导通，低电平N-MOS导通。适用于LED控制、驱动数字器件等。

开漏输出        只能输出低电平或高阻态。高电平输出断开，需外部上拉电阻才能得到高电平。支持“线与”逻辑，适用于I2C等总线通信。

复用推挽输出    由片上外设控制，其他特性同普通推挽输出。适用于SPI、USART等外设引脚。

复用开漏输出    由片上外设控制，其他特性同普通开漏输出。适用于I2C等需要开漏功能的外设。`
  },
  {
    id: 2008,
    type: 'text',
    category: '简答题',
    content: '简述STM32F1的定时器分类？',
    answer: '基本、通用、高级',
    explanation: `STM32F1系列的定时器功能丰富，可以根据功能和复杂性分为三大类别：

[类别]        [包含定时器]    [主要特性]
基本定时器    TIM6、TIM7      最基本的定时功能，支持时基生成、DAC触发，主要用于简单定时和触发DAC转换。

通用定时器    TIM2-TIM5       功能全面，支持输入捕获、输出比较、PWM生成、编码器接口等。

高级定时器    TIM1、TIM8      功能最强大，在通用定时器基础上增加互补输出、死区插入、刹车功能等，适用于电机控制。`
  },
];