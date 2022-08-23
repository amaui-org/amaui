import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLegendToggleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleRounded'
      short_name='LegendToggle'

      {...props}
    >
      <path d="M9.925 7.4 5.525 10.075Q5.025 10.375 4.513 10.087Q4 9.8 4 9.225Q4 8.95 4.125 8.712Q4.25 8.475 4.475 8.35L10 5L15 8.55L18.425 6.125Q18.925 5.775 19.462 6.05Q20 6.325 20 6.925Q20 7.175 19.888 7.4Q19.775 7.625 19.575 7.75L15 11ZM5 15Q4.575 15 4.287 14.712Q4 14.425 4 14Q4 13.575 4.287 13.287Q4.575 13 5 13H19Q19.425 13 19.712 13.287Q20 13.575 20 14Q20 14.425 19.712 14.712Q19.425 15 19 15ZM5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleRounded.displayName = 'AmauiIconMaterialLegendToggleRounded';

export default IconMaterialLegendToggleRounded;
