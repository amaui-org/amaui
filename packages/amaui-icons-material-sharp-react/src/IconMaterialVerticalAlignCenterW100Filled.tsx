import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterW100Filled'

      short_name='VerticalAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.35v-5.1L9.4 18.5l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25v5.1Zm-7-9v-.7h14.7v.7ZM12 9.1 8.9 6l.5-.5 2.25 2.25v-5.1h.7v5.1L14.6 5.5l.5.5Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenterW100Filled.displayName = 'AmauiIconMaterialVerticalAlignCenterW100Filled';

export default IconMaterialVerticalAlignCenterW100Filled;
