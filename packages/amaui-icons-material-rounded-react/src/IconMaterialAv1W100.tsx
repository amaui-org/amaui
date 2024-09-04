import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAv1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Av1W100'

      short_name='Av1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h656q26 0 43 17t17 43v416q0 26-17 43t-43 17H152Zm0-28h656q14 0 23-9t9-23v-416q0-14-9-23t-23-9H152q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Zm128-206h100v56q0 6 4 10t10 4q6 0 10-4t4-10v-150q0-18-13-31t-31-13h-68q-18 0-31 13t-13 31v150q0 6 4 10t10 4q6 0 10-4t4-10v-56Zm0-28v-66q0-6 5-11t11-5h68q6 0 11 5t5 11v66H248Zm265 70-49-170q-2-5-5.5-7.5T450-584q-8 0-12 5.5t-2 12.5l51 175q2 7 7.5 11t12.5 4h12q7 0 12.5-4t7.5-11l51-175q2-7-2-12.5t-12-5.5q-5 0-8.5 2.5T562-574l-49 170Zm199-152v166q0 6 4 10t10 4q6 0 10-4t4-10v-180q0-6-4-10t-10-4h-52q-6 0-10 4t-4 10q0 6 4 10t10 4h38Z"/>
    </Icon>
  );
});

IconMaterialAv1W100.displayName = 'AmauiIconMaterialAv1W100';

export default IconMaterialAv1W100;
