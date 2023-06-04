import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatAngledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngledW100'

      short_name='AirlineSeatFlatAngled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.9 11.9 1.5-4.125 9.725 3.525-1.55 4.125Zm-6.275.575.25-.65L18.9 17.3l-.25.65ZM6.9 10.65q-.75 0-1.287-.538-.538-.537-.538-1.287 0-.75.538-1.288Q6.15 7 6.9 7q.75 0 1.288.537.537.538.537 1.288t-.537 1.287q-.538.538-1.288.538Zm0-.7q.475 0 .8-.325.325-.325.325-.8 0-.475-.325-.8-.325-.325-.8-.325-.475 0-.8.325-.325.325-.325.8 0 .475.325.8.325.325.8.325Zm3.9 1.525 8.375 3.05.975-2.825-8.325-3.05ZM6.925 8.85Zm4.9-.2L10.8 11.475Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledW100.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledW100';

export default IconMaterialAirlineSeatFlatAngledW100;
