import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvcW100Filled'

      short_name='Avc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M636-376h60q18 0 31-13t13-31q0-6-4-10t-10-4q-6 0-10 4t-4 10q0 7-4.5 11.5T696-404h-60q-7 0-11.5-4.5T620-420v-120q0-7 4.5-11.5T636-556h60q7 0 11.5 4.5T712-540q0 6 4 10t10 4q6 0 10-4t4-10q0-18-13-31t-31-13h-60q-18 0-31 13t-13 31v120q0 18 13 31t31 13ZM152-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h656q26 0 43 17t17 43v416q0 26-17 43t-43 17H152Zm96-234h92v56q0 6 4 10t10 4q6 0 10-4t4-10v-150q0-18-13-31t-31-13h-60q-18 0-31 13t-13 31v150q0 6 4 10t10 4q6 0 10-4t4-10v-56Zm0-28v-66q0-6 5-11t11-5h60q6 0 11 5t5 11v66h-92Zm237 70-49-170q-2-5-5.5-7.5T422-584q-8 0-12 5.5t-2 12.5l51 175q2 7 7.5 11t12.5 4h12q7 0 12.5-4t7.5-11l51-175q2-7-2-12.5t-12-5.5q-5 0-8.5 2.5T534-574l-49 170Z"/>
    </Icon>
  );
});

IconMaterialAvcW100Filled.displayName = 'AmauiIconMaterialAvcW100Filled';

export default IconMaterialAvcW100Filled;
