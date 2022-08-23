import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsSharpW100'
      short_name='Payments'

      {...props}
    >
      <path d="M13.35 12.25Q12.625 12.25 12.137 11.762Q11.65 11.275 11.65 10.55Q11.65 9.825 12.137 9.337Q12.625 8.85 13.35 8.85Q14.075 8.85 14.562 9.337Q15.05 9.825 15.05 10.55Q15.05 11.275 14.562 11.762Q14.075 12.25 13.35 12.25ZM5.9 15.5V5.6H20.8V15.5ZM8.1 14.8H18.6Q18.6 14.175 19.038 13.737Q19.475 13.3 20.1 13.3V7.8Q19.475 7.8 19.038 7.363Q18.6 6.925 18.6 6.3H8.1Q8.1 6.925 7.662 7.363Q7.225 7.8 6.6 7.8V13.3Q7.225 13.3 7.662 13.737Q8.1 14.175 8.1 14.8ZM3.2 18.2V8.55H3.9V17.5H17.85V18.2ZM6.6 14.8V6.3Z"/>
    </Icon>
  );
});

IconMaterialPaymentsSharpW100.displayName = 'AmauiIconMaterialPaymentsSharpW100';

export default IconMaterialPaymentsSharpW100;
