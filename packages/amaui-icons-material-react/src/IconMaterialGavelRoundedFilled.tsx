import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGavelRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelRoundedFilled'
      short_name='Gavel'

      {...props}
    >
      <path d="M4.975 21Q4.55 21 4.275 20.712Q4 20.425 4 20Q4 19.575 4.287 19.288Q4.575 19 5 19H15.025Q15.45 19 15.725 19.288Q16 19.575 16 20Q16 20.425 15.713 20.712Q15.425 21 15 21ZM8.225 14.725 5.4 11.9Q4.825 11.325 4.812 10.487Q4.8 9.65 5.375 9.075L6.1 8.35L11.8 14L11.075 14.725Q10.5 15.3 9.65 15.3Q8.8 15.3 8.225 14.725ZM16 9.8 10.35 4.1 11.075 3.375Q11.65 2.8 12.488 2.812Q13.325 2.825 13.9 3.4L16.725 6.225Q17.3 6.8 17.3 7.65Q17.3 8.5 16.725 9.075ZM19.9 19.3 7.55 6.95 8.95 5.55 21.325 17.925Q21.6 18.2 21.588 18.612Q21.575 19.025 21.3 19.3Q21.025 19.575 20.6 19.575Q20.175 19.575 19.9 19.3Z"/>
    </Icon>
  );
});

IconMaterialGavelRoundedFilled.displayName = 'AmauiIconMaterialGavelRoundedFilled';

export default IconMaterialGavelRoundedFilled;
