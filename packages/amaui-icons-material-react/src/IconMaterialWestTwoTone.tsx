import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestTwoTone'
      short_name='West'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
    </Icon>
  );
});

IconMaterialWestTwoTone.displayName = 'AmauiIconMaterialWestTwoTone';

export default IconMaterialWestTwoTone;
