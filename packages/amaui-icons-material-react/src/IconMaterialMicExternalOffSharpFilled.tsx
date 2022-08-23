import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicExternalOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOffSharpFilled'
      short_name='MicExternalOff'

      {...props}
    >
      <path d="M9.5 6.65 5.35 2.5Q5.7 2.225 6.125 2.112Q6.55 2 7 2Q8.25 2 9.125 2.862Q10 3.725 10 5Q10 5.45 9.863 5.862Q9.725 6.275 9.5 6.65ZM20 17.15 18 15.15V4H14V11.15L12 9.15V2H20ZM20.5 23.3 14 16.8V22H6V18H5L4 8H5.15L0.7 3.5L2.1 2.1L21.9 21.9ZM8 20H12V14.8L9.55 12.35L9 18H8Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOffSharpFilled.displayName = 'AmauiIconMaterialMicExternalOffSharpFilled';

export default IconMaterialMicExternalOffSharpFilled;
