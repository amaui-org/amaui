import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallReceivedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedW100'

      short_name='CallReceived'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 19.1q-.325 0-.537-.212-.213-.213-.213-.538v-7.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.15L18.625 5.875q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-12 12h7.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedW100.displayName = 'AmauiIconMaterialCallReceivedW100';

export default IconMaterialCallReceivedW100;
