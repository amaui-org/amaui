import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffFilled'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 22.6-7.075-7.075L7.25 21H3v-4.25l5.475-5.475L1.4 4.2l1.425-1.425 18.4 18.4Zm-4.225-9.925-4.25-4.25L13.6 6.15l4.25 4.25Zm3.725-3.75-4.25-4.2L17.875 1.9 22.1 6.125Z"/>
    </Icon>
  );
});

IconMaterialEditOffFilled.displayName = 'AmauiIconMaterialEditOffFilled';

export default IconMaterialEditOffFilled;
