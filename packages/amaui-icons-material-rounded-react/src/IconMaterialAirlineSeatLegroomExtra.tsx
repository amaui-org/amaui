import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomExtra = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtra'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.825 0-1.412-.587Q2 15.825 2 15V4q0-.425.288-.713Q2.575 3 3 3t.713.287Q4 3.575 4 4v11h8q.425 0 .713.287.287.288.287.713t-.287.712Q12.425 17 12 17Zm16.175 3.2q-.725.35-1.5.063-.775-.288-1.125-1.013L15 14H8.5q-1.25 0-2.125-.875T5.5 11V3h6v6h3q.575 0 1.05.312.475.313.75.838l3.4 6.95 1.1-.5q.575-.275 1.162-.088.588.188.888.738.3.575.088 1.175-.213.6-.788.875Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtra.displayName = 'AmauiIconMaterialAirlineSeatLegroomExtra';

export default IconMaterialAirlineSeatLegroomExtra;
