import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoicemailRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoicemailRoundedW100Filled'
      short_name='Voicemail'

      {...props}
    >
      <path d="M7 15Q5.55 15 4.525 13.975Q3.5 12.95 3.5 11.5Q3.5 10.05 4.525 9.025Q5.55 8 7 8Q8.45 8 9.475 9.025Q10.5 10.05 10.5 11.5Q10.5 12.35 10.15 13.1Q9.8 13.85 9.1 14.3H14.9Q14.2 13.85 13.85 13.1Q13.5 12.35 13.5 11.5Q13.5 10.05 14.525 9.025Q15.55 8 17 8Q18.45 8 19.475 9.025Q20.5 10.05 20.5 11.5Q20.5 12.95 19.475 13.975Q18.45 15 17 15Z"/>
    </Icon>
  );
});

IconMaterialVoicemailRoundedW100Filled.displayName = 'AmauiIconMaterialVoicemailRoundedW100Filled';

export default IconMaterialVoicemailRoundedW100Filled;
