import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatColorTextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextRounded'
      short_name='FormatColorText'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19Q2 18.175 2.588 17.587Q3.175 17 4 17H20Q20.825 17 21.413 17.587Q22 18.175 22 19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM7.15 14Q6.475 14 6.15 13.55Q5.825 13.1 6.075 12.45L10.325 1.15Q10.525 0.675 11.012 0.337Q11.5 0 12.025 0Q12.525 0 13 0.337Q13.475 0.675 13.675 1.15L17.925 12.45Q18.175 13.1 17.85 13.55Q17.525 14 16.825 14Q16.525 14 16.238 13.8Q15.95 13.6 15.85 13.325L14.85 10.4H9.2L8.15 13.325Q8.05 13.6 7.763 13.8Q7.475 14 7.15 14ZM9.9 8.4H14.1L12.05 2.6H11.95Z"/>
    </Icon>
  );
});

IconMaterialFormatColorTextRounded.displayName = 'AmauiIconMaterialFormatColorTextRounded';

export default IconMaterialFormatColorTextRounded;
