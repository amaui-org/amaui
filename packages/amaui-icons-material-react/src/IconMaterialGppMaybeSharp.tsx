import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppMaybeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeSharp'
      short_name='GppMaybe'

      {...props}
    >
      <path d="M11 12H13V7H11ZM12 16Q12.425 16 12.713 15.712Q13 15.425 13 15Q13 14.575 12.713 14.287Q12.425 14 12 14Q11.575 14 11.288 14.287Q11 14.575 11 15Q11 15.425 11.288 15.712Q11.575 16 12 16ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375L12 4.125L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeSharp.displayName = 'AmauiIconMaterialGppMaybeSharp';

export default IconMaterialGppMaybeSharp;
