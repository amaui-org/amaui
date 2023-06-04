import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveForwardWordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveForwardWordFilled'

      short_name='TextSelectMoveForwardWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm-80 440-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM120 936V216h240v720H120Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveForwardWordFilled.displayName = 'AmauiIconMaterialTextSelectMoveForwardWordFilled';

export default IconMaterialTextSelectMoveForwardWordFilled;
