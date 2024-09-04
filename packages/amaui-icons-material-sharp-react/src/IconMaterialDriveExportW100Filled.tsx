import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveExportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveExportW100Filled'

      short_name='DriveExport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-177-19-19 149-150H666v-28h188v188h-28v-140L676-177Zm-435.59 25q-13.12 0-26.24-7.5T195-178l-80-140q-6-11-6.5-26t6.5-26l240-412q7-11 19.5-18.5T400-808h160q13 0 25.5 7.5T605-782l152 261q-8 0-15.5.5t-15.64 1.5L574-780H386L132-344l94 164h315.53q3.09 8 6.7 14.5 3.62 6.5 8.77 13.5H240.41ZM305-306l-14-25 174-303h30l102 177.23q-5 5.16-10 10.86-5 5.69-10 10.91l-97-169-155 270h201q-2 7-3 13.5t-2 14.5H305Z"/>
    </Icon>
  );
});

IconMaterialDriveExportW100Filled.displayName = 'AmauiIconMaterialDriveExportW100Filled';

export default IconMaterialDriveExportW100Filled;
