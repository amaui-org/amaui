import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkilletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkilletW100'

      short_name='Skillet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-216h508v-65l224-75 9 26-205 69v261H132Zm28-28h480v-160H160v160Zm388-288q2-32-7-59t-35-67q-25-39-33.5-69t-6.5-65h29q-2 32 6.5 59t34.5 67q25 39 34 69t7 65h-29Zm-316 0q2-32-6.5-59T191-654q-25-39-34-69t-7-65h29q-2 32 6.5 59t34.5 67q25 39 34 69t7 65h-29Zm156 0q2-32-6.5-59T347-654q-25-39-34-69t-7-65h29q-2 32 6.5 59t34.5 67q25 39 34 69t7 65h-29Zm12 208Z"/>
    </Icon>
  );
});

IconMaterialSkilletW100.displayName = 'AmauiIconMaterialSkilletW100';

export default IconMaterialSkilletW100;
