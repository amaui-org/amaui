import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnFilled'

      short_name='HdrOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 15V9h5v3.9h-.9L21 15h-1.5l-.9-2h-1.1v2Zm1.5-3.5h2v-1h-2ZM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15Zm6.5 0V9H13q.6 0 1.05.45.45.45.45 1.05v3q0 .6-.45 1.05Q13.6 15 13 15Zm1.5-1.5h2v-3h-2Z"/>
    </Icon>
  );
});

IconMaterialHdrOnFilled.displayName = 'AmauiIconMaterialHdrOnFilled';

export default IconMaterialHdrOnFilled;
