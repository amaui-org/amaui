import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Floor'

      short_name='Floor'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 976v-80h140V716h180V536h180V356h180V216h80v220H700v180H520v180H340v180H120Z"/>
    </Icon>
  );
});

IconMaterialFloor.displayName = 'AmauiIconMaterialFloor';

export default IconMaterialFloor;
