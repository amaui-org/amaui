import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorWarningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarningFilled'

      short_name='EscalatorWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 6q-.825 0-1.412-.588Q4.5 4.825 4.5 4t.588-1.413Q5.675 2 6.5 2t1.412.587Q8.5 3.175 8.5 4q0 .825-.588 1.412Q7.325 6 6.5 6ZM17 11q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q16.375 8 17 8t1.062.438q.438.437.438 1.062t-.438 1.062Q17.625 11 17 11ZM4.5 22v-7H3V7h6.15l4.15 7.175L14.775 12H20v5h-1v5h-4v-7.1l-.775 1.1h-2.2L9.5 11.6V22Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningFilled.displayName = 'AmauiIconMaterialEscalatorWarningFilled';

export default IconMaterialEscalatorWarningFilled;
