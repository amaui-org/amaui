import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedRounded'
      short_name='FormatUnderlined'

      {...props}
    >
      <path d="M12 17Q9.475 17 7.737 15.262Q6 13.525 6 11V4.25Q6 3.725 6.363 3.362Q6.725 3 7.25 3Q7.775 3 8.137 3.362Q8.5 3.725 8.5 4.25V11Q8.5 12.475 9.512 13.488Q10.525 14.5 12 14.5Q13.475 14.5 14.488 13.488Q15.5 12.475 15.5 11V4.25Q15.5 3.725 15.863 3.362Q16.225 3 16.75 3Q17.275 3 17.638 3.362Q18 3.725 18 4.25V11Q18 13.525 16.262 15.262Q14.525 17 12 17ZM6 21Q5.575 21 5.287 20.712Q5 20.425 5 20Q5 19.575 5.287 19.288Q5.575 19 6 19H18Q18.425 19 18.712 19.288Q19 19.575 19 20Q19 20.425 18.712 20.712Q18.425 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedRounded.displayName = 'AmauiIconMaterialFormatUnderlinedRounded';

export default IconMaterialFormatUnderlinedRounded;
