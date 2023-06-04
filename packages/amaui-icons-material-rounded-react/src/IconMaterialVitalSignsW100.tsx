import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVitalSignsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VitalSignsW100'

      short_name='VitalSigns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 17.725q-.2 0-.362-.125-.163-.125-.238-.325l-2-4.925H2.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.225q.225 0 .413.137.187.138.287.338L9.55 16.9l4.3-10.2q.075-.2.238-.325.162-.125.362-.125.2 0 .362.125.163.125.238.325l2.05 4.95h4.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H17.1q-.225 0-.4-.138-.175-.137-.275-.337l-1.975-4.8-4.3 10.2q-.075.2-.237.325-.163.125-.363.125Z"/>
    </Icon>
  );
});

IconMaterialVitalSignsW100.displayName = 'AmauiIconMaterialVitalSignsW100';

export default IconMaterialVitalSignsW100;
