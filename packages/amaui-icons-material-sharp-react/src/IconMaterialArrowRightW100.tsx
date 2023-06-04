import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightW100'

      short_name='ArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 15.45v-6.9L14.1 12Z"/>
    </Icon>
  );
});

IconMaterialArrowRightW100.displayName = 'AmauiIconMaterialArrowRightW100';

export default IconMaterialArrowRightW100;
