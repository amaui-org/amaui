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
      <path d="M3.9 8 2.75 6q-.575-1-.012-2Q3.3 3 4.475 3h15.05q1.175 0 1.738 1 .562 1-.013 2L20.1 8Zm2.9 5-1.75-3h13.9l-1.75 3Zm3.475 6L7.95 15h8.1l-2.325 4Q13.15 20 12 20q-1.15 0-1.725-1Z"/>
    </Icon>
  );
});

IconMaterialTornadoFilled.displayName = 'AmauiIconMaterialTornadoFilled';

export default IconMaterialTornadoFilled;
