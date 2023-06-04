import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMadeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeW100Filled'

      short_name='CallMade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.4 19.1-.5-.5L17.15 6.35h-7.5v-.7h8.7v8.7h-.7v-7.5Z"/>
    </Icon>
  );
});

IconMaterialCallMadeW100Filled.displayName = 'AmauiIconMaterialCallMadeW100Filled';

export default IconMaterialCallMadeW100Filled;
