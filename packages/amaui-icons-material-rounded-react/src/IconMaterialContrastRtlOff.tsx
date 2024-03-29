import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrastRtlOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastRtlOff'

      short_name='ContrastRtlOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m791 999-90-89q-48 32-103.5 49T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-62 17-117.5T146 355l-91-91q-12-12-11.5-28.5T56 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791 999ZM480 896q45 0 85.5-12t76.5-33L480 689v207Zm335-100-59-59q21-35 32.5-75.5T800 576q0-133-93.5-226.5T480 256v205L260 241q48-31 103.5-48T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 61-17 116.5T815 796Z"/>
    </Icon>
  );
});

IconMaterialContrastRtlOff.displayName = 'AmauiIconMaterialContrastRtlOff';

export default IconMaterialContrastRtlOff;
