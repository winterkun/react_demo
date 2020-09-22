import styled from 'styled-components'
import border from '../styled/border'
export const SearchWrap = border({
    Comp: styled.div`
    padding:.1rem .15rem;
    width: 80%;
    margin:10px auto;

    div{
        display:flex;
        height:2rem;
        width:100%;
        background-color:white;
        justify-content:center;
        align-items:center;
        img{
            width:1.3rem;
            height:1.3rem;
        }
    }
  
`
})