import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScienceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceRounded'
      short_name='Science'

      {...props}
    >
      <path d="M5 21Q3.725 21 3.188 19.863Q2.65 18.725 3.45 17.75L9 11V5H8Q7.575 5 7.287 4.712Q7 4.425 7 4Q7 3.575 7.287 3.287Q7.575 3 8 3H16Q16.425 3 16.712 3.287Q17 3.575 17 4Q17 4.425 16.712 4.712Q16.425 5 16 5H15V11L20.55 17.75Q21.35 18.725 20.812 19.863Q20.275 21 19 21ZM5 19H19L13 11.7V5H11V11.7ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialScienceRounded.displayName = 'AmauiIconMaterialScienceRounded';

export default IconMaterialScienceRounded;
