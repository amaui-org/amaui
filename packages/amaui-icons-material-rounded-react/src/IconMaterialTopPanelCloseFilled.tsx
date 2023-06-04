import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseFilled'

      short_name='TopPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m452 624-98 98q-10 10-5 22t19 12h224q14 0 19-12t-5-22l-98-98q-12-12-28-12t-28 12ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm0-440v360h560V496H200Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseFilled.displayName = 'AmauiIconMaterialTopPanelCloseFilled';

export default IconMaterialTopPanelCloseFilled;
