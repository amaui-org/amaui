import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelfCare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfCare'

      short_name='SelfCare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 23q-.425 0-.712-.288Q15 22.425 15 22t.288-.712Q15.575 21 16 21h3v-1h-3q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18h3v-1h-3q-.425 0-.712-.288Q15 16.425 15 16t.288-.713Q15.575 15 16 15h3v-1h-3q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12h3v-1h-3q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9h3V8h-3q-.425 0-.712-.287Q15 7.425 15 7t.288-.713Q15.575 6 16 6h4q.825 0 1.413.588Q22 7.175 22 8v13q0 .825-.587 1.413Q20.825 23 20 23Zm-8-8q1.65 0 2.825-1.625Q12 11.75 12 9.5t-1.175-3.875Q9.65 4 8 4 6.35 4 5.175 5.625 4 7.25 4 9.5t1.175 3.875Q6.35 15 8 15Zm0 8q-1.2 0-1.975-.887-.775-.888-.6-2.088l.4-3.525q-1.7-.825-2.763-2.713Q2 11.9 2 9.5q0-3.125 1.75-5.312Q5.5 2 8 2t4.25 2.188Q14 6.375 14 9.5q0 2.4-1.062 4.287-1.063 1.888-2.763 2.713l.4 3.525q.175 1.2-.6 2.088Q9.2 23 8 23Z"/>
    </Icon>
  );
});

IconMaterialSelfCare.displayName = 'AmauiIconMaterialSelfCare';

export default IconMaterialSelfCare;
