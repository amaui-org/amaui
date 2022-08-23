import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOnRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOnRoundedW100'
      short_name='GridOn'

      {...props}
    >
      <path d="M17.9 19.4H6.1Q5.45 19.4 5.025 18.975Q4.6 18.55 4.6 17.9V6.1Q4.6 5.45 5.025 5.025Q5.45 4.6 6.1 4.6H17.9Q18.55 4.6 18.975 5.025Q19.4 5.45 19.4 6.1V17.9Q19.4 18.55 18.975 18.975Q18.55 19.4 17.9 19.4ZM9.3 18.7V14.7H5.3V17.9Q5.3 18.2 5.55 18.45Q5.8 18.7 6.1 18.7ZM5.3 14H9.3V10H5.3ZM5.3 9.3H9.3V5.3H6.1Q5.8 5.3 5.55 5.55Q5.3 5.8 5.3 6.1ZM10 18.7H14V14.7H10ZM10 14H14V10H10ZM10 9.3H14V5.3H10ZM14.7 18.7H17.9Q18.2 18.7 18.45 18.45Q18.7 18.2 18.7 17.9V14.7H14.7ZM14.7 14H18.7V10H14.7ZM14.7 9.3H18.7V6.1Q18.7 5.8 18.45 5.55Q18.2 5.3 17.9 5.3H14.7Z"/>
    </Icon>
  );
});

IconMaterialGridOnRoundedW100.displayName = 'AmauiIconMaterialGridOnRoundedW100';

export default IconMaterialGridOnRoundedW100;
