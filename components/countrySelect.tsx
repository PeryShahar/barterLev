import React, { forwardRef } from 'react'; // Import React
import { countries } from 'countries-list';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectCountryProps {
    field?: any
    userCountry: any
    setUserCountry: any
}

const SelectCountry: React.ForwardRefRenderFunction<HTMLDivElement, SelectCountryProps> = ({ field, userCountry, setUserCountry }, ref) => {
    return (
        <>
            <Select {...field} value={userCountry} onValueChange={setUserCountry} ref={ref}>
                <SelectTrigger className="w-[11.25rem]">
                    <SelectValue placeholder='choose a country...' aria-label={userCountry}>
                        {userCountry}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent className="text-black">
                    <SelectGroup className="text-black">
                        <SelectLabel>Countries</SelectLabel>
                        {Object.values(countries).map((country: any) => (
                            <SelectItem key={country.name} value={country.name}>
                                {country.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}

export default forwardRef(SelectCountry);
