import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateGood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateGood'

      short_name='SecurityUpdateGood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.05 14.575q-.2 0-.375-.063-.175-.062-.325-.212l-1.4-1.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l.7.7 2.85-2.85q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-3.55 3.55q-.15.15-.325.212-.175.063-.375.063ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Zm0 2v1h10v-1ZM7 4h10V3H7Zm0-1v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateGood.displayName = 'AmauiIconMaterialSecurityUpdateGood';

export default IconMaterialSecurityUpdateGood;
