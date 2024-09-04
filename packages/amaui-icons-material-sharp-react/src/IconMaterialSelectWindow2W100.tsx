import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindow2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindow2W100'

      short_name='SelectWindow2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160h492v-380H160v380Zm520-232v-28h120v-380H308v232h-28v-260h548v436H680ZM132-132v-436h548v436H132Zm422-567ZM406-350Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2W100.displayName = 'AmauiIconMaterialSelectWindow2W100';

export default IconMaterialSelectWindow2W100;
