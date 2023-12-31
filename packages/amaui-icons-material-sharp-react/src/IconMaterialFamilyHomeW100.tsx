import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHomeW100'

      short_name='FamilyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-774 366 274-18 22-80-60v366H212v-366l-80 60-18-22 366-274ZM354-456.245Q354-420 393-379q39 41 87 85 50-44 89-84.922 39-40.921 39-77.069Q608-486 587.375-506t-49.5-20Q520-526 505.5-518.5T480-500q-9-11-24-18.5t-31.571-7.5q-29 0-49.715 19.832Q354-486.335 354-456.245ZM720-200v-360L480-740 240-560v360h480Zm0 0H240h480Z"/>
    </Icon>
  );
});

IconMaterialFamilyHomeW100.displayName = 'AmauiIconMaterialFamilyHomeW100';

export default IconMaterialFamilyHomeW100;
