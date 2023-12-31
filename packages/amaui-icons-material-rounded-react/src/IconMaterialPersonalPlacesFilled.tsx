import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalPlacesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalPlacesFilled'

      short_name='PersonalPlaces'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160v-560q0-33 23.5-56.5T320-800h298q20 0 37 9t28 25l85 120q14 21 14 46t-14 46l-85 120q-11 16-28 25t-37 9H320v240q0 17-11.5 28.5T280-120q-17 0-28.5-11.5T240-160Z"/>
    </Icon>
  );
});

IconMaterialPersonalPlacesFilled.displayName = 'AmauiIconMaterialPersonalPlacesFilled';

export default IconMaterialPersonalPlacesFilled;
