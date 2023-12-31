import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallLogFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLogFilled'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800v-80h400v80H480Zm0 160v-80h400v80H480Zm0 160v-80h400v80H480ZM758-80q-129 0-251.5-57.5t-217-152q-94.5-94.5-152-217T80-758v-42h236l37 200-113 116q42 72 105 135t139 109l116-116 200 40v236h-42Z"/>
    </Icon>
  );
});

IconMaterialCallLogFilled.displayName = 'AmauiIconMaterialCallLogFilled';

export default IconMaterialCallLogFilled;
