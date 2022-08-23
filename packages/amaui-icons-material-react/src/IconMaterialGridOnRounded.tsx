import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOnRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOnRounded'
      short_name='GridOn'

      {...props}
    >
      <path d="M20 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM8 20V16H4V20Q4 20 4 20Q4 20 4 20ZM4 14H8V10H4ZM4 8H8V4H4Q4 4 4 4Q4 4 4 4ZM10 20H14V16H10ZM10 14H14V10H10ZM10 8H14V4H10ZM16 20H20Q20 20 20 20Q20 20 20 20V16H16ZM16 14H20V10H16ZM16 8H20V4Q20 4 20 4Q20 4 20 4H16Z"/>
    </Icon>
  );
});

IconMaterialGridOnRounded.displayName = 'AmauiIconMaterialGridOnRounded';

export default IconMaterialGridOnRounded;
