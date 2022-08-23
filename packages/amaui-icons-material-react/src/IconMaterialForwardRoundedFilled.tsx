import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardRoundedFilled'
      short_name='Forward'

      {...props}
    >
      <path d="M4 19Q3.575 19 3.288 18.712Q3 18.425 3 18V15Q3 12.925 4.463 11.462Q5.925 10 8 10H17.2L14.275 7.075Q14 6.8 14 6.4Q14 6 14.3 5.7Q14.575 5.425 15 5.425Q15.425 5.425 15.7 5.7L20.3 10.3Q20.45 10.45 20.513 10.625Q20.575 10.8 20.575 11Q20.575 11.2 20.513 11.375Q20.45 11.55 20.3 11.7L15.675 16.325Q15.4 16.6 15 16.6Q14.6 16.6 14.3 16.3Q14.025 16.025 14.025 15.6Q14.025 15.175 14.3 14.9L17.2 12H8Q6.75 12 5.875 12.875Q5 13.75 5 15V18Q5 18.425 4.713 18.712Q4.425 19 4 19Z"/>
    </Icon>
  );
});

IconMaterialForwardRoundedFilled.displayName = 'AmauiIconMaterialForwardRoundedFilled';

export default IconMaterialForwardRoundedFilled;
