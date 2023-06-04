import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricalServicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServicesW100Filled'

      short_name='ElectricalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 14.35v-.7h3v.7Zm0 4v-.7h3v.7Zm-4.7 1v-2h-2v-2.7h2v-2h3.7v6.7Zm-9-3v-6.7h7v-4.3h-6v-.7h6.7v5.7h-7v5.3h5.3v.7Z"/>
    </Icon>
  );
});

IconMaterialElectricalServicesW100Filled.displayName = 'AmauiIconMaterialElectricalServicesW100Filled';

export default IconMaterialElectricalServicesW100Filled;
