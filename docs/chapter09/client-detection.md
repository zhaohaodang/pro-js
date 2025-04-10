# 第9章 客户端检测

浏览器提供商虽然在实现公共接口方面投入了很多精力，但结果仍然是每一种浏览器都有各自的长处，也都有各自的缺点。即使是那些跨平台的浏览器，虽然从技术上看版本相同，也照样存在不一致性问题。

面对普遍存在的不一致性问题，开发人员要么采取迁就各方的“最小公分母”策略，要么（也是更常见的）就得利用各种**客户端检测**方法，来突破或者规避种种局限性。

检测 Web 客户端的手段很多，而且各有利弊。但最重要的还是要知道，不到万不得已，就不要使用客户端检测。只要能找到更通用的方法，就应该优先采用更通用的方法。一言以蔽之，先设计最通用的方案，然后再使用特定于浏览器的技术增强该方案。
