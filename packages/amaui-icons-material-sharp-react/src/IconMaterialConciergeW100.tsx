import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConciergeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConciergeW100'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M94-496v-292h136v50l312-92 268 84v86H616v60L330-496H94Zm28-28h80v-236h-80v236Zm108 0h96l262-96v-40h-79l-117 39-10-27 124-40h276v-37l-242-75-310 92v184Zm222 392h416v-28H452v28Zm40-88h336q0-66-44.5-114T674-387v-28h-28v28q-65 5-109.5 53T492-220Zm31-28q10-49 48-81t89-32q51 0 88.5 32t47.5 81H523Zm137 0Z"/>
    </Icon>
  );
});

IconMaterialConciergeW100.displayName = 'AmauiIconMaterialConciergeW100';

export default IconMaterialConciergeW100;
