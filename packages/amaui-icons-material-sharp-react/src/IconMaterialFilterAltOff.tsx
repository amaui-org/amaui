import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOff'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.8 11.975-1.425-1.425L16.95 6H8.825l-2-2H21.05ZM10 20v-7.175l-8.6-8.6L2.8 2.8l18.4 18.4-1.425 1.4L14 16.825V20Zm3.375-9.45Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOff.displayName = 'AmauiIconMaterialFilterAltOff';

export default IconMaterialFilterAltOff;
