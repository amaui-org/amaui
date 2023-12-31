import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderDataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDataW100Filled'

      short_name='FolderData'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v28H606q-64 0-109 45t-45 109q0 30 10.5 57t29.5 47v152q-4 5-7.5 9t-6.5 9H132ZM606-72q-23 0-38.5-15.5T552-126q0-19 11.5-33.5T592-179v-255q-17-5-28.5-19T552-486q0-23 15.5-38.5T606-540q23 0 38.5 15.5T660-486q0 19-11.5 33T620-434v158l180-60v-98q-17-5-28.5-19T760-486q0-23 15.5-38.5T814-540q23 0 38.5 15.5T868-486q0 19-11.5 33T828-434v118l-208 69v68q17 5 28.5 19.5T660-126q0 23-15.5 38.5T606-72Z"/>
    </Icon>
  );
});

IconMaterialFolderDataW100Filled.displayName = 'AmauiIconMaterialFolderDataW100Filled';

export default IconMaterialFolderDataW100Filled;
