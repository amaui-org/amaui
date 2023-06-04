import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveDoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneW100Filled'

      short_name='RemoveDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.8 20.8-6.65-6.65-2.75 2.75-4.75-4.75.5-.5 4.25 4.25 2.2-2.25L4.45 3.5l.5-.5L22.3 20.35ZM6.75 16.9 2 12.15l.5-.5 4.25 4.25.9-.9.5.5Zm10.3-4.65-.5-.5L21.6 6.7l.5.5Zm-2.85-2.8-.5-.5 2.25-2.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneW100Filled.displayName = 'AmauiIconMaterialRemoveDoneW100Filled';

export default IconMaterialRemoveDoneW100Filled;
