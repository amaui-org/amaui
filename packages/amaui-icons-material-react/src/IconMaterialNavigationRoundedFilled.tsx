import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationRoundedFilled'
      short_name='Navigation'

      {...props}
    >
      <path d="M5.675 20.725Q5.375 20.85 5.062 20.788Q4.75 20.725 4.525 20.5Q4.3 20.275 4.237 19.962Q4.175 19.65 4.3 19.35L11.1 4.05Q11.375 3.45 12.025 3.45Q12.675 3.45 12.95 4.05L19.75 19.35Q19.875 19.65 19.812 19.962Q19.75 20.275 19.525 20.5Q19.3 20.725 18.988 20.788Q18.675 20.85 18.375 20.725L12.025 18Z"/>
    </Icon>
  );
});

IconMaterialNavigationRoundedFilled.displayName = 'AmauiIconMaterialNavigationRoundedFilled';

export default IconMaterialNavigationRoundedFilled;
