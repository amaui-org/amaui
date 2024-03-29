import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffFilled'

      short_name='MobileOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM5 6.425l2 2V18h9.6l2.4 2.4v.6q0 .825-.587 1.413Q17.825 23 17 23H7q-.825 0-1.412-.587Q5 21.825 5 21ZM19 3v13.15l-2-2V6H8.825L5.15 2.3q.25-.575.738-.938Q6.375 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3Z"/>
    </Icon>
  );
});

IconMaterialMobileOffFilled.displayName = 'AmauiIconMaterialMobileOffFilled';

export default IconMaterialMobileOffFilled;
