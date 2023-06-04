import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowserUpdatedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedW100Filled'

      short_name='BrowserUpdated'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.975 19.7q-.275 0-.475-.2-.2-.2-.2-.475 0-.2.1-.438.1-.237.225-.362L10.15 16.7H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h7.425q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.8q-.35 0-.575.225Q4 5.45 4 5.8v9.4q0 .35.225.575Q4.45 16 4.8 16h14.4q.35 0 .575-.225Q20 15.55 20 15.2v-1.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.85q0 .65-.425 1.075-.425.425-1.075.425h-5.35l1.525 1.525q.125.125.225.362.1.238.1.438 0 .275-.2.475-.2.2-.475.2Zm6.95-5.925q-.15 0-.275-.05-.125-.05-.25-.175l-3.3-3.3q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.975 3v-8.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.1l2.975-3q.1-.125.238-.125.137 0 .262.125t.125.25q0 .125-.125.25l-3.3 3.3q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdatedW100Filled.displayName = 'AmauiIconMaterialBrowserUpdatedW100Filled';

export default IconMaterialBrowserUpdatedW100Filled;
