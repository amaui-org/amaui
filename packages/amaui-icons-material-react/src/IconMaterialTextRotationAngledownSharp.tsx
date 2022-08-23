import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotationAngledownSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledownSharp'
      short_name='TextRotationAngledown'

      {...props}
    >
      <path d="M10 21V19H11.6L2.3 9.7L3.7 8.3L13 17.6V16H15V21ZM15.1 15.45 13.75 14.1 15.05 11.45 11.9 8.3 9.25 9.55 7.9 8.2 18.6 3.35 20 4.75ZM13.45 7.55 15.75 9.9 17.85 5.55 17.8 5.5Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledownSharp.displayName = 'AmauiIconMaterialTextRotationAngledownSharp';

export default IconMaterialTextRotationAngledownSharp;
