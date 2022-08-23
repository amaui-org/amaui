import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightRoundedFilled'
      short_name='Height'

      {...props}
    >
      <path d="M12 20.575Q11.8 20.575 11.625 20.512Q11.45 20.45 11.3 20.3L8.675 17.675Q8.4 17.4 8.4 17Q8.4 16.6 8.7 16.3Q8.975 16.025 9.4 16.025Q9.825 16.025 10.1 16.3L11 17.2V6.8L10.075 7.725Q9.8 8 9.4 8Q9 8 8.7 7.7Q8.425 7.425 8.425 7Q8.425 6.575 8.7 6.3L11.3 3.7Q11.45 3.55 11.625 3.487Q11.8 3.425 12 3.425Q12.2 3.425 12.375 3.487Q12.55 3.55 12.7 3.7L15.325 6.325Q15.6 6.6 15.6 7Q15.6 7.4 15.3 7.7Q15.025 7.975 14.6 7.975Q14.175 7.975 13.9 7.7L13 6.8V17.2L13.925 16.275Q14.2 16 14.6 16Q15 16 15.3 16.3Q15.575 16.575 15.575 17Q15.575 17.425 15.3 17.7L12.7 20.3Q12.55 20.45 12.375 20.512Q12.2 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialHeightRoundedFilled.displayName = 'AmauiIconMaterialHeightRoundedFilled';

export default IconMaterialHeightRoundedFilled;
