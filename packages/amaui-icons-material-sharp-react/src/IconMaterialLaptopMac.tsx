import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopMac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMac'

      short_name='LaptopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 20v-2h4l-2-2V3h20v13l-2 2h4v2Zm4-4h16V5H4Zm8 3q.425 0 .713-.288Q13 18.425 13 18t-.287-.712Q12.425 17 12 17t-.712.288Q11 17.575 11 18t.288.712Q11.575 19 12 19Zm-8-3V5v11Z"/>
    </Icon>
  );
});

IconMaterialLaptopMac.displayName = 'AmauiIconMaterialLaptopMac';

export default IconMaterialLaptopMac;
