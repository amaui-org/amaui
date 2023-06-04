import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListBulletedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulletedW100'

      short_name='FormatListBulleted'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 12.85q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm0-6q-.35 0-.6-.25T3.65 6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm0 12q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm4.5-.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-6q-.15 0-.25-.1T8.65 6q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulletedW100.displayName = 'AmauiIconMaterialFormatListBulletedW100';

export default IconMaterialFormatListBulletedW100;
