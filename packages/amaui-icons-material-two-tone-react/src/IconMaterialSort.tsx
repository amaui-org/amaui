import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSort = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sort'

      short_name='Sort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
    </Icon>
  );
});

IconMaterialSort.displayName = 'AmauiIconMaterialSort';

export default IconMaterialSort;
