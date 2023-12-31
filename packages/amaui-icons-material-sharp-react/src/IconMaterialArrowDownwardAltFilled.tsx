import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownwardAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardAltFilled'

      short_name='ArrowDownwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardAltFilled.displayName = 'AmauiIconMaterialArrowDownwardAltFilled';

export default IconMaterialArrowDownwardAltFilled;
