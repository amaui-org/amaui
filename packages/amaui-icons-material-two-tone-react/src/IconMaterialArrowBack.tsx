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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </Icon>
  );
});

IconMaterialArrowBack.displayName = 'AmauiIconMaterialArrowBack';

export default IconMaterialArrowBack;
