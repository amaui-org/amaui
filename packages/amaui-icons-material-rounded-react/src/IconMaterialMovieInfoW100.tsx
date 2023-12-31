import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieInfoW100'

      short_name='MovieInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-146q-26 0-43-17t-17-43v-548q0-26 17-43t43-17h616q26 0 43 17t17 43v548q0 26-17 43t-43 17H172Zm0-28h85q7 0 11-4.5t4-10.5v-102q0-7-4-11t-11-4H155q-6 0-10.5 4t-4.5 11v85q0 14 9 23t23 9Zm531 0h85q14 0 23-9t9-23v-85q0-7-4-11t-11-4H703q-6 0-10.5 4t-4.5 11v102q0 6 4.5 10.5T703-174ZM480-336q6 0 10-4t4-10v-166q0-6-4-10t-10-4q-6 0-10 4t-4 10v166q0 6 4 10t10 4Zm-325 2h102q7 0 11-4.5t4-10.5v-102q0-7-4-11t-11-4H155q-6 0-10.5 4t-4.5 11v102q0 6 4.5 10.5T155-334Zm548 0h102q7 0 11-4.5t4-10.5v-102q0-7-4-11t-11-4H703q-6 0-10.5 4t-4.5 11v102q0 6 4.5 10.5T703-334ZM155-494h102q7 0 11-4.5t4-10.5v-102q0-7-4-11t-11-4H155q-6 0-10.5 4t-4.5 11v102q0 6 4.5 10.5T155-494Zm548 0h102q7 0 11-4.5t4-10.5v-102q0-7-4-11t-11-4H703q-6 0-10.5 4t-4.5 11v102q0 6 4.5 10.5T703-494ZM480-600q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-325-54h102q7 0 11-4.5t4-10.5v-102q0-7-4-11t-11-4h-85q-14 0-23 9t-9 23v85q0 6 4.5 10.5T155-654Zm548 0h102q7 0 11-4.5t4-10.5v-85q0-14-9-23t-23-9h-85q-6 0-10.5 4t-4.5 11v102q0 6 4.5 10.5T703-654ZM330-174h300q13 0 21.5-8.5T660-204v-552q0-13-8.5-21.5T630-786H330q-13 0-21.5 8.5T300-756v552q0 13 8.5 21.5T330-174Zm-30-612h360-360Z"/>
    </Icon>
  );
});

IconMaterialMovieInfoW100.displayName = 'AmauiIconMaterialMovieInfoW100';

export default IconMaterialMovieInfoW100;
