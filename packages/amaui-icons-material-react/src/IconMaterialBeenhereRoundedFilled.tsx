import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeenhereRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereRoundedFilled'
      short_name='Beenhere'

      {...props}
    >
      <path d="M12 22.5Q11.675 22.5 11.375 22.4Q11.075 22.3 10.8 22.1L4.8 17.6Q4.425 17.325 4.213 16.9Q4 16.475 4 16V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.475 19.788 16.9Q19.575 17.325 19.2 17.6L13.2 22.1Q12.925 22.3 12.625 22.4Q12.325 22.5 12 22.5ZM10.95 14.575Q11.15 14.575 11.325 14.512Q11.5 14.45 11.65 14.3L15.9 10.05Q16.2 9.75 16.188 9.35Q16.175 8.95 15.9 8.65Q15.6 8.35 15.188 8.337Q14.775 8.325 14.475 8.625L10.95 12.15L9.55 10.75Q9.4 10.6 9.225 10.525Q9.05 10.45 8.863 10.45Q8.675 10.45 8.488 10.525Q8.3 10.6 8.15 10.75Q7.85 11.05 7.838 11.462Q7.825 11.875 8.125 12.175L10.25 14.3Q10.4 14.45 10.575 14.512Q10.75 14.575 10.95 14.575Z"/>
    </Icon>
  );
});

IconMaterialBeenhereRoundedFilled.displayName = 'AmauiIconMaterialBeenhereRoundedFilled';

export default IconMaterialBeenhereRoundedFilled;
