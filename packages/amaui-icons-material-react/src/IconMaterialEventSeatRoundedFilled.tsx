import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSeatRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatRoundedFilled'
      short_name='EventSeat'

      {...props}
    >
      <path d="M12 17H18Q18.425 17 18.712 16.712Q19 16.425 19 16V12Q19 11.575 18.712 11.287Q18.425 11 18 11H12Q11.575 11 11.288 11.287Q11 11.575 11 12V16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialEventSeatRoundedFilled.displayName = 'AmauiIconMaterialEventSeatRoundedFilled';

export default IconMaterialEventSeatRoundedFilled;
