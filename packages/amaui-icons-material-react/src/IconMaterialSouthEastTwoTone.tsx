import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthEastTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastTwoTone'
      short_name='SouthEast'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z"/>
    </Icon>
  );
});

export default IconMaterialSouthEastTwoTone;
