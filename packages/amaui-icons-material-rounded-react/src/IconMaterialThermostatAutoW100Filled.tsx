import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermostatAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatAutoW100Filled'

      short_name='ThermostatAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.2 19.7q-1.55 0-2.625-1.075T4.5 16q0-.975.513-1.85.512-.875 1.487-1.45V6q0-.725.488-1.213Q7.475 4.3 8.2 4.3t1.213.487Q9.9 5.275 9.9 6v6.7q.975.575 1.487 1.45.513.875.513 1.85 0 1.5-1.1 2.6t-2.6 1.1Zm-3-3.7h6q0-.75-.425-1.463-.425-.712-1.225-1.287L9.2 13V6q0-.425-.287-.713Q8.625 5 8.2 5t-.712.287Q7.2 5.575 7.2 6v7l-.35.25q-.8.575-1.225 1.287Q5.2 15.25 5.2 16Zm8.9-3q-.225 0-.325-.15t-.025-.35l3.275-8.35q.025-.075.1-.113Q17.2 4 17.275 4t.15.037q.075.038.1.113l3.3 8.325q.1.225 0 .375t-.35.15q-.1 0-.175-.062-.075-.063-.125-.138l-1.025-2.5H15.4l-1.025 2.5q-.05.075-.112.138Q14.2 13 14.1 13Zm1.55-3.35h3.25l-1.6-4.1h-.1Z"/>
    </Icon>
  );
});

IconMaterialThermostatAutoW100Filled.displayName = 'AmauiIconMaterialThermostatAutoW100Filled';

export default IconMaterialThermostatAutoW100Filled;
