import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBusinessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessW100Filled'

      short_name='AddBusiness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.7 18.7v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V18.7h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H18v-2.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V18h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-14.35.65q-.325 0-.538-.212-.212-.213-.212-.538v-5.25h-.525q-.35 0-.588-.288-.237-.287-.137-.637l1-4.2q.05-.25.263-.413.212-.162.487-.162h12.1q.275 0 .488.162.212.163.262.413l1 4.2q.1.35-.138.637-.237.288-.587.288H16.7v3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3h-4.7v5.25q0 .325-.212.538-.213.212-.538.212Zm-.05-.7h6.3v-5.3H4.3Zm-.45-13.3q-.15 0-.25-.1T3.5 5q0-.15.1-.25t.25-.1h12.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddBusinessW100Filled.displayName = 'AmauiIconMaterialAddBusinessW100Filled';

export default IconMaterialAddBusinessW100Filled;
