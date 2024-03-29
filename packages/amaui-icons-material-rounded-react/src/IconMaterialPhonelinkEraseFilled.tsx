import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseFilled'

      short_name='PhonelinkErase'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.7 15.3q-.275-.275-.275-.7 0-.425.275-.7l1.9-1.9-1.9-1.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.9 1.9 1.9-1.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L18.4 12l1.9 1.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L17 13.4l-1.9 1.9q-.275.275-.7.275-.425 0-.7-.275ZM6 23q-.825 0-1.412-.587Q4 21.825 4 21V3q0-.825.588-1.413Q5.175 1 6 1h10q.825 0 1.413.587Q18 2.175 18 3v4h-2V6H6v12h10v-1h2v4q0 .825-.587 1.413Q16.825 23 16 23Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseFilled.displayName = 'AmauiIconMaterialPhonelinkEraseFilled';

export default IconMaterialPhonelinkEraseFilled;
