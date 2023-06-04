import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeft'

      short_name='ChevronLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.3 17.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L10.8 12l3.9 3.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialChevronLeft.displayName = 'AmauiIconMaterialChevronLeft';

export default IconMaterialChevronLeft;
