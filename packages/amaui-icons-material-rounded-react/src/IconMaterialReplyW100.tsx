import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyW100'

      short_name='Reply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.875 18.35q-.15 0-.25-.1t-.1-.25v-3q0-1.525-1.062-2.588-1.063-1.062-2.588-1.062H5.125l4.025 4.025q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125L4.3 11.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l4.35-4.35q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-4 4h10.75q1.8 0 3.075 1.275Q20.225 13.2 20.225 15v3q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialReplyW100.displayName = 'AmauiIconMaterialReplyW100';

export default IconMaterialReplyW100;
