import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectFilled'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m718 790 113-113q11-11 27.5-11t28.5 11q12 12 12 28.5T887 734L746 875q-12 12-28 12t-28-12l-57-57q-12-12-12-28t12-28q12-11 28-11t28 11l29 28ZM280 936q-17 0-28.5-11.5T240 896V776H120q-17 0-28.5-11.5T80 736V536q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880 536v30q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530 696H320v160h204q7 22 17 42t24 38H280Zm-40-560v-80q0-33 23.5-56.5T320 216h320q33 0 56.5 23.5T720 296v80H240Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectFilled.displayName = 'AmauiIconMaterialPrintConnectFilled';

export default IconMaterialPrintConnectFilled;
