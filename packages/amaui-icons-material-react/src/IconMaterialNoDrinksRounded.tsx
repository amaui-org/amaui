import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksRounded'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M7 21Q6.575 21 6.287 20.712Q6 20.425 6 20Q6 19.575 6.287 19.288Q6.575 19 7 19H11V14L9.8 12.65L2.1 4.925Q1.825 4.65 1.825 4.237Q1.825 3.825 2.1 3.525Q2.4 3.225 2.812 3.225Q3.225 3.225 3.525 3.525L20.5 20.5Q20.8 20.8 20.8 21.2Q20.8 21.6 20.5 21.9Q20.2 22.2 19.788 22.2Q19.375 22.2 19.075 21.9L13 15.85V19H17.025Q17.45 19 17.725 19.288Q18 19.575 18 20Q18 20.425 17.712 20.712Q17.425 21 17 21ZM5.85 3H19.55Q20.15 3 20.575 3.438Q21 3.875 21 4.475Q21 4.75 20.913 4.975Q20.825 5.2 20.65 5.4L14.8 11.95L13.375 10.575L14.775 9H11.825L9.85 7H16.55L18.35 5H7.85ZM12.6 9.775Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksRounded.displayName = 'AmauiIconMaterialNoDrinksRounded';

export default IconMaterialNoDrinksRounded;
