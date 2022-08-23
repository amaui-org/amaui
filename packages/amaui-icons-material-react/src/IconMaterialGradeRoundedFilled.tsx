import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRoundedFilled'
      short_name='Grade'

      {...props}
    >
      <path d="M7.05 21.05Q6.775 21.275 6.463 21.075Q6.15 20.875 6.275 20.525L8.15 14.4L3.275 10.9Q2.975 10.7 3.088 10.35Q3.2 10 3.55 10H9.6L11.525 3.6Q11.575 3.4 11.713 3.325Q11.85 3.25 12 3.25Q12.15 3.25 12.288 3.325Q12.425 3.4 12.475 3.6L14.4 10H20.45Q20.8 10 20.913 10.35Q21.025 10.7 20.725 10.9L15.85 14.4L17.725 20.525Q17.85 20.875 17.538 21.075Q17.225 21.275 16.95 21.05L12 17.3Z"/>
    </Icon>
  );
});

IconMaterialGradeRoundedFilled.displayName = 'AmauiIconMaterialGradeRoundedFilled';

export default IconMaterialGradeRoundedFilled;
