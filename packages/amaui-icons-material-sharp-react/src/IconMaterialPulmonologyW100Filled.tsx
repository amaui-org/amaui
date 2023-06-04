import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulmonologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulmonologyW100Filled'

      short_name='Pulmonology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 2.65h.7v7.2l2.725 2.75.7-.7-2.425-2.475V5.65h4.2l3.15 8.3v6.4H13V16l.4-4.1-1.4-1.4-1.425 1.425L11 16v4.35H3.3v-6.4l3.15-8.3h4.2v3.8L8.225 11.9l.7.7 2.725-2.75Z"/>
    </Icon>
  );
});

IconMaterialPulmonologyW100Filled.displayName = 'AmauiIconMaterialPulmonologyW100Filled';

export default IconMaterialPulmonologyW100Filled;
