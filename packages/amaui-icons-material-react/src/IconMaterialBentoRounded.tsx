import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoRounded'
      short_name='Bento'

      {...props}
    >
      <path d="M4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V7Q2 6.175 2.588 5.588Q3.175 5 4 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V17Q22 17.825 21.413 18.413Q20.825 19 20 19ZM14 11H20V7Q20 7 20 7Q20 7 20 7H14ZM4 17H12V7H4Q4 7 4 7Q4 7 4 7V17Q4 17 4 17Q4 17 4 17ZM8 13.5Q7.375 13.5 6.938 13.062Q6.5 12.625 6.5 12Q6.5 11.375 6.938 10.938Q7.375 10.5 8 10.5Q8.625 10.5 9.062 10.938Q9.5 11.375 9.5 12Q9.5 12.625 9.062 13.062Q8.625 13.5 8 13.5ZM14 17H20Q20 17 20 17Q20 17 20 17V13H14Z"/>
    </Icon>
  );
});

IconMaterialBentoRounded.displayName = 'AmauiIconMaterialBentoRounded';

export default IconMaterialBentoRounded;
