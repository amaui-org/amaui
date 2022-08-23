import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBathtubSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathtubSharpFilled'
      short_name='Bathtub'

      {...props}
    >
      <path d="M7 9Q6.175 9 5.588 8.412Q5 7.825 5 7Q5 6.175 5.588 5.588Q6.175 5 7 5Q7.825 5 8.412 5.588Q9 6.175 9 7Q9 7.825 8.412 8.412Q7.825 9 7 9ZM4 22V21H2V13H5V12.25Q5 11.3 5.65 10.65Q6.3 10 7.25 10Q7.75 10 8.175 10.2Q8.6 10.4 8.95 10.75L10.35 12.3Q10.55 12.5 10.738 12.675Q10.925 12.85 11.15 13H18V4.85Q18 4.5 17.75 4.25Q17.5 4 17.15 4Q17 4 16.863 4.062Q16.725 4.125 16.6 4.25L15.35 5.5Q15.475 5.925 15.4 6.338Q15.325 6.75 15.1 7.1L12.35 4.3Q12.7 4.075 13.1 4.012Q13.5 3.95 13.9 4.1L15.15 2.85Q15.55 2.45 16.062 2.225Q16.575 2 17.15 2Q18.35 2 19.175 2.825Q20 3.65 20 4.85V13H22V21H20V22Z"/>
    </Icon>
  );
});

IconMaterialBathtubSharpFilled.displayName = 'AmauiIconMaterialBathtubSharpFilled';

export default IconMaterialBathtubSharpFilled;
