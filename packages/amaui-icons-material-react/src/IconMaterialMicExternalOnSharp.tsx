import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicExternalOnSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnSharp'
      short_name='MicExternalOn'

      {...props}
    >
      <path d="M4.8 7Q4.425 6.575 4.213 6.075Q4 5.575 4 5Q4 3.75 4.875 2.875Q5.75 2 7 2Q8.25 2 9.125 2.875Q10 3.75 10 5Q10 5.575 9.788 6.075Q9.575 6.575 9.2 7ZM6 22V18H5L4 8H10L9 18H8V20H12V2H20V22H18V4H14V22ZM6.8 16H7.2L7.8 10H6.2ZM7.2 10H6.8H6.2H7.8Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnSharp.displayName = 'AmauiIconMaterialMicExternalOnSharp';

export default IconMaterialMicExternalOnSharp;
