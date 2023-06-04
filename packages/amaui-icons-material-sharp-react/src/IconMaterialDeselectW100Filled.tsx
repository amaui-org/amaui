import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeselectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectW100Filled'

      short_name='Deselect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 14.7 15.7H8.3V9.3L3.15 4.15l.5-.5 16.7 16.7ZM5 19.7q-.3 0-.5-.2t-.2-.5H5ZM4.3 17v-2H5v2Zm0-4v-2H5v2Zm0-4V7H5v2ZM7 19.7V19h2v.7ZM7.825 5l-.7-.7H9V5ZM9 15h5l-5-5Zm6.7-2.125-.7-.7V9h-3.175l-.7-.7H15.7ZM11 19.7V19h2v.7ZM11 5v-.7h2V5Zm4 14.7V19h2v.7ZM15 5v-.7h2V5Zm4.7 11.875-.7-.7V15h.7v1.875ZM19 13v-2h.7v2Zm0-4.25v-2h.7v2ZM19 5v-.7q.3 0 .5.2t.2.5Z"/>
    </Icon>
  );
});

IconMaterialDeselectW100Filled.displayName = 'AmauiIconMaterialDeselectW100Filled';

export default IconMaterialDeselectW100Filled;
