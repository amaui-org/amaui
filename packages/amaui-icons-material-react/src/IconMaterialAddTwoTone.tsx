import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTwoTone'
      short_name='Add'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </Icon>
  );
});

IconMaterialAddTwoTone.displayName = 'AmauiIconMaterialAddTwoTone';

export default IconMaterialAddTwoTone;
