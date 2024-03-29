import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravel'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17v2h16v-2ZM7 6V4q0-.825.588-1.413Q8.175 2 9 2h6q.825 0 1.413.587Q17 3.175 17 4v2h3q.825 0 1.413.588Q22 7.175 22 8v11q0 .825-.587 1.413Q20.825 21 20 21H4q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6Zm-3 8h16V8h-3v1.025q0 .425-.288.7Q16.425 10 16 10t-.712-.288Q15 9.425 15 9V8H9v1.025q0 .425-.287.7Q8.425 10 8 10t-.713-.288Q7 9.425 7 9V8H4Zm5-8h6V4H9ZM4 19V8v11Z"/>
    </Icon>
  );
});

IconMaterialCardTravel.displayName = 'AmauiIconMaterialCardTravel';

export default IconMaterialCardTravel;
