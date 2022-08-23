import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpacitySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacitySharpFilled'
      short_name='Opacity'

      {...props}
    >
      <path d="M12 21Q8.675 21 6.338 18.712Q4 16.425 4 13.15Q4 11.5 4.625 10.075Q5.25 8.65 6.35 7.55L12 2L17.65 7.55Q18.75 8.65 19.375 10.075Q20 11.5 20 13.15Q20 16.425 17.663 18.712Q15.325 21 12 21ZM6.05 14H17.9Q18.2 12.2 17.562 10.925Q16.925 9.65 16.25 9L12 4.8L7.75 9Q7.075 9.65 6.425 10.925Q5.775 12.2 6.05 14Z"/>
    </Icon>
  );
});

IconMaterialOpacitySharpFilled.displayName = 'AmauiIconMaterialOpacitySharpFilled';

export default IconMaterialOpacitySharpFilled;
