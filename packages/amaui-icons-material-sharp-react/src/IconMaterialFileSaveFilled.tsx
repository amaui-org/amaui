import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveFilled'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560 0v-80h320V0H560Zm160-120L560-280l56-56 64 64v-167h80v167l64-64 56 56-160 160Zm-560-40v-720h360l240 240v121H480v359H160Zm320-440h200L480-800v200Z"/>
    </Icon>
  );
});

IconMaterialFileSaveFilled.displayName = 'AmauiIconMaterialFileSaveFilled';

export default IconMaterialFileSaveFilled;
