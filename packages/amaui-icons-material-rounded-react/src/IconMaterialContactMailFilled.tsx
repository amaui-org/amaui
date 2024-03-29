import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactMailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailFilled'

      short_name='ContactMail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21q-.825 0-1.412-.587Q0 19.825 0 19V5q0-.825.588-1.413Q1.175 3 2 3h20q.825 0 1.413.587Q24 4.175 24 5v14q0 .825-.587 1.413Q22.825 21 22 21Zm7-7q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm6-3h5q.425 0 .712-.288Q21 10.425 21 10V7q0-.425-.288-.713Q20.425 6 20 6h-5q-.425 0-.712.287Q14 6.575 14 7v3q0 .425.288.712.287.288.712.288ZM2.1 19h13.8q-1.05-1.875-2.9-2.938Q11.15 15 9 15t-4 1.062Q3.15 17.125 2.1 19Zm15.4-9.25L15 8V7l2.5 1.75L20 7v1Z"/>
    </Icon>
  );
});

IconMaterialContactMailFilled.displayName = 'AmauiIconMaterialContactMailFilled';

export default IconMaterialContactMailFilled;
