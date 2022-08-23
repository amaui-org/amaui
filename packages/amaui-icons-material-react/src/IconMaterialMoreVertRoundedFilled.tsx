import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreVertRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreVertRoundedFilled'
      short_name='MoreVert'

      {...props}
    >
      <path d="M12 20Q11.175 20 10.588 19.413Q10 18.825 10 18Q10 17.175 10.588 16.587Q11.175 16 12 16Q12.825 16 13.413 16.587Q14 17.175 14 18Q14 18.825 13.413 19.413Q12.825 20 12 20ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14ZM12 8Q11.175 8 10.588 7.412Q10 6.825 10 6Q10 5.175 10.588 4.588Q11.175 4 12 4Q12.825 4 13.413 4.588Q14 5.175 14 6Q14 6.825 13.413 7.412Q12.825 8 12 8Z"/>
    </Icon>
  );
});

IconMaterialMoreVertRoundedFilled.displayName = 'AmauiIconMaterialMoreVertRoundedFilled';

export default IconMaterialMoreVertRoundedFilled;
