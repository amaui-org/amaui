import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalPlacesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalPlacesW100'

      short_name='PersonalPlaces'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-212v-506q0-13 8.5-21.5T322-748h280q15 0 28.5 7t21.5 19l60 88q11 16 11 34t-11 34l-60 88q-8 12-21.5 19t-28.5 7H320v240q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm28-268h283q8 0 14.5-3.5T629-494l59-88q5-8 5-18t-5-18l-59-88q-5-7-11.5-10.5T603-720H320v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialPersonalPlacesW100.displayName = 'AmauiIconMaterialPersonalPlacesW100';

export default IconMaterialPersonalPlacesW100;
