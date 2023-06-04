import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiotechW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechW100Filled'

      short_name='Biotech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.15 20.35v-.7h5v-3.3h-.65q-1.8 0-3.075-1.275Q6.15 13.8 6.15 12q0-1.35.688-2.375Q7.525 8.6 8.65 8.1q0 .2.038.362.037.163.087.338-.8.4-1.362 1.237-.563.838-.563 1.963 0 1.525 1.062 2.587Q8.975 15.65 10.5 15.65h7.35v.7h-6v3.3h6v.7Zm8.55-8.9-.35-.95-.95.4-.525-1.475q.225-.275.35-.638.125-.362.125-.787 0-.875-.512-1.5-.513-.625-1.313-.8L11 4.25l.95-.35-.35-.95.95-.35.35.95.85-.3 2.4 6.55-.85.35.35.95ZM11 9.65q-.675 0-1.162-.475Q9.35 8.7 9.35 8q0-.675.488-1.163.487-.487 1.162-.487.7 0 1.175.475.475.475.475 1.175 0 .675-.475 1.162Q11.7 9.65 11 9.65Z"/>
    </Icon>
  );
});

IconMaterialBiotechW100Filled.displayName = 'AmauiIconMaterialBiotechW100Filled';

export default IconMaterialBiotechW100Filled;
