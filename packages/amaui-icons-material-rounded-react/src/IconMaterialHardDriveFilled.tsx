import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDriveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDriveFilled'

      short_name='HardDrive'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 736q25 0 42.5-17t17.5-43q0-25-17.5-42.5T680 616q-26 0-43 17.5T620 676q0 26 17 43t43 17ZM80 456l136-136q11-11 25.5-17.5T273 296h413q17 0 31.5 6.5T743 320l137 136H80Zm80 400q-34 0-57-23t-23-57V536h800v240q0 34-23.5 57T800 856H160Z"/>
    </Icon>
  );
});

IconMaterialHardDriveFilled.displayName = 'AmauiIconMaterialHardDriveFilled';

export default IconMaterialHardDriveFilled;
