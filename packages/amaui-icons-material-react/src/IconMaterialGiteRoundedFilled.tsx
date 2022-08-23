import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGiteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteRoundedFilled'
      short_name='Gite'

      {...props}
    >
      <path d="M4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V10.825Q2 10.425 2.15 10.062Q2.3 9.7 2.575 9.425L5.425 6.575Q5.7 6.3 6.062 6.15Q6.425 6 6.825 6H7V5Q7 4.575 7.287 4.287Q7.575 4 8 4Q8.425 4 8.713 4.287Q9 4.575 9 5V6H17.175Q17.575 6 17.938 6.15Q18.3 6.3 18.575 6.575L21.425 9.425Q21.7 9.7 21.85 10.062Q22 10.425 22 10.825V17Q22 17.825 21.413 18.413Q20.825 19 20 19ZM16 17H20V10.825L18 8.825L16 10.825ZM4 17H14V12H4Z"/>
    </Icon>
  );
});

IconMaterialGiteRoundedFilled.displayName = 'AmauiIconMaterialGiteRoundedFilled';

export default IconMaterialGiteRoundedFilled;
