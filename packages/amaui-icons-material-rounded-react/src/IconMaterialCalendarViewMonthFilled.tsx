import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarViewMonthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthFilled'

      short_name='CalendarViewMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11.5q-.425 0-.712-.288Q3 10.925 3 10.5V6q0-.425.288-.713Q3.575 5 4 5h3.325q.425 0 .713.287.287.288.287.713v4.5q0 .425-.287.712-.288.288-.713.288Zm6.325 0q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q9.9 5 10.325 5h3.35q.425 0 .713.287.287.288.287.713v4.5q0 .425-.287.712-.288.288-.713.288Zm6.35 0q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q16.25 5 16.675 5H20q.425 0 .712.287Q21 5.575 21 6v4.5q0 .425-.288.712-.287.288-.712.288ZM4 19q-.425 0-.712-.288Q3 18.425 3 18v-4.5q0-.425.288-.713.287-.287.712-.287h3.325q.425 0 .713.287.287.288.287.713V18q0 .425-.287.712Q7.75 19 7.325 19Zm6.325 0q-.425 0-.712-.288-.288-.287-.288-.712v-4.5q0-.425.288-.713.287-.287.712-.287h3.35q.425 0 .713.287.287.288.287.713V18q0 .425-.287.712-.288.288-.713.288Zm6.35 0q-.425 0-.712-.288-.288-.287-.288-.712v-4.5q0-.425.288-.713.287-.287.712-.287H20q.425 0 .712.287.288.288.288.713V18q0 .425-.288.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthFilled.displayName = 'AmauiIconMaterialCalendarViewMonthFilled';

export default IconMaterialCalendarViewMonthFilled;
