import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoRoundedW100Filled'
      short_name='Piano'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.8 19H8.775V14.1H8.325Q7.975 14.1 7.75 13.875Q7.525 13.65 7.525 13.3V5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19ZM15.225 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H16.475V13.3Q16.475 13.65 16.25 13.875Q16.025 14.1 15.675 14.1H15.225ZM9.475 19H14.525V14.1H14.075Q13.725 14.1 13.5 13.875Q13.275 13.65 13.275 13.3V5H10.725V13.3Q10.725 13.65 10.5 13.875Q10.275 14.1 9.925 14.1H9.475Z"/>
    </Icon>
  );
});

IconMaterialPianoRoundedW100Filled.displayName = 'AmauiIconMaterialPianoRoundedW100Filled';

export default IconMaterialPianoRoundedW100Filled;
