import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsMmaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaSharpFilled'
      short_name='SportsMma'

      {...props}
    >
      <path d="M7 21V17H17V21ZM6 16 5.05 11.2Q5 11.075 5 11Q5 10.925 5 10.8V5Q5 4.175 5.588 3.587Q6.175 3 7 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V8Q17 7.575 17.288 7.287Q17.575 7 18 7Q18.425 7 18.712 7.287Q19 7.575 19 8V10.8Q19 10.925 19 11Q19 11.075 18.95 11.2L18 16ZM8 10H14V7H8Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaSharpFilled.displayName = 'AmauiIconMaterialSportsMmaSharpFilled';

export default IconMaterialSportsMmaSharpFilled;
