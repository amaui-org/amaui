import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatFilled'

      short_name='Heat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-341q0 32 17 64t60 78l-56 57q-55-58-78-103.5T200-339q0-33 10-69.5t34-94.5q20-48 28-75t8-49q0-30-18.5-59T196-759l56-56q57 54 82.5 97t25.5 91q0 31-9.5 65.5T318-472q-22 51-30 79t-8 52Zm200 0q0 32 17 64t60 78l-55 57q-55-58-78.5-103.5T400-339q0-33 10-69.5t34-94.5q20-48 28-75t8-49q0-30-18-59t-65-73l56-56q57 54 82 97t25 91q0 31-9.5 65.5T518-472q-22 51-30 79t-8 52Zm200 0q0 32 17 64t60 78l-55 57q-55-58-78.5-103.5T600-339q0-33 10-69.5t34-94.5q20-48 28-75t8-49q0-30-18-59t-65-73l56-56q57 54 82 97t25 91q0 31-9.5 65.5T718-472q-22 51-30 79t-8 52Z"/>
    </Icon>
  );
});

IconMaterialHeatFilled.displayName = 'AmauiIconMaterialHeatFilled';

export default IconMaterialHeatFilled;
