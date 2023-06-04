import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBack'

      short_name='ArrowBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/>
    </Icon>
  );
});

IconMaterialArrowBack.displayName = 'AmauiIconMaterialArrowBack';

export default IconMaterialArrowBack;
