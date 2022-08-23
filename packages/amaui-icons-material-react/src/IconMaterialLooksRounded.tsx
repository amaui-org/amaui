import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksRounded'
      short_name='Looks'

      {...props}
    >
      <path d="M6 17Q5.575 17 5.3 16.7Q5.025 16.4 5.075 16Q5.425 13.45 7.388 11.725Q9.35 10 12 10Q14.65 10 16.613 11.725Q18.575 13.45 18.925 16Q18.975 16.4 18.7 16.7Q18.425 17 18 17Q17.6 17 17.3 16.725Q17 16.45 16.9 16.025Q16.55 14.3 15.188 13.15Q13.825 12 12 12Q10.175 12 8.812 13.15Q7.45 14.3 7.1 16.025Q7 16.45 6.7 16.725Q6.4 17 6 17ZM2 17Q1.575 17 1.288 16.7Q1 16.4 1.05 16Q1.25 13.9 2.175 12.075Q3.1 10.25 4.562 8.9Q6.025 7.55 7.938 6.775Q9.85 6 12 6Q14.15 6 16.062 6.775Q17.975 7.55 19.438 8.9Q20.9 10.25 21.838 12.075Q22.775 13.9 22.95 16Q23 16.4 22.712 16.7Q22.425 17 22 17Q21.6 17 21.3 16.712Q21 16.425 20.95 16Q20.575 12.6 18.038 10.3Q15.5 8 12 8Q8.5 8 5.963 10.3Q3.425 12.6 3.05 16Q3 16.425 2.713 16.712Q2.425 17 2 17Z"/>
    </Icon>
  );
});

IconMaterialLooksRounded.displayName = 'AmauiIconMaterialLooksRounded';

export default IconMaterialLooksRounded;
