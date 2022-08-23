import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationSharpW100Filled'
      short_name='AddLocation'

      {...props}
    >
      <path d="M12 19.325Q11.825 19.325 11.7 19.212Q11.575 19.1 11.45 18.9Q11.025 18.025 10.45 17.137Q9.875 16.25 8.9 14.975Q7.775 13.525 7.038 12.162Q6.3 10.8 6.3 9Q6.3 6.625 7.963 4.962Q9.625 3.3 12 3.3Q14.375 3.3 16.038 4.962Q17.7 6.625 17.7 9Q17.7 10.95 16.913 12.3Q16.125 13.65 15.1 14.975Q14.075 16.3 13.525 17.163Q12.975 18.025 12.55 18.9Q12.425 19.1 12.3 19.212Q12.175 19.325 12 19.325ZM11.65 11.35H12.35V9.35H14.35V8.65H12.35V6.65H11.65V8.65H9.65V9.35H11.65Z"/>
    </Icon>
  );
});

IconMaterialAddLocationSharpW100Filled.displayName = 'AmauiIconMaterialAddLocationSharpW100Filled';

export default IconMaterialAddLocationSharpW100Filled;
