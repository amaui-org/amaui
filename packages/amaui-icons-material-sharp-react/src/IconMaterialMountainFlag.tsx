import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMountainFlag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlag'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-355Zm-132-88 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l256-520h104v-280h280l-40 80 40 80H520v120h100L880-80H80Z"/>
    </Icon>
  );
});

IconMaterialMountainFlag.displayName = 'AmauiIconMaterialMountainFlag';

export default IconMaterialMountainFlag;
