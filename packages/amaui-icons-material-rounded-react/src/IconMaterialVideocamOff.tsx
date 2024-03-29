import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOff'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.15 16.65 18 13.5v1.675l-2-2V6H8.825l-2-2H16q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.25-.25.55-.125.3.125.3.475v8.6q0 .35-.3.475t-.55-.125Zm-1.3 6L1.325 4.125Q1.05 3.85 1.05 3.45t.3-.7q.275-.275.7-.275.425 0 .7.275l18.525 18.525q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275Zm-7.4-13.025ZM4 4l2 2H4v12h12v-2l2 2q0 .825-.587 1.413Q16.825 20 16 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4Zm5.55 8.4Z"/>
    </Icon>
  );
});

IconMaterialVideocamOff.displayName = 'AmauiIconMaterialVideocamOff';

export default IconMaterialVideocamOff;
