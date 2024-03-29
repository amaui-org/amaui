import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactMail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMail'

      short_name='ContactMail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21q-.825 0-1.412-.587Q0 19.825 0 19V5q0-.825.588-1.413Q1.175 3 2 3h20q.825 0 1.413.587Q24 4.175 24 5v14q0 .825-.587 1.413Q22.825 21 22 21Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938Q6.85 15 9 15t4 1.062q1.85 1.063 2.9 2.938ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm6-3h5q.425 0 .712-.288Q21 10.425 21 10V7q0-.425-.288-.713Q20.425 6 20 6h-5q-.425 0-.712.287Q14 6.575 14 7v3q0 .425.288.712.287.288.712.288ZM4.55 19h8.9q-.85-.95-2.012-1.475Q10.275 17 9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.712-.288Q8 11.425 8 11t.288-.713Q8.575 10 9 10t.713.287Q10 10.575 10 11t-.287.712Q9.425 12 9 12Zm3 0Zm5.5-2.25L15 8V7l2.5 1.75L20 7v1Z"/>
    </Icon>
  );
});

IconMaterialContactMail.displayName = 'AmauiIconMaterialContactMail';

export default IconMaterialContactMail;
