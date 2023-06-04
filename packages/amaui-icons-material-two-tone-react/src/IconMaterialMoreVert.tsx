import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreVert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreVert'

      short_name='MoreVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialMoreVert.displayName = 'AmauiIconMaterialMoreVert';

export default IconMaterialMoreVert;
