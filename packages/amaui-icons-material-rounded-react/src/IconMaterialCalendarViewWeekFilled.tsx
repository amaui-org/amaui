import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewWeekFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewWeekFilled'

      short_name='CalendarViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 19q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q13.325 5 13.75 5h1.375q.425 0 .713.287.287.288.287.713v12q0 .425-.287.712-.288.288-.713.288Zm-4.875 0q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q8.45 5 8.875 5h1.375q.425 0 .713.287.287.288.287.713v12q0 .425-.287.712-.288.288-.713.288ZM4 19q-.425 0-.712-.288Q3 18.425 3 18V6q0-.425.288-.713Q3.575 5 4 5h1.375q.425 0 .713.287.287.288.287.713v12q0 .425-.287.712Q5.8 19 5.375 19Zm14.625 0q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q18.2 5 18.625 5H20q.425 0 .712.287Q21 5.575 21 6v12q0 .425-.288.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewWeekFilled.displayName = 'AmauiIconMaterialCalendarViewWeekFilled';

export default IconMaterialCalendarViewWeekFilled;
