import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonorail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Monorail'

      short_name='Monorail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v120h200v80H240v-80h200v-120ZM320-880h320q66 0 113 47t47 113v380q0 59-41 99.5T660-200H560v-120H400v120H300q-59 0-99.5-40.5T160-340v-380q0-66 46.5-113T320-880Zm-80 400v140q0 26 17 43t43 17h20v-120h320v120h20q25 0 42.5-17t17.5-43v-140H240Zm0-200v120h480v-120H240Zm80-120q-23 0-40.5 11T251-760h458q-11-18-29-29t-40-11H320Zm-80 320h480-480Zm80-280h389-458 69Z"/>
    </Icon>
  );
});

IconMaterialMonorail.displayName = 'AmauiIconMaterialMonorail';

export default IconMaterialMonorail;
