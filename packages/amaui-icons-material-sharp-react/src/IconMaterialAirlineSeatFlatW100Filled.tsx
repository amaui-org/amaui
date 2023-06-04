import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatW100Filled'

      short_name='AirlineSeatFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.7 12.7V8.3H20v4.4ZM4 15.4v-.7h16v.7Zm1.85-2.7q-.8 0-1.325-.525Q4 11.65 4 10.85q0-.8.525-1.325Q5.05 9 5.85 9q.8 0 1.325.525.525.525.525 1.325 0 .8-.525 1.325-.525.525-1.325.525Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100Filled.displayName = 'AmauiIconMaterialAirlineSeatFlatW100Filled';

export default IconMaterialAirlineSeatFlatW100Filled;
