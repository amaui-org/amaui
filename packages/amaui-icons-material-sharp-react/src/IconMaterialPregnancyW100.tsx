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
      <path d="M438-106v-226h-66v-258q0-29 19.5-48.5T440-658q29 0 48.5 19.5T508-590q36 8 58 38t22 68v152H480v226h-42Zm2-626q-27 0-45.5-18.5T376-796q0-27 18.5-45.5T440-860q27 0 45.5 18.5T504-796q0 27-18.5 45.5T440-732Z"/>
    </Icon>
  );
});

IconMaterialPregnancyW100.displayName = 'AmauiIconMaterialPregnancyW100';

export default IconMaterialPregnancyW100;
