import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOffW100Filled'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-292q-25 0-42.5-17.5T266-352v-302L114-806q-4-4-4.5-9.5T114-826q5-5 10-5t10 5l692 692q4 4 4.5 9.5T826-114q-5 5-10 5t-10-5L628-292H326ZM218-184q-25 0-42.5-17.5T158-244v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 14 9 23t23 9h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm555-116L353-720h421v-48q0-14-9-23t-23-9H326q-11 0-19 6t-12 16l-21-21q8-14 22-21.5t30-7.5h416q25 0 42.5 17.5T802-768v416q0 16-7.5 30T773-300Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOffW100Filled.displayName = 'AmauiIconMaterialAdGroupOffW100Filled';

export default IconMaterialAdGroupOffW100Filled;
