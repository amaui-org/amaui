import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarTagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarTagW100Filled'

      short_name='CarTag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-300l81.9-236H366v28H236l-64 180h343l89 89q-9 5-14.5 14.32-5.5 9.33-5.5 20.68 0 16.67 11.67 28.33Q607.33-336 624-336q10.97 0 19.99-5.5Q653-347 658-356l35 35 55-55v204h-28v-80H160v80h-28Zm124.24-164q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM704-451 466-690v-204h203l239 239-204 204ZM599.96-734q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialCarTagW100Filled.displayName = 'AmauiIconMaterialCarTagW100Filled';

export default IconMaterialCarTagW100Filled;
