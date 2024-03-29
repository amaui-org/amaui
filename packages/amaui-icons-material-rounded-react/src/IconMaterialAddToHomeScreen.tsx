import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreen'

      short_name='AddToHomeScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.7 16.3q-.275-.275-.275-.7 0-.425.275-.7L8.6 10H6q-.425 0-.713-.288Q5 9.425 5 9t.287-.713Q5.575 8 6 8h5q.425 0 .713.287Q12 8.575 12 9v5q0 .425-.287.712Q11.425 15 11 15t-.712-.288Q10 14.425 10 14v-2.6l-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275ZM18 20H8v1h10Zm0-16V3H8v1ZM8 23q-.825 0-1.412-.587Q6 21.825 6 21v-4h2v1h10V6H8v1H6V3q0-.825.588-1.413Q7.175 1 8 1h10q.825 0 1.413.587Q20 2.175 20 3v18q0 .825-.587 1.413Q18.825 23 18 23ZM8 3v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreen.displayName = 'AmauiIconMaterialAddToHomeScreen';

export default IconMaterialAddToHomeScreen;
