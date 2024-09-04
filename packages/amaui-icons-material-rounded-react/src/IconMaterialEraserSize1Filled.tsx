import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize1Filled'

      short_name='EraserSize1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200q-33 0-56.5-23.5T200-280q0-15 6-29.5t18-26.5l400-400q12-12 26.5-18t29.5-6q33 0 56.5 23.5T760-680q0 15-5.5 30T737-623L337-223q-12 12-26.5 17.5T280-200Z"/>
    </Icon>
  );
});

IconMaterialEraserSize1Filled.displayName = 'AmauiIconMaterialEraserSize1Filled';

export default IconMaterialEraserSize1Filled;
