import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneFilled'

      short_name='PhoneIphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q12.425 18.5 12 18.5t-.712.288Q11 19.075 11 19.5t.288.712q.287.288.712.288ZM5 23V1h14v22Zm2-7h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneFilled.displayName = 'AmauiIconMaterialPhoneIphoneFilled';

export default IconMaterialPhoneIphoneFilled;
