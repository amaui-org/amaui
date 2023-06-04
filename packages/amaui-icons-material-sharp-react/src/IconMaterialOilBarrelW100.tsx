import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOilBarrelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrelW100'

      short_name='OilBarrel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.275 19.7V19H5.9v-6.65H4.275v-.7H5.9V5H4.275v-.7H19.7V5h-1.6v6.65h1.6v.7h-1.6V19h1.6v.7ZM6.6 19h10.8v-6.65h-1v-.7h1V5H6.6v6.65h1v.7h-1Zm5.4-3.825q.975 0 1.663-.675.687-.675.687-1.625 0-.775-.437-1.325Q13.475 11 12 9.3q-1.45 1.7-1.9 2.25-.45.55-.45 1.325 0 .95.688 1.625.687.675 1.662.675ZM6.6 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialOilBarrelW100.displayName = 'AmauiIconMaterialOilBarrelW100';

export default IconMaterialOilBarrelW100;
