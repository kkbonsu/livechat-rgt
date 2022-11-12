import{u as a,j as t,a as e,H as o,L as l}from"./app.3cb2275d.js";import{G as m,P as d}from"./PrimaryButton.98c5f281.js";import"./ApplicationLogo.37a5481f.js";function g({status:i}){const{post:r,processing:s}=a();return t(m,{children:[e(o,{title:"Email Verification"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),i==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:n=>{n.preventDefault(),r(route("verification.send"))},children:t("div",{className:"mt-4 flex items-center justify-between",children:[e(d,{processing:s,children:"Resend Verification Email"}),e(l,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Log Out"})]})})]})}export{g as default};
