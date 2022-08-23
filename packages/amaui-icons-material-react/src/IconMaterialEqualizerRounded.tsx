import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEqualizerRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerRounded'
      short_name='Equalizer'

      {...props}
    >
      <path d="M6 20Q5.175 20 4.588 19.413Q4 18.825 4 18V14Q4 13.175 4.588 12.587Q5.175 12 6 12Q6.825 12 7.412 12.587Q8 13.175 8 14V18Q8 18.825 7.412 19.413Q6.825 20 6 20ZM12 20Q11.175 20 10.588 19.413Q10 18.825 10 18V6Q10 5.175 10.588 4.588Q11.175 4 12 4Q12.825 4 13.413 4.588Q14 5.175 14 6V18Q14 18.825 13.413 19.413Q12.825 20 12 20ZM18 20Q17.175 20 16.587 19.413Q16 18.825 16 18V11Q16 10.175 16.587 9.587Q17.175 9 18 9Q18.825 9 19.413 9.587Q20 10.175 20 11V18Q20 18.825 19.413 19.413Q18.825 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialEqualizerRounded.displayName = 'AmauiIconMaterialEqualizerRounded';

export default IconMaterialEqualizerRounded;
