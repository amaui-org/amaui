import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomRightFilled'

      short_name='PositionBottomRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 776h280q17 0 28.5-11.5T720 736v-40q0-17-11.5-28.5T680 656H400q-17 0-28.5 11.5T360 696v40q0 17 11.5 28.5T400 776ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomRightFilled.displayName = 'AmauiIconMaterialPositionBottomRightFilled';

export default IconMaterialPositionBottomRightFilled;
