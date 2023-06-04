import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeW100Filled'

      short_name='ChromeReaderMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.55-.7h6.85q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6h-6.85Zm1.45-8.4h4.775q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.775q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm0 2.5h4.775q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.775q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm0 2.5h4.775q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.775q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeW100Filled.displayName = 'AmauiIconMaterialChromeReaderModeW100Filled';

export default IconMaterialChromeReaderModeW100Filled;
