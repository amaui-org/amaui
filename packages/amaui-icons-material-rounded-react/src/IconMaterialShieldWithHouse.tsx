import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouse'

      short_name='ShieldWithHouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.025 11.65 4.75-3.7q.55-.425 1.225-.425t1.225.425l4.75 3.7q0-.125.013-.275.012-.15.012-.275V6.375l-6-2.25-6 2.25V11.1q0 .125.013.275.012.15.012.275ZM10 18.9V16q0-.425.288-.713Q10.575 15 11 15h2q.425 0 .713.287.287.288.287.713v2.9q1.275-.875 2.188-2.163.912-1.287 1.387-2.862L12 9.525l-5.575 4.35q.475 1.575 1.387 2.862Q8.725 18.025 10 18.9Zm2 3.025h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouse.displayName = 'AmauiIconMaterialShieldWithHouse';

export default IconMaterialShieldWithHouse;
