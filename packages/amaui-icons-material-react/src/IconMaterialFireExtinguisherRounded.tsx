import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireExtinguisherRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireExtinguisherRounded'
      short_name='FireExtinguisher'

      {...props}
    >
      <path d="M9 22Q8.175 22 7.588 21.413Q7 20.825 7 20V19H17V20Q17 20.825 16.413 21.413Q15.825 22 15 22ZM7 18V13H17V18ZM7.1 12Q7.35 10.85 8.15 9.837Q8.95 8.825 10.175 8.35Q9.925 8.15 9.725 7.912Q9.525 7.675 9.375 7.4L5 6.5V5.5L9.375 4.6Q9.75 3.875 10.438 3.438Q11.125 3 12 3Q12.525 3 13 3.175Q13.475 3.35 13.85 3.65L17 3V9L13.825 8.35Q13.825 8.35 13.825 8.35Q13.825 8.35 13.825 8.35Q15 8.825 15.812 9.787Q16.625 10.75 16.9 12ZM12 7Q12.425 7 12.713 6.713Q13 6.425 13 6Q12.975 5.55 12.7 5.275Q12.425 5 12 5Q11.575 5 11.288 5.287Q11 5.575 11 6Q11 6.425 11.288 6.713Q11.575 7 12 7Z"/>
    </Icon>
  );
});

IconMaterialFireExtinguisherRounded.displayName = 'AmauiIconMaterialFireExtinguisherRounded';

export default IconMaterialFireExtinguisherRounded;
