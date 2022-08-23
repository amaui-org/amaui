import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEastRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastRoundedFilled'
      short_name='East'

      {...props}
    >
      <path d="M14.3 18.3Q14.025 18.025 14.025 17.6Q14.025 17.175 14.3 16.9L18.2 13H3Q2.575 13 2.288 12.712Q2 12.425 2 12Q2 11.575 2.288 11.287Q2.575 11 3 11H18.2L14.3 7.1Q14.025 6.825 14.025 6.4Q14.025 5.975 14.3 5.7Q14.575 5.425 15 5.425Q15.425 5.425 15.7 5.7L21.3 11.3Q21.45 11.45 21.513 11.625Q21.575 11.8 21.575 12Q21.575 12.2 21.513 12.375Q21.45 12.55 21.3 12.7L15.7 18.3Q15.425 18.575 15 18.575Q14.575 18.575 14.3 18.3Z"/>
    </Icon>
  );
});

IconMaterialEastRoundedFilled.displayName = 'AmauiIconMaterialEastRoundedFilled';

export default IconMaterialEastRoundedFilled;
