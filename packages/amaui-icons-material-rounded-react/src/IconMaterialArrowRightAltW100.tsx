import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltW100'

      short_name='ArrowRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.875 16.85q-.125-.125-.125-.25t.125-.25l4-4H5.125q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.75L13.85 7.625q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-4.35 4.35q-.075.1-.213.1-.137 0-.262-.125Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltW100.displayName = 'AmauiIconMaterialArrowRightAltW100';

export default IconMaterialArrowRightAltW100;
