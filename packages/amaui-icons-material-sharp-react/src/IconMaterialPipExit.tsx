import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPipExit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExit'

      short_name='PipExit'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V536h80v280h640V336H440v-80h440v640H80Zm603-140 57-57-124-123h104v-80H480v240h80V633l123 123ZM80 456V256h280v200H80Zm400 120Z"/>
    </Icon>
  );
});

IconMaterialPipExit.displayName = 'AmauiIconMaterialPipExit';

export default IconMaterialPipExit;
