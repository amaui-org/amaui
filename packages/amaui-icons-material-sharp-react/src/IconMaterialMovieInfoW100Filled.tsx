import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieInfoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieInfoW100Filled'

      short_name='MovieInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-146v-668h736v668H112Zm28-28h132v-132H140v132Zm548 0h132v-132H688v132ZM466-336h28v-194h-28v194Zm-326 2h132v-132H140v132Zm548 0h132v-132H688v132ZM140-494h132v-132H140v132Zm548 0h132v-132H688v132ZM480-600q8.5 0 14.25-5.75T500-620q0-8.5-5.75-14.25T480-640q-8.5 0-14.25 5.75T460-620q0 8.5 5.75 14.25T480-600Zm-340-54h132v-132H140v132Zm548 0h132v-132H688v132Z"/>
    </Icon>
  );
});

IconMaterialMovieInfoW100Filled.displayName = 'AmauiIconMaterialMovieInfoW100Filled';

export default IconMaterialMovieInfoW100Filled;
