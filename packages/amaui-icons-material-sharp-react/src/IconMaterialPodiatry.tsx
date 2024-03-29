import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiatry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Podiatry'

      short_name='Podiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m684 667 179-179 57 57-180 179-56-57ZM40 896V729q35-5 67-20t61-37l70 75 28-28-67-72 15.5-15.5Q222 624 230 615l68 72 29-29-69-71q5-10 10.5-20.5T278 544l81 82 29-29-93-93 41-114 216-214 282 283-414 437H40Zm345-80 337-355-337 355Zm-265 0h265l337-355-171-171-146 145-29 81 88 86-230 230-62-67q-13 8-25.5 14T120 790v26Z"/>
    </Icon>
  );
});

IconMaterialPodiatry.displayName = 'AmauiIconMaterialPodiatry';

export default IconMaterialPodiatry;
