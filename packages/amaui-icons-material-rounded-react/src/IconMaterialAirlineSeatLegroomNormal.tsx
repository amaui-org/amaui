import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomNormal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormal'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 21q-.825 0-1.413-.587Q16 19.825 16 19v-5H8q-.825 0-1.412-.588Q6 12.825 6 12V3h6v6h5q.825 0 1.413.587Q19 10.175 19 11v7h1.5q.65 0 1.075.425Q22 18.85 22 19.5q0 .65-.425 1.075Q21.15 21 20.5 21ZM5 17q-.825 0-1.413-.587Q3 15.825 3 15V4q0-.425.288-.713Q3.575 3 4 3t.713.287Q5 3.575 5 4v11h8q.425 0 .713.287.287.288.287.713t-.287.712Q13.425 17 13 17Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormal.displayName = 'AmauiIconMaterialAirlineSeatLegroomNormal';

export default IconMaterialAirlineSeatLegroomNormal;
