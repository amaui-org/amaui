import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalDistributeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeW100'

      short_name='VerticalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T3 3.3h18q.15 0 .25.1t.1.25q0 .15-.1.25T21 4Zm5.5 8.85q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25h7q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25ZM3 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T3 20h18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeW100.displayName = 'AmauiIconMaterialVerticalDistributeW100';

export default IconMaterialVerticalDistributeW100;
