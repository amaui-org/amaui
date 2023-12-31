import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleSettingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleSettingsW100'

      short_name='RuleSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m306-222-50-50q-45-45-65.5-97.5T170-476q0-85 43.5-155.5T331-741q6-3 12.5-2.5t8.5 6.5q2 5-.5 11t-7.5 9q-67 35-106.5 99.5T198-476q0 50 19 97t59 87l50 50v-114q0-6 4-10t10-4q6 0 10 4t4 10v132q0 13-8.5 21.5T324-194H192q-6 0-10-4t-4-10q0-6 4-10t10-4h114Zm328-496v114q0 6-4 10t-10 4q-6 0-10-4t-4-10v-132q0-13 8.5-21.5T636-766h132q6 0 10 4t4 10q0 6-4 10t-10 4H654l50 50q33 34 52.5 72t27.5 79h-28q-8-35-25.5-68.5T684-668l-50-50Zm60 564q-6 0-10-4t-5-10l-1-13q-26-5-42-15t-30-25l-13 7q-5 3-10.5 2t-8.5-6l-1-2q-4-5-3-11t6-10l11-9q-9-24-9-46t9-46l-11-9q-5-4-6-10t3-11l1-2q3-5 8.5-6t10.5 2l13 7q14-15 30-25t42-15l1-13q1-6 5-10t10-4q6 0 10 4t5 10l1 13q26 5 42 15t30 25l13-7q5-3 10.5-2t8.5 6l1 2q4 5 3 11t-6 10l-11 9q9 24 9 46t-9 46l11 9q5 4 6 10t-3 11l-1 2q-3 5-8.5 6t-10.5-2l-13-7q-14 15-30 25t-42 15l-1 13q-1 6-5 10t-10 4Zm0-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialRuleSettingsW100.displayName = 'AmauiIconMaterialRuleSettingsW100';

export default IconMaterialRuleSettingsW100;
