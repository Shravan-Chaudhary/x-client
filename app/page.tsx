import GoogleLoginButton from "@/components/GoogleLoginButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto grid h-screen w-full grid-cols-12">
        <div className="col-span-3 pl-10 pt-2">
          <Sidebar />
        </div>
        <div className="col-span-6 border-x-[0.5px] border-white/50"></div>
        <div className="col-span-3">
          <GoogleLoginButton />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
