import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltFilled'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21v-9h3v-2H5V3h14v7h-3v2h3v9h-2v-3H7v3Zm5-9h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialChairAltFilled.displayName = 'AmauiIconMaterialChairAltFilled';

export default IconMaterialChairAltFilled;
