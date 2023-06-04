import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashW100Filled'

      short_name='Wash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.1 8.4q-.825 0-1.412-.588Q16.1 7.225 16.1 6.4q0-.5.313-1.125.312-.625.687-1.175.45-.65 1-1.3.55.65 1 1.3.375.55.688 1.175.312.625.312 1.125 0 .825-.587 1.412-.588.588-1.413.588Zm-5 .8q-.5 0-.85-.35T11.9 8q0-.25.188-.6.187-.35.412-.65.275-.375.6-.75.325.375.6.75.225.3.413.65.187.35.187.6 0 .5-.35.85t-.85.35ZM3.05 19.75v-6.1l6.025-5.725.775.8-1.725 3.025h9.225v1.1h-6.4v1.2h8v1.1h-8v1.2h7.2v1.1h-7.2v1.2h5.6v1.1Z"/>
    </Icon>
  );
});

IconMaterialWashW100Filled.displayName = 'AmauiIconMaterialWashW100Filled';

export default IconMaterialWashW100Filled;
