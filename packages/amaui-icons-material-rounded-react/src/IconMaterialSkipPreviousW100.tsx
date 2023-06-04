import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipPreviousW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousW100'

      short_name='SkipPrevious'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 16.2q-.15 0-.25-.1t-.1-.25v-7.7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.7q0 .15-.1.25t-.25.1Zm8.275-.775-4.2-2.8q-.35-.225-.35-.625t.35-.625l4.2-2.8q.375-.275.775-.05.4.225.4.675v5.6q0 .45-.4.675-.4.225-.775-.05ZM16.2 12Zm0 2.9V9.1L11.85 12Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousW100.displayName = 'AmauiIconMaterialSkipPreviousW100';

export default IconMaterialSkipPreviousW100;
