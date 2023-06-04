import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionFilled'

      short_name='AutoAwesomeMotion'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 14V2h12v2H4v10Zm4 4V6h12v2H8v10Zm16 4H10V10h12Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionFilled.displayName = 'AmauiIconMaterialAutoAwesomeMotionFilled';

export default IconMaterialAutoAwesomeMotionFilled;
