import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarRounded'
      short_name='TableBar'

      {...props}
    >
      <path d="M9.2 17 8.225 19.425Q8.1 19.7 7.875 19.85Q7.65 20 7.375 20Q6.875 20 6.588 19.587Q6.3 19.175 6.5 18.725L7.5 16.25Q7.725 15.675 8.225 15.337Q8.725 15 9.35 15H11V10.975Q7.175 10.85 4.588 9.85Q2 8.85 2 7.5Q2 6.05 4.925 5.025Q7.85 4 12 4Q16.175 4 19.087 5.025Q22 6.05 22 7.5Q22 8.85 19.413 9.85Q16.825 10.85 13 10.975V15H14.65Q15.25 15 15.763 15.337Q16.275 15.675 16.5 16.25L17.5 18.725Q17.6 18.95 17.562 19.175Q17.525 19.4 17.4 19.587Q17.275 19.775 17.075 19.887Q16.875 20 16.625 20Q16.35 20 16.125 19.85Q15.9 19.7 15.775 19.425L14.8 17ZM12 9Q14.425 9 16.575 8.575Q18.725 8.15 19.725 7.5Q18.725 6.85 16.575 6.425Q14.425 6 12 6Q9.575 6 7.425 6.425Q5.275 6.85 4.275 7.5Q5.275 8.15 7.425 8.575Q9.575 9 12 9ZM12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Z"/>
    </Icon>
  );
});

IconMaterialTableBarRounded.displayName = 'AmauiIconMaterialTableBarRounded';

export default IconMaterialTableBarRounded;
