import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomW100Filled'

      short_name='VerticalAlignBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 20.35v-.7h14.7v.7ZM12 16.1 7.9 12l.5-.5 3.25 3.25V3.65h.7v11.1l3.25-3.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottomW100Filled.displayName = 'AmauiIconMaterialVerticalAlignBottomW100Filled';

export default IconMaterialVerticalAlignBottomW100Filled;
