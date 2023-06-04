import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpo2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2W100Filled'

      short_name='Spo2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M510 844q-11 0-19.5-8.5T482 816V664q0-11 8.5-19.5T510 636h92q11 0 19.5 8.5T630 664v152q0 11-8.5 19.5T602 844h-92Zm0-28h92V664h-92v152Zm208 144q-12 0-20-8t-8-20v-62q0-12 8-20t20-8h94v-62H704q-6 0-10-4t-4-10q0-6 4-10t10-4h108q12 0 20 8t8 20v62q0 12-8 20t-20 8h-94v62h108q6 0 10 4t4 10q0 6-4 10t-10 4H718Zm-336-37q-109-7-179.5-85T132 648q0-54 25.5-108t63-104.5Q258 385 301 341t79-78q5-4 10-6t10-2q5 0 10.5 2t10.5 6q30 28 62 60t61 66.5q29 34.5 54 71.5t43 75H442q-25 0-42.5 17.5T382 596v327Z"/>
    </Icon>
  );
});

IconMaterialSpo2W100Filled.displayName = 'AmauiIconMaterialSpo2W100Filled';

export default IconMaterialSpo2W100Filled;
