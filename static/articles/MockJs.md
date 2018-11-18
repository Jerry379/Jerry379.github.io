# MockJs

### 安装
npm install mockjs

npm install -g bower
bower install --save mockjs

### 语法规范
#### 数据模板定义规范（Data Template Definition，DTD）
```
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```
#### 注意：
- 属性名 和 生成规则 之间用竖线 | 分隔。
- 生成规则 是可选的。
- 生成规则 有 7 种格式：
    1. 'name|min-max': value
    2. 'name|count': value
    3. 'name|min-max.dmin-dmax': value
    4. 'name|min-max.dcount': value
    5. 'name|count.dmin-dmax': value
    6. 'name|count.dcount': value
    7. 'name|+step': value
- 生成规则 的 含义 需要依赖 属性值的类型 才能确定。
- 属性值 中可以含有 @占位符。
- 属性值 还指定了最终值的初始值和类型。

#### 数据占位符定义规范（Data Placeholder Definition，DPD）
占位符 的格式为：
```
@占位符
@占位符(参数 [, 参数])
```
注意：
1. 用 @ 来标识其后的字符串是 占位符。
2. 占位符 引用的是 Mock.Random 中的方法。
3. 通过 Mock.Random.extend() 来扩展自定义占位符。
4. 占位符 也可以引用 数据模板 中的属性。
5. 占位符 会优先引用 数据模板 中的属性。
6. 占位符 支持 相对路径 和 绝对路径。

```
//Basic
Random.boolean( min?, max?, current? )
Random.natural( min?, max? )
Random.integer( min?, max? )
Random.float( min?, max?, dmin?, dmax? )
Random.character( pool? )
Random.string( pool?, min?, max? )
Random.range( start?, stop, step? )

//Date
Random.date( format? )
Random.time( format? )
Random.datetime( format? )
Random.now( unit?, format? )

//Image
Random.image( size?, background?, foreground?, format?, text? )
Random.dataImage( size?, text? )

//Color
Random.color()
Random.hex()
Random.rgb()
Random.rgba()
Random.hsl()

//Text
Random.paragraph( min?, max? )
Random.cparagraph( min?, max? )
Random.sentence( min?, max? )
Random.csentence( min?, max? )
Random.word( min?, max? )
Random.cword( pool?, min?, max? )
Random.title( min?, max? )
Random.ctitle( min?, max? )

//Name
Random.first()
Random.last()
Random.name( middle? )
Random.cfirst()
Random.clast()
Random.cname()

//Web
Random.url( protocol?, host? )
Random.protocol()
Random.domain()
Random.tld()
Random.email( domain? )
Random.ip()

//Address
Random.region()
Random.province()
Random.city( prefix? )
Random.county( prefix? )
Random.zip()

//Helper
Random.capitalize( word )
Random.upper( str )
Random.lower( str )
Random.pick( arr )
Random.shuffle( arr )

//Miscellaneous
Random.guid()
Random.id()
Random.increment( step? )
```

```
Mock.valid()
```

```
Mock.toJSONSchema()
```
```
Mock.setup(settings )
```
