import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpacitySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacitySharpW100Filled'
      short_name='Opacity'

      {...props}
    >
      <path d="M12 19.7Q9.2 19.7 7.25 17.8Q5.3 15.9 5.3 13.15Q5.3 11.8 5.838 10.6Q6.375 9.4 7.25 8.45L12 3.8L16.75 8.45Q17.625 9.4 18.163 10.6Q18.7 11.8 18.7 13.15Q18.7 15.9 16.75 17.8Q14.8 19.7 12 19.7ZM6.075 14H17.925Q18.225 12.2 17.575 10.9Q16.925 9.6 16.25 8.95L12 4.75L7.75 8.95Q7.075 9.6 6.438 10.9Q5.8 12.2 6.075 14Z"/>
    </Icon>
  );
});

IconMaterialOpacitySharpW100Filled.displayName = 'AmauiIconMaterialOpacitySharpW100Filled';

export default IconMaterialOpacitySharpW100Filled;
