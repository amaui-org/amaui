import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockMediaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockMediaW100Filled'

      short_name='StockMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-412v-416h416v416H132Zm188-72-48-66-52 70h240l-72-94-68 90Zm334.118 352Q615-132 587.5-159.382q-27.5-27.383-27.5-66.5Q560-265 587.417-292.5 614.833-320 654-320q20 0 36.5 7t29.5 20v-227h108v28h-80v266q0 39.167-27.382 66.583Q693.235-132 654.118-132Z"/>
    </Icon>
  );
});

IconMaterialStockMediaW100Filled.displayName = 'AmauiIconMaterialStockMediaW100Filled';

export default IconMaterialStockMediaW100Filled;
