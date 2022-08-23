import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorRoundedW100'
      short_name='BorderColor'

      {...props}
    >
      <path d="M2.7 24Q2.425 24 2.213 23.8Q2 23.6 2 23.3Q2 23.025 2.213 22.812Q2.425 22.6 2.7 22.6H21.3Q21.575 22.6 21.788 22.8Q22 23 22 23.3Q22 23.575 21.788 23.788Q21.575 24 21.3 24ZM6.05 19.3Q5.725 19.3 5.513 19.087Q5.3 18.875 5.3 18.55V17.65Q5.3 17.5 5.35 17.375Q5.4 17.25 5.525 17.125L14.05 8.65L15.95 10.55L7.475 19.075Q7.35 19.2 7.225 19.25Q7.1 19.3 6.95 19.3ZM6 18.6H6.9L14.95 10.55L14.05 9.65L6 17.7ZM16.775 9.6 14.875 7.75 15.825 6.8Q16.1 6.525 16.5 6.525Q16.9 6.525 17.175 6.8L17.675 7.3Q17.95 7.575 17.975 7.975Q18 8.375 17.725 8.65ZM6 18.6Z"/>
    </Icon>
  );
});

IconMaterialBorderColorRoundedW100.displayName = 'AmauiIconMaterialBorderColorRoundedW100';

export default IconMaterialBorderColorRoundedW100;
