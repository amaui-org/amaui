import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllW100'

      short_name='SelectAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 5q0-.3.2-.5t.5-.2V5Zm0 8v-2H5v2ZM7 19.7V19h2v.7ZM4.3 9V7H5v2ZM11 5v-.7h2V5Zm8 0v-.7q.3 0 .5.2t.2.5ZM5 19.7q-.3 0-.5-.2t-.2-.5H5ZM4.3 17v-2H5v2ZM7 5v-.7h2V5Zm4 14.7V19h2v.7Zm8-6.7v-2h.7v2Zm0 6.7V19h.7q0 .3-.2.5t-.5.2Zm0-10.95v-2h.7v2Zm0 8.5v-2h.7v2Zm-4 2.45V19h2v.7ZM15 5v-.7h2V5ZM9.05 15.7q-.325 0-.538-.212-.212-.213-.212-.538v-5.9q0-.325.212-.538.213-.212.538-.212h5.9q.325 0 .538.212.212.213.212.538v5.9q0 .325-.212.538-.213.212-.538.212ZM9 15h6V9H9Z"/>
    </Icon>
  );
});

IconMaterialSelectAllW100.displayName = 'AmauiIconMaterialSelectAllW100';

export default IconMaterialSelectAllW100;
