import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatteryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryFilled'

      short_name='HeadphonesBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16v-4q0-2.5 1.75-4.25T8 6q2.5 0 4.25 1.75T14 12v4q0 .825-.587 1.413Q12.825 18 12 18q-.825 0-1.412-.587Q10 16.825 10 16v-1q0-.825.588-1.413Q11.175 13 12 13h.5v-1q0-1.875-1.312-3.188Q9.875 7.5 8 7.5q-1.875 0-3.188 1.312Q3.5 10.125 3.5 12v1H4q.825 0 1.412.587Q6 14.175 6 15v1q0 .825-.588 1.413Q4.825 18 4 18Zm13 0q-.425 0-.712-.288Q16 17.425 16 17V8q0-.425.288-.713Q16.575 7 17 7h1v-.5q0-.2.15-.35.15-.15.35-.15h1q.2 0 .35.15.15.15.15.35V7h1q.425 0 .712.287Q22 7.575 22 8v9q0 .425-.288.712Q21.425 18 21 18Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryFilled.displayName = 'AmauiIconMaterialHeadphonesBatteryFilled';

export default IconMaterialHeadphonesBatteryFilled;
