import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
    return (
      <div
        className={`w-full h-screen bg-[url('/assets/images/bg-login.svg')] relative bg-cover md:px-0 px-4 md:py-0 py-10`}
      >
        <div className="max-w-[675px] w-full flex px-10 md:absolute right-20 bottom-36 bg-white rounded-[30px] h-fit py-10">
          <div className="flex flex-col w-full text-black gap-y-9">
            <h1 className="text-[36px] font-semibold">Welcome to VistaNusa!</h1>
            <div className="grid w-full items-center gap-[10px]">
              <Label htmlFor="email" className="text-[13px] font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="rounded-[20px] border-[#353535]"
              />
            </div>
            <div className="grid w-full items-center gap-[10px]">
              <Label htmlFor="email" className="text-[13px] font-medium">
                Password
              </Label>
              <Input
                type="email"
                id="email"
                className="rounded-[20px] border-[#353535]"
              />
            </div>
            <Button variant={"login"} className="h-[59px] mt-[60px] py-8">
              Login Now
            </Button>
          </div>
        </div>
      </div>
    );
}