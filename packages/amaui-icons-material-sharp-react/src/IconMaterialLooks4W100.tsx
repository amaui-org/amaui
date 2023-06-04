import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4W100'

      short_name='Looks4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Zm8.65-2.65h.7v-8.7h-.7v4h-3.3v-4h-.7v4.7h4Z"/>
    </Icon>
  );
});

IconMaterialLooks4W100.displayName = 'AmauiIconMaterialLooks4W100';

export default IconMaterialLooks4W100;
