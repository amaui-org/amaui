import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPointOfSaleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointOfSaleFilled'

      short_name='PointOfSale'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 8V2h14v6Zm2-2h10V4H7ZM2 22v-3h20v3Zm0-4 4-9h12l4 9Zm6-2h2v-1H8Zm0-2h2v-1H8Zm0-2h2v-1H8Zm3 4h2v-1h-2Zm0-2h2v-1h-2Zm0-2h2v-1h-2Zm3 4h2v-1h-2Zm0-2h2v-1h-2Zm0-2h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialPointOfSaleFilled.displayName = 'AmauiIconMaterialPointOfSaleFilled';

export default IconMaterialPointOfSaleFilled;
