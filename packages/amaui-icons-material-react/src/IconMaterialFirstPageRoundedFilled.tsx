import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFirstPageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageRoundedFilled'
      short_name='FirstPage'

      {...props}
    >
      <path d="M16.3 17.3 11.7 12.7Q11.55 12.55 11.488 12.375Q11.425 12.2 11.425 12Q11.425 11.8 11.488 11.625Q11.55 11.45 11.7 11.3L16.3 6.7Q16.575 6.425 17 6.425Q17.425 6.425 17.7 6.7Q17.975 6.975 17.975 7.4Q17.975 7.825 17.7 8.1L13.8 12L17.7 15.9Q17.975 16.175 17.975 16.6Q17.975 17.025 17.7 17.3Q17.425 17.575 17 17.575Q16.575 17.575 16.3 17.3ZM7 18Q6.575 18 6.287 17.712Q6 17.425 6 17V7Q6 6.575 6.287 6.287Q6.575 6 7 6Q7.425 6 7.713 6.287Q8 6.575 8 7V17Q8 17.425 7.713 17.712Q7.425 18 7 18Z"/>
    </Icon>
  );
});

IconMaterialFirstPageRoundedFilled.displayName = 'AmauiIconMaterialFirstPageRoundedFilled';

export default IconMaterialFirstPageRoundedFilled;
