import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeartW100'

      short_name='EcgHeart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M205 624q-35-35-54-78.5T132 457q0-81 50-137t122-56q39 0 75.5 16.5T445 327l35 37 33-35q30-32 67-48.5t75-16.5q72 0 122.5 56T828 456q0 46-19 89.5T755 624L479 900 205 624Zm99-332q-60 0-102 47.5T160 456q0 28 8 54.5t23 51.5h176l69 103 71-215h26l74 112h162q16-25 24-52t7-54q-1-69-43-116.5T655 292q-33 0-64.5 13.5T536 345l-46 49h-21l-46-49q-23-26-54.5-39.5T304 292Zm176 568 269-270H593l-69-103-71 215h-26l-75-112H211l269 270Zm0-284Z"/>
    </Icon>
  );
});

IconMaterialEcgHeartW100.displayName = 'AmauiIconMaterialEcgHeartW100';

export default IconMaterialEcgHeartW100;
