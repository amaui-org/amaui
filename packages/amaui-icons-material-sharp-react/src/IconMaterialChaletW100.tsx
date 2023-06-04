import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChaletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletW100'

      short_name='Chalet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 10.85v-1.4l-.9.9-.5-.5 1.4-1.4v-1.1h-1.1l-1.4 1.4-.5-.5.9-.9h-1.4v-.7h1.4l-.9-.9.5-.5 1.4 1.375h1.1V5.55l-1.4-1.4.5-.5.9.9v-1.4h.7v1.4l.9-.9.5.5-1.4 1.4v1.1h1.1l1.4-1.4.5.5-.9.9h1.4v.7h-1.4l.9.9-.5.5-1.4-1.4h-1.1v1.1l1.4 1.4-.5.5-.9-.9v1.4Zm-2.8 4.325-1.15-1.15V18.7H6.3V14l-.9.9-.475-.475L10 9.35l5.325 5.325ZM7 18h2.65v-2.35h.7V18H13v-4.675l-3-3L7 13.3Zm0 0h6-6Z"/>
    </Icon>
  );
});

IconMaterialChaletW100.displayName = 'AmauiIconMaterialChaletW100';

export default IconMaterialChaletW100;
