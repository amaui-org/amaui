import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBacklightHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightHighFilled'

      short_name='BacklightHigh'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 696v-80h160v80H40Zm214-210L141 373l56-57 113 114-56 56Zm26 330V696h400v120H280Zm160-440V176h80v200h-80Zm266 110-56-56 113-113 57 56-114 113Zm54 210v-80h160v80H760Z"/>
    </Icon>
  );
});

IconMaterialBacklightHighFilled.displayName = 'AmauiIconMaterialBacklightHighFilled';

export default IconMaterialBacklightHighFilled;
