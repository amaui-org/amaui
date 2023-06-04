import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreastfeedingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreastfeedingW100Filled'

      short_name='Breastfeeding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 20q-.85 0-1.638-.175-.787-.175-1.437-.45-.925-.4-1.5-.975T6.8 17.125V12.5q0-.625.463-1.15.462-.525 1.212-.925t1.675-.613Q11.075 9.6 12 9.6t1.85.212q.925.213 1.675.613t1.213.925q.462.525.462 1.15v4.625q0 .35-.15.675-.15.325-.425.6-.275.275-.662.525-.388.25-.838.45.025-.1.075-.575 0-1.15-.825-1.975Q13.55 16 12.4 16q-.875 0-1.537.45-.663.45-.988 1.175.625.2 1.163.25.537.05.937.05.35 0 .563-.025.212-.025.262-.025v2.075q-.225.05-.437.05h-.413Zm2.45-4.4q.65 0 1.125-.463Q16 14.675 16 14q0-.65-.475-1.125T14.4 12.4q-.675 0-1.137.475Q12.8 13.35 12.8 14q0 .675.463 1.137.462.463 1.137.463ZM12 8.8q1 0 1.7-.7t.7-1.7q0-1-.7-1.7T12 4q-1.025 0-1.712.7-.688.7-.688 1.7t.688 1.7q.687.7 1.712.7Z"/>
    </Icon>
  );
});

IconMaterialBreastfeedingW100Filled.displayName = 'AmauiIconMaterialBreastfeedingW100Filled';

export default IconMaterialBreastfeedingW100Filled;
