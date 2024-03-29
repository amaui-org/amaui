import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeft'

      short_name='RampLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.425 0-.712-.288Q11 20.425 11 20V6.8l-.9.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-.9-.9V9q0 2.725 1.688 4.65 1.687 1.925 3.262 2.975.425.275.475.725.05.45-.3.8-.25.25-.612.3-.363.05-.638-.15-1.2-.8-2.175-1.7-.975-.9-1.7-1.9V20q0 .425-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialRampLeft.displayName = 'AmauiIconMaterialRampLeft';

export default IconMaterialRampLeft;
