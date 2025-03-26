import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div
      className={`w-full h-screen bg-[url('/assets/images/bg-login.svg')] relative bg-cover md:px-0 px-4 md:py-0 py-10`}
    >
      <div className="max-w-[675px] w-full flex px-10 md:absolute right-20 top-20 bg-white rounded-[30px] h-fit py-10">
        <div className="flex flex-col w-full text-black gap-y-9">
          <h1 className="text-[36px] font-semibold">Welcome to VistaNusa!</h1>
          <div className="flex w-full gap-x-12">
            <div className="grid w-1/2 items-center gap-[10px]">
              <Label className="text-[13px] font-medium">
                First Name
              </Label>
              <Input
                type="text"
                className="rounded-[20px] border-[#353535]"
              />
            </div>
            <div className="grid w-1/2 items-center gap-[10px]">
              <Label className="text-[13px] font-medium">
                Last Name
              </Label>
              <Input
                type="text"
                className="rounded-[20px] border-[#353535]"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-[10px]">
            <Label htmlFor="email" className="text-[13px] font-medium">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="rounded-[20px] border-[#353535] h-[45px]"
            />
          </div>
          <div className="grid w-full items-center gap-[10px]">
            <Label htmlFor="password" className="text-[13px] font-medium">
              Password
            </Label>
            <Input
              type="password"
              className="rounded-[20px] border-[#353535] h-[45px]"
            />
          </div>
          <Button variant={"login"} className="h-[59px] py-8">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
