import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightW100Filled'

      short_name='ArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 15.45v-6.9L14.1 12Z"/>
    </Icon>
  );
});

IconMaterialArrowRightW100Filled.displayName = 'AmauiIconMaterialArrowRightW100Filled';

export default IconMaterialArrowRightW100Filled;
