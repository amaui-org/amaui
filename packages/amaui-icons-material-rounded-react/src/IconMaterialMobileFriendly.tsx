import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileFriendly = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendly'

      short_name='MobileFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.95 15.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.85-2.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.15 2.15 4.95-4.95q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-5.65 5.65q-.15.15-.325.212-.175.063-.375.063ZM16 20H6v1h10Zm0-16V3H6v1ZM6 23q-.825 0-1.412-.587Q4 21.825 4 21V3q0-.825.588-1.413Q5.175 1 6 1h10q.825 0 1.413.587Q18 2.175 18 3v4h-2V6H6v12h10v-1h2v4q0 .825-.587 1.413Q16.825 23 16 23ZM6 3v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendly.displayName = 'AmauiIconMaterialMobileFriendly';

export default IconMaterialMobileFriendly;
