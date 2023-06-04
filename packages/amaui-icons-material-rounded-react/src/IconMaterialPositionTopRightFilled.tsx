import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionTopRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightFilled'

      short_name='PositionTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 496h280q17 0 28.5-11.5T720 456v-40q0-17-11.5-28.5T680 376H400q-17 0-28.5 11.5T360 416v40q0 17 11.5 28.5T400 496ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightFilled.displayName = 'AmauiIconMaterialPositionTopRightFilled';

export default IconMaterialPositionTopRightFilled;
