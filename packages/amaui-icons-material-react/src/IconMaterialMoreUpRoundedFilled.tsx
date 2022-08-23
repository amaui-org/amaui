import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreUpRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpRoundedFilled'
      short_name='MoreUp'

      {...props}
    >
      <path d="M17 16V7H8V5h11v11Zm-5 5v-9H3v-2h11v11Z"/>
    </Icon>
  );
});

IconMaterialMoreUpRoundedFilled.displayName = 'AmauiIconMaterialMoreUpRoundedFilled';

export default IconMaterialMoreUpRoundedFilled;
