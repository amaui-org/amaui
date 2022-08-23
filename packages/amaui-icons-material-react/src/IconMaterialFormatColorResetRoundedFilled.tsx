import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatColorResetRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetRoundedFilled'
      short_name='FormatColorReset'

      {...props}
    >
      <path d="M19.25 16.4 8.4 5.55 11.3 2.7Q11.45 2.55 11.625 2.475Q11.8 2.4 12 2.4Q12.2 2.4 12.375 2.475Q12.55 2.55 12.7 2.7L17.65 7.55Q18.75 8.6 19.375 10.037Q20 11.475 20 13.1Q20 14 19.8 14.825Q19.6 15.65 19.25 16.4ZM19.1 21.9 16.7 19.5Q15.675 20.225 14.5 20.613Q13.325 21 12 21Q8.675 21 6.338 18.688Q4 16.375 4 13.1Q4 11.825 4.4 10.65Q4.8 9.475 5.6 8.4L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetRoundedFilled.displayName = 'AmauiIconMaterialFormatColorResetRoundedFilled';

export default IconMaterialFormatColorResetRoundedFilled;
