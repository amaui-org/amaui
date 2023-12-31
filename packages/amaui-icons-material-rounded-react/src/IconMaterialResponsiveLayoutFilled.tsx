import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResponsiveLayoutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResponsiveLayoutFilled'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-17 0-28.5-11.5T640-160v-400q0-33-23.5-56.5T560-640H420q-17 0-28.5-11.5T380-680v-120q0-17 11.5-28.5T420-840h380q17 0 28.5 11.5T840-800v640q0 17-11.5 28.5T800-120H680Zm-260 0q-17 0-28.5-11.5T380-160v-360q0-17 11.5-28.5T420-560h100q17 0 28.5 11.5T560-520v360q0 17-11.5 28.5T520-120H420Zm-260 0q-17 0-28.5-11.5T120-160v-360q0-17 11.5-28.5T160-560h100q17 0 28.5 11.5T300-520v360q0 17-11.5 28.5T260-120H160Z"/>
    </Icon>
  );
});

IconMaterialResponsiveLayoutFilled.displayName = 'AmauiIconMaterialResponsiveLayoutFilled';

export default IconMaterialResponsiveLayoutFilled;
