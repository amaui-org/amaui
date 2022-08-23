import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneAllRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllRoundedFilled'
      short_name='DoneAll'

      {...props}
    >
      <path d="M6.7 17.6Q6.5 17.6 6.325 17.525Q6.15 17.45 6 17.3L1.775 13.075Q1.5 12.8 1.5 12.362Q1.5 11.925 1.775 11.65Q2.05 11.375 2.475 11.375Q2.9 11.375 3.175 11.65L6.725 15.2L8.125 16.6L7.4 17.3Q7.25 17.45 7.075 17.525Q6.9 17.6 6.7 17.6ZM12.35 17.575Q12.15 17.575 11.975 17.512Q11.8 17.45 11.65 17.3L7.4 13.05Q7.125 12.775 7.125 12.337Q7.125 11.9 7.4 11.625Q7.675 11.35 8.1 11.35Q8.525 11.35 8.8 11.625L12.35 15.175L20.85 6.675Q21.125 6.4 21.55 6.4Q21.975 6.4 22.25 6.675Q22.525 6.95 22.525 7.387Q22.525 7.825 22.25 8.1L13.05 17.3Q12.9 17.45 12.725 17.512Q12.55 17.575 12.35 17.575ZM12.35 12.35 10.925 10.95 15.175 6.7Q15.45 6.425 15.887 6.425Q16.325 6.425 16.6 6.7Q16.875 6.975 16.875 7.4Q16.875 7.825 16.6 8.1Z"/>
    </Icon>
  );
});

IconMaterialDoneAllRoundedFilled.displayName = 'AmauiIconMaterialDoneAllRoundedFilled';

export default IconMaterialDoneAllRoundedFilled;
