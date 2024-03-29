import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastFilled'

      short_name='East'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.3 18.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h15.2l-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l5.6 5.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-5.6 5.6q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialEastFilled.displayName = 'AmauiIconMaterialEastFilled';

export default IconMaterialEastFilled;
