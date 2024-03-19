import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";

interface ProfileFieldProps {
    form: any
    fieldName: string;
    labelText: string;
    fieldValue: string | undefined;
    setFieldValue: (value: string) => void;
    maxLength: number;
}

const ProfileField = ({ form, fieldName, labelText, fieldValue, setFieldValue, maxLength }: ProfileFieldProps) => {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-black text-lg">{labelText}</FormLabel>
                    <Input
                        {...field}
                        id={fieldName}
                        value={fieldValue}
                        onChange={(e) => setFieldValue(e.target.value)}
                        className="text-black"
                        type="text"
                        required
                        placeholder="Type your message here."
                        maxLength={maxLength}
                    />
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default ProfileField;
