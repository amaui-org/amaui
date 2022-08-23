import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightSharp'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14 22Q11.95 22 10.125 21.212Q8.3 20.425 6.938 19.062Q5.575 17.7 4.787 15.875Q4 14.05 4 12Q4 9.925 4.787 8.113Q5.575 6.3 6.938 4.938Q8.3 3.575 10.125 2.787Q11.95 2 14 2Q15.35 2 16.625 2.35Q17.9 2.7 19 3.35Q16.725 4.675 15.363 6.937Q14 9.2 14 12Q14 14.8 15.363 17.062Q16.725 19.325 19 20.65Q17.9 21.3 16.625 21.65Q15.35 22 14 22ZM14 20Q14.275 20 14.525 20Q14.775 20 15 19.95Q13.575 18.3 12.788 16.262Q12 14.225 12 12Q12 9.775 12.788 7.737Q13.575 5.7 15 4.05Q14.775 4 14.525 4Q14.275 4 14 4Q10.675 4 8.338 6.337Q6 8.675 6 12Q6 15.325 8.338 17.663Q10.675 20 14 20ZM10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Z"/>
    </Icon>
  );
});

IconMaterialNightlightSharp.displayName = 'AmauiIconMaterialNightlightSharp';

export default IconMaterialNightlightSharp;
