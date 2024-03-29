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
      <path d="M200 256v241-1 400-640 200-200Zm120 400h100q9-23 22-43t30-37H320q-17 0-28.5 11.5T280 616q0 17 11.5 28.5T320 656Zm0 160h87q-5-20-6.5-40t.5-40h-81q-17 0-28.5 11.5T280 776q0 17 11.5 28.5T320 816ZM200 976q-33 0-56.5-23.5T120 896V256q0-33 23.5-56.5T200 176h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v67q-19-8-39-12.5t-41-6.5v-41H520q-17 0-28.5-11.5T480 416V256H200v640h241q16 24 36 44.5t44 35.5H200Zm460-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm232 132q-11 11-28 11t-28-11l-80-80q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T480 756q0-75 52.5-127.5T660 576q75 0 127.5 52.5T840 756q0 26-7 50.5T812 852l80 80q11 11 11 28t-11 28Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAll.displayName = 'AmauiIconMaterialQuickReferenceAll';

export default IconMaterialQuickReferenceAll;
