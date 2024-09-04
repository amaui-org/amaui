import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarTagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarTagW100'

      short_name='CarTag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256.24-336q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM160-280v-192 192Zm0 28v80h-28v-300l81.9-236H366v28H236l-64 180h343l28 28H160v192h560v-68l28-28v204h-28v-80H160Zm439.96-482q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5ZM704-451 466-690v-204h203l239 239-204 204Zm0-40 164-164-211-211H494v164l210 211Zm-80 155q10.97 0 19.99-5.5Q653-347 658-356l-54-54q-9 5-14.5 14.01-5.5 9.02-5.5 19.99 0 16.67 11.67 28.33Q607.33-336 624-336Zm57-343Z"/>
    </Icon>
  );
});

IconMaterialCarTagW100.displayName = 'AmauiIconMaterialCarTagW100';

export default IconMaterialCarTagW100;
