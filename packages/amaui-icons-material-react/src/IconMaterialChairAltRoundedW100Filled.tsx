import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairAltRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltRoundedW100Filled'
      short_name='ChairAlt'

      {...props}
    >
      <path d="M7.5 16.45V19.1Q7.5 19.25 7.4 19.35Q7.3 19.45 7.15 19.45Q7 19.45 6.9 19.35Q6.8 19.25 6.8 19.1V13.8Q6.8 13.15 7.225 12.725Q7.65 12.3 8.3 12.3H9.15V10.2H8.3Q7.65 10.2 7.225 9.775Q6.8 9.35 6.8 8.7V6.55Q6.8 5.9 7.225 5.475Q7.65 5.05 8.3 5.05H15.7Q16.35 5.05 16.775 5.475Q17.2 5.9 17.2 6.55V8.7Q17.2 9.35 16.775 9.775Q16.35 10.2 15.7 10.2H14.85V12.3H15.7Q16.35 12.3 16.775 12.725Q17.2 13.15 17.2 13.8V19.1Q17.2 19.25 17.1 19.35Q17 19.45 16.85 19.45Q16.7 19.45 16.6 19.35Q16.5 19.25 16.5 19.1V16.45ZM9.85 12.3H14.15V10.2H9.85Z"/>
    </Icon>
  );
});

IconMaterialChairAltRoundedW100Filled.displayName = 'AmauiIconMaterialChairAltRoundedW100Filled';

export default IconMaterialChairAltRoundedW100Filled;
