import React, { forwardRef } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectCityProps {
    field: any;
    userCity: string;
    setUserCity: (value: string) => void;
    cities: string[];
}

const SelectCity: React.ForwardRefRenderFunction<HTMLDivElement, SelectCityProps> = ({ field, userCity, setUserCity, cities }, ref) => {
    return (
        <Select {...field} value={userCity} onValueChange={setUserCity} ref={ref}>
            <SelectTrigger className="w-[11.25rem]">
                <SelectValue placeholder="Choose a city..." aria-label={userCity}>
                    {userCity}
                </SelectValue>
            </SelectTrigger>
            <SelectContent className="text-black">
                <SelectGroup className="text-black">
                    <SelectLabel>Cities</SelectLabel>
                    {cities?.map((city) => (
                        <SelectItem key={city} value={city}>
                            {city}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default forwardRef(SelectCity);
