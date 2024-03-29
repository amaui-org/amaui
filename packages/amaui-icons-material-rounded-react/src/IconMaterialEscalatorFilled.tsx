import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorFilled'

      short_name='Escalator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18h3.3l5-9H17q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q17.625 6 17 6h-3.3l-5 9H7q-.625 0-1.062.438-.438.437-.438 1.062t.438 1.062Q6.375 18 7 18Zm-2 3q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialEscalatorFilled.displayName = 'AmauiIconMaterialEscalatorFilled';

export default IconMaterialEscalatorFilled;
