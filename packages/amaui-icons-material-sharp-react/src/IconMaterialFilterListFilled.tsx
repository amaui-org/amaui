import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListFilled'

      short_name='FilterList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 18v-2h4v2Zm-4-5v-2h12v2ZM3 8V6h18v2Z"/>
    </Icon>
  );
});

IconMaterialFilterListFilled.displayName = 'AmauiIconMaterialFilterListFilled';

export default IconMaterialFilterListFilled;
