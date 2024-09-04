import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGondolaLiftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GondolaLiftW100'

      short_name='GondolaLift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-286q0-49 36-83.5t88-34.5h170v-149L92-624v-27l191-52q-2-4-3-7t-1-8q0-14 9.5-23t23.5-9q14 0 22.5 9t9.5 22l122-33v-36h28v28l126-34q-2-4-3-7.5t-1-8.5q0-14 9-23.5t23-9.5q14 0 23.5 9.5T681-810l187-51v27L494-733v157h170q52 0 88 34.5t36 83.5v286H172Zm28-28h560v-140H200v140Zm0-168h168v-180h-72q-40 0-68 26.5T200-458v90Zm196 0h168v-180H396v180Zm196 0h168v-90q0-37-28-63.5T664-548h-72v180ZM200-200v-140 140Z"/>
    </Icon>
  );
});

IconMaterialGondolaLiftW100.displayName = 'AmauiIconMaterialGondolaLiftW100';

export default IconMaterialGondolaLiftW100;
