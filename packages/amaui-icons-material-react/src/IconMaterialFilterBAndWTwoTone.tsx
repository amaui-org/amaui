import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterBAndWTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWTwoTone'
      short_name='FilterBAndW'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5h-7v6l7 8zm-7 14v-8l-7 8z" opacity=".3"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9 0H5l7-8V5h7v14l-7-8v8z"/>
    </Icon>
  );
});

IconMaterialFilterBAndWTwoTone.displayName = 'AmauiIconMaterialFilterBAndWTwoTone';

export default IconMaterialFilterBAndWTwoTone;
