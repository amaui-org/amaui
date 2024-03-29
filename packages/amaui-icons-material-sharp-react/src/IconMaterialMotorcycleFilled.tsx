import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotorcycleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotorcycleFilled'

      short_name='Motorcycle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-2.075 0-3.537-1.462Q0 16.075 0 14q0-2.075 1.463-3.538Q2.925 9 5 9h11.6l-2-2H11V5h4.4l4.05 4.05q1.95.15 3.25 1.575T24 14q0 2.075-1.462 3.538Q21.075 19 19 19q-2.075 0-3.537-1.462Q14 16.075 14 14q0-.45.062-.888.063-.437.238-.862L11.55 15H9.9q-.35 1.75-1.725 2.875T5 19Zm14-2q1.25 0 2.125-.875T22 14q0-1.25-.875-2.125T19 11q-1.25 0-2.125.875T16 14q0 1.25.875 2.125T19 17ZM5 17q.95 0 1.713-.55Q7.475 15.9 7.8 15H5v-2h2.8q-.325-.9-1.087-1.45Q5.95 11 5 11q-1.25 0-2.125.875T2 14q0 1.25.875 2.125T5 17Z"/>
    </Icon>
  );
});

IconMaterialMotorcycleFilled.displayName = 'AmauiIconMaterialMotorcycleFilled';

export default IconMaterialMotorcycleFilled;
