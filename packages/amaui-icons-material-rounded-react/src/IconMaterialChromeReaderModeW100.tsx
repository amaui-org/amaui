import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeW100'

      short_name='ChromeReaderMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.85-.7V6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Zm.7 0h6.85q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6h-6.85Zm1.45-8.4h4.775q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.775q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm0 2.5h4.775q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.775q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm0 2.5h4.775q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.775q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeW100.displayName = 'AmauiIconMaterialChromeReaderModeW100';

export default IconMaterialChromeReaderModeW100;
