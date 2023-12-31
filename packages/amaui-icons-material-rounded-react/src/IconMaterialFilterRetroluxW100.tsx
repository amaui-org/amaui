import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterRetroluxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterRetroluxW100'

      short_name='FilterRetrolux'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m572-190-78-78q2 42-28 73t-72 31q-42.143 0-71.071-28.9Q294-221.799 294-263.9q0-42.1 28.929-71.1 28.928-29 71.071-29 20 0 37.5 7t32.5 21L306-574q-6-9-5.5-19t8.451-18l150.278-151.2q4.771-4.8 9.904-6.8 5.134-2 11-2Q486-771 491-769q5 2 9.771 6.8L651.049-611q7.951 8 8.451 18 .5 10-5.5 19L496-336v30l96 96q4 4 4.5 9.5t-4.283 10.5Q587-185 582-185q-5 0-10-5Zm-178-2q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm86-170 152-230-152-152-152 152 152 230Zm0-191Z"/>
    </Icon>
  );
});

IconMaterialFilterRetroluxW100.displayName = 'AmauiIconMaterialFilterRetroluxW100';

export default IconMaterialFilterRetroluxW100;
