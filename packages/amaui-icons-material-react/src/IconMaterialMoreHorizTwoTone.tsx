import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreHorizTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizTwoTone'
      short_name='MoreHoriz'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialMoreHorizTwoTone.displayName = 'AmauiIconMaterialMoreHorizTwoTone';

export default IconMaterialMoreHorizTwoTone;
