import styled from 'styled-components'
export const HeaderWrap = styled.div`
    height:2.44rem;
    background:#ee742f;
    font-size:2.18rem;
    color:#fff;
    text-align:center;
    line-height:2.44rem
`

export const SwiperWrap = styled.div`
    img{
       width: 100%;
       height:300px
    };
    height:300px;
    padding:0;
    font-size:0;
`

export const HotcateWrap = styled.div`
    .header{
        line-height: 2.5rem;
        background: #fff;
        padding-left: 2rem;
        border-bottom:1px solid gray;
    }
    .item{
      display:flex;
      flex-direction:column;
      text-align:center;
      align-items:center;
      img{
          width:70%
      }
      span{
          margin-top:.05px
      }
    }
`