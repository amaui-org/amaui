import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllTwoTone'
      short_name='ClearAll'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z"/>
    </Icon>
  );
});

export default IconMaterialClearAllTwoTone;
