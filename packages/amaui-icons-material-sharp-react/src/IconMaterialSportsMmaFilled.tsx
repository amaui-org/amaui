import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMmaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaFilled'

      short_name='SportsMma'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-4h10v4Zm-1-5-.95-4.8Q5 11.075 5 11V5q0-.825.588-1.413Q6.175 3 7 3h8q.825 0 1.413.587Q17 4.175 17 5v3q0-.425.288-.713Q17.575 7 18 7t.712.287Q19 7.575 19 8v3q0 .075-.05.2L18 16Zm2-6h6V7H8Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaFilled.displayName = 'AmauiIconMaterialSportsMmaFilled';

export default IconMaterialSportsMmaFilled;
