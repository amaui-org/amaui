import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenRounded'
      short_name='Kitchen'

      {...props}
    >
      <path d="M9 8Q8.575 8 8.288 7.713Q8 7.425 8 7V6Q8 5.575 8.288 5.287Q8.575 5 9 5Q9.425 5 9.713 5.287Q10 5.575 10 6V7Q10 7.425 9.713 7.713Q9.425 8 9 8ZM9 17Q8.575 17 8.288 16.712Q8 16.425 8 16V13Q8 12.575 8.288 12.287Q8.575 12 9 12Q9.425 12 9.713 12.287Q10 12.575 10 13V16Q10 16.425 9.713 16.712Q9.425 17 9 17ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V11H6V20Q6 20 6 20Q6 20 6 20ZM6 9H18V4Q18 4 18 4Q18 4 18 4H6Q6 4 6 4Q6 4 6 4Z"/>
    </Icon>
  );
});

IconMaterialKitchenRounded.displayName = 'AmauiIconMaterialKitchenRounded';

export default IconMaterialKitchenRounded;
