import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi2BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarFilled'

      short_name='Wifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 14.275q-.45-.45-.425-1.075.025-.625.5-.975 1.375-1.05 3.063-1.638Q10.125 10 12 10q1.9 0 3.588.6 1.687.6 3.062 1.675.475.35.488.963.012.612-.438 1.062-.425.425-1.037.438-.613.012-1.138-.338-.975-.675-2.112-1.037Q13.275 13 12 13t-2.412.375Q8.45 13.75 7.5 14.4q-.55.375-1.162.338-.613-.038-1.038-.463ZM12 20q-.85 0-1.425-.575Q10 18.85 10 18q0-.85.575-1.425Q11.15 16 12 16q.85 0 1.425.575Q14 17.15 14 18q0 .85-.575 1.425Q12.85 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarFilled.displayName = 'AmauiIconMaterialWifi2BarFilled';

export default IconMaterialWifi2BarFilled;
