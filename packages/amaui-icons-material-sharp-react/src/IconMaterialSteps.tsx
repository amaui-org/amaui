import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSteps = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Steps'

      short_name='Steps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M736 896h53l11-63-195-195-71-214-133 30-41-39V281l-28-14-156 209h120l440 420Zm-201 0h85L264 556H162l373 340Zm-30 80L27 542l281-377 132 66v134l147-38 88 267 205 205-30 177H505Z"/>
    </Icon>
  );
});

IconMaterialSteps.displayName = 'AmauiIconMaterialSteps';

export default IconMaterialSteps;
