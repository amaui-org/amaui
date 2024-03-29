import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintErrorFilled'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 936q-17 0-28.5-11.5T720 896q0-17 11.5-28.5T760 856q17 0 28.5 11.5T800 896q0 17-11.5 28.5T760 936Zm0-160q-17 0-28.5-11.5T720 736V616q0-17 11.5-28.5T760 576q17 0 28.5 11.5T800 616v120q0 17-11.5 28.5T760 776ZM280 936q-17 0-28.5-11.5T240 896V776H120q-17 0-28.5-11.5T80 736V536q0-51 35-85.5t85-34.5h560q40 0 70.5 22.5T873 496H720q-33 0-56.5 23.5T640 576v120H320v160h320v80H280Zm-40-560v-80q0-33 23.5-56.5T320 216h320q33 0 56.5 23.5T720 296v80H240Z"/>
    </Icon>
  );
});

IconMaterialPrintErrorFilled.displayName = 'AmauiIconMaterialPrintErrorFilled';

export default IconMaterialPrintErrorFilled;
