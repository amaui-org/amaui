import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPentagon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pentagon'

      short_name='Pentagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 19h9.1l3.075-9.225L12 4.45 4.375 9.775ZM6 21 2 9l10-7 10 7-4 12Zm6-9.275Z"/>
    </Icon>
  );
});

IconMaterialPentagon.displayName = 'AmauiIconMaterialPentagon';

export default IconMaterialPentagon;
