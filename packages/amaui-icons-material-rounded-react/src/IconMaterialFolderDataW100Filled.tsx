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
      <path d="M606-72q-23 0-38.5-15.5T552-126q0-19 11.5-33.5T592-179v-255q-17-5-28.5-19T552-486q0-23 15.5-38.5T606-540q23 0 38.5 15.5T660-486q0 19-11.5 33T620-434v158l158-53q10-3 16-11t6-19v-75q-17-5-28.5-19T760-486q0-23 15.5-38.5T814-540q23 0 38.5 15.5T868-486q0 19-11.5 33T828-434v75q0 20-11 35.5T787-302l-167 55v68q17 5 28.5 19.5T660-126q0 23-15.5 38.5T606-72ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h341q11 0 19.5 8.5T828-640H606q-64 0-109 45t-45 109q0 30 10.5 57t29.5 47v152q-4 5-7.5 9t-6.5 9H192Z"/>
    </Icon>
  );
});

IconMaterialFolderDataW100Filled.displayName = 'AmauiIconMaterialFolderDataW100Filled';

export default IconMaterialFolderDataW100Filled;
