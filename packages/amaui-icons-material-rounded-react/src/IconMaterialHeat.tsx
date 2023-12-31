import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Heat'

      short_name='Heat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-172q-12 12-29 12t-28-12q-37-39-55-80.5T200-339q0-33 10-69.5t34-94.5q20-48 28-75t8-49q0-28-12.5-53T227-731q-13-11-13-28t12-29q11-11 27-11.5t28 10.5q40 37 59.5 77t19.5 85q0 31-9.5 65.5T318-472q-22 52-30 79.5t-8 51.5q0 30 12.5 58t38.5 56q11 12 10.5 28T330-172Zm201 1q-12 12-29 12t-29-13q-37-39-55-80.5T400-339q0-33 10-69.5t34-94.5q20-48 28-75t8-49q0-28-12.5-53T427-731q-13-11-13-28t12-29q11-11 27-11.5t28 10.5q40 37 59.5 77t19.5 85q0 31-9.5 65T518-472q-22 52-30 80t-8 52q0 30 13 57.5t39 55.5q11 11 10.5 28T531-171Zm200 0q-12 12-29 12t-29-13q-37-39-55-80.5T600-339q0-33 10-69.5t34-94.5q20-48 28-75t8-49q0-28-12.5-53T627-731q-13-11-13-28t12-29q11-11 27-11.5t28 10.5q40 37 59.5 77t19.5 85q0 31-9.5 65.5T718-472q-22 51-30 79t-8 52q0 30 13 58t39 56q11 12 10.5 28.5T731-171Z"/>
    </Icon>
  );
});

IconMaterialHeat.displayName = 'AmauiIconMaterialHeat';

export default IconMaterialHeat;
