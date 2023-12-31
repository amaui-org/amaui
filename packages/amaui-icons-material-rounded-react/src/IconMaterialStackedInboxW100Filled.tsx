import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedInboxW100Filled'

      short_name='StackedInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-274q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h496q26 0 43 17t17 43v336q0 26-17 43t-43 17H286Zm248-118q26 0 47-15.5t29-39.5q2-11 10.5-18t19.5-7h174v-198q0-14-9-23t-23-9H286q-14 0-23 9t-9 23v198h174q11 0 19.5 7t10.5 18q8 24 29 39.5t47 15.5ZM178-166q-26 0-43-17t-17-43v-414q0-6 4-10t10-4q6 0 10 4t4 10v414q0 14 9 23t23 9h476q6 0 10 4t4 10q0 6-4 10t-10 4H178Z"/>
    </Icon>
  );
});

IconMaterialStackedInboxW100Filled.displayName = 'AmauiIconMaterialStackedInboxW100Filled';

export default IconMaterialStackedInboxW100Filled;
