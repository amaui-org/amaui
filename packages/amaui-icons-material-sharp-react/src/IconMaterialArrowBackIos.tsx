import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIos'

      short_name='ArrowBackIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIos.displayName = 'AmauiIconMaterialArrowBackIos';

export default IconMaterialArrowBackIos;
