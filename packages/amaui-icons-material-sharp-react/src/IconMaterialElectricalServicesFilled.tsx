import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricalServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServicesFilled'

      short_name='ElectricalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 15v-2h3v2Zm0 4v-2h3v2Zm-6 1v-2h-2v-4h2v-2h5v8Zm-9-3V9h7V6H4V4h8v7H5v4h4v2Z"/>
    </Icon>
  );
});

IconMaterialElectricalServicesFilled.displayName = 'AmauiIconMaterialElectricalServicesFilled';

export default IconMaterialElectricalServicesFilled;
