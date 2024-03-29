import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkFilled'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.8 0-1.375-.575t-.575-1.375V18H4.875q-.6 0-.9-.525-.3-.525.05-1.025L7 12h-.075q-.6 0-.888-.538-.287-.537.063-1.037l5.075-7.25q.15-.2.375-.313.225-.112.45-.112t.45.112q.225.113.375.313l5.075 7.25q.35.5.062 1.037-.287.538-.887.538H17l2.975 4.45q.35.5.05 1.025-.3.525-.9.525H13.95v2.05q0 .8-.575 1.375T12 22Z"/>
    </Icon>
  );
});

IconMaterialParkFilled.displayName = 'AmauiIconMaterialParkFilled';

export default IconMaterialParkFilled;
