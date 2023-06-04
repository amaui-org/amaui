import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreHoriz = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHoriz'

      short_name='MoreHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialMoreHoriz.displayName = 'AmauiIconMaterialMoreHoriz';

export default IconMaterialMoreHoriz;
