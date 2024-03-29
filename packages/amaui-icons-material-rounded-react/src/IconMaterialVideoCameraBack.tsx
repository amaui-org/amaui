import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBack'

      short_name='VideoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.25-.25.55-.125.3.125.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Zm0-2h12V6H4v12Zm2.025-2h7.95q.325 0 .463-.275.137-.275-.063-.525l-2.425-3.175q-.15-.2-.4-.2t-.4.2L9.25 14.5 8.1 13q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525.138.275.463.275ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBack.displayName = 'AmauiIconMaterialVideoCameraBack';

export default IconMaterialVideoCameraBack;
