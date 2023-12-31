import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPregnancyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnancyW100'

      short_name='Pregnancy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-732q-27 0-45.5-18.5T376-796q0-27 18.5-45.5T440-860q27 0 45.5 18.5T504-796q0 27-18.5 45.5T440-732Zm18.824 626Q450-106 444-112.125T438-127v-205h-36q-12.75 0-21.375-8.625T372-362v-228q0-29 19.5-48.5T440-658q29 0 48.5 19.5T508-590q36 8 58 38t22 68v122q0 12.75-8.625 21.375T558-332h-78v205q0 8.75-6.176 14.875-6.177 6.125-15 6.125Z"/>
    </Icon>
  );
});

IconMaterialPregnancyW100.displayName = 'AmauiIconMaterialPregnancyW100';

export default IconMaterialPregnancyW100;
