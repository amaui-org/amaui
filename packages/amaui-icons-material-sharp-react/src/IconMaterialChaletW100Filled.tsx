import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChaletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletW100Filled'

      short_name='Chalet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 10.85v-1.4l-.9.9-.5-.5 1.4-1.4v-1.1h-1.1l-1.4 1.4-.5-.5.9-.9h-1.4v-.7h1.4l-.9-.9.5-.5 1.4 1.375h1.1V5.55l-1.4-1.4.5-.5.9.9v-1.4h.7v1.4l.9-.9.5.5-1.4 1.4v1.1h1.1l1.4-1.4.5.5-.9.9h1.4v.7h-1.4l.9.9-.5.5-1.4-1.4h-1.1v1.1l1.4 1.4-.5.5-.9-.9v1.4ZM6.3 18.7V14l-.9.9-.475-.475L10 9.35l5.325 5.325-.475.5-1.15-1.15V18.7h-3.35v-3.05h-.7v3.05Z"/>
    </Icon>
  );
});

IconMaterialChaletW100Filled.displayName = 'AmauiIconMaterialChaletW100Filled';

export default IconMaterialChaletW100Filled;
