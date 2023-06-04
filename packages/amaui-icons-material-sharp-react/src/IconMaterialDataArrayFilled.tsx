import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataArrayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayFilled'

      short_name='DataArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20v-2h3V6h-3V4h5v16ZM4 20V4h5v2H6v12h3v2Z"/>
    </Icon>
  );
});

IconMaterialDataArrayFilled.displayName = 'AmauiIconMaterialDataArrayFilled';

export default IconMaterialDataArrayFilled;
