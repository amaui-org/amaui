import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitArrowDownwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitArrowDownwardFilled'

      short_name='FitbitArrowDownward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 816 240 576l56-56 144 143V336h80v327l144-143 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowDownwardFilled.displayName = 'AmauiIconMaterialFitbitArrowDownwardFilled';

export default IconMaterialFitbitArrowDownwardFilled;
