import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChaletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletFilled'

      short_name='Chalet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 11V9.8l-.75.75-.7-.7L17.5 8.4v-.9h-.9l-1.45 1.45-.7-.7.75-.75H14v-1h1.2l-.75-.75.7-.725 1.45 1.45h.9V5.6l-1.45-1.45.7-.7.75.75V3h1v1.2l.75-.75.7.7L18.5 5.6v.9h.9l1.45-1.45.7.7-.75.75H22v1h-1.2l.75.75-.7.7L19.4 7.5h-.9v.9l1.45 1.45-.7.7-.75-.75V11ZM5 20v-4.7l-1.1 1.1L2.5 15 10 7.5l7.5 7.5-1.4 1.425-1.1-1.1V20h-4v-5H9v5Z"/>
    </Icon>
  );
});

IconMaterialChaletFilled.displayName = 'AmauiIconMaterialChaletFilled';

export default IconMaterialChaletFilled;
