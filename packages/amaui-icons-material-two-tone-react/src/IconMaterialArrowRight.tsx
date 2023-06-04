import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRight'

      short_name='ArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/>
    </Icon>
  );
});

IconMaterialArrowRight.displayName = 'AmauiIconMaterialArrowRight';

export default IconMaterialArrowRight;
