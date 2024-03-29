import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightFilled'

      short_name='Height'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.625-2.625Q8.4 17.4 8.4 17t.3-.7q.275-.275.7-.275.425 0 .7.275l.9.9V6.8l-.925.925Q9.8 8 9.4 8t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.625 2.625Q15.6 6.6 15.6 7t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-.9-.9v10.4l.925-.925Q14.2 16 14.6 16t.7.3q.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialHeightFilled.displayName = 'AmauiIconMaterialHeightFilled';

export default IconMaterialHeightFilled;
