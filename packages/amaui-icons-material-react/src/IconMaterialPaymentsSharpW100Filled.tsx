import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsSharpW100Filled'
      short_name='Payments'

      {...props}
    >
      <path d="M13.35 12.25Q14.075 12.25 14.562 11.762Q15.05 11.275 15.05 10.55Q15.05 9.825 14.562 9.337Q14.075 8.85 13.35 8.85Q12.625 8.85 12.137 9.337Q11.65 9.825 11.65 10.55Q11.65 11.275 12.137 11.762Q12.625 12.25 13.35 12.25ZM5.9 15.5V5.6H20.8V15.5ZM3.2 18.2V8.55H3.9V17.5H17.85V18.2ZM6.6 7.8Q7.225 7.8 7.662 7.363Q8.1 6.925 8.1 6.3H6.6ZM20.1 7.8V6.3H18.6Q18.6 6.925 19.038 7.363Q19.475 7.8 20.1 7.8ZM18.6 14.8H20.1V13.3Q19.475 13.3 19.038 13.737Q18.6 14.175 18.6 14.8ZM6.6 14.8H8.1Q8.1 14.175 7.662 13.737Q7.225 13.3 6.6 13.3Z"/>
    </Icon>
  );
});

IconMaterialPaymentsSharpW100Filled.displayName = 'AmauiIconMaterialPaymentsSharpW100Filled';

export default IconMaterialPaymentsSharpW100Filled;
