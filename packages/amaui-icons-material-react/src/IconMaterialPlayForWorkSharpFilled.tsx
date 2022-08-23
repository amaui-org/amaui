import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayForWorkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkSharpFilled'
      short_name='PlayForWork'

      {...props}
    >
      <path d="M12 20Q9.5 20 7.75 18.25Q6 16.5 6 14H8Q8 15.65 9.175 16.825Q10.35 18 12 18Q13.65 18 14.825 16.825Q16 15.65 16 14H18Q18 16.5 16.25 18.25Q14.5 20 12 20ZM12 14.975 8 10.975 9.4 9.55 11 11.15V5H13V11.15L14.6 9.55L16 10.975Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkSharpFilled.displayName = 'AmauiIconMaterialPlayForWorkSharpFilled';

export default IconMaterialPlayForWorkSharpFilled;
