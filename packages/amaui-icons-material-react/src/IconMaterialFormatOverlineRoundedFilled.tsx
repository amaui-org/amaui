import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatOverlineRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatOverlineRoundedFilled'
      short_name='FormatOverline'

      {...props}
    >
      <path d="M6 5Q5.575 5 5.287 4.712Q5 4.425 5 4Q5 3.575 5.287 3.287Q5.575 3 6 3H18Q18.425 3 18.712 3.287Q19 3.575 19 4Q19 4.425 18.712 4.712Q18.425 5 18 5ZM12 21Q9.075 21 7.038 18.962Q5 16.925 5 14Q5 11.075 7.038 9.037Q9.075 7 12 7Q14.925 7 16.962 9.037Q19 11.075 19 14Q19 16.925 16.962 18.962Q14.925 21 12 21ZM12 18.5Q13.875 18.5 15.188 17.188Q16.5 15.875 16.5 14Q16.5 12.125 15.188 10.812Q13.875 9.5 12 9.5Q10.125 9.5 8.812 10.812Q7.5 12.125 7.5 14Q7.5 15.875 8.812 17.188Q10.125 18.5 12 18.5Z"/>
    </Icon>
  );
});

IconMaterialFormatOverlineRoundedFilled.displayName = 'AmauiIconMaterialFormatOverlineRoundedFilled';

export default IconMaterialFormatOverlineRoundedFilled;
