import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSearchRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchRounded'
      short_name='Search'

      {...props}
    >
      <path d="M18.9 20.3 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L20.325 18.925Q20.6 19.2 20.6 19.6Q20.6 20 20.3 20.3Q20.025 20.575 19.6 20.575Q19.175 20.575 18.9 20.3ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14Z"/>
    </Icon>
  );
});

IconMaterialSearchRounded.displayName = 'AmauiIconMaterialSearchRounded';

export default IconMaterialSearchRounded;
