import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonorailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonorailFilled'

      short_name='Monorail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v120h200v80H240v-80h200v-120ZM320-880h320q66 0 113 47t47 113v380q0 59-41 99.5T660-200H560v-120H400v120H300q-59 0-99.5-40.5T160-340v-380q0-66 46.5-113T320-880Zm-80 200v120h480v-120H240Z"/>
    </Icon>
  );
});

IconMaterialMonorailFilled.displayName = 'AmauiIconMaterialMonorailFilled';

export default IconMaterialMonorailFilled;
