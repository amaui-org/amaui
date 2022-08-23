import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVpnKeyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyRoundedW100Filled'
      short_name='VpnKey'

      {...props}
    >
      <path d="M7 16.7Q5.05 16.7 3.675 15.325Q2.3 13.95 2.3 12Q2.3 10.05 3.675 8.675Q5.05 7.3 7 7.3Q8.775 7.3 10.012 8.375Q11.25 9.45 11.6 11H20.7Q21.125 11 21.413 11.287Q21.7 11.575 21.7 12Q21.7 12.425 21.413 12.712Q21.125 13 20.7 13H19.25V15.2Q19.25 15.6 18.962 15.9Q18.675 16.2 18.25 16.2Q17.85 16.2 17.55 15.9Q17.25 15.6 17.25 15.2V13H11.6Q11.25 14.55 10.012 15.625Q8.775 16.7 7 16.7ZM7 13Q7.425 13 7.713 12.7Q8 12.4 8 12Q8 11.575 7.713 11.287Q7.425 11 7 11Q6.6 11 6.3 11.287Q6 11.575 6 12Q6 12.4 6.3 12.7Q6.6 13 7 13Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyRoundedW100Filled.displayName = 'AmauiIconMaterialVpnKeyRoundedW100Filled';

export default IconMaterialVpnKeyRoundedW100Filled;
