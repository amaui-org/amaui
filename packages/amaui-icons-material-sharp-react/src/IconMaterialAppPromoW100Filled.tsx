import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppPromoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppPromoW100Filled'

      short_name='AppPromo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M604-520 480-396 356-520l20-20 90 90v-194h28v194l90-90 20 20ZM412-178h136v-28H412v28ZM252-92v-776h456v776H252Zm28-200h400v-454H280v454Z"/>
    </Icon>
  );
});

IconMaterialAppPromoW100Filled.displayName = 'AmauiIconMaterialAppPromoW100Filled';

export default IconMaterialAppPromoW100Filled;
