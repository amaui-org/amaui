import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineExtraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineExtraW100Filled'

      short_name='AirlineSeatReclineExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.7 6.75q-.65 0-1.125-.475T6.1 5.15q0-.65.475-1.125T7.7 3.55q.65 0 1.125.475T9.3 5.15q0 .65-.475 1.125T7.7 6.75Zm-1 11.95L4.35 7h.7l2.2 11H14v.7Zm12.25 2.5L16.5 17H8.125L6.7 10.25q-.2-.975.438-1.638.637-.662 1.462-.662.65 0 1.2.387.55.388.7 1.063l1.25 5.9h4.6l3.2 5.55Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineExtraW100Filled.displayName = 'AmauiIconMaterialAirlineSeatReclineExtraW100Filled';

export default IconMaterialAirlineSeatReclineExtraW100Filled;
