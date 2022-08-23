import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthRounded'
      short_name='North'

      {...props}
    >
      <path d="M12 22Q11.575 22 11.288 21.712Q11 21.425 11 21V5.825L7.1 9.7Q6.825 9.975 6.412 9.988Q6 10 5.7 9.7Q5.425 9.425 5.425 9Q5.425 8.575 5.7 8.3L11.3 2.7Q11.45 2.55 11.625 2.487Q11.8 2.425 12 2.425Q12.2 2.425 12.375 2.487Q12.55 2.55 12.7 2.7L18.3 8.3Q18.575 8.575 18.575 8.987Q18.575 9.4 18.3 9.7Q18 10 17.587 10Q17.175 10 16.875 9.7L13 5.825V21Q13 21.425 12.713 21.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNorthRounded.displayName = 'AmauiIconMaterialNorthRounded';

export default IconMaterialNorthRounded;
