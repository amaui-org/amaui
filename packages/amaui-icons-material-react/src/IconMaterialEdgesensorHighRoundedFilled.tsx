import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorHighRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighRoundedFilled'
      short_name='EdgesensorHigh'

      {...props}
    >
      <path d="M4 14Q3.575 14 3.288 13.712Q3 13.425 3 13V8Q3 7.575 3.288 7.287Q3.575 7 4 7Q4.425 7 4.713 7.287Q5 7.575 5 8V13Q5 13.425 4.713 13.712Q4.425 14 4 14ZM1 17Q0.575 17 0.288 16.712Q0 16.425 0 16V11Q0 10.575 0.288 10.287Q0.575 10 1 10Q1.425 10 1.712 10.287Q2 10.575 2 11V16Q2 16.425 1.712 16.712Q1.425 17 1 17ZM23 14Q22.575 14 22.288 13.712Q22 13.425 22 13V8Q22 7.575 22.288 7.287Q22.575 7 23 7Q23.425 7 23.712 7.287Q24 7.575 24 8V13Q24 13.425 23.712 13.712Q23.425 14 23 14ZM20 17Q19.575 17 19.288 16.712Q19 16.425 19 16V11Q19 10.575 19.288 10.287Q19.575 10 20 10Q20.425 10 20.712 10.287Q21 10.575 21 11V16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM8 22Q7.175 22 6.588 21.413Q6 20.825 6 20V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V20Q18 20.825 17.413 21.413Q16.825 22 16 22ZM8 17H16V7H8Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighRoundedFilled.displayName = 'AmauiIconMaterialEdgesensorHighRoundedFilled';

export default IconMaterialEdgesensorHighRoundedFilled;
