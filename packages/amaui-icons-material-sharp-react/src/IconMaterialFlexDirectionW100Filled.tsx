import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexDirectionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirectionW100Filled'

      short_name='FlexDirection'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V626h300v218H132Zm0-318V308h300v218H132Zm28-28h244V336H160v162Zm505 346L502 681l19-19 130 128V308h28v482l130-128 19 19-163 163Z"/>
    </Icon>
  );
});

IconMaterialFlexDirectionW100Filled.displayName = 'AmauiIconMaterialFlexDirectionW100Filled';

export default IconMaterialFlexDirectionW100Filled;
