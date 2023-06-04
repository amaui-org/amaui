import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryUnknownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownW100Filled'

      short_name='BatteryUnknown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Zm4.35-4q.225 0 .388-.162.162-.163.162-.388t-.162-.387q-.163-.163-.388-.163t-.387.163q-.163.162-.163.387t.163.388q.162.162.387.162Zm-.35-2.65h.7q0-.65.325-1.088.325-.437.725-.825.4-.387.725-.8.325-.412.325-1.037 0-1.1-.675-1.725T12 8.6q-.9 0-1.475.45-.575.45-.875 1.1l.65.25q.2-.45.613-.775Q11.325 9.3 12 9.3q.95 0 1.35.5.4.5.4 1.1 0 .55-.325.912-.325.363-.725.738-.4.375-.725.862-.325.488-.325 1.288Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownW100Filled.displayName = 'AmauiIconMaterialBatteryUnknownW100Filled';

export default IconMaterialBatteryUnknownW100Filled;
