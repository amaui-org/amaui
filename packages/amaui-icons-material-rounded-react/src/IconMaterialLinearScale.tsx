import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinearScale = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinearScale'

      short_name='LinearScale'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 17q-1.8 0-3.175-1.137Q12.45 14.725 12.1 13H6.8q-.3.675-.925 1.087-.625.413-1.375.413-1.05 0-1.775-.725Q2 13.05 2 12q0-1.05.725-1.775Q3.45 9.5 4.5 9.5q.75 0 1.375.412.625.413.925 1.088h5.3q.35-1.725 1.725-2.863Q15.2 7 17 7q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Zm0-2q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9q-1.25 0-2.125.875T14 12q0 1.25.875 2.125T17 15Z"/>
    </Icon>
  );
});

IconMaterialLinearScale.displayName = 'AmauiIconMaterialLinearScale';

export default IconMaterialLinearScale;
