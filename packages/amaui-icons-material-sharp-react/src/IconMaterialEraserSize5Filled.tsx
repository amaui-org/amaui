import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize5Filled'

      short_name='EraserSize5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-120q-118 0-200-82t-82-200q0-54 20-105.5t62-93.5l157-157q42-42 93.5-62T558-840q118 0 200 82t82 200q0 54-20 105.5T758-359L601-202q-42 42-93.5 62T402-120Z"/>
    </Icon>
  );
});

IconMaterialEraserSize5Filled.displayName = 'AmauiIconMaterialEraserSize5Filled';

export default IconMaterialEraserSize5Filled;
