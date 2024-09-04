import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize2W100Filled'

      short_name='EraserSize2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-252q-39.17 0-66.58-27.41Q252-306.83 252-345.99q0-18.01 7-35.01 7-17 21-31l268-268q14-14 31.21-21 17.2-7 34.79-7 39.17 0 66.58 27.41Q708-653.17 708-614.01q0 18.01-7 35.01-7 17-21 31L412-280q-14 14-31.21 21-17.2 7-34.79 7Z"/>
    </Icon>
  );
});

IconMaterialEraserSize2W100Filled.displayName = 'AmauiIconMaterialEraserSize2W100Filled';

export default IconMaterialEraserSize2W100Filled;
