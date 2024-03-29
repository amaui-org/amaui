import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReference = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReference'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 896q8 0 14-6t6-14V756q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200 256v640-640 200-200Zm120 400h107q11-23 25.5-43t32.5-37H320q-17 0-28.5 11.5T280 616q0 17 11.5 28.5T320 656Zm0 160h83q-3-20-3-40t3-40h-83q-17 0-28.5 11.5T280 776q0 17 11.5 28.5T320 816ZM200 976q-33 0-56.5-23.5T120 896V256q0-33 23.5-56.5T200 176h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v59q-19-6-39-9t-41-3v-40H520q-17 0-28.5-11.5T480 416V256H200v640h227q11 23 25.5 43t32.5 37H200Zm480-400q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576Z"/>
    </Icon>
  );
});

IconMaterialQuickReference.displayName = 'AmauiIconMaterialQuickReference';

export default IconMaterialQuickReference;
