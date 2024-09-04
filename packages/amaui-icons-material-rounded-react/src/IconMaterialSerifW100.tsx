import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSerifW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SerifW100'

      short_name='Serif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-253h-26l-6 7q0 2 6 6h102l6-6q0-3-1.5-5t-4.5-2h-55l54-147h169l53 147h-52l-6 7q0 2 6 6h133l6-6q0-3-1.5-5t-4.5-2h-25L462-717q-1-2-1.5-2.5t-2.5-.5h-4q-2 0-3 .5t-2 2.5L280-253Zm80-162 80-220 79 220H360ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-576q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm-32 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialSerifW100.displayName = 'AmauiIconMaterialSerifW100';

export default IconMaterialSerifW100;
