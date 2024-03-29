import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppShortcutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutFilled'

      short_name='AppShortcut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.675 10.4-.325-.75-.75-.325q-.2-.1-.2-.325t.2-.325l.75-.325.325-.75q.1-.2.325-.2t.325.2l.325.75.75.325q.2.1.2.325t-.2.325l-.75.325-.325.75q-.1.2-.325.2t-.325-.2ZM15.55 15l-.8-1.75-1.75-.8q-.3-.125-.3-.45t.3-.45l1.75-.8.8-1.75q.125-.3.45-.3t.45.3l.8 1.75 1.75.8q.3.125.3.45t-.3.45l-1.75.8-.8 1.75q-.125.3-.45.3t-.45-.3Zm5.125 1.4-.325-.75-.75-.325q-.2-.1-.2-.325t.2-.325l.75-.325.325-.75q.1-.2.325-.2t.325.2l.325.75.75.325q.2.1.2.325t-.2.325l-.75.325-.325.75q-.1.2-.325.2t-.325-.2ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413Q17.825 23 17 23Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutFilled.displayName = 'AmauiIconMaterialAppShortcutFilled';

export default IconMaterialAppShortcutFilled;
