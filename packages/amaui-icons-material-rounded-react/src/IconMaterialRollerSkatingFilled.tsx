import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerSkatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerSkatingFilled'

      short_name='RollerSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 16q-.825 0-1.412-.588Q4 14.825 4 14V3q0-.825.588-1.413Q5.175 1 6 1h4q.825 0 1.413.587Q12 2.175 12 3v1H9.5q-.2 0-.35.15Q9 4.3 9 4.5q0 .2.15.35.15.15.35.15H12v.5q0 .2.05.5H9.5q-.2 0-.35.15Q9 6.3 9 6.5q0 .2.15.35.15.15.35.15h2.9q.35.575.888.975.537.4 1.187.6L17.1 9.3q1.3.35 2.1 1.412.8 1.063.8 2.413V14q0 .825-.587 1.412Q18.825 16 18 16Zm-1 7q-1.25 0-2.125-.875T2 20q0-1.25.875-2.125T5 17q1.25 0 2.125.875T8 20q0 1.25-.875 2.125T5 23Zm14 0q-1.25 0-2.125-.875T16 20q0-1.25.875-2.125T19 17q1.25 0 2.125.875T22 20q0 1.25-.875 2.125T19 23Zm-7 0q-1.25 0-2.125-.875T9 20q0-1.25.875-2.125T12 17q1.25 0 2.125.875T15 20q0 1.25-.875 2.125T12 23Z"/>
    </Icon>
  );
});

IconMaterialRollerSkatingFilled.displayName = 'AmauiIconMaterialRollerSkatingFilled';

export default IconMaterialRollerSkatingFilled;
