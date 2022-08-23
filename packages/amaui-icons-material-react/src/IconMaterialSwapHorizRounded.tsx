import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapHorizRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizRounded'
      short_name='SwapHoriz'

      {...props}
    >
      <path d="M16.3 13.275Q16.025 13 16.025 12.575Q16.025 12.15 16.3 11.875L18.175 10H12Q11.575 10 11.288 9.712Q11 9.425 11 9Q11 8.575 11.288 8.287Q11.575 8 12 8H18.175L16.3 6.125Q16.025 5.85 16.025 5.412Q16.025 4.975 16.3 4.7Q16.575 4.425 17 4.425Q17.425 4.425 17.7 4.7L21.3 8.3Q21.45 8.45 21.513 8.625Q21.575 8.8 21.575 9Q21.575 9.2 21.513 9.375Q21.45 9.55 21.3 9.7L17.7 13.3Q17.425 13.575 17 13.562Q16.575 13.55 16.3 13.275ZM6.3 19.3 2.7 15.7Q2.55 15.55 2.488 15.375Q2.425 15.2 2.425 15Q2.425 14.8 2.488 14.625Q2.55 14.45 2.7 14.3L6.3 10.7Q6.575 10.425 7 10.425Q7.425 10.425 7.7 10.7Q7.975 10.975 7.975 11.412Q7.975 11.85 7.7 12.125L5.825 14H12Q12.425 14 12.713 14.287Q13 14.575 13 15Q13 15.425 12.713 15.712Q12.425 16 12 16H5.825L7.7 17.875Q7.975 18.15 7.975 18.575Q7.975 19 7.7 19.275Q7.425 19.55 7 19.562Q6.575 19.575 6.3 19.3Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizRounded.displayName = 'AmauiIconMaterialSwapHorizRounded';

export default IconMaterialSwapHorizRounded;
