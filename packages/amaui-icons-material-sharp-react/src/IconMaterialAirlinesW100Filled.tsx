import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlinesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesW100Filled'

      short_name='Airlines'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.025 18.7 9.2-13.4h6.75l-2.5 13.4Zm10.025-5.625q.65 0 1.113-.463.462-.462.462-1.112 0-.65-.462-1.113-.463-.462-1.113-.462-.65 0-1.112.462-.463.463-.463 1.113 0 .65.463 1.112.462.463 1.112.463Z"/>
    </Icon>
  );
});

IconMaterialAirlinesW100Filled.displayName = 'AmauiIconMaterialAirlinesW100Filled';

export default IconMaterialAirlinesW100Filled;
