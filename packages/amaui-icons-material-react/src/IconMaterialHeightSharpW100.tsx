import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeightSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightSharpW100'
      short_name='Height'

      {...props}
    >
      <path d="M12 20.1 8.9 17 9.4 16.45 11.65 18.7V5.3L9.4 7.55L8.9 7L12 3.9L15.1 7L14.6 7.55L12.35 5.3V18.7L14.6 16.45L15.1 17Z"/>
    </Icon>
  );
});

IconMaterialHeightSharpW100.displayName = 'AmauiIconMaterialHeightSharpW100';

export default IconMaterialHeightSharpW100;
