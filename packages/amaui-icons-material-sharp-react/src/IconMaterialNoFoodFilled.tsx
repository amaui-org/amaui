import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodFilled'

      short_name='NoFood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.625 18.75 11.45 8.6 11 5h5V1h2v4h5ZM1 19v-2h15v2Zm0 4v-2h15v2Zm19.475.3-8.3-8.3H1q0-3.025 2.338-4.512Q5.675 9 8.5 9q.125 0 .262.012.138.013.288.013l-.025 2.825L.675 3.5 2.1 2.075l19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialNoFoodFilled.displayName = 'AmauiIconMaterialNoFoodFilled';

export default IconMaterialNoFoodFilled;
