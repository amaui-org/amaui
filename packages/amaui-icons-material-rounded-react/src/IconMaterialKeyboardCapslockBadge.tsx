import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadge'

      short_name='KeyboardCapslockBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776h320q17 0 28.5-11.5T680 736q0-17-11.5-28.5T640 696H320q-17 0-28.5 11.5T280 736q0 17 11.5 28.5T320 776Zm160-304 116 116q11 11 28 11t28-11q11-11 11-28t-11-28L508 388q-12-12-28-12t-28 12L308 532q-11 11-11 28t11 28q11 11 28 11t28-11l116-116ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm0-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadge.displayName = 'AmauiIconMaterialKeyboardCapslockBadge';

export default IconMaterialKeyboardCapslockBadge;
