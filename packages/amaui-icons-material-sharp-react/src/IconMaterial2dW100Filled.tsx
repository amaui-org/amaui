import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2dW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2dW100Filled'

      short_name='2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-376h148v-28H308v-62h120v-118H280v28h120v62H280v118ZM172-172v-616h616v616H172Zm340-204h146l22-23v-163l-22-22H512v208Zm28-28v-152h112v152H540Z"/>
    </Icon>
  );
});

IconMaterial2dW100Filled.displayName = 'AmauiIconMaterial2dW100Filled';

export default IconMaterial2dW100Filled;
