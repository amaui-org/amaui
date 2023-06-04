import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoicemailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoicemailW100Filled'

      short_name='Voicemail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15q-1.45 0-2.475-1.025Q3.5 12.95 3.5 11.5q0-1.45 1.025-2.475Q5.55 8 7 8q1.45 0 2.475 1.025Q10.5 10.05 10.5 11.5q0 .85-.35 1.6-.35.75-1.05 1.2h5.8q-.7-.45-1.05-1.2-.35-.75-.35-1.6 0-1.45 1.025-2.475Q15.55 8 17 8q1.45 0 2.475 1.025Q20.5 10.05 20.5 11.5q0 1.45-1.025 2.475Q18.45 15 17 15Z"/>
    </Icon>
  );
});

IconMaterialVoicemailW100Filled.displayName = 'AmauiIconMaterialVoicemailW100Filled';

export default IconMaterialVoicemailW100Filled;
