import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2kW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kW100'

      short_name='2k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7 14.6h3.7v-.7h-3v-1.55h3V9.4H7v.7h3v1.55H7Zm-2.7 5.1V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial2kW100.displayName = 'AmauiIconMaterial2kW100';

export default IconMaterial2kW100;
