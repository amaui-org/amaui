import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplyAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllW100'

      short_name='ReplyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.625 15.85 3.3 11.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l4.35-4.35q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25L3.775 11l4.375 4.375q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Zm13.25 2.5q-.15 0-.25-.1t-.1-.25v-3q0-1.5-1.075-2.575-1.075-1.075-2.575-1.075h-7.75l4.025 4.025q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125L8.3 11.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l4.35-4.35q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-4 4h7.75q1.8 0 3.075 1.275Q21.225 13.2 21.225 15v3q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialReplyAllW100.displayName = 'AmauiIconMaterialReplyAllW100';

export default IconMaterialReplyAllW100;
