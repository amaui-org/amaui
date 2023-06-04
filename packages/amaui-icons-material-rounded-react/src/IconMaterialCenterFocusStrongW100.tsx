import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCenterFocusStrongW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrongW100'

      short_name='CenterFocusStrong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.7q-1.55 0-2.625-1.075T8.3 12q0-1.55 1.075-2.625T12 8.3q1.55 0 2.625 1.075T15.7 12q0 1.55-1.075 2.625T12 15.7Zm0-3.7Zm0 3q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15ZM4.65 9q-.15 0-.25-.1t-.1-.25V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.8q-.35 0-.575.225Q5 5.45 5 5.8v2.85q0 .15-.1.25t-.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2v-2.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.85q0 .35.225.575Q5.45 19 5.8 19h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm9.55 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q.35 0 .575-.225Q19 18.55 19 18.2v-2.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.85q0 .65-.425 1.075-.425.425-1.075.425Zm4-10.7q-.15 0-.25-.1t-.1-.25V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-2.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q.65 0 1.075.425.425.425.425 1.075v2.85q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusStrongW100.displayName = 'AmauiIconMaterialCenterFocusStrongW100';

export default IconMaterialCenterFocusStrongW100;
