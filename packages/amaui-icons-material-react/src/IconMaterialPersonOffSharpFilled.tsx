import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffSharpFilled'
      short_name='PersonOff'

      {...props}
    >
      <path d="M19.775 22.625 17.15 20H4V17.2Q4 16.35 4.438 15.637Q4.875 14.925 5.6 14.55Q6.725 13.975 7.888 13.625Q9.05 13.275 10.25 13.1Q10.25 13.1 10.25 13.1Q10.25 13.1 10.25 13.1L1.375 4.225L2.8 2.8L21.2 21.2ZM18.4 14.55Q19.125 14.9 19.55 15.613Q19.975 16.325 20 17.15L16.65 13.8Q17.1 13.975 17.538 14.15Q17.975 14.325 18.4 14.55ZM14.2 11.35 8.65 5.8Q9.225 4.95 10.1 4.475Q10.975 4 12 4Q13.65 4 14.825 5.175Q16 6.35 16 8Q16 9.025 15.525 9.9Q15.05 10.775 14.2 11.35Z"/>
    </Icon>
  );
});

IconMaterialPersonOffSharpFilled.displayName = 'AmauiIconMaterialPersonOffSharpFilled';

export default IconMaterialPersonOffSharpFilled;
