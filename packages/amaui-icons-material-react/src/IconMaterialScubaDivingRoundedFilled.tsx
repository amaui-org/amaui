import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScubaDivingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDivingRoundedFilled'
      short_name='ScubaDiving'

      {...props}
    >
      <path d="M3 15Q2.175 15 1.588 14.412Q1 13.825 1 13Q1 12.175 1.588 11.587Q2.175 11 3 11Q3.825 11 4.412 11.587Q5 12.175 5 13Q5 13.825 4.412 14.412Q3.825 15 3 15ZM8.9 10.1Q8.3 10.275 7.763 9.962Q7.225 9.65 7.05 9.05Q6.875 8.45 7.188 7.9Q7.5 7.35 8.1 7.2L11.675 6.25Q12.075 6.125 12.425 6.35Q12.775 6.575 12.9 6.975L13.175 7.925Q13.3 8.325 13.075 8.675Q12.85 9.025 12.45 9.15ZM3.2 22.4Q2.85 22.15 2.8 21.75Q2.75 21.35 3 21L5.25 18L6.025 13.55Q6.1 12.95 6.5 12.487Q6.9 12.025 7.525 11.875L17 9L19 5L21.5 2.5Q21.7 2.3 21.988 2.287Q22.275 2.275 22.525 2.525Q22.725 2.725 22.75 3.012Q22.775 3.3 22.575 3.5L20.5 5.9L19.2 9.875Q19.1 10.175 18.913 10.425Q18.725 10.675 18.45 10.875L14.25 13.825Q14.125 13.925 13.988 13.987Q13.85 14.05 13.7 14.1L8.15 15.85L7 19L4.6 22.2Q4.35 22.55 3.95 22.6Q3.55 22.65 3.2 22.4Z"/>
    </Icon>
  );
});

IconMaterialScubaDivingRoundedFilled.displayName = 'AmauiIconMaterialScubaDivingRoundedFilled';

export default IconMaterialScubaDivingRoundedFilled;
