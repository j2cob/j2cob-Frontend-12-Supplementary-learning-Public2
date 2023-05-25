import { accessTokenState } from "@/pages/atom";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";

export default function Header({ user }) {
  const accessTokenState = useRecoilValue(accessTokenState);
  console.log(accessTokenState);
  return (
    <Container>
      <Top>
        <Link href="/">
          <Image
            src="/images/image-logo.png"
            alt="logo"
            width={182}
            height={49}
          />
        </Link>

        <div>
          <Link href="/login">로그인</Link>
          <Link href="/join">{user ? "로그아웃" : "회원가입"}</Link>
          <Link href="/cart">
            장바구니<Badge>0</Badge>
          </Link>
        </div>
      </Top>
      <Nav>
        <Inner>
          <Link href="/brand">BRAND</Link>
          <Link href="/category">CATEGORY</Link>
          <Link href="/life">LIFE</Link>
          <Link href="/beauty">BEAUTY</Link>
          <Line />
          <Link href="/style">#STYLE</Link>
          <Link href="/event">EVENT</Link>
        </Inner>
      </Nav>
    </Container>
  );
}

const Container = styled.div({
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 999,
  background: "#fff",
});
const Top = styled.div({
  padding: "26px 76px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: 1920,
  margin: "0 auto",
  a: {
    margin: "0 28px",
    fontSize: 14,
  },
});
const Badge = styled.span({
  width: 20,
  height: 20,
  background: "#F65656",
  color: "#fff",
  fontSize: 12,
  display: "inline-block",
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "18px",
  verticalAlign: "middle",
  marginLeft: 5,
});
const Nav = styled.div({
  background: "#000",
  color: "#fff",
});
const Inner = styled.div({
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "40px 0",
  a: {
    display: "inline-block",
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: "-0.5px",
    marginRight: 122,
    "&:last-child": {
      margin: 0,
    },
  },
});
const Line = styled.em({
  display: "inline-block",
  width: 2,
  height: 19,
  backgroundColor: "#fff",
  marginRight: "136px",
});
