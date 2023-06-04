import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoubleArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowW100Filled'

      short_name='DoubleArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 18.35 11.95 12 7.4 5.65h.85L12.8 12l-4.55 6.35Zm5.75 0L17.7 12l-4.55-6.35H14L18.55 12 14 18.35Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowW100Filled.displayName = 'AmauiIconMaterialDoubleArrowW100Filled';

export default IconMaterialDoubleArrowW100Filled;
