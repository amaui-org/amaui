import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterList'

      short_name='FilterList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
    </Icon>
  );
});

IconMaterialFilterList.displayName = 'AmauiIconMaterialFilterList';

export default IconMaterialFilterList;
