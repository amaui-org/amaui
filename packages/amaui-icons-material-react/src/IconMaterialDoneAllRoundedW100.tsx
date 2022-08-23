import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneAllRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllRoundedW100'
      short_name='DoneAll'

      {...props}
    >
      <path d="M6.7 16.8Q6.55 16.8 6.425 16.75Q6.3 16.7 6.175 16.575L2.2 12.6Q2.075 12.475 2.075 12.35Q2.075 12.225 2.2 12.1Q2.325 11.975 2.45 11.975Q2.575 11.975 2.7 12.1L6.7 16.1L7.6 15.2L8.1 15.7L7.225 16.575Q7.1 16.7 6.975 16.75Q6.85 16.8 6.7 16.8ZM12.35 16.8Q12.2 16.8 12.075 16.75Q11.95 16.7 11.825 16.575L7.85 12.6Q7.725 12.475 7.725 12.35Q7.725 12.225 7.85 12.1Q7.975 11.975 8.1 11.975Q8.225 11.975 8.35 12.1L12.35 16.1L21.3 7.15Q21.425 7.025 21.55 7.025Q21.675 7.025 21.8 7.15Q21.925 7.275 21.925 7.4Q21.925 7.525 21.8 7.65L12.875 16.575Q12.75 16.7 12.625 16.75Q12.5 16.8 12.35 16.8ZM11.45 12.35 10.95 11.85 15.65 7.15Q15.775 7.025 15.9 7.025Q16.025 7.025 16.15 7.15Q16.275 7.275 16.275 7.4Q16.275 7.525 16.15 7.65Z"/>
    </Icon>
  );
});

IconMaterialDoneAllRoundedW100.displayName = 'AmauiIconMaterialDoneAllRoundedW100';

export default IconMaterialDoneAllRoundedW100;
