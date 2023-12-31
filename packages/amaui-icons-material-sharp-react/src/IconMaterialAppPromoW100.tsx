import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppPromoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppPromoW100'

      short_name='AppPromo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M604-520 480-396 356-520l20-20 90 90v-194h28v194l90-90 20 20ZM412-178h136v-28H412v28ZM252-92v-776h456v776H252Zm28-172v144h400v-144H280Zm0-28h400v-454H280v454Zm0-482h400v-66H280v66Zm0 510v144-144Zm0-510v-66 66Z"/>
    </Icon>
  );
});

IconMaterialAppPromoW100.displayName = 'AmauiIconMaterialAppPromoW100';

export default IconMaterialAppPromoW100;
