import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial9kW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='9kW100'

      short_name='9k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7 14.6h3.7V9.4H7v2.95h3v1.55H7Zm.7-2.95V10.1H10v1.55ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial9kW100.displayName = 'AmauiIconMaterial9kW100';

export default IconMaterial9kW100;
