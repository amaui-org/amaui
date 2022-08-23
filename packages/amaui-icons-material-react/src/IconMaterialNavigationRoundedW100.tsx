import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationRoundedW100'
      short_name='Navigation'

      {...props}
    >
      <path d="M6.425 18.975Q6.35 19.025 6.25 19Q6.15 18.975 6.1 18.925Q6.05 18.875 6.013 18.788Q5.975 18.7 6.025 18.625L11.325 6.75Q11.525 6.3 12 6.3Q12.475 6.3 12.675 6.75L17.975 18.625Q18.025 18.7 17.988 18.788Q17.95 18.875 17.9 18.925Q17.85 18.975 17.75 19Q17.65 19.025 17.575 18.975L12 16.6ZM7.1 17.9 12 15.8 16.9 17.9 12 6.9ZM12 15.8Z"/>
    </Icon>
  );
});

IconMaterialNavigationRoundedW100.displayName = 'AmauiIconMaterialNavigationRoundedW100';

export default IconMaterialNavigationRoundedW100;
