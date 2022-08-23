import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicRounded'
      short_name='Public'

      {...props}
    >
      <path d="M11 19.95V18Q10.175 18 9.588 17.413Q9 16.825 9 16V15L4.2 10.2Q4.125 10.65 4.062 11.1Q4 11.55 4 12Q4 15.025 5.988 17.3Q7.975 19.575 11 19.95ZM17.9 17.4Q18.925 16.275 19.462 14.887Q20 13.5 20 12Q20 9.55 18.638 7.525Q17.275 5.5 15 4.6V5Q15 5.825 14.413 6.412Q13.825 7 13 7H11V9Q11 9.425 10.713 9.712Q10.425 10 10 10H8V12H14Q14.425 12 14.713 12.287Q15 12.575 15 13V16H16Q16.65 16 17.175 16.387Q17.7 16.775 17.9 17.4ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPublicRounded.displayName = 'AmauiIconMaterialPublicRounded';

export default IconMaterialPublicRounded;
