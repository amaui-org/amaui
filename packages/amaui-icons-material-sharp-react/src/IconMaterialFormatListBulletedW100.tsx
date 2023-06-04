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
      <path d="M4.5 18.85q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm4.15-.5v-.7h11.7v.7Zm-4.15-5.5q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm4.15-.5v-.7h11.7v.7ZM4.5 6.85q-.35 0-.6-.25T3.65 6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm4.15-.5v-.7h11.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulletedW100.displayName = 'AmauiIconMaterialFormatListBulletedW100';

export default IconMaterialFormatListBulletedW100;
