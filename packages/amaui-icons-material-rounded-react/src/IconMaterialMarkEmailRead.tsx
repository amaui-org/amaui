import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailRead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailRead'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.95 21.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.85-2.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.15 2.15 4.95-4.95q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-5.65 5.65q-.15.15-.325.212-.175.063-.375.063ZM4 6l8 5 8-5Zm0 14q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4.35l-1 1-1 1V8l-7.475 4.675q-.125.075-.263.112-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h5.15l2 2Zm8-6Zm0-3Zm0 1.875Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailRead.displayName = 'AmauiIconMaterialMarkEmailRead';

export default IconMaterialMarkEmailRead;
