import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPediatrics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pediatrics'

      short_name='Pediatrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 376v-80h160V176h80v120h160v80H280Zm0 600V536q0-50 35-85t85-35h160q50 0 85 35t35 85v440H280Zm80-80h240V536q0-17-11.5-28.5T560 496H400q-17 0-28.5 11.5T360 536v40h120v80H360v80h120v80H360v80Zm0 0V496v400Z"/>
    </Icon>
  );
});

IconMaterialPediatrics.displayName = 'AmauiIconMaterialPediatrics';

export default IconMaterialPediatrics;
