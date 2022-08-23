import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronLeftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftRounded'
      short_name='ChevronLeft'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z"/>
    </Icon>
  );
});

IconMaterialChevronLeftRounded.displayName = 'AmauiIconMaterialChevronLeftRounded';

export default IconMaterialChevronLeftRounded;
