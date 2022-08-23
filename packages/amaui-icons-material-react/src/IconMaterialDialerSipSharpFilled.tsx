import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDialerSipSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipSharpFilled'
      short_name='DialerSip'

      {...props}
    >
      <path d="M16 8V3H17V8ZM12 8V7H14V6H12V3H15V4H13V5H15V8ZM18 8V3H21V6H19V8ZM19 5H20V4H19ZM19.95 21Q16.725 21 13.663 19.575Q10.6 18.15 8.238 15.775Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.8 3 3.525Q3 3.25 3.05 3H8.9L9.825 8.025L6.975 10.9Q8.025 12.7 9.613 14.275Q11.2 15.85 13.1 17L16 14.1L21 15.1V20.95Q20.75 20.975 20.475 20.988Q20.2 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialDialerSipSharpFilled.displayName = 'AmauiIconMaterialDialerSipSharpFilled';

export default IconMaterialDialerSipSharpFilled;
