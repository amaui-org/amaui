import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopW100Filled'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 16.7V7.3h9.4v9.4Z"/>
    </Icon>
  );
});

IconMaterialStopW100Filled.displayName = 'AmauiIconMaterialStopW100Filled';

export default IconMaterialStopW100Filled;
