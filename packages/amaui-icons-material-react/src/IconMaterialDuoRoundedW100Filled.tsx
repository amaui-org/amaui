import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDuoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DuoRoundedW100Filled'
      short_name='Duo'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM8 14.15H13.7V12.15L16.7 14.15V9.45L13.7 11.45V9.45H8Z"/>
    </Icon>
  );
});

IconMaterialDuoRoundedW100Filled.displayName = 'AmauiIconMaterialDuoRoundedW100Filled';

export default IconMaterialDuoRoundedW100Filled;
