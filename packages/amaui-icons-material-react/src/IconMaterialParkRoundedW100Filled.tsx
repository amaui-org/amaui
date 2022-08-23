import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkRoundedW100Filled'
      short_name='Park'

      {...props}
    >
      <path d="M12 20.7Q11.725 20.7 11.513 20.487Q11.3 20.275 11.3 20V16.7H6.85Q6.4 16.7 6.175 16.3Q5.95 15.9 6.225 15.525L9.45 10.7H8.95Q8.475 10.7 8.262 10.3Q8.05 9.9 8.325 9.525L11.375 5.125Q11.5 4.975 11.663 4.887Q11.825 4.8 12 4.8Q12.175 4.8 12.338 4.887Q12.5 4.975 12.625 5.125L15.675 9.525Q15.95 9.9 15.738 10.3Q15.525 10.7 15.05 10.7H14.55L17.775 15.525Q18.05 15.9 17.825 16.3Q17.6 16.7 17.15 16.7H12.7V20Q12.7 20.3 12.5 20.5Q12.3 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialParkRoundedW100Filled.displayName = 'AmauiIconMaterialParkRoundedW100Filled';

export default IconMaterialParkRoundedW100Filled;
