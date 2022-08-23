import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEqualizerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerRoundedW100'
      short_name='Equalizer'

      {...props}
    >
      <path d="M6 19.35Q5.425 19.35 5.038 18.962Q4.65 18.575 4.65 18V14Q4.65 13.425 5.038 13.037Q5.425 12.65 6 12.65Q6.575 12.65 6.963 13.037Q7.35 13.425 7.35 14V18Q7.35 18.575 6.963 18.962Q6.575 19.35 6 19.35ZM12 19.35Q11.425 19.35 11.038 18.962Q10.65 18.575 10.65 18V6Q10.65 5.425 11.038 5.037Q11.425 4.65 12 4.65Q12.575 4.65 12.963 5.037Q13.35 5.425 13.35 6V18Q13.35 18.575 12.963 18.962Q12.575 19.35 12 19.35ZM18 19.35Q17.425 19.35 17.038 18.962Q16.65 18.575 16.65 18V11Q16.65 10.425 17.038 10.037Q17.425 9.65 18 9.65Q18.575 9.65 18.962 10.037Q19.35 10.425 19.35 11V18Q19.35 18.575 18.962 18.962Q18.575 19.35 18 19.35Z"/>
    </Icon>
  );
});

IconMaterialEqualizerRoundedW100.displayName = 'AmauiIconMaterialEqualizerRoundedW100';

export default IconMaterialEqualizerRoundedW100;
