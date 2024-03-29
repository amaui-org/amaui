import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledFilled'

      short_name='PlayDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 18.025q-.5.325-1.025.037Q8 17.775 8 17.175V10.8L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.688 0 .412-.3.712-.3.275-.7.275-.4 0-.7-.3L13 15.8Zm6.9-4.425L8 5.15V5l9.675 6.15q.475.275.463.837-.013.563-.488.863Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledFilled.displayName = 'AmauiIconMaterialPlayDisabledFilled';

export default IconMaterialPlayDisabledFilled;
