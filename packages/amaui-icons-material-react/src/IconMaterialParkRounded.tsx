import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkRounded'
      short_name='Park'

      {...props}
    >
      <path d="M12 22Q11.2 22 10.625 21.425Q10.05 20.85 10.05 20.05V18H4.875Q4.275 18 3.975 17.475Q3.675 16.95 4.025 16.45L7 12H6.925Q6.325 12 6.037 11.462Q5.75 10.925 6.1 10.425L11.175 3.175Q11.325 2.975 11.55 2.862Q11.775 2.75 12 2.75Q12.225 2.75 12.45 2.862Q12.675 2.975 12.825 3.175L17.9 10.425Q18.25 10.925 17.962 11.462Q17.675 12 17.075 12H17L19.975 16.45Q20.325 16.95 20.025 17.475Q19.725 18 19.125 18H13.95V20.05Q13.95 20.85 13.375 21.425Q12.8 22 12 22ZM6.75 16H10.75H8.85H12H15.15H13.25H17.25ZM6.75 16H17.25L13.25 10H15.15L12 5.5L8.85 10H10.75Z"/>
    </Icon>
  );
});

IconMaterialParkRounded.displayName = 'AmauiIconMaterialParkRounded';

export default IconMaterialParkRounded;
