import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineWeightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightRoundedFilled'
      short_name='LineWeight'

      {...props}
    >
      <path d="M3.975 17Q3.55 17 3.275 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H20.025Q20.45 15 20.725 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM3.475 20Q3.275 20 3.138 19.85Q3 19.7 3 19.5Q3 19.3 3.15 19.15Q3.3 19 3.5 19H20.525Q20.725 19 20.863 19.15Q21 19.3 21 19.5Q21 19.7 20.85 19.85Q20.7 20 20.5 20ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12V11Q3 10.575 3.288 10.287Q3.575 10 4 10H20Q20.425 10 20.712 10.287Q21 10.575 21 11V12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM4 8Q3.575 8 3.288 7.713Q3 7.425 3 7V5Q3 4.575 3.288 4.287Q3.575 4 4 4H20Q20.425 4 20.712 4.287Q21 4.575 21 5V7Q21 7.425 20.712 7.713Q20.425 8 20 8Z"/>
    </Icon>
  );
});

IconMaterialLineWeightRoundedFilled.displayName = 'AmauiIconMaterialLineWeightRoundedFilled';

export default IconMaterialLineWeightRoundedFilled;
