import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenJamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenJamFilled'

      short_name='OpenJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80h280v-288l64 64 56-56-160-160-160 160 56 56 64-64v168H80v-520h800v520H600v120h120v80H240Z"/>
    </Icon>
  );
});

IconMaterialOpenJamFilled.displayName = 'AmauiIconMaterialOpenJamFilled';

export default IconMaterialOpenJamFilled;
