import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowRounded'
      short_name='Bungalow'

      {...props}
    >
      <path d="M8 21Q7.575 21 7.287 20.712Q7 20.425 7 20V14.8L6.425 15.725Q6.2 16.075 5.8 16.163Q5.4 16.25 5.05 16.025Q4.7 15.8 4.6 15.4Q4.5 15 4.725 14.65L11.15 4.35Q11.3 4.1 11.525 4Q11.75 3.9 12 3.9Q12.25 3.9 12.475 4Q12.7 4.1 12.85 4.35L19.275 14.65Q19.5 15 19.4 15.4Q19.3 15.8 18.95 16.025Q18.6 16.25 18.2 16.15Q17.8 16.05 17.575 15.7L17 14.8V20Q17 20.425 16.712 20.712Q16.425 21 16 21ZM9 19H11V17Q11 16.575 11.288 16.288Q11.575 16 12 16Q12.425 16 12.713 16.288Q13 16.575 13 17V19H15V11.6L12 6.8L9 11.6ZM12 14Q11.575 14 11.288 13.712Q11 13.425 11 13Q11 12.575 11.288 12.287Q11.575 12 12 12Q12.425 12 12.713 12.287Q13 12.575 13 13Q13 13.425 12.713 13.712Q12.425 14 12 14ZM9 19H11H13H15H12H9Z"/>
    </Icon>
  );
});

IconMaterialBungalowRounded.displayName = 'AmauiIconMaterialBungalowRounded';

export default IconMaterialBungalowRounded;
