import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCasinoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasinoSharpFilled'
      short_name='Casino'

      {...props}
    >
      <path d="M7.5 18Q8.125 18 8.562 17.562Q9 17.125 9 16.5Q9 15.875 8.562 15.438Q8.125 15 7.5 15Q6.875 15 6.438 15.438Q6 15.875 6 16.5Q6 17.125 6.438 17.562Q6.875 18 7.5 18ZM7.5 9Q8.125 9 8.562 8.562Q9 8.125 9 7.5Q9 6.875 8.562 6.438Q8.125 6 7.5 6Q6.875 6 6.438 6.438Q6 6.875 6 7.5Q6 8.125 6.438 8.562Q6.875 9 7.5 9ZM12 13.5Q12.625 13.5 13.062 13.062Q13.5 12.625 13.5 12Q13.5 11.375 13.062 10.938Q12.625 10.5 12 10.5Q11.375 10.5 10.938 10.938Q10.5 11.375 10.5 12Q10.5 12.625 10.938 13.062Q11.375 13.5 12 13.5ZM16.5 18Q17.125 18 17.562 17.562Q18 17.125 18 16.5Q18 15.875 17.562 15.438Q17.125 15 16.5 15Q15.875 15 15.438 15.438Q15 15.875 15 16.5Q15 17.125 15.438 17.562Q15.875 18 16.5 18ZM16.5 9Q17.125 9 17.562 8.562Q18 8.125 18 7.5Q18 6.875 17.562 6.438Q17.125 6 16.5 6Q15.875 6 15.438 6.438Q15 6.875 15 7.5Q15 8.125 15.438 8.562Q15.875 9 16.5 9ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialCasinoSharpFilled.displayName = 'AmauiIconMaterialCasinoSharpFilled';

export default IconMaterialCasinoSharpFilled;
