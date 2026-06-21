const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.8 12 3l9 7.8"/><path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V9m5 10V5m5 14v-7m5 7V3"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7.5h16a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12v4.5"/><path d="M16 13h5"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  arrowIn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3v13m-5-5 5 5 5-5M4 21h16"/></svg>',
  arrowOut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 21V8m-5 5 5-5 5 5M4 3h16"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 4.5 6v5.5c0 4.5 3 7.7 7.5 9.5 4.5-1.8 7.5-5 7.5-9.5V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2.5h8l4 4V21H6z"/><path d="M14 2.5V7h4M9 12h6M9 16h6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.4 2c-.8.5-1.2 1-1.2 2M12 17h.01"/></svg>',
  income: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 18 10 12l4 3 6-8"/><path d="M15 7h5v5"/></svg>',
  swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h14m-4-4 4 4-4 4M20 16H6m4 4-4-4 4-4"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a7 7 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a7 7 0 0 0 1.7 1l.4 3.1h5l.4-3.1a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z"/></svg>',
};

const zh = {
  'AUDC Product Demo':'AUDC 产品演示','One account.':'一个账户，','From yield to life.':'连接收益与生活。','A clickable internal prototype for the AUDD, RWA and U-Card product loop.':'AUDD、RWA 与 U-Card 产品闭环的内部可点击原型。','Explore tokenised real-world assets':'探索代币化现实世界资产','Invest and settle proceeds in AUDD':'使用 AUDD 投资并结算收益','Transfer, remit or fund U-Card':'转至外部钱包、全球速汇或充值 U-Card','Demo data only · No live services connected':'仅为演示数据 · 未连接真实服务',
  'WORKING PRODUCT':'产品工作版本','Overview':'总览','INTERACTIVE DEMO · SIMULATED DATA':'交互演示 · 模拟数据','Home':'首页','Account':'账户','Profile':'我的','Notifications':'通知','Select language':'选择语言',
  'Good morning, Ken':'早上好，Ken','Make your assets work.':'让资产持续创造价值。','One view across AUDD, RWA investments and your U-Card.':'统一查看 AUDD、RWA 投资与 U-Card。','RWA MARKET':'RWA 市场','Global assets. AUDD settlement.':'全球资产，AUDD 统一结算。','Explore stocks, ETFs, treasury products and more.':'探索股票、ETF、国债等产品。','Explore RWA':'探索 RWA','Turn AUDD into everyday spending.':'将 AUDD 用于日常消费。','Compare Virtual, Gold and Black card plans.':'比较虚拟卡、金卡和黑卡方案。','Get a U-Card':'获得 U-Card','GLOBAL REMITTANCE':'全球速汇','Send value to your own bank account.':'将资金发送至本人银行账户。','A simulated partner payout journey in one place.':'在一个平台体验合作方模拟付款流程。','Try remittance':'体验速汇','Total portfolio':'总资产','● Demo live':'● 演示运行中','AUD equivalent · simulated valuation':'澳元参考价值 · 模拟估值','↗ +A$ 132.40 this month':'↗ 本月 +A$ 132.40','Quick actions':'快捷操作','Get AUDD':'获取 AUDD','Transfer':'转出','Invest':'投资','Remit':'速汇','Action required':'待办事项','Complete investor profile':'完善投资者资料','Required before your first RWA investment.':'首次 RWA 投资前需要完成。','Featured RWA':'精选 RWA','View all':'查看全部','View product':'查看产品','Recent activity':'最近活动','See account':'查看账户',
  'Watchlist':'自选','Markets':'市场','Holdings':'持仓','RWA Markets':'RWA 行情','Trade with AUDD':'使用 AUDD 交易','Demo prices':'模拟价格','All':'全部','Treasury':'国债','US Stocks':'美股','ETFs':'ETF','Gold':'黄金','Asset':'资产','Last price':'最新价','24h change':'24小时涨跌','No assets in this view.':'当前暂无资产。','Simulated market data · Products and prices are illustrative · Returns are not guaranteed':'模拟行情数据 · 产品及价格仅供演示 · 不保证收益','Search symbols, stocks or RWA':'搜索代码、股票或 RWA','US Treasury Notes':'美国短期国债','NVIDIA':'英伟达','Apple':'苹果','Microsoft':'微软','Amazon':'亚马逊','Global Equity 20 ETF':'全球精选20 ETF','Digital Gold Reserve':'数字黄金储备','Tokenised short-duration treasury portfolio':'代币化短久期国债组合','Tokenised economic exposure to NVIDIA shares':'英伟达股票的代币化经济权益','Tokenised economic exposure to Apple shares':'苹果股票的代币化经济权益','Tokenised economic exposure to Microsoft shares':'微软股票的代币化经济权益','Tokenised economic exposure to Amazon shares':'亚马逊股票的代币化经济权益','Diversified large-cap equity basket':'多元化大型股票组合','Allocated gold exposure via partner custody':'由合作方托管的配置黄金权益','Indicative p.a.':'参考年化','Market hours':'市场交易时段','Open-ended':'开放式','Lower risk':'较低风险','Equity risk':'股票风险','Market risk':'市场风险','Price risk':'价格风险',
  'RWA Invest':'RWA 投资','Account Centre':'账户中心','Assets & money':'资产与资金','Your account.':'您的账户。','AUDD wallet, RWA holdings and settlement activity.':'AUDD 钱包、RWA 持仓与结算记录。','Overview':'总览','AUDD Wallet':'AUDD 钱包','Portfolio':'投资组合','Available AUDD':'可用 AUDD','Custody demo':'托管演示','Available balance':'可用余额','pending':'处理中','Move value':'资金操作','Receive':'转入','Asset allocation':'资产分布','Available and pending balance':'可用及处理中余额','RWA Portfolio':'RWA 投资组合','Treasury and equity holdings':'国债及股票持仓','Separate AUD fiat card balance':'独立的澳元法币卡余额','Mock custody':'模拟托管','External wallet transfers are subject to screening':'外部钱包转账需要经过风险筛查','Receive AUDD':'转入 AUDD','Transfer out':'转至外部钱包','AUDD activity':'AUDD 流水','RWA value':'RWA 价值','Income settled':'已结算收益','this year':'本年度','AUDD this year':'本年度 AUDD','Invest more':'继续投资','Next income 30 Jun':'下次收益 6月30日','Market priced':'按市场价格估值','4,200 units · Next income 30 Jun':'4,200 份 · 下次收益 6月30日','450.56 units · Market priced':'450.56 份 · 按市场价估值','+1.6% this month':'本月 +1.6%','Global Equity 20':'全球精选20',
  'Spend worldwide':'全球消费','Your U-Card.':'您的 U-Card。','A separate AUD fiat balance funded from AUDD.':'由 AUDD 充值的独立澳元法币余额。','VIRTUAL':'虚拟卡','GOLD':'金卡','BLACK':'黑卡','CARDHOLDER':'持卡人','VALID THRU':'有效期','Available card balance':'可用卡余额','ACTIVE':'使用中','ACTIVATION REQUIRED':'待激活','Activate your U-Card':'激活您的 U-Card','Confirm the card and create your security settings.':'确认卡片并设置安全选项。','Activate':'激活','U-Card activated':'U-Card 已激活','Your simulated Virtual Card is ready to fund and use.':'您的模拟虚拟卡已可充值使用。','Your simulated Gold Card is ready to fund and use.':'您的模拟金卡已可充值使用。','Your simulated Black Card is ready to fund and use.':'您的模拟黑卡已可充值使用。','Manage':'管理','Fund with AUDD':'使用 AUDD 充值','Card controls':'卡片控制','Successful card funding converts AUDD into an AUD fiat card balance and cannot be reversed to AUDD.':'充值成功后，AUDD 将转换为澳元法币卡余额，且不能转回 AUDD。','Card activity':'卡片流水','Sydney Market':'悉尼市场','Groceries · Today':'日用品 · 今天','Cloud Software':'云服务','Subscription · 14 Jun':'订阅 · 6月14日','Card funding':'卡片充值','From AUDD · 12 Jun':'来自 AUDD · 6月12日','Get a U-Card':'获得 U-Card','DEMO PRICING':'演示定价','Virtual Card':'虚拟卡','Gold Card':'金卡','Black Card':'黑卡','One-time demo price':'一次性演示价格','USDT equivalent':'USDT 等值','Funding fee':'充值费率','International FX':'国际消费汇率费','Card format':'卡片形式','Instant virtual issue':'即时虚拟发卡','Virtual + physical card':'虚拟卡 + 实体卡','Premium physical card':'尊享实体卡','Current card':'当前卡片','Choose card':'选择卡片','Card prices and fee rates are illustrative working assumptions. Final pricing depends on issuer, programme and service country.':'卡片价格和费率仅为演示假设，最终定价取决于发卡方、卡项目及服务国家。',
  'Account settings':'账户设置','Your profile.':'个人中心。','Manage identity, permissions, security and support.':'管理身份、权限、安全与客户支持。','Australia · Demo user':'澳大利亚 · 演示用户','BASIC':'基础账户','Investor profile':'投资者资料','Profile completion':'资料完成度','Complete your investment experience and source-of-funds details before placing an RWA order.':'下达 RWA 订单前，请完善投资经验及资金来源资料。','Continue profile':'继续完善','Account & settings':'账户与设置','Identity & KYC':'身份与 KYC','Investor profile needs one more step':'投资者资料还需完成一步','Security':'安全设置','MFA on · 1 trusted device':'已启用 MFA · 1台可信设备','Linked accounts':'关联账户','1 bank account · 2 wallet addresses':'1个银行账户 · 2个钱包地址','Documents & statements':'文件与对账单','Confirmations, disclosures and records':'交易确认、披露与记录','Preferences':'偏好设置','Display currency and notifications':'显示货币与通知设置','Language':'语言','English':'英语','Simplified Chinese':'简体中文','Help & support':'帮助与支持','FAQs, service requests and complaints':'常见问题、服务申请与投诉','Sign out of demo':'退出演示','Identity verified. Investment experience and source-of-funds details are still required.':'身份已验证，仍需补充投资经验与资金来源。','Investment experience':'投资经验','Primary source of funds':'主要资金来源','Save demo profile':'保存演示资料','Freeze card':'冻结卡片','Temporarily block new transactions':'临时阻止新交易','Spending controls':'消费控制','Online, contactless and international usage':'线上、非接触式及国际消费设置','A live service may require additional checks from each regulated partner. KYC reuse is not guaranteed.':'真实服务中，各受监管合作方可能要求额外审核，KYC 资料不保证通用。',
  'Market':'行情','Overview':'概况','News':'新闻','Financials':'财务','Research':'研报','High':'最高','Low':'最低','Open':'开盘','Prev close':'前收','Demo market':'模拟市场','· delayed simulated data':'· 延迟模拟数据','Last update 10:40':'最后更新 10:40','Indicators':'指标','Indicative buy':'参考买入价','Indicative sell':'参考卖出价','Product structure, ownership and execution depend on the selected RWA partner.':'产品结构、资产权益与交易执行取决于所选 RWA 合作方。','Trade':'交易','Minimum':'最低金额','Min':'最低','Settlement':'结算','Returns to AUDD':'收益结算至 AUDD','Liquidity':'流动性','Risk':'风险',
  'Buy':'买入','Sell':'卖出','Order type':'订单类型','Market order⌄':'市价单⌄','Order value':'下单金额','Sale value':'卖出金额','Available':'可用','Estimated units':'预计数量','Simulation only':'仅为模拟','Orders are completed locally. A live product would follow partner market hours and execution rules.':'订单仅在本地模拟完成。真实产品将遵循合作方交易时段和执行规则。','Time':'时间','Price':'价格','Qty':'数量','Open orders (0)':'当前委托 (0)','No open demo orders':'暂无模拟委托','Simulate buy':'模拟买入','Simulate sell':'模拟卖出',
  'Investment amount':'投资金额','Transfer amount':'转出金额','Send amount':'汇款金额','AUDD amount':'AUDD 金额','Purchase amount':'购买金额','Demo fee':'演示手续费','Indicative quote':'参考报价','Continue':'继续','Return to demo':'返回演示','Invest with AUDD':'使用 AUDD 投资','Simulated order · No partner connected':'模拟订单 · 未连接合作方','Your AUDD would be reserved while a real partner order is processed.':'真实合作方处理订单期间，相应 AUDD 将被冻结。','Simulate investment':'模拟投资','Investment simulated':'投资模拟完成','Sale simulated':'卖出模拟完成','RWA investment':'RWA 投资','RWA sale':'RWA 卖出','Demo order completed · Just now':'模拟订单已完成 · 刚刚',
  'Receive AUDD':'转入 AUDD','Transfer from a compatible external wallet':'从兼容的外部钱包转入','Network':'网络','Wallet address':'钱包地址','Memo':'备注','Only send AUDD on the supported network. This address is illustrative and cannot receive funds.':'仅可通过支持的网络发送 AUDD。此地址仅供演示，无法接收资产。','Copy demo address':'复制演示地址','Transfer to external wallet':'转至外部钱包','Send AUDD outside this platform':'将 AUDD 转至平台外','Amount':'金额','This sends AUDD on-chain and does not convert it to fiat. A live service would apply KYT, limits and address checks.':'该操作仅在链上发送 AUDD，不会兑换为法币。真实服务将进行 KYT、限额及地址检查。','Review transfer':'核对转账','Global remittance':'全球速汇','Partner-provided payout to your own account':'通过合作方向本人账户付款','Verified beneficiary':'已验证收款人','Indicative payout':'预计到账','Estimated arrival':'预计到账时间','Same business day':'同一工作日','Only verified accounts in the user\'s own name are allowed. No remittance provider is connected in this demo.':'仅允许支付至用户本人名下的已验证账户。本演示未连接速汇服务商。','Review remittance':'核对速汇','Fund U-Card':'充值 U-Card','Convert AUDD to an AUD fiat card balance':'将 AUDD 转换为澳元法币卡余额','Successful funding is final and cannot be converted back to AUDD.':'充值成功即为最终出金，不能转换回 AUDD。','Confirm irreversible funding':'确认不可逆充值',
  'Activate U-Card':'激活 U-Card','Local demo activation':'本地演示激活','Card issued':'卡片已发放','Demo card details are ready':'演示卡片资料已准备','Identity matched':'身份已匹配','Demo holder name confirmed':'演示持卡人姓名已确认','Activate and secure':'激活并设置安全选项','Create controls before funding':'充值前设置卡片控制','No issuer is connected. This activation only changes the local demo state.':'未连接发卡方，本次激活仅改变本地演示状态。','Activate demo U-Card':'激活演示 U-Card','Choose a simulated U-Card plan':'选择模拟 U-Card 方案','Pricing and fee rates are illustrative only and require confirmation with the selected card issuer.':'价格与费率仅供演示，需与选定发卡方确认。','U-Card selected':'已选择 U-Card','U-Card activated':'U-Card 已激活','No card activity yet':'暂无卡片流水','Get':'获取','Select language':'选择语言','Choose your display language':'选择界面显示语言','English interface':'英文界面','简体中文界面':'简体中文界面','Current':'当前','Language changed':'语言已切换','U-Card funded':'U-Card 充值完成','Investment simulated':'投资模拟完成','Sale simulated':'卖出模拟完成','Transfer simulated':'转账模拟完成','Remittance simulated':'速汇模拟完成','AUDD added':'AUDD 添加完成','Profile saved':'资料已保存','2 demo notifications':'2条演示通知','Demo interaction — no external service connected':'演示交互 · 未连接外部服务','Added to demo watchlist':'已加入演示自选','Demo address copied — not valid on-chain':'演示地址已复制 · 不能用于链上交易'
};

Object.assign(zh, {
  'Create your AUDC account':'创建您的 AUDC 账户','A global account for AUDD, RWA investing and U-Card spending.':'一个连接 AUDD、RWA 投资与 U-Card 消费的全球账户。','Create account':'创建账户','Use demo account':'使用现有演示账户','Registration is free. Financial services are available by country and may require verification.':'注册免费。金融服务按国家开放，并可能需要身份验证。',
  'Create account details':'创建账户资料','Start with basic contact information. This is registration, not full KYC.':'先填写基础联系资料；此步骤不是完整 KYC。','Email address':'电子邮箱','Mobile number':'手机号码','Country / region of residence':'居住国家 / 地区','Referral code (optional)':'推荐码（选填）','I confirm I am at least 18 years old.':'我确认已年满 18 周岁。','Continue':'继续','Back':'返回',
  'Verify your contacts':'验证联系方式','Enter the demo code sent to your email and mobile.':'输入发送至邮箱和手机的演示验证码。','Verification code':'验证码','Demo code: 248196':'演示验证码：248196','Resend demo code':'重新发送演示验证码','Verify and continue':'验证并继续',
  'Tell us about you':'填写个人基本资料','These details create your basic profile and help determine available services.':'这些资料用于创建基础档案并判断可用服务。','Legal first name':'法定名字','Legal last name':'法定姓氏','Date of birth':'出生日期','Nationality':'国籍','Display name':'显示名称','Continue to agreements':'继续阅读协议',
  'Review and agree':'阅读并同意','Your relationship is with the future overseas platform operator. Provider terms may also apply when you use a service.':'您与未来海外运营平台建立客户关系；使用具体服务时还可能适用合作方条款。','I agree to the Platform User Agreement.':'我同意《平台用户协议》。','I acknowledge the Privacy Notice and consent to the stated data processing.':'我已阅读《隐私声明》并同意其中说明的数据处理。','I acknowledge that RWA products, AUDD transfers and U-Card services have separate risks and eligibility rules.':'我了解 RWA 产品、AUDD 转账及 U-Card 服务具有独立风险和准入规则。','Send me optional product updates.':'向我发送可选的产品动态。','Agree and continue':'同意并继续',
  'Secure your account':'保护您的账户','Create a demo password and choose a preferred MFA method.':'创建演示密码并选择首选多因素验证方式。','Password':'密码','Confirm password':'确认密码','MFA method':'多因素验证方式','Authenticator app':'身份验证器','SMS':'短信','Email':'邮箱','Create basic account':'创建基础账户',
  'Basic account created':'基础账户创建完成','Registration complete':'注册完成','Your basic account is ready. Verification will be requested only when required by the service, amount, country or risk controls.':'您的基础账户已就绪。仅在服务、金额、国家或风险规则要求时触发验证。','AUDD account':'AUDD 账户','Available subject to country rules':'按国家规则提供','RWA investing':'RWA 投资','KYC and partner eligibility required':'需要 KYC 及合作方准入','Global remittance':'全球速汇','Own-name bank verification required':'需要验证本人同名银行账户','U-Card':'U-Card','Issuer review required':'需要发卡方审核','Enter AUDC demo':'进入 AUDC 演示','No real account or personal data is created in this demo.':'本演示不会创建真实账户或保存真实个人资料。',
  'Registration & account':'注册与账户','Restart the complete onboarding demo':'重新体验完整注册流程','Restart registration demo':'重新开始注册演示','Please complete all required fields':'请填写所有必填项','Please confirm you are at least 18':'请确认您已年满 18 周岁','Enter the six-digit demo code':'请输入六位演示验证码','Please accept the required agreements':'请同意全部必选协议','Passwords must match and contain at least 8 characters':'两次密码必须一致且至少包含 8 个字符','Demo code sent again':'演示验证码已重新发送','Demo registration reset':'注册演示已重置'
  ,'SIMULATED REGISTRATION':'模拟注册流程','Explore global RWA opportunities':'探索全球 RWA 投资机会','Receive proceeds back in AUDD':'投资回款统一结算为 AUDD','Transfer, remit or fund U-Card':'转至外部钱包、全球速汇或充值 U-Card','EMAIL + MOBILE':'邮箱 + 手机','Platform User Agreement':'平台用户协议','Privacy Notice':'隐私声明','Risk and eligibility':'风险与准入','Product updates':'产品动态','In a live service, MFA recovery and trusted-device changes would require additional security checks.':'真实服务中，找回 MFA 或更换可信设备需要额外安全验证。','Basic':'基础','Next':'下一步','Later':'后续','Australia':'澳大利亚','New Zealand':'新西兰','Singapore':'新加坡','United Kingdom':'英国','Other':'其他'
  ,'Saved to the local platform API':'已保存至本地平台 API','Local API unavailable — registration remains in demo mode':'本地 API 暂不可用，注册保留为演示模式'
});

function savedLanguage() {
  try { return localStorage.getItem('audcDemoLanguage') || 'en'; } catch { return 'en'; }
}

function savedRegistration() {
  try { return localStorage.getItem('audcDemoRegistrationComplete') === 'true'; } catch { return false; }
}

function savedSession(name) {
  try { return localStorage.getItem(`audcDemo${name}`); } catch { return null; }
}

const API_BASE = 'http://127.0.0.1:3001/api/v1';

function t(text) { return state?.language === 'zh-CN' ? (zh[text] || text) : text; }

function applyLanguage(root = document) {
  document.documentElement.lang = state.language;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (['SCRIPT','STYLE','SVG','PATH'].includes(node.parentElement?.tagName)) return;
    const raw = node.nodeValue; const trimmed = raw.trim(); if (!trimmed) return;
    node.__i18nSource ??= trimmed;
    const translated = state.language === 'zh-CN' ? (zh[node.__i18nSource] || node.__i18nSource) : node.__i18nSource;
    node.nodeValue = raw.replace(trimmed, translated);
  });
  root.querySelectorAll?.('[placeholder]').forEach(el => { el.dataset.i18nPlaceholder ??= el.placeholder; el.placeholder = state.language === 'zh-CN' ? (zh[el.dataset.i18nPlaceholder] || el.dataset.i18nPlaceholder) : el.dataset.i18nPlaceholder; });
  root.querySelectorAll?.('[aria-label]').forEach(el => { el.dataset.i18nAria ??= el.getAttribute('aria-label'); el.setAttribute('aria-label', state.language === 'zh-CN' ? (zh[el.dataset.i18nAria] || el.dataset.i18nAria) : el.dataset.i18nAria); });
  const code = document.getElementById('languageCode'); if (code) code.textContent = state.language === 'zh-CN' ? '中' : 'EN';
}

const products = [
  { id: 'tbill', symbol: 'UST3M.R', icon: 'T', cls: 'treasury', name: 'US Treasury Notes', detail: 'Tokenised short-duration treasury portfolio', yield: '4.7%', type: 'Treasury', term: '0–3 months', risk: 'Lower risk', min: 100, price: 100.21, change: 0.03, watch: true, holding: true },
  { id: 'nvda', symbol: 'NVDA.R', icon: 'N', cls: 'nvda', name: 'NVIDIA', detail: 'Tokenised economic exposure to NVIDIA shares', yield: '—', type: 'US Stocks', term: 'Market hours', risk: 'Equity risk', min: 25, price: 209.19, change: 2.21, watch: true },
  { id: 'aapl', symbol: 'AAPL.R', icon: 'A', cls: 'apple', name: 'Apple', detail: 'Tokenised economic exposure to Apple shares', yield: '—', type: 'US Stocks', term: 'Market hours', risk: 'Equity risk', min: 25, price: 299.96, change: 1.35, watch: true },
  { id: 'msft', symbol: 'MSFT.R', icon: 'M', cls: 'microsoft', name: 'Microsoft', detail: 'Tokenised economic exposure to Microsoft shares', yield: '—', type: 'US Stocks', term: 'Market hours', risk: 'Equity risk', min: 25, price: 377.60, change: -0.34 },
  { id: 'amzn', symbol: 'AMZN.R', icon: 'a', cls: 'amazon', name: 'Amazon', detail: 'Tokenised economic exposure to Amazon shares', yield: '—', type: 'US Stocks', term: 'Market hours', risk: 'Equity risk', min: 25, price: 239.89, change: 1.00 },
  { id: 'equity', symbol: 'GLOBE20.R', icon: '20', cls: 'equity', name: 'Global Equity 20 ETF', detail: 'Diversified large-cap equity basket', yield: '2.1%', type: 'ETFs', term: 'Open-ended', risk: 'Market risk', min: 50, price: 10.48, change: 0.86, holding: true },
  { id: 'gold', symbol: 'GOLD.R', icon: 'G', cls: 'gold', name: 'Digital Gold Reserve', detail: 'Allocated gold exposure via partner custody', yield: '—', type: 'Gold', term: 'Open-ended', risk: 'Price risk', min: 50, price: 179.45, change: -0.64 },
];

const banners = [
  { cls:'rwa-banner', kicker:'RWA MARKET', title:'Global assets. AUDD settlement.', copy:'Explore stocks, ETFs, treasury products and more.', action:'rwa', cta:'Explore RWA', art:'↗' },
  { cls:'card-banner', kicker:'U-CARD', title:'Turn AUDD into everyday spending.', copy:'Compare Virtual, Gold and Black card plans.', action:'card', cta:'Get a U-Card', art:'◫' },
  { cls:'remit-banner', kicker:'GLOBAL REMITTANCE', title:'Send value to your own bank account.', copy:'A simulated partner payout journey in one place.', action:'remittance', cta:'Try remittance', art:'◎' },
];

const cardPlans = {
  Virtual: { name:'Virtual Card', cls:'virtual-plan', price:'US$1', priceNote:'One-time demo price', funding:'1.50%', fx:'2.50%', delivery:'Instant virtual issue', label:'VIRTUAL' },
  Gold: { name:'Gold Card', cls:'gold-plan', price:'99 U', priceNote:'USDT equivalent', funding:'1.00%', fx:'2.00%', delivery:'Virtual + physical card', label:'GOLD' },
  Black: { name:'Black Card', cls:'black-plan', price:'199 U', priceNote:'USDT equivalent', funding:'0.50%', fx:'1.50%', delivery:'Premium physical card', label:'BLACK' },
};

const state = {
  tab: 'home',
  language: savedLanguage(),
  registrationComplete: savedRegistration(),
  registrationStep: 0,
  platformUid: null,
  accessToken: savedSession('AccessToken'),
  refreshToken: savedSession('RefreshToken'),
  apiConnected: false,
  pendingTransferQuote: null,
  onboardingToken: null,
  registrationChallenge: null,
  registrationSubmitting: false,
  registrationProfile: {
    email: 'ken.wang@example.demo', phone: '+61 412 345 678', country: 'Australia', referral: 'AUDC2026',
    firstName: 'Ken', lastName: 'Wang', dob: '1988-06-18', nationality: 'Australia', displayName: 'Ken'
  },
  bannerIndex: 0,
  marketTab: 'Markets',
  tradeSide: 'buy',
  accountView: 'overview',
  productFilter: 'All',
  audd: 12480.60,
  rwa: 8754.20,
  card: 0,
  cardTier: 'Virtual',
  cardActivated: false,
  pending: 125.00,
  activities: [
    { icon: 'income', title: 'Treasury income', subtitle: 'Settled to AUDD · Today', value: '+24.80 AUDD', positive: true },
    { icon: 'chart', title: 'RWA investment', subtitle: 'US Treasury Notes · 12 Jun', value: '-1,500 AUDD' },
    { icon: 'arrowIn', title: 'External wallet transfer in', subtitle: 'Confirmed · 10 Jun', value: '+2,000 AUDD', positive: true },
  ],
  cardActivities: []
};

const titles = { home: 'Overview', rwa: 'RWA Invest', account: 'Account Centre', card: 'U-Card', profile: 'Profile' };
const view = document.getElementById('view');
const modalLayer = document.getElementById('modalLayer');
const sheet = document.getElementById('sheet');
const toast = document.getElementById('toast');

function money(value, currency = 'AUDD') {
  return `${value.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
}

function icon(name) { return icons[name] || icons.wallet; }

function productCard(p) {
  return `<article class="product-card" data-product-card="${p.id}">
    <div class="product-main">
      <div class="asset-icon ${p.cls}">${p.icon}</div>
      <div class="product-copy"><strong>${p.name}</strong><small>${p.detail}</small></div>
      <div class="yield"><strong>${p.yield}</strong><small>Indicative p.a.</small></div>
    </div>
    <div class="product-meta"><span class="tag">${p.type}</span><span class="tag">${p.term}</span><span class="tag">Min ${p.min} AUDD</span></div>
    <button class="product-action" data-action="product" data-id="${p.id}">View product</button>
  </article>`;
}

function marketRow(p) {
  const changeClass = p.change >= 0 ? 'up' : 'down';
  const sign = p.change >= 0 ? '+' : '';
  return `<button class="market-row" data-action="product" data-id="${p.id}" data-market-row="${p.id}">
    <span class="market-identity"><span class="market-logo ${p.cls}">${p.icon}</span><span><strong>${p.symbol} <em>/ AUDD</em></strong><small>${p.name}</small></span></span>
    <span class="market-price"><strong>${p.price.toLocaleString('en-AU',{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><small>≈ A$ ${p.price.toFixed(2)}</small></span>
    <span class="market-change ${changeClass}">${sign}${p.change.toFixed(2)}%</span>
  </button>`;
}

function activityRows(items) {
  return items.map(a => `<div class="activity-row">
    <div class="row-icon">${icon(a.icon || 'card')}</div>
    <div class="row-copy"><strong>${a.title}</strong><small>${a.subtitle}</small></div>
    <div class="row-value ${a.positive ? 'positive' : ''}">${a.value}</div>
  </div>`).join('');
}

function bannerMarkup() {
  const b = banners[state.bannerIndex];
  return `<section class="promo-banner ${b.cls}">
    <div class="promo-copy"><span>${b.kicker}</span><strong>${b.title}</strong><p>${b.copy}</p><button data-${b.action === 'remittance' ? 'action' : 'tab-jump'}="${b.action}">${b.cta} →</button></div>
    <div class="promo-art">${b.art}<i></i></div>
  </section><div class="banner-dots">${banners.map((_,i)=>`<button class="${i===state.bannerIndex?'active':''}" data-banner-index="${i}" aria-label="Banner ${i+1}"></button>`).join('')}</div>`;
}

function setBanner(index) {
  state.bannerIndex = Number(index);
  const wrap = document.querySelector('.promo-banner-wrap');
  if (wrap) { wrap.innerHTML = bannerMarkup(); applyLanguage(wrap); }
}

function homeView() {
  const total = state.audd + state.rwa + state.card + state.pending;
  return `<div class="page-enter">
    <div class="page-heading"><span class="eyebrow">Good morning, Ken</span><h2>Make your assets work.</h2><p>One view across AUDD, RWA investments and your U-Card.</p></div>
    <div class="promo-banner-wrap">${bannerMarkup()}</div>
    <section class="hero-balance">
      <div class="hero-top"><span>Total portfolio</span><span class="live-pill">● Demo live</span></div>
      <div class="balance-value">A$ ${total.toLocaleString('en-AU', {minimumFractionDigits: 2})}</div>
      <div class="balance-sub">AUD equivalent · simulated valuation</div>
      <div class="balance-change">↗ +A$ 132.40 this month</div>
    </section>
    <div class="section-head"><h3>Quick actions</h3></div>
    <div class="quick-grid">
      <button class="quick-action" data-action="fund"><span class="mini-icon">${icon('plus')}</span><small>Get AUDD</small></button>
      <button class="quick-action" data-action="external-transfer"><span class="mini-icon">${icon('arrowOut')}</span><small>Transfer</small></button>
      <button class="quick-action" data-tab-jump="rwa"><span class="mini-icon">${icon('chart')}</span><small>Invest</small></button>
      <button class="quick-action" data-action="remittance"><span class="mini-icon">${icon('globe')}</span><small>Remit</small></button>
    </div>
    <div class="section-head"><h3>Action required</h3></div>
    <button class="notice-card" data-tab-jump="profile" style="width:100%; text-align:left;">
      <span class="notice-icon">${icon('shield')}</span><span><strong>Complete investor profile</strong><p>Required before your first RWA investment.</p></span><span class="chevron">›</span>
    </button>
    <div class="section-head"><h3>Featured RWA</h3><button class="text-button" data-tab-jump="rwa">View all</button></div>
    ${productCard(products[0])}
    <div class="section-head"><h3>Recent activity</h3><button class="text-button" data-tab-jump="account">See account</button></div>
    <div class="activity-list">${activityRows(state.activities.slice(0,2))}</div>
  </div>`;
}

function rwaView() {
  let universe = products;
  if (state.marketTab === 'Watchlist') universe = products.filter(p => p.watch);
  if (state.marketTab === 'Holdings') universe = products.filter(p => p.holding);
  const filtered = state.productFilter === 'All' ? universe : universe.filter(p => p.type === state.productFilter);
  return `<div class="page-enter rwa-exchange">
    <label class="market-search">${icon('search')}<input id="productSearch" aria-label="Search RWA markets" placeholder="Search symbols, stocks or RWA" /></label>
    <div class="market-tabs">${['Watchlist','Markets','Holdings'].map(t => `<button class="${state.marketTab === t ? 'active' : ''}" data-market-tab="${t}">${t}</button>`).join('')}</div>
    <div class="rwa-title-row"><span><strong>RWA Markets</strong><small>Trade with AUDD</small></span><span class="market-live"><i></i> Demo prices</span></div>
    <div class="filter-scroll market-filters">${['All','Treasury','US Stocks','ETFs','Gold'].map(f => `<button class="filter-chip ${state.productFilter === f ? 'active' : ''}" data-filter="${f}">${f}</button>`).join('')}</div>
    <div class="market-columns"><span>Asset</span><span>Last price</span><span>24h change</span></div>
    <div class="market-list" id="productList">${filtered.length ? filtered.map(marketRow).join('') : '<div class="market-empty">No assets in this view.</div>'}</div>
    <div class="market-disclosure">Simulated market data · Products and prices are illustrative · Returns are not guaranteed</div>
  </div>`;
}

function accountView() {
  const overview = `<section class="hero-balance">
    <div class="hero-top"><span>Available AUDD</span><span class="live-pill">Custody demo</span></div>
    <div class="balance-value">${money(state.audd)}</div><div class="balance-sub">${t('Available balance')} · ${money(state.pending)} ${t('pending')}</div>
  </section>
  <div class="section-head"><h3>Move value</h3></div>
  <div class="quick-grid">
    <button class="quick-action" data-action="fund"><span class="mini-icon">${icon('plus')}</span><small>Get AUDD</small></button>
    <button class="quick-action" data-action="receive"><span class="mini-icon">${icon('arrowIn')}</span><small>Receive</small></button>
    <button class="quick-action" data-action="external-transfer"><span class="mini-icon">${icon('arrowOut')}</span><small>Transfer</small></button>
    <button class="quick-action" data-action="remittance"><span class="mini-icon">${icon('globe')}</span><small>Remit</small></button>
  </div>
  <div class="section-head"><h3>Asset allocation</h3></div>
  <div class="asset-list">
    <button class="asset-row" style="width:100%; border-inline:0; border-top:0; background:#fff; text-align:left;" data-account-view="wallet"><span class="row-icon">${icon('wallet')}</span><span class="row-copy"><strong>AUDD Wallet</strong><small>Available and pending balance</small></span><span class="row-value">${money(state.audd)}</span></button>
    <button class="asset-row" style="width:100%; border-inline:0; border-top:0; background:#fff; text-align:left;" data-account-view="portfolio"><span class="row-icon">${icon('chart')}</span><span class="row-copy"><strong>RWA Portfolio</strong><small>Treasury and equity holdings</small></span><span class="row-value">A$ ${state.rwa.toLocaleString('en-AU',{minimumFractionDigits:2})}</span></button>
    <button class="asset-row" style="width:100%; border:0; background:#fff; text-align:left;" data-tab-jump="card"><span class="row-icon">${icon('card')}</span><span class="row-copy"><strong>U-Card</strong><small>Separate AUD fiat card balance</small></span><span class="row-value">${money(state.card,'AUD')}</span></button>
  </div>`;
  const wallet = `<section class="hero-balance"><div class="hero-top"><span>AUDD Wallet</span><span class="live-pill">Mock custody</span></div><div class="balance-value">${money(state.audd)}</div><div class="balance-sub">External wallet transfers are subject to screening</div></section>
    <div class="button-row"><button class="secondary-button" data-action="receive">Receive AUDD</button><button class="primary-button" data-action="external-transfer">Transfer out</button></div>
    <div class="section-head"><h3>AUDD activity</h3></div><div class="activity-list">${activityRows(state.activities)}</div>`;
  const portfolio = `<div class="split-balance"><div class="stat-card"><small>RWA value</small><strong>A$ ${state.rwa.toLocaleString('en-AU')}</strong><em>+1.6% this month</em></div><div class="stat-card"><small>Income settled</small><strong>124.80</strong><em>AUDD this year</em></div></div>
    <div class="section-head"><h3>Holdings</h3><button class="text-button" data-tab-jump="rwa">Invest more</button></div>
    <div class="asset-list"><div class="asset-row"><span class="asset-icon treasury" style="width:35px;height:35px;border-radius:11px;font-size:11px">T</span><span class="row-copy"><strong>US Treasury Notes</strong><small>4,200 units · Next income 30 Jun</small></span><span class="row-value">A$ 4,248.60<small class="positive">+24.80 AUDD</small></span></div><div class="asset-row"><span class="asset-icon equity" style="width:35px;height:35px;border-radius:11px;font-size:11px">E</span><span class="row-copy"><strong>Global Equity 20</strong><small>450.56 units · Market priced</small></span><span class="row-value">A$ 4,505.60<small class="positive">+2.2%</small></span></div></div>`;
  return `<div class="page-enter"><div class="page-heading"><span class="eyebrow">Assets & money</span><h2>Your account.</h2><p>AUDD wallet, RWA holdings and settlement activity.</p></div>
    <div class="account-switch"><button data-account-view="overview" class="${state.accountView==='overview'?'active':''}">Overview</button><button data-account-view="wallet" class="${state.accountView==='wallet'?'active':''}">AUDD Wallet</button><button data-account-view="portfolio" class="${state.accountView==='portfolio'?'active':''}">Portfolio</button></div>
    ${state.accountView === 'wallet' ? wallet : state.accountView === 'portfolio' ? portfolio : overview}
    <div class="section-head"><h3>Recent activity</h3></div><div class="activity-list">${activityRows(state.activities)}</div>
  </div>`;
}

function cardView() {
  const plan = cardPlans[state.cardTier];
  const status = state.cardActivated ? 'ACTIVE' : 'ACTIVATION REQUIRED';
  const activateBlock = state.cardActivated
    ? `<section class="activation-card complete"><span class="activation-icon">✓</span><span><strong>U-Card activated</strong><small>Your simulated ${plan.name} is ready to fund and use.</small></span><button data-action="card-controls">Manage</button></section>`
    : `<section class="activation-card"><span class="activation-icon">2/3</span><span><strong>Activate your U-Card</strong><small>Confirm the card and create your security settings.</small></span><button data-action="activate-card">Activate</button></section>`;
  const plans = Object.entries(cardPlans).map(([key,p]) => `<article class="card-plan ${p.cls} ${state.cardTier===key?'selected':''}">
    <div class="plan-top"><span>${p.label}</span><em>${p.price}</em></div><strong>${p.name}</strong><small>${p.priceNote}</small>
    <dl><div><dt>Funding fee</dt><dd>${p.funding}</dd></div><div><dt>International FX</dt><dd>${p.fx}</dd></div><div><dt>Card format</dt><dd>${p.delivery}</dd></div></dl>
    <button data-action="choose-card" data-tier="${key}">${state.cardTier===key?'Current card':'Choose card'}</button>
  </article>`).join('');
  return `<div class="page-enter">
    <div class="page-heading"><span class="eyebrow">Spend worldwide</span><h2>Your U-Card.</h2><p>A separate AUD fiat balance funded from AUDD.</p></div>
    <section class="bank-card tier-${state.cardTier.toLowerCase()}"><div class="card-top"><span>AUDC U-CARD</span><span>${plan.label}</span></div><div class="card-chip"></div><div class="card-number">••••  ••••  ••••  2048</div><div class="card-bottom"><span>CARDHOLDER<strong>KEN W.</strong></span><span>VALID THRU<strong>08/29</strong></span></div></section>
    <div class="card-balance"><span><small>Available card balance</small><strong>${money(state.card,'AUD')}</strong></span><span class="verified ${state.cardActivated?'':'pending'}">${status}</span></div>
    ${activateBlock}
    <div class="button-row"><button class="primary-button" data-action="card-fund">Fund with AUDD</button><button class="secondary-button" data-action="card-controls">Card controls</button></div>
    <div class="warning-box"><span>!</span><span>Successful card funding converts AUDD into an AUD fiat card balance and cannot be reversed to AUDD.</span></div>
    <div class="section-head"><h3>Card activity</h3><button class="text-button" data-action="demo-only">View all</button></div>
    <div class="activity-list">${state.cardActivities.length ? activityRows(state.cardActivities) : '<div class="empty-activity">No card activity yet</div>'}</div>
    <div class="section-head"><h3>Get a U-Card</h3><span class="demo-rate-label">DEMO PRICING</span></div>
    <div class="card-plan-scroll">${plans}</div>
    <p class="card-rate-note">Card prices and fee rates are illustrative working assumptions. Final pricing depends on issuer, programme and service country.</p>
  </div>`;
}

function profileView() {
  const settings = [
    ['shield','Identity & KYC','Investor profile needs one more step','kyc'],
    ['lock','Security','MFA on · 1 trusted device','security'],
    ['wallet','Linked accounts','1 bank account · 2 wallet addresses','linked'],
    ['doc','Documents & statements','Confirmations, disclosures and records','documents'],
    ['user','Registration & account','Restart the complete onboarding demo','restart-registration'],
    ['globe','Language',state.language === 'zh-CN' ? '简体中文' : 'English','language'],
    ['settings','Preferences','Display currency and notifications','preferences'],
    ['help','Help & support','FAQs, service requests and complaints','support'],
  ];
  return `<div class="page-enter">
    <div class="page-heading"><span class="eyebrow">Account settings</span><h2>Your profile.</h2><p>Manage identity, permissions, security and support.</p></div>
    <section class="profile-card"><div class="avatar">KW</div><span><strong>Ken Wang</strong><small>Australia · Demo user</small></span><span class="verified">BASIC</span></section>
    <section class="progress-block"><div class="progress-top"><span>Investor profile</span><span>72%</span></div><div class="progress-track"><span></span></div><p>Complete your investment experience and source-of-funds details before placing an RWA order.</p><button class="product-action" data-action="kyc">Continue profile</button></section>
    <div class="section-head"><h3>Account & settings</h3></div>
    <div class="settings-list">${settings.map(s => `<button class="setting-row" style="width:100%; border-inline:0;border-top:0;background:#fff;text-align:left" data-action="${s[3]}"><span class="row-icon">${icon(s[0])}</span><span class="row-copy"><strong>${s[1]}</strong><small>${s[2]}</small></span><span class="chevron">›</span></button>`).join('')}</div>
    <button class="danger-button" style="width:100%; margin-top:13px;" data-action="restart-registration">Restart registration demo</button>
  </div>`;
}

function render() {
  document.getElementById('app').classList.toggle('market-mode', state.tab === 'rwa');
  document.getElementById('pageTitle').textContent = titles[state.tab];
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.tab === state.tab));
  view.innerHTML = ({home:homeView, rwa:rwaView, account:accountView, card:cardView, profile:profileView})[state.tab]();
  applyLanguage(document);
}

function setTab(tab) { state.tab = tab; view.scrollTop = 0; render(); }

function openSheet(content) {
  sheet.className = 'sheet';
  sheet.innerHTML = `<div class="sheet-handle"></div>${content}`;
  modalLayer.hidden = false;
  applyLanguage(sheet);
}

function openFullScreen(content, className = '') {
  sheet.className = `sheet market-fullscreen ${className}`;
  sheet.innerHTML = content;
  modalLayer.hidden = false;
  applyLanguage(sheet);
}

function closeSheet() { modalLayer.hidden = true; sheet.className = 'sheet'; sheet.innerHTML = ''; }

function sheetHeader(title, subtitle) {
  return `<div class="sheet-head"><span><h3>${title}</h3><p>${subtitle}</p></span><button class="close-button" data-action="close-modal" aria-label="Close">×</button></div>`;
}

function showToast(message) {
  toast.textContent = t(message); toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function languageSheet() {
  openSheet(`${sheetHeader('Select language','Choose your display language')}
    <div class="language-options">
      <button class="language-option ${state.language==='en'?'active':''}" data-action="set-language" data-language="en"><b>EN</b><span><strong>English</strong><small>English interface</small></span><i>${state.language==='en'?'✓':''}</i></button>
      <button class="language-option ${state.language==='zh-CN'?'active':''}" data-action="set-language" data-language="zh-CN"><b>中</b><span><strong>简体中文</strong><small>简体中文界面</small></span><i>${state.language==='zh-CN'?'✓':''}</i></button>
    </div>`);
}

function setLanguage(language) {
  state.language = language;
  try { localStorage.setItem('audcDemoLanguage', language); } catch {}
  closeSheet(); render(); renderRegistration(); showToast('Language changed');
}

function safe(value = '') {
  return String(value).replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
}

function registrationShell(title, subtitle, body, actions, step = state.registrationStep) {
  const progress = step > 0 && step < 7
    ? `<div class="registration-progress"><span>${step} / 6</span><div>${[1,2,3,4,5,6].map(i => `<i class="${i<=step?'active':''}"></i>`).join('')}</div></div>` : '';
  return `<div class="registration-screen">
    <header class="registration-header"><span class="registration-brand"><span class="brand-mark small">A</span><b>AUDC</b></span><button data-action="registration-language" aria-label="Select language">${state.language==='zh-CN'?'EN':'中'}</button></header>
    ${progress}<main class="registration-main"><div class="registration-title"><span>SIMULATED REGISTRATION</span><h1>${title}</h1><p>${subtitle}</p></div>${body}</main>
    <footer class="registration-actions">${actions}</footer>
  </div>`;
}

function renderRegistration() {
  const layer = document.getElementById('registrationLayer');
  if (!layer) return;
  layer.hidden = state.registrationComplete;
  if (state.registrationComplete) { layer.innerHTML = ''; return; }
  const p = state.registrationProfile;
  if (state.registrationStep === 0) {
    layer.innerHTML = registrationShell('Create your AUDC account','A global account for AUDD, RWA investing and U-Card spending.',
      `<section class="registration-hero"><div class="registration-orbit"><span>AUDD</span><span>RWA</span><span>U</span><b>A</b></div><ul><li>Explore global RWA opportunities</li><li>Receive proceeds back in AUDD</li><li>Transfer, remit or fund U-Card</li></ul></section><p class="registration-disclaimer">Registration is free. Financial services are available by country and may require verification.</p>`,
      `<button class="primary-button" data-action="registration-start">Create account</button><button class="registration-link" data-action="use-demo-account">Use demo account</button>`, 0);
  } else if (state.registrationStep === 1) {
    layer.innerHTML = registrationShell('Create account details','Start with basic contact information. This is registration, not full KYC.',
      `<div class="registration-form"><label>Email address<input id="regEmail" type="email" value="${safe(p.email)}"></label><label>Mobile number<input id="regPhone" inputmode="tel" value="${safe(p.phone)}"></label><label>Country / region of residence<select id="regCountry"><option ${p.country==='Australia'?'selected':''}>Australia</option><option ${p.country==='New Zealand'?'selected':''}>New Zealand</option><option ${p.country==='Singapore'?'selected':''}>Singapore</option><option>United Kingdom</option><option>Other</option></select></label><label>Referral code (optional)<input id="regReferral" value="${safe(p.referral)}"></label><label class="registration-check"><input id="regAdult" type="checkbox" checked><span>I confirm I am at least 18 years old.</span></label></div>`,
      `<button class="primary-button" data-action="registration-next">Continue</button><button class="registration-link" data-action="registration-back">Back</button>`);
  } else if (state.registrationStep === 2) {
    layer.innerHTML = registrationShell('Tell us about you','These details create your basic profile and help determine available services.',
      `<div class="registration-form two-column"><label>Legal first name<input id="regFirstName" value="${safe(p.firstName)}"></label><label>Legal last name<input id="regLastName" value="${safe(p.lastName)}"></label><label class="wide">Date of birth<input id="regDob" type="date" value="${safe(p.dob)}"></label><label class="wide">Nationality<select id="regNationality"><option ${p.nationality==='Australia'?'selected':''}>Australia</option><option>New Zealand</option><option>Singapore</option><option>United Kingdom</option><option>Other</option></select></label><label class="wide">Display name<input id="regDisplayName" value="${safe(p.displayName)}"></label></div>`,
      `<button class="primary-button" data-action="registration-next">Continue to agreements</button><button class="registration-link" data-action="registration-back">Back</button>`);
  } else if (state.registrationStep === 3) {
    layer.innerHTML = registrationShell('Review and agree','Your relationship is with the future overseas platform operator. Provider terms may also apply when you use a service.',
      `<div class="consent-list"><label><input id="regTerms" type="checkbox" checked><span><b>Platform User Agreement</b><small>I agree to the Platform User Agreement.</small></span></label><label><input id="regPrivacy" type="checkbox" checked><span><b>Privacy Notice</b><small>I acknowledge the Privacy Notice and consent to the stated data processing.</small></span></label><label><input id="regRisk" type="checkbox" checked><span><b>Risk and eligibility</b><small>I acknowledge that RWA products, AUDD transfers and U-Card services have separate risks and eligibility rules.</small></span></label><label><input type="checkbox"><span><b>Product updates</b><small>Send me optional product updates.</small></span></label></div>`,
      `<button class="primary-button" data-action="registration-next">Agree and continue</button><button class="registration-link" data-action="registration-back">Back</button>`);
  } else if (state.registrationStep === 4) {
    layer.innerHTML = registrationShell('Secure your account','Create a demo password and choose a preferred MFA method.',
      `<div class="registration-form"><label>Password<input id="regPassword" type="password" value="Demo123!"></label><label>Confirm password<input id="regPasswordConfirm" type="password" value="Demo123!"></label><label>MFA method<select id="regMfa"><option>Authenticator app</option><option>SMS</option><option>Email</option></select></label></div><div class="registration-security"><span>${icon('shield')}</span><p>In a live service, MFA recovery and trusted-device changes would require additional security checks.</p></div>`,
      `<button class="primary-button" data-action="registration-next">Create basic account</button><button class="registration-link" data-action="registration-back">Back</button>`);
  } else if (state.registrationStep === 5 || state.registrationStep === 6) {
    const channel = state.registrationStep === 5 ? 'email' : 'mobile';
    const target = channel === 'email' ? p.email : p.phone;
    const code = state.registrationChallenge?.developmentCode || '';
    layer.innerHTML = registrationShell(channel === 'email' ? 'Verify your email' : 'Verify your mobile',`Enter the six-digit code sent to your ${channel}.`,
      `<section class="verification-card"><span>${channel.toUpperCase()}</span><strong>${safe(target)}</strong></section><div class="registration-form"><label>Verification code<input id="regCode" class="registration-code" inputmode="numeric" maxlength="6" value="${safe(code)}"></label></div>${code?`<p class="registration-hint">Local development code: ${safe(code)}</p>`:''}<button class="registration-link inline" data-action="registration-resend">Resend code</button>`,
      `<button class="primary-button" data-action="registration-next">Verify and continue</button>`);
  } else {
    layer.innerHTML = registrationShell('Basic account created','Your basic account is ready. Verification will be requested only when required by the service, amount, country or risk controls.',
      `<div class="registration-success"><span>✓</span><strong>Registration complete</strong><small>${safe(p.firstName)} ${safe(p.lastName)} · ${safe(p.country)}${state.platformUid?` · ${safe(state.platformUid)}`:''}</small></div><div class="service-readiness"><div><span>${icon('wallet')}</span><p><b>AUDD account</b><small>Available subject to country rules</small></p><i>Basic</i></div><div><span>${icon('chart')}</span><p><b>RWA investing</b><small>KYC and partner eligibility required</small></p><i>Next</i></div><div><span>${icon('globe')}</span><p><b>Global remittance</b><small>Own-name bank verification required</small></p><i>Later</i></div><div><span>${icon('card')}</span><p><b>U-Card</b><small>Issuer review required</small></p><i>Later</i></div></div><p class="registration-disclaimer">Local development account only. No external financial service is connected.</p>`,
      `<button class="primary-button" data-action="registration-finish">Enter AUDC demo</button>`, 7);
  }
  applyLanguage(layer);
}

async function registrationNext() {
  const value = id => document.getElementById(id)?.value.trim();
  if (state.registrationStep === 1) {
    if (!value('regEmail') || !value('regPhone') || !value('regCountry')) return showToast('Please complete all required fields');
    if (!document.getElementById('regAdult')?.checked) return showToast('Please confirm you are at least 18');
    Object.assign(state.registrationProfile,{email:value('regEmail'),phone:value('regPhone'),country:value('regCountry'),referral:value('regReferral')});
  } else if (state.registrationStep === 2) {
    if (!value('regFirstName') || !value('regLastName') || !value('regDob') || !value('regNationality')) return showToast('Please complete all required fields');
    Object.assign(state.registrationProfile,{firstName:value('regFirstName'),lastName:value('regLastName'),dob:value('regDob'),nationality:value('regNationality'),displayName:value('regDisplayName')});
  } else if (state.registrationStep === 3) {
    if (!['regTerms','regPrivacy','regRisk'].every(id => document.getElementById(id)?.checked)) return showToast('Please accept the required agreements');
  } else if (state.registrationStep === 4) {
    const password=value('regPassword'), confirm=value('regPasswordConfirm');
    if (password.length < 8 || password !== confirm) return showToast('Passwords must match and contain at least 8 characters');
    Object.assign(state.registrationProfile,{password,mfa:value('regMfa')});
    return submitLocalRegistration();
  } else if (state.registrationStep === 5 || state.registrationStep === 6) {
    if (!/^\d{6}$/.test(value('regCode'))) return showToast('Enter the six-digit demo code');
    return confirmRegistrationChallenge(value('regCode'));
  }
  state.registrationStep += 1; renderRegistration();
}

async function submitLocalRegistration() {
  if (state.registrationSubmitting) return;
  state.registrationSubmitting = true;
  const p = state.registrationProfile;
  let idempotencyKey;
  try {
    idempotencyKey = localStorage.getItem('audcDemoRegistrationIdempotency') || globalThis.crypto?.randomUUID?.() || `demo-${Date.now()}`;
    localStorage.setItem('audcDemoRegistrationIdempotency',idempotencyKey);
  } catch { idempotencyKey = `demo-${Date.now()}`; }
  try {
    const response = await fetch('http://127.0.0.1:3001/api/v1/registrations',{
      method:'POST',headers:{'content-type':'application/json','idempotency-key':idempotencyKey},
      body:JSON.stringify({email:p.email,mobile:p.phone,countryOfResidence:p.country,legalFirstName:p.firstName,legalLastName:p.lastName,dateOfBirth:p.dob,nationality:p.nationality,displayName:p.displayName,password:p.password,mfaMethod:p.mfa,consents:{userAgreement:true,privacyNotice:true,riskDisclosure:true}})
    });
    const result = await response.json();
    if (!response.ok && !(response.status===409 && result.platformUid)) throw new Error(result.error?.code || result.error || 'registration_failed');
    state.platformUid = result.platformUid;
    state.onboardingToken = result.onboardingToken;
    if (!state.onboardingToken) throw new Error('onboarding_token_missing');
    await issueRegistrationChallenge('email');
    showToast('Saved to the local platform API');
  } catch (error) {
    state.onboardingToken = null;
    showToast(`Registration was not saved: ${error.message || error}`);
  } finally {
    state.registrationSubmitting = false;
    state.registrationStep = state.onboardingToken ? 5 : 4;
    renderRegistration();
  }
}

async function issueRegistrationChallenge(channel = state.registrationStep === 6 ? 'mobile' : 'email') {
  const response = await fetch('http://127.0.0.1:3001/api/v1/onboarding/verifications',{
    method:'POST',headers:{'content-type':'application/json','authorization':`Bearer ${state.onboardingToken}`},body:JSON.stringify({channel})
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || 'verification_issue_failed');
  state.registrationChallenge = result;
  return result;
}

async function confirmRegistrationChallenge(code) {
  if (!state.registrationChallenge) return showToast('Verification challenge unavailable');
  try {
    const response = await fetch(`http://127.0.0.1:3001/api/v1/onboarding/verifications/${state.registrationChallenge.challengeId}/confirm`,{
      method:'POST',headers:{'content-type':'application/json','authorization':`Bearer ${state.onboardingToken}`},body:JSON.stringify({code})
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'verification_failed');
    if (state.registrationStep === 5) {
      state.registrationStep = 6;
      await issueRegistrationChallenge('mobile');
    } else {
      state.registrationStep = 7;
      state.registrationChallenge = null;
      await establishLocalSession();
    }
    renderRegistration();
  } catch (error) { showToast(String(error.message || error)); }
}

async function apiFetch(path, options = {}, retry = true) {
  const headers = { ...(options.headers || {}) };
  if (state.accessToken) headers.authorization = `Bearer ${state.accessToken}`;
  let response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  if (response.status === 401 && retry && state.refreshToken) {
    const refreshed = await fetch(`${API_BASE}/auth/refresh`, {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ refreshToken: state.refreshToken }),
    });
    if (refreshed.ok) {
      const session = await refreshed.json();
      saveLocalSession(session);
      response = await fetch(`${API_BASE}${path}`, { ...options, headers: { ...headers, authorization: `Bearer ${state.accessToken}` } });
    }
  }
  return response;
}

function saveLocalSession(session) {
  state.accessToken = session.accessToken; state.refreshToken = session.refreshToken; state.apiConnected = true;
  try {
    localStorage.setItem('audcDemoAccessToken', state.accessToken);
    localStorage.setItem('audcDemoRefreshToken', state.refreshToken);
  } catch {}
}

async function establishLocalSession() {
  const p = state.registrationProfile;
  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: p.email, password: p.password, deviceId: 'mobile-web-demo', deviceName: 'AUDC mobile demo' }),
    });
    const session = await response.json();
    if (!response.ok || session.mfaRequired) throw new Error(session.mfaRequired ? 'MFA setup requires a fresh demo registration' : 'login_failed');
    saveLocalSession(session);
    await apiFetch('/development/wallet/seed', { method: 'POST' });
    await syncApiWallet();
    showToast('Local account and AUDD wallet connected');
  } catch (error) {
    state.apiConnected = false;
    showToast(`Account created, but local wallet login failed: ${error.message || error}`);
  }
}

async function syncApiWallet() {
  if (!state.accessToken) return false;
  try {
    const response = await apiFetch('/wallet');
    if (!response.ok) return false;
    const wallet = await response.json();
    state.audd = Number(wallet.availableBalance);
    state.apiConnected = true;
    render();
    return true;
  } catch { return false; }
}

function finishRegistration() {
  state.registrationComplete = true;
  try { localStorage.setItem('audcDemoRegistrationComplete','true'); } catch {}
  renderRegistration(); syncApiWallet().finally(render);
}

function restartRegistration() {
  state.registrationComplete = false; state.registrationStep = 0; state.platformUid = null; state.onboardingToken = null; state.registrationChallenge = null;
  state.accessToken = null; state.refreshToken = null; state.apiConnected = false;
  try { localStorage.removeItem('audcDemoRegistrationComplete'); localStorage.removeItem('audcDemoRegistrationIdempotency'); localStorage.removeItem('audcDemoAccessToken'); localStorage.removeItem('audcDemoRefreshToken'); } catch {}
  closeSheet(); renderRegistration(); showToast('Demo registration reset');
}

function amountSheet({kind, title, subtitle, currency='AUDD', warning='', button='Continue'}) {
  const labels = { invest: 'Investment amount', transfer: 'Transfer amount', remit: 'Send amount', cardFund: 'AUDD amount', fund: 'Purchase amount' };
  openSheet(`${sheetHeader(title, subtitle)}
    <div class="form-field"><label>${labels[kind]}</label><div class="input-wrap"><input id="flowAmount" inputmode="decimal" value="500" aria-label="${labels[kind]}"/><span>${currency}</span></div></div>
    <div class="quote-box"><div class="quote-row"><span>Available</span><strong>${money(state.audd)}</strong></div><div class="quote-row"><span>Demo fee</span><strong>${kind==='cardFund'?'5.00':'2.50'} AUDD</strong></div><div class="quote-row"><span>Indicative quote</span><strong>1 AUDD = 1.00 AUD</strong></div></div>
    ${warning ? `<div class="warning-box"><span>!</span><span>${warning}</span></div>` : ''}
    <button class="primary-button" data-action="confirm-flow" data-kind="${kind}">${button}</button>`);
}

function chartSvg(p) {
  const down = p.change < 0;
  const candles = down
    ? [[24,45,19,37],[48,62,35,55],[70,59,43,50],[94,75,55,69],[118,92,67,86],[142,108,82,101],[166,123,96,115],[190,142,111,135],[214,128,104,119],[238,151,118,142],[262,163,132,154],[286,149,123,139]]
    : [[24,70,52,61],[48,63,42,48],[70,58,39,46],[94,50,31,37],[118,47,28,34],[142,41,22,29],[166,34,17,24],[190,39,19,31],[214,29,12,20],[238,24,10,17],[262,31,13,25],[286,20,7,14]];
  const bars = candles.map((c,i) => {
    const [x,open,low,close] = c; const rise = close < open; const color = rise ? '#35c98b' : '#f05d6c';
    const y = Math.min(open,close); const h = Math.max(5,Math.abs(close-open));
    return `<line x1="${x}" y1="${low}" x2="${x}" y2="${Math.max(open,close)+10}" stroke="${color}" stroke-width="1.2"/><rect x="${x-4}" y="${y}" width="8" height="${h}" rx="1" fill="${color}"/>`;
  }).join('');
  return `<svg class="candle-chart" viewBox="0 0 310 178" role="img" aria-label="Simulated price chart">
    <g class="chart-grid"><line x1="8" y1="25" x2="302" y2="25"/><line x1="8" y1="66" x2="302" y2="66"/><line x1="8" y1="107" x2="302" y2="107"/><line x1="8" y1="148" x2="302" y2="148"/></g>
    <path d="M8 118 C45 100,58 119,88 88 S139 83,165 57 S212 69,235 37 S277 45,302 18" fill="none" stroke="#476073" stroke-width="1" stroke-dasharray="3 4" opacity=".65"/>
    ${bars}<line x1="8" y1="${down?139:24}" x2="302" y2="${down?139:24}" stroke="${down?'#f05d6c':'#35c98b'}" stroke-width="1" stroke-dasharray="2 3"/>
  </svg>`;
}

function productSheet(id) {
  const p = products.find(x => x.id === id);
  const up = p.change >= 0; const sign = up ? '+' : '';
  const high = (p.price * 1.035).toFixed(2); const low = (p.price * .972).toFixed(2);
  const open = (p.price / (1 + p.change/100)).toFixed(2); const prev = (p.price * .995).toFixed(2);
  openFullScreen(`<div class="detail-page">
    <header class="trade-header"><button data-action="close-modal" aria-label="Back">‹</button><span><strong>${p.symbol} / AUDD</strong><small>${p.name}</small></span><button data-action="watch-product" aria-label="Add to watchlist">★</button></header>
    <nav class="detail-tabs"><button class="active">Market</button><button data-action="demo-only">Overview</button><button data-action="demo-only">News</button><button data-action="demo-only">Financials</button><button data-action="demo-only">Research</button></nav>
    <section class="quote-summary"><div><strong class="${up?'quote-up':'quote-down'}">${p.price.toFixed(2)}</strong><small>≈ A$ ${p.price.toFixed(2)} <em class="${up?'quote-up':'quote-down'}">${sign}${p.change.toFixed(2)}%</em></small></div><dl><div><dt>High</dt><dd>${high}</dd></div><div><dt>Low</dt><dd>${low}</dd></div><div><dt>Open</dt><dd>${open}</dd></div><div><dt>Prev close</dt><dd>${prev}</dd></div></dl></section>
    <div class="market-session"><span><b>Demo market</b> · delayed simulated data</span><span>Last update 10:40</span></div>
    <nav class="chart-tools"><button>1m</button><button>5m</button><button class="active">15m</button><button>30m</button><button>1h</button><button>1D</button><button>Indicators</button></nav>
    <section class="chart-panel">${chartSvg(p)}<div class="chart-prices"><span>${(p.price*1.12).toFixed(0)}</span><span>${(p.price*1.04).toFixed(0)}</span><span>${(p.price*.96).toFixed(0)}</span><span>${(p.price*.88).toFixed(0)}</span></div><div class="current-price ${up?'up':'down'}">${p.price.toFixed(2)}</div></section>
    <div class="live-quotes"><span><small>Indicative buy</small><strong>${(p.price*1.0007).toFixed(2)}</strong></span><span><small>Indicative sell</small><strong>${(p.price*.9993).toFixed(2)}</strong></span></div>
    <section class="instrument-note"><strong>${p.name}</strong><p>${t(p.detail)}${state.language==='zh-CN'?'。':'. '}${t('Product structure, ownership and execution depend on the selected RWA partner.')}</p><div><span>${p.type}</span><span>${t('Min')} ${p.min} AUDD</span><span>${p.risk}</span></div></section>
    <footer class="detail-cta"><button data-action="open-trade" data-id="${id}">Trade</button></footer>
  </div>`, 'detail-fullscreen');
}

function tradeSheet(id) {
  const p = products.find(x => x.id === id);
  const side = state.tradeSide;
  const trades = [0.04,-0.03,0.02,0.01,-0.05,0.03,-0.01,0.02].map((delta,i) => ({time:`10:${String(40-i).padStart(2,'0')}`, price:p.price+delta, qty:[42,6,18,10,25,20,9,15][i]}));
  openFullScreen(`<div class="trade-page">
    <header class="trade-header"><button data-action="product" data-id="${id}" aria-label="Back">‹</button><span><strong>${p.symbol} / AUDD</strong><small>${p.price.toFixed(2)} <em class="${p.change>=0?'quote-up':'quote-down'}">${p.change>=0?'+':''}${p.change.toFixed(2)}%</em></small></span><button data-action="watch-product" aria-label="Add to watchlist">★</button></header>
    <div class="order-layout">
      <section class="order-form">
        <div class="side-switch"><button class="${side==='buy'?'active buy':''}" data-trade-side="buy" data-id="${id}">Buy</button><button class="${side==='sell'?'active sell':''}" data-trade-side="sell" data-id="${id}">Sell</button></div>
        <label class="order-select">Order type <strong>Market order⌄</strong></label>
        <div class="form-field"><label>${side==='buy'?'Order value':'Sale value'}</label><div class="input-wrap dark-input"><input id="flowAmount" inputmode="decimal" value="500" aria-label="Order value"/><span>AUDD</span></div></div>
        <div class="range-mock"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="order-balance"><span>Available</span><strong>${money(state.audd)}</strong><span>Estimated units</span><strong>≈ ${(500/p.price).toFixed(4)} ${p.symbol}</strong></div>
        <div class="market-closed"><span>i</span><p><strong>Simulation only</strong>Orders are completed locally. A live product would follow partner market hours and execution rules.</p></div>
      </section>
      <aside class="order-tape"><header><span>Time</span><span>Price</span><span>Qty</span></header>${trades.map((t,i)=>`<div><span>${t.time}</span><strong class="${i%3===0?'quote-down':'quote-up'}">${t.price.toFixed(2)}</strong><span>${t.qty}</span></div>`).join('')}</aside>
    </div>
    <section class="open-orders"><nav><button class="active">Open orders (0)</button><button>Holdings</button></nav><p>No open demo orders</p></section>
    <footer class="trade-cta"><button class="${side==='buy'?'buy':'sell'}" data-action="confirm-flow" data-kind="${side==='buy'?'invest':'sell'}">${side==='buy'?'Simulate buy':'Simulate sell'}</button></footer>
  </div>`, 'trade-fullscreen');
}

function successSheet(title, message) {
  openSheet(`<div class="success-state"><div class="success-icon">✓</div><h3>${title}</h3><p>${message}</p><button class="primary-button" data-action="close-modal">Return to demo</button></div>`);
}

function receiveSheet() {
  openSheet(`${sheetHeader('Receive AUDD','Transfer from a compatible external wallet')}
    <div class="quote-box"><div class="quote-row"><span>Network</span><strong>Stellar · Demo</strong></div><div class="quote-row"><span>Wallet address</span><strong>GAUD…7X2P</strong></div><div class="quote-row"><span>Memo</span><strong>102948</strong></div></div>
    <div class="warning-box"><span>!</span><span>Only send AUDD on the supported network. This address is illustrative and cannot receive funds.</span></div>
    <button class="primary-button" data-action="copy-demo">Copy demo address</button>`);
}

function externalTransferSheet() {
  openSheet(`${sheetHeader('Transfer to external wallet','Send AUDD outside this platform')}
    <div class="form-field"><label>Wallet address</label><div class="input-wrap"><input class="wallet-address-input" id="externalWalletAddress" value="G${'A'.repeat(55)}" aria-label="External wallet address"/></div></div>
    <div class="form-field"><label>Address label</label><div class="input-wrap"><input id="externalWalletLabel" value="Personal wallet" aria-label="Address label"/><span>STELLAR</span></div></div>
    <div class="form-field"><label>Amount</label><div class="input-wrap"><input id="flowAmount" inputmode="decimal" value="250" aria-label="Transfer amount"/><span>AUDD</span></div></div>
    <div class="warning-box"><span>!</span><span>This sends AUDD on-chain and does not convert it to fiat. A live service would apply KYT, limits and address checks.</span></div>
    <button class="primary-button" data-action="confirm-flow" data-kind="transfer">Review transfer</button>`);
}

async function reviewApiTransfer() {
  if (!state.accessToken) return confirmFlow('transfer');
  const addressValue = document.getElementById('externalWalletAddress')?.value.trim();
  const label = document.getElementById('externalWalletLabel')?.value.trim();
  const amount = document.getElementById('flowAmount')?.value.trim();
  try {
    let addressResponse = await apiFetch('/wallet/addresses', {
      method:'POST', headers:{'content-type':'application/json'},
      body:JSON.stringify({ network:'stellar', address:addressValue, label }),
    });
    let address;
    if (addressResponse.status === 409) {
      const listResponse = await apiFetch('/wallet/addresses');
      const list = await listResponse.json();
      address = list.items?.find(item => item.address === addressValue);
    } else {
      address = await addressResponse.json();
    }
    if (!addressResponse.ok && addressResponse.status !== 409) throw new Error(address.message || 'address_rejected');
    if (!address?.id) throw new Error('address_unavailable');
    const quoteResponse = await apiFetch('/wallet/transfer-quotes', {
      method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({ addressId:address.id, amount }),
    });
    const quote = await quoteResponse.json();
    if (!quoteResponse.ok) throw new Error(quote.message || 'quote_failed');
    state.pendingTransferQuote = quote;
    openSheet(`${sheetHeader('Review external transfer','Quote valid for 60 seconds')}
      <div class="quote-box"><div class="quote-row"><span>Send amount</span><strong>${Number(quote.sendAmount).toFixed(2)} AUDD</strong></div><div class="quote-row"><span>Network fee</span><strong>${Number(quote.networkFee).toFixed(2)} AUDD</strong></div><div class="quote-row"><span>Platform fee</span><strong>${Number(quote.platformFee).toFixed(2)} AUDD</strong></div><div class="quote-row"><span>Total debit</span><strong>${Number(quote.totalDebit).toFixed(2)} AUDD</strong></div></div>
      <div class="warning-box"><span>!</span><span>The transfer will enter screening and broadcasting. On-chain transfers cannot be recalled after confirmation.</span></div>
      <button class="primary-button" data-action="submit-api-transfer">Submit transfer</button>`);
  } catch (error) { showToast(String(error.message || error)); }
}

async function submitApiTransfer() {
  const quote = state.pendingTransferQuote;
  if (!quote) return showToast('Transfer quote unavailable');
  const idempotencyKey = globalThis.crypto?.randomUUID?.() || `mobile-transfer-${Date.now()}`;
  try {
    const response = await apiFetch(`/wallet/transfer-quotes/${quote.id}/submit`, {
      method:'POST', headers:{'idempotency-key':idempotencyKey},
    });
    const transfer = await response.json();
    if (!response.ok) throw new Error(transfer.message || 'transfer_submission_failed');
    await syncApiWallet();
    state.activities.unshift({icon:'arrowOut',title:'External wallet transfer',subtitle:`${transfer.status} · Local API`,value:`-${Number(transfer.totalDebit).toFixed(2)} AUDD`});
    state.pendingTransferQuote = null;
    successSheet('Transfer submitted', `${Number(transfer.totalDebit).toFixed(2)} AUDD is reserved. Current status: ${transfer.status}. Operations can now simulate confirmation or failure in the admin demo.`);
  } catch (error) { showToast(String(error.message || error)); }
}

function remittanceSheet() {
  openSheet(`${sheetHeader('Global remittance','Partner-provided payout to your own account')}
    <div class="form-field"><label>Verified beneficiary</label><div class="input-wrap"><input value="Ken Wang · •• 4821" aria-label="Verified beneficiary" readonly/><span>AUD</span></div></div>
    <div class="form-field"><label>Send amount</label><div class="input-wrap"><input id="flowAmount" inputmode="decimal" value="500" aria-label="Remittance amount"/><span>AUDD</span></div></div>
    <div class="quote-box"><div class="quote-row"><span>Indicative payout</span><strong>497.50 AUD</strong></div><div class="quote-row"><span>Demo fee</span><strong>2.50 AUDD</strong></div><div class="quote-row"><span>Estimated arrival</span><strong>Same business day</strong></div></div>
    <div class="warning-box"><span>!</span><span>Only verified accounts in the user's own name are allowed. No remittance provider is connected in this demo.</span></div>
    <button class="primary-button" data-action="confirm-flow" data-kind="remit">Review remittance</button>`);
}

function cardControlsSheet() {
  openSheet(`${sheetHeader('Card controls','Local demo controls')}
    <div class="settings-list"><button class="setting-row" style="width:100%;border-inline:0;border-top:0;background:#fff;text-align:left" data-action="toggle-card"><span class="row-icon">${icon('lock')}</span><span class="row-copy"><strong>Freeze card</strong><small>Temporarily block new transactions</small></span><span class="chevron">›</span></button><button class="setting-row" style="width:100%;border:0;background:#fff;text-align:left" data-action="demo-only"><span class="row-icon">${icon('settings')}</span><span class="row-copy"><strong>Spending controls</strong><small>Online, contactless and international usage</small></span><span class="chevron">›</span></button></div>`);
}

function activationSheet() {
  const plan = cardPlans[state.cardTier];
  openSheet(`${sheetHeader('Activate U-Card',`${t(plan.name)} · ${t('Local demo activation')}`)}
    <div class="activation-steps"><div class="done"><b>✓</b><span><strong>Card issued</strong><small>Demo card details are ready</small></span></div><div class="done"><b>✓</b><span><strong>Identity matched</strong><small>Demo holder name confirmed</small></span></div><div><b>3</b><span><strong>Activate and secure</strong><small>Create controls before funding</small></span></div></div>
    <div class="warning-box"><span>i</span><span>No issuer is connected. This activation only changes the local demo state.</span></div>
    <button class="primary-button" data-action="confirm-activate">Activate demo U-Card</button>`);
}

function cardPlanSheet(tier) {
  const p = cardPlans[tier];
  openSheet(`${sheetHeader(p.name,'Choose a simulated U-Card plan')}
    <div class="plan-detail ${p.cls}"><span>${p.label}</span><strong>${p.price}</strong><small>${p.priceNote}</small></div>
    <div class="quote-box"><div class="quote-row"><span>Funding fee</span><strong>${p.funding}</strong></div><div class="quote-row"><span>International FX</span><strong>${p.fx}</strong></div><div class="quote-row"><span>Card format</span><strong>${p.delivery}</strong></div></div>
    <div class="warning-box"><span>!</span><span>Pricing and fee rates are illustrative only and require confirmation with the selected card issuer.</span></div>
    <button class="primary-button" data-action="confirm-card-plan" data-tier="${tier}">${t('Get')} ${t(p.name)}</button>`);
}

function kycSheet() {
  openSheet(`${sheetHeader('Investor profile','Simulated progressive verification')}
    <div class="progress-block" style="margin-top:0"><div class="progress-top"><span>Profile completion</span><span>72%</span></div><div class="progress-track"><span></span></div><p>Identity verified. Investment experience and source-of-funds details are still required.</p></div>
    <div class="form-field"><label>Investment experience</label><div class="input-wrap"><input value="1–3 years" aria-label="Investment experience"/><span>EDIT</span></div></div>
    <div class="form-field"><label>Primary source of funds</label><div class="input-wrap"><input value="Employment income" aria-label="Source of funds"/><span>EDIT</span></div></div>
    <div class="warning-box"><span>i</span><span>A live service may require additional checks from each regulated partner. KYC reuse is not guaranteed.</span></div>
    <button class="primary-button" data-action="complete-kyc">Save demo profile</button>`);
}

function confirmFlow(kind) {
  const input = document.getElementById('flowAmount');
  const amount = Number(input?.value || 0);
  if (!amount || amount <= 0) return showToast('Enter a valid demo amount');
  if (kind === 'transfer' && state.accessToken) return reviewApiTransfer();
  const requiredAudd = kind === 'cardFund' ? amount + 5 : amount;
  if (['transfer','remit','cardFund','invest'].includes(kind) && requiredAudd > state.audd) return showToast('Demo balance is too low');
  if (kind === 'cardFund') {
    state.audd -= amount + 5; state.card += amount;
    state.cardActivities.unshift({title:'Card funding',subtitle:'From AUDD · Just now',value:`+${amount.toFixed(2)} AUD`,positive:true});
    state.activities.unshift({icon:'card',title:'U-Card funding',subtitle:'Final AUDD exit · Just now',value:`-${(amount+5).toFixed(2)} AUDD`});
    successSheet('U-Card funded', state.language === 'zh-CN' ? `模拟卡现已获得 ${amount.toFixed(2)} AUD 可用余额，该金额不能转回 AUDD。` : `${amount.toFixed(2)} AUD is now available on the simulated card. This amount cannot return to AUDD.`);
  } else if (kind === 'invest') {
    state.audd -= amount; state.rwa += amount;
    state.activities.unshift({icon:'chart',title:'RWA investment',subtitle:'Demo order completed · Just now',value:`-${amount.toFixed(2)} AUDD`});
    successSheet('Investment simulated', state.language === 'zh-CN' ? `${amount.toFixed(2)} AUDD 已进入模拟 RWA 投资组合，未来收益将结算回 AUDD。` : `${amount.toFixed(2)} AUDD has moved into the demo RWA portfolio. Future income will settle back to AUDD.`);
  } else if (kind === 'sell') {
    if (amount > state.rwa) return showToast('Demo RWA balance is too low');
    state.audd += amount; state.rwa -= amount;
    state.activities.unshift({icon:'chart',title:'RWA sale',subtitle:'Demo order completed · Just now',value:`+${amount.toFixed(2)} AUDD`,positive:true});
    successSheet('Sale simulated', state.language === 'zh-CN' ? `${amount.toFixed(2)} AUDD 模拟卖出所得已返回您的 AUDD 钱包。` : `${amount.toFixed(2)} AUDD of simulated proceeds has returned to your AUDD Wallet.`);
  } else if (kind === 'transfer') {
    state.audd -= amount;
    state.activities.unshift({icon:'arrowOut',title:'External wallet transfer',subtitle:'Demo transfer · Just now',value:`-${amount.toFixed(2)} AUDD`});
    successSheet('Transfer simulated', state.language === 'zh-CN' ? `${amount.toFixed(2)} AUDD 已模拟发送至外部钱包，未发生真实链上交易。` : `${amount.toFixed(2)} AUDD was sent to the demo external wallet. No blockchain transaction occurred.`);
  } else if (kind === 'remit') {
    state.audd -= amount;
    state.activities.unshift({icon:'globe',title:'Global remittance',subtitle:'Own-name account · Just now',value:`-${amount.toFixed(2)} AUDD`});
    successSheet('Remittance simulated', state.language === 'zh-CN' ? `已模拟发起 ${(amount-2.5).toFixed(2)} AUD 合作方付款至本人已验证账户。` : `A partner payout of ${(amount-2.5).toFixed(2)} AUD is shown as initiated to the verified own-name account.`);
  } else if (kind === 'fund') {
    state.audd += amount;
    state.activities.unshift({icon:'plus',title:'AUDD purchase',subtitle:'Demo fiat gateway · Just now',value:`+${amount.toFixed(2)} AUDD`,positive:true});
    successSheet('AUDD added', state.language === 'zh-CN' ? `已添加 ${amount.toFixed(2)} 模拟 AUDD，未发生真实法币交易。` : `${amount.toFixed(2)} demo AUDD has been added. No fiat transaction occurred.`);
  }
}

document.addEventListener('click', e => {
  const tab = e.target.closest('[data-tab]')?.dataset.tab;
  const jump = e.target.closest('[data-tab-jump]')?.dataset.tabJump;
  const actionEl = e.target.closest('[data-action]');
  const filter = e.target.closest('[data-filter]')?.dataset.filter;
  const marketTab = e.target.closest('[data-market-tab]')?.dataset.marketTab;
  const accountView = e.target.closest('[data-account-view]')?.dataset.accountView;
  if (tab) return setTab(tab);
  if (jump) return setTab(jump);
  if (filter) { state.productFilter = filter; return render(); }
  if (marketTab) { state.marketTab = marketTab; state.productFilter = 'All'; return render(); }
  if (accountView) { state.accountView = accountView; return render(); }
  if (!actionEl) return;
  const action = actionEl.dataset.action;
  if (action === 'registration-start') {
    state.registrationProfile.email = `ken.wang+${Date.now()}@example.demo`;
    state.registrationStep = 1;
    renderRegistration();
  }
  else if (action === 'registration-next') registrationNext();
  else if (action === 'registration-back') { state.registrationStep = Math.max(0,state.registrationStep-1); renderRegistration(); }
  else if (action === 'registration-resend') issueRegistrationChallenge().then(()=>{renderRegistration();showToast('Demo code sent again')}).catch(()=>showToast('Unable to resend code'));
  else if (action === 'registration-language') { state.language=state.language==='en'?'zh-CN':'en'; try{localStorage.setItem('audcDemoLanguage',state.language)}catch{} render(); renderRegistration(); }
  else if (action === 'registration-finish' || action === 'use-demo-account') finishRegistration();
  else if (action === 'restart-registration') restartRegistration();
  else if (action === 'go-home') setTab('home');
  else if (action === 'close-modal') { closeSheet(); render(); }
  else if (action === 'product') productSheet(actionEl.dataset.id);
  else if (action === 'open-trade') { state.tradeSide = 'buy'; tradeSheet(actionEl.dataset.id); }
  else if (action === 'start-invest') amountSheet({kind:'invest',title:'Invest with AUDD',subtitle:'Simulated order · No partner connected',warning:'Your AUDD would be reserved while a real partner order is processed.',button:'Simulate investment'});
  else if (action === 'receive') receiveSheet();
  else if (action === 'external-transfer') externalTransferSheet();
  else if (action === 'remittance') remittanceSheet();
  else if (action === 'fund') amountSheet({kind:'fund',title:'Get AUDD',subtitle:'Simulated fiat gateway purchase',button:'Add demo AUDD'});
  else if (action === 'card-fund') state.cardActivated ? amountSheet({kind:'cardFund',title:'Fund U-Card',subtitle:'Convert AUDD to an AUD fiat card balance',warning:'Successful funding is final and cannot be converted back to AUDD.',button:'Confirm irreversible funding'}) : activationSheet();
  else if (action === 'card-controls') cardControlsSheet();
  else if (action === 'activate-card') activationSheet();
  else if (action === 'confirm-activate') { state.cardActivated = true; closeSheet(); render(); showToast('U-Card activated'); }
  else if (action === 'choose-card') cardPlanSheet(actionEl.dataset.tier);
  else if (action === 'confirm-card-plan') { state.cardTier = actionEl.dataset.tier; state.cardActivated = false; successSheet('U-Card selected', state.language === 'zh-CN' ? `已选择${t(cardPlans[state.cardTier].name)}，请完成模拟激活。` : `${cardPlans[state.cardTier].name} selected. Complete demo activation to continue.`); }
  else if (action === 'kyc') kycSheet();
  else if (action === 'confirm-flow') confirmFlow(actionEl.dataset.kind);
  else if (action === 'submit-api-transfer') submitApiTransfer();
  else if (action === 'complete-kyc') successSheet('Profile saved','The demo investor profile is now ready for product eligibility review.');
  else if (action === 'copy-demo') showToast('Demo address copied — not valid on-chain');
  else if (action === 'toggle-card') { closeSheet(); showToast('Demo card frozen'); }
  else if (action === 'notifications') showToast('2 demo notifications');
  else if (action === 'language') languageSheet();
  else if (action === 'set-language') setLanguage(actionEl.dataset.language);
  else if (action === 'watch-product') showToast('Added to demo watchlist');
  else showToast('Demo interaction — no external service connected');
});

document.addEventListener('click', e => {
  const sideEl = e.target.closest('[data-trade-side]');
  if (!sideEl) return;
  state.tradeSide = sideEl.dataset.tradeSide;
  tradeSheet(sideEl.dataset.id);
});

document.addEventListener('click', e => {
  const dot = e.target.closest('[data-banner-index]');
  if (dot) setBanner(dot.dataset.bannerIndex);
});

document.addEventListener('input', e => {
  if (e.target.id === 'productSearch') {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('[data-market-row]').forEach(row => row.hidden = !row.textContent.toLowerCase().includes(q));
  }
});

document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
setInterval(() => document.getElementById('clock').textContent = new Date().toLocaleTimeString([], {hour:'numeric', minute:'2-digit'}), 30000);
setInterval(() => { if (state.tab === 'home' && modalLayer.hidden) setBanner((state.bannerIndex + 1) % banners.length); }, 4500);
render();
renderRegistration();
if (state.accessToken) syncApiWallet();
