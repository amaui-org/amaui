import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallArt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallArt'

      short_name='WallArt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-640h240l160-160 160 160h240v640H80Zm80-80h640v-480H160v480Zm80-80h480L570-440 450-280l-90-120-120 160Zm460-200q25 0 42.5-17.5T760-500q0-25-17.5-42.5T700-560q-25 0-42.5 17.5T640-500q0 25 17.5 42.5T700-440ZM404-720h152l-76-76-76 76ZM160-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialWallArt.displayName = 'AmauiIconMaterialWallArt';

export default IconMaterialWallArt;
