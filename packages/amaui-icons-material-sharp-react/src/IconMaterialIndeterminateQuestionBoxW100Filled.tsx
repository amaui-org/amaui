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
      <path d="M232-172q-26 0-43-17t-17-43v-128h28v128q0 12 10 22t22 10h128v28H232Zm496 0H600v-28h128q12 0 22-10t10-22v-128h28v128q0 26-17 43t-43 17ZM172-728q0-26 17-43t43-17h128v28H232q-12 0-22 10t-10 22v128h-28v-128Zm616 0v128h-28v-128q0-12-10-22t-22-10H600v-28h128q26 0 43 17t17 43ZM482-281q11 0 18.5-7.5T508-307q0-11-7.5-18.5T482-333q-11 0-18.5 7.5T456-307q0 11 7.5 18.5T482-281Zm-16-126h28q2-23 10.5-39t31.5-39q29-29 40.5-49.5T588-579q0-44-29-72t-75-28q-36 0-64.5 18T374-609l28 12q12-25 33-39.5t47-14.5q34 0 56 20t22 52q0 18-9 34t-31 36q-29 28-41.5 51T466-407Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateQuestionBoxW100Filled.displayName = 'AmauiIconMaterialIndeterminateQuestionBoxW100Filled';

export default IconMaterialIndeterminateQuestionBoxW100Filled;
