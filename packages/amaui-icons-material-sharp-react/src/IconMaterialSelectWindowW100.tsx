import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindowW100'

      short_name='SelectWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-142v-416h160v-260h536v416H668v260H132Zm28-28h480v-280H160v280Zm508-260h132v-280H320v152h348v128Z"/>
    </Icon>
  );
});

IconMaterialSelectWindowW100.displayName = 'AmauiIconMaterialSelectWindowW100';

export default IconMaterialSelectWindowW100;
