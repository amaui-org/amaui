import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReleaseAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReleaseAlertW100Filled'

      short_name='ReleaseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m353-149-51-85-96-20q-11-2-17.5-12t-5.5-21l9-99-65-74q-8-8-8-20t8-20l65-74-9-99q-1-11 5.5-21t17.5-12l96-20 51-85q6-10 16-14t21 1l90 38 90-38q11-5 21-1t16 14l51 85 96 20q11 2 17.5 12t5.5 21l-9 99 65 74q8 8 8 20t-8 20l-65 74 9 99q1 11-5.5 21T754-254l-96 20-51 85q-6 10-16 14t-21-1l-90-38-90 38q-11 5-21 1t-16-14Zm127-159q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-124q6 0 10-4t4-10v-212q0-6-4-10t-10-4q-6 0-10 4t-4 10v212q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialReleaseAlertW100Filled.displayName = 'AmauiIconMaterialReleaseAlertW100Filled';

export default IconMaterialReleaseAlertW100Filled;
