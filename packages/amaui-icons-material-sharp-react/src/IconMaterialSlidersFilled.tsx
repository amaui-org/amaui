import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlidersFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlidersFilled'

      short_name='Sliders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-360v-240h800v240H80Zm480-80h240v-80H560v80Z"/>
    </Icon>
  );
});

IconMaterialSlidersFilled.displayName = 'AmauiIconMaterialSlidersFilled';

export default IconMaterialSlidersFilled;
