import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulmonologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulmonologyW100'

      short_name='Pulmonology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.35H3.3v-6.4l3.15-8.3h4.2v3.775h-.7V6.35h-3L4 14.05v5.6h6.3V16h.7Zm9.7 0H13V16h.7v3.65H20v-5.6l-2.975-7.7H14.05v3.075h-.7V5.65h4.175l3.175 8.3ZM9.175 12.825Zm5.675 0ZM12 10.5l-2.6 2.575-.475-.475 2.725-2.725V2.65h.7v7.225l2.725 2.725-.475.475Z"/>
    </Icon>
  );
});

IconMaterialPulmonologyW100.displayName = 'AmauiIconMaterialPulmonologyW100';

export default IconMaterialPulmonologyW100;
