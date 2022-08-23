import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatColorResetSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetSharpFilled'
      short_name='FormatColorReset'

      {...props}
    >
      <path d="M19.25 16.4 8.4 5.55 12 2 17.65 7.55Q18.75 8.6 19.375 10.037Q20 11.475 20 13.1Q20 14 19.8 14.825Q19.6 15.65 19.25 16.4ZM19.8 22.6 16.7 19.5Q15.675 20.225 14.5 20.613Q13.325 21 12 21Q8.675 21 6.338 18.688Q4 16.375 4 13.1Q4 11.825 4.4 10.65Q4.8 9.475 5.6 8.4L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetSharpFilled.displayName = 'AmauiIconMaterialFormatColorResetSharpFilled';

export default IconMaterialFormatColorResetSharpFilled;
