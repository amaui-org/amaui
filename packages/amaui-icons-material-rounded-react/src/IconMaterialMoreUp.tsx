import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUp'

      short_name='MoreUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 16V7H8V5h11v11Zm-5 5v-9H3v-2h11v11Z"/>
    </Icon>
  );
});

IconMaterialMoreUp.displayName = 'AmauiIconMaterialMoreUp';

export default IconMaterialMoreUp;
