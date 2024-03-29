import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiatryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiatryFilled'

      short_name='Podiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m684 667 179-179 57 57-180 179-56-57ZM40 896V729q35-5 67-20t61-37l70 75 28-28-67-72 15.5-15.5Q222 624 230 615l68 72 29-29-69-71q5-10 10.5-20.5T278 544l81 82 29-29-93-93 41-114 216-214 282 283-414 437H40Z"/>
    </Icon>
  );
});

IconMaterialPodiatryFilled.displayName = 'AmauiIconMaterialPodiatryFilled';

export default IconMaterialPodiatryFilled;
