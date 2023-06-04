import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosW100'

      short_name='ArrowBackIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21.1.9 12 10 2.9l.85.85L2.6 12l8.25 8.25Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosW100.displayName = 'AmauiIconMaterialArrowBackIosW100';

export default IconMaterialArrowBackIosW100;
