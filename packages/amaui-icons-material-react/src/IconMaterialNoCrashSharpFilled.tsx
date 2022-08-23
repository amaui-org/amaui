import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoCrashSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashSharpFilled'
      short_name='NoCrash'

      {...props}
    >
      <path d="M12 6.35 9.175 3.55 10.575 2.125 12 3.55 15.55 0 16.95 1.4ZM3 24V15L5.45 8H18.55L21 15V24H18V22H6V24ZM5.8 13H18.2L17.15 10H6.85ZM7.5 19Q8.125 19 8.562 18.562Q9 18.125 9 17.5Q9 16.875 8.562 16.438Q8.125 16 7.5 16Q6.875 16 6.438 16.438Q6 16.875 6 17.5Q6 18.125 6.438 18.562Q6.875 19 7.5 19ZM16.5 19Q17.125 19 17.562 18.562Q18 18.125 18 17.5Q18 16.875 17.562 16.438Q17.125 16 16.5 16Q15.875 16 15.438 16.438Q15 16.875 15 17.5Q15 18.125 15.438 18.562Q15.875 19 16.5 19Z"/>
    </Icon>
  );
});

IconMaterialNoCrashSharpFilled.displayName = 'AmauiIconMaterialNoCrashSharpFilled';

export default IconMaterialNoCrashSharpFilled;
