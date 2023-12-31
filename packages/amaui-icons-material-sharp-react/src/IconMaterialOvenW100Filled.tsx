import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOvenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenW100Filled'

      short_name='Oven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-608v-180h616v180H172Zm0 436v-408h616v408H172Zm148-488q17 0 28.5-11.5T360-700q0-17-11.5-28.5T320-740q-17 0-28.5 11.5T280-700q0 17 11.5 28.5T320-660Zm100 220h120v-40H420v40Zm60-220q17 0 28.5-11.5T520-700q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700q0 17 11.5 28.5T480-660Zm160 0q17 0 28.5-11.5T680-700q0-17-11.5-28.5T640-740q-17 0-28.5 11.5T600-700q0 17 11.5 28.5T640-660Z"/>
    </Icon>
  );
});

IconMaterialOvenW100Filled.displayName = 'AmauiIconMaterialOvenW100Filled';

export default IconMaterialOvenW100Filled;
