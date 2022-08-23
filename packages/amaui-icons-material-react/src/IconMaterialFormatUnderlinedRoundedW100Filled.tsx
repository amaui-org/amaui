import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedRoundedW100Filled'
      short_name='FormatUnderlined'

      {...props}
    >
      <path d="M12 16.1Q9.85 16.1 8.375 14.625Q6.9 13.15 6.9 11V4.25Q6.9 4.1 7 4Q7.1 3.9 7.25 3.9Q7.4 3.9 7.5 4Q7.6 4.1 7.6 4.25V11Q7.6 12.85 8.875 14.125Q10.15 15.4 12 15.4Q13.85 15.4 15.125 14.125Q16.4 12.85 16.4 11V4.25Q16.4 4.1 16.5 4Q16.6 3.9 16.75 3.9Q16.9 3.9 17 4Q17.1 4.1 17.1 4.25V11Q17.1 13.15 15.625 14.625Q14.15 16.1 12 16.1ZM6.25 20.35Q6.1 20.35 6 20.25Q5.9 20.15 5.9 20Q5.9 19.85 6 19.75Q6.1 19.65 6.25 19.65H17.75Q17.9 19.65 18 19.75Q18.1 19.85 18.1 20Q18.1 20.15 18 20.25Q17.9 20.35 17.75 20.35Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedRoundedW100Filled.displayName = 'AmauiIconMaterialFormatUnderlinedRoundedW100Filled';

export default IconMaterialFormatUnderlinedRoundedW100Filled;
