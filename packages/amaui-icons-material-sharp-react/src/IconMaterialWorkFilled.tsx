import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkFilled'

      short_name='Work'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6h6V2h8v4h6v15Zm8-15h4V4h-4Z"/>
    </Icon>
  );
});

IconMaterialWorkFilled.displayName = 'AmauiIconMaterialWorkFilled';

export default IconMaterialWorkFilled;
