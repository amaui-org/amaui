import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMergeTypeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeTwoTone'
      short_name='MergeType'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5.59 19L7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zm11.407 1.41l-3.408-3.407 1.4-1.407 3.41 3.408z"/>
    </Icon>
  );
});

export default IconMaterialMergeTypeTwoTone;
