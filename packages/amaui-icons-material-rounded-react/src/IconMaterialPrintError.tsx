import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintError'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 896V776H120q-17 0-28.5-11.5T80 736V536q0-51 35-85.5t85-34.5h560q40 0 70.5 22.5T873 496H200q-17 0-28.5 11.5T160 536v160h80v-40q0-17 11.5-28.5T280 616h360v80H320v160h320v80H280q-17 0-28.5-11.5T240 896Zm0-480V296q0-33 23.5-56.5T320 216h320q33 0 56.5 23.5T720 296v120h-80V296H320v120h-80Zm520 520q-17 0-28.5-11.5T720 896q0-17 11.5-28.5T760 856q17 0 28.5 11.5T800 896q0 17-11.5 28.5T760 936Zm-40-200V616q0-17 11.5-28.5T760 576q17 0 28.5 11.5T800 616v120q0 17-11.5 28.5T760 776q-17 0-28.5-11.5T720 736ZM160 496h713-713Z"/>
    </Icon>
  );
});

IconMaterialPrintError.displayName = 'AmauiIconMaterialPrintError';

export default IconMaterialPrintError;
