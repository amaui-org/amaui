import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Borg'

      short_name='Borg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-275v-410l360-207 360 207v410L480-68 120-275Zm200-45v-120H200v118l240 139v-137H320Zm0-320h120v-137L200-638v118h120v-120Zm80 240h160v-160H400v160Zm240 80H520v137l240-139v-118H640v120Zm0-320v120h120v-118L520-777v137h120Z"/>
    </Icon>
  );
});

IconMaterialBorg.displayName = 'AmauiIconMaterialBorg';

export default IconMaterialBorg;
