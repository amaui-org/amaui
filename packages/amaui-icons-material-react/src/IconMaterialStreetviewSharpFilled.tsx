import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStreetviewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreetviewSharpFilled'
      short_name='Streetview'

      {...props}
    >
      <path d="M18 11Q15.925 11 14.463 9.537Q13 8.075 13 6Q13 3.925 14.463 2.462Q15.925 1 18 1Q20.075 1 21.538 2.462Q23 3.925 23 6Q23 8.075 21.538 9.537Q20.075 11 18 11ZM3.6 20.4Q3.325 20.125 3.163 19.775Q3 19.425 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H11.7Q11.35 3.675 11.175 4.437Q11 5.2 11 6Q11 7.475 11.55 8.737Q12.1 10 13.05 10.95ZM12 21V15.6Q12 14.55 12.637 13.712Q13.275 12.875 14.3 12.65Q15.175 12.45 16.1 12.35Q17.025 12.25 18 12.25Q18.8 12.25 19.538 12.312Q20.275 12.375 21 12.5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialStreetviewSharpFilled.displayName = 'AmauiIconMaterialStreetviewSharpFilled';

export default IconMaterialStreetviewSharpFilled;
