import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityRounded'
      short_name='Accessibility'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM10 22Q9.575 22 9.288 21.712Q9 21.425 9 21V9H4Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9H15V21Q15 21.425 14.713 21.712Q14.425 22 14 22Q13.575 22 13.288 21.712Q13 21.425 13 21V16H11V21Q11 21.425 10.713 21.712Q10.425 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityRounded.displayName = 'AmauiIconMaterialAccessibilityRounded';

export default IconMaterialAccessibilityRounded;
