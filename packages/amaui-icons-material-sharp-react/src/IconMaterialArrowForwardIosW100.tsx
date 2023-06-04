import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosW100'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 21.1-.85-.85L15.4 12 7.15 3.75 8 2.9l9.1 9.1Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosW100.displayName = 'AmauiIconMaterialArrowForwardIosW100';

export default IconMaterialArrowForwardIosW100;
