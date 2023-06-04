import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowInsert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowInsert'

      short_name='ArrowInsert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.6 18 8 8.4V17H6V5h12v2H9.4l9.6 9.6Z"/>
    </Icon>
  );
});

IconMaterialArrowInsert.displayName = 'AmauiIconMaterialArrowInsert';

export default IconMaterialArrowInsert;
