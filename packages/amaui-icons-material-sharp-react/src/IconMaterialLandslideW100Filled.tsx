import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandslideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideW100Filled'

      short_name='Landslide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7v-3.2l2.7.875 9.3-3.075 4.1 5.4ZM6 17.625l-2.7-.875v-3l2.7.875 4.675-1.55 3.9 1.7ZM17.7 13l3-1.35v-2.1l-2.875-.65-1.525 1.225v1.75ZM6 13.875 3.3 13V9.3h4.05l2.575 3.3Zm6.15-6.325 3.55-1.425v-3.05l-3.425-.7L10.3 3.7v2.6Z"/>
    </Icon>
  );
});

IconMaterialLandslideW100Filled.displayName = 'AmauiIconMaterialLandslideW100Filled';

export default IconMaterialLandslideW100Filled;
