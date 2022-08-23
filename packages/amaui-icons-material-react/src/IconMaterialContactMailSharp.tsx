import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactMailSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailSharp'
      short_name='ContactMail'

      {...props}
    >
      <path d="M0 21V3H24V21ZM2 19H2.1Q3.15 17.125 5 16.062Q6.85 15 9 15Q11.15 15 13 16.062Q14.85 17.125 15.9 19H22V5H2ZM9 14Q10.25 14 11.125 13.125Q12 12.25 12 11Q12 9.75 11.125 8.875Q10.25 8 9 8Q7.75 8 6.875 8.875Q6 9.75 6 11Q6 12.25 6.875 13.125Q7.75 14 9 14ZM14 11H21V6H14ZM17.5 9.75 15 8V7L17.5 8.75L20 7V8ZM4.55 19H13.45Q12.6 18.05 11.438 17.525Q10.275 17 9 17Q7.725 17 6.575 17.525Q5.425 18.05 4.55 19ZM9 12Q8.575 12 8.288 11.712Q8 11.425 8 11Q8 10.575 8.288 10.287Q8.575 10 9 10Q9.425 10 9.713 10.287Q10 10.575 10 11Q10 11.425 9.713 11.712Q9.425 12 9 12ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialContactMailSharp.displayName = 'AmauiIconMaterialContactMailSharp';

export default IconMaterialContactMailSharp;
