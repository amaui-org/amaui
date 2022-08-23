import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness2SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2SharpW100Filled'
      short_name='Brightness2'

      {...props}
    >
      <path d="M8.85 3.3Q10.65 3.3 12.238 3.987Q13.825 4.675 15 5.85Q16.175 7.025 16.863 8.612Q17.55 10.2 17.55 12Q17.55 13.8 16.863 15.387Q16.175 16.975 15 18.15Q13.825 19.325 12.238 20.012Q10.65 20.7 8.85 20.7Q8.225 20.7 7.625 20.625Q7.025 20.55 6.45 20.35Q8.225 18.725 9.188 16.562Q10.15 14.4 10.15 12Q10.15 9.6 9.188 7.437Q8.225 5.275 6.45 3.65Q7.025 3.45 7.625 3.375Q8.225 3.3 8.85 3.3Z"/>
    </Icon>
  );
});

IconMaterialBrightness2SharpW100Filled.displayName = 'AmauiIconMaterialBrightness2SharpW100Filled';

export default IconMaterialBrightness2SharpW100Filled;
