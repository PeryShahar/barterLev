
import React, { forwardRef } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface BirthYearSelectProps {
    field: any;
    userData: any;
    setUserData: any;
}

const SelectBirthYear: React.ForwardRefRenderFunction<HTMLDivElement, BirthYearSelectProps> = ({ field, userData, setUserData }, ref) => {
    return (
        <Select required {...field} value={userData.birthYear} onValueChange={(value: string) => setUserData({ ...userData, birthYear: value })} ref={ref}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a year..." aria-label={userData.birthYear?.toString()}>
                    {userData.birthYear}
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {Array.from({ length: 83 }, (_, i) => {
                        const year = new Date().getFullYear() - 100 + i;
                        return <SelectItem key={year} value={year.toString()}>{year}</SelectItem>;
                    }).reverse()}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
};

export default forwardRef(SelectBirthYear);

