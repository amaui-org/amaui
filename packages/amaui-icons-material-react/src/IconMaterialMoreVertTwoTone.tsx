import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreVertTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreVertTwoTone'
      short_name='MoreVert'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialMoreVertTwoTone.displayName = 'AmauiIconMaterialMoreVertTwoTone';

export default IconMaterialMoreVertTwoTone;
