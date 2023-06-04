import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthEastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastFilled'

      short_name='SouthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19v-2h6.6L4 5.4 5.4 4 17 15.6V9h2v10Z"/>
    </Icon>
  );
});

IconMaterialSouthEastFilled.displayName = 'AmauiIconMaterialSouthEastFilled';

export default IconMaterialSouthEastFilled;
