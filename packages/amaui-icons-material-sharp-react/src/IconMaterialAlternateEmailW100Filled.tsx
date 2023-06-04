import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlternateEmailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlternateEmailW100Filled'

      short_name='AlternateEmail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.825 0-3.425-.675-1.6-.675-2.763-1.837-1.162-1.163-1.837-2.763Q3.3 13.825 3.3 12q0-1.85.675-3.438.675-1.587 1.837-2.75Q6.975 4.65 8.575 3.975 10.175 3.3 12 3.3q1.85 0 3.438.675 1.587.675 2.75 1.837 1.162 1.163 1.837 2.75Q20.7 10.15 20.7 12v.85q0 1.2-.825 2.025t-2.025.825q-1.025 0-1.687-.512-.663-.513-.963-1.388-.525.825-1.225 1.362-.7.538-1.975.538-1.55 0-2.625-1.075T8.3 12q0-1.55 1.075-2.625T12 8.3q1.55 0 2.625 1.075T15.7 12v.85q0 .9.625 1.525.625.625 1.525.625.9 0 1.525-.625Q20 13.75 20 12.85V12q0-3.275-2.363-5.638Q15.275 4 12 4 8.725 4 6.362 6.362 4 8.725 4 12t2.362 5.637Q8.725 20 12 20h5v.7Zm0-5.7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"/>
    </Icon>
  );
});

IconMaterialAlternateEmailW100Filled.displayName = 'AmauiIconMaterialAlternateEmailW100Filled';

export default IconMaterialAlternateEmailW100Filled;
