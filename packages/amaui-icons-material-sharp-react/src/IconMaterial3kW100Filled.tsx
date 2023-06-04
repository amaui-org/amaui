import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kW100Filled'

      short_name='3k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 14.6h.7v-2.4L16 14.6h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM7 14.6h3.7V9.4H7v.7h3v1.55H8v.7h2v1.55H7Zm-2.7 5.1V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterial3kW100Filled.displayName = 'AmauiIconMaterial3kW100Filled';

export default IconMaterial3kW100Filled;
