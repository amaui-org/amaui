import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppMaybeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeSharpFilled'
      short_name='GppMaybe'

      {...props}
    >
      <path d="M11 12H13V7H11ZM12 16Q12.425 16 12.713 15.712Q13 15.425 13 15Q13 14.575 12.713 14.287Q12.425 14 12 14Q11.575 14 11.288 14.287Q11 14.575 11 15Q11 15.425 11.288 15.712Q11.575 16 12 16ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeSharpFilled.displayName = 'AmauiIconMaterialGppMaybeSharpFilled';

export default IconMaterialGppMaybeSharpFilled;
