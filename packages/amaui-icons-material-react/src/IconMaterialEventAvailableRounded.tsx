import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventAvailableRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableRounded'
      short_name='EventAvailable'

      {...props}
    >
      <path d="M10.25 17.65 8.125 15.525Q7.825 15.225 7.825 14.8Q7.825 14.375 8.125 14.075Q8.425 13.775 8.85 13.775Q9.275 13.775 9.575 14.075L10.95 15.45L14.425 11.975Q14.725 11.675 15.15 11.675Q15.575 11.675 15.875 11.975Q16.175 12.275 16.175 12.7Q16.175 13.125 15.875 13.425L11.65 17.65Q11.35 17.95 10.95 17.95Q10.55 17.95 10.25 17.65ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V3Q6 2.575 6.287 2.287Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V3Q16 2.575 16.288 2.287Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z"/>
    </Icon>
  );
});

IconMaterialEventAvailableRounded.displayName = 'AmauiIconMaterialEventAvailableRounded';

export default IconMaterialEventAvailableRounded;
