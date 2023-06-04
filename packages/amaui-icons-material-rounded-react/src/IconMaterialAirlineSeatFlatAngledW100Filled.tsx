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
      <path d="M9.9 11.875 11.15 8.4q.1-.275.362-.388.263-.112.538-.012l6.5 2.35q1.05.375 1.538 1.388.487 1.012.087 2.062l-.6 1.6Zm8.425 5.925L3.95 12.575q-.125-.05-.187-.188-.063-.137-.013-.262t.188-.187q.137-.063.262-.013l14.375 5.225q.125.05.187.187.063.138.013.263t-.188.188q-.137.062-.262.012ZM6.9 10.625q-.75 0-1.287-.538-.538-.537-.538-1.287 0-.75.538-1.288.537-.537 1.287-.537.75 0 1.288.537.537.538.537 1.288t-.537 1.287q-.538.538-1.288.538Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledW100Filled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledW100Filled';

export default IconMaterialAirlineSeatFlatAngledW100Filled;
