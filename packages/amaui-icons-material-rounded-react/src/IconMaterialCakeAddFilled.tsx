import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAddFilled'

      short_name='CakeAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21v-4q0-.825.588-1.412Q3.175 15 4 15h14q.825 0 1.413.588Q20 16.175 20 17v4q0 .425-.288.712Q19.425 22 19 22Zm1-9v-3q0-.825.588-1.413Q5.175 8 6 8h4V6.55q-.45-.3-.725-.725Q9 5.4 9 4.8q0-.375.15-.738.15-.362.45-.662l1.05-1.05q.05-.05.35-.15.05 0 .35.15L12.4 3.4q.3.3.45.662.15.363.15.738 0 .6-.275 1.025-.275.425-.725.725V8h4q.825 0 1.413.587Q18 9.175 18 10v3Zm16-5q-.425 0-.712-.287Q19 7.425 19 7V6h-1q-.425 0-.712-.287Q17 5.425 17 5t.288-.713Q17.575 4 18 4h1V3q0-.425.288-.713Q19.575 2 20 2t.712.287Q21 2.575 21 3v1h1q.425 0 .712.287Q23 4.575 23 5t-.288.713Q22.425 6 22 6h-1v1q0 .425-.288.713Q20.425 8 20 8Z"/>
    </Icon>
  );
});

IconMaterialCakeAddFilled.displayName = 'AmauiIconMaterialCakeAddFilled';

export default IconMaterialCakeAddFilled;
