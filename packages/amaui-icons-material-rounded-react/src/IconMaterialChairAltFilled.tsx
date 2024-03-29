import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltFilled'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18v2q0 .425-.287.712Q6.425 21 6 21t-.713-.288Q5 20.425 5 20v-6q0-.825.588-1.413Q6.175 12 7 12h1v-2H7q-.825 0-1.412-.588Q5 8.825 5 8V5q0-.825.588-1.413Q6.175 3 7 3h10q.825 0 1.413.587Q19 4.175 19 5v3q0 .825-.587 1.412Q17.825 10 17 10h-1v2h1q.825 0 1.413.587Q19 13.175 19 14v6q0 .425-.288.712Q18.425 21 18 21t-.712-.288Q17 20.425 17 20v-2Zm3-6h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialChairAltFilled.displayName = 'AmauiIconMaterialChairAltFilled';

export default IconMaterialChairAltFilled;
