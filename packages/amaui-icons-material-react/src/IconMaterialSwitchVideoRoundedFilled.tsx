import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchVideoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoRoundedFilled'
      short_name='SwitchVideo'

      {...props}
    >
      <path d="M6.825 14.825Q7.1 15.1 7.5 15.1Q7.9 15.1 8.2 14.8Q8.475 14.525 8.475 14.1Q8.475 13.675 8.2 13.4L7.8 13H12.2L11.775 13.425Q11.5 13.7 11.5 14.1Q11.5 14.5 11.8 14.8Q12.075 15.075 12.5 15.075Q12.925 15.075 13.2 14.8L15.3 12.7Q15.45 12.55 15.513 12.375Q15.575 12.2 15.575 12Q15.575 11.8 15.513 11.625Q15.45 11.45 15.3 11.3L13.175 9.175Q12.9 8.9 12.5 8.9Q12.1 8.9 11.8 9.2Q11.525 9.475 11.525 9.9Q11.525 10.325 11.8 10.6L12.2 11H7.8L8.225 10.575Q8.5 10.3 8.5 9.9Q8.5 9.5 8.2 9.2Q7.925 8.925 7.5 8.925Q7.075 8.925 6.8 9.2L4.7 11.3Q4.55 11.45 4.487 11.625Q4.425 11.8 4.425 12Q4.425 12.2 4.487 12.375Q4.55 12.55 4.7 12.7ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.375 7.125 21.688 7.237Q22 7.35 22 7.7V16.3Q22 16.65 21.688 16.762Q21.375 16.875 21.15 16.65L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoRoundedFilled.displayName = 'AmauiIconMaterialSwitchVideoRoundedFilled';

export default IconMaterialSwitchVideoRoundedFilled;
