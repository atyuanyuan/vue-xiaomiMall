<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>

            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1899</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">2899</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nav-header',
  props: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {},
  components: {}
}
</script>
<style lang="scss">
@import '../../src/assets/scss/base';
@import '../../src/assets/scss/config';
@import '../../src/assets/scss/mixin';
    .header {
        .nav-topbar {
            height: 39px;
            line-break: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container {
                @include flex();
                line-height: 39px;
                a {
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;

                }
                .my-cart {
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #ffffff;
                    .icon-cart {
                        margin-right: 4px;
                        @include bgimg(16px,12px,'../../public/imgs/icon-cart-checked.png');
                    }
                }
            }
        }
        .nav-header {
            .container {
                position: relative;
                height: 112px;
                @include flex();
                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a  {
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &::before {
                            content: '';
                            @include bgimg(55px,55px,'//s02.mifile.cn/assets/static/image/mi-logo.png',55px);
                            transition: margin .2s;
                        }
                        &::after {
                            content: '';
                            @include bgimg(55px,55px,'//s02.mifile.cn/assets/static/image/mi-home.png',55px);
                        }
                        &:hover::before {
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu {
                    display: inline-block;
                    width: 623px;
                    padding-left: 209px;
                    .item-menu {
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        margin-right: 20px;
                        span {
                            cursor: pointer;
                        }
                        &:hover {
                            color: $colorA;
                            .children {
                                height: 220px;
                            }
                        }
                        .children {
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            border-top: 1px solid #e5e5e5;
                            box-sizing: 0px 7px 6px 0px rgba(0,0,0,0.11);

                        }
                    }
                }
                .header-search {
                    display: inline-block;
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input {
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a {
                            @include bgimg(18px,18px,'../../public/imgs/icon-serch.png');
                            margin-left: 15px;
                        }
                    }
                }

            }

        }
    }
</style>
