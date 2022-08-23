import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenRoundedFilled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M4 9.5V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V9.5ZM9 8Q9.425 8 9.713 7.713Q10 7.425 10 7V6Q10 5.575 9.713 5.287Q9.425 5 9 5Q8.575 5 8.288 5.287Q8 5.575 8 6V7Q8 7.425 8.288 7.713Q8.575 8 9 8ZM9 17Q9.425 17 9.713 16.712Q10 16.425 10 16V13Q10 12.575 9.713 12.287Q9.425 12 9 12Q8.575 12 8.288 12.287Q8 12.575 8 13V16Q8 16.425 8.288 16.712Q8.575 17 9 17ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V10.5H20V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialKitchenRoundedFilled.displayName = 'AmauiIconMaterialKitchenRoundedFilled';

export default IconMaterialKitchenRoundedFilled;
