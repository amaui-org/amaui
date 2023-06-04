import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatAngledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngledW100Filled'

      short_name='AirlineSeatFlatAngled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.9 11.875 1.5-4.125 9.725 3.525-1.55 4.125Zm-6.275.575.25-.65L18.9 17.275l-.25.65ZM6.9 10.625q-.75 0-1.287-.538-.538-.537-.538-1.287 0-.75.538-1.288.537-.537 1.287-.537.75 0 1.288.537.537.538.537 1.288t-.537 1.287q-.538.538-1.288.538Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledW100Filled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledW100Filled';

export default IconMaterialAirlineSeatFlatAngledW100Filled;
