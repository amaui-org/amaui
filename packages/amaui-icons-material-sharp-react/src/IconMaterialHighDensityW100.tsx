import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighDensityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighDensityW100'

      short_name='HighDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884v-28h28v28h-28Zm108 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h28v28h-28Zm0-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-150v-28h28v28h-28ZM172 776V268h508v508H172Zm28-28h452V296H200v452Zm0 0V296v452Z"/>
    </Icon>
  );
});

IconMaterialHighDensityW100.displayName = 'AmauiIconMaterialHighDensityW100';

export default IconMaterialHighDensityW100;
