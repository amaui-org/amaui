import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothSearchingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSearchingW100'

      short_name='BluetoothSearching'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 21.1v-8.25L4.8 18.1l-.5-.5L9.9 12 4.3 6.4l.5-.5 5.25 5.25V2.9h.35l4.8 4.8-4.3 4.3 4.3 4.3-4.8 4.8Zm.7-9.95L14.2 7.7l-3.45-3.45Zm0 8.6 3.45-3.45-3.45-3.45Zm6-6.35-1.4-1.4 1.4-1.4q.1.35.175.7.075.35.075.7t-.062.7q-.063.35-.188.7Zm2 2-.5-.5q.35-.675.55-1.4.2-.725.2-1.5t-.2-1.5q-.2-.725-.55-1.4l.5-.5q.475.775.713 1.638.237.862.237 1.762t-.237 1.762q-.238.863-.713 1.638Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSearchingW100.displayName = 'AmauiIconMaterialBluetoothSearchingW100';

export default IconMaterialBluetoothSearchingW100;
