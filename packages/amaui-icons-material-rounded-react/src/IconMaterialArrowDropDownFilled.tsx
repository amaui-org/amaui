import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownFilled'

      short_name='ArrowDropDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.3 14.3-2.6-2.6q-.475-.475-.212-1.087Q8.75 10 9.425 10h5.15q.675 0 .937.613.263.612-.212 1.087l-2.6 2.6q-.15.15-.325.225-.175.075-.375.075t-.375-.075q-.175-.075-.325-.225Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownFilled.displayName = 'AmauiIconMaterialArrowDropDownFilled';

export default IconMaterialArrowDropDownFilled;
