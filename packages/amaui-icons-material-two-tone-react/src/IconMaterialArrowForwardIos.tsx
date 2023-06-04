import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIos'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
    </Icon>
  );
});

IconMaterialArrowForwardIos.displayName = 'AmauiIconMaterialArrowForwardIos';

export default IconMaterialArrowForwardIos;
