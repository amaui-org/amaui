import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricBoltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBoltW100'

      short_name='ElectricBolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 19.825q-.2.175-.437.187-.238.013-.438-.187-.175-.175-.175-.4 0-.225.125-.425l3.875-5.4-6.475-.625q-.525-.05-.675-.537-.15-.488.225-.838l8.275-7.425q.2-.175.438-.188.237-.012.437.188.175.175.175.4 0 .225-.125.425L11.2 10.4l6.475.625q.525.05.675.537.15.488-.225.838Z"/>
    </Icon>
  );
});

IconMaterialElectricBoltW100.displayName = 'AmauiIconMaterialElectricBoltW100';

export default IconMaterialElectricBoltW100;
