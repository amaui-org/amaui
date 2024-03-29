import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRight'

      short_name='ChevronRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.7 17.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialChevronRight.displayName = 'AmauiIconMaterialChevronRight';

export default IconMaterialChevronRight;
