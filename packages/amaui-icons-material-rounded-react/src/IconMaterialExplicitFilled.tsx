import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplicitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitFilled'

      short_name='Explicit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17h4q.425 0 .713-.288Q15 16.425 15 16t-.287-.713Q14.425 15 14 15h-3v-2h3q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11h-3V9h3q.425 0 .713-.288Q15 8.425 15 8t-.287-.713Q14.425 7 14 7h-4q-.425 0-.712.287Q9 7.575 9 8v8q0 .425.288.712Q9.575 17 10 17Zm-5 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialExplicitFilled.displayName = 'AmauiIconMaterialExplicitFilled';

export default IconMaterialExplicitFilled;
