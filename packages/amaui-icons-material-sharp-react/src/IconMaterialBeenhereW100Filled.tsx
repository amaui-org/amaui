import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeenhereW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereW100Filled'

      short_name='Beenhere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.4-6.7-5.025V3.3h13.4v13.075Zm-1.05-7.3 4.75-4.75-.5-.5-4.25 4.25-2.15-2.15-.5.5Z"/>
    </Icon>
  );
});

IconMaterialBeenhereW100Filled.displayName = 'AmauiIconMaterialBeenhereW100Filled';

export default IconMaterialBeenhereW100Filled;
