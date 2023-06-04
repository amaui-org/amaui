import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpW100Filled'

      short_name='HeatPump'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 11.975Zm-.375 4.675v-3.825l-2.7 2.7q.575.5 1.263.787.687.288 1.437.338Zm.7 0q.75-.05 1.425-.338.675-.287 1.25-.787L12.35 12.85Zm3.175-1.625q.5-.575.763-1.263.262-.687.337-1.412H12.85ZM12.85 11.65h3.8q-.05-.75-.338-1.425-.287-.675-.787-1.25Zm-.5-.475 2.7-2.7q-.575-.5-1.262-.8-.688-.3-1.438-.35Zm-.35 1.4q.25 0 .413-.163.162-.162.162-.412 0-.25-.162-.413-.163-.162-.413-.162-.25 0-.412.162-.163.163-.163.413 0 .25.163.412.162.163.412.163Zm-.35-1.425v-3.8q-.75.05-1.425.337-.675.288-1.25.788Zm-4.325.5h3.825l-2.7-2.7q-.5.575-.788 1.262-.287.688-.337 1.438Zm1.125 3.4 2.7-2.7h-3.8q.05.75.325 1.437.275.688.775 1.263ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpW100Filled.displayName = 'AmauiIconMaterialHeatPumpW100Filled';

export default IconMaterialHeatPumpW100Filled;
