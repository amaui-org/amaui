import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactSupportFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportFilled'

      short_name='ContactSupport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 22-.25-3h-.25q-3.55 0-6.025-2.475Q3 14.05 3 10.5q0-3.55 2.475-6.025Q7.95 2 11.5 2q1.775 0 3.312.662 1.538.663 2.701 1.825 1.162 1.163 1.824 2.7Q20 8.725 20 10.5q0 3.8-2.275 6.812Q15.45 20.325 12 22Zm-.525-6.025q.425 0 .725-.3t.3-.725q0-.425-.3-.725t-.725-.3q-.425 0-.725.3t-.3.725q0 .425.3.725t.725.3ZM11.5 12.8q.275 0 .5-.2.225-.2.3-.55.05-.325.275-.588.225-.262.775-.812.45-.45.75-.975.3-.525.3-1.125 0-1.275-.862-1.913Q12.675 6 11.5 6q-.875 0-1.512.4-.638.4-1.038 1-.175.275-.063.575.113.3.463.425.25.1.5 0t.45-.375q.2-.275.488-.45.287-.175.712-.175.675 0 1.013.375.337.375.337.825 0 .425-.25.762-.25.338-.6.688-.7.6-.938.975-.237.375-.287 1.025-.025.3.188.525.212.225.537.225Z"/>
    </Icon>
  );
});

IconMaterialContactSupportFilled.displayName = 'AmauiIconMaterialContactSupportFilled';

export default IconMaterialContactSupportFilled;
