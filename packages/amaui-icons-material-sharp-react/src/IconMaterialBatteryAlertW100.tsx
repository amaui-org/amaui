import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertW100'

      short_name='BatteryAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Zm4.4-4q.225 0 .388-.162.162-.163.162-.388t-.162-.387q-.163-.163-.388-.163t-.387.163q-.163.162-.163.387t.163.388q.162.162.387.162Zm-.4-2.65h.7V8.6h-.7Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlertW100.displayName = 'AmauiIconMaterialBatteryAlertW100';

export default IconMaterialBatteryAlertW100;
