import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize5W100'

      short_name='PenSize5'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M253 803q-28-28-28-67t28-67l320-320q28-28 67-28t67 28q28 28 28 67t-28 67L387 803q-28 28-67 28t-67-28Z"/>
    </Icon>
  );
});

IconMaterialPenSize5W100.displayName = 'AmauiIconMaterialPenSize5W100';

export default IconMaterialPenSize5W100;
