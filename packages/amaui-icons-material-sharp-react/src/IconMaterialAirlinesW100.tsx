import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlinesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesW100'

      short_name='Airlines'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.35 18H16.9l2.25-12H13.6Zm-1.325.7 9.2-13.4h6.75l-2.5 13.4Zm10.025-5.625q.65 0 1.113-.463.462-.462.462-1.112 0-.65-.462-1.113-.463-.462-1.113-.462-.65 0-1.112.462-.463.463-.463 1.113 0 .65.463 1.112.462.463 1.112.463ZM5.35 18H16.9Z"/>
    </Icon>
  );
});

IconMaterialAirlinesW100.displayName = 'AmauiIconMaterialAirlinesW100';

export default IconMaterialAirlinesW100;
