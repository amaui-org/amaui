import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnect'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 496h640-640Zm80 400V776H120q-17 0-28.5-11.5T80 736V536q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880 536v30q-18-10-38-17t-42-10v-3q0-17-11.5-28.5T760 496H200q-17 0-28.5 11.5T160 536v160h80v-40q0-17 11.5-28.5T280 616h300q-16 17-29 37t-21 43H320v160h204q7 22 17 42t24 38H280q-17 0-28.5-11.5T240 896Zm478-106 113-113q11-11 27.5-11t28.5 11q12 12 12 28.5T887 734L746 875q-12 12-28 12t-28-12l-57-57q-12-12-12-28t12-28q12-11 28-11t28 11l29 28ZM240 416V296q0-33 23.5-56.5T320 216h320q33 0 56.5 23.5T720 296v120h-80V296H320v120h-80Z"/>
    </Icon>
  );
});

IconMaterialPrintConnect.displayName = 'AmauiIconMaterialPrintConnect';

export default IconMaterialPrintConnect;
