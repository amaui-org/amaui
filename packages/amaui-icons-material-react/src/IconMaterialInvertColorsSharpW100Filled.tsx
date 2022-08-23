import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInvertColorsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsSharpW100Filled'
      short_name='InvertColors'

      {...props}
    >
      <path d="M12 19.7Q9.2 19.7 7.25 17.788Q5.3 15.875 5.3 13.125Q5.3 11.7 5.838 10.55Q6.375 9.4 7.25 8.45L12 3.8L16.75 8.45Q17.625 9.4 18.163 10.587Q18.7 11.775 18.7 13.125Q18.7 15.875 16.75 17.788Q14.8 19.7 12 19.7ZM12 19V4.8L7.75 9Q6.875 9.825 6.438 10.875Q6 11.925 6 13.125Q6 15.55 7.75 17.275Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsSharpW100Filled.displayName = 'AmauiIconMaterialInvertColorsSharpW100Filled';

export default IconMaterialInvertColorsSharpW100Filled;
