import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityNewRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewRoundedFilled'
      short_name='AccessibilityNew'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM20 8.25Q18.8 8.525 17.525 8.712Q16.25 8.9 15 9V21.025Q15 21.45 14.713 21.725Q14.425 22 14 22Q13.575 22 13.288 21.712Q13 21.425 13 21V16H11V21.025Q11 21.45 10.713 21.725Q10.425 22 10 22Q9.575 22 9.288 21.712Q9 21.425 9 21V9Q7.75 8.9 6.475 8.712Q5.2 8.525 4 8.25Q3.575 8.15 3.35 7.787Q3.125 7.425 3.25 7Q3.35 6.575 3.713 6.362Q4.075 6.15 4.5 6.25Q6.3 6.65 8.213 6.825Q10.125 7 12 7Q13.875 7 15.787 6.825Q17.7 6.65 19.5 6.25Q19.925 6.15 20.275 6.362Q20.625 6.575 20.75 7Q20.85 7.425 20.638 7.787Q20.425 8.15 20 8.25Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewRoundedFilled.displayName = 'AmauiIconMaterialAccessibilityNewRoundedFilled';

export default IconMaterialAccessibilityNewRoundedFilled;
