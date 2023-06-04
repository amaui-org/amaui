import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinInvokeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeFilled'

      short_name='PinInvoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.05 16.375-1.4-1.425L11.6 12H9.35v-2H15v5.65h-2v-2.225ZM19 10q-1.25 0-2.125-.875T16 7q0-1.25.875-2.125T19 4q1.25 0 2.125.875T22 7q0 1.25-.875 2.125T19 10ZM2 20V4h12v2H4v12h16v-6h2v8Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeFilled.displayName = 'AmauiIconMaterialPinInvokeFilled';

export default IconMaterialPinInvokeFilled;
