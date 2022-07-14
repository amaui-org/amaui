import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoSharpFilled'
      short_name='Bento'

      {...props}
    >
      <path d="M16 11V5H22V11ZM2 19V5H14V19ZM8 13.5Q8.625 13.5 9.062 13.062Q9.5 12.625 9.5 12Q9.5 11.375 9.062 10.938Q8.625 10.5 8 10.5Q7.375 10.5 6.938 10.938Q6.5 11.375 6.5 12Q6.5 12.625 6.938 13.062Q7.375 13.5 8 13.5ZM16 19V13H22V19Z"/>
    </Icon>
  );
});

export default IconMaterialBentoSharpFilled;
