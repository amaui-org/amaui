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
      <path d="M4.025 18.7 12.9 5.775q.15-.225.412-.35.263-.125.538-.125h5.275q.35 0 .55.25.2.25.15.575L17.475 18.7Zm10.025-5.625q.65 0 1.113-.463.462-.462.462-1.112 0-.65-.462-1.113-.463-.462-1.113-.462-.65 0-1.112.462-.463.463-.463 1.113 0 .65.463 1.112.462.463 1.112.463Z"/>
    </Icon>
  );
});

IconMaterialAirlinesW100Filled.displayName = 'AmauiIconMaterialAirlinesW100Filled';

export default IconMaterialAirlinesW100Filled;
