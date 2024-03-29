import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartToyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyFilled'

      short_name='SmartToy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15q-1.25 0-2.125-.875T1 12q0-1.25.875-2.125T4 9V7q0-.825.588-1.412Q5.175 5 6 5h3q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5h3q.825 0 1.413.588Q20 6.175 20 7v2q1.25 0 2.125.875T23 12q0 1.25-.875 2.125T20 15v4q0 .825-.587 1.413Q18.825 21 18 21H6q-.825 0-1.412-.587Q4 19.825 4 19Zm5-2q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q9.625 10 9 10t-1.062.438Q7.5 10.875 7.5 11.5t.438 1.062Q8.375 13 9 13Zm6 0q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q15.625 10 15 10t-1.062.438q-.438.437-.438 1.062t.438 1.062Q14.375 13 15 13Zm-6 4h6q.425 0 .713-.288Q16 16.425 16 16t-.287-.713Q15.425 15 15 15H9q-.425 0-.712.287Q8 15.575 8 16t.288.712Q8.575 17 9 17Z"/>
    </Icon>
  );
});

IconMaterialSmartToyFilled.displayName = 'AmauiIconMaterialSmartToyFilled';

export default IconMaterialSmartToyFilled;
