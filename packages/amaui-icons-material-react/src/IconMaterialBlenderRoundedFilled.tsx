import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlenderRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderRoundedFilled'
      short_name='Blender'

      {...props}
    >
      <path d="M8 22Q7.175 22 6.588 21.413Q6 20.825 6 20V19Q6 17.825 6.513 16.825Q7.025 15.825 7.85 15.15L7.25 11H5Q4.175 11 3.587 10.412Q3 9.825 3 9V5Q3 4.175 3.587 3.587Q4.175 3 5 3H10Q10 2.575 10.288 2.287Q10.575 2 11 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3H16.825Q17.275 3 17.588 3.35Q17.9 3.7 17.825 4.15L16.15 15.15Q16.975 15.825 17.488 16.825Q18 17.825 18 19V20Q18 20.825 17.413 21.413Q16.825 22 16 22ZM6.95 9 6.3 5H5Q5 5 5 5Q5 5 5 5V9Q5 9 5 9Q5 9 5 9ZM12 19Q12.425 19 12.713 18.712Q13 18.425 13 18Q13 17.575 12.713 17.288Q12.425 17 12 17Q11.575 17 11.288 17.288Q11 17.575 11 18Q11 18.425 11.288 18.712Q11.575 19 12 19ZM9.7 14H14.3L15.65 5H8.35Z"/>
    </Icon>
  );
});

IconMaterialBlenderRoundedFilled.displayName = 'AmauiIconMaterialBlenderRoundedFilled';

export default IconMaterialBlenderRoundedFilled;
