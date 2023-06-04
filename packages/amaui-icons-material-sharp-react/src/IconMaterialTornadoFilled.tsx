import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTornadoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoFilled'

      short_name='Tornado'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.9 8 1 3h22l-2.9 5Zm2.9 5-1.75-3h13.9l-1.75 3Zm5.2 9-4.05-7h8.1Z"/>
    </Icon>
  );
});

IconMaterialTornadoFilled.displayName = 'AmauiIconMaterialTornadoFilled';

export default IconMaterialTornadoFilled;
