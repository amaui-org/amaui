import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteFilled'

      short_name='Delete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V6H4V4h5V3h6v1h5v2h-1v15Zm4-4h2V8H9Zm4 0h2V8h-2Z"/>
    </Icon>
  );
});

IconMaterialDeleteFilled.displayName = 'AmauiIconMaterialDeleteFilled';

export default IconMaterialDeleteFilled;
