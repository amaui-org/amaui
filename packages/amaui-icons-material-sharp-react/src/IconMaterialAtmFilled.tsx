import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAtmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmFilled'

      short_name='Atm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.375 15v-4.5h-2.25V9h6v1.5h-2.25V15ZM2 15V9h5v6H5.5v-1.5h-2V15Zm1.5-3h2v-1.5h-2Zm12 3V9H22v6h-1.5v-4.5h-1V14H18v-3.5h-1V15Z"/>
    </Icon>
  );
});

IconMaterialAtmFilled.displayName = 'AmauiIconMaterialAtmFilled';

export default IconMaterialAtmFilled;
