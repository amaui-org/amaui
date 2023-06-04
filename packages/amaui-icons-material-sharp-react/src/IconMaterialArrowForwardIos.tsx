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
      <path d="M8.025 22 6.25 20.225 14.475 12 6.25 3.775 8.025 2l10 10Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIos.displayName = 'AmauiIconMaterialArrowForwardIos';

export default IconMaterialArrowForwardIos;
