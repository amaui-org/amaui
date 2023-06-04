import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDownFilled'

      short_name='TextSelectMoveDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 296v-80h720v80H120Zm360 480L320 616l56-56 64 63V376h80v247l64-63 56 56-160 160ZM120 936v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDownFilled.displayName = 'AmauiIconMaterialTextSelectMoveDownFilled';

export default IconMaterialTextSelectMoveDownFilled;
