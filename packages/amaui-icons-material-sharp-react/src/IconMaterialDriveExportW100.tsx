import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveExportW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveExportW100'

      short_name='DriveExport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-177-19-19 149-150H666v-28h188v188h-28v-140L676-177Zm-436 25q-13 0-26-7.5T195-178l-80-140q-6-11-6.5-26t6.5-26l240-412q7-11 19.5-18.5T400-808h160q13 0 25.5 7.5T605-782l150 258q-8 0-15 1t-15 2L574-780H386L132-344l94 164h313q3 8 6.5 14.5T554-152H240Zm65-154-14-25 174-303h30l100 175q-5 5-10 10.5T575-438l-95-166-155 270h198q-2 7-3 13.5t-2 14.5H305Z"/>
    </Icon>
  );
});

IconMaterialDriveExportW100.displayName = 'AmauiIconMaterialDriveExportW100';

export default IconMaterialDriveExportW100;
