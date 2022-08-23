import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3pSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pSharp'
      short_name='3p'

      {...props}
    >
      <path d="M8 14H16V13.45Q16 12.35 14.9 11.675Q13.8 11 12 11Q10.2 11 9.1 11.675Q8 12.35 8 13.45ZM12 10Q12.825 10 13.413 9.412Q14 8.825 14 8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8Q10 8.825 10.588 9.412Q11.175 10 12 10ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  );
});

IconMaterial3pSharp.displayName = 'AmauiIconMaterial3pSharp';

export default IconMaterial3pSharp;
