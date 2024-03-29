import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrAutoSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoSelect'

      short_name='HdrAutoSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 8.2 1-2.9h.1l1 2.9ZM12 14q-2.5 0-4.25-1.75T6 8q0-2.5 1.75-4.25T12 2q2.5 0 4.25 1.75T18 8q0 2.5-1.75 4.25T12 14Zm-3.25-3h1.2l.65-1.8h2.8l.65 1.8h1.2L12.6 4h-1.25ZM20.5 22v-2h-2v-1.5h2v-2H22v2h2V20h-2v2ZM13 22v-6h5v3.9h-.9L18 22h-1.5l-.9-2h-1.1v2Zm1.5-3.5h2v-1h-2ZM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22Zm6.5 0v-6H10q.6 0 1.05.45.45.45.45 1.05v3q0 .6-.45 1.05Q10.6 22 10 22ZM8 20.5h2v-3H8Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoSelect.displayName = 'AmauiIconMaterialHdrAutoSelect';

export default IconMaterialHdrAutoSelect;
