import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIndeterminateQuestionBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateQuestionBoxW100Filled'

      short_name='IndeterminateQuestionBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm496 0H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q12 0 22-10t10-22v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 26-17 43t-43 17ZM172-728q0-26 17-43t43-17h114q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v114q0 6-4 10t-10 4q-6 0-10-4t-4-10v-114Zm616 0v114q0 6-4 10t-10 4q-6 0-10-4t-4-10v-114q0-12-10-22t-22-10H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43ZM482-281q11 0 18.5-7.5T508-307q0-11-7.5-18.5T482-333q-11 0-18.5 7.5T456-307q0 11 7.5 18.5T482-281Zm0-370q32 0 55 20.5t23 51.5q0 21-12 38.5T520-509q-26 24-38.5 44.5T467-421q-1 6 3 10t10 4q6 0 10-4t5-10q3-17 12-30.5t29-33.5q29-29 40.5-49.5T588-579q0-44-29-72t-75-28q-32 0-59 14.5T381-622q-3 5-1 11t8 8q5 2 11 .5t10-6.5q14-18 32-30t41-12Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateQuestionBoxW100Filled.displayName = 'AmauiIconMaterialIndeterminateQuestionBoxW100Filled';

export default IconMaterialIndeterminateQuestionBoxW100Filled;
