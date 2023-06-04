import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6kW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kW100'

      short_name='6k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7.7 11.65V10.1h3v-.7H7v5.2h3.7v-2.95Zm0 2.25v-1.55H10v1.55Zm-3.4 5.8V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial6kW100.displayName = 'AmauiIconMaterial6kW100';

export default IconMaterial6kW100;
