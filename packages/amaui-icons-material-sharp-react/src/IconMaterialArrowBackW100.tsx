import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackW100'

      short_name='ArrowBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19-7-7 7-7 .5.5-6.15 6.15H19v.7H6.35l6.15 6.15Z"/>
    </Icon>
  );
});

IconMaterialArrowBackW100.displayName = 'AmauiIconMaterialArrowBackW100';

export default IconMaterialArrowBackW100;
