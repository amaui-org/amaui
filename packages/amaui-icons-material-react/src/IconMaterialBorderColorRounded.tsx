import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorRounded'
      short_name='BorderColor'

      {...props}
    >
      <path d="M4 24Q3.175 24 2.588 23.413Q2 22.825 2 22Q2 21.175 2.588 20.587Q3.175 20 4 20H20Q20.825 20 21.413 20.587Q22 21.175 22 22Q22 22.825 21.413 23.413Q20.825 24 20 24ZM5 18Q4.575 18 4.287 17.712Q4 17.425 4 17V14.675Q4 14.475 4.075 14.287Q4.15 14.1 4.3 13.95L13.05 5.2L16.8 8.95L8.05 17.7Q7.9 17.85 7.713 17.925Q7.525 18 7.325 18ZM6 16H6.9L14 8.95L13.05 8L6 15.1ZM17.925 7.85 14.175 4.1 15.975 2.3Q16.25 2 16.675 2.012Q17.1 2.025 17.375 2.3L19.725 4.65Q20 4.925 20 5.338Q20 5.75 19.725 6.05ZM6 16Z"/>
    </Icon>
  );
});

IconMaterialBorderColorRounded.displayName = 'AmauiIconMaterialBorderColorRounded';

export default IconMaterialBorderColorRounded;
