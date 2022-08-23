import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigateNextRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextRoundedFilled'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z"/>
    </Icon>
  );
});

IconMaterialNavigateNextRoundedFilled.displayName = 'AmauiIconMaterialNavigateNextRoundedFilled';

export default IconMaterialNavigateNextRoundedFilled;
