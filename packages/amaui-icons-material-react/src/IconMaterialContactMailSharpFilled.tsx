import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactMailSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailSharpFilled'
      short_name='ContactMail'

      {...props}
    >
      <path d="M0 21V3H24V21ZM9 14Q10.25 14 11.125 13.125Q12 12.25 12 11Q12 9.75 11.125 8.875Q10.25 8 9 8Q7.75 8 6.875 8.875Q6 9.75 6 11Q6 12.25 6.875 13.125Q7.75 14 9 14ZM14 11H21V6H14ZM17.5 9.75 15 8V7L17.5 8.75L20 7V8ZM2.1 19H15.9Q14.85 17.125 13 16.062Q11.15 15 9 15Q6.85 15 5 16.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  );
});

IconMaterialContactMailSharpFilled.displayName = 'AmauiIconMaterialContactMailSharpFilled';

export default IconMaterialContactMailSharpFilled;
