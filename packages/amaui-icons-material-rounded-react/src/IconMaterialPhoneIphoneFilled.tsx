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
      <path d="M12 20.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q12.425 18.5 12 18.5t-.712.288Q11 19.075 11 19.5t.288.712q.287.288.712.288ZM7 16h10V6H7Zm0 7q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneFilled.displayName = 'AmauiIconMaterialPhoneIphoneFilled';

export default IconMaterialPhoneIphoneFilled;
