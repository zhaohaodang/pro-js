# Boolean类型

Boolean 类型是ECMAScript 中使用得最多的一种类型，该类型只有两个字面值：true 和false。

true 和false 是区分大小写的。True 和False（以及其他的混合大小写形式）都不是Boolean 值，只是标识符。

Boolean转换规则：

| 数据类型      | 转换为true的值      | 转换为false的值 |
| --------- | -------------- | ---------- |
| Boolean   | true           | false      |
| String    | 任何非空字符串        | 空字符串       |
| Number    | 任何非零数字值（包括无穷大） | 0和NaN      |
| Object    | 任何对象           | null       |
| Undefined | *不适合这种规则       | undefined  |

