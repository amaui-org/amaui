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
      <path d="M178-194v-28h128l-50-50q-45-45-65.5-97.5T170-476q0-92 51.5-167.5T358-754v30q-73 32-116.5 99.5T198-476q0 50 19 97t59 87l50 50v-128h28v176H178Zm606-343h-28q-8-35-25.5-68.5T684-668l-50-50v128h-28v-176h176v28H654l50 50q33 34 52.5 72t27.5 79ZM680-154l-2-27q-26-5-42-15t-30-25l-24 13-18-24 23-18q-9-24-9-46t9-46l-23-18 18-24 24 13q14-15 30-25t42-15l2-27h28l2 27q26 5 42 15t30 25l24-13 18 24-23 18q9 24 9 46t-9 46l23 18-18 24-24-13q-14 15-30 25t-42 15l-2 27h-28Zm14-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialRuleSettingsW100.displayName = 'AmauiIconMaterialRuleSettingsW100';

export default IconMaterialRuleSettingsW100;
