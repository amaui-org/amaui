import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDehazeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeRoundedFilled'
      short_name='Dehaze'

      {...props}
    >
      <path d="M3 18Q2.575 18 2.288 17.712Q2 17.425 2 17Q2 16.575 2.288 16.288Q2.575 16 3 16H21Q21.425 16 21.712 16.288Q22 16.575 22 17Q22 17.425 21.712 17.712Q21.425 18 21 18ZM3 13Q2.575 13 2.288 12.712Q2 12.425 2 12Q2 11.575 2.288 11.287Q2.575 11 3 11H21Q21.425 11 21.712 11.287Q22 11.575 22 12Q22 12.425 21.712 12.712Q21.425 13 21 13ZM3 8Q2.575 8 2.288 7.713Q2 7.425 2 7Q2 6.575 2.288 6.287Q2.575 6 3 6H21Q21.425 6 21.712 6.287Q22 6.575 22 7Q22 7.425 21.712 7.713Q21.425 8 21 8Z"/>
    </Icon>
  );
});

IconMaterialDehazeRoundedFilled.displayName = 'AmauiIconMaterialDehazeRoundedFilled';

export default IconMaterialDehazeRoundedFilled;
