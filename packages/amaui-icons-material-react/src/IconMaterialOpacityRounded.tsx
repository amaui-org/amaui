import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpacityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacityRounded'
      short_name='Opacity'

      {...props}
    >
      <path d="M12 21Q8.675 21 6.338 18.7Q4 16.4 4 13.1Q4 11.475 4.625 10.062Q5.25 8.65 6.35 7.55L11.3 2.7Q11.45 2.55 11.625 2.475Q11.8 2.4 12 2.4Q12.2 2.4 12.375 2.475Q12.55 2.55 12.7 2.7L17.65 7.55Q18.75 8.65 19.375 10.062Q20 11.475 20 13.1Q20 16.4 17.663 18.7Q15.325 21 12 21ZM6.05 14H17.9Q18.2 12.2 17.562 10.925Q16.925 9.65 16.25 9L12 4.8L7.75 9Q7.075 9.65 6.425 10.925Q5.775 12.2 6.05 14Z"/>
    </Icon>
  );
});

IconMaterialOpacityRounded.displayName = 'AmauiIconMaterialOpacityRounded';

export default IconMaterialOpacityRounded;
