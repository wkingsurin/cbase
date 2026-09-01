import ToolbarButton from "@/components/toolbar/toolbar-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UserRoundPlus } from "lucide-react";
import { CLIENT_TAGS } from "../constants/tag";

export default function AddClientDialog() {
  const tags = Object.values(CLIENT_TAGS).map((tag) => ({
    label: tag.label,
    value: tag.label,
  }));

  return (
    <Dialog>
      <DialogTrigger
        render={<ToolbarButton icon={UserRoundPlus} />}
        onClick={(e) => e.stopPropagation()}
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add client</DialogTitle>
        </DialogHeader>

        <form
          className="flex items-end flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(`Submit`);
          }}
        >
          <FieldGroup className="grid grid-cols-2 gap-3">
            <Field className="col-span-2/3">
              <Label htmlFor="fullName">full name</Label>
              <Input
                id="fullName"
                name="fullName"
                defaultValue="Pedro Duarte"
                className="bg-background rounded-md px-3 border-[0.5px] border-gray/25"
              />
            </Field>
            <Field className="col-span-1/3">
              <Label htmlFor="tag">tag</Label>
              <Select items={tags} defaultValue="Select tag">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectGroup>
                    {tags.map((tag) => (
                      <SelectItem key={tag.value} value={tag.value}>
                        {tag.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* <Input
                id="tag"
                name="tag"
                defaultValue="@peduarte"
                className="bg-background rounded-md px-3 border-[0.5px] border-gray/25"
              /> */}
            </Field>
            <Field>
              <Label htmlFor="tg">tg</Label>
              <Input
                id="tg"
                name="tg"
                defaultValue="@peduarte"
                className="bg-background rounded-md px-3 border-[0.5px] border-gray/25"
              />
            </Field>
            <Field>
              <Label htmlFor="vk">vk</Label>
              <Input
                id="vk"
                name="vk"
                defaultValue="@peduarte"
                className="bg-background rounded-md px-3 border-[0.5px] border-gray/25"
              />
            </Field>
            <Field>
              <Label htmlFor="site">site</Label>
              <Input
                id="site"
                name="site"
                defaultValue="@peduarte"
                className="bg-background rounded-md px-3 border-[0.5px] border-gray/25"
              />
            </Field>
            <Field>
              <Label htmlFor="Phone">phone</Label>
              <Input
                id="Phone"
                name="Phone"
                defaultValue="@peduarte"
                className="bg-background rounded-md px-3 border-[0.5px] border-gray/25"
              />
            </Field>
            <Field className="col-span-full">
              <Label htmlFor="username-1">username</Label>
              <Textarea
                id="username-1"
                name="username"
                defaultValue="@peduarte"
                className="bg-background rounded-md px-3 border-[0.5px] border-gray/25"
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Field, FieldGroup } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export function DialogDemo() {
//   return (
//     <Dialog>
//       <form>
//         <DialogTrigger
//           render={<Button variant="outline">Open Dialog</Button>}
//         />
//         <DialogContent className="sm:max-w-sm">
//           <DialogHeader>
//             <DialogTitle>Edit profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here. Click save when you&apos;re
//               done.
//             </DialogDescription>
//           </DialogHeader>
//           <FieldGroup>
//             <Field>
//               <Label htmlFor="name-1">Name</Label>
//               <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
//             </Field>
//             <Field>
//               <Label htmlFor="username-1">Username</Label>
//               <Input id="username-1" name="username" defaultValue="@peduarte" />
//             </Field>
//           </FieldGroup>
//           <DialogFooter>
//             <DialogClose render={<Button variant="outline">Cancel</Button>} />
//             <Button type="submit">Save changes</Button>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>
//   );
// }
