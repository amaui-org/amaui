import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2dW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2dW100'

      short_name='2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-376h148v-28H308v-62h120v-118H280v28h120v62H280v118ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Zm312-176h146l22-23v-163l-22-22H512v208Zm28-28v-152h112v152H540Z"/>
    </Icon>
  );
});

IconMaterial2dW100.displayName = 'AmauiIconMaterial2dW100';

export default IconMaterial2dW100;
