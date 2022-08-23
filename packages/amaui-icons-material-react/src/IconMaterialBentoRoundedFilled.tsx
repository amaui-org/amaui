import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoRoundedFilled'
      short_name='Bento'

      {...props}
    >
      <path d="M16 11V5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V11ZM4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V7Q2 6.175 2.588 5.588Q3.175 5 4 5H14V19ZM8 13.5Q8.625 13.5 9.062 13.062Q9.5 12.625 9.5 12Q9.5 11.375 9.062 10.938Q8.625 10.5 8 10.5Q7.375 10.5 6.938 10.938Q6.5 11.375 6.5 12Q6.5 12.625 6.938 13.062Q7.375 13.5 8 13.5ZM16 19V13H22V17Q22 17.825 21.413 18.413Q20.825 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialBentoRoundedFilled.displayName = 'AmauiIconMaterialBentoRoundedFilled';

export default IconMaterialBentoRoundedFilled;
