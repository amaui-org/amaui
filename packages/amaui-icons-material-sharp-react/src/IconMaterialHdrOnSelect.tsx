import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOnSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnSelect'

      short_name='HdrOnSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 22v-2h-2v-1.5h2v-2H22v2h2V20h-2v2ZM12 12q1.65 0 2.825-1.175Q16 9.65 16 8q0-1.65-1.175-2.825Q13.65 4 12 4q-1.65 0-2.825 1.175Q8 6.35 8 8q0 1.65 1.175 2.825Q10.35 12 12 12Zm0 2q-2.5 0-4.25-1.75T6 8q0-2.5 1.75-4.25T12 2q2.5 0 4.25 1.75T18 8q0 2.5-1.75 4.25T12 14Zm1 8v-6h5v3.9h-.9L18 22h-1.5l-.9-2h-1.1v2Zm1.5-3.5h2v-1h-2ZM0 22v-6h1.5v2h2v-2H5v6H3.5v-2.5h-2V22Zm6.5 0v-6H10q.6 0 1.05.45.45.45.45 1.05v3q0 .6-.45 1.05Q10.6 22 10 22ZM8 20.5h2v-3H8Z"/>
    </Icon>
  );
});

IconMaterialHdrOnSelect.displayName = 'AmauiIconMaterialHdrOnSelect';

export default IconMaterialHdrOnSelect;
