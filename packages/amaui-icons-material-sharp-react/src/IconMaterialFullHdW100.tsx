import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullHdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullHdW100'

      short_name='FullHd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-376h28v-80h92v80h28v-208h-28v100h-92v-100h-28v208Zm208 0h134l14-14v-180l-14-14H604v208Zm28-28v-152h92v152h-92Zm-424 28h28v-84h80v-28h-80v-68h100v-28H208v208ZM92-212v-536h776v536H92Zm28-28h720v-480H120v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFullHdW100.displayName = 'AmauiIconMaterialFullHdW100';

export default IconMaterialFullHdW100;
