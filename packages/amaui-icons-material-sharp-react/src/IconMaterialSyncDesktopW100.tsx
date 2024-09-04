import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncDesktopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDesktopW100'

      short_name='SyncDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M742-534q-11-47-35.5-86T618-717v127h-28v-176h176v28H638q70 62 96 109t36 95h-28ZM558-268h242v-138H558v138Zm-28 28v-194h298v194H530Zm-336 46v-28h128q-78-68-107-128t-29-126q0-94 52.5-170T374-754v30q-72 31-116 99t-44 149q0 62.94 27 115.97T342-242v-128h28v176H194Zm296 62v-28h378v28H490Zm68-136v-138 138Z"/>
    </Icon>
  );
});

IconMaterialSyncDesktopW100.displayName = 'AmauiIconMaterialSyncDesktopW100';

export default IconMaterialSyncDesktopW100;
