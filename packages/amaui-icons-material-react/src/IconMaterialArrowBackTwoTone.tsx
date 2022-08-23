import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackTwoTone'
      short_name='ArrowBack'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </Icon>
  );
});

IconMaterialArrowBackTwoTone.displayName = 'AmauiIconMaterialArrowBackTwoTone';

export default IconMaterialArrowBackTwoTone;
