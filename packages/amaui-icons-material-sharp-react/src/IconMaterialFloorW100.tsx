import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorW100'

      short_name='Floor'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 950v-28h140V742h180V562h180V382h180V242h28v168H674v180H494v180H314v180H146Z"/>
    </Icon>
  );
});

IconMaterialFloorW100.displayName = 'AmauiIconMaterialFloorW100';

export default IconMaterialFloorW100;
