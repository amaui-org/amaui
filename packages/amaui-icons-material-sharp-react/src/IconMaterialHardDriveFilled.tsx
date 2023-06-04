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
      <path d="M680 736q25 0 42.5-17.5T740 676q0-25-17.5-42.5T680 616q-25 0-42.5 17.5T620 676q0 25 17.5 42.5T680 736Zm200-280H80l160-160h480l160 160ZM80 856V536h800v320H80Z"/>
    </Icon>
  );
});

IconMaterialHardDriveFilled.displayName = 'AmauiIconMaterialHardDriveFilled';

export default IconMaterialHardDriveFilled;
