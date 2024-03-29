import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAllFilled'

      short_name='QuickReferenceAll'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 856q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm232 132q-11 11-28 11t-28-11l-80-80q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T480 756q0-75 52.5-127.5T660 576q75 0 127.5 52.5T840 756q0 26-7 50.5T812 852l80 80q11 11 11 28t-11 28Zm-692-12q-33 0-56.5-23.5T120 896V256q0-33 23.5-56.5T200 176h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v67q-24-10-49-15t-51-5q-56 0-104.5 21T472 576H320q-8 0-15.5 3t-13 8.5q-5.5 5.5-8.5 13t-3 15.5q0 17 11.5 28.5T320 656h100q-8 19-12.5 39t-6.5 41h-81q-17 0-28.5 11.5T280 776q0 17 11.5 28.5T320 816h87q11 50 40 91.5t74 68.5H200Zm280-720v160q0 17 11.5 28.5T520 456h160L480 256l200 200-200-200Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllFilled.displayName = 'AmauiIconMaterialQuickReferenceAllFilled';

export default IconMaterialQuickReferenceAllFilled;
