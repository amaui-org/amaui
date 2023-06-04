import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadDoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDoneFilled'

      short_name='FileDownloadDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-2h14v2Zm4.55-4-5.7-5.7 1.425-1.425L9.55 13.15l9.175-9.175L20.15 5.4Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDoneFilled.displayName = 'AmauiIconMaterialFileDownloadDoneFilled';

export default IconMaterialFileDownloadDoneFilled;
