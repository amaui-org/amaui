import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAlt'

      short_name='KeyboardAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q-.825 0-1.412-.587Q1 19.825 1 19V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v13q0 .825-.587 1.413Q21.825 21 21 21Zm0-2h18V6H3v13Zm6-9h2V8H9Zm-4 0h2V8H5Zm3.5 7h7q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-7q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm4.5-7h2V8h-2Zm-4 4h2v-2H9Zm-4 0h2v-2H5Zm8 0h2v-2h-2Zm4-4h2V8h-2Zm0 4h2v-2h-2ZM3 19V6v13Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAlt.displayName = 'AmauiIconMaterialKeyboardAlt';

export default IconMaterialKeyboardAlt;
