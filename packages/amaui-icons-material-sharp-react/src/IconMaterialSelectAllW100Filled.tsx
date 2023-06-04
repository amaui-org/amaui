import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllW100Filled'

      short_name='SelectAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 5v-.7H5V5Zm0 8v-2H5v2ZM7 19.7V19h2v.7ZM4.3 9V7H5v2ZM11 5v-.7h2V5Zm8 0v-.7h.7V5ZM4.3 19.7V19H5v.7Zm0-2.7v-2H5v2ZM7 5v-.7h2V5Zm4 14.7V19h2v.7Zm8-6.7v-2h.7v2Zm0 6.7V19h.7v.7Zm0-10.95v-2h.7v2Zm0 8.5v-2h.7v2Zm-4 2.45V19h2v.7ZM15 5v-.7h2V5ZM8.3 15.7V8.3h7.4v7.4ZM9 15h6V9H9Z"/>
    </Icon>
  );
});

IconMaterialSelectAllW100Filled.displayName = 'AmauiIconMaterialSelectAllW100Filled';

export default IconMaterialSelectAllW100Filled;
