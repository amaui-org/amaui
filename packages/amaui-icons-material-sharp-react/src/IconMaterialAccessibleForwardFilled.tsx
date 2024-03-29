import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibleForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleForwardFilled'

      short_name='AccessibleForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 6.5q-.825 0-1.413-.588Q16 5.325 16 4.5t.587-1.413Q17.175 2.5 18 2.5q.825 0 1.413.587Q20 3.675 20 4.5q0 .825-.587 1.412Q18.825 6.5 18 6.5ZM10 22q-2.075 0-3.537-1.462Q5 19.075 5 17q0-2.075 1.463-3.538Q7.925 12 10 12v2q-1.25 0-2.125.875T7 17q0 1.25.875 2.125T10 20q1.25 0 2.125-.875T13 17h2q0 2.075-1.462 3.538Q12.075 22 10 22Zm8-1v-5H9.85L13 9h-2.275l-.6 1.55L8.2 10l.7-1.8q.225-.575.737-.888Q10.15 7 10.75 7h5.2q1.125 0 1.713.912.587.913.137 1.938l-1.65 3.65H20V21Z"/>
    </Icon>
  );
});

IconMaterialAccessibleForwardFilled.displayName = 'AmauiIconMaterialAccessibleForwardFilled';

export default IconMaterialAccessibleForwardFilled;
