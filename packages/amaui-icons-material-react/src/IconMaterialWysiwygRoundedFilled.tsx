import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygRoundedFilled'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V7H5V19Q5 19 5 19Q5 19 5 19ZM8 12Q7.575 12 7.287 11.712Q7 11.425 7 11Q7 10.575 7.287 10.287Q7.575 10 8 10H16Q16.425 10 16.712 10.287Q17 10.575 17 11Q17 11.425 16.712 11.712Q16.425 12 16 12ZM8 16Q7.575 16 7.287 15.712Q7 15.425 7 15Q7 14.575 7.287 14.287Q7.575 14 8 14H12Q12.425 14 12.713 14.287Q13 14.575 13 15Q13 15.425 12.713 15.712Q12.425 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWysiwygRoundedFilled.displayName = 'AmauiIconMaterialWysiwygRoundedFilled';

export default IconMaterialWysiwygRoundedFilled;
