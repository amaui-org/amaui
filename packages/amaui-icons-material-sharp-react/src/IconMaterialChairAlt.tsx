import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAlt'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21v-9h3v-2H5V3h14v7h-3v2h3v9h-2v-3H7v3ZM7 8h10V5H7Zm3 4h4v-2h-4Zm-3 4h10v-2H7Zm0-8V5v3Zm0 8v-2 2Z"/>
    </Icon>
  );
});

IconMaterialChairAlt.displayName = 'AmauiIconMaterialChairAlt';

export default IconMaterialChairAlt;
