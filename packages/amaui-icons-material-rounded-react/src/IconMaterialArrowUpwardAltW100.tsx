import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpwardAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardAltW100'

      short_name='ArrowUpwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-680 306-520q-4 4-9.5 4.5T286-520q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-520q-5 5-10 5t-10-5L494-680v390q0 6-4 10t-10 4q-6 0-10-4t-4-10v-390Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardAltW100.displayName = 'AmauiIconMaterialArrowUpwardAltW100';

export default IconMaterialArrowUpwardAltW100;
