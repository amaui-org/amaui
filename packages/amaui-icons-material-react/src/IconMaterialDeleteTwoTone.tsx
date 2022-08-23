import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteTwoTone'
      short_name='Delete'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 9h8v10H8z" opacity=".3"/><path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/>
    </Icon>
  );
});

IconMaterialDeleteTwoTone.displayName = 'AmauiIconMaterialDeleteTwoTone';

export default IconMaterialDeleteTwoTone;
