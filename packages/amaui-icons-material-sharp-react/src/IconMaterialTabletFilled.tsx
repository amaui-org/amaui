import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletFilled'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20V4h22v16Zm5-2h12V6H6Z"/>
    </Icon>
  );
});

IconMaterialTabletFilled.displayName = 'AmauiIconMaterialTabletFilled';

export default IconMaterialTabletFilled;
