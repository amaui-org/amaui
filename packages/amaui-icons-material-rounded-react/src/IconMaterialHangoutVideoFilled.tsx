import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoFilled'

      short_name='HangoutVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320h240q17 0 28.5-11.5T560-360v-88l111 89q15 12 32 4t17-27v-196q0-19-17-27t-32 4l-111 89v-88q0-17-11.5-28.5T520-640H280q-17 0-28.5 11.5T240-600v240q0 17 11.5 28.5T280-320ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoFilled.displayName = 'AmauiIconMaterialHangoutVideoFilled';

export default IconMaterialHangoutVideoFilled;
