import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategorySearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySearchFilled'

      short_name='CategorySearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-140q-17 0-28.5-11.5T80-180v-240q0-17 11.5-28.5T120-460h240q17 0 28.5 11.5T400-420v240q0 17-11.5 28.5T360-140H120Zm469-420H291q-23 0-34.5-20.5t.5-40.5l149-243q12-20 34-20t34 20l149 243q12 20 .5 40.5T589-560ZM835-70l-78-78q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204l78 78q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialCategorySearchFilled.displayName = 'AmauiIconMaterialCategorySearchFilled';

export default IconMaterialCategorySearchFilled;
