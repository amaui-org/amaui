import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeRoundedW100Filled'
      short_name='FormatSize'

      {...props}
    >
      <path d="M15.5 18.85Q15.35 18.85 15.25 18.75Q15.15 18.65 15.15 18.5V5.85H10.5Q10.35 5.85 10.25 5.75Q10.15 5.65 10.15 5.5Q10.15 5.35 10.25 5.25Q10.35 5.15 10.5 5.15H20.5Q20.65 5.15 20.75 5.25Q20.85 5.35 20.85 5.5Q20.85 5.65 20.75 5.75Q20.65 5.85 20.5 5.85H15.85V18.5Q15.85 18.65 15.75 18.75Q15.65 18.85 15.5 18.85ZM6.5 18.85Q6.35 18.85 6.25 18.75Q6.15 18.65 6.15 18.5V10.85H3.5Q3.35 10.85 3.25 10.75Q3.15 10.65 3.15 10.5Q3.15 10.35 3.25 10.25Q3.35 10.15 3.5 10.15H9.5Q9.65 10.15 9.75 10.25Q9.85 10.35 9.85 10.5Q9.85 10.65 9.75 10.75Q9.65 10.85 9.5 10.85H6.85V18.5Q6.85 18.65 6.75 18.75Q6.65 18.85 6.5 18.85Z"/>
    </Icon>
  );
});

IconMaterialFormatSizeRoundedW100Filled.displayName = 'AmauiIconMaterialFormatSizeRoundedW100Filled';

export default IconMaterialFormatSizeRoundedW100Filled;
