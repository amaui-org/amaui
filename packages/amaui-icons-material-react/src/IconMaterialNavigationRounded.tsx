import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationRounded'
      short_name='Navigation'

      {...props}
    >
      <path d="M5.65 20.725Q5.35 20.85 5.038 20.788Q4.725 20.725 4.5 20.5Q4.275 20.275 4.213 19.962Q4.15 19.65 4.275 19.35L11.075 4.05Q11.35 3.45 12 3.45Q12.65 3.45 12.925 4.05L19.725 19.35Q19.85 19.65 19.788 19.962Q19.725 20.275 19.5 20.5Q19.275 20.725 18.963 20.788Q18.65 20.85 18.35 20.725L12 18ZM7.1 17.9 12 15.8 16.9 17.9 12 6.9ZM12 15.8Z"/>
    </Icon>
  );
});

IconMaterialNavigationRounded.displayName = 'AmauiIconMaterialNavigationRounded';

export default IconMaterialNavigationRounded;
