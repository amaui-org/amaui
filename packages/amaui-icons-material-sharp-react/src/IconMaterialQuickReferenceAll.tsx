import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAll'

      short_name='QuickReferenceAll'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 256v241-1 400-640 200-200Zm80 400h140q9-23 22-43t30-37H280v80Zm0 160h127q-5-20-6.5-40t.5-40H280v80ZM120 976V176h400l240 240v100q-19-8-39-12.5t-41-6.5v-41H480V256H200v640h241q16 24 36 44.5t44 35.5H120Zm540-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm204 160L756 908q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T480 756q0-75 52.5-127.5T660 576q75 0 127.5 52.5T840 756q0 26-7 50.5T812 852l108 108-56 56Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAll.displayName = 'AmauiIconMaterialQuickReferenceAll';

export default IconMaterialQuickReferenceAll;
