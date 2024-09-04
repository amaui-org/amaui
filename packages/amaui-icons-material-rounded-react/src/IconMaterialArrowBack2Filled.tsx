import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBack2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBack2Filled'

      short_name='ArrowBack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M253-446q-9-6-13.5-15t-4.5-19q0-10 4.5-19t13.5-15l326-207q5-3 10.5-4.5T600-727q16 0 28 11.5t12 28.5v414q0 17-12 28.5T600-233q-5 0-10.5-1.5T579-239L253-446Z"/>
    </Icon>
  );
});

IconMaterialArrowBack2Filled.displayName = 'AmauiIconMaterialArrowBack2Filled';

export default IconMaterialArrowBack2Filled;
