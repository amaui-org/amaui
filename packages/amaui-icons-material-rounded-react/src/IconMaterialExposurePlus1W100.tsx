import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposurePlus1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1W100'

      short_name='ExposurePlus1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.2q-.15 0-.25-.1t-.1-.25V13.2H4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V9.85q0-.15.1-.25T7 9.5q.15 0 .25.1t.1.25v2.65H10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H7.35v2.65q0 .15-.1.25t-.25.1Zm9.85 1.45q-.15 0-.25-.1t-.1-.25v-10l-2.325 1.6q-.125.075-.25.062-.125-.012-.225-.137-.075-.125-.063-.263.013-.137.138-.212l2.575-1.8q.125-.1.313-.088.187.013.312.088.1.05.162.175.063.125.063.25V17.3q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1W100.displayName = 'AmauiIconMaterialExposurePlus1W100';

export default IconMaterialExposurePlus1W100;
