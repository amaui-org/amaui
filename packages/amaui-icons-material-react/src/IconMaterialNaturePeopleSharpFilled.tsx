import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNaturePeopleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NaturePeopleSharpFilled'
      short_name='NaturePeople'

      {...props}
    >
      <path d="M4.5 11Q3.85 11 3.425 10.575Q3 10.15 3 9.5Q3 8.85 3.425 8.425Q3.85 8 4.5 8Q5.15 8 5.575 8.425Q6 8.85 6 9.5Q6 10.15 5.575 10.575Q5.15 11 4.5 11ZM3 22V17H2V12H7V17H6V20H14V15H12.25Q10.475 15 9.238 13.762Q8 12.525 8 10.75Q8 9.425 8.713 8.387Q9.425 7.35 10.55 6.85Q10.825 5.225 12.062 4.112Q13.3 3 15 3Q16.7 3 17.938 4.112Q19.175 5.225 19.45 6.85Q20.575 7.35 21.288 8.387Q22 9.425 22 10.75Q22 12.525 20.763 13.762Q19.525 15 17.75 15H16V20H21V22Z"/>
    </Icon>
  );
});

IconMaterialNaturePeopleSharpFilled.displayName = 'AmauiIconMaterialNaturePeopleSharpFilled';

export default IconMaterialNaturePeopleSharpFilled;
